"use client";
import Link from "next/link";
import { Thema } from "@/lib/themen";

const levelBadge: Record<number, string> = {
  0: "Öffentlich",
  1: "Level 1",
  2: "Level 2",
  3: "Inner Circle",
};

export default function ThemaCard({ thema }: { thema: Thema }) {
  return (
    <Link href={`/themen/${thema.id}`}>
      <div className="card-hover rounded-2xl border border-white/10 bg-white/5 overflow-hidden h-full flex flex-col cursor-pointer">
        {/* Gradient Header */}
        <div className={`bg-gradient-to-br ${thema.farbe} p-6 text-center`}>
          <span className="text-5xl">{thema.emoji}</span>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs font-bold px-2 py-1 rounded-full ${
              thema.level === 0 ? "bg-green-500/20 text-green-400" :
              thema.level === 1 ? "bg-cyan-500/20 text-cyan-400" :
              thema.level === 2 ? "bg-yellow-500/20 text-yellow-400" :
              "bg-amber-500/20 text-amber-300"
            }`}>
              {levelBadge[thema.level]}
            </span>
            <span className="text-xs text-gray-500 capitalize">{thema.kategorie}</span>
          </div>
          <h3 className="font-bold text-white mb-2 leading-snug">{thema.titel}</h3>
          <p className="text-sm text-gray-400 leading-relaxed flex-1">{thema.kurztext}</p>
          <div className="mt-4 text-cyan-400 text-sm font-semibold">
            Mehr erfahren →
          </div>
        </div>
      </div>
    </Link>
  );
}