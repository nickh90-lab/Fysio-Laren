export interface KnowledgeTopic {
  id: string;
  keywords: string[];
  intentPatterns: RegExp[];
  title: string;
  answer: string;
  quickLinks?: { label: string; href: string }[];
  suggestedFollowups?: string[];
}

// Centrale contact- en praktijkgegevens
export const PRACTICE_INFO = {
  name: "Fysio Laren",
  address: "Huenderstraat 3, 7245 BG Laren, Gld",
  temporaryAddressNote: "Let op: Vanaf 1 oktober wordt ons pand aan de Huenderstraat verbouwd. Wij behandelen tijdelijk in het huidige pand van Solis (Huenderstraat 3). Vanaf 1 januari 2027 verwelkomen we u in ons compleet vernieuwde pand!",
  phone: "0573 - 21 50 58",
  phoneSolis: "0573 - 401984",
  phoneNotice: "U kunt ons bereiken op 0573 - 21 50 58. Tot 1 november kunt u voor afspraken contact opnemen met Solis via 0573 - 401984.",
  email: "info@fysio-laren.nl",
  hours: [
    "Maandag: 08:00 – 21:00",
    "Dinsdag: 08:00 – 20:00",
    "Woensdag: 08:00 – 21:30",
    "Donderdag: 08:00 – 17:00",
    "Vrijdag: 08:00 – 17:00",
    "Zaterdag & Zondag: Gesloten"
  ]
};

// Veiligheidsdetectie voor medisch advies
export const MEDICAL_ADVICE_TRIGGERS = [
  "welke oefening",
  "welke oefeningen",
  "hoe behandel",
  "hoe moet ik behandelen",
  "wat moet ik doen aan",
  "wat te doen bij",
  "hoe genees ik",
  "pijn in mijn",
  "last van mijn",
  "gescheurd",
  "ontsteking behandelen",
  "medisch advies",
  "medicijnen",
  "pijnstillers",
  "zelf behandelen",
  "kraakt",
  "gebroken"
];

// Veiligheidsdetectie voor irrelevante / off-topic vragen
export const OFF_TOPIC_TRIGGERS = [
  "recept",
  "bakken",
  "koken",
  "taart",
  "eten",
  "politiek",
  "weer vandaag",
  "voetbaluitslag",
  "grap",
  "moppentrommel",
  "vertel een mop",
  "wie is de president",
  "bitcoin",
  "crypto",
  "film",
  "muziek downloaden",
  "programmeercode",
  "python",
  "javascript",
  "huiswerk"
];

