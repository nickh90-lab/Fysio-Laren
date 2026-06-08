"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, ShieldCheck, ChevronRight, HandHeart, Sparkles, MoveUpRight } from "lucide-react";
import Image from "next/image";

const complaints = [
    {
        title: "Rugklachten",
        path: "/klachten/rugklachten-fysiotherapie-laren",
        desc: "Last van (lage) rugpijn, spit, hernia of stijfheid in de onderrug? Ontdek hoe wij deze veelvoorkomende klachten effectief behandelen.",
        icon: ShieldCheck
    },
    {
        title: "Nekklachten",
        path: "/klachten/nekklachten-fysiotherapie-laren",
        desc: "Een stijve nek, spanningshoofdpijn of uitstralende pijn naar de armen belemmeren uw dagelijks leven enorm. Wij vinden de oorzaak.",
        icon: Activity
    },
    {
        title: "Schouderklachten",
        path: "/klachten/schouderklachten-fysiotherapie-laren",
        desc: "Pijn bij het heffen van uw arm of een zeurende pijn als u erop ligt? Van frozen shoulder tot peesontstekingen, wij begeleiden uw herstel.",
        icon: HandHeart
    },
    {
        title: "Knieklachten",
        path: "/klachten/knieklachten-fysiotherapie-laren",
        desc: "Pijn bij traplopen, sporten of na een val? Onze knie-experts in Laren analyseren uw beweegpatroon voor een snel en blijvend resultaat.",
        icon: Sparkles
    },
    {
        title: "Sportblessures",
        path: "/klachten/sportblessures-fysiotherapie-laren",
        desc: "Van enkelverstuikingen en zweepslag tot overbelasting, wij zorgen dat u snel weer veilig op het sportveld staat in regio Laren.",
        icon: MoveUpRight
    }
];

export default function KlachtenOverview() {
    return (
        <div className="pt-32 pb-24 bg-background">
            {/* Intro Section */}
            <section className="px-6 md:px-12 mb-20">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-1"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-foreground font-bold text-sm tracking-wide mb-6">
                            Veelvoorkomende Lichamelijke Klachten
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground leading-tight">
                            Waar heeft u pijn?<br />Wij bieden de oplosing.
                        </h1>
                        <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                            Pijnklachten uiten zich bij iedereen anders, of het nu ontstaat door overbelasting op werk, tijdens het sporten of een plotselinge verkeerde beweging. Bij Fysio Laren vinden we de bron van uw pijn en stellen we een klachtspecifiek behandelplan op.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-1 w-full relative"
                    >
                        <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                            <Image src="/images/hero-praktijk.jpg" alt="Fysio Laren behandeling lichamelijke klachten" fill className="object-cover" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Complaints Grid Section */}
            <section className="px-6 md:px-12 bg-muted py-24 rounded-[3rem] mx-4 md:mx-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Kies de regio van uw klacht</h2>
                        <p className="text-lg text-foreground/70 leading-relaxed">
                            Klik hieronder op uw specifieke pijngebied. Ontdek meer over de symptomen, mogelijke oorzaken en hoe onze fysiotherapeuten in Laren u snel en veilig van de last en pijn afhelpen.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {complaints.map((item, i) => (
                            <div key={item.title} className="group p-8 bg-white rounded-[2rem] shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col h-full border border-foreground/5">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex flex-col flex-grow">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-foreground shadow-inner group-hover:scale-110 group-hover:bg-primary group-hover:text-foreground transition-all duration-500">
                                        <item.icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-foreground/70 leading-relaxed mb-6 flex-grow text-sm">
                                        {item.desc}
                                    </p>
                                    <Link href={item.path} className="text-primary font-bold flex items-center group-hover:gap-2 transition-all mt-auto text-sm">
                                        Soorten behandelingen <ChevronRight size={16} className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Complaints Section */}
            <section className="px-6 md:px-12 mt-20 mb-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Overige Klachten</h2>
                    <p className="text-foreground/70 mb-10 leading-relaxed text-lg">
                        Naast de veelvoorkomende klachten hierboven, kunt u bij Fysio Laren ook uitstekend terecht voor specifieke en complexe pijn- of bewegingsproblematiek, waaronder:
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "Hoofdpijnklachten", "Duizeligheidsklachten", "Artrose", "Chronische Pijn", "Voetklachten"
                        ].map(complaint => (
                            <span key={complaint} className="px-5 py-2.5 bg-white text-foreground font-semibold rounded-full border border-foreground/5 shadow-sm text-sm hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default">
                                {complaint}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 md:px-12 mt-24">
                <div className="max-w-4xl mx-auto bg-foreground text-white rounded-[2rem] p-12 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6">Staat uw klacht er niet exact tussen?</h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            Maakt u zich geen zorgen. Het bewegingsapparaat is complex en pijn kan breed uitstralen. Neem contact op; in 99% van de gevallen kunnen onze specialisten de knoop ontrafelen.
                        </p>
                        <Link href="/afspraak-maken" className="inline-block px-8 py-4 bg-primary text-foreground font-bold rounded-full hover:scale-105 transition-transform shadow-lg">
                            Neem direct contact op of bel
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
