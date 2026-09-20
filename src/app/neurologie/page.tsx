import { Metadata } from "next";
import NeurologieSelector from "@/components/NeurologieSelector";

export const metadata: Metadata = {
    title: "Neurologie Groepstrainingen | Fysio Laren",
    description: "Gespecialiseerde neurologische beweeggroepen bij Fysio Laren: NeuroFit, TROM (Trainen Op Muziek) en Non-contact boksen onder deskundige begeleiding.",
};

export default function NeurologiePage() {
    return (
        <main className="bg-background pt-32 pb-24 relative min-h-screen">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="bg-transparent">
                    {/* Header / Introductie */}
                    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
                            Neurologie Groepstrainingen.
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-light">
                            Gespecialiseerde beweeggroepen gericht op het behoud van mobiliteit, balans en zelfvertrouwen bij neurologische aandoeningen in Laren, Gld.
                        </p>
                    </div>

                    {/* Interactive 3-Group Selector (NeuroFit, TROM, Non-contact boksen) */}
                    <NeurologieSelector />
                </div>
            </div>
        </main>
    );
}
