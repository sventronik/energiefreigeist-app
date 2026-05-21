import Link from 'next/link'
import { themen } from '@/lib/themen'

export default function ThemenPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <Link href="/" className="text-brand-600 hover:underline text-sm mb-6 inline-block">← Zurück zur Startseite</Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Alle 23 Themen</h1>
      <p className="text-gray-500 mb-10">Das vollständige Energie-Universum von Sven Mund</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {themen.map(thema => (
          <Link
            key={thema.id}
            href={`/themen/${thema.slug}`}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 card-hover block"
          >
            <div className="text-3xl mb-3">{thema.emoji}</div>
            <div className="font-semibold text-gray-900 mb-1">{thema.titel}</div>
            <div className="text-sm text-gray-500 mb-3">{thema.teaser}</div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">{thema.kategorie}</span>
              {thema.level > 0 && (
                <span className="text-xs text-gray-400">Level {thema.level}+</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
