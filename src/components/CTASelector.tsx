import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, CalendarPlus } from "lucide-react";

export default function CTASelector() {
    return (
        <section className="relative min-h-[500px] flex flex-col items-center justify-center w-full">
            <div className="w-full h-full flex items-center justify-center pt-24 pb-12">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center py-12">

                    <div className="lg:w-1/2 text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">Samen werken aan herstel begint hier</h2>
                        <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-8">
                            Neem gerust contact met ons op. We denken met u mee en plannen graag een afspraak.
                        </p>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="bg-primary/20 rounded-[2.5rem] p-8 md:p-12 border border-primary/30 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/40 rounded-full blur-3xl group-hover:bg-white/60 transition-colors"></div>

                            <h3 className="font-bold text-2xl md:text-3xl text-foreground mb-8 relative z-10">Neem direct contact op</h3>

                            <div className="flex flex-col gap-4 relative z-10">
                                <Link href="/afspraak-maken" className="flex items-center justify-between w-full bg-blue-accent text-white px-8 py-5 rounded-full hover:bg-blue-accent/90 transition-all shadow-md group/btn">
                                    <span className="font-bold text-lg">Online afspraak plannen</span>
                                    <CalendarPlus size={24} className="group-hover/btn:scale-110 transition-transform" />
                                </Link>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-2">
                                    <a 
                                        href="tel:0573215058" 
                                        className="flex items-center justify-center gap-2.5 bg-white text-foreground px-4 sm:px-5 py-3.5 sm:py-4 rounded-full border border-foreground/5 hover:border-foreground/20 hover:bg-white/90 transition-all font-semibold text-sm sm:text-base shadow-sm whitespace-nowrap group/call"
                                    >
                                        <Phone size={18} className="text-primary shrink-0 group-hover/call:scale-110 transition-transform" /> 
                                        <span className="truncate">0573 - 21 50 58</span>
                                    </a>
                                    <a 
                                        href="https://wa.me/31573215058" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex items-center justify-center gap-2.5 bg-white text-foreground px-4 sm:px-5 py-3.5 sm:py-4 rounded-full border border-foreground/5 hover:border-foreground/20 hover:bg-white/90 transition-all font-semibold text-sm sm:text-base shadow-sm whitespace-nowrap group/wa"
                                    >
                                        <MessageCircle size={18} className="text-green-600 shrink-0 group-hover/wa:scale-110 transition-transform" /> 
                                        <span>WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
