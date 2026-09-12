import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Users, ShieldCheck, FileText } from "lucide-react";

export const metadata: Metadata = {
    title: "COPD Groepstraining | Fysio Laren",
    description: "COPD beweeggroep onder deskundige fysiotherapeutische begeleiding in Laren. Werk gericht aan uw longconditie, ademhaling en uithoudingsvermogen.",
};

export default function COPDPage() {
    const highlights = [
        "Versterken van ademhalings- en beenspieren voor meer loopafstand",
        "Aanleren van effectieve ademhalingstechnieken bij inspanning",
        "Minder snel benauwd en vermoeid bij dagelijkse activiteiten",
        "Continue professionele monitoring van saturatie en hartslag indien gewenst",
    ];

    return (
        <main className="bg-background pt-32 pb-24 relative min-h-screen">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="bg-transparent">
                    {/* Header / Introductie */}
                    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
                            COPD Groepstraining.
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-light">
                            Verantwoord werken aan uw longconditie, uithoudingsvermogen en ademhaling onder deskundige fysiotherapeutische begeleiding in Laren.
                        </p>
                    </div>

                    {/* Main Information Card */}
                    <div className="bg-white rounded-[3rem] p-8 md:p-14 shadow-sm border border-foreground/5 relative overflow-hidden mb-12">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-8 border-b border-foreground/5">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                                    COPD Beweeggroep
                                </h2>
                            </div>

                            <Link
                                href="/contact"
                                className="bg-blue-accent text-white rounded-full py-3.5 px-7 font-bold text-sm md:text-base hover:bg-blue-accent/90 transition-all shadow-md flex items-center justify-center gap-2 group w-full md:w-auto shrink-0"
                            >
                                Aanmelden voor COPD
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <p className="text-xl md:text-2xl font-semibold text-foreground/90 mb-4 leading-relaxed">
                            Behoud van uw conditie en meer lucht in het dagelijks leven
                        </p>
                        <p className="text-foreground/75 text-base md:text-lg font-light leading-relaxed mb-10 max-w-4xl">
                            Leven met COPD of een andere chronische longaandoening brengt vaak kortademigheid, benauwdheid en conditieverlies met zich mee. In onze COPD-groep traint u in een veilige, vertrouwde omgeving onder directe leiding van een gespecialiseerde fysiotherapeut. Samen bouwen we aan meer energie, kracht en zelfvertrouwen.
                        </p>

                        {/* Highlights Grid */}
                        <div className="mb-12">
                            <h3 className="text-lg font-bold text-foreground mb-4">Wat bereikt u met de COPD training?</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {highlights.map((item, idx) => (
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
                                        <strong className="font-semibold text-foreground/90">Voor wie:</strong> Mensen met de diagnose COPD (stadium GOLD I t/m IV) of chronische longklachten die onder deskundige fysiotherapeutische begeleiding willen bewegen.
                                    </p>
                                    <p className="text-sm md:text-base text-foreground/70 font-light leading-relaxed">
                                        <strong className="font-semibold text-foreground/90">De training:</strong> Wekelijkse training in een kleine, rustige groep (max. 6 tot 8 deelnemers). We beginnen altijd met een individuele intake en conditietest om uw persoonlijke beginsituatie vast te stellen.
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
                                        Oefentherapie bij COPD wordt bij de juiste verwijzing vanaf de eerste behandeling vergoed vanuit de basisverzekering (conform landelijke zorgverzekeringsvoorwaarden).
                                    </p>
                                    <div className="flex items-center gap-2 text-xs font-semibold text-foreground/60 bg-white p-3 rounded-xl border border-foreground/5">
                                        <FileText className="w-4 h-4 text-blue-accent shrink-0" />
                                        <span>Heeft u al een verwijsbrief van uw huisarts of longarts? Neem deze mee naar de intake.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Cross-link & CTA Box */}
                    <div className="bg-primary/20 rounded-[2.5rem] p-8 md:p-10 border border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="space-y-2 text-center md:text-left">
                            <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                Andere beweeggroepen bekijken?
                            </h3>
                            <p className="text-foreground/70 text-sm md:text-base font-light">
                                Bekijk onze <Link href="/neurologie" className="underline font-semibold hover:text-foreground">Neurologie groepstrainingen</Link> (NeuroFit, TROM & Boksen) of ontdek <Link href="/fysiofit" className="underline font-semibold hover:text-foreground">FysioFit</Link> voor vrij particulier trainen.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
                            <Link
                                href="/neurologie"
                                className="bg-white hover:bg-white/90 text-foreground font-bold rounded-full py-3.5 px-6 text-sm md:text-base transition-all border border-foreground/10 shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto"
                            >
                                Bekijk Neurologie <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-blue-accent hover:bg-blue-accent/90 text-white font-bold rounded-full py-3.5 px-6 text-sm md:text-base transition-all shadow-md flex items-center justify-center gap-2 w-full sm:w-auto"
                            >
                                Contact opnemen <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
