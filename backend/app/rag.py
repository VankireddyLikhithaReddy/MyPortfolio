import json
from typing import Dict, List, Optional
from openai import OpenAI
from .config import settings
from .vector_store import get_collection

_client_kwargs = {"api_key": settings.openai_api_key}
if settings.openai_base_url:
    _client_kwargs["base_url"] = settings.openai_base_url
if settings.openai_http_referer or settings.openai_app_title:
    _client_kwargs["default_headers"] = {
        "HTTP-Referer": settings.openai_http_referer,
        "X-Title": settings.openai_app_title,
    }

client = OpenAI(**_client_kwargs)

SYSTEM_PROMPT = (
    "You are Roy, a recruiter-facing resume assistant. "
    "Use the provided tools to retrieve facts from the knowledge base. "
    "Always call at least one retrieval tool for non-greeting questions. "
    "Answer only using retrieved context. Do not guess or add new information. "
    "If the answer is not in the knowledge base, reply exactly: "
    "\"That information is not available in my resume. Please feel free to ask something else.\""
)

FALLBACK_MESSAGE = (
    "That information is not available in my resume. Please feel free to ask something else."
)


def _query_collection(query: str, source: Optional[str], top_k: int) -> List[Dict[str, str]]:
    collection = get_collection()
    where = {"source": source} if source else None
    results = collection.query(
        query_texts=[query],
        n_results=top_k,
        where=where,
    )
    documents = results.get("documents", [[]])[0]
    metadatas = results.get("metadatas", [[]])[0]
    payload = []
    for doc, meta in zip(documents, metadatas):
        payload.append({"text": doc, "source": meta.get("source", "unknown")})
    return payload


def retrieve_resume(query: str) -> List[Dict[str, str]]:
    return _query_collection(query, "resume", settings.top_k)


def retrieve_projects(query: str) -> List[Dict[str, str]]:
    return _query_collection(query, "projects", settings.top_k)


def retrieve_experience(query: str) -> List[Dict[str, str]]:
    return _query_collection(query, "experience", settings.top_k)


def retrieve_skills(query: str) -> List[Dict[str, str]]:
    return _query_collection(query, "skills", settings.top_k)


def retrieve_visa_info(query: str) -> List[Dict[str, str]]:
    return _query_collection(query, "visa", settings.top_k)


def retrieve_compensation(query: str) -> List[Dict[str, str]]:
    return _query_collection(query, "compensation", settings.top_k)


def build_tools() -> List[Dict[str, object]]:
    return [
        {
            "type": "function",
            "function": {
                "name": "retrieve_resume",
                "description": "Retrieve general resume details such as summary, education, or contact.",
                "parameters": {
                    "type": "object",
                    "properties": {"query": {"type": "string"}},
                    "required": ["query"],
                },
            },
        },
        {
            "type": "function",
            "function": {
                "name": "retrieve_projects",
                "description": "Retrieve project details and outcomes.",
                "parameters": {
                    "type": "object",
                    "properties": {"query": {"type": "string"}},
                    "required": ["query"],
                },
            },
        },
        {
            "type": "function",
            "function": {
                "name": "retrieve_experience",
                "description": "Retrieve professional experience details and responsibilities.",
                "parameters": {
                    "type": "object",
                    "properties": {"query": {"type": "string"}},
                    "required": ["query"],
                },
            },
        },
        {
            "type": "function",
            "function": {
                "name": "retrieve_skills",
                "description": "Retrieve skills, tools, and technologies.",
                "parameters": {
                    "type": "object",
                    "properties": {"query": {"type": "string"}},
                    "required": ["query"],
                },
            },
        },
        {
            "type": "function",
            "function": {
                "name": "retrieve_visa_info",
                "description": "Retrieve visa, relocation, and eligibility details.",
                "parameters": {
                    "type": "object",
                    "properties": {"query": {"type": "string"}},
                    "required": ["query"],
                },
            },
        },
        {
            "type": "function",
            "function": {
                "name": "retrieve_compensation",
                "description": "Retrieve compensation and salary expectations.",
                "parameters": {
                    "type": "object",
                    "properties": {"query": {"type": "string"}},
                    "required": ["query"],
                },
            },
        },
    ]