export const KNOWLEDGE_TOPICS: KnowledgeTopic[] = [
  {
    id: "openingstijden",
    keywords: ["open", "openingstijd", "openingstijden", "wanneer open", "gesloten", "tijden", "avond", "weekend", "zaterdag", "zondag"],
    intentPatterns: [/openingstijd/i, /wanneer.*open/i, /tot hoe laat/i, /avond.*open/i, /in het weekend/i],
    title: "Openingstijden",
    answer: `Onze openingstijden zijn:
• Maandag: 08:00 – 21:00 uur
• Dinsdag: 08:00 – 20:00 uur
• Woensdag: 08:00 – 21:30 uur
• Donderdag: 08:00 – 17:00 uur
• Vrijdag: 08:00 – 17:00 uur
• Zaterdag & Zondag: Gesloten

We hebben dus ook ruime behandelmogelijkheden in de avonduren op maandag, dinsdag en woensdag!`,
    quickLinks: [
      { label: "Contactpagina", href: "/contact" },
      { label: "Afspraak maken", href: "/afspraak-maken" }
    ],
    suggestedFollowups: ["Locatie & Adres", "Afspraak maken", "Tarieven"]
  },
  {
    id: "locatie_verbouwing",
    keywords: ["adres", "locatie", "waar", "gevestigd", "pand", "huenderstraat", "verbouwing", "solis", "tijdelijk", "parkeren", "parkeerplaats"],
    intentPatterns: [/waar.*zitten/i, /waar.*gevestigd/i, /wat is.*adres/i, /verbouwing/i, /solis/i, /route/i, /parkeer/i],
    title: "Locatie & Verbouwing",
    answer: `Wij zijn gevestigd aan de Huenderstraat 3 in Laren, Gld. Er is voldoende gratis parkeergelegenheid en de praktijk is drempelvrij toegankelijk.

Belangrijk i.v.m. de verbouwing:
Vanaf 1 oktober wordt ons pand verbouwd. Tijdens de verbouwing behandelen wij tijdelijk in het huidige pand van Solis (ook aan de Huenderstraat 3). Vanaf 1 januari 2027 starten we in ons compleet vernieuwde pand!`,
    quickLinks: [
      { label: "Over onze praktijk", href: "/de-praktijk" },
      { label: "Route & Contact", href: "/contact" }
    ],
    suggestedFollowups: ["Telefoonnummer", "Openingstijden"]
  },
  {
    id: "contact_telefoon",
    keywords: ["telefoon", "bellen", "nummer", "contact", "bereikbaar", "mail", "email", "telefoonnummer", "solis bellen"],
    intentPatterns: [/telefoon/i, /nummer/i, /bellen/i, /contact opnemen/i, /e-mail/i],
    title: "Contact & Bereikbaarheid",
    answer: `U kunt Fysio Laren rechtstreeks bereiken via:
• Telefoon: 0573 - 21 50 58
• E-mail: info@fysio-laren.nl

Let op tijdens de overgangsperiode:
Tot 1 november 2026 kunt u voor afspraken contact opnemen met Solis via 0573 - 401984. Vanaf 1 november zijn wij rechtstreeks bereikbaar op 0573 - 21 50 58.`,
    quickLinks: [
      { label: "Naar contactformulier", href: "/contact" },
      { label: "Direct online afspraak", href: "/afspraak-maken" }
    ],
    suggestedFollowups: ["Openingstijden", "Locatie & Verbouwing"]
  },
  {
    id: "afspraak_maken",
    keywords: ["afspraak", "inplannen", "boeken", "intake", "aanmelden", "eerste keer", "verwijsbrief", "verwijzing", "huisarts"],
    intentPatterns: [/afspraak/i, /inplannen/i, /verwijsbrief/i, /verwijzing nodig/i, /intake/i],
    title: "Afspraak maken & Verwijsbrief",
    answer: `U kunt direct online een afspraak inplannen via onze website, of telefonisch contact met ons opnemen.

Heeft u een verwijsbrief nodig?
Nee, voor reguliere fysiotherapie heeft u géén verwijsbrief van uw huisarts of specialist nodig (Directe Toegankelijkheid Fysiotherapie - DTF). 
Alleen bij chronische aandoeningen of behandeling aan huis is een verwijzing vereist om in aanmerking te komen voor vergoeding.`,
    quickLinks: [
      { label: "Plan direct online uw afspraak", href: "/afspraak-maken" },
      { label: "Contact opnemen", href: "/contact" }
    ],
    suggestedFollowups: ["Tarieven & Vergoedingen", "Telefoonnummer"]
  },
  {
    id: "tarieven_vergoedingen",
    keywords: ["tarief", "tarieven", "kosten", "prijs", "prijzen", "vergoeding", "vergoedingen", "verzekering", "zorgverzekeraar", "basisverzekering", "aanvullend", "betalen"],
    intentPatterns: [/wat kost/i, /tarief/i, /tarieven/i, /vergoeding/i, /verzeker/i, /prijs/i],
    title: "Tarieven & Vergoedingen",
    answer: `Fysiotherapie wordt in de meeste gevallen vergoed vanuit uw aanvullende zorgverzekering. Heeft u geen aanvullende verzekering of is uw budget opgebruikt? Dan gelden onze particuliere tarieven:

• Reguliere zitting fysiotherapie: € 48,00
• Zitting aan huis: € 72,00
• Manuele therapie: € 60,00
• Oedeemtherapie: € 72,00
• Intake en onderzoek na verwijzing: € 72,00
• Screening (DTF): € 24,00

Voor chronische aandoeningen (volgens de landelijke lijst) wordt fysiotherapie vanaf de 21e behandeling vergoed uit de basisverzekering.`,
    quickLinks: [
      { label: "Bekijk het complete tarievenoverzicht", href: "/tarieven" },
      { label: "Vragen over uw vergoeding?", href: "/contact" }
    ],
    suggestedFollowups: ["FysioFit abonnementen", "Afspraak maken"]
  },
  {
    id: "fysiofit",
    keywords: ["fysiofit", "fitness", "sporten", "abonnement", "trainen", "oefenzaal", "kracht", "conditie", "particulier trainen"],
    intentPatterns: [/fysiofit/i, /fitness/i, /sporten/i, /abonnement/i],
    title: "FysioFit (Begeleid Fitnessen)",
    answer: `Bij FysioFit traint u zelfstandig in onze professioneel ingerichte oefenzaal met de zekerheid van deskundige begeleiding en toezicht van een fysiotherapeut. Zowel overdag als 's avonds zijn er meerdere trainingsmogelijkheden.

Tarieven FysioFit (abonnementsvorm, geen verwijsbrief nodig):
• 1x per week (30 min): € 35,- / maand
• 2x per week (30 min): € 49,- / maand
• 1x per week (60 min): € 46,- / maand
• 2x per week (60 min): € 82,- / maand`,
    quickLinks: [
      { label: "Bekijk FysioFit & Beweeggroepen", href: "/gespecialiseerde-groepstraining" },
      { label: "Aanmelden voor FysioFit", href: "/contact" }
    ],
    suggestedFollowups: ["Beweeggroepen", "Openingstijden"]
  },
  {
    id: "beweeggroepen",
    keywords: ["groep", "beweeggroep", "groepen", "groepstraining", "neurofit", "trom", "muziek", "boksen", "parkinson", "ms", "cva", "copd", "long"],
    intentPatterns: [/beweeggroep/i, /groepstraining/i, /neurofit/i, /trom/i, /boksen/i, /copd groep/i],
    title: "Gespecialiseerde Beweeggroepen",
    answer: `Naast individuele fysiotherapie bieden wij gespecialiseerde medische beweeggroepen in kleine groepen onder deskundige fysiotherapeutische begeleiding:

1. FysioFit: Verantwoord fitnessen met continue deskundige ondersteuning.
2. COPD Beweeggroep: Werken aan conditie, uithoudingsvermogen en ademhalingstechnieken.
3. NeuroFit: Balans- en looptraining, kracht- en conditieopbouw voor mensen met o.a. Parkinson, MS of na een CVA.
4. TROM (Trainen Op Muziek): Bewegen op het ritme van stimulerende muziek voor coördinatie en soepelheid.
5. Non-contact boksen: Veilige neuro-motorische bokstraining zonder fysiek contact.`,
    quickLinks: [
      { label: "Ontdek alle beweeggroepen", href: "/gespecialiseerde-groepstraining" }
    ],
    suggestedFollowups: ["FysioFit tarieven", "Afspraak maken"]
  },
  {
    id: "behandelingen",
    keywords: ["behandeling", "behandelingen", "specialismen", "manuele therapie", "dry needling", "sportfysio", "sportfysiotherapie", "oedeem", "oedeemtherapie", "revalidatie", "shockwave", "echografie", "claudicatio", "etalagebenen", "oncologie"],
    intentPatterns: [/welke behandelingen/i, /wat voor behandelingen/i, /specialis/i, /manuele/i, /dry needling/i, /oedeem/i, /shockwave/i],
    title: "Behandelingen & Specialisaties",
    answer: `Bij Fysio Laren kunt u terecht voor een breed scala aan gespecialiseerde behandelingen:
• Algemene fysiotherapie
• Manuele therapie
• Sportfysiotherapie & sportrevalidatie
• Dry Needling
• Oedeemtherapie
• Revalidatie na operatie of trauma
• Echografie & Shockwave therapie
• Gespecialiseerde begeleiding bij Parkinson, MS, CVA, COPD, Claudicatio Intermittens (etalagebenen) en Oncologie.`,
    quickLinks: [
      { label: "Bekijk alle expertises", href: "/fysiotherapie" },
      { label: "Afspraak maken", href: "/afspraak-maken" }
    ],
    suggestedFollowups: ["Ons team", "Tarieven"]
  },
  {
    id: "tens",
    keywords: ["tens", "tens behandeling", "zenuwpijn", "pijnbestrijding", "stroompjes", "elektroden", "tens apparaat"],
    intentPatterns: [/tens/i, /zenuwpijn/i, /elektrische pijnbestrijding/i],
    title: "TENS Behandeling (Pijnbestrijding)",
    answer: `TENS (Transcutane Elektrische Zenuwstimulatie) is een veilige en effectieve vorm van pijnbestrijding via milde elektrische stroompjes. Het helpt bij pijn in het algemeen — van acute klachten tot langdurige pijn — en is een van de weinige wetenschappelijk bewezen behandelingen tegen zenuwpijn. Daarnaast kan TENS ook gericht worden gebruikt bij zenuwletsel om de spierkracht te verbeteren. Het biedt niet alleen verlichting tijdens het gebruik, maar kan ook een aanzienlijk langdurig effect hebben.

Bij Fysio Laren krijgt u eerst een gerichte proefbehandeling en krijgt u het apparaat 7 tot 10 dagen mee naar huis om het in uw eigen leefomgeving te testen. Verloopt deze proefperiode goed, dan kan het TENS-apparaat definitief worden aangevraagd en wordt dit vaak vergoed door uw zorgverzekeraar.`,
    quickLinks: [
      { label: "Bekijk bij Fysiotherapie", href: "/fysiotherapie" },
      { label: "Afspraak maken", href: "/afspraak-maken" }
    ],
    suggestedFollowups: ["Behandelingen", "Contact"]
  },
  {
    id: "medical-taping",
    keywords: ["medical taping", "kinesiotaping", "kinesio tape", "tape", "tapen", "sporttape", "elastische tape"],
    intentPatterns: [/medical taping/i, /kinesiotap/i, /kinesio/i, /tapen/i],
    title: "Medical Taping (Kinesiotaping)",
    answer: `Medical taping (ook wel Kinesiotaping) maakt gebruik van speciale elastische tape die uw spieren en gewrichten ondersteunt zonder uw bewegingsvrijheid te beperken. In tegenstelling tot traditionele stugge sporttape kunt u met deze tape gewoon vrij blijven bewegen.

Afhankelijk van de manier waarop de tape wordt aangelegd, kan deze voor verschillende doelen worden ingezet:
• Het ontspannen van overbelaste spieren
• Het activeren van verzwakte spieren
• Het bieden van extra stabiliteit en sturing aan gewrichtskapsels en banden
• Een liftende techniek om de doorbloeding en vochtafvoer te stimuleren en druk op het weefsel te verminderen

Medical taping is breed toepasbaar bij onder andere spierblessures (zoals een zweepslag of verrekking), pees- en gewrichtsklachten, overbelasting en zwellingen.`,
    quickLinks: [
      { label: "Bekijk bij Fysiotherapie", href: "/fysiotherapie" },
      { label: "Afspraak maken", href: "/afspraak-maken" }
    ],
    suggestedFollowups: ["Behandelingen", "TENS", "Contact"]
  },
  {
    id: "parkinson",
    keywords: ["parkinson", "ziekte van parkinson", "parkinsonnet", "freezing", "bevriezen", "parkinsongroep", "neurofit", "trom", "boksen"],
    intentPatterns: [/parkinson/i, /parkinsonnet/i, /freezing/i, /bevriezen/i],
    title: "Parkinson & ParkinsonNet Begeleiding",
    answer: `Bij Fysio Laren hebben onze fysiotherapeuten jarenlange ervaring in de begeleiding van de ziekte van Parkinson. Wij zijn aangesloten bij ParkinsonNet, het landelijke netwerk van gespecialiseerde zorgverleners.

Wat we voor u kunnen betekenen:
• Persoonlijk afgestemde behandeling op uw specifieke hulpvraag
• Praktische bewegingsstrategieën en tips voor alledaagse situaties: beter lopen, makkelijker opstaan uit een stoel en soepeler omdraaien in bed
• Handvatten en technieken bij plotseling 'bevriezen' (freezing)
• Behandeling individueel (op de praktijk of bij u thuis) én in groepsverband
• Gespecialiseerde beweeggroepen: NeuroFit, Trainen Op Muziek (TROM) en Non-contact boksen`,
    quickLinks: [
      { label: "Bekijk bij Fysiotherapie", href: "/fysiotherapie" },
      { label: "Neurologie beweeggroepen", href: "/gespecialiseerde-groepstraining?groep=neurologie" },
      { label: "Afspraak maken", href: "/afspraak-maken" }
    ],
    suggestedFollowups: ["Beweeggroepen", "Ons team", "Contact"]
  },
  {
    id: "ms",
    keywords: ["ms", "multiple sclerose", "vermoeidheid ms", "ms begeleiding", "neurofit ms"],
    intentPatterns: [/multiple sclerose/i, /\bms\b/i],
    title: "Multiple Sclerose (MS) Begeleiding",
    answer: `Bij Multiple Sclerose (MS) helpt gerichte fysiotherapie om zo actief, soepel en zelfstandig mogelijk te blijven bewegen. We kijken vooral naar wat wél kan, met functionele oefeningen voor uw balans, spierkracht en loopvaardigheid.

Wat we voor u kunnen betekenen:
• Praktische tips voor een slimme energieverdeling over de dag en balans tussen rust en inspanning
• Maatwerkbegeleiding die aansluit op uw energie en mogelijkheden van dat moment
• Behandeling individueel (op de praktijk of aan huis) én in groepsverband
• Gespecialiseerde beweeggroepen zoals NeuroFit, Trainen Op Muziek (TROM) en Non-contact boksen`,
    quickLinks: [
      { label: "Bekijk bij Fysiotherapie", href: "/fysiotherapie" },
      { label: "Neurologie beweeggroepen", href: "/gespecialiseerde-groepstraining?groep=neurologie" },
      { label: "Afspraak maken", href: "/afspraak-maken" }
    ],
    suggestedFollowups: ["Beweeggroepen", "Parkinson", "Contact"]
  },
  {
    id: "team",
    keywords: ["team", "fysiotherapeut", "wie werken", "marloes", "karin", "nick", "ingrid", "collega", "behandelaars"],
    intentPatterns: [/wie werken er/i, /wie is/i, /ons team/i, /marloes/i, /karin/i, /nick/i, /ingrid/i],
    title: "Het Team van Fysio Laren",
    answer: `Ons vaste team bestaat uit ervaren, betrokken fysiotherapeuten met diverse specialisaties:
• Marloes: Fysiotherapeut en maatschapslid (gespecialiseerd in o.a. ParkinsonNet, MS, CVA, COPD, Dry Needling)
• Karin: Fysiotherapeut en maatschapslid (gespecialiseerd in o.a. herstel na operaties, oedeemtherapie, oncologie, COPD, CVA en psychosomatiek)
• Nick: Fysiotherapeut en maatschapslid (gespecialiseerd in manuele therapie, sportfysiotherapie en revalidatie)
• Ingrid: Fysiotherapeut (gespecialiseerd in algemene fysiotherapie en beweeggroepen)

Op onze teampagina kunt u meer lezen over de achtergrond en werkwijze van elk teamlid.`,
    quickLinks: [
      { label: "Ontmoet ons complete team", href: "/ons-team" }
    ],
    suggestedFollowups: ["Behandelingen", "Afspraak maken"]
  }
];

