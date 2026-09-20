import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Tarieven | Fysiotherapie Laren, Gld",
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
        <main className="bg-background pt-28 pb-20 relative min-h-screen">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="max-w-2xl mx-auto">

                    {/* Header: Rustig & Ingetogen */}
                    <div className="text-center mb-8 sm:mb-10">
                        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 tracking-tight">Onze Tarieven.</h1>
                        <p className="text-sm sm:text-base text-foreground/65 leading-relaxed font-light max-w-lg mx-auto">
                            Onderstaande particuliere tarieven gelden wanneer u niet of onvoldoende aanvullend verzekerd bent voor fysiotherapie in het huidige kalenderjaar.
                        </p>
                    </div>

                    {/* Tarieven Lijst: Subtiel & Rustig vormgegeven */}
                    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-foreground/5 mb-10">
                        <div className="divide-y divide-foreground/5">
                            {allRates.map((rate, i) => (
                                <div key={i} className="flex justify-between items-center py-2.5 sm:py-3 gap-4 text-xs sm:text-sm">
                                    <span className="text-foreground/85 font-medium">{rate.name}</span>
                                    <span className="font-semibold text-foreground/90 tabular-nums whitespace-nowrap">{rate.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Actions: Bescheiden & Elegant */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 text-sm font-semibold">
                        <Link
                            href="/afspraak-maken"
                            className="bg-blue-accent text-white rounded-full py-3 px-6 flex items-center justify-center gap-2 group hover:bg-blue-accent/90 transition-all shadow-xs w-full sm:w-auto"
                        >
                            Afspraak inplannen <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/contact"
                            className="bg-foreground/5 text-foreground/80 hover:bg-foreground/10 hover:text-foreground rounded-full py-3 px-6 flex items-center justify-center gap-2 transition-colors border border-foreground/5 w-full sm:w-auto"
                        >
                            Vragen over vergoedingen?
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}
