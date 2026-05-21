"use client";
import { useState } from "react";
import Link from "next/link";
import { kategorien, themen } from "@/lib/themen";
import ThemaCard from "@/components/ThemaCard";
import ChatWidget from "@/components/ChatWidget";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [aktivKategorie, setAktivKategorie] = useState("alle");

  const gefiltert = aktivKategorie === "alle"
    ? themen
    : themen.filter(t => t.kategorie === aktivKategorie);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-transparent pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Das Energie-Universum von Sven Mund
          </p>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Energie<span className="text-cyan-400">freigeist</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Energetische Freiheit. Finanzielle Freiheit. Persönliche Freiheit.
            <br />
            <span className="text-cyan-300">23 Technologien. Ein System. Deine Unabhängigkeit.</span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/themen" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-full transition-all text-lg">
              Alle Themen entdecken →
            </Link>
            <Link href="/start" className="border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 font-semibold px-8 py-4 rounded-full transition-all text-lg">
              Jetzt einsteigen
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/10 bg-white/5 py-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-6">
          {[
            { n: "500+", l: "Systeme verkauft" },
            { n: "23", l: "Energie-Themen" },
            { n: "92", l: "Probefahrt-Partner" },
            { n: "Do 19:15", l: "Inner Circle Live" },
          ].map(s => (
            <div key={s.n}>
              <div className="text-3xl font-black text-cyan-400">{s.n}</div>
              <div className="text-sm text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Kategorie Filter */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-4">
        <h2 className="text-3xl font-black mb-8 text-center">Das Energie-Universum</h2>
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {kategorien.map(k => (
            <button
              key={k.id}
              onClick={() => setAktivKategorie(k.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                aktivKategorie === k.id
                  ? "bg-cyan-500 border-cyan-500 text-black"
                  : "border-white/20 text-gray-300 hover:border-cyan-500/50 hover:text-white"
              }`}
            >
              {k.emoji} {k.label}
            </button>
          ))}
        </div>
      </section>

      {/* Themen Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {gefiltert.map(t => (
            <ThemaCard key={t.id} thema={t} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/10 bg-gradient-to-br from-cyan-900/30 to-blue-900/20 py-20 px-6 text-center">
        <h2 className="text-3xl font-black mb-4">Bereit für deine Energie-Freiheit?</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Starte mit einem Einstiegsprodukt und schalte nach und nach dein persönliches Energie-Universum frei.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/start#svenflex" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-full transition-all">
            Svenflex — Mobil starten
          </Link>
          <Link href="/start#stropt" className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-full transition-all">
            Fix System + VIP Einbau
          </Link>
        </div>
        <p className="text-sm text-cyan-400/70 mt-6">✅ 14-Tage-Klarheits-Garantie — Kein Risiko</p>
      </section>

      <ChatWidget />
    </main>
  );
}