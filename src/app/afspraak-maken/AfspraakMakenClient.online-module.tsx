"use client";

import React from "react";
import Link from "next/link";
import { 
    Calendar, 
    Phone, 
    MessageCircle, 
    ArrowUpRight, 
    ArrowLeft, 
    CheckCircle2, 
    ShieldCheck, 
    MapPin, 
    Clock, 
    Mail 
} from "lucide-react";

/**
 * BACKUP VAN DE ONLINE PLANMODULE:
 * Deze component bevat de volledige online boekingsmodule (koppeling met UwPraktijkOnline / HCI One).
 * Zodra de online planmodule officieel actief mag worden gezet, kan deze component weer direct
 * worden geactiveerd in `src/app/afspraak-maken/page.tsx`.
 */
const BOOKING_URL = "https://fysio-laren.uwpraktijkonline.nl";

export default function AfspraakMakenOnlineModule() {
    return (
        <div className="min-h-screen bg-[#FAF9F5] pt-24 md:pt-32 pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
                
                {/* Terug link */}
                <div className="mb-6 sm:mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground/60 hover:text-blue-accent transition-colors group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Terug naar home
                    </Link>
                </div>

                {/* Pagina Header */}
                <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-accent/10 text-blue-accent uppercase tracking-wider mb-3">
                        <Calendar size={13} className="stroke-[2.5]" />
                        Afspraak inplannen
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
                        Afspraak maken bij Fysio Laren
                    </h1>
                    <p className="text-foreground/70 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                        U bent van harte welkom in onze praktijk. Kies hieronder de manier die u het prettigst vindt: direct zelf online een tijdstip kiezen of persoonlijk contact opnemen.
                    </p>
                </div>

                {/* Keuzekaarten: Online Portaal vs Telefonisch / Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
                    
                    {/* KAART 1: Direct online plannen (Patiëntenportaal) */}
                    <div className="bg-white rounded-3xl p-7 sm:p-9 border-2 border-blue-accent/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group">
                        <div className="absolute top-5 right-5 sm:top-6 sm:right-6">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase tracking-wider">
                                Direct beschikbaar
                            </span>
                        </div>

                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-blue-accent/10 text-blue-accent flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                                <Calendar size={24} />
                            </div>

                            <h2 className="text-2xl font-bold text-foreground mb-3">
                                Online Patiëntenportaal
                            </h2>
                            <p className="text-foreground/75 text-sm sm:text-base font-light leading-relaxed mb-8">
                                Kies direct uw eigen datum, gewenste tijdstip en behandelend fysiotherapeut in onze beveiligde agendamodule. U ontvangt direct een bevestiging in uw mailbox.
                            </p>
                        </div>

                        <div>
                            <a
                                href={BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-full bg-blue-accent text-white font-bold text-base hover:bg-blue-accent/90 transition-all shadow-md hover:scale-[1.02] cursor-pointer"
                            >
                                <span>Start online afspraak maken</span>
                                <ArrowUpRight size={18} />
                            </a>
                            <p className="text-center text-[11px] text-foreground/50 mt-2.5 font-light">
                                Opent direct in een nieuw tabblad
                            </p>
                        </div>
                    </div>

                    {/* KAART 2: Telefonisch of overleg */}
                    <div className="bg-white rounded-3xl p-7 sm:p-9 border border-foreground/10 shadow-sm flex flex-col justify-between">
                        <div className="flex justify-end mb-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-foreground/5 text-foreground/70 border border-foreground/10 uppercase tracking-wider">
                                Persoonlijk advies
                            </span>
                        </div>

                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                                <Phone size={24} />
                            </div>

                            <h2 className="text-2xl font-bold text-foreground mb-3">
                                Telefonisch of per e-mail
                            </h2>
                            <p className="text-foreground/75 text-sm sm:text-base font-light leading-relaxed mb-6">
                                Heeft u een specifieke vraag, twijfelt u welke behandeling past bij uw klacht of wilt u met spoed terecht? Wij staan u graag persoonlijk te woord.
                            </p>
                        </div>

                        <div className="space-y-3 pt-2">
                            <a
                                href="tel:0573215058"
                                className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground font-bold text-sm sm:text-base transition-colors"
                            >
                                <Phone size={17} className="text-blue-accent" />
                                <span>0573 - 21 50 58</span>
                            </a>

                            <div className="grid grid-cols-2 gap-2.5">
                                <a
                                    href="https://wa.me/31573215058"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-full border border-foreground/15 hover:border-foreground/30 text-foreground/80 hover:text-foreground font-semibold text-xs sm:text-sm transition-colors"
                                >
                                    <MessageCircle size={15} className="text-emerald-600" />
                                    <span>WhatsApp</span>
                                </a>

                                <a
                                    href="mailto:info@fysio-laren.nl"
                                    className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-full border border-foreground/15 hover:border-foreground/30 text-foreground/80 hover:text-foreground font-semibold text-xs sm:text-sm transition-colors"
                                >
                                    <Mail size={15} className="text-blue-accent" />
                                    <span>E-mail</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Drie geruststellende zekerheden */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-foreground/10">
                    <div className="bg-white p-5 rounded-2xl border border-foreground/8 shadow-2xs flex items-start gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-blue-accent/10 text-blue-accent flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-foreground text-sm mb-1">Geen verwijzing nodig</h3>
                            <p className="text-xs text-foreground/70 font-light leading-relaxed">
                                U kunt direct zonder verwijsbrief van uw huisarts bij al onze therapeuten terecht.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-foreground/8 shadow-2xs flex items-start gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                            <ShieldCheck size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-foreground text-sm mb-1">Alle zorgverzekeraars</h3>
                            <p className="text-xs text-foreground/70 font-light leading-relaxed">
                                Fysio Laren heeft contracten met alle zorgverzekeraars in Nederland.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-foreground/8 shadow-2xs flex items-start gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-foreground text-sm mb-1">Gratis parkeren & drempelvrij</h3>
                            <p className="text-xs text-foreground/70 font-light leading-relaxed">
                                Huenderstraat 3 in Laren met ruime parkeergelegenheid direct voor de deur.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Praktische gegevens */}
                <div className="mt-12 p-6 sm:p-8 bg-white/70 rounded-3xl border border-foreground/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/70 text-center sm:text-left">
                    <div className="flex items-center gap-3">
                        <Clock size={18} className="text-blue-accent shrink-0 hidden sm:block" />
                        <div>
                            <span className="font-bold text-foreground block">Openingstijden praktijk</span>
                            <span>Maandag t/m vrijdag: 08:00 - 18:00 uur (avonden op afspraak)</span>
                        </div>
                    </div>

                    <p className="text-foreground/50 text-[11px] max-w-xs sm:text-right">
                        Kunt u onverhoopt niet komen? Zeg uw afspraak minimaal 24 uur van tevoren af.
                    </p>
                </div>

            </div>
        </div>
    );
}
