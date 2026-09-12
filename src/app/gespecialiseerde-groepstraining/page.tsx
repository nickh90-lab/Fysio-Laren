import { Metadata } from "next";
import { Suspense } from "react";
import GespecialiseerdeGroepstrainingSelector from "@/components/GespecialiseerdeGroepstrainingSelector";

export const metadata: Metadata = {
    title: "Beweeggroepen & Training | Fysio Laren",
    description: "Beweeggroepen en training bij Fysio Laren: FysioFit, COPD en Neurologie (NeuroFit, Trainen Op Muziek TROM, Non-contact boksen).",
};

export default function GespecialiseerdeGroepstrainingPage() {
    return (
        <main className="bg-background pt-32 pb-24 relative min-h-screen">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="bg-transparent">
                    {/* Header / Introductie */}
                    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
                            Beweeggroepen & Training.
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-light">
                            Deskundige begeleiding, beweging op uw eigen niveau en trainen in onze moderne oefenzaal in Laren. Van vrij sporten bij FysioFit tot gespecialiseerde medische groepen.
                        </p>
                    </div>

                    {/* Interactive 2-Level Selector: Neurologie & COPD */}
                    <Suspense fallback={<div className="min-h-[400px]" />}>
                        <GespecialiseerdeGroepstrainingSelector />
                    </Suspense>
                </div>
            </div>
        </main>
    );
}
