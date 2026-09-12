"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Aftellen naar 1 november 2026 om 08:00
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

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Subtiele achtergrond decoratie */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[45vw] h-[45vw] bg-primary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[35vw] h-[35vw] bg-blue-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      {/* Centrale content container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full">
        {/* Logo - royaler formaat zoals voorheen */}
        <div className="mb-8 w-64 md:w-80 relative">
          <Image
            src="/Logo%20transparant%20op%20wit.svg"
            alt="Fysio Laren"
            width={320}
            height={110}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
          Hier komt binnenkort onze nieuwe website.
        </h1>

        {/* Afteller - rustige, subtiele capsule */}
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/90 border border-foreground/10 px-4 sm:px-5 py-2 rounded-full shadow-xs text-xs sm:text-sm text-foreground/80 mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-accent animate-pulse" />
          <span>
            Nog <strong className="text-blue-accent font-bold">{timeLeft.days}</strong> dagen, <strong className="text-blue-accent font-bold">{timeLeft.hours}</strong> uur en <strong className="text-blue-accent font-bold">{timeLeft.minutes}</strong> min tot de start
          </span>
        </div>

        {/* Locatie & Fasering blok - helder, overzichtelijk en rustig */}
        <div className="w-full bg-white/80 backdrop-blur-sm border border-foreground/10 rounded-2xl p-5 sm:p-6 mb-8 text-left shadow-xs space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent shrink-0 mt-0.5">
              <MapPin size={16} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-accent block mb-0.5">
                Vanaf 1 november 2026
              </span>
              <p className="text-sm sm:text-[15px] font-medium text-foreground leading-snug">
                Wij gaan officieel van start onder de naam <strong>Fysio Laren</strong> op onze vertrouwde locatie:
              </p>
              <p className="text-xs sm:text-sm text-foreground/70 mt-0.5">
                Rengersweg 2, Laren (Gld)
              </p>
            </div>
          </div>

          <div className="border-t border-foreground/8 pt-3.5 flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/40 flex items-center justify-center text-foreground shrink-0 mt-0.5">
              <MapPin size={16} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-foreground/60 block mb-0.5">
                Vanaf 1 januari 2027
              </span>
              <p className="text-sm sm:text-[15px] font-medium text-foreground leading-snug">
                Verhuizen wij naar onze nieuwe praktijklocatie:
              </p>
              <p className="text-xs sm:text-sm text-foreground/70 mt-0.5">
                Huenderstraat 3, Laren (Gld)
              </p>
            </div>
          </div>
        </div>

        {/* Contact knop & mail */}
        <div className="flex flex-col sm:flex-row gap-3 items-center w-full justify-center">
          <a
            href="tel:+31573215058"
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-accent/90 transition-all flex items-center justify-center gap-2 shadow-md md:text-base hover:scale-[1.02]"
          >
            <Phone size={17} />
            <span>Bel ons: 0573 - 21 50 58</span>
          </a>
          <a
            href="mailto:info@fysio-laren.nl"
            className="w-full sm:w-auto px-7 py-3.5 bg-white text-foreground font-semibold rounded-full border border-foreground/15 hover:bg-foreground/5 transition-all flex items-center justify-center gap-2 shadow-xs md:text-base"
          >
            <Mail size={17} />
            <span>info@fysio-laren.nl</span>
          </a>
        </div>
      </div>
    </div>
  );
}
