"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "ai";
  text: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: "Hallo! Ich bin der Energiefreigeist-Assistent. Frag mich alles zu den Energie-Technologien, Produkten oder dem Offer Stack von Sven Mund! 🌍" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function send() {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages(m => [...m, { role: "user", text: userMsg }]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      setMessages(m => [...m, { role: "ai", text: data.reply || "Entschuldigung, ich konnte keine Antwort abrufen." }]);
    } catch {
      setMessages(m => [...m, { role: "ai", text: "Verbindungsfehler — bitte versuche es erneut." }]);
    }
    setLoading(false);
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 bg-cyan-500 hover:bg-cyan-400 text-black font-black w-16 h-16 rounded-full shadow-2xl shadow-cyan-500/40 transition-all text-2xl flex items-center justify-center"
        aria-label="Chat öffnen"
      >
        {open ? "✕" : "💬"}
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-[#0d1a2e] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 px-5 py-4 flex items-center gap-3">
            <span className="text-2xl">⚡</span>
            <div>
              <div className="font-black text-white text-sm">Energiefreigeist Assistent</div>
              <div className="text-cyan-200 text-xs">Frag mich alles</div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-80">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === "user" ? "chat-bubble-user text-cyan-100" : "chat-bubble-ai text-gray-200"
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="chat-bubble-ai px-4 py-3 rounded-2xl text-sm text-gray-400">
                  ⏳ Denke nach...
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-white/10 p-3 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder="Deine Frage..."
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-cyan-500 transition-colors"
            />
            <button
              onClick={send}
              disabled={loading}
              className="bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-black font-bold px-4 py-2 rounded-xl text-sm transition-all"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}