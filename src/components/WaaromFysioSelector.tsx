"use client";

import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WaaromFysioSelector() {
    return (
        <section className={cn("py-24 md:py-32 px-6 md:px-12 flex flex-col items-center transition-colors duration-500 relative bg-primary/40")}>
            <div className="flex flex-col items-center justify-center min-h-[300px] w-full max-w-6xl mt-12 md:mt-8">
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-foreground mb-16 md:mb-20 text-center tracking-tight">Daarom kiest u voor Fysio Laren.</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-10 w-full px-4 lg:px-12">
                    {[
                        "Persoonlijk",
                        "Betrokken",
                        "Ervaring",
                        "Zorgzaam",
                        "Laagdrempelig",
                        "Gespecialiseerd"
                    ].map((punt, i) => (
                        <div key={i} className="flex items-center gap-4 group cursor-default">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-accent shadow-sm group-hover:bg-blue-accent group-hover:text-white group-hover:scale-110 transition-all shrink-0">
                                <Check size={20} strokeWidth={3} />
                            </div>
                            <h4 className="font-bold text-foreground text-xl md:text-2xl leading-snug tracking-tight group-hover:text-foreground/80 transition-colors">{punt}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
