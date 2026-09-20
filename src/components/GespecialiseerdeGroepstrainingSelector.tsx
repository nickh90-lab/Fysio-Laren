"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
    CheckCircle2, 
    ArrowRight, 
    FileText, 
    Users, 
    ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export type HoofdCategorie = "fysiofit" | "neurologie" | "copd";
export type NeuroSubtype = "neurofit" | "trom" | "boksen";

interface GroepContent {
    title: string;
    subtitle: string;
    intro: string;
    highlights: string[];
    voorWie: string;
    opzet: string;
    vergoeding: string;
    ctaText: string;
}

const fysiofitContent: GroepContent = {
    title: "FysioFit",
    subtitle: "Verantwoord bewegen en fitnessen onder deskundige fysiotherapeutische begeleiding",
    intro: "Voor iedereen die fit wil blijven, wil werken aan herstel of een deskundige stok achter de deur zoekt. Bij FysioFit traint u in onze oefenzaal op uw eigen tempo en niveau, met de zekerheid dat er altijd een professionele fysiotherapeut aanwezig is om u te adviseren en de juiste oefeningen aan te reiken.",
    highlights: [
        "Trainen in een professioneel ingerichte oefenzaal in hartje Laren, Gld",
        "Deskundige begeleiding en toezicht van onze fysiotherapeuten",
        "Persoonlijk afgestemd trainingsschema op uw doelen en belastbaarheid",
        "Zowel overdag als 's avonds meerdere trainingsmogelijkheden",
    ],
    voorWie: "Voor iedereen die zelfstandig en verantwoord wil trainen met deskundige ondersteuning (ook ideaal na afloop van een fysiotherapietraject of ter preventie van nieuwe klachten).",
    opzet: "Wekelijks trainen in blokken van 30 of 60 minuten. We stemmen samen met u het trainingsschema en het meest geschikte tijdstip af.",
    vergoeding: "FysioFit is een abonnementsvorm (geen verwijsbrief nodig). U kiest zelf voor 30 of 60 minuten en 1 of 2 keer per week.",
    ctaText: "Aanmelden voor FysioFit",
};

const copdContent: GroepContent = {
    title: "COPD Beweeggroep",
    subtitle: "Verantwoord werken aan uw longconditie, uithoudingsvermogen en ademhaling",
    intro: "Leven met COPD of een andere chronische longaandoening brengt vaak kortademigheid, benauwdheid en conditieverlies met zich mee. In onze COPD-groep traint u in een veilige, vertrouwde omgeving onder directe leiding van een gespecialiseerde longfysiotherapeut.",
    highlights: [
        "Versterken van ademhalings- en beenspieren voor meer loopafstand",
        "Aanleren van effectieve ademhalingstechnieken bij inspanning",
        "Minder snel benauwd en vermoeid bij dagelijkse activiteiten",
        "Continue professionele monitoring van saturatie en hartslag indien gewenst",
    ],
    voorWie: "Mensen met de diagnose COPD (stadium GOLD I t/m IV) of chronische longklachten die onder deskundige fysiotherapeutische begeleiding willen bewegen.",
    opzet: "Wekelijkse training in een kleine, rustige groep (max. 6 tot 8 deelnemers). We beginnen altijd met een individuele intake en conditietest om uw persoonlijke beginsituatie vast te stellen.",
    vergoeding: "Oefentherapie bij COPD wordt bij de juiste verwijzing vanaf de eerste behandeling vergoed vanuit de basisverzekering (conform landelijke zorgverzekeringsvoorwaarden).",
    ctaText: "Aanmelden voor COPD",
};

