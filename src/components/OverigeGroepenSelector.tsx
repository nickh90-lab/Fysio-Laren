"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
    CheckCircle2, 
    ArrowRight, 
    FileText, 
    Users, 
    ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export type GroepId = "copd" | "parkinson" | "trom" | "boksen";

interface GroepDetail {
    id: GroepId;
    title: string;
    tabLabel: string;
    subtitle: string;
    intro: string;
    highlights: string[];
    voorWie: string;
    opzet: string;
    vergoeding: string;
    ctaText: string;
}

const groepen: GroepDetail[] = [
    {
        id: "copd",
        title: "COPD",
        tabLabel: "COPD",
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
        vergoeding: "Oefentherapie bij COPD wordt bij de juiste verwijzing vanaf de eerste behandeling vergoed vanuit de basisverzekering (conform de landelijke zorgverzekeringsvoorwaarden).",
        ctaText: "Aanmelden voor COPD",
    },
    {
        id: "parkinson",
        title: "Parkinson",
        tabLabel: "Parkinson",
        subtitle: "Behoud van mobiliteit, balans en zelfstandigheid onder gespecialiseerde begeleiding",
        intro: "Bij de ziekte van Parkinson is regelmatig en gericht bewegen van cruciaal belang. In onze Parkinsongroep richten we ons specifiek op het soepel houden van de spieren, het stimuleren van grote bewegingen en het behouden van uw zelfvertrouwen tijdens het lopen en bewegen.",
        highlights: [
            "Balans- en looptraining ter preventie van valincidenten",
            "Aanleren van cueing-technieken om 'bevriezen' (freezing) te doorbreken",
            "Oefenen van alledaagse vaardigheden (opstaan, draaien, reiken)",
            "Lotgenotencontact in een ontspannen, begripvolle en motiverende sfeer",
        ],
        voorWie: "Iedereen met de ziekte van Parkinson of atypisch parkinsonisme, ongeacht het stadium van de aandoening.",
        opzet: "Geleid door onze aangesloten ParkinsonNet fysiotherapeut. De oefeningen worden volledig afgestemd op de belastbaarheid en mogelijkheden van elke afzonderlijke deelnemer.",
        vergoeding: "Fysiotherapie bij de ziekte van Parkinson valt onder chronische fysiotherapie. Met een geldige verwijzing van uw neuroloog of huisarts wordt dit veelal vergoed door uw zorgverzekeraar.",
        ctaText: "Aanmelden voor Parkinson",
    },
    {
        id: "trom",
        title: "Trainen Op Muziek (TROM)",
        tabLabel: "Trainen Op Muziek (TROM)",
        subtitle: "Plezier in bewegen, ritme, conditie en coördinatie op stimulerende muziek",
        intro: "Trainen Op Muziek (TROM) combineert fysiotherapeutisch verantwoorde oefeningen met herkenbare, stimulerende muziek. Bewegen op een vast ritme maakt trainen lichter, geeft energie en stimuleert de coördinatie, balans en mobiliteit op een hele plezierige manier.",
        highlights: [
            "Verbetering van conditie, mobiliteit en spierkracht op een vrolijke manier",
            "Muziek als natuurlijke stimulans voor pasritme, reactiesnelheid en balans. Bewezen effectief.",
            "Gevarieerde bewegingsvormen afgestemd op ieder startniveau",
            "Fijne groepsdynamiek met veel aandacht voor plezier en vitaliteit",
        ],
        voorWie: "Voor iedereen die op een motiverende, muzikale en laagdrempelige manier wil werken aan conditie, soepelheid en zelfvertrouwen in bewegen.",
        opzet: "Wekelijkse training in onze oefenzaal onder fysiotherapeutische begeleiding. De oefeningen worden zorgvuldig opgebouwd en zijn veilig voor gewrichten en spieren.",
        vergoeding: "Kan afhankelijk van uw doelstelling en eventuele indicatie binnen een behandeltraject vallen of in groeps-/abonnementsvorm worden gevolgd. We informeren u graag over de mogelijkheden.",
        ctaText: "Aanmelden voor TROM",
    },
    {
        id: "boksen",
        title: "Non-contact boksen",
        tabLabel: "Non-contact boksen",
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
];

export default function OverigeGroepenSelector() {
    const [activeTab, setActiveTab] = useState<GroepId>("copd");
    const currentGroup = groepen.find(g => g.id === activeTab) || groepen[0];

    return (
        <div className="w-full">
            {/* Top Interactive Selector Tabs (No icons, clean text pills) */}
            <div className="mb-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 p-2 bg-foreground/5 rounded-[2.5rem] border border-foreground/5">
                    {groepen.map((groep) => {
                        const isActive = activeTab === groep.id;
                        return (
                            <button
                                key={groep.id}
                                onClick={() => setActiveTab(groep.id)}
                                className={cn(
                                    "py-3.5 px-4 sm:px-6 rounded-[2rem] font-bold text-sm md:text-base transition-all duration-300 relative cursor-pointer text-center",
                                    isActive
                                        ? "bg-white text-foreground shadow-md shadow-black/5"
                                        : "text-foreground/70 hover:text-foreground hover:bg-white/50"
                                )}
                            >
                                <span className="leading-tight">
                                    {groep.tabLabel}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Active Group Content Display */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentGroup.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="space-y-8"
                >
                    {/* Main Information Card */}
                    <div className="bg-white rounded-[3rem] p-8 md:p-14 shadow-sm border border-foreground/5 relative overflow-hidden">
                        {/* Header of Active Tab (No icons, no badge pills) */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-8 border-b border-foreground/5">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                                    {currentGroup.title}
                                </h2>
                            </div>

                            <Link
                                href="/contact"
                                className="bg-blue-accent text-white rounded-full py-3.5 px-7 font-bold text-sm md:text-base hover:bg-blue-accent/90 transition-all shadow-md flex items-center justify-center gap-2 group w-full md:w-auto shrink-0"
                            >
                                {currentGroup.ctaText}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Intro and Subtitle */}
                        <p className="text-xl md:text-2xl font-semibold text-foreground/90 mb-4 leading-relaxed">
                            {currentGroup.subtitle}
                        </p>
                        <p className="text-foreground/75 text-base md:text-lg font-light leading-relaxed mb-10 max-w-4xl">
                            {currentGroup.intro}
                        </p>

                        {/* Highlights Grid */}
                        <div className="mb-12">
                            <h3 className="text-lg font-bold text-foreground mb-4">Wat bereikt u met deze groepstraining?</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {currentGroup.highlights.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-foreground/[0.02] border border-foreground/5">
                                        <CheckCircle2 className="w-5 h-5 text-blue-accent shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base text-foreground/80 leading-relaxed font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Two Columns: Voor wie & Vergoeding */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-foreground/5">
                            {/* Card 1: Doelgroep & Trainingsopzet */}
                            <div className="bg-foreground/[0.02] rounded-3xl p-6 md:p-8 border border-foreground/5 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Users className="w-6 h-6 text-blue-accent" />
                                        <h4 className="text-lg font-bold text-foreground">Doelgroep & Opzet</h4>
                                    </div>
                                    <p className="text-sm md:text-base text-foreground/70 font-light leading-relaxed mb-4">
                                        <strong className="font-semibold text-foreground/90">Voor wie:</strong> {currentGroup.voorWie}
                                    </p>
                                    <p className="text-sm md:text-base text-foreground/70 font-light leading-relaxed">
                                        <strong className="font-semibold text-foreground/90">De training:</strong> {currentGroup.opzet}
                                    </p>
                                </div>
                            </div>

                            {/* Card 2: Verwijzing & Vergoeding */}
                            <div className="bg-foreground/[0.02] rounded-3xl p-6 md:p-8 border border-foreground/5 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <ShieldCheck className="w-6 h-6 text-blue-accent" />
                                        <h4 className="text-lg font-bold text-foreground">Verwijzing & Vergoeding</h4>
                                    </div>
                                    <p className="text-sm md:text-base text-foreground/70 font-light leading-relaxed mb-4">
                                        {currentGroup.vergoeding}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs font-semibold text-foreground/60 bg-white p-3 rounded-xl border border-foreground/5">
                                        <FileText className="w-4 h-4 text-blue-accent shrink-0" />
                                        <span>Heeft u al een verwijsbrief? Neem deze mee naar uw eerste afspraak.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
