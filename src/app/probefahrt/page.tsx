import Header from '@/components/Header'
import ChatWidget from '@/components/ChatWidget'
import Link from 'next/link'

export default function ProbefahrtPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">🗺️</div>
          <h1 className="text-4xl font-bold mb-4">Probefahrt-Netzwerk</h1>
          <p className="text-slate-400 text-lg">
            564 Partner in Deutschland, Österreich und der Schweiz.
            Überzeuge dich selbst — vor deiner Entscheidung.
          </p>
        </div>

        <div className="card p-6 mb-6">
          <h2 className="font-semibold text-brand-500 mb-4">So funktioniert es</h2>
          <ol className="space-y-3">
            {[
              'Du gibst deine PLZ ein — wir zeigen dir Partner in deiner Nähe.',
              'Du kontaktierst einen Partner und vereinbarst eine Probefahrt.',
              'Du fährst selbst — und spürst den Unterschied.',
              'Du entscheidest — mit eigener Erfahrung, nicht nur auf dem Papier.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-500 text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="card p-6 text-center">
          <p className="text-slate-400 text-sm mb-4">Die interaktive Probefahrt-Karte wird in Kürze freigeschaltet.</p>
          <Link href="/einstieg" className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors inline-block">
            Als Probefahrt-Partner eintragen
          </Link>
        </div>
      </div>
      <ChatWidget />
    </main>
  )
}
