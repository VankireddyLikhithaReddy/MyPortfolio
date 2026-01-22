import chromadb
from chromadb.utils import embedding_functions
from .config import settings

_COLLECTION_NAME = "resume_knowledge"


def get_collection():
    client = chromadb.PersistentClient(path=settings.chroma_path)
    local_ef = embedding_functions.SentenceTransformerEmbeddingFunction(
        model_name=settings.embedding_model,
    )
    return client.get_or_create_collection(
        name=_COLLECTION_NAME,
        embedding_function=local_ef,
        metadata={"hnsw:space": "cosine"},
    )
