import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json()

    const systemPrompt = `Du bist der Energiefreigeist-Assistent von Sven Mund. Du hilfst Besuchern und Kunden bei Fragen rund um:

- Strömungsoptimierung (Svenflex mobil, Sventronik Fix System) — reduziert Kraftstoffverbrauch durch optimierte Verbrennungsluft
- Wasserstoff im Auto und Wasserstoff-Heizung (Version 3 in Entwicklung)
- Autarke Stromerzeugung — unabhängig vom Netz
- Das Energy Sovereignty System — Energie-Souveränität als Framework für Freiheit
- Refinanzierungs-Prinzip — das System zahlt sich über monatliche Ausschüttungen selbst
- Dezentrale Finanzen und Krypto-Konto
- Partnerprogramm: 200 Euro pro Empfehlung, 200 Euro pro Einbau
- Probefahrt-Netzwerk für Svenflex-Kunden
- Inner Circle: wöchentliche Sprechstunde jeden Donnerstag 19:15 Uhr
- Svenfix VIP Einbau-Service
- Europäisches Wasserstoff- und Innovationszentrum

Preise: Fix System Paket 2.197 Euro einmalig oder 5x447 Euro Raten. Gesamtwert 5.486 Euro.

Du antwortest auf Deutsch, klar und direkt. Bei Kaufinteresse verweise auf den direkten Kontakt zu Sven.`

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          ...history.slice(-6).map((m: {role: string, content: string}) => ({ role: m.role, content: m.content })),
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.7
      })
    })

    const data = await response.json()
    const reply = data.choices?.[0]?.message?.content || 'Keine Antwort erhalten.'
    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json({ reply: 'Entschuldigung, der Assistent ist gerade nicht erreichbar.' }, { status: 500 })
  }
}
