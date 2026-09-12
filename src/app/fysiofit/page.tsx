import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "FysioFit Laren | Fysio Laren",
    description: "Medisch begeleid fitnessen bij FysioFit in hartje Laren. Trainen onder deskundige begeleiding.",
};

export default function FysiofitPage() {
    return (
        <main className="bg-background pt-32 pb-24 relative min-h-screen">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="bg-transparent">
                    {/* Story / Intro */}
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">Welkom bij FysioFit.</h1>
                        <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-light">
                            Voor iedereen die fit wil blijven, werken aan herstel of gewoon die extra stok achter de deur nodig heeft. Trainen onder deskundige begeleiding in de gezelligheid van een groep.
                        </p>
                    </div>

                    {/* Info Section (Stacked horizontally) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-20">
                        {/* Info Left (Mogelijkheden & Tijden) */}
                        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-foreground/5 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Mogelijkheden & Tijden</h2>
                                <p className="text-foreground/80 text-lg leading-relaxed mb-6 font-light">
                                    We bieden zowel overdag als ’s avonds verschillende mogelijkheden om in groepsverband te trainen. Welke groep en welk tijdstip het beste bij jou passen, bekijken we graag samen.
                                </p>
                                <p className="text-foreground/70 text-base leading-relaxed font-light mb-8">
                                    Neem gerust contact met ons op voor de actuele mogelijkheden en om te kijken welke trainingsgroep aansluit op jouw wensen en niveau.
                                </p>
                            </div>

                            <Link href="/contact" className="bg-blue-accent text-white rounded-full py-4 px-8 font-bold text-center hover:bg-blue-accent/90 transition-all shadow-md flex items-center justify-center gap-2 group w-full">
                                Vraag naar de mogelijkheden <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Info Right (Rates & CTA) */}
                        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-foreground/5 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Tarieven FysioFit</h2>
                                <div className="flex flex-col gap-3">
                                    <div className="bg-foreground/5 rounded-2xl p-5 flex justify-between items-center">
                                        <span className="font-bold text-foreground/80">1x per week <span className="font-normal text-foreground/60 text-sm">(30 min)</span></span>
                                        <span className="font-black text-xl text-foreground">€35<span className="text-xs font-medium text-foreground/50">/mnd</span></span>
                                    </div>
                                    <div className="bg-foreground/5 rounded-2xl p-5 flex justify-between items-center">
                                        <span className="font-bold text-foreground/80">2x per week <span className="font-normal text-foreground/60 text-sm">(30 min)</span></span>
                                        <span className="font-black text-xl text-foreground">€49<span className="text-xs font-medium text-foreground/50">/mnd</span></span>
                                    </div>
                                    <div className="bg-foreground/5 rounded-2xl p-5 flex justify-between items-center">
                                        <span className="font-bold text-foreground/80">1x per week <span className="font-normal text-foreground/60 text-sm">(60 min)</span></span>
                                        <span className="font-black text-xl text-foreground">€46<span className="text-xs font-medium text-foreground/50">/mnd</span></span>
                                    </div>
                                    <div className="bg-foreground/5 rounded-2xl p-5 flex justify-between items-center">
                                        <span className="font-bold text-foreground/80">2x per week <span className="font-normal text-foreground/60 text-sm">(60 min)</span></span>
                                        <span className="font-black text-xl text-foreground">€82<span className="text-xs font-medium text-foreground/50">/mnd</span></span>
                                    </div>
                                </div>
                            </div>

                            <Link href="/contact" className="mt-8 bg-foreground/5 hover:bg-foreground/10 text-foreground rounded-full py-4 px-8 font-bold text-center transition-all flex items-center justify-center gap-2 group w-full border border-foreground/10">
                                Aanmelden voor FysioFit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
