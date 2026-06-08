import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Sportis Laren | Fysio Laren",
    description: "Medisch begeleid fitnessen bij Sportis in hartje Laren.",
};

export default function SportisPage() {
    return (
        <main className="bg-background pt-32 pb-24 relative min-h-screen">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="bg-transparent">
                    {/* Story / Intro */}
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">Welkom bij Sportis.</h1>
                        <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-light">
                            Voor iedereen die fit wil blijven, werken aan herstel of gewoon die extra stok achter de deur nodig heeft. Trainen onder deskundige begeleiding in de gezelligheid van een groep.
                        </p>
                    </div>

                    {/* Info Section (Stacked horizontally) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-20">
                        {/* Info Left (Times) */}
                        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-foreground/5 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-6">Trainingstijden</h2>
                                <ul className="space-y-3 mb-2">
                                    <li className="flex justify-between items-center text-foreground/80 border-b border-foreground/5 pb-2">
                                        <span className="font-medium">Maandagavond</span>
                                        <span className="font-bold">18:30 - 20:30</span>
                                    </li>
                                    <li className="flex justify-between items-center text-foreground/80 border-b border-foreground/5 pb-2">
                                        <span className="font-medium">Dinsdagavond</span>
                                        <span className="font-bold">18:30 - 19:30</span>
                                    </li>
                                    <li className="flex justify-between items-center text-foreground/80 pb-2">
                                        <span className="font-medium">Woensdagavond</span>
                                        <span className="font-bold">18:30 - 21:30</span>
                                    </li>
                                </ul>
                                <p className="text-foreground/50 text-sm mt-4">Overdag ook mogelijkheden, neem hiervoor contact op.</p>
                            </div>
                        </div>

                        {/* Info Right (Rates & CTA) */}
                        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-foreground/5 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-6">Tarieven Sportis</h2>
                                <div className="bg-foreground/5 rounded-2xl p-6 mb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-bold text-foreground/80">1x per week</span>
                                        <span className="font-black text-2xl text-foreground">€45<span className="text-sm font-medium text-foreground/50">/mnd</span></span>
                                    </div>
                                    <p className="text-xs text-foreground/60">Abonnement (Demodata)</p>
                                </div>
                                <div className="bg-foreground/5 rounded-2xl p-6 mb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-bold text-foreground/80">Onbeperkt</span>
                                        <span className="font-black text-2xl text-foreground">€65<span className="text-sm font-medium text-foreground/50">/mnd</span></span>
                                    </div>
                                    <p className="text-xs text-foreground/60">Abonnement (Demodata)</p>
                                </div>
                            </div>

                            <Link href="/contact" className="mt-8 bg-blue-accent text-white rounded-full py-4 px-6 font-bold text-center hover:scale-105 transition-transform shadow-md flex items-center justify-center gap-2 group w-full">
                                Neem contact op <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Photo */}
                    <div className="relative w-full aspect-[21/9] md:aspect-[2.5/1] rounded-[3rem] overflow-hidden shadow-sm border border-foreground/5">
                        <Image src="/images/hero-praktijk-binnen.jpg" alt="Sportis Oefenzaal" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </main>
    );
}
