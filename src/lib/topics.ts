export type Topic = {
  id: number
  slug: string
  title: string
  category: string
  teaser: string
  icon: string
  level_required: number
  sort_order: number
}

export const TOPICS: Topic[] = [
  // MOBILITÄT
  { id: 1,  slug: 'stroemungsoptimierung',     title: 'Strömungsoptimierung',          category: 'Mobilität',  teaser: 'Weniger Verbrauch, mehr Leistung — durch Physik, nicht durch Chemie.',           icon: '⚡', level_required: 0, sort_order: 1 },
  { id: 2,  slug: 'svenflex-mobil',            title: 'Svenflex Mobil',               category: 'Mobilität',  teaser: 'Das mobile System — flexibel einsetzbar, sofort spürbar.',                         icon: '🚗', level_required: 0, sort_order: 2 },
  { id: 3,  slug: 'stropt-festeinbau',         title: 'STROPT Festeinbau',            category: 'Mobilität',  teaser: 'Permanente Integration für maximale Effizienz.',                                  icon: '🔧', level_required: 1, sort_order: 3 },
  { id: 4,  slug: 'wasserstoff-auto',          title: 'Wasserstoff im Auto',          category: 'Mobilität',  teaser: 'Wasserstoff als Kraftstoffergänzung — die nächste Stufe.',                        icon: '💧', level_required: 1, sort_order: 4 },
  { id: 5,  slug: 'motorrad',                  title: 'Motorrad-Systeme',             category: 'Mobilität',  teaser: 'Effizienz und Fahrspaß — auch für zwei Räder.',                                  icon: '🏍️', level_required: 0, sort_order: 5 },
  { id: 6,  slug: 'lkw-flotten',              title: 'LKW & Flotten',                category: 'Mobilität',  teaser: '26% weniger Verbrauch auf 100 Betonmischern bewiesen.',                          icon: '🚛', level_required: 1, sort_order: 6 },
  // ENERGIE & WÄRME
  { id: 7,  slug: 'wasserstoff-heizung',       title: 'Wasserstoff-Heizung V3',       category: 'Energie',    teaser: 'Heizen ohne Öl, Gas oder Strom — die Lösung für dein Zuhause.',                  icon: '🔥', level_required: 0, sort_order: 7 },
  { id: 8,  slug: 'autarke-stromerzeugung',    title: 'Autarke Stromerzeugung',       category: 'Energie',    teaser: 'Dein Strom, deine Regeln — unabhängig vom Netz.',                                icon: '🌞', level_required: 1, sort_order: 8 },
  { id: 9,  slug: 'innovationszentrum',        title: 'Europäisches Innovationszentrum', category: 'Energie', teaser: 'Das Zentrum für neue Energietechnologien — live erleben.',                       icon: '🏛️', level_required: 0, sort_order: 9 },
  { id: 10, slug: 'energiesouveraenitaet',     title: 'Energy Sovereignty System™',   category: 'Energie',    teaser: 'Energetische, finanzielle und persönliche Freiheit — das Gesamtsystem.',         icon: '🌍', level_required: 0, sort_order: 10 },
  // FINANZEN & REFINANZIERUNG  
  { id: 11, slug: 'selbstzahlprinzip',         title: 'Das Selbstzahl-Prinzip',       category: 'Finanzen',   teaser: 'Dein System zahlt sich selbst — monatlich, automatisch.',                        icon: '💰', level_required: 0, sort_order: 11 },
  { id: 12, slug: 'dezentrale-finanzen',       title: 'Dezentrale Finanzen',          category: 'Finanzen',   teaser: 'Kein Behördenzugriff, kein Mittelmann — dein Geld, deine Kontrolle.',            icon: '🔐', level_required: 1, sort_order: 12 },
  { id: 13, slug: 'krypto-konto',              title: 'Dezentrales Krypto-Konto',     category: 'Finanzen',   teaser: '250$ Startguthaben, 10% monatliche Ausschüttung.',                               icon: '₿',  level_required: 2, sort_order: 13 },
  { id: 14, slug: 'partnerprogramm',           title: 'Partnerprogramm',              category: 'Finanzen',   teaser: '200€ pro Empfehlung, 200€ pro Einbau — baue dein Netzwerk auf.',                icon: '🤝', level_required: 1, sort_order: 14 },
  { id: 15, slug: 'svenfix-vip',               title: 'Svenfix VIP Service',          category: 'Finanzen',   teaser: 'VIP-Einbau vor Ort inkl. Schulung und Partneraufnahme.',                         icon: '⭐', level_required: 0, sort_order: 15 },
  // COMMUNITY & WISSEN
  { id: 16, slug: 'inner-circle',              title: 'Inner Circle',                 category: 'Community',  teaser: 'Exklusiver Zugang, direkte Sprechstunde jeden Donnerstag 19:15 Uhr.',            icon: '🎯', level_required: 3, sort_order: 16 },
  { id: 17, slug: 'probefahrt-netzwerk',       title: 'Probefahrt-Netzwerk',          category: 'Community',  teaser: 'Überzeuge dich selbst — finde einen Partner in deiner Nähe.',                   icon: '🗺️', level_required: 1, sort_order: 17 },
  { id: 18, slug: 'webinare',                  title: 'Webinare & Events',            category: 'Community',  teaser: 'Live-Präsentationen, Q&A-Runden und exklusive Einblicke.',                      icon: '📡', level_required: 0, sort_order: 18 },
  { id: 19, slug: 'beweise-studien',           title: 'Beweise & Studien',            category: 'Wissen',     teaser: '7 unabhängige Praxis-Beweise — messbar, reproduzierbar, offiziell.',             icon: '📊', level_required: 0, sort_order: 19 },
  { id: 20, slug: 'technologie',               title: 'Die Technologie dahinter',     category: 'Wissen',     teaser: 'Wie Strömungsphysik Verbrauch und Leistung verändert.',                          icon: '🔬', level_required: 0, sort_order: 20 },
  { id: 21, slug: 'svens-story',               title: 'Svens Geschichte',             category: 'Wissen',     teaser: 'Von der Entdeckung bis zu 500+ Systemen — die echte Story.',                    icon: '📖', level_required: 0, sort_order: 21 },
  { id: 22, slug: 'buecher',                   title: 'Bücher & Guides',              category: 'Wissen',     teaser: 'Tiefes Wissen zu jedem Thema — kostenlos im Portal.',                           icon: '📚', level_required: 1, sort_order: 22 },
  { id: 23, slug: 'faq',                       title: 'FAQ & Häufige Fragen',         category: 'Wissen',     teaser: 'Alles, was du wissen musst — übersichtlich und klar.',                          icon: '❓', level_required: 0, sort_order: 23 },
]

export const CATEGORIES = [...new Set(TOPICS.map(t => t.category))]

export function getTopicsByCategory(category: string) {
  return TOPICS.filter(t => t.category === category).sort((a, b) => a.sort_order - b.sort_order)
}

export function getTopicBySlug(slug: string) {
  return TOPICS.find(t => t.slug === slug)
}
