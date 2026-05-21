import { themen } from "@/lib/themen";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export function generateStaticParams() {
  return themen.map(t => ({ id: t.id }));
}

export default function ThemaPage({ params }: { params: { id: string } }) {
  const thema = themen.find(t => t.id === params.id);
  if (!thema) return notFound();

  const levelLabel = ["Öffentlich zugänglich", "Level 1 — Svenflex-Käufer", "Level 2 — Fix System", "Level 3 — Inner Circle"][thema.level];

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Back */}
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 text-sm mb-8 block">
          ← Zurück zur Übersicht
        </Link>

        {/* Header */}
        <div className={`bg-gradient-to-br ${thema.farbe} rounded-2xl p-10 text-center mb-8`}>
          <span className="text-7xl block mb-4">{thema.emoji}</span>
          <h1 className="text-3xl font-black text-white">{thema.titel}</h1>
        </div>

        {/* Level Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-8 ${
          thema.level === 0 ? "bg-green-500/20 text-green-400 border border-green-500/30" :
          thema.level === 1 ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" :
          thema.level === 2 ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" :
          "bg-amber-500/20 text-amber-300 border border-amber-500/30"
        }`}>
          {thema.level === 0 ? "✅" : thema.level === 1 ? "🔓" : thema.level === 2 ? "🔐" : "👑"} {levelLabel}
        </div>

        {/* Content */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4 text-cyan-300">Was ist das?</h2>
          <p className="text-gray-300 leading-relaxed text-lg">{thema.kurztext}</p>
        </div>

        {thema.level === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-4 text-white">Details</h2>
            <p className="text-gray-300 leading-relaxed">{thema.detailtext}</p>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/20 border border-cyan-500/20 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">{thema.level === 3 ? "👑" : "🔐"}</div>
            <h2 className="text-xl font-bold mb-3">
              {thema.level === 3 ? "Inner Circle exklusiv" : `Ab Level ${thema.level} verfügbar`}
            </h2>
            <p className="text-gray-400 mb-6">
              {thema.level === 1 && "Bestelle Svenflex und schalte diesen Bereich frei."}
              {thema.level === 2 && "Das Fix System schaltet diesen Bereich frei."}
              {thema.level === 3 && "Nur für Inner Circle Mitglieder — jeden Donnerstag 19:15 Uhr live mit Sven."}
            </p>
            <Link href="/start" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-full transition-all inline-block">
              Jetzt freischalten →
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}