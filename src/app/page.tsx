import Link from 'next/link'
import { TOPICS, CATEGORIES, getTopicsByCategory } from '@/lib/topics'
import ChatWidget from '@/components/ChatWidget'
import TopicCard from '@/components/TopicCard'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/20 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 text-sm text-brand-500 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            Energy Sovereignty System™
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Willkommen im<br />
            <span className="text-brand-500">Energie-Universum</span>
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            23 Themen rund um Energetische, Finanzielle und Persönliche Freiheit.
            Entdecke neue Technologien — und wie sie sich selbst bezahlen.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/themen" className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              Alle Themen entdecken
            </Link>
            <Link href="/einstieg" className="border border-white/20 hover:border-brand-500/50 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              Jetzt einsteigen
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '23', label: 'Themen' },
            { value: '500+', label: 'Systeme verkauft' },
            { value: '26%', label: 'Verbrauchsersparnis' },
            { value: '564', label: 'Netzwerk-Partner' },
          ].map(stat => (
            <div key={stat.label} className="card p-4 text-center">
              <div className="text-2xl font-bold text-brand-500">{stat.value}</div>
              <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Topics by category */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Dein Energie-Universum</h2>
        {CATEGORIES.map(cat => (
          <div key={cat} className="mb-10">
            <h3 className="text-lg font-semibold text-brand-500 mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-brand-500" />
              {cat}
              <span className="w-6 h-px bg-brand-500" />
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {getTopicsByCategory(cat).map(topic => (
                <TopicCard key={topic.id} topic={topic} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Inner Circle CTA */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="card p-8 text-center border-brand-500/30">
          <div className="text-3xl mb-3">🎯</div>
          <h3 className="text-xl font-bold mb-2">Inner Circle — Jeden Donnerstag, 19:15 Uhr</h3>
          <p className="text-slate-400 mb-6">Direkte Sprechstunde mit Sven. Live Q&A, exklusive Updates, neue Technologien als Erster.</p>
          <Link href="/inner-circle" className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors inline-block">
            Mehr erfahren
          </Link>
        </div>
      </section>

      <ChatWidget />
    </main>
  )
}