export function findSmartAnswer(userMessage: string): {
  answer: string;
  quickLinks?: { label: string; href: string }[];
  suggestedQuestions?: string[];
  isMedicalRefusal?: boolean;
  isOffTopicRefusal?: boolean;
} {
  const query = userMessage.trim().toLowerCase();

  // 1. Check op medisch advies
  const isMedical = MEDICAL_ADVICE_TRIGGERS.some(trigger => query.includes(trigger));
  if (isMedical) {
    return {
      isMedicalRefusal: true,
      answer: `Voor een verantwoorde diagnose en een passend behandeladvies kunnen wij via de chat geen medisch advies geven. Lichamelijke klachten vereisen een zorgvuldig fysiotherapeutisch onderzoek.

Onze fysiotherapeuten helpen u graag persoonlijk tijdens een intake op de praktijk om de oorzaak van uw klacht vast te stellen en een gericht herstelplan te maken.`,
      quickLinks: [
        { label: "Plan direct een intake in", href: "/afspraak-maken" },
        { label: "Bel ons: 0573 - 21 50 58", href: "tel:0573215058" },
        { label: "Contactpagina", href: "/contact" }
      ],
      suggestedQuestions: ["Afspraak maken", "Wat zijn de tarieven?", "Openingstijden"]
    };
  }

  // 2. Check op irrelevante / off-topic vragen
  const isOffTopic = OFF_TOPIC_TRIGGERS.some(trigger => query.includes(trigger));
  if (isOffTopic) {
    return {
      isOffTopicRefusal: true,
      answer: `Ik ben de praktijkassistent van Fysio Laren en help u graag met praktische vragen over onze fysiotherapiepraktijk, behandelingen, beweeggroepen, openingstijden en tarieven.

Heeft u een vraag over onze zorg of praktijk? Stel hem gerust!`,
      quickLinks: [
        { label: "Overzicht behandelingen", href: "/fysiotherapie" },
        { label: "Contact opnemen", href: "/contact" }
      ],
      suggestedQuestions: ["Wat zijn de openingstijden?", "Wat kost een behandeling?", "Waar zijn jullie gevestigd?"]
    };
  }

  // 3. Match tegen kennisbank onderwerpen
  let bestTopic: KnowledgeTopic | null = null;
  let highestScore = 0;

  for (const topic of KNOWLEDGE_TOPICS) {
    let score = 0;

    // Intent regex match (zwaar)
    for (const pattern of topic.intentPatterns) {
      if (pattern.test(query)) {
        score += 5;
      }
    }

    // Keyword match met woordgrenzen (voorkomt bijv. dat 'open' matcht op 'verkopen')
    for (const keyword of topic.keywords) {
      if (keyword.includes(" ")) {
        if (query.includes(keyword)) {
          score += 3;
        }
      } else {
        const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const wordRegex = new RegExp(`(^|\\s|[.,!?;])${escaped}($|\\s|[.,!?;])`, 'i');
        if (wordRegex.test(query)) {
          score += 2;
        }
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestTopic = topic;
    }
  }

  // Score drempel voor betrouwbaar antwoord
  if (bestTopic && highestScore >= 2) {
    return {
      answer: bestTopic.answer,
      quickLinks: bestTopic.quickLinks,
      suggestedQuestions: bestTopic.suggestedFollowups
    };
  }

  // 4. Geen duidelijk antwoord -> vriendelijke fallback naar telefoon & contact
  return {
    answer: `Hier heb ik helaas geen specifiek antwoord op gevonden op onze website. 

Wij helpen u graag persoonlijk verder! Neem gerust telefonisch contact met ons op of stel uw vraag via ons contactformulier.

• Telefoon praktijk: ${PRACTICE_INFO.phone}
• Tot 1 november (afspraken via Solis): ${PRACTICE_INFO.phoneSolis}`,
    quickLinks: [
      { label: "Bel Fysio Laren", href: "tel:0573215058" },
      { label: "Stel een vraag via contact", href: "/contact" },
      { label: "Online afspraak maken", href: "/afspraak-maken" }
    ],
    suggestedQuestions: [
      "Wat zijn de openingstijden?",
      "Waar zijn jullie gevestigd?",
      "Wat zijn de tarieven?",
      "Welke behandelingen bieden jullie?"
    ]
  };
}
