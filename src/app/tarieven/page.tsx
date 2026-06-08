import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Tarieven | Fysiotherapie Laren",
    description: "Bekijk de tarieven en vergoedingen voor fysiotherapie behandelingen bij Fysio Laren.",
};

const rates = {
    consults: [
        { name: "Intake en onderzoek na screening", price: "€ 60,00" },
        { name: "Intake en onderzoek na verwijzing", price: "€ 60,00" },
        { name: "Eenmalig fysiotherapeutisch onderzoek", price: "€ 65,00" }
    ],
    treatments: [
        { name: "Reguliere zitting fysiotherapie", price: "€ 45,00" },
        { name: "Zitting manuele therapie", price: "€ 55,00" },
        { name: "Lange zitting (complexe aandoeningen)", price: "€ 65,00" }
    ],
    surcharges: [
        { name: "Toeslag uit aan huis behandeling", price: "€ 15,00" },
        { name: "Niet-nagekomen afspraak (binnen 24u)", price: "€ 35,00" }
    ]
};

export default function TarievenPage() {
    const allRates = [...rates.consults, ...rates.treatments, ...rates.surcharges];

    return (
        <main className="bg-background pt-32 pb-24 relative min-h-screen">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="bg-transparent max-w-4xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-16 md:mb-20">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">Onze Tarieven.</h1>
                        <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-light">
                            Onderstaande particuliere tarieven gelden wanneer u niet of onvoldoende aanvullend verzekerd bent voor fysiotherapie in het huidige kalenderjaar.
                        </p>
                    </div>

                    {/* Tarieven Lijst (Sobere Kaart) */}
                    <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-foreground/5 mb-16">
                        <div className="space-y-1">
                            {allRates.map((rate, i) => (
                                <div key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 border-b border-foreground/5 last:border-0 last:pb-0 gap-2">
                                    <h3 className="font-medium text-foreground/90 text-base">{rate.name}</h3>
                                    <span className="text-base font-bold text-foreground/80">{rate.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Actions */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                        <Link
                            href="/afspraak-maken"
                            className="bg-blue-accent text-white rounded-full py-4 px-8 font-bold flex items-center justify-center gap-2 group hover:scale-105 transition-transform"
                        >
                            Afspraak inplannen <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/contact"
                            className="bg-foreground/5 text-foreground hover:bg-foreground/10 rounded-full py-4 px-8 font-bold flex items-center justify-center gap-2 transition-colors"
                        >
                            Vragen over vergoedingen?
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}
