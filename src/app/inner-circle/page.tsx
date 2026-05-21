import Header from '@/components/Header'
import ChatWidget from '@/components/ChatWidget'
import Link from 'next/link'

export default function InnerCirclePage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <div className="text-5xl mb-6">🎯</div>
        <h1 className="text-4xl font-bold mb-4">Inner Circle</h1>
        <p className="text-xl text-slate-400 mb-8">Die exklusive Community für Energie-Freigeister.</p>

        <div className="card p-8 mb-8">
          <h2 className="text-xl font-semibold mb-6 text-brand-500">Was dich erwartet</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              { icon: '📅', text: 'Live-Sprechstunde jeden Donnerstag, 19:15 Uhr' },
              { icon: '🚀', text: 'Neue Technologien als Erster' },
              { icon: '💧', text: 'Vollzugang Wasserstoff-Heizung & Wasserstoff-Auto' },
              { icon: '💰', text: 'Exklusive Deals und Frühbucher-Konditionen' },
              { icon: '🤝', text: 'Direkter Draht zu Sven' },
              { icon: '📚', text: 'Alle Bücher und Guides komplett' },
            ].map(item => (
              <div key={item.text} className="flex items-start gap-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-slate-300 text-sm leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <Link href="/einstieg" className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors inline-block">
          Inner Circle freischalten
        </Link>
      </div>
      <ChatWidget />
    </main>
  )
}
