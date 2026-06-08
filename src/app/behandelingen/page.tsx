"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, ShieldCheck, Users, Search, Clock, ChevronRight } from "lucide-react";
import Image from "next/image";

const treatments = [
    {
        title: "Fysiotherapie",
        path: "/behandelingen/fysiotherapie-laren",
        desc: "Effectieve behandeling van algemene pijn- en bewegingsklachten. Wij helpen u soepel en pijnvrij te bewegen in uw dagelijks leven.",
        icon: Activity
    },
    {
        title: "Manuele Therapie",
        path: "/behandelingen/manuele-therapie-laren",
        desc: "Gespecialiseerde behandeling voor complexe gewrichtsklachten, met name gericht op het snel en veilig verhelpen van nek- en rugpijn.",
        icon: ShieldCheck
    },
    {
        title: "Sportfysiotherapie",
        path: "/behandelingen/sportfysiotherapie-laren",
        desc: "Gerichte, actieve revalidatie voor sporters. We werken samen aan een veilige en vlotte terugkeer op uw oude sportniveau.",
        icon: Users
    },
    {
        title: "Dry Needling",
        path: "/behandelingen/dry-needling-laren",
        desc: "Een uiterst effectieve methode voor pijnbestrijding door het aanprikken van spierverhardingen (triggerpoints) voor directe ontspanning.",
        icon: Search
    },
    {
        title: "Revalidatie",
        path: "/behandelingen/revalidatie-laren",
        desc: "Intensieve fysiotherapeutische begeleiding tijdens het herstel na een operatie (b.v. nieuwe knie of heup), trauma of langdurige ziekte.",
        icon: Clock
    }
];

export default function BehandelingenOverview() {
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
                        <div className="inline-block px-4 py-1.5 rounded-full bg-accent text-foreground font-bold text-sm tracking-wide mb-6">
                            Onze Expertise
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground leading-tight">
                            Fysiotherapeutische behandelingen in <span className="text-foreground/50">Laren</span>.
                        </h1>
                        <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                            Bij Fysio Laren bieden we een breed scala aan gespecialiseerde behandelingen. Omdat geen enkele klacht of patiënt hetzelfde is, stemmen we de therapie altijd volledig af op uw persoonlijke situatie. Ontdek hieronder al onze specialisaties.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-1 w-full relative"
                    >
                        <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                            <Image src="/images/hero-praktijk.jpg" alt="Fysiotherapeutische behandelingen Fysio Laren" fill className="object-cover" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Treatments Grid Section */}
            <section className="px-6 md:px-12 bg-muted py-24 rounded-[3rem] mx-4 md:mx-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Kies uw behandeling</h2>
                        <p className="text-lg text-foreground/70 leading-relaxed">
                            Klik op een van onze specialisatiegebieden voor uitgebreide informatie over de behandelmethode en voor welke klachten deze geschikt is.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {treatments.map((service, i) => (
                            <div key={service.title} className="group p-8 bg-white rounded-[2rem] shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col h-full border border-foreground/5">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex flex-col flex-grow">
                                    <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center mb-6 text-foreground/70 shadow-inner group-hover:scale-110 group-hover:bg-primary group-hover:text-foreground transition-all duration-500">
                                        <service.icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary-foreground transition-colors">{service.title}</h3>
                                    <p className="text-foreground/70 leading-relaxed mb-6 flex-grow text-sm">
                                        {service.desc}
                                    </p>
                                    <Link href={service.path} className="text-foreground/80 font-bold flex items-center group-hover:gap-2 transition-all mt-auto text-sm">
                                        Lees meer over {service.title.toLowerCase()} <ChevronRight size={16} className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Specializations Section */}
            <section className="px-6 md:px-12 mt-20 mb-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Overige Specialisaties</h2>
                    <p className="text-foreground/70 mb-10 leading-relaxed text-lg">
                        Naast onze hoofdspecialisaties hebben onze fysiotherapeuten brede expertise opgebouwd in diverse zorgdomeinen. Wij bieden onder andere gespecialiseerde zorg voor:
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "Oedeemtherapie", "COPD", "Parkinson", "MS", "CVA / Neurologische Revalidatie",
                            "Orthopedische Revalidatie", "Claudicatio Intermittens (etalagebenen)", "Oncologie", "Fysiotherapie voor ouderen"
                        ].map(spec => (
                            <span key={spec} className="px-5 py-2.5 bg-muted text-foreground font-semibold rounded-full border border-foreground/5 shadow-sm text-sm hover:border-foreground/20 hover:bg-white transition-colors cursor-default">
                                {spec}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 md:px-12 mt-24">
                <div className="max-w-4xl mx-auto bg-primary text-foreground rounded-[2rem] p-12 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6">Weet u niet zeker welke behandeling u nodig heeft?</h2>
                        <p className="text-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                            Geen probleem. Tijdens de eerste intake analyseren we altijd grondig uw klachten en bepalen we samen welke fysiotherapeutische aanpak het beste bij u past.
                        </p>
                        <Link href="/afspraak-maken" className="inline-block px-8 py-4 bg-foreground text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg">
                            Plan een intakegesprek
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
