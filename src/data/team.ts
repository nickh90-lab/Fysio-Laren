export interface TeamMember {
    slug: string;
    name: string;
    role: string;
    image: string | null;
    bio: string;
    extendedBio: string;
    specialties: string[];
    big: string;
    education: string;
    quote: string;
    days: string;
}

export const team: TeamMember[] = [
    {
        slug: "marloes",
        name: "Marloes",
        role: "Praktijkeigenaar",
        image: "/foto Marloes.jpeg",
        bio: "Met passie voor het vak begeleidt Marloes haar patiënten naar een klachtenvrij leven. Ze combineert een brede kennis met een persoonlijke, no-nonsense aanpak die kenmerkend is voor Fysio Laren. Ze kijkt altijd verder dan alleen de symptomen om de echte oorzaak van uw klacht te vinden.",
        extendedBio: "Na haar master Manuele Therapie is Marloes zich verder gaan verdiepen in complexe wervelkolomklachten. Daarnaast gebruikt ze actieve revalidatie en dry needling als krachtige tools om snel resultaat te bereiken. Voor haar staat gelijkwaardigheid centraal: \"We doen dit écht samen.\"",
        specialties: ["Manuele therapie", "Dry Needling", "Wervelkolom specialist", "Hoofdpijnklachten", "Post-operatieve revalidatie"],
        big: "19924567804",
        education: "Master Manuele Therapie",
        quote: "Samen werken we aan een duurzaam herstel.",
        days: "Ma, Di, Do, Vr"
    },
    {
        slug: "karin",
        name: "Karin",
        role: "Senior Fysiotherapeut",
        image: "/team/karin.jpg",
        bio: "Karin heeft jarenlange ervaring in de behandeling van complexe aandoeningen. Ze is gespecialiseerd in gerichte oedeemtherapie en begeleidt vrouwen rondom en na zwangerschappen.",
        extendedBio: "Door haar jarenlange ervaring weet Karin precies hoe de weefsels en het lymfesysteem in het lichaam reageren op trauma en operaties. Haar behandelingen zijn zacht, maar ontzettend effectief. Ze heeft tevens de specialisatie Bekkenfysiotherapie afgerond om een nog betere en bredere zorg rondom het bekkengebied te kunnen bieden.",
        specialties: ["Oedeemtherapie", "Bekkenfysio", "Zwangerschapsbegeleiding", "Littekenbehandeling", "Oncologische revalidatie"],
        big: "29934567804",
        education: "BSc Fysiotherapie, Oedeemtherapeut",
        quote: "Aandacht voor de mens achter de klacht.",
        days: "Di, Wo, Do"
    },
    {
        slug: "nick",
        name: "Nick",
        role: "Sportfysiotherapeut",
        image: "/team/nick.jpg",
        bio: "Als fanatiek sporter weet Nick hoe belangrijk een vlotte terugkeer is na een blessure. Hij helpt (top)sporters weer onbevangen het veld op met effectieve en actieve trajecten.",
        extendedBio: "Tijdens zijn Master deed Nick uitgebreid onderzoek naar voorste kruisband revalidatie. Hij combineert zware krachttraining naadloos met functionele veldtraining. Nick streeft altijd naar het allerhoogste niveau en daagt zijn patiënten uit om sterker uit een blessure te komen dan ze voorheen waren.",
        specialties: ["Sportrevalidatie", "Kruisband (VKB) revalidatie", "Knie-expert", "Echografie", "Shockwave therapie", "Return to Play testing"],
        big: "39944567804",
        education: "Master Sportfysiotherapie",
        quote: "Sterker terugkomen dan voorheen.",
        days: "Ma, Wo, Vr"
    },
    {
        slug: "ingrid",
        name: "Ingrid",
        role: "Fysiotherapeut",
        image: "/team/ingrid.jpg",
        bio: "Gespecialiseerd in de zorg voor ouderen en revalidatie na orthopedische operaties. Haar behandelingen kenmerken zich door geduld, positiviteit en oprechte aandacht.",
        extendedBio: "Ingrid focust zich sterk op zelfredzaamheid en valpreventie. Ze helpt patiënten na bijvoorbeeld een nieuwe knie of heup vol vertrouwen hun dagelijkse leven weer op te pakken. Haar zachte aanpak gecombineerd met gerichte oefeningen thuis zorgt voor een veilig en duurzaam herstel.",
        specialties: ["Geriatrie", "Nieuwe Heup/Knie revalidatie", "Valpreventie", "Medical Taping", "Valtraining", "Aan huis behandelingen"],
        big: "49954567804",
        education: "BSc Fysiotherapie",
        quote: "Zorg met aandacht en geduld.",
        days: "Ma, Di, Wo, Vr"
    },
    {
        slug: "jacob",
        name: "Jacob",
        role: "Fysiotherapeut",
        image: "/team/jacob.jpg",
        bio: "Met een gedegen aanpak en oprechte aandacht helpt Jacob u snel en effectief van uw klachten af.",
        extendedBio: "Jacob heeft een brede interesse binnen de fysiotherapie en streeft ernaar de nieuwste inzichten toe te passen in zijn behandelingen. Door samen met de patiënt doelen op te stellen, zorgt hij voor een behandeling op maat.",
        specialties: ["Algemene fysiotherapie", "Revalidatie", "Preventie"],
        big: "59964567804",
        education: "BSc Fysiotherapie",
        quote: "Samen stap voor stap naar herstel.",
        days: "Ma, Di, Do"
    }
];
