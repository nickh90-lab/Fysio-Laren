import { Metadata } from "next";
import { Calendar, CreditCard, Clock, FileText, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: 'Afspraak maken Fysiotherapie Laren | Zonder wachttijd',
    description: 'Direct een afspraak maken bij Fysio Laren. Geen verwijzing nodig, contracten met alle zorgverzekeraars. Bekijk hier wat u mee moet nemen voor uw eerste intake.',
};

export default function AfspraakMaken() {
    return (
        <div className="pt-24 md:pt-32 pb-24 bg-background min-h-screen">
            <div className="max-w-[90rem] mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* Kolom Links: Info (40%) */}
                    <div className="lg:w-2/5 space-y-6">
                        <div className="mb-8 pl-2">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-4">
                                Maak een<br />afspraak.
                            </h1>
                            <p className="text-lg text-foreground/70 font-light leading-relaxed">
                                Direct inplannen zonder wachttijd. Geen verwijzing nodig. We helpen u graag verder in Laren.
                            </p>
                        </div>

                        {/* Kleine Info Kaartjes */}
                        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-foreground/5 flex gap-4 items-start hover:shadow-md transition-shadow">
                            <div className="shrink-0 mt-1 bg-foreground/5 p-3 rounded-2xl">
                                <Clock className="w-6 h-6 text-blue-accent" />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground mb-1 text-lg">De eerste afspraak</h4>
                                <p className="text-foreground/70 text-sm leading-relaxed">Intake, vraaggesprek en lichamelijk onderzoek. Duurt gemiddeld 30-45 min.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-foreground/5 flex gap-4 items-start hover:shadow-md transition-shadow">
                            <div className="shrink-0 mt-1 bg-foreground/5 p-3 rounded-2xl">
                                <FileText className="w-6 h-6 text-blue-accent" />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground mb-2 text-lg">Wat neemt u mee?</h4>
                                <ul className="text-foreground/70 text-sm leading-relaxed space-y-2">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-accent"></div>Geldig ID (Paspoort/Rijbewijs)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-accent"></div>Grote schone handdoek</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-accent"></div>Verwijsbrief (Indien aanwezig)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-foreground/5 flex gap-4 items-start hover:shadow-md transition-shadow">
                            <div className="shrink-0 mt-1 bg-foreground/5 p-3 rounded-2xl">
                                <CreditCard className="w-6 h-6 text-blue-accent" />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground mb-1 text-lg">Vergoeding & Contracten</h4>
                                <p className="text-foreground/70 text-sm leading-relaxed">Contracten met alle Nederlandse zorgverzekeraars. Directe declaratie mogelijk bij aanvullende verzekering.</p>
                            </div>
                        </div>

                        {/* Hulp/Bel Blokje */}
                        <div className="bg-foreground/5 rounded-[2rem] p-6 mt-8 flex items-center gap-4">
                            <div className="w-14 h-14 bg-white shadow-sm rounded-full flex items-center justify-center shrink-0">
                                <Phone className="w-6 h-6 text-blue-accent" />
                            </div>
                            <div>
                                <p className="font-bold text-foreground text-sm uppercase tracking-wider mb-1">Hulp nodig bij inplannen?</p>
                                <a href="tel:0351234567" className="text-xl font-bold text-foreground hover:text-blue-accent transition-colors">035 - 123 4567</a>
                            </div>
                        </div>
                    </div>

                    {/* Kolom Rechts: Module (60%) */}
                    <div className="lg:w-3/5">
                        <div className="bg-white rounded-[3rem] p-8 shadow-md border border-foreground/10 h-full min-h-[700px] flex flex-col items-center justify-center relative overflow-hidden group">
                            {/* Decoratief achtergrondje voor lege state */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-accent/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 transition-transform group-hover:scale-110 duration-1000" />
                            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-foreground/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/3" />

                            <div className="relative z-10 text-center flex flex-col items-center p-8 bg-background/50 backdrop-blur-sm rounded-[2rem] border border-foreground/5 shadow-inner">
                                <div className="w-24 h-24 bg-white shadow-sm rounded-[2rem] flex items-center justify-center mb-8 rotate-3">
                                    <Calendar size={40} className="text-blue-accent" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Planningsmodule laden...</h2>
                                <p className="text-foreground/60 max-w-sm mb-8 text-sm leading-relaxed">
                                    Op deze locatie wordt de Fysioroadmap module of Zorgdomein widget ingeladen via een script/iframe zodra deze beschikbaar is.
                                </p>
                                <div className="flex gap-4">
                                    <div className="h-2 w-16 bg-foreground/10 rounded-full animate-pulse"></div>
                                    <div className="h-2 w-16 bg-blue-accent/40 rounded-full animate-pulse delay-75"></div>
                                    <div className="h-2 w-16 bg-foreground/10 rounded-full animate-pulse delay-150"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
