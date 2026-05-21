import Link from 'next/link'
import { themen, kategorien } from '@/lib/themen'
import ChatWidget from '@/components/ChatWidget'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 text-white">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <div className="text-5xl mb-4">⚡</div>
          <h1 className="text-4xl font-bold mb-4">Energiefreigeist</h1>
          <p className="text-xl text-brand-100 mb-2">Dein Energie-Universum</p>
          <p className="text-brand-200 max-w-lg mx-auto">
            Strömungsoptimierung · Wasserstoff · Autarkie · Dezentrale Finanzen
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Link href="/themen" className="bg-white text-brand-700 font-semibold px-6 py-3 rounded-xl hover:bg-brand-50 transition">
              Alle Themen erkunden
            </Link>
            <Link href="/login" className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white/10 transition">
              Einloggen
            </Link>
          </div>
        </div>
      </div>

      {/* Kategorien-Übersicht */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Das Energie-Universum</h2>
        {kategorien.map(kat => (
          <div key={kat} className="mb-10">
            <h3 className="text-lg font-semibold text-brand-700 mb-4 border-b border-brand-100 pb-2">{kat}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {themen.filter(t => t.kategorie === kat).map(thema => (
                <Link
                  key={thema.id}
                  href={`/themen/${thema.slug}`}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 card-hover block"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{thema.emoji}</span>
                    <div>
                      <div className="font-semibold text-gray-900">{thema.titel}</div>
                      <div className="text-sm text-gray-500 mt-1">{thema.teaser}</div>
                      {thema.level > 0 && (
                        <span className="inline-block mt-2 text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full">
                          Level {thema.level}+
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Einstiegsprodukte CTA */}
      <div className="bg-brand-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Jetzt einsteigen</h2>
          <p className="text-brand-200 mb-8">Wähle dein Einstiegsprodukt und schalte dein persönliches Level frei</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">🔧</div>
              <div className="font-bold mb-1">Svenflex</div>
              <div className="text-sm text-brand-200 mb-4">Das mobile System</div>
              <Link href="/produkte/svenflex" className="bg-white text-brand-700 text-sm font-semibold px-4 py-2 rounded-lg block hover:bg-brand-50 transition">Mehr erfahren</Link>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">⚙️</div>
              <div className="font-bold mb-1">Fix System</div>
              <div className="text-sm text-brand-200 mb-4">Das Fest-Einbau-System</div>
              <Link href="/produkte/fix-system" className="bg-brand-500 text-white text-sm font-semibold px-4 py-2 rounded-lg block hover:bg-brand-400 transition">Jetzt sichern</Link>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">💧</div>
              <div className="font-bold mb-1">Wasserstoff-Paket</div>
              <div className="text-sm text-brand-200 mb-4">Zukunft der Energie</div>
              <Link href="/produkte/wasserstoff" className="bg-white text-brand-700 text-sm font-semibold px-4 py-2 rounded-lg block hover:bg-brand-50 transition">Mehr erfahren</Link>
            </div>
          </div>
        </div>
      </div>

      <ChatWidget />
    </main>
  )
}
