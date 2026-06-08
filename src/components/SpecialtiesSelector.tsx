"use client"
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Activity, Bone, Brain, Sparkles, HeartPulse, Wind, ShieldCheck, Heart } from "lucide-react";

export default function SpecialtiesSelector() {
    // State to toggle between the 3 image integration options
    // Option A: Ronde Portret-bubble in de tekst
    // Option B: Strak Vierkant naast de introtekst rechts
    // Option C: Halve afgeronde kolom links, intro rechts
    const [imageVersion, setImageVersion] = useState<'A' | 'B' | 'C'>('A');

    // A slightly lighter tint of the previously selected 'Soft Peach'
    const lighterPeach = "bg-[#EAE0D3]";

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
            bgClass: lighterPeach
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
            bgClass: lighterPeach
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
            bgClass: lighterPeach
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
            bgClass: lighterPeach
        }
    ];

    return (
        <section className={`py-24 md:py-32 px-6 md:px-12 flex flex-col items-center relative overflow-hidden bg-background`}>
            {/* Version Toggle Controls - Sticky Wrapper */}
            <div className="sticky top-24 z-50 w-full max-w-7xl mx-auto flex justify-end">
                <div className="bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-foreground/5 flex flex-wrap gap-2 max-w-[320px] justify-end transform -translate-y-16">
                    <button
                        onClick={() => setImageVersion('A')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${imageVersion === 'A'
                            ? 'bg-blue-accent text-white shadow-md'
                            : 'bg-muted text-foreground/50 hover:bg-muted/80'
                            }`}
                    >
                        Optie A: Ronde Portret
                    </button>
                    <button
                        onClick={() => setImageVersion('B')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${imageVersion === 'B'
                            ? 'bg-blue-accent text-white shadow-md'
                            : 'bg-muted text-foreground/50 hover:bg-muted/80'
                            }`}
                    >
                        Optie B: Vierkant Blok
                    </button>
                    <button
                        onClick={() => setImageVersion('C')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${imageVersion === 'C'
                            ? 'bg-blue-accent text-white shadow-md'
                            : 'bg-muted text-foreground/50 hover:bg-muted/80'
                            }`}
                    >
                        Optie C: Half Kolom Links
                    </button>
                </div>
            </div>

            <div className="max-w-7xl w-full relative z-10 transition-all">

                {/* Header Text Option A: Ronde Avatar in tekst */}
                {imageVersion === 'A' && (
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-16 md:mb-24 relative z-20 max-w-5xl mx-auto">
                        <div className="shrink-0">
                            <div className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 relative rounded-full overflow-hidden shadow-xl border-4 border-white">
                                <div className="absolute inset-0 bg-[url('/Behandeling.jpg')] bg-cover bg-center"></div>
                            </div>
                        </div>
                        <div className="text-center lg:text-left">
                            <h2 className="text-4xl md:text-5xl lg:text-5xl font-black mb-6 text-foreground tracking-tight">Onze expertises <br className="hidden md:block" />& behandelingen.</h2>
                            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                                Van reguliere fysiotherapie tot complexe revalidatietrajecten en gespecialiseerde technieken. Ontdek aan welke klachten wij werken en met welke methodes wij u in Laren gericht kunnen helpen.
                            </p>
                        </div>
                    </div>
                )}

                {/* Header Text Option B: Strak vierkant rechts, nóg subtieler */}
                {imageVersion === 'B' && (
                    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 mb-16 md:mb-24 relative z-20 max-w-3xl mx-auto bg-primary/5 rounded-[1.5rem] p-5 md:p-8 overflow-hidden border border-primary/10">
                        <div className="lg:w-3/4 text-left order-2 lg:order-1">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 md:mb-4 text-foreground tracking-tight">Onze expertises & behandelingen.</h2>
                            <p className="text-foreground/70 text-sm md:text-base leading-relaxed font-light">
                                Van reguliere fysiotherapie tot complexe revalidatietrajecten en gespecialiseerde technieken. Ontdek aan welke klachten wij werken en met welke methodes wij u in Laren gericht kunnen helpen.
                            </p>
                        </div>
                        <div className="lg:w-1/4 flex justify-center order-1 lg:order-2">
                            <div className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 relative rounded-2xl overflow-hidden shadow-sm">
                                <div className="absolute inset-0 bg-[url('/Behandeling.jpg')] bg-cover bg-center"></div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Header Text Option C: Grote afgeronde kolom links, nóg subtieler */}
                {imageVersion === 'C' && (
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 mb-16 md:mb-24 relative z-20 max-w-4xl mx-auto">
                        <div className="lg:w-auto hidden lg:flex justify-end shrink-0">
                            <div className="w-40 h-40 xl:w-48 xl:h-48 relative rounded-tl-[60px] rounded-br-[60px] rounded-tr-xl rounded-bl-xl overflow-hidden shadow-md border border-primary/10">
                                <div className="absolute inset-0 bg-[url('/Behandeling.jpg')] bg-cover bg-center opacity-90"></div>
                            </div>
                        </div>
                        <div className="lg:w-auto flex flex-col justify-center text-left max-w-xl">
                            <h2 className="text-3xl md:text-4xl lg:text-4xl font-black mb-3 md:mb-4 text-foreground tracking-tight leading-[1.1]">Onze <span className="text-blue-accent">expertises</span> & behandelingen.</h2>
                            <p className="text-foreground/70 text-sm md:text-base leading-relaxed font-light mb-4 md:mb-6">
                                Van reguliere fysiotherapie tot complexe revalidatietrajecten en gespecialiseerde technieken. Ontdek aan welke klachten wij werken en met welke methodes wij u in Laren gericht kunnen helpen.
                            </p>

                            {/* Mobile Image Fallback - Nóg subtieler */}
                            <div className="lg:hidden w-36 h-36 sm:w-48 sm:h-48 relative rounded-tl-[40px] rounded-br-[40px] rounded-tr-xl rounded-bl-xl overflow-hidden shadow-sm mt-2 mx-auto">
                                <div className="absolute inset-0 bg-[url('/Behandeling.jpg')] bg-cover bg-center"></div>
                            </div>
                        </div>
                    </div>
                )}

                {/* The Balloon View (Clean Grid Grid/Flex) */}
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-x-12 md:gap-y-10 max-w-7xl mx-auto relative z-0 pt-8 pb-16 px-4">
                    {balloonClusters.map((cluster, idx) => {
                        return (
                            <div
                                key={cluster.id}
                                className={`relative flex flex-col items-center justify-center text-center p-4 rounded-full text-black shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 cursor-default w-[220px] h-[220px] md:w-[280px] md:h-[280px] hover:scale-105 overflow-hidden ${cluster.bgClass
                                    } ${idx % 2 === 1 ? "md:translate-y-8" : ""
                                    }`}
                            >
                                <div className="mb-2 md:mb-3 opacity-80 text-blue-accent">
                                    {cluster.icon}
                                </div>
                                <h3 className="font-bold text-base sm:text-lg md:text-xl mb-1 leading-tight px-2">{cluster.title}</h3>
                                <ul className="flex flex-col gap-0 w-full px-2 text-black">
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
