export interface Thema {
  id: string
  slug: string
  titel: string
  emoji: string
  teaser: string
  kategorie: string
  level: number
}

export const themen: Thema[] = [
  { id: '01', slug: 'stroemungsoptimierung', titel: 'Strömungsoptimierung', emoji: '💨', teaser: 'Weniger Verbrauch, mehr Leistung — durch Optimierung der Verbrennungsluft im Motor.', kategorie: 'Mobilität', level: 0 },
  { id: '02', slug: 'svenflex', titel: 'Svenflex — mobiles System', emoji: '🔧', teaser: 'Das flexible, mobile Strömungssystem fürs Auto. Leicht eingebaut, sofort wirksam.', kategorie: 'Mobilität', level: 1 },
  { id: '03', slug: 'sventronik-fix', titel: 'Sventronik Fix System', emoji: '⚙️', teaser: 'Das fest eingebaute Profi-System für dauerhaft optimale Verbrennung.', kategorie: 'Mobilität', level: 1 },
  { id: '04', slug: 'wasserstoff-auto', titel: 'Wasserstoff im Auto', emoji: '🚗', teaser: 'Wasserstoff als Kraftstoff-Additiv — sauberere Verbrennung, mehr Kilometerleistung.', kategorie: 'Mobilität', level: 2 },
  { id: '05', slug: 'wasserstoff-heizung', titel: 'Wasserstoff-Heizung', emoji: '🏠', teaser: 'Die nächste Generation der Hausheizung — Wasserstoff statt Gas. Version 3 kommt.', kategorie: 'Energie Zuhause', level: 2 },
  { id: '06', slug: 'autarke-stromerzeugung', titel: 'Autarke Stromerzeugung', emoji: '⚡', teaser: 'Unabhängig vom Netz — erzeuge deinen eigenen Strom zuverlässig und kostengünstig.', kategorie: 'Energie Zuhause', level: 2 },
  { id: '07', slug: 'energie-souveraenitaet', titel: 'Energy Sovereignty System™', emoji: '🌍', teaser: 'Das übergeordnete Framework: energetische, finanzielle und persönliche Freiheit.', kategorie: 'System', level: 0 },
  { id: '08', slug: 'refi-prinzip', titel: 'Refinanzierungs-Prinzip', emoji: '💰', teaser: 'Dein System zahlt sich selbst — monatliche Ausschüttungen aus dem Krypto-Konto.', kategorie: 'Finanzen', level: 1 },
  { id: '09', slug: 'dezentrale-finanzen', titel: 'Dezentrale Finanzen', emoji: '🔐', teaser: 'Kein Behörden-Zugriff, volle Kontrolle. Das dezentrale Konto für Energie-Freigeister.', kategorie: 'Finanzen', level: 2 },
  { id: '10', slug: 'krypto-kurs', titel: 'Krypto-Kurs (cryptochampion)', emoji: '📈', teaser: 'Der Kurs von Tim Stern — Grundlagen und Strategie für dezentrale Finanzen.', kategorie: 'Finanzen', level: 2 },
  { id: '11', slug: 'partnerprogramm', titel: 'Partnerprogramm', emoji: '🤝', teaser: '200€ pro Empfehlung, 200€ pro Einbau. Baue dir ein passives Einkommen auf.', kategorie: 'Community', level: 1 },
  { id: '12', slug: 'probefahrt-netzwerk', titel: 'Probefahrt-Netzwerk', emoji: '🗺️', teaser: 'Werde Probefahrt-Partner und teile dein Svenflex mit Interessenten in deiner Region.', kategorie: 'Community', level: 1 },
  { id: '13', slug: 'inner-circle', titel: 'Inner Circle', emoji: '⭐', teaser: 'Exklusiver Zugang: wöchentliche Sprechstunde, alle Themen, alle Neuheiten zuerst.', kategorie: 'Community', level: 3 },
  { id: '14', slug: 'svenfix-vip', titel: 'Svenfix VIP Einbau-Service', emoji: '🏆', teaser: 'Ein geschulter Einbaupartner kommt direkt zu dir — inklusive Probefahrt und Schulung.', kategorie: 'Service', level: 1 },
  { id: '15', slug: 'system-booster', titel: 'Geheimer System Booster', emoji: '🚀', teaser: 'Geheime Optimierungen die das System gegenüber der Hersteller-Variante deutlich steigern.', kategorie: 'Mobilität', level: 2 },
  { id: '16', slug: 'einbau-schulung', titel: 'Einbau-Schulung', emoji: '📚', teaser: 'Lerne selbst einzubauen und werde qualifizierter Einbaupartner im Netzwerk.', kategorie: 'Wissen', level: 2 },
  { id: '17', slug: 'europaeisches-wasserstoff-zentrum', titel: 'Europäisches Wasserstoff-Zentrum', emoji: '🏭', teaser: 'Das entstehende Zentrum für Wasserstoff-Innovation und energetische Autarkie in Europa.', kategorie: 'Vision', level: 0 },
  { id: '18', slug: 'motorrad-optimierung', titel: 'Motorrad-Optimierung', emoji: '🏍️', teaser: 'Strömungsoptimierung speziell für Motorräder — weniger Vibrationen, mehr Effizienz.', kategorie: 'Mobilität', level: 1 },
  { id: '19', slug: 'lkw-flotten', titel: 'LKW & Flotten-Lösungen', emoji: '🚛', teaser: 'Bewährte Lösungen für Flotten — bis zu 26% Verbrauchsersparnis nachgewiesen.', kategorie: 'Gewerbe', level: 1 },
  { id: '20', slug: 'praxis-beweise', titel: 'Praxis-Beweise', emoji: '🔬', teaser: '7 unabhängige Belege: Rennstrecke, Prüfstand, Labor, Flotten — alle zeigen dasselbe.', kategorie: 'Wissen', level: 0 },
  { id: '21', slug: 'offer-stack', titel: 'Das Gesamtpaket', emoji: '📦', teaser: 'Alles in einem: System + VIP-Einbau + Booster + Schulung + Krypto + Inner Circle.', kategorie: 'Produkte', level: 0 },
  { id: '22', slug: 'events', titel: 'Events & Sprechstunden', emoji: '📅', teaser: 'Inner Circle-Sprechstunde jeden Donnerstag 19:15 Uhr. Alle Events auf einen Blick.', kategorie: 'Community', level: 1 },
  { id: '23', slug: 'svens-story', titel: 'Svens Geschichte', emoji: '👤', teaser: 'Vom Entdecker zum Netzwerkbauer — wie Sven Mund das Energie-Universum aufgebaut hat.', kategorie: 'Vision', level: 0 }
]

export const kategorien = [...new Set(themen.map(t => t.kategorie))]
