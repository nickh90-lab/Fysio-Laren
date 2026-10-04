# 🚀 Fysio Laren - Livegang & SEO Checklist

Dit document bewaart de exacte actiepunten voor het moment dat we de website definitief live zetten.

---

### 1. Hosting Omgevingsvariabelen (Netlify Environment Variables)
Voeg in het Netlify Dashboard (onder **Site configuration** > **Environment variables**) de volgende twee variabelen toe:
1. **Livegang (Preview-slot uitschakelen)**:
   ```env
   NEXT_PUBLIC_SITE_LAUNCHED=true
   ```
2. **E-mailkoppeling Contactformulier (Resend)**:
   - **Key**: `RESEND_API_KEY`
   - **Value**: *(Kopieer de sleutel uit uw lokale `.env.local`)*
- **Resultaat**: Zowel de publieke livegang als het contactformulier naar `info@fysio-laren.nl` zijn direct 100% operationeel.

---

### 2. Contactformulier & Mailbezorging Testen
- **Actie**: Vul het contactformulier op `https://www.fysio-laren.nl/contact` in als test.
- **Resultaat**: De Resend API verstuurt het bericht direct live naar `info@fysio-laren.nl` en beantwoordt dit met een bevestiging.

---

### 3. Google Search Console (Indexering aanjagen)
- **Actie 1**: Meld het domein aan via [Google Search Console](https://search.google.com/search-console).
- **Actie 2**: Dien de sitemap in onder **Sitemaps**:
  ```text
  https://www.fysio-laren.nl/sitemap.xml
  ```
- **Actie 3**: Voer de URL van de homepage in de zoekbalk bovenaan in en klik op **Indexering aanvragen**.
- **Resultaat**: Google stuurt binnen 24-48 uur een crawler langs en neemt de website officieel op in de zoekresultaten.

---

### 4. Google Bedrijfsprofiel (Google Mijn Bedrijf)
*Dit is de #1 factor voor lokale vindbaarheid in Laren, Lochem en omstreken.*
- **Actie 1**: Claim of open uw profiel op [Google Bedrijfsprofiel](https://www.google.com/business/).
- **Actie 2 (NAP-consistentie)**: Controleer of de gegevens exact overeenkomen:
  - **Naam**: Fysio Laren
  - **Adres**: Huenderstraat 3, 7245 BG Laren (Gld) *(en eventueel nevenlocatie Rengersweg 2)*
  - **Telefoon**: 0573 - 21 50 58
- **Actie 3**: Voeg de links toe:
  - Website: `https://www.fysio-laren.nl`
  - Afsprakenlink: `https://fysio-laren.uwpraktijkonline.nl`
- **Actie 4 (Reviews)**: Vraag de eerste tevreden patiënten direct om een korte Google review. Dit zorgt voor een snelle stijging in Google Maps.

---

### 5. Lokale Verwijzingen & Backlinks
- **ZorgkaartNederland**: Vermeld Fysio Laren en de therapeuten op [ZorgkaartNederland.nl](https://www.zorgkaartnederland.nl) met de nieuwe websitelink.
- **Partnernetwerken**: Controleer of aangesloten netwerken (ParkinsonNet, Chronisch ZorgNet, Reumanet, Het Doktershuus) linken naar de nieuwe website.

---

### 6. Online Planmodule Activeren (zodra HCI One / UwPraktijkOnline gereed is)
De volledige online boekingsmodule is veilig bewaard in `src/app/afspraak-maken/AfspraakMakenClient.online-module.tsx`.
- **Huidige status**: `/afspraak-maken` toont de minimalistische *"Binnenkort beschikbaar: Hier komt de agendamodule van HCI One."* pagina.
- **Activeren wanneer klaar**:
  1. Open `src/app/afspraak-maken/page.tsx`.
  2. Wijzig de component naar:
     ```tsx
     import { Metadata } from "next";
     import AfspraakMakenClient from "./AfspraakMakenClient.online-module";

     export const metadata: Metadata = {
         title: "Afspraak maken | Fysio Laren",
         description: "Plan direct online uw afspraak in bij Fysio Laren. Kies uw therapeut, datum en gewenste tijdstip. Zonder verwijsbrief toegankelijk.",
     };

     export default function AfspraakMakenPage() {
         return <AfspraakMakenClient />;
     }
     ```
  3. Alle knoppen op de website verwijzen al direct naar `/afspraak-maken`, dus patiënten komen dan automatisch in de actieve planmodule terecht!

