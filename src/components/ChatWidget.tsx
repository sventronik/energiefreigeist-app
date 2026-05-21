'use client'
import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hallo! Ich bin dein Energiefreigeist-Assistent. Was möchtest du über Strömungsoptimierung, Wasserstoff oder das Energy Sovereignty System™ wissen?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = async () => {
    if (!input.trim() || loading) return
    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMsg }])
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, history: messages })
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply || 'Ich kann das gerade nicht beantworten. Bitte versuche es später nochmal.' }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Verbindungsfehler — bitte versuche es nochmal.' }])
    }
    setLoading(false)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-brand-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl hover:bg-brand-700 transition z-50"
        aria-label="Chat öffnen"
      >
        {open ? '✕' : '⚡'}
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50" style={{height: '420px'}}>
          {/* Header */}
          <div className="bg-brand-700 text-white px-4 py-3 rounded-t-2xl">
            <div className="font-semibold">⚡ Energiefreigeist Assistent</div>
            <div className="text-xs text-brand-200">Frag mich alles über das Energie-Universum</div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <div className={m.role === 'user' ? 'chat-bubble-user text-sm' : 'chat-bubble-ai text-sm'}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="chat-bubble-ai text-sm text-gray-400">Denke nach...</div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Deine Frage..."
              className="flex-1 text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <button
              onClick={send}
              disabled={loading}
              className="bg-brand-600 text-white px-3 py-2 rounded-xl text-sm hover:bg-brand-700 disabled:opacity-50 transition"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  )
}
