import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function StartPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-4">Starte deine <span className="text-cyan-400">Energie-Freiheit</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Wähle deinen Einstieg. Jedes Produkt schaltet dein persönliches Energie-Universum Schritt für Schritt frei.
          </p>
          <p className="text-cyan-400 font-semibold mt-4">✅ 14-Tage-Klarheits-Garantie — volles Rückgaberecht</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Svenflex */}
          <div id="svenflex" className="bg-white/5 border border-cyan-500/30 rounded-2xl p-8 flex flex-col">
            <div className="text-5xl mb-4 text-center">⚡</div>
            <h2 className="text-2xl font-black mb-2">Svenflex</h2>
            <p className="text-cyan-400 font-bold mb-4">Mobiles System</p>
            <ul className="text-gray-300 text-sm space-y-2 mb-8 flex-1">
              <li>✓ Selbst einbaubar</li>
              <li>✓ Für alle Benzin & Diesel-Fahrzeuge</li>
              <li>✓ Probefahrt-Partner-Status</li>
              <li>✓ 250€ Provision pro Empfehlung</li>
            </ul>
            <a href="https://www.sventronik.com/svenflex" target="_blank" rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-full text-center transition-all block">
              Svenflex bestellen →
            </a>
          </div>

          {/* Fix System */}
          <div id="stropt" className="bg-gradient-to-b from-amber-900/30 to-transparent border border-amber-500/40 rounded-2xl p-8 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-xs font-black px-4 py-1 rounded-full">EMPFOHLEN</div>
            <div className="text-5xl mb-4 text-center">🏆</div>
            <h2 className="text-2xl font-black mb-2">Fix System + VIP</h2>
            <p className="text-amber-400 font-bold mb-4">Gesamtpaket 5.486€ Wert</p>
            <div className="text-3xl font-black text-white mb-1">5x 447€</div>
            <div className="text-gray-400 text-sm mb-4">oder einmalig 2.197€</div>
            <ul className="text-gray-300 text-sm space-y-2 mb-8 flex-1">
              <li>✓ Fix System Diesel/Benzin (1.990€)</li>
              <li>✓ VIP Einbau vor Ort (300€)</li>
              <li>✓ System Booster Geheimoptimierung (500€)</li>
              <li>✓ Partner Schulung (480€)</li>
              <li>✓ Dezentrales Konto 250$ (Refi)</li>
              <li>✓ Krypto-Kurs Tim Stern (999€)</li>
              <li>✓ 12 Monate Inner Circle (997€)</li>
            </ul>
            <a href="https://www.sventronik.com/fix" target="_blank" rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-full text-center transition-all block">
              Jetzt sichern →
            </a>
          </div>

          {/* Wasserstoff */}
          <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-8 flex flex-col">
            <div className="text-5xl mb-4 text-center">💧</div>
            <h2 className="text-2xl font-black mb-2">Wasserstoff-Paket</h2>
            <p className="text-blue-400 font-bold mb-4">Die Zukunft heute</p>
            <ul className="text-gray-300 text-sm space-y-2 mb-8 flex-1">
              <li>✓ Wasserstoff-Heizung V3 (neu)</li>
              <li>✓ Wasserstoff im Auto</li>
              <li>✓ Europäisches Innovationszentrum</li>
              <li>✓ Inner Circle Zugang</li>
            </ul>
            <a href="mailto:info@sventronik.com?subject=Wasserstoff-Paket Anfrage"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 py-3 rounded-full text-center transition-all block">
              Anfragen →
            </a>
          </div>
        </div>

        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-black mb-4">Du hast noch Fragen?</h3>
          <p className="text-gray-300 mb-6">Nutze den Chat-Assistenten unten rechts oder schreibe uns direkt.</p>
          <a href="mailto:info@sventronik.com" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
            📧 info@sventronik.com
          </a>
        </div>
      </div>
    </main>
  );
}