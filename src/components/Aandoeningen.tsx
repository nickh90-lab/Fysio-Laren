"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Activity, ShieldCheck, HeartPulse, Brain, Wind, Bone, Heart, Sparkles, Footprints, Hand } from "lucide-react";
import { cn } from "@/lib/utils";

interface KlachtenCluster {
    id: string;
    title: string;
    icon: React.ReactNode;
    items: string[];
    href: string;
    category: "spieren-gewrichten" | "neurologie-chronisch" | "herstel-senioren";
}

const klachtenClusters: KlachtenCluster[] = [
    // Groep 1: Wervelkolom & Grote Gewrichten
    {
        id: "rug-nek",
        title: "Rug, Nek & Hoofd",
        icon: <Sparkles size={38} />,
        items: ["Nek- en schouderklachten", "Rugklachten", "(Spannings)hoofdpijn", "Duizeligheid"],
        href: "/behandelingen?behandeling=manuele-therapie",
        category: "spieren-gewrichten"
    },
    {
        id: "schouder-arm",
        title: "Schouder, Arm & Hand",
        icon: <Hand size={38} />,
        items: ["Schouderpijn & peesklachten", "Tennisarm & golferselleboog", "RSI & beeldschermklachten", "Pols- en handklachten"],
        href: "/behandelingen?behandeling=algemene-fysiotherapie",
        category: "spieren-gewrichten"
    },
    {
        id: "artrose",
        title: "Artrose & Gewrichten",
        icon: <Bone size={38} />,
        items: ["Artrose (slijtage)", "Reumatische klachten", "Heup- en knieklachten", "Schouderklachten"],
        href: "/behandelingen?behandeling=artrose",
        category: "spieren-gewrichten"
    },

    // Groep 2: Sport, Revalidatie & Voeten (Actief herstel)
    {
        id: "sport",
        title: "Sport & Blessures",
        icon: <Activity size={38} />,
        items: ["Acute sportblessures", "Sport-specifieke training", "Hardloopanalyses", "Overbelastingsklachten"],
        href: "/behandelingen?behandeling=sportfysiotherapie",
        category: "spieren-gewrichten"
    },
    {
        id: "revalidatie",
        title: "Revalidatie (Na Operatie)",
        icon: <HeartPulse size={38} />,
        items: ["Orthopedische ingrepen", "Nieuwe heup of knie", "Herstel na botbreuken", "Voorbereiding op operatie"],
        href: "/behandelingen?behandeling=orthopedische-revalidatie",
        category: "herstel-senioren"
    },
    {
        id: "voeten",
        title: "Voetentraining & Voetklachten",
        icon: <Footprints size={38} />,
        items: ["Hallux valgus", "Hielspoor & peesplaat", "Platvoeten & voorvoetpijn", "Klauw- en hamertenen"],
        href: "/behandelingen?behandeling=voetentraining",
        category: "spieren-gewrichten"
    },

    // Groep 3: Neurologie (3 aandoeningen samen)
    {
        id: "parkinson",
        title: "Parkinson",
        icon: <Brain size={38} />,
        items: ["Bewegingsadviezen", "Balansverbetering/looptraining", "Krachtopbouw", "Conditieverbetering"],
        href: "/behandelingen?behandeling=parkinson",
        category: "neurologie-chronisch"
    },
    {
        id: "ms",
        title: "Multiple Sclerose (MS)",
        icon: <Brain size={38} />,
        items: ["Coördinatieverbetering", "Balans-looptraining", "Krachtopbouw", "Conditieverbetering"],
        href: "/behandelingen?behandeling=ms",
        category: "neurologie-chronisch"
    },
    {
        id: "cva",
        title: "Beroerte (CVA)",
        icon: <Brain size={38} />,
        items: ["Balans-looptraining", "Herleren van vaardigheden", "Krachtopbouw", "Conditieverbetering"],
        href: "/behandelingen?behandeling=cva",
        category: "neurologie-chronisch"
    },

    // Groep 4: Gespecialiseerde & Complexe Zorg
    {
        id: "oncologie",
        title: "Oncologie",
        icon: <HeartPulse size={38} />,
        items: ["Herstel tijdens/na behandeling", "Opbouwen van conditie", "Omgaan met vermoeidheid", "Krachtopbouw"],
        href: "/behandelingen?behandeling=oncologische-fysiotherapie",
        category: "neurologie-chronisch"
    },
    {
        id: "osteoporose",
        title: "Osteoporose",
        icon: <ShieldCheck size={38} />,
        items: ["Botontkalking", "Preventie van botbreuken", "Begeleid bewegen", "Gerichte krachttraining"],
        href: "/behandelingen?behandeling=osteoporose",
        category: "spieren-gewrichten"
    },
    {
        id: "pijn-mentaal",
        title: "Chronische & Aanhoudende Pijn",
        icon: <Heart size={38} />,
        items: ["Aanhoudende pijnklachten", "Overgevoelig zenuwstelsel", "Onbegrepen klachten (ALK)", "TENS pijnbestrijding"],
        href: "/behandelingen?behandeling=chronische-pijn",
        category: "neurologie-chronisch"
    },

    // Groep 5: Longen, Stress & Vaten
    {
        id: "copd",
        title: "COPD & Longklachten",
        icon: <Wind size={38} />,
        items: ["Ademhalingsoefeningen", "Vermindering kortademigheid", "Krachtopbouw", "Conditieverbetering"],
        href: "/behandelingen?behandeling=copd",
        category: "herstel-senioren"
    },
    {
        id: "stress-ademhaling",
        title: "Ontspanning- en ademhalingstherapie",
        icon: <Wind size={38} />,
        items: ["Stress- en burn-outklachten", "Hyperventilatie & benauwdheid", "Spanningshoofdpijn & nekspanning", "Onrustige ademhaling"],
        href: "/behandelingen?behandeling=ademhalingstherapie",
        category: "herstel-senioren"
    },
    {
        id: "etalagebenen",
        title: "Claudicatio Intermittens",
        icon: <Activity size={38} />,
        items: ["Etalagebenen", "Vermindering van pijn/kramp", "Verbeteren loopafstand", "Looptraining onder begeleiding"],
        href: "/behandelingen?behandeling=etalagebenen",
        category: "neurologie-chronisch"
    },

    // Groep 6: Vocht, Senioren & Balans
    {
        id: "oedeem",
        title: "Oedeem",
        icon: <HeartPulse size={38} />,
        items: ["Vochtophoping", "Zwelling na operatie", "Lymfedrainage", "Oedeemtherapie"],
        href: "/behandelingen?behandeling=oedeemtherapie",
        category: "herstel-senioren"
    },
    {
        id: "ouderenzorg",
        title: "Ouderenzorg & Aan Huis",
        icon: <ShieldCheck size={38} />,
        items: ["Behoud van mobiliteit", "Fysiotherapie aan huis", "Herstel na ziekenhuisopname", "Vitaal ouder worden"],
        href: "/behandelingen?behandeling=ouderenzorg",
        category: "herstel-senioren"
    },
    {
        id: "valpreventie",
        title: "Valpreventie en Otago",
        icon: <Activity size={38} />,
        items: ["Otago-oefenprogramma", "Balans- en krachttraining", "Groepstraining & aan huis", "Valrisico verminderen"],
        href: "/behandelingen?behandeling=valpreventie",
        category: "herstel-senioren"
    }
];

