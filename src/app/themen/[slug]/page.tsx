import { TOPICS, getTopicBySlug } from '@/lib/topics'
import Header from '@/components/Header'
import ChatWidget from '@/components/ChatWidget'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return TOPICS.map(t => ({ slug: t.slug }))
}

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topic = getTopicBySlug(params.slug)
  if (!topic) notFound()

  const levelLabels: Record<number, string> = {
    0: 'Frei zugänglich',
    1: 'Level 1 — Flex-Kunde',
    2: 'Level 2 — Fix-Kunde',
    3: 'Inner Circle',
  }

  return (
    <main className="min-h-screen pt-20">
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/themen" className="text-sm text-slate-500 hover:text-brand-500 transition-colors mb-8 inline-flex items-center gap-1">
          ← Zurück zu allen Themen
        </Link>

        <div className="card p-8 mt-4">
          <div className="flex items-start justify-between mb-6">
            <span className="text-5xl">{topic.icon}</span>
            <span className="text-xs text-slate-500 bg-white/5 px-3 py-1 rounded-full">
              {levelLabels[topic.level_required]}
            </span>
          </div>

          <div className="text-sm text-brand-500 font-semibold mb-2 uppercase tracking-wider">{topic.category}</div>
          <h1 className="text-3xl font-bold mb-4">{topic.title}</h1>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">{topic.teaser}</p>

          {topic.level_required === 0 ? (
            <div className="space-y-4">
              <div className="bg-brand-500/10 border border-brand-500/20 rounded-xl p-6">
                <h3 className="font-semibold text-brand-500 mb-2">Was dich hier erwartet</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Detaillierte Informationen zu diesem Thema, Praxis-Beweise, Video-Erklärungen
                  und alles was du brauchst um eine fundierte Entscheidung zu treffen.
                  Melde dich an oder starte mit einem Einstiegsprodukt.
                </p>
              </div>
              <Link href="/einstieg" className="block w-full text-center bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3 rounded-xl transition-colors">
                Kostenlos registrieren / Einsteigen
              </Link>
            </div>
          ) : (
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-semibold mb-2">Freischaltung erforderlich</h3>
              <p className="text-slate-400 text-sm mb-4">
                Dieser Bereich ist für {levelLabels[topic.level_required]}-Mitglieder.
              </p>
              <Link href="/einstieg" className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors inline-block">
                Jetzt freischalten
              </Link>
            </div>
          )}
        </div>
      </div>
      <ChatWidget />
    </main>
  )
}