def _call_tool(name: str, args: Dict[str, str]) -> List[Dict[str, str]]:
    query = args.get("query", "")
    if name == "retrieve_resume":
        return retrieve_resume(query)
    if name == "retrieve_projects":
        return retrieve_projects(query)
    if name == "retrieve_experience":
        return retrieve_experience(query)
    if name == "retrieve_skills":
        return retrieve_skills(query)
    if name == "retrieve_visa_info":
        return retrieve_visa_info(query)
    if name == "retrieve_compensation":
        return retrieve_compensation(query)
    return []


def _format_context(chunks: List[Dict[str, str]]) -> str:
    if not chunks:
        return ""
    lines = []
    for item in chunks:
        lines.append(f"[{item['source']}] {item['text']}")
    return "\n".join(lines)


def _route_sources(query: str) -> List[str]:
    q = query.lower()
    sources = []
    if any(token in q for token in ["project", "beyond sight", "weather", "shelter"]):
        sources.append("projects")
    if any(token in q for token in ["experience", "work", "role", "citi", "zensar"]):
        sources.append("experience")
    if any(token in q for token in ["skill", "technology", "tech", "stack", "frontend", "backend", "cloud"]):
        sources.append("skills")
    if any(token in q for token in ["visa", "opt", "stem", "sponsorship", "relocation"]):
        sources.append("visa")
    if any(
        token in q
        for token in [
            "salary",
            "compensation",
            "pay",
            "package",
            "ctc",
            "salary range",
            "compensation range",
            "comp range",
        ]
    ):
        sources.append("compensation")
    if any(token in q for token in ["summary", "about", "yourself", "background", "education", "certification", "contact"]):
        sources.append("resume")
    return sources or ["resume", "experience"]


def _retrieve_context(query: str) -> str:
    chunks: List[Dict[str, str]] = []
    for source in _route_sources(query):
        chunks.extend(_query_collection(query, source, settings.top_k))
    return _format_context(chunks)


def run_agent(user_message: str, memory: List[Dict[str, str]]) -> str:
    if not settings.openai_api_key:
        return FALLBACK_MESSAGE

    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    messages.extend(memory)
    messages.append({"role": "user", "content": user_message})

    tools = build_tools()

    for _ in range(2):
        response = client.chat.completions.create(
            model=settings.chat_model,
            messages=messages,
            tools=tools,
            tool_choice="auto",
            temperature=0.2,
        )
        message = response.choices[0].message
        if message.tool_calls:
            tool_calls_payload = [tool_call.model_dump() for tool_call in message.tool_calls]
            messages.append(
                {
                    "role": "assistant",
                    "content": message.content or "",
                    "tool_calls": tool_calls_payload,
                }
            )
            for tool_call in message.tool_calls:
                name = tool_call.function.name
                args = json.loads(tool_call.function.arguments or "{}")
                results = _call_tool(name, args)
                context = _format_context(results)
                messages.append(
                    {
                        "role": "tool",
                        "tool_call_id": tool_call.id,
                        "name": name,
                        "content": context or "",
                    }
                )
            continue

        content = (message.content or "").strip()
        if content:
            return content

        # If the model didn't call tools, retrieve context directly and retry once.
        context = _retrieve_context(user_message)
        if not context:
            return FALLBACK_MESSAGE
        followup = client.chat.completions.create(
            model=settings.chat_model,
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "system", "content": f"Context:\\n{context}"},
                {"role": "user", "content": user_message},
            ],
            temperature=0.2,
        )
        follow_content = (followup.choices[0].message.content or "").strip()
        return follow_content or FALLBACK_MESSAGE

    return FALLBACK_MESSAGE
