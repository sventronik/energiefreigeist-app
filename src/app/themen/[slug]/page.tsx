import { themen } from '@/lib/themen'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return themen.map(t => ({ slug: t.slug }))
}

export default function ThemaPage({ params }: { params: { slug: string } }) {
  const thema = themen.find(t => t.slug === params.slug)
  if (!thema) notFound()

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/themen" className="text-brand-600 hover:underline text-sm mb-6 inline-block">← Alle Themen</Link>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="text-5xl mb-4">{thema.emoji}</div>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-brand-600 bg-brand-50 px-3 py-1 rounded-full">{thema.kategorie}</span>
          {thema.level > 0 && (
            <span className="text-xs text-amber-600 bg-amber-50 px-3 py-1 rounded-full">🔒 Level {thema.level}+</span>
          )}
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{thema.titel}</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">{thema.teaser}</p>

        {thema.level === 0 ? (
          <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
            <p className="text-brand-800 font-medium mb-2">✅ Freier Bereich</p>
            <p className="text-brand-700 text-sm">Dieses Thema ist für alle zugänglich. Weitere Details findest du nach dem Einloggen.</p>
          </div>
        ) : (
          <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
            <p className="text-amber-800 font-medium mb-2">🔒 Level {thema.level} erforderlich</p>
            <p className="text-amber-700 text-sm mb-4">Für tiefere Einblicke zu diesem Thema benötigst du Level {thema.level}. Steige jetzt ein.</p>
            <Link href="/login" className="bg-brand-600 text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-brand-700 transition inline-block">Einloggen / Einsteigen</Link>
          </div>
        )}
      </div>
    </main>
  )
}
