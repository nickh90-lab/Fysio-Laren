"use client";

import React, { useState, useRef, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Activity, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const behandelingen = [
    {
        slug: "algemene-fysiotherapie",
        title: "Algemene fysiotherapie",
        desc: "Algemene fysiotherapie richt zich op het herstellen en optimaliseren van uw bewegingsvrijheid en algehele vitaliteit. Goed bewegen is een complex samenspel tussen spieren, gewrichten, het zenuwstelsel en uw dagelijkse leefgewoonten. Wanneer de balans tussen belasting en belastbaarheid verstoord raakt, ontstaan er belemmeringen. Onze fysiotherapeuten kijken daarom naar het totale functioneren van uw lichaam. Met gerichte oefentherapie, mobiliserende technieken en praktische adviezen pakken we de kern aan en bouwen we aan een sterk en veerkrachtig lichaam. Zo krijgt u weer de volledige regie over uw eigen mobiliteit en welzijn."
    },
    {
        slug: "manuele-therapie",
        title: "Manuele therapie",
        desc: "Manuele therapie is een verdieping binnen de orthopedische fysiotherapie en richt zich op het verbeteren van de beweeglijkheid en functie van gewrichten. Bij klachten aan bijvoorbeeld de nek, rug of ledematen kan manuele therapie helpen om bewegingen soepeler te laten verlopen en pijn te verminderen. Tijdens de behandeling maken we gebruik van verschillende manuele technieken, afgestemd op uw klachten en doelen. Dit combineren we met actieve oefentherapie, zodat u niet alleen tijdens de behandeling verbetering ervaart, maar ook zelf aan de slag kunt met uw herstel."
    },
    {
        slug: "dry-needling",
        title: "Dry needling",
        desc: "Soms zit er in een spier een hardnekkig 'knoopje' – een zogeheten triggerpoint – dat zorgt voor zeurende pijn of zelfs uitstraling naar bijvoorbeeld uw arm, been of hoofd. Met dry needling prikken we zo'n verkrampt puntje gericht aan met een heel dun naaldje. Er wordt geen vloeistof ingespoten (vandaar 'dry'). Het aanprikken zorgt voor een kort schokje of een snelle aanspanning van de spiervezels, waarna de spier vaak direct ontspant. Het kan even gevoelig zijn en na afloop voelt het gebied soms even beurs, een beetje zoals na een flinke training. Dry needling is geen wondermiddel op zich, maar wel een hele fijne en effectieve techniek om de scherpe spanning snel van uw spieren af te halen, zodat u met oefeningen weer prettig en vrijer kunt bewegen."
    },
    {
        slug: "orthopedische-revalidatie",
        title: "Orthopedische revalidatie",
        desc: "Na een orthopedische ingreep, zoals het plaatsen van een nieuwe knie of heup, is een zorgvuldig revalidatietraject cruciaal. Wij begeleiden u stap voor stap bij het herwinnen van uw kracht, stabiliteit en zelfvertrouwen in bewegen. In onze oefenzaal werken we wekelijks aan uw belastbaarheid via een op maat gemaakt schema. Er is nauw overleg met uw orthopedisch chirurg om het herstel veilig en vlot te laten verlopen. Uiteindelijk werken we toe naar volledige zelfstandigheid in uw dagelijkse handelingen."
    },
    {
        slug: "sportfysiotherapie",
        title: "Sport & blessures",
        desc: "Een blessure tijdens het sporten of hardlopen komt altijd ongelegen. Of u nu door uw enkel bent gegaan, last heeft van uw knie of last heeft van een zeurende overbelasting: we helpen u graag snel weer op weg. We kijken niet alleen naar de pijnlijke plek, maar naar hoe uw hele lichaam beweegt. In onze oefenzaal gaan we samen aan de slag met gerichte oefeningen, zodat u snel weer met plezier en vol vertrouwen kunt bewegen en sporten."
    },
    {
        slug: "oedeemtherapie",
        title: "Oedeemtherapie",
        desc: (
            <>
                <span>
                    Heeft u last van een hardnekkige zwelling, een zwaar of gespannen gevoel in uw armen of benen, of merkt u dat bewegen hierdoor moeizamer gaat? Dan kan er sprake zijn van oedeem: een ophoping van vocht in het weefsel. Dit ontstaat bijvoorbeeld wanneer het lymfestelsel overbelast of beschadigd is (zoals na een operatie, trauma of oncologische behandeling), maar kan ook het gevolg zijn van een verminderde afvoer via de bloedvaten (veneus oedeem).
                </span>
                <span className="block mt-4 sm:mt-5">
                    Met gespecialiseerde oedeemtherapie richten we ons op het effectief afvoeren van dit overtollige vocht en het herstellen van uw bewegingsvrijheid. Afhankelijk van uw situatie combineren we manuele lymfedrainage (een zachte, stimulerende massagetechniek) met compressietherapie, zoals zwachtelen of een passende therapeutische kous. Daarnaast ondersteunen we het herstel met gerichte bewegings- en ademhalingsoefeningen en krijgt u praktische adviezen over huidverzorging en zelfmanagement. Zo houden we de zwelling samen onder controle en kunt u weer ontspannen en met vertrouwen bewegen.
                </span>
            </>
        )
    },
    {
        slug: "oncologische-fysiotherapie",
        title: "Oncologische fysiotherapie",
        desc: "De diagnose en behandeling van kanker eisen zowel fysiek als mentaal een zware tol. Onze fysiotherapeut begeleidt u voor, tijdens en na uw medische behandeling (zoals chemotherapie of bestraling). Vermoeidheid en conditieverlies zijn vaak de grootste drempels in het dagelijks leven. Door gecontroleerd en verantwoord te blijven bewegen onder begeleiding, beperkt u spierafbraak, vermindert u stijfheid en krijgt u letterlijk weer meer regie over uw eigen lichaam. Samen werken we op een respectvolle manier aan uw persoonlijke kwaliteit van leven."
    },
    {
        slug: "parkinson",
        title: "Parkinson",
        desc: (
            <>
                <span>
                    Bij de ziekte van Parkinson is regelmatig en gericht bewegen van groot belang voor het behoud van zelfstandigheid en kwaliteit van leven. Onze fysiotherapeuten hebben jarenlange ervaring in de begeleiding van Parkinson en zijn aangesloten bij ParkinsonNet: het landelijke netwerk van zorgverleners dat gespecialiseerd is in deze aandoening.
                </span>
                <span className="block mt-3">
                    We kijken altijd nauwkeurig naar uw specifieke hulpvraag en stemmen het behandeltraject hierop af. U leert praktische bewegingsstrategieën en waardevolle tips voor alledaagse handelingen, zoals soepeler en veiliger lopen, makkelijker opstaan uit een stoel en vlotter omdraaien in bed. Ook wanneer u te maken heeft met plotseling ‘bevriezen’ (freezing), reiken wij effectieve handvatten en technieken aan om weer veilig in beweging te komen.
                </span>
                <span className="block mt-3">
                    Qua behandeling zijn er verschillende mogelijkheden: individueel (zowel bij ons op de praktijk als bij u thuis indien nodig) én in groepsverband. Voor bewegen in groepsverband bieden we meerdere gespecialiseerde beweeggroepen, zoals{" "}
                    <Link href="/gespecialiseerde-groepstraining?groep=neurologie&sub=neurofit" className="text-blue-accent font-semibold underline hover:text-blue-accent/80 transition-colors">NeuroFit</Link>,{" "}
                    <Link href="/gespecialiseerde-groepstraining?groep=neurologie&sub=trom" className="text-blue-accent font-semibold underline hover:text-blue-accent/80 transition-colors">Trainen Op Muziek (TROM)</Link> en{" "}
                    <Link href="/gespecialiseerde-groepstraining?groep=neurologie&sub=boksen" className="text-blue-accent font-semibold underline hover:text-blue-accent/80 transition-colors">Non-contact boksen</Link>. Zo kiest u altijd een vorm die het beste bij uw situatie en wensen aansluit.
                </span>
            </>
        )
    },
    {
        slug: "ms",
        title: "Multiple Sclerose (MS)",
        desc: (
            <>
                <span>
                    Bij Multiple Sclerose (MS) helpt gerichte fysiotherapie om zo actief, soepel en zelfstandig mogelijk te blijven bewegen. We kijken vooral naar wat wél kan, met functionele oefeningen voor uw balans, spierkracht en loopvaardigheid.
                </span>
                <span className="block mt-3">
                    Aangezien vermoeidheid een rol kan spelen, geven we u praktische tips voor een slimme energieverdeling over de dag en het vinden van de juiste balans tussen inspanning en rust. De begeleiding is altijd maatwerk en stemmen we af op hoe u zich op dat moment voelt.
                </span>
                <span className="block mt-3">
                    U kunt bij ons zowel individueel terecht (op de praktijk of bij u thuis indien nodig) als in groepsverband. Binnen onze praktijk organiseren we verschillende gespecialiseerde neurologische beweeggroepen, zoals{" "}
                    <Link href="/gespecialiseerde-groepstraining?groep=neurologie&sub=neurofit" className="text-blue-accent font-semibold underline hover:text-blue-accent/80 transition-colors">NeuroFit</Link>,{" "}
                    <Link href="/gespecialiseerde-groepstraining?groep=neurologie&sub=trom" className="text-blue-accent font-semibold underline hover:text-blue-accent/80 transition-colors">Trainen Op Muziek (TROM)</Link> en{" "}
                    <Link href="/gespecialiseerde-groepstraining?groep=neurologie&sub=boksen" className="text-blue-accent font-semibold underline hover:text-blue-accent/80 transition-colors">Non-contact boksen</Link>.
                </span>
            </>
        )
    },
    {
        slug: "cva",
        title: "Beroerte (CVA)",
        desc: "Na een beroerte (CVA) moet het lichaam soms vertrouwde bewegingen en vaardigheden opnieuw leren. Met gerichte neurorevalidatie en specialistische begeleiding werken we samen stap voor stap aan uw herstel. We richten ons op het verbeteren van uw balans, spierkracht, coördinatie en looppatroon met functionele oefeningen die direct aansluiten op uw dagelijks leven. Is het in de eerste fase voor u nog niet mogelijk om naar de praktijk te komen? Dan behandelen en begeleiden wij u met alle zorg bij u aan huis in Laren en omgeving."
    },
    {
        slug: "artrose",
        title: "Artrose",
        desc: "Artrose wordt nog vaak onterecht gezien als onvermijdelijke slijtage waar niets meer aan te doen is. Het tegendeel is waar: artrose is een aandoening van het totale gewricht die juist heel goed actief te beïnvloeden is. Gedoseerd bewegen is het beste medicijn om het kraakbeen gezond en de gewrichten soepel te houden. Onder deskundige begeleiding traint u gericht aan spierkracht, stabiliteit en het vinden van de juiste balans tussen belasting en herstel. Hierdoor nemen stijfheid en pijn af en bouwt u aan een sterk fundament rondom uw heupen, knieën of andere gewrichten."
    },
    {
        slug: "osteoporose",
        title: "Osteoporose",
        desc: "Bij osteoporose (botontkalking) neemt de botdichtheid af, maar regelmatig en verantwoord bewegen is juist een van de beste manieren om uw lichaam sterk te houden. Met gerichte, gewichtsdragende oefeningen stimuleren we de botkwaliteit en versterken we de spieren rondom uw gewrichten. Minstens zo belangrijk is balans- en stabiliteitstraining: door uw evenwicht te trainen, verkleint u de kans op vallen aanzienlijk. Daarnaast geven we u duidelijke voorlichting en praktisch advies over wat u in het dagelijks leven het beste wel én niet kunt doen, met veel aandacht voor het versterken van de rugspieren en het behouden van een actieve, stabiele lichaamshouding."
    },
    {
        slug: "copd",
        title: "COPD",
        desc: "Bij COPD of andere chronische longklachten kunnen kortademigheid en benauwdheid het bewegen belemmeren, waardoor de conditie langzaam kan afnemen. Met fysiotherapie werken we gericht aan het versterken van uw spieren en conditie, zodat uw lichaam zo efficiënt mogelijk omgaat met zuurstof. Daarnaast leren we u praktische ademhalingstechnieken en methodes om slijm makkelijker op te hoesten en spanning rond de borstkas te verminderen. We stemmen de oefeningen zorgvuldig af op uw persoonlijke belastbaarheid, zodat u op een veilige en verantwoorde manier actief blijft."
    },
    {
        slug: "etalagebenen",
        title: "Claudicatio Intermittens (etalagebenen)",
        desc: "Bij Claudicatio Intermittens (in de volksmond 'etalagebenen') ontstaat tijdens het lopen pijn of kramp in de benen — meestal in de kuiten — door een verminderde doorbloeding van de beenspieren. Gesuperviseerde looptherapie onder begeleiding van een gespecialiseerde fysiotherapeut is hiervoor de meest effectieve, wetenschappelijk bewezen aanpak. Door gestructureerd te trainen stimuleert u het lichaam om de zuurstofopname in de spieren te verbeteren en omliggende bloedvaatjes beter te benutten. Dit helpt om uw loopafstand stapsgewijs te vergroten en uw conditie te verbeteren, waardoor een vaatoperatie in veel gevallen kan worden voorkomen of uitgesteld."
    },
    {
        slug: "ouderenzorg",
        title: "Ouderenzorg",
        desc: "Ouder worden brengt veranderingen met zich mee, maar vitaal en zelfstandig kunnen blijven bewegen maakt een wereld van verschil in uw dagelijks leven. Onze fysiotherapeuten zijn gespecialiseerd in het begeleiden van senioren, zowel bij het behoud van spierkracht, soepele gewrichten en conditie, als bij herstel na een ziekenhuisopname of valincident. We oefenen heel praktisch op alledaagse handelingen zoals veilig opstaan, traplopen en zeker wandelen. Is het voor u lastig of fysiek niet haalbaar om naar onze praktijk te komen? Dan komen we met alle aandacht en zorg bij u aan huis in Laren en omgeving. Indien gewenst stemmen we de zorg nauw af met uw huisarts, wijkverpleging en mantelzorgers."
    },
    {
        slug: "valpreventie",
        title: "Valpreventie en Otago",
        desc: (
            <>
                <span>
                    Naarmate we ouder worden, kunnen spierkracht en evenwicht afnemen. Hierdoor kan het risico om te vallen toenemen en kan er angst ontstaan om te bewegen, terwijl juist voldoende en veilig bewegen essentieel is om sterk en zelfstandig te blijven. Met gerichte valpreventie werken we doelgericht aan spierkracht, balans en het herwinnen van vertrouwen in bewegen.
                </span>
                <span className="block mt-4 sm:mt-5">
                    Binnen onze praktijk bieden we hiervoor het wetenschappelijk bewezen Otago-oefenprogramma aan, speciaal voor mensen van 65 jaar en ouder met een verhoogd valrisico (bijvoorbeeld wanneer u al eens bent gevallen, moeite heeft met lopen of merkt dat uw balans achteruitgaat). Dit programma wordt begeleid door een hiervoor gecertificeerde fysiotherapeut en kan worden gevolgd in een kleine groep met oefeningen voor thuis, of individueel in de thuissituatie gedurende één jaar via huisbezoeken en consulten op maat.
                </span>
            </>
        )
    },
    {
        slug: "chronische-pijn",
        title: "Chronische pijn",
        desc: "Pijn die langer aanhoudt dan het normale weefselherstel (doorgaans 3 tot 6 maanden) classificeren we als chronisch. Het zenuwstelsel is in dat soort situaties overgevoelig geraakt en geeft continu alarmbellen, zonder dat er direct een lichamelijke schade is. Wij leren u begrijpen hoe uw brein en zenuwen in deze situaties werken en leggen de nadruk minder op 'de schade fixen' en meer op 'omgaan met uw belastbaarheid'. Door graded activity – het systematisch en heel voorzichtig verhogen van belasting – bouwen we samen úw leven weer stap voor stap op."
    },
    {
        slug: "tens",
        title: "TENS behandeling",
        desc: "TENS (Transcutane Elektrische Zenuwstimulatie) is een veilige, effectieve vorm van pijnbestrijding via milde elektrische stroompjes. Het apparaatje stuurt deze zachte stroompjes via elektroden op de huid naar het zenuwstelsel, wat helpt bij het dempen van pijn in het algemeen — van acute klachten tot langdurige pijn. Het is bovendien een van de weinige behandelingen die wetenschappelijk bewezen effectief helpt tegen zenuwpijn. Daarnaast kan TENS ook gericht worden gebruikt bij zenuwletsel om de spierkracht te verbeteren. Doordat TENS de pijngeleiding onderbreekt en de aanmaak van lichaamseigen pijnstillende stoffen (endorfines) stimuleert, biedt het niet alleen verlichting tijdens en direct na de behandeling, maar kan het ook een aanzienlijk langdurig effect hebben. Bij Fysio Laren krijgt u eerst een gerichte proefbehandeling en krijgt u het apparaat 7 tot 10 dagen mee naar huis om het in uw eigen leefomgeving uit te proberen. Als deze proefperiode goed verloopt, kan het TENS-apparaat definitief worden aangevraagd en wordt dit vaak vergoed door uw zorgverzekeraar."
    },
    {
        slug: "psychosomatiek",
        title: "Psychosomatiek",
        desc: "Onder invloed van spanning (zoals stress, verlies of werkdruk) kunnen zich duidelijke, fysieke klachten voordoen zoals spanningshoofdpijn of een continu verhoogde hartslag en benauwdheid in rust. Ons psychosomatisch traject slaat een overzichtelijke brug tussen deze lichamelijke signalen en de daadwerkelijke, geestelijke overspanning erachter. Met praktische technieken focussen wij ons sterk op het herstellen van de fysieke rust en het vergroten van de veerkracht van zowel uzelf als uw lichamelijk energiemanagement op de lange termijn."
    },
    {
        slug: "ademhalingstherapie",
        title: "Ontspanning- en ademhalingstherapie",
        desc: "Veel mensen ontwikkelen gedurende stressvolle periodes een hoge ademhaling (borstademhaling) of gaan zelfs hyperventileren. Hierbij kan chronische vermoeidheid, gespannen nekspieren, en duizeligheid een groot probleem worden tijdens het werk of dagelijkse ontspanning. We evalueren allereerst uw ademregelingsbasis en bekijken samen via effectieve ontspanningsinstructies uw automatische reactiesystemen te doorbreken. We focussen op functionele buikademhalingsmodellen (bijvoorbeeld 'pursed-lip breathing') zodat u op commando de hartslag en lichaamsangst weer effectief leert hanteren."
    },
    {
        slug: "hardloopanalyses",
        title: "Hardloopanalyses",
        desc: "Hardlopen is een heerlijke sport, maar vraagt ook veel van uw spieren, pezen en gewrichten. Zowel beginnende hardlopers als ervaren lopers kunnen te maken krijgen met overbelasting, bijvoorbeeld aan de knieën, schenen of achillespezen. Met een video-loopanalyse op onze loopband brengen we uw looppatroon nauwkeurig in beeld. We kijken onder andere naar uw landing, pasfrequentie, lichaamshouding en stabiliteit. Aan de hand van deze beelden geven we u praktisch en persoonlijk advies over looptechniek, versterkende oefeningen, trainingsopbouw en passend schoeisel — zodat u weer prettig, efficiënt en blessurevrij kunt hardlopen."
    },
    {
        slug: "voetentraining",
        title: "Voetentraining",
        desc: "Uw voeten vormen letterlijk de basis van uw lichaam bij het staan en bewegen. Wanneer de spieren in de voeten verzwakt of stijf zijn, kan dit niet alleen leiden tot voetklachten (zoals hielpijn of overbelasting van de peesplaat), maar ook tot compensatie en spanning in de enkels, knieën of heupen. Met gerichte voetentraining versterken we de spieren en de flexibiliteit van uw voeten en voetboog. Dit zorgt voor een betere natuurlijke schokdemping en stabiliteit, zodat u weer prettig en met vertrouwen kunt staan en lopen."
    },
    {
        slug: "medical-taping",
        title: "Medical taping",
        desc: "Medical taping (ook wel Kinesiotaping) maakt gebruik van speciale elastische tape die uw spieren en gewrichten ondersteunt zonder uw bewegingsvrijheid te beperken. In tegenstelling tot traditionele stugge sporttape kunt u met deze tape gewoon vrij blijven bewegen. Afhankelijk van de manier waarop de tape wordt aangelegd, kan deze voor verschillende doelen worden ingezet. Zo kan de tape worden gebruikt om overbelaste spieren te laten ontspannen, verzwakte spieren juist te activeren, of om extra stabiliteit en sturing te geven aan gewrichtskapsels en banden. Daarnaast kan een liftende tape-techniek worden toegepast om de doorbloeding en vochtafvoer te stimuleren en druk op het weefsel te verminderen. Medical taping is daardoor breed toepasbaar bij onder andere spierblessures (zoals een zweepslag of verrekking), pees- en gewrichtsklachten, overbelasting en zwellingen."
    },
    {
        slug: "leefstijladvies",
        title: "Leefstijladvies",
        desc: "Duurzaam herstellen en vitaal blijven gaat verder dan alleen de behandeltafel. Uw dagelijkse gewoonten spelen een grote rol in hoe uw lichaam functioneert en herstelt. Veel klachten hangen samen met factoren zoals langdurig zitten, spanning, een verkeerde werkhouding of een tekort aan rust en slaap. Samen kijken we naar uw dagelijkse routines en de balans tussen belasting en herstel. We geven u praktische en haalbare adviezen — van ergonomie op de werkplek en slimme beweegmomenten tot tips voor een goede nachtrust. Zo bouwt u aan een veerkrachtig lichaam en voorkomt u dat klachten terugkeren."
    }
];

function BehandelingenContent() {
    const searchParams = useSearchParams();
    const behandelingParam = searchParams.get("behandeling");

    const [selectedTreatmentIndex, setSelectedTreatmentIndex] = useState<number>(() => {
        if (!behandelingParam) return 0;
        const idx = behandelingen.findIndex((b) => b.slug === behandelingParam);
        return idx !== -1 ? idx : 0;
    });
    const [canScrollDown, setCanScrollDown] = useState(false);
    const treatmentScrollRef = useRef<HTMLDivElement>(null);
    const splitViewRef = useRef<HTMLDivElement>(null);
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const checkScroll = () => {
        if (treatmentScrollRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = treatmentScrollRef.current;
            setCanScrollDown(scrollHeight - scrollTop - clientHeight > 15);
        }
    };

    const handleScrollDown = () => {
        if (treatmentScrollRef.current) {
            treatmentScrollRef.current.scrollTo({
                top: treatmentScrollRef.current.scrollHeight,
                behavior: "smooth"
            });
            setTimeout(checkScroll, 200);
            setTimeout(checkScroll, 500);
        }
    };

    // Deep-linking via ?behandeling=slug
    useEffect(() => {
        if (behandelingParam) {
            const foundIdx = behandelingen.findIndex((b) => b.slug === behandelingParam);
            if (foundIdx !== -1) {
                const timer = setTimeout(() => {
                    setSelectedTreatmentIndex(foundIdx);
                    if (splitViewRef.current) {
                        splitViewRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                    if (buttonRefs.current[foundIdx]) {
                        buttonRefs.current[foundIdx]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
                    }
                }, 100);
                return () => clearTimeout(timer);
            }
        }
    }, [behandelingParam]);

    useEffect(() => {
        checkScroll();
        if (treatmentScrollRef.current) {
            treatmentScrollRef.current.scrollTop = 0;
        }
        const timer = setTimeout(checkScroll, 100);
        return () => clearTimeout(timer);
    }, [selectedTreatmentIndex]);

    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">

            {/* 1. HEADER & INTRO */}
            <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-6">
                    Behandelingen
                </h1>
                <p className="text-foreground/75 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
                    Benieuwd wat we concreet voor u kunnen doen? We combineren deskundigheid met persoonlijke aandacht, zodat u weer met een gerust hart vrij kunt bewegen.
                </p>
            </div>

            {/* 2. BEHANDELINGEN INTERACTIEVE SPLIT VIEW */}
            <div className="mb-20">
                <div ref={splitViewRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-28">
                    {/* Left Column (List) */}
                    <div className="lg:col-span-4 bg-white rounded-[2rem] p-4 shadow-sm border border-foreground/5 h-[620px] overflow-y-auto">
                        <div className="flex flex-col gap-1">
                            {behandelingen.map((item, idx) => {
                                const isSelected = selectedTreatmentIndex === idx;
                                return (
                                    <button
                                        key={item.slug}
                                        ref={(el) => { buttonRefs.current[idx] = el; }}
                                        onClick={() => setSelectedTreatmentIndex(idx)}
                                        className={cn(
                                            "w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium text-sm flex items-center justify-between cursor-pointer",
                                            isSelected
                                                ? "bg-blue-accent text-white shadow-md font-semibold"
                                                : "text-foreground/80 hover:bg-primary/20 hover:text-foreground bg-transparent"
                                        )}
                                    >
                                        <span>{item.title}</span>
                                        {isSelected && <ArrowRight className="w-4 h-4 opacity-80" />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column (Stage) */}
                    <div className="lg:col-span-8 bg-primary/5 rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-14 h-[620px] flex flex-col items-center shadow-inner relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[url('/images/hero-praktijk.jpg')] bg-cover bg-center opacity-[0.03] pointer-events-none rounded-full blur-3xl"></div>

                        {/* Scrollable Container with stable scrollbar */}
                        <div 
                            ref={treatmentScrollRef}
                            onScroll={checkScroll}
                            className="relative z-10 w-full max-w-xl flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-foreground/20 scrollbar-track-transparent flex flex-col items-center text-center my-auto py-4 px-2"
                            style={{ scrollbarGutter: "stable" }}
                        >
                            <div className="w-16 h-16 rounded-full bg-white text-blue-accent flex items-center justify-center mx-auto mb-6 shadow-sm shrink-0">
                                <Activity className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 shrink-0">
                                {behandelingen[selectedTreatmentIndex].title}
                            </h2>
                            <div className="text-sm sm:text-base md:text-[16px] text-foreground/85 font-normal leading-relaxed pb-8">
                                {behandelingen[selectedTreatmentIndex].desc}
                            </div>
                        </div>

                        {/* Subtiele visuele scroll-indicator / klikbare knop */}
                        {canScrollDown && (
                            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/85 to-transparent flex items-end justify-center pb-4 z-20">
                                <button
                                    type="button"
                                    onClick={handleScrollDown}
                                    className="pointer-events-auto text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-accent bg-white/95 hover:bg-blue-accent hover:text-white px-5 py-2 rounded-full border border-blue-accent/25 hover:border-blue-accent shadow-xs hover:shadow-md flex items-center gap-1.5 transition-all duration-200 cursor-pointer active:scale-95 group"
                                    aria-label="Scroll naar beneden voor meer informatie"
                                >
                                    <span>Meer informatie</span>
                                    <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* 4. CALL TO ACTION AFSLUITING */}
            <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-sm border border-foreground/5 text-center max-w-4xl mx-auto flex flex-col items-center">
                <h2 className="text-3xl font-bold text-foreground mb-6">Samen werken aan uw gezondheid</h2>
                <p className="text-foreground/75 text-lg mb-8 max-w-2xl font-light">
                    Wilt u persoonlijk advies over welke behandeling het beste bij uw situatie aansluit? Onze therapeuten staan voor u klaar.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                    <Link
                        href="/afspraak-maken"
                        className="bg-blue-accent text-white rounded-full py-4 px-8 font-bold flex items-center justify-center gap-2 group hover:scale-105 transition-transform w-full sm:w-auto shadow-md cursor-pointer"
                    >
                        Afspraak inplannen <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/contact"
                        className="bg-foreground/5 text-foreground hover:bg-foreground/10 rounded-full py-4 px-8 font-bold flex items-center justify-center gap-2 transition-colors w-full sm:w-auto"
                    >
                        Neem contact op
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default function Behandelingen() {
    return (
        <Suspense fallback={<div className="max-w-7xl mx-auto px-6 md:px-12 py-24 min-h-[600px]" />}>
            <BehandelingenContent />
        </Suspense>
    );
}
