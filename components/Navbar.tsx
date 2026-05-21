"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-black text-xl">
          ⚡ <span className="text-white">Energie<span className="text-cyan-400">freigeist</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/themen" className="text-gray-300 hover:text-cyan-400 transition-colors">Themen</Link>
          <Link href="/start" className="text-gray-300 hover:text-cyan-400 transition-colors">Einsteigen</Link>
          <Link href="/probefahrt" className="text-gray-300 hover:text-cyan-400 transition-colors">Probefahrt</Link>
          <Link href="/inner-circle" className="text-gray-300 hover:text-cyan-400 transition-colors">Inner Circle</Link>
        </div>
        <Link href="/start" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-5 py-2 rounded-full text-sm transition-all">
          Jetzt starten →
        </Link>
      </div>
    </nav>
  );
}