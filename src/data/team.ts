export interface TeamMember {
    slug: string;
    name: string;
    role: string;
    image: string | null;
    bio: string;
    extendedBio: string;
    specialties: string[];
    networks?: string[];
    big: string;
    education: string;
    quote: string;
    days: string;
}

export const team: TeamMember[] = [
    {
        slug: "marloes",
        name: "Marloes",
        role: "Fysiotherapeut en maatschapslid",
        image: "/team/Marloes.jpg",
        bio: "Nadat ik meerdere jaren als fysiotherapeut in het ziekenhuis heb gewerkt, werk ik sinds 2007 met veel plezier in Laren, Gld. Ik vind het belangrijk om goed te luisteren en samen te kijken naar wat iemand nodig heeft.",
        extendedBio: `Nadat ik meerdere jaren als fysiotherapeut in het ziekenhuis heb gewerkt, werk ik sinds 2007 met veel plezier in Laren, Gld.

Ik vind het belangrijk om goed te luisteren en samen te kijken naar wat iemand nodig heeft en aan te sluiten bij wat voor die persoon echt zinvol is. Geen mens en geen hulpvraag is hetzelfde. Juist die persoonlijke benadering maakt mijn vak zo mooi.

Ook tijdens groepslessen vind ik het belangrijk dat er aandacht blijft voor het individu. Iedereen heeft zijn eigen mogelijkheden, doelen en aandachtspunten. Ik vind het mooi om mensen daarin persoonlijk te begeleiden en tegelijkertijd te zorgen voor een positieve en energieke sfeer.

Na al die jaren werk ik nog steeds met veel enthousiasme en nieuwsgierigheid. Ik blijf mezelf ontwikkelen en mijn specialistische kennis verdiepen, omdat ik ervan overtuigd ben dat goede fysiotherapie begint met kennis en professionaliteit.
Ik werk veel samen met andere zorgverleners en zit in verschillende netwerken. Voor de regio Deventer ben ik coördinator van ParkinsonNet.

Ik woon samen met Nick en heb drie kinderen. In mijn vrije tijd geniet ik van tijd met familie en vrienden. Daarnaast houd ik van reizen en vind ik het leuk om nieuwe plekken in de wereld te ontdekken.

Ik kijk ernaar uit om je te ontmoeten bij Fysio Laren.`,
        specialties: [
            "Parkinson",
            "MS",
            "CVA/beroerte",
            "COPD",
            "Reuma",
            "TENS",
            "Leefstijlcoaching",
            "Dry Needling",
            "Osteoporose",
            "Etalagebenen"
        ],
        networks: [
            "Kwaliteitsregister Fysiotherapie",
            "ParkinsonNet (coördinator)",
            "MS Stedendriehoek",
            "Chronisch Zorgnet",
            "Reumanet",
            "Chronische Pijnnetwerk Zutphen"
        ],
        big: "19924567804",
        education: "BSc Fysiotherapie, ParkinsonNet specialist",
        quote: "Aandacht voor het individu en samen naar een duurzaam resultaat.",
        days: "Ma, Di, Do, Vr"
    },
    {
        slug: "karin",
        name: "Karin",
        role: "Fysiotherapeut en maatschapslid",
        image: "/team/Karin.jpg",
        bio: "Al ruim 35 jaar werk ik met plezier als fysiotherapeute. Nog steeds geeft het me veel voldoening mensen te helpen beter te functioneren. In al die jaren heb ik het vak behoorlijk zien veranderen.",
        extendedBio: `Al ruim 35 jaar werk ik met plezier als fysiotherapeute. Nog steeds geeft het me veel voldoening mensen te helpen beter te functioneren. In al die jaren heb ik het vak behoorlijk zien veranderen. Van vooral hands-on behandelen naar samen werken aan herstel, waarbij een actieve rol steeds belangrijker is geworden. Herstellen, of leren omgaan met een klacht of beperking, doen we wat mij betreft samen.

Als fysiotherapeute vind ik het belangrijk dat mensen zich bij mij op hun gemak voelen. Openheid en vertrouwen horen daar voor mij bij. Ik kijk graag wat verder dan alleen de klacht en heb oog voor verschillende factoren die een rol kunnen spelen bij het ontstaan of aanhouden ervan.

Privé ‘scharrel’ ik graag in en om het huis en ben ik altijd wel ergens mee bezig. Samen met mijn man zorg ik met veel plezier voor onze dieren. Honden nemen daarbij een belangrijke plaats in.`,
        specialties: [
            "Herstel na operaties",
            "Oedeemtherapie",
            "Ontspanning",
            "Ademhaling",
            "COPD",
            "Valpreventie (Otago)",
            "CVA",
            "Oncologie",
            "Psychosomatiek"
        ],
        networks: [
            "Kwaliteitsregister Fysiotherapie",
            "Chronisch Zorgnet",
            "NVFL"
        ],
        big: "29934567804",
        education: "BSc Fysiotherapie, Oedeemtherapeut",
        quote: "Aandacht voor de mens achter de klacht.",
        days: "Di, Wo, Do"
    },
    {
        slug: "nick",
        name: "Nick",
        role: "Fysio-/manueeltherapeut en maatschapslid",
        image: "/team/Nick.jpg",
        bio: "Wat ik mooi vind aan mijn werk als fysiotherapeut, is dat ik samen met mensen kan werken aan hun doelen en op zoek kan gaan naar de kern van hun klachten.",
        extendedBio: `Sinds 2018 werk ik als fysiotherapeut in Laren, Gld. Na mijn afstuderen in 2013 heb ik in 2018 mijn masteropleiding tot manueel therapeut afgerond. Ik begon bij Solis (voorheen Ortis) en sinds 2026 doe ik dat met heel veel plezier vanuit onze eigen praktijk Fysio Laren.

Wat ik mooi vind aan mijn werk als fysiotherapeut, is dat ik samen met mensen kan werken aan hun doelen en op zoek kan gaan naar de kern van hun klachten. Ik richt me voornamelijk op orthopedisch gerelateerde klachten, waarbij ik hands-on behandelingen combineer met actieve oefentherapie.

Ik neem graag de tijd om samen te kijken waar klachten vandaan komen en wat iemand nodig heeft om verder te kunnen. Ik vind het belangrijk dat je begrijpt wat we doen én waarom. Zo kun je zelf actief aan de slag en werken we samen aan herstel én het voorkomen van nieuwe klachten.

Samen met Marloes woon ik in Lochem. We reizen graag samen en ontdekken het liefst nieuwe plekken. Daarnaast luister ik veel naar muziek en ben ik regelmatig te vinden aan de keukentafel voor een goed bordspel met vrienden of familie.`,
        specialties: ["Manuele therapie", "Orthopedie", "Wervelkolom", "Sportblessures", "Duizeligheidsklachten"],
        networks: [
            "Kwaliteitsregister Fysiotherapie"
        ],
        big: "39944567804",
        education: "Master Sportfysiotherapie",
        quote: "Samen gericht naar een duurzaam resultaat.",
        days: "Ma, Wo, Vr"
    },
    {
        slug: "ingrid",
        name: "Ingrid",
        role: "Fysiotherapeut",
        image: "/team/Ingrid.jpg",
        bio: "Na mijn studie in Deventer begon ik in 1991 in het ziekenhuis in Zwolle. Sinds 1998 werk ik bij praktijk Wilma Fraas, het huidige Fysio Laren. Ik kijk niet alleen naar de klacht maar zoek samen met de patiënt naar de oorzaak.",
        extendedBio: `Na mijn studie in Deventer begon ik in 1991 in het ziekenhuis in Zwolle.

Met een aantal jaren ervaring in verschillende praktijken ging ik in 1998 aan de slag bij praktijk Wilma Fraas, het huidige Fysio Laren.

In de loop der jaren is mijn vak sterk veranderd. Ik kijk niet alleen naar de klacht maar zoek samen met de patiënt naar de oorzaak. Met aandacht voor houding, beweging en persoonlijke inzichten help ik het lichaam om te herstellen, of zo optimaal mogelijk te functioneren. Door diverse opleidingen en nascholingen heb ik hiervoor veel verschillende behandelmethodes en tools ter beschikking.

In mijn vrije tijd zit ik graag op de mountainbike of te paard. Ik woon samen met mijn man en hond. We hebben twee volwassen kinderen.`,
        specialties: [
            "Voet/enkelklachten",
            "(Hard-)loopanalyse",
            "Groepstraining",
            "Houdingsverbetering",
            "Jongeren en kinderen",
            "Medical Taping",
            "Revalidatie na total hip/total knee"
        ],
        networks: [
            "Kwaliteitsregister Fysiotherapie",
            "Voetentraining.nl",
            "Knienetwerk Salland"
        ],
        big: "49954567804",
        education: "BSc Fysiotherapie",
        quote: "Zorg met aandacht en geduld.",
        days: "Ma, Di, Wo, Vr"
    },
    {
        slug: "jacob",
        name: "Jacob",
        role: "Fysiotherapeut",
        image: "/team/Jacob.jpg",
        bio: "Als fysiotherapeut vind ik het belangrijk dat je je gehoord en op je gemak voelt. Persoonlijke aandacht en vertrouwen vormen de basis. Ik luister naar jouw verhaal, kijk verder dan alleen de klacht en stem de behandeling af op wat jij wilt bereiken.",
        extendedBio: `Als fysiotherapeut vind ik het belangrijk dat je je gehoord en op je gemak voelt. Persoonlijke aandacht en vertrouwen vormen de basis. Ik luister naar jouw verhaal, kijk verder dan alleen de klacht en stem de behandeling af op wat jij wilt bereiken.

Bewegen loopt als een rode draad door mijn leven. Met mijn achtergrond in sport neem ik die passie mee in mijn werk. Ik kijk niet alleen naar herstel, maar ook naar hoe je duurzaam en met vertrouwen actief kunt blijven. Voor mij vormt bewegen de basis van een vitaal leven.

In mijn vrije tijd zoek ik graag de rust en ruimte van het bos op voor een trailrun of fietstocht. Bewegen en buiten zijn geven mij energie en zorgen voor een fijne balans.`,
        specialties: [
            "Ouderenzorg",
            "Leefstijl en preventie",
            "Stress-, spannings- en overprikkelingsklachten"
        ],
        networks: [
            "Kwaliteitsregister Fysiotherapie"
        ],
        big: "59964567804",
        education: "BSc Fysiotherapie",
        quote: "Voor mij vormt bewegen de basis van een vitaal leven.",
        days: "Ma, Di, Do"
    }
];