export default function Aandoeningen() {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">

            {/* 1. HEADER & INTRO */}
            <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-6">
                    Aandoeningen
                </h1>
                <p className="text-foreground/75 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
                    Pijn bij het bewegen, een stijve nek of herstellen na een blessure of operatie? Wat uw klacht ook is: we kijken graag samen hoe we u weer prettig en zonder zorgen in beweging krijgen.
                </p>
            </div>

            {/* 2. SPEELSE RONDJES (Gestructureerd 3-koloms grid met perfect uitgebalanceerde tussenruimtes) */}
            <div className="mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-14 md:gap-y-16 gap-x-6 md:gap-x-10 lg:gap-x-12 max-w-6xl mx-auto pt-4 pb-20 px-4 justify-items-center">
                    {klachtenClusters.map((cluster, idx) => {
                        const isEven = idx % 2 === 0;
                        const bgStyleClass = isEven 
                            ? "bg-white" 
                            : "bg-[#FAF7F2] border border-foreground/5";

                        // Tablet (2 kolommen): kolom 2 subtiel omlaag
                        // Desktop (3 kolommen): middelste kolom (idx % 3 === 1) altijd subtiel omlaag
                        // Hierdoor heeft ELKE bol in een kolom exact dezelfde afstand naar boven en beneden!
                        const staggerClass = idx % 3 === 1 ? "lg:translate-y-8" : "lg:translate-y-0";
                        const tabletStagger = idx % 2 === 1 ? "md:translate-y-6 lg:translate-y-0" : "";

                        return (
                            <Link
                                key={cluster.id}
                                href={cluster.href}
                                className={cn(
                                    "relative flex flex-col items-center justify-center text-center p-5 rounded-full text-black shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 cursor-pointer w-[245px] h-[245px] sm:w-[265px] sm:h-[265px] md:w-[280px] md:h-[280px] hover:scale-105 overflow-hidden group",
                                    bgStyleClass,
                                    staggerClass,
                                    tabletStagger
                                )}
                            >
                                <div className="mb-2 md:mb-3 opacity-80 text-blue-accent group-hover:scale-110 group-hover:opacity-100 transition-all">
                                    {cluster.icon}
                                </div>
                                <h2 className="font-bold text-base sm:text-lg md:text-xl mb-1.5 leading-tight px-3 text-foreground group-hover:text-blue-accent transition-colors">
                                    {cluster.title}
                                </h2>
                                <ul className="flex flex-col gap-0.5 w-full px-3 text-black">
                                    {cluster.items.map((item, i) => (
                                        <li key={i} className="text-xs md:text-[13px] font-light opacity-80 hover:opacity-100 transition-opacity leading-snug">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* 3. DWARSVERWIJZING NAAR BEHANDELINGEN */}
            <div className="mb-20 bg-muted rounded-[2.5rem] p-8 md:p-12 border border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        Benieuwd naar onze behandelmethodes?
                    </h3>
                    <p className="text-foreground/75 text-base md:text-lg font-light leading-relaxed">
                        Ontdek met welke technieken en therapievormen (zoals manuele therapie, revalidatie of dry needling) wij u kunnen helpen.
                    </p>
                </div>
                <Link
                    href="/behandelingen"
                    className="inline-flex items-center text-white bg-blue-accent font-bold hover:bg-blue-accent/90 transition-all px-8 py-4 rounded-full shadow-md hover:scale-105 shrink-0 text-base"
                >
                    Bekijk behandelingen <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
            </div>

        </div>
    );
}