const neuroContent: Record<NeuroSubtype, GroepContent & { tabLabel: string }> = {
    neurofit: {
        tabLabel: "NeuroFit",
        title: "NeuroFit",
        subtitle: "Behoud van mobiliteit, balans, loopvaardigheid en zelfstandigheid",
        intro: "Bij neurologische aandoeningen zoals de ziekte van Parkinson, Multiple Sclerose (MS) of na een beroerte (CVA) is regelmatig en doelgericht bewegen essentieel. In onze NeuroFit-groep werken we aan het behoud en verbeteren van uw spierkracht, conditie, balans, coördinatie en loopvaardigheid in een veilige omgeving.",
        highlights: [
            "Balans- en looptraining",
            "Verbeteren van kracht en conditie",
            "Oefenen van alledaagse vaardigheden (opstaan, draaien, reiken en lopen)",
            "Trainen in een ontspannen en motiverende sfeer",
        ],
        voorWie: "Mensen met neurologische aandoeningen (o.a. de ziekte van Parkinson, parkinsonisme, MS of restverschijnselen na CVA) die veilig en onder deskundig toezicht willen bewegen.",
        opzet: "Onder leiding van onze gespecialiseerde neuro-/ParkinsonNet fysiotherapeut. De oefeningen worden volledig afgestemd op de persoonlijke belastbaarheid en het energieniveau van iedere deelnemer.",
        vergoeding: "Neurologische fysiotherapie valt veelal onder chronische fysiotherapie. Met een geldige verwijzing van uw neuroloog of huisarts wordt dit veelal vergoed door uw zorgverzekeraar.",
        ctaText: "Aanmelden voor NeuroFit",
    },
    trom: {
        tabLabel: "TROM (Trainen Op Muziek)",
        title: "Trainen Op Muziek (TROM)",
        subtitle: "Plezier in bewegen, ritme, conditie en coördinatie op stimulerende muziek",
        intro: "Trainen Op Muziek (TROM) combineert fysiotherapeutisch verantwoorde oefeningen met herkenbare, motiverende muziek. Bewegen op een vast ritme maakt trainen lichter, geeft energie en stimuleert de hersen-spierverbindingen, het pasritme en de coördinatie op een hele plezierige manier.",
        highlights: [
            "Verbetering van conditie, mobiliteit en spierkracht op een aangename manier",
            "Muziek als natuurlijke stimulans voor pasritme, reactiesnelheid en balans. Bewezen effectief.",
            "Gevarieerde bewegingsvormen afgestemd op ieders persoonlijk niveau (zittend en staand)",
            "Fijne groepsdynamiek met veel aandacht voor plezier en vitaliteit",
        ],
        voorWie: "Voor iedereen die op een aangename, muzikale en laagdrempelige manier wil werken aan coördinatie, soepelheid, ritmegevoel en zelfvertrouwen in bewegen.",
        opzet: "Wekelijkse training in onze oefenzaal onder fysiotherapeutische begeleiding. De oefeningen worden zorgvuldig opgebouwd en zijn veilig voor gewrichten en spieren.",
        vergoeding: "Kan afhankelijk van uw doelstelling en eventuele indicatie binnen een fysiotherapietraject vallen of in groeps-/abonnementsvorm worden gevolgd. Vraag ons naar de actuele mogelijkheden.",
        ctaText: "Aanmelden voor TROM",
    },
    boksen: {
        tabLabel: "Non-contact boksen",
        title: "Non-contact boksen",
        subtitle: "Energieke neuro-motorische bokstraining zonder fysiek contact",
        intro: "Non-contact boksen is een dynamische, intensieve en vooral ontzettend leuke trainingsvorm. Er wordt níét tegen elkaar gevochten: alle oefeningen vinden plaats op stootkussens, bokszakken of met de fysiotherapeut. Boksen stimuleert razendsnel de neuro-motorische verbindingen in het brein.",
        highlights: [
            "Geen fysiek contact of stoten naar het lichaam",
            "Krachtige stimulans voor balans, voetenwerk, coördinatie en reactiesnelheid",
            "Dubbeltaken trainen: denkvermogen en beweging tegelijk activeren",
            "Bewezen effectief bij o.a. Parkinson (Boxing for Parkinson) en neuro-revalidatie",
        ],
        voorWie: "Ideaal voor mensen met neurologische klachten (zoals Parkinson), maar ook voor iedereen die op een energieke, veilige en motiverende manier aan kracht, reactie en conditie wil werken.",
        opzet: "Groepstraining met bokshandschoenen op stootkussens, circuitvormen en voetenwerkoefeningen onder fysiotherapeutische leiding. Iedereen kan op zijn eigen niveau meedoen.",
        vergoeding: "Kan deel uitmaken van een geïndiceerd fysiotherapietraject of worden gevolgd in abonnements-/groepsvorm. Vraag naar de specifieke mogelijkheden voor uw situatie.",
        ctaText: "Aanmelden voor Non-contact boksen",
    }
};

