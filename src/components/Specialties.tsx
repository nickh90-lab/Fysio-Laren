"use client"
import React from "react";
import Link from "next/link";
import { ArrowRight, Activity, Bone, Brain, Sparkles, HeartPulse, Wind, ShieldCheck, Heart } from "lucide-react";

const balloonClusters = [
    {
        id: "rug-nek",
        title: "Rug, Nek & Hoofd",
        icon: <Sparkles size={40} />,
        items: ["Nek- en schouderklachten", "Rugklachten", "(Spannings)hoofdpijn", "Duizeligheid"],
        bgClass: "bg-white"
    },
    {
        id: "gewrichten",
        title: "Artrose & Gewrichten",
        icon: <Bone size={40} />,
        items: ["Artrose (slijtage)", "Osteoporose", "Reumatische klachten", "Manuele therapie/Mulligan", "Heup- en knieklachten"],
        bgClass: "bg-primary/20"
    },
    {
        id: "revalidatie",
        title: "Revalidatie (Na Operatie)",
        icon: <HeartPulse size={40} />,
        items: ["Orthopedische ingrepen", "Nieuwe heup of knie", "Oncologie", "Herstel na botbreuken"],
        bgClass: "bg-white"
    },
    {
        id: "sport",
        title: "Sport & Blessures",
        icon: <Activity size={40} />,
        items: ["Acute sportblessures", "Sport-specifieke training", "Hardloopanalyses", "Medical taping", "Voetentraining"],
        bgClass: "bg-primary/20"
    },
    {
        id: "neurologie",
        title: "Neurologie",
        icon: <Brain size={40} />,
        items: ["Parkinson", "Multiple Sclerose (MS)", "Beroerte (CVA)"],
        bgClass: "bg-white"
    },
    {
        id: "vaten-oedeem",
        title: "Longen, Vaten & Oedeem",
        icon: <Wind size={40} />,
        items: ["COPD", "Claudicatio Intermittens (etalagebenen)", "Oedeemtherapie"],
        bgClass: "bg-primary/20"
    },
    {
        id: "pijn-mentaal",
        title: "Pijn & Mentale Balans",
        icon: <Heart size={40} />,
        items: ["Chronische aanhoudende pijn", "Psychosomatiek", "Ademhalings-/ontspanningstherapie", "TENS pijnbestrijding"],
        bgClass: "bg-white"
    },
    {
        id: "ouderenzorg",
        title: "Ouderenzorg & Preventie",
        icon: <ShieldCheck size={40} />,
        items: ["Valpreventie", "Behoud van mobiliteit", "Fysiotherapie aan huis"],
        bgClass: "bg-primary/20"
    }
];

export default function Specialties() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-background flex flex-col items-center overflow-hidden">
            <div className="max-w-7xl w-full">
                <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground tracking-tight">Onze expertises <br className="hidden md:block" />& behandelingen.</h2>
                    <p className="text-foreground/70 text-lg md:text-xl leading-relaxed font-light">
                        Van reguliere fysiotherapie tot complexe revalidatietrajecten en gespecialiseerde technieken. Ontdek aan welke klachten wij werken en met welke methodes wij u in Laren gericht kunnen helpen.
                    </p>
                </div>

                {/* The Balloon View (Clean Grid Grid/Flex) */}
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-x-12 md:gap-y-10 max-w-7xl mx-auto relative z-0 pt-8 pb-16 px-4">
                    {balloonClusters.map((cluster, idx) => {
                        return (
                            <div
                                key={cluster.id}
                                className={`relative flex flex-col items-center justify-center text-center p-4 rounded-full text-foreground shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 cursor-default w-[220px] h-[220px] md:w-[280px] md:h-[280px] hover:scale-105 overflow-hidden ${cluster.bgClass
                                    } ${idx % 2 === 1 ? "md:translate-y-8" : ""
                                    }`}
                            >
                                <div className="mb-2 md:mb-3 opacity-80 text-blue-accent">
                                    {cluster.icon}
                                </div>
                                <h3 className="font-bold text-base sm:text-lg md:text-xl mb-1 leading-tight px-2">{cluster.title}</h3>
                                <ul className="flex flex-col gap-0 w-full px-2">
                                    {cluster.items.map((item, i) => (
                                        <li key={i} className="text-xs md:text-sm font-light opacity-80 hover:opacity-100 transition-opacity leading-snug">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* Algemene Call-to-action */}
                <div className="flex justify-center mt-20 relative z-10">
                    <Link href="/fysiotherapie" className="inline-flex items-center text-white font-bold hover:gap-3 transition-all bg-blue-accent px-8 md:px-10 py-4 md:py-5 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-accent/90 text-lg">
                        Bekijk het volledige overzicht <ArrowRight size={22} className="ml-3" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
