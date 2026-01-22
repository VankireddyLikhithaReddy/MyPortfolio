import { useState } from "react";
import "./ResumeChatWidget.css";

export default function ResumeChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I’m Santosh’s AI Resume Assistant. Ask me anything about his experience." }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    const res = await fetch("https://YOUR_BACKEND_URL/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: input })
    });

    const data = await res.json();
    setMessages(prev => [...prev, { from: "bot", text: data.answer }]);
  };

  return (
    <div className="chat-widget">
      {!open && (
        <button className="chat-toggle" onClick={() => setOpen(true)}>
          💬 Chat with AI
        </button>
      )}

      {open && (
        <div className="chat-box">
          <div className="chat-header">
            <span>AI Resume Assistant</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.from}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about experience, projects…"
              onKeyDown={e => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
