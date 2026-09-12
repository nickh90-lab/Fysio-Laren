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

export type NeuroGroepId = "neurofit" | "trom" | "boksen";

interface NeuroGroepDetail {
    id: NeuroGroepId;
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

const neuroGroepen: NeuroGroepDetail[] = [
    {
        id: "neurofit",
        title: "NeuroFit",
        tabLabel: "NeuroFit",
        subtitle: "Behoud van mobiliteit, balans, loopvaardigheid en zelfstandigheid",
        intro: "Bij neurologische aandoeningen zoals de ziekte van Parkinson, Multiple Sclerose (MS) of na een beroerte (CVA) is regelmatig en doelgericht bewegen essentieel. In onze NeuroFit-groep werken we aan het behoud en verbeteren van uw motoriek, spierkracht en stabiliteit in een veilige omgeving.",
        highlights: [
            "Balans- en looptraining ter preventie van valincidenten",
            "Aanleren van cueing-technieken om 'bevriezen' (freezing) tegen te gaan",
            "Oefenen van alledaagse vaardigheden (opstaan, draaien, reiken en lopen)",
            "Lotgenotencontact in een ontspannen, begripvolle en motiverende sfeer",
        ],
        voorWie: "Mensen met neurologische aandoeningen (o.a. de ziekte van Parkinson, parkinsonisme, MS of restverschijnselen na CVA) die veilig en onder deskundig toezicht willen bewegen.",
        opzet: "Onder leiding van onze gespecialiseerde neuro-/ParkinsonNet fysiotherapeut. De oefeningen worden volledig afgestemd op de persoonlijke belastbaarheid en het energieniveau van iedere deelnemer.",
        vergoeding: "Neurologische fysiotherapie valt veelal onder chronische fysiotherapie. Met een geldige verwijzing van uw neuroloog of huisarts wordt dit veelal vergoed door uw zorgverzekeraar.",
        ctaText: "Aanmelden voor NeuroFit",
    },
    {
        id: "trom",
        title: "Trainen Op Muziek (TROM)",
        tabLabel: "TROM (Trainen Op Muziek)",
        subtitle: "Plezier in bewegen, ritme, conditie en coördinatie op stimulerende muziek",
        intro: "Trainen Op Muziek (TROM) combineert fysiotherapeutisch verantwoorde oefeningen met herkenbare, motiverende muziek. Bewegen op een vast ritme maakt trainen lichter, geeft energie en stimuleert de hersen-spierverbindingen, het pasritme en de coördinatie op een hele plezierige manier.",
        highlights: [
            "Verbetering van conditie, mobiliteit en spierkracht op een vrolijke manier",
            "Muziek als natuurlijke stimulans voor pasritme, reactiesnelheid en balans",
            "Gevarieerde bewegingsvormen afgestemd op ieder startniveau (zittend en staand)",
            "Gezellige groepsdynamiek met veel aandacht voor plezier en vitaliteit",
        ],
        voorWie: "Voor iedereen die op een vrolijke, muzikale en laagdrempelige manier wil werken aan coördinatie, soepelheid, ritmegevoel en zelfvertrouwen in bewegen.",
        opzet: "Wekelijkse training in onze moderne oefenzaal onder fysiotherapeutische begeleiding. De oefeningen worden zorgvuldig opgebouwd en zijn veilig voor gewrichten en spieren.",
        vergoeding: "Kan afhankelijk van uw doelstelling en eventuele indicatie binnen een fysiotherapietraject vallen of in groeps-/abonnementsvorm worden gevolgd. Vraag ons naar de actuele mogelijkheden.",
        ctaText: "Aanmelden voor TROM",
    },
    {
        id: "boksen",
        title: "Non-contact boksen",
        tabLabel: "Non-contact boksen",
        subtitle: "Energieke neuro-motorische bokstraining zonder fysiek contact",
        intro: "Non-contact boksen is een dynamische, intensieve en vooral ontzettend leuke trainingsvorm. Er wordt níét tegen elkaar gevochten: alle oefeningen vinden plaats op stootkussens, bokszakken of met de fysiotherapeut. Boksen stimuleert razendsnel de neuro-motorische verbindingen in het brein.",
        highlights: [
            "100% veilig: geen fysiek contact of stoten naar het lichaam",
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

export default function NeurologieSelector() {
    const [activeTab, setActiveTab] = useState<NeuroGroepId>("neurofit");
    const currentGroup = neuroGroepen.find(g => g.id === activeTab) || neuroGroepen[0];

    return (
        <div className="w-full">
            {/* Top Interactive Selector Tabs (No icons, clean text pills) */}
            <div className="mb-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 p-2 bg-foreground/5 rounded-[2.5rem] border border-foreground/5 max-w-3xl mx-auto">
                    {neuroGroepen.map((groep) => {
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
                        {/* Header of Active Tab */}
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
                            <h3 className="text-lg font-bold text-foreground mb-4">Wat bereikt u met deze training?</h3>
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
                                        <span>Heeft u al een verwijsbrief? Neem deze mee naar uw intakegesprek.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Cross-link & CTA Box */}
                    <div className="bg-primary/20 rounded-[2.5rem] p-8 md:p-10 border border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="space-y-2 text-center md:text-left">
                            <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                Andere beweeggroepen ontdekken?
                            </h3>
                            <p className="text-foreground/70 text-sm md:text-base font-light">
                                Bekijk ook onze <Link href="/copd" className="underline font-semibold hover:text-foreground">COPD beweeggroep</Link> of ontdek <Link href="/fysiofit" className="underline font-semibold hover:text-foreground">FysioFit</Link> voor zelfstandig particulier trainen.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
                            <Link
                                href="/fysiofit"
                                className="bg-white hover:bg-white/90 text-foreground font-bold rounded-full py-3.5 px-6 text-sm md:text-base transition-all border border-foreground/10 shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto"
                            >
                                Bekijk FysioFit <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-blue-accent hover:bg-blue-accent/90 text-white font-bold rounded-full py-3.5 px-6 text-sm md:text-base transition-all shadow-md flex items-center justify-center gap-2 w-full sm:w-auto"
                            >
                                Vraag stellen <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
