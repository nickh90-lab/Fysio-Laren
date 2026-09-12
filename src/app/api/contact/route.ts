import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { name, phone, email, message } = data;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Vul alstublieft alle verplichte velden in (naam, e-mail en bericht)." },
                { status: 400 }
            );
        }

        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            console.warn("RESEND_API_KEY is nog niet ingesteld in de omgevingsvariabelen (.env.local).");
            console.log("=== ONTVANGEN BERICHT (NOG GEEN API KEY) ===");
            console.log(`Naam: ${name} | E-mail: ${email} | Telefoon: ${phone || 'Niet ingevuld'}`);
            console.log(`Bericht: ${message}`);
            console.log("============================================");

            return NextResponse.json(
                { 
                    success: true, 
                    warning: "Bericht verwerkt in testmodus (geen API key gevonden)." 
                },
                { status: 200 }
            );
        }

        const htmlBody = `
            <div style="font-family: Arial, sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; rounded: 16px;">
                <div style="background-color: #1e3a8a; padding: 20px; border-radius: 12px; margin-bottom: 24px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: bold;">Nieuw Contactbericht – Fysio Laren</h1>
                </div>

                <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                    Er is een nieuw bericht binnengekomen via het contactformulier op de website:
                </p>

                <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 15px;">
                    <tr>
                        <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 140px; color: #64748b;">Naam:</td>
                        <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #64748b;">E-mailadres:</td>
                        <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #64748b;">Telefoonnummer:</td>
                        <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9;">${phone ? `<a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>` : '<em>Niet opgegeven</em>'}</td>
                    </tr>
                </table>

                <div style="background-color: #f8fafc; padding: 18px; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 24px;">
                    <p style="font-weight: bold; margin-top: 0; margin-bottom: 8px; color: #475569; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Bericht / Vraag:</p>
                    <p style="margin: 0; white-space: pre-wrap; font-size: 15px; color: #1e293b; line-height: 1.6;">${message}</p>
                </div>

                <p style="font-size: 13px; color: #94a3b8; text-align: center; margin-top: 32px; border-top: 1px solid #f1f5f9; padding-top: 16px;">
                    U kunt direct op deze e-mail antwoorden om contact op te nemen met <strong>${name}</strong> (${email}).
                </p>
            </div>
        `;

        const resendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: "Fysio Laren <contact@fysio-laren.nl>",
                to: ["info@fysio-laren.nl"],
                reply_to: email,
                subject: `Nieuw contactbericht: ${name}`,
                html: htmlBody,
            }),
        });

        const resendData = await resendResponse.json();

        if (!resendResponse.ok) {
            console.error("Resend API fout:", resendData);
            return NextResponse.json(
                { error: resendData.message || "Fout bij verzenden via e-mailserver. Probeer het later opnieuw of bel ons direct." },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { 
                success: true, 
                message: "Uw bericht is succesvol verzonden." 
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Fout bij verwerken contactformulier:", error);
        return NextResponse.json(
            { error: "Er is een onverwachte fout opgetreden bij het versturen van uw bericht." },
            { status: 500 }
        );
    }
}