export default function GespecialiseerdeGroepstrainingSelector() {
    const searchParams = useSearchParams();
    const paramGroep = searchParams.get("groep");
    const paramSub = searchParams.get("sub");

    const [prevSearchParams, setPrevSearchParams] = useState(searchParams);
    const [hoofdcategorie, setHoofdcategorie] = useState<HoofdCategorie>(() => {
        if (paramGroep === "copd") return "copd";
        if (paramGroep === "neurologie") return "neurologie";
        return "fysiofit";
    });
    const [neuroSubtype, setNeuroSubtype] = useState<NeuroSubtype>(() => {
        if (paramSub === "trom" || paramSub === "boksen") return paramSub;
        return "neurofit";
    });

    if (searchParams !== prevSearchParams) {
        setPrevSearchParams(searchParams);
        if (paramGroep === "copd") {
            setHoofdcategorie("copd");
        } else if (paramGroep === "neurologie") {
            setHoofdcategorie("neurologie");
            if (paramSub === "trom" || paramSub === "boksen" || paramSub === "neurofit") {
                setNeuroSubtype(paramSub);
            }
        } else if (paramGroep === "fysiofit") {
            setHoofdcategorie("fysiofit");
        }
    }

    const activeContent = 
        hoofdcategorie === "fysiofit"
            ? fysiofitContent
            : hoofdcategorie === "copd"
                ? copdContent
                : neuroContent[neuroSubtype];

    return (
        <div className="w-full">
            {/* Hoofd Selector: FysioFit, Neurologie en COPD */}
            <div className="mb-6 flex justify-center">
                <div className="inline-flex p-1.5 sm:p-2 bg-foreground/5 rounded-[2.5rem] border border-foreground/5 w-full max-w-xl">
                    <button
                        onClick={() => setHoofdcategorie("fysiofit")}
                        className={cn(
                            "flex-1 py-3.5 sm:py-4 px-3 sm:px-6 rounded-[2rem] font-bold text-sm sm:text-base md:text-lg transition-all duration-300 relative cursor-pointer text-center whitespace-nowrap",
                            hoofdcategorie === "fysiofit"
                                ? "bg-white text-foreground shadow-md shadow-black/5"
                                : "text-foreground/70 hover:text-foreground hover:bg-white/50"
                        )}
                    >
                        FysioFit
                    </button>
                    <button
                        onClick={() => setHoofdcategorie("neurologie")}
                        className={cn(
                            "flex-1 py-3.5 sm:py-4 px-3 sm:px-6 rounded-[2rem] font-bold text-sm sm:text-base md:text-lg transition-all duration-300 relative cursor-pointer text-center whitespace-nowrap",
                            hoofdcategorie === "neurologie"
                                ? "bg-white text-foreground shadow-md shadow-black/5"
                                : "text-foreground/70 hover:text-foreground hover:bg-white/50"
                        )}
                    >
                        Neurologie
                    </button>
                    <button
                        onClick={() => setHoofdcategorie("copd")}
                        className={cn(
                            "flex-1 py-3.5 sm:py-4 px-3 sm:px-6 rounded-[2rem] font-bold text-sm sm:text-base md:text-lg transition-all duration-300 relative cursor-pointer text-center whitespace-nowrap",
                            hoofdcategorie === "copd"
                                ? "bg-white text-foreground shadow-md shadow-black/5"
                                : "text-foreground/70 hover:text-foreground hover:bg-white/50"
                        )}
                    >
                        COPD
                    </button>
                </div>
            </div>

            {/* Sub Selector voor Neurologie (NeuroFit, TROM, Non-contact boksen) */}
            <AnimatePresence>
                {hoofdcategorie === "neurologie" && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mb-10 overflow-hidden"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 bg-foreground/5 rounded-[2rem] border border-foreground/5 max-w-2xl mx-auto">
                            {(["neurofit", "trom", "boksen"] as NeuroSubtype[]).map((key) => {
                                const sub = neuroContent[key];
                                const isActive = neuroSubtype === key;
                                return (
                                    <button
                                        key={key}
                                        onClick={() => setNeuroSubtype(key)}
                                        className={cn(
                                            "py-3 px-4 rounded-[1.75rem] font-semibold text-sm transition-all duration-200 cursor-pointer text-center",
                                            isActive
                                                ? "bg-blue-accent text-white shadow-sm"
                                                : "text-foreground/75 hover:text-foreground hover:bg-white/60"
                                        )}
                                    >
                                        {sub.tabLabel}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Inhoudskaart */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={hoofdcategorie + (hoofdcategorie === "neurologie" ? `-${neuroSubtype}` : "")}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="bg-white rounded-[3rem] p-8 md:p-14 shadow-sm border border-foreground/5 relative overflow-hidden">
                        {/* Header van het actieve tabblad */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-8 border-b border-foreground/5">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                                    {activeContent.title}
                                </h2>
                            </div>

                            <Link
                                href="/contact"
                                className="bg-blue-accent text-white rounded-full py-3.5 px-7 font-bold text-sm md:text-base hover:bg-blue-accent/90 transition-all shadow-md flex items-center justify-center gap-2 group w-full md:w-auto shrink-0"
                            >
                                {activeContent.ctaText}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Intro en Subtitel */}
                        <p className="text-xl md:text-2xl font-semibold text-foreground/90 mb-4 leading-relaxed">
                            {activeContent.subtitle}
                        </p>
                        <p className="text-foreground/75 text-base md:text-lg font-light leading-relaxed mb-10 max-w-4xl">
                            {activeContent.intro}
                        </p>

                        {/* Highlights Grid */}
                        <div className="mb-12">
                            <h3 className="text-lg font-bold text-foreground mb-4">Wat bereikt u met deze training?</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {activeContent.highlights.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-foreground/[0.02] border border-foreground/5">
                                        <CheckCircle2 className="w-5 h-5 text-blue-accent shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base text-foreground/80 leading-relaxed font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Twee kolommen: Doelgroep & Vergoeding */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-foreground/5">
                            {/* Kaart 1: Doelgroep & Trainingsopzet */}
                            <div className="bg-foreground/[0.02] rounded-3xl p-6 md:p-8 border border-foreground/5 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Users className="w-6 h-6 text-blue-accent" />
                                        <h4 className="text-lg font-bold text-foreground">Doelgroep & Opzet</h4>
                                    </div>
                                    <p className="text-sm md:text-base text-foreground/70 font-light leading-relaxed mb-4">
                                        <strong className="font-semibold text-foreground/90">Voor wie:</strong> {activeContent.voorWie}
                                    </p>
                                    <p className="text-sm md:text-base text-foreground/70 font-light leading-relaxed">
                                        <strong className="font-semibold text-foreground/90">De training:</strong> {activeContent.opzet}
                                    </p>
                                </div>
                            </div>

                            {/* Kaart 2: Verwijzing & Vergoeding OF Tarieven */}
                            <div className="bg-foreground/[0.02] rounded-3xl p-6 md:p-8 border border-foreground/5 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <ShieldCheck className="w-6 h-6 text-blue-accent" />
                                        <h4 className="text-lg font-bold text-foreground">
                                            {hoofdcategorie === "fysiofit" ? "Tarieven FysioFit" : "Verwijzing & Vergoeding"}
                                        </h4>
                                    </div>

                                    {hoofdcategorie === "fysiofit" ? (
                                        <div className="space-y-3 mb-4">
                                            <div className="grid grid-cols-2 gap-2.5">
                                                <div className="bg-white p-3 rounded-2xl border border-foreground/5 shadow-2xs">
                                                    <span className="text-xs text-foreground/70 block font-medium">1x per week (30 min)</span>
                                                    <span className="text-lg font-black text-foreground">€35<span className="text-xs font-normal text-foreground/50">/mnd</span></span>
                                                </div>
                                                <div className="bg-white p-3 rounded-2xl border border-foreground/5 shadow-2xs">
                                                    <span className="text-xs text-foreground/70 block font-medium">2x per week (30 min)</span>
                                                    <span className="text-lg font-black text-foreground">€49<span className="text-xs font-normal text-foreground/50">/mnd</span></span>
                                                </div>
                                                <div className="bg-white p-3 rounded-2xl border border-foreground/5 shadow-2xs">
                                                    <span className="text-xs text-foreground/70 block font-medium">1x per week (60 min)</span>
                                                    <span className="text-lg font-black text-foreground">€46<span className="text-xs font-normal text-foreground/50">/mnd</span></span>
                                                </div>
                                                <div className="bg-white p-3 rounded-2xl border border-foreground/5 shadow-2xs">
                                                    <span className="text-xs text-foreground/70 block font-medium">2x per week (60 min)</span>
                                                    <span className="text-lg font-black text-foreground">€82<span className="text-xs font-normal text-foreground/50">/mnd</span></span>
                                                </div>
                                            </div>
                                            <p className="text-xs text-foreground/60 leading-relaxed pt-1">
                                                Geen verwijsbrief nodig. Instromen kan op elk moment na een vrijblijvende intake.
                                            </p>
                                        </div>
                                    ) : (
                                        <p className="text-sm md:text-base text-foreground/70 font-light leading-relaxed mb-4">
                                            {activeContent.vergoeding}
                                        </p>
                                    )}

                                    {hoofdcategorie !== "fysiofit" && (
                                        <div className="flex items-center gap-2 text-xs font-semibold text-foreground/60 bg-white p-3 rounded-xl border border-foreground/5">
                                            <FileText className="w-4 h-4 text-blue-accent shrink-0" />
                                            <span>Heeft u een verwijsbrief van uw specialist of huisarts? Neem deze mee naar de intake.</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
