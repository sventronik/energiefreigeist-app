import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    const lastMessage = messages[messages.length - 1]?.content ?? ''

    // System context about Sven's energy universe
    const systemPrompt = `Du bist der Energiefreigeist-Assistent von Sven Mund. 
Du kennst alle 23 Themen des Energie-Universums:
- Strömungsoptimierung (Svenflex Mobil, STROPT Festeinbau)
- Wasserstoff im Auto und Wasserstoff-Heizung V3
- Autarke Stromerzeugung
- Das Energy Sovereignty System™
- Svenfix VIP Service (300€ Wert, VIP Einbau vor Ort)
- Partnerprogramm (200€ pro Empfehlung, 200€ pro Einbau)
- Dezentrales Krypto-Konto (250$ Startguthaben, 10% monatlich)
- Inner Circle (Donnerstag 19:15 Uhr Sprechstunde)
- Probefahrt-Netzwerk (564 Partner in DE/CH/AT)
- 7 Praxis-Beweise (u.a. 26% Verbrauchsersparnis bei 100 Betonmischern)

Offer Stack: Fix System 1990€ + VIP 300€ + Booster 500€ + Schulung 480€ + Krypto-Konto 250$ + Krypto-Kurs 999€ + Inner Circle 997€ = 5.486€ Wert. Preis: 5x447€ oder einmalig 2.197€.

Antworte immer auf Deutsch, direkt und motivierend. Keine langen Ausführungen — kurz, klar, auf den Punkt. Bei Kaufinteresse auf /einstieg verweisen.`

    // Try to call an AI provider — falls back to smart keyword responses
    const apiKey = process.env.OPENAI_API_KEY || process.env.ANTHROPIC_API_KEY

    if (apiKey && process.env.OPENAI_API_KEY) {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages.slice(-6) // last 6 messages for context
          ],
          max_tokens: 300,
          temperature: 0.7
        })
      })
      const data = await response.json()
      return NextResponse.json({ reply: data.choices?.[0]?.message?.content ?? fallback(lastMessage) })
    }

    // Smart fallback responses when no AI key is configured
    return NextResponse.json({ reply: fallback(lastMessage) })
  } catch (error) {
    return NextResponse.json({ reply: 'Kurze Pause — bitte gleich nochmal versuchen!' }, { status: 200 })
  }
}

function fallback(question: string): string {
  const q = question.toLowerCase()
  if (q.includes('preis') || q.includes('kosten') || q.includes('kauf'))
    return 'Das Fix System kostet einmalig 2.197€ oder 5x447€ Raten. Gesamtwert des Pakets: 5.486€. → Jetzt einsteigen: /einstieg'
  if (q.includes('strömung') || q.includes('svenflex') || q.includes('sprit') || q.includes('verbrauch'))
    return 'Die Strömungsoptimierung reduziert den Kraftstoffverbrauch nachweislich um bis zu 26%. Praxis-bewiesen an 100 Betonmischern. Das mobile Svenflex-System gibt es ab sofort. 🚗'
  if (q.includes('wasserstoff') || q.includes('heizung'))
    return 'Die Wasserstoff-Heizung V3 ist im Entstehen — präsentiert im Europäischen Innovationszentrum. Details für Inner-Circle-Mitglieder. Mehr unter /themen/wasserstoff-heizung'
  if (q.includes('partner') || q.includes('provision') || q.includes('verdien'))
    return 'Als Partner verdienst du 200€ pro Empfehlung + 200€ pro Einbau. Ein Dutzend Einbauten = mittlerer 4-stelliger Zusatzverdienst. 🤝'
  if (q.includes('inner circle') || q.includes('donnerstag'))
    return 'Der Inner Circle trifft sich jeden Donnerstag um 19:15 Uhr zur Live-Sprechstunde mit Sven. Exklusiv für Mitglieder. → /inner-circle'
  if (q.includes('probefahrt'))
    return 'Das Probefahrt-Netzwerk hat 564 Partner in DE, CH und AT. Du kannst eine Probefahrt bei einem Partner in deiner Nähe anfragen. → /probefahrt'
  if (q.includes('krypto') || q.includes('konto') || q.includes('refinanzier'))
    return 'Das dezentrale Krypto-Konto startet mit 250$ Guthaben und schüttet 10% monatlich aus — so zahlt sich dein System selbst. Verfügbar nach Abschluss. 💰'
  return 'Gute Frage! Die beste erste Schritte: Entdecke alle 23 Themen unter /themen, oder starte direkt mit einem Einstiegsprodukt unter /einstieg. Bei konkreten Fragen einfach weiterschreiben! ⚡'
}
