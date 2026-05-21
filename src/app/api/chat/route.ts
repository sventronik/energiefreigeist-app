import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

type Message = { role: 'user' | 'assistant' | 'system'; content: string }

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json() as { messages: Message[] }
    const lastMessage = messages[messages.length - 1]?.content ?? ''

    const systemPrompt = `Du bist der Energiefreigeist-Assistent von Sven Mund. 
Du kennst alle 23 Themen des Energie-Universums:
- Strömungsoptimierung (Svenflex Mobil, STROPT Festeinbau)
- Wasserstoff im Auto und Wasserstoff-Heizung V3
- Autarke Stromerzeugung, Energy Sovereignty System™
- Svenfix VIP Service (300€ Wert, VIP Einbau vor Ort)
- Partnerprogramm (200€ pro Empfehlung, 200€ pro Einbau)
- Dezentrales Krypto-Konto (250$ Startguthaben, 10% monatlich)
- Inner Circle (Donnerstag 19:15 Uhr Sprechstunde)
- Probefahrt-Netzwerk (564 Partner in DE/CH/AT)
- 7 Praxis-Beweise (u.a. 26% Verbrauchsersparnis bei 100 Betonmischern)
Offer Stack: 5.486€ Wert. Preis: 5x447€ oder einmalig 2.197€.
Antworte immer auf Deutsch, direkt und motivierend. Kurz, klar, auf den Punkt.`

    const openaiKey = process.env.OPENAI_API_KEY
    if (openaiKey) {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${openaiKey}` },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'system', content: systemPrompt }, ...messages.slice(-6)],
          max_tokens: 300,
          temperature: 0.7
        })
      })
      const data = await response.json() as { choices?: Array<{ message?: { content?: string } }> }
      const reply = data.choices?.[0]?.message?.content ?? fallback(lastMessage)
      return NextResponse.json({ reply })
    }

    return NextResponse.json({ reply: fallback(lastMessage) })
  } catch {
    return NextResponse.json({ reply: 'Kurze Pause — bitte gleich nochmal versuchen!' })
  }
}

function fallback(question: string): string {
  const q = question.toLowerCase()
  if (q.includes('preis') || q.includes('kosten') || q.includes('kauf'))
    return 'Das Fix System kostet einmalig 2.197€ oder 5x447€ Raten. Gesamtwert: 5.486€. → Jetzt einsteigen: /einstieg'
  if (q.includes('strömung') || q.includes('svenflex') || q.includes('sprit') || q.includes('verbrauch'))
    return 'Die Strömungsoptimierung reduziert Kraftstoffverbrauch um bis zu 26% — an 100 Betonmischern bewiesen. 🚗'
  if (q.includes('wasserstoff') || q.includes('heizung'))
    return 'Wasserstoff-Heizung V3 kommt — präsentiert im Europäischen Innovationszentrum. Details für Inner-Circle. → /themen/wasserstoff-heizung'
  if (q.includes('partner') || q.includes('provision') || q.includes('verdien'))
    return 'Als Partner: 200€ pro Empfehlung + 200€ pro Einbau. Ein Dutzend Einbauten = mittlerer 4-stelliger Zusatzverdienst. 🤝'
  if (q.includes('inner circle') || q.includes('donnerstag'))
    return 'Inner Circle: jeden Donnerstag 19:15 Uhr Live-Sprechstunde mit Sven. → /inner-circle'
  if (q.includes('probefahrt'))
    return '564 Probefahrt-Partner in DE, CH und AT. Einfach ausprobieren. → /probefahrt'
  if (q.includes('krypto') || q.includes('konto') || q.includes('refinanzier'))
    return 'Dezentrales Krypto-Konto: 250$ Start + 10% monatlich. Das System zahlt sich selbst. 💰'
  return 'Entdecke alle 23 Themen unter /themen — oder starte direkt unter /einstieg. Was möchtest du genauer wissen? ⚡'
}
