import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-2xl">⚡</span>
          <span>Energie<span className="text-brand-500">freigeist</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
          <Link href="/themen" className="hover:text-white transition-colors">Themen</Link>
          <Link href="/probefahrt" className="hover:text-white transition-colors">Probefahrt</Link>
          <Link href="/inner-circle" className="hover:text-white transition-colors">Inner Circle</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/einstieg" className="text-sm bg-brand-500 hover:bg-brand-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors">
            Jetzt einsteigen
          </Link>
        </div>
      </div>
    </header>
  )
}
