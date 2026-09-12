import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Tarieven | Fysiotherapie Laren",
    description: "Bekijk de tarieven en vergoedingen voor fysiotherapie behandelingen bij Fysio Laren.",
};

const allRates = [
    { code: "1000", name: "Reguliere zitting", price: "€ 48,00" },
    { code: "1001", name: "Zitting aan huis", price: "€ 72,00" },
    { code: "1200", name: "Manuele therapie", price: "€ 60,00" },
    { code: "1500", name: "Oedeemtherapie", price: "€ 72,00" },
    { code: "1700", name: "Lange zitting met complexe/meervoudige zorgvraag", price: "€ 72,00" },
    { code: "1850", name: "DTF (screening)", price: "€ 24,00" },
    { code: "1860", name: "DTF (intake en onderzoek na screening)", price: "€ 48,00" },
    { code: "1865", name: "DTF (intake en onderzoek na screening aan huis)", price: "€ 72,00" },
    { code: "1870", name: "Intake en onderzoek na verwijzing", price: "€ 72,00" },
    { code: "1871", name: "Intake en onderzoek na verwijzing aan huis", price: "€ 95,00" },
    { code: "1317", name: "Groepszitting 3 personen", price: "€ 35,50" },
    { code: "1318", name: "Groepszitting 4 personen", price: "€ 26,50" },
    { code: "1319", name: "Groepszitting 5 t/m 10 personen", price: "€ 21,00" },
    { code: null, name: "Hardloopblessure preventie screening (45 minuten)", price: "€ 75,00" },
    { code: null, name: "Hardloopblessure preventie evaluatie (30 minuten)", price: "€ 50,00" },
    { code: null, name: "Fysiotherapie, digitaal consult per 15 minuten", price: "€ 25,00" },
    { code: null, name: "Niet-nagekomen afspraak (afmelding < 24u)", price: "100%" }
];

export default function TarievenPage() {
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
                                    <span className="text-base font-bold text-foreground/80 whitespace-nowrap">{rate.price}</span>
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
