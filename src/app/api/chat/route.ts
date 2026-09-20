import { NextResponse } from "next/server";
import { findSmartAnswer, PRACTICE_INFO } from "@/data/fysioLarenKnowledge";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const userMessage = (body.message || "").trim();

    if (!userMessage) {
      return NextResponse.json(
        { error: "Bericht mag niet leeg zijn." },
        { status: 400 }
      );
    }

    // Optionele AI-integratie als de beheerder een GEMINI_API_KEY heeft geconfigureerd
    const geminiApiKey = process.env.GEMINI_API_KEY;

    if (geminiApiKey) {
      try {
        const systemPrompt = `Je bent de professionele 'Praktijkassistent' van Fysio Laren, een moderne en deskundige fysiotherapiepraktijk in Laren, Gld.
Je doel is om bezoekers van de website vriendelijk, feitelijk en bondig te helpen met praktische vragen over de praktijk.

BELANGRIJKE WAARBORGEN EN BEPERKINGEN:
1. GEEN MEDISCH ADVIES: Als de bezoeker vraagt hoe een klacht, blessure of symptoom behandeld moet worden of welke oefeningen zij zelf moeten doen, geef je GEEN medisch advies. Wijs dit beleefd af en nodig hen uit om een afspraak te maken voor een intake bij de fysiotherapeut.
2. GEEN IRRELEVANTE ONDERWERPEN: Geef nooit recepten, kooktips, politieke meningen of antwoorden op vragen die niets met Fysio Laren of fysiotherapie te maken hebben. Wijs dit vriendelijk af.
3. ONBEKEND ANTWOORD: Als de informatie niet in de praktijkfeiten staat, verzin dan niets. Verwijs altijd naar de praktijk via telefoon ${PRACTICE_INFO.phone} (of tot 1 november via Solis ${PRACTICE_INFO.phoneSolis}) of de contactpagina.

PRAKTIJKFEITEN FYSIO LAREN:
- Adres: ${PRACTICE_INFO.address}.
- Verbouwing & Locatie: Vanaf 1 oktober wordt het pand verbouwd. De behandelingen vinden tijdelijk plaats in het huidige pand van Solis (Huenderstraat 3). Vanaf 1 januari 2027 in het vernieuwde pand.
- Telefoon: ${PRACTICE_INFO.phone}. Tot 1 november voor afspraken via Solis: ${PRACTICE_INFO.phoneSolis}.
- E-mail: ${PRACTICE_INFO.email}.
- Openingstijden: ${PRACTICE_INFO.hours.join(", ")}.
- Behandelingen: Algemene fysiotherapie, Manuele therapie, Sportfysiotherapie, Dry Needling, Oedeemtherapie, Revalidatie, Shockwave, Echografie, Parkinson, MS, CVA, COPD, Claudicatio Intermittens (etalagebenen), Oncologie.
- Beweeggroepen: FysioFit (begeleid fitnessen in de oefenzaal; 1x/wk 30min €35, 2x/wk 30min €49, 1x/wk 60min €46, 2x/wk 60min €82 p/mnd), COPD beweeggroep, NeuroFit, TROM (Trainen Op Muziek), Non-contact boksen.
- Tarieven: Reguliere zitting €48,00, Zitting aan huis €72,00, Manuele therapie €60,00, Oedeemtherapie €72,00, Intake na verwijzing €72,00.
- Team: Marloes (ParkinsonNet, MS, CVA, COPD), Karin (Oedeemtherapie, Oncologie, Herstel na operaties, COPD, CVA, Psychosomatiek), Nick (Manuele therapie, Sport, Revalidatie), Ingrid (Algemeen, Beweeggroepen).
- Verwijsbrief: Niet nodig voor reguliere fysio (DTF), wel vereist bij chronische indicaties of behandelingen aan huis.

Antwoord in helder, vriendelijk en natuurlijk Nederlands. Houd het to-the-point.`;

        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`;

        const aiResponse = await fetch(geminiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: `${systemPrompt}\n\nVraag van de bezoeker: ${userMessage}` }]
              }
            ],
            generationConfig: {
              temperature: 0.2,
              maxOutputTokens: 350,
            }
          })
        });

        if (aiResponse.ok) {
          const data = await aiResponse.json();
          const replyText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (replyText) {
            // Check op eventuele quick links
            const smartFallback = findSmartAnswer(userMessage);
            return NextResponse.json({
              response: replyText.trim(),
              quickLinks: smartFallback.quickLinks,
              suggestedQuestions: smartFallback.suggestedQuestions
            });
          }
        }
      } catch (err) {
        console.error("AI engine fallback to smart knowledge base:", err);
      }
    }

    // Standaard snelle, veilige en betrouwbare interne kennisbank
    const smartResult = findSmartAnswer(userMessage);

    return NextResponse.json({
      response: smartResult.answer,
      quickLinks: smartResult.quickLinks,
      suggestedQuestions: smartResult.suggestedQuestions
    });

  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        response: `Er ging helaas iets mis bij het ophalen van het antwoord. Neem gerust telefonisch contact met ons op via ${PRACTICE_INFO.phone}.`,
        quickLinks: [{ label: "Contact opnemen", href: "/contact" }]
      },
      { status: 500 }
    );
  }
}
