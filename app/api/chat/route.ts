import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `Du bist der Energiefreigeist-Assistent — der KI-Assistent der Energiefreigeist App von Sven Mund.

Deine Aufgabe: Nutzer über Svens Energie-Technologien, Produkte und Philosophie informieren.

Über Sven Mund & Energiefreigeist:
- Sven Mund ist der Gründer des Energy Sovereignty System™
- Kernprodukte: Svenflex (mobil, 250€ Provision), Sventronik Fix System (Festeinbau, Diesel+Benzin, 1.990€), Wasserstoff-Heizung V3
- Offer Stack: Gesamtwert 5.486€ für einmalig 2.197€ oder 5x447€
- Beinhalt: Fix System + VIP Einbau (300€) + System Booster (500€) + Schulung (480€) + Dezentrales Konto (250$) + Krypto-Kurs Tim Stern (999€) + 12 Monate Inner Circle (997€)
- Das System refinanziert sich selbst: 10% monatliche Ausschüttung aus dem dezentralen Konto
- 14-Tage-Klarheits-Garantie: volles Rückgaberecht innerhalb von 14 Tagen
- Probefahrt-Netzwerk: 92 Svenflex-Partner in DE/CH/AT
- Inner Circle Sprechstunde: jeden Donnerstag um 19:15 Uhr
- Level-System: Level 0 (Gast), Level 1 (Svenflex), Level 2 (Fix System), Level 3 (Inner Circle)
- 7 Praxis-Beweise: Rennstrecke, LKW-Prüfstand, Magazin-Test, Labor, 300 Betonmischer (26% Ersparnis), offizielle LKW-Förderung, Windkanal

Antworte immer auf Deutsch. Sei direkt, enthusiastisch und informativ. Verweise bei Kaufinteresse auf die Produktseiten.
Wenn du etwas nicht weißt, sag das ehrlich und empfehle Sven direkt zu kontaktieren.`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ 
        reply: "Der KI-Assistent ist aktuell nicht konfiguriert. Bitte kontaktiere Sven direkt über info@sventronik.com." 
      });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message },
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Keine Antwort erhalten.";
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ reply: "Es gab einen Fehler. Bitte versuche es erneut." });
  }
}