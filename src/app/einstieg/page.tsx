import Header from '@/components/Header'
import ChatWidget from '@/components/ChatWidget'
import Link from 'next/link'

const products = [
  {
    icon: '🚗',
    title: 'Svenflex Mobil',
    subtitle: 'Einstieg Mobilität',
    price: 'Ab sofort',
    description: 'Das mobile Strömungsoptimierungssystem — flexibel, sofort spürbar, nachweislich wirksam.',
    perks: ['Sofort einbaubar', '250€ Provision bei Weiterempfehlung', 'Probefahrt-Partner-Status'],
    cta: 'Svenflex bestellen',
    href: 'https://sventronik.com',
    color: 'brand',
  },
  {
    icon: '🔧',
    title: 'Sventronik Fix System',
    subtitle: 'Komplett-Paket',
    price: '5x447€ oder 2.197€',
    description: 'Das Gesamt-Paket: Fix-System + VIP Einbau + Schulung + Krypto-Konto + Inner Circle. Wert 5.486€.',
    perks: ['VIP Einbau vor Ort', 'Dezentrales Krypto-Konto', 'Inner Circle Zugang', '200€ Provision pro Empfehlung'],
    cta: 'Fix System sichern',
    href: 'https://sventronik.com',
    color: 'yellow',
  },
  {
    icon: '💧',
    title: 'Wasserstoff-Paket',
    subtitle: 'Zukunft Energie',
    price: 'Anfragen',
    description: 'Wasserstoff-Heizung V3 + Wasserstoff im Auto — die komplette Energie-Souveränität für Haus und Auto.',
    perks: ['Heizung V3 (neue Generation)', 'Wasserstoff im Auto', 'Innovationszentrum-Zugang'],
    cta: 'Anfragen',
    href: 'mailto:info@sventronik.com',
    color: 'blue',
  },
]

export default function EinstiegPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Jetzt einsteigen</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Wähle deinen Einstieg ins Energie-Universum. Jedes Produkt öffnet die nächste Stufe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(p => (
            <div key={p.title} className="card p-6 flex flex-col">
              <div className="text-4xl mb-4">{p.icon}</div>
              <div className="text-xs text-brand-500 font-semibold uppercase tracking-wider mb-1">{p.subtitle}</div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-1">{p.description}</p>
              <ul className="space-y-1 mb-6">
                {p.perks.map(perk => (
                  <li key={perk} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-brand-500 text-xs">✓</span> {perk}
                  </li>
                ))}
              </ul>
              <div className="text-lg font-bold text-brand-500 mb-4">{p.price}</div>
              <Link
                href={p.href}
                className="block text-center bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <ChatWidget />
    </main>
  )
}
