"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function DePraktijk() {
    return (
        <main className="bg-background pt-32 pb-24 relative min-h-screen">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="bg-transparent">
                    {/* Title / Intro */}
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">Onze Praktijk.</h1>
                        <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-light">
                            Deskundig en betrokken, dichtbij in Laren.
                        </p>
                    </div>

                    <div className="flex flex-col gap-16 md:gap-20">
                        {/* Block 1: Exterior / Impression */}
                        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-foreground/5 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                            <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border border-foreground/5">
                                <Image src="/images/hero-praktijk.jpg" alt="Overleg praktijk" fill className="object-cover" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl font-bold mb-6 text-foreground">Wij heten u welkom</h2>
                                <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                                    Onze praktijk ligt centraal gelegen, is laagdrempelig toegankelijk en biedt voldoende gratis parkeergelegenheid. U bent altijd welkom, of u nu komt voor een afspraak of een vraag.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-foreground/80 font-medium"><CheckCircle2 className="text-blue-accent w-5 h-5 flex-shrink-0" /> Centraal gelegen in Laren</li>
                                    <li className="flex items-center gap-3 text-foreground/80 font-medium"><CheckCircle2 className="text-blue-accent w-5 h-5 flex-shrink-0" /> Voldoende parkeergelegenheid</li>
                                    <li className="flex items-center gap-3 text-foreground/80 font-medium"><CheckCircle2 className="text-blue-accent w-5 h-5 flex-shrink-0" /> Drempelvrije toegang</li>
                                </ul>
                            </div>
                        </div>

                        {/* Block 2: Interior */}
                        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-foreground/5 flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
                            <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border border-foreground/5">
                                <Image src="/images/hero-praktijk-binnen.jpg" alt="Oefenzaal praktijk" fill className="object-cover" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl font-bold mb-6 text-foreground">Praktijk en oefenruimte</h2>
                                <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                                    De praktijk is licht en ruim ingericht. Met rustige behandelkamers en een compleet ingerichte oefenzaal met ruimte voor behandeling en oefentherapie.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-foreground/80 font-medium"><CheckCircle2 className="text-blue-accent w-5 h-5 flex-shrink-0" /> Lichte, ruime behandelkamers</li>
                                    <li className="flex items-center gap-3 text-foreground/80 font-medium"><CheckCircle2 className="text-blue-accent w-5 h-5 flex-shrink-0" /> Moderne oefenzaal</li>
                                    <li className="flex items-center gap-3 text-foreground/80 font-medium"><CheckCircle2 className="text-blue-accent w-5 h-5 flex-shrink-0" /> Behandeling en oefentherapie onder 1 dak</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
