"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  SlidersHorizontal, 
  ChevronDown, 
  ChevronUp,
  Calendar
} from "lucide-react";
import { cn } from "@/lib/utils";

type VariantId = "v1" | "v2" | "v3" | "v4" | "v5";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function ComingSoonSelector() {
  const [selectedVariant, setSelectedVariant] = useState<VariantId>("v1");
  const [isSelectorMinimized, setIsSelectorMinimized] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-11-01T08:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const variants = [
    { id: "v1", label: "1. Typografische Ticker", desc: "Originele rust, subtiele tekst-teller" },
    { id: "v2", label: "2. Luchtige Rondjes", desc: "Zachte, minimale cirkeltjes" },
    { id: "v3", label: "3. Pure Rust", desc: "Datum als titel, '49 dagen tot opening'" },
    { id: "v4", label: "4. Slanke Pil-teller", desc: "Eén rustige tijdlijn i.p.v. losse blokjes" },
    { id: "v5", label: "5. Origineel + Badge", desc: "Exact de oude pagina met 1 nov badge" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Vaste, rustige achtergrond decoratie zoals in het origineel */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-blue-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      {/* Centrale content container - exact zoals de originele pagina (max-w-lg, gecentreerd) */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full py-12">
        
        {/* Logo bovenaan */}
        <div className="mb-10 sm:mb-12">
          <Image
            src="/Logo%20transparant%20op%20wit.svg"
            alt="Fysio Laren"
            width={180}
            height={60}
            className="h-14 w-auto"
            priority
          />
        </div>

        {/* ========================================================================= */}
        {/* OPTIE 1: TYPOGRAFISCHE TICKER (Geen enkel blokje, 100% serene typografie) */}
        {/* ========================================================================= */}
        {selectedVariant === "v1" && (
          <>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-accent mb-3">
              Opening 1 november 2026
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Binnenkort online.
            </h1>

            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-6">
              Vanaf 1 november verwelkomen wij u graag in onze nieuwe praktijk aan de Huenderstraat 3 in Laren. Tot die tijd leggen wij de laatste hand aan de praktijk en de website.
            </p>

            {/* Subtiele, rustige inline tekst countdown */}
            <div className="text-sm font-medium text-foreground/60 mb-8 py-2 px-5 bg-foreground/[0.03] rounded-full border border-foreground/8 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-accent animate-pulse" />
              <span>
                Nog <strong className="text-foreground font-bold">{timeLeft.days}</strong> dagen, <strong className="text-foreground font-bold">{timeLeft.hours}</strong> uur en <strong className="text-foreground font-bold">{timeLeft.minutes}</strong> min
              </span>
            </div>
          </>
        )}

        {/* ========================================================================= */}
        {/* OPTIE 2: LUCHTIGE RONDJES (Kleine minimalistische cirkeltjes zonder zwaarte) */}
        {/* ========================================================================= */}
        {selectedVariant === "v2" && (
          <>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              1 november van start.
            </h1>

            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-8">
              Wij werken hard aan onze nieuwe praktijk en website. Vanaf 1 november staat ons team voor u klaar in Laren.
            </p>

            {/* Lichte, open cirkels */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8">
              {[
                { val: timeLeft.days, label: "dagen" },
                { val: timeLeft.hours, label: "uur" },
                { val: timeLeft.minutes, label: "min" },
                { val: timeLeft.seconds, label: "sec" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-foreground/15 bg-white/70 flex items-center justify-center text-xl sm:text-2xl font-bold text-blue-accent shadow-xs">
                    {item.val}
                  </div>
                  <span className="text-[11px] text-foreground/50 font-medium mt-1 uppercase">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ========================================================================= */}
        {/* OPTIE 3: PURE RUST (Geen vakjes, alleen datum en aantal dagen)           */}
        {/* ========================================================================= */}
        {selectedVariant === "v3" && (
          <>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
              1 november 2026.
            </h1>

            <p className="text-blue-accent font-semibold text-lg mb-5">
              Welkom bij Fysio Laren
            </p>

            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-8">
              De voorbereidingen zijn in volle gang. Vanaf 1 november bent u van harte welkom voor persoonlijke fysiotherapie en actieve begeleiding.
            </p>

            <div className="text-sm font-semibold text-foreground/60 mb-8">
              ✨ Nog <span className="text-foreground font-extrabold text-base">{timeLeft.days} dagen</span> tot de officiële opening
            </div>
          </>
        )}

        {/* ========================================================================= */}
        {/* OPTIE 4: SLANKE PIL-TELLER (Eén subtiel horizontaal balkje i.p.v. blokken) */}
        {/* ========================================================================= */}
        {selectedVariant === "v4" && (
          <>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-foreground/50 mb-3">
              <span>—</span>
              <span>1 November 2026</span>
              <span>—</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Binnenkort geopend.
            </h1>

            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-7">
              Nog even geduld. Vanaf 1 november staan onze therapeuten klaar voor uw herstel en gezondheid aan de Huenderstraat 3.
            </p>

            {/* Eén slanke, rustige capsule */}
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/90 border border-foreground/12 px-5 py-2.5 rounded-full shadow-xs text-xs sm:text-sm font-medium text-foreground/70 mb-8">
              <span><strong className="text-blue-accent font-bold text-base">{timeLeft.days}</strong> d</span>
              <span className="text-foreground/25">•</span>
              <span><strong className="text-blue-accent font-bold text-base">{timeLeft.hours}</strong> u</span>
              <span className="text-foreground/25">•</span>
              <span><strong className="text-blue-accent font-bold text-base">{timeLeft.minutes}</strong> m</span>
              <span className="text-foreground/25">•</span>
              <span><strong className="text-blue-accent font-bold text-base">{timeLeft.seconds}</strong> s</span>
            </div>
          </>
        )}

        {/* ========================================================================= */}
        {/* OPTIE 5: ORIGINEEL + BADGE (Exact het oude minimalistische design)        */}
        {/* ========================================================================= */}
        {selectedVariant === "v5" && (
          <>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-accent/10 text-blue-accent text-xs font-semibold mb-4">
              <Calendar size={13} />
              <span>Opening op 1 november 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Binnenkort online.
            </h1>

            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-6">
              Wij werken hard aan onze nieuwe praktijk en website. Vanaf 1 november kunt u hier alles vinden over onze behandelingen, beweeggroepen en ons team.
            </p>

            <p className="text-xs font-semibold text-foreground/40 uppercase tracking-widest mb-8">
              Nog {timeLeft.days} dagen • {timeLeft.hours} uur • {timeLeft.minutes} min
            </p>
          </>
        )}

        {/* Contact info - identiek aan de vertrouwde oude pagina */}
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full justify-center">
          <a
            href="tel:+31573215058"
            className="w-full sm:w-auto px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-accent/90 transition-all flex items-center justify-center shadow-lg md:text-lg hover:scale-[1.02]"
          >
            Bel ons: 0573 - 21 50 58
          </a>
        </div>

        <p className="text-foreground/50 text-sm mt-6">
          Of mail naar{" "}
          <a
            href="mailto:info@fysio-laren.nl"
            className="underline hover:text-foreground/70 transition-colors"
          >
            info@fysio-laren.nl
          </a>
        </p>

        <p className="text-foreground/40 text-xs mt-3">
          Huenderstraat 3, 7245 BG Laren (Gld)
        </p>
      </div>

      {/* ========================================================================= */}
      {/* FLOATING SELECTOR BAR                                                    */}
      {/* ========================================================================= */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-[200] transition-all duration-300">
        {!isSelectorMinimized ? (
          <div className="bg-slate-950/95 text-white backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl md:rounded-full p-2.5 sm:px-4 sm:py-2 flex flex-col md:flex-row items-center gap-2 md:gap-3 max-w-[96vw]">
            <div className="flex items-center gap-2 px-2 text-xs font-semibold text-white/70 border-b md:border-b-0 md:border-r border-white/15 pb-1 md:pb-0 md:pr-3 w-full md:w-auto justify-between md:justify-start">
              <span className="flex items-center gap-1.5 text-amber-300">
                <SlidersHorizontal size={14} />
                <span>Kies simpele variant:</span>
              </span>
              <button 
                onClick={() => setIsSelectorMinimized(true)}
                className="text-white/50 hover:text-white transition-colors p-1 md:hidden"
                title="Minimaliseer balk"
              >
                <ChevronDown size={16} />
              </button>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-1.5 sm:gap-2 justify-center items-center">
              {variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVariant(v.id as VariantId)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap",
                    selectedVariant === v.id
                      ? "bg-blue-accent text-white font-bold shadow-md shadow-blue-500/30 ring-2 ring-white/30"
                      : "bg-white/10 hover:bg-white/20 text-white/80 hover:text-white"
                  )}
                >
                  {v.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsSelectorMinimized(true)}
              className="hidden md:flex items-center justify-center p-1.5 rounded-full hover:bg-white/15 text-white/60 hover:text-white transition-colors ml-1 cursor-pointer"
              title="Minimaliseer balk"
            >
              <ChevronDown size={16} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsSelectorMinimized(false)}
            className="bg-slate-950/90 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-2xl border border-white/20 flex items-center gap-2 backdrop-blur-lg hover:scale-105 transition-all cursor-pointer"
          >
            <SlidersHorizontal size={14} className="text-amber-300" />
            <span>Kies variant (5 opties)</span>
            <ChevronUp size={14} className="text-white/60" />
          </button>
        )}
      </div>
    </div>
  );
}
