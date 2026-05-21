'use client'
import { useState, useRef, useEffect } from 'react'

type Message = { role: 'user' | 'assistant'; content: string }

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hallo! Ich bin dein Energiefreigeist-Assistent. Was möchtest du über Strömungsoptimierung, Wasserstoff oder das Partnerprogramm wissen? 🌿' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const send = async () => {
    if (!input.trim() || loading) return
    const userMsg: Message = { role: 'user', content: input.trim() }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] })
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Kurze Verbindungspause — bitte nochmal versuchen.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand-500 hover:bg-brand-600 rounded-full shadow-lg flex items-center justify-center text-2xl transition-transform hover:scale-110"
        aria-label="Assistent öffnen"
      >
        {open ? '✕' : '💬'}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-dark-800 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden" style={{ height: '480px' }}>
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex items-center gap-3">
            <span className="text-xl">⚡</span>
            <div>
              <div className="font-semibold text-sm">Energiefreigeist Assistent</div>
              <div className="text-xs text-slate-500">Frag mich alles über Svens Systeme</div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`p-3 text-sm leading-relaxed ${
                m.role === 'user' ? 'chat-bubble-user ml-8 text-right' : 'chat-bubble-ai mr-8'
              }`}>
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="chat-bubble-ai mr-8 p-3 text-sm text-slate-400">
                <span className="animate-pulse">Denkt nach…</span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Deine Frage…"
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-brand-500/50 placeholder-slate-600"
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="bg-brand-500 hover:bg-brand-600 disabled:opacity-40 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  )
}
