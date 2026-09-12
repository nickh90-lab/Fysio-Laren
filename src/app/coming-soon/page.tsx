"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

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
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Rustige achtergrond decoratie */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-blue-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Logo */}
        <div className="mb-12">
          <Image
            src="/Logo%20transparant%20op%20wit.svg"
            alt="Fysio Laren"
            width={180}
            height={60}
            className="h-14 w-auto"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
          Binnenkort online.
        </h1>

        {/* Datum duidelijk in beeld */}
        <p className="text-blue-accent font-semibold text-lg md:text-xl mb-4">
          Opening op 1 november 2026
        </p>

        {/* Message */}
        <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-6">
          Wij werken hard aan onze nieuwe praktijk en website. Vanaf 1 november kunt u hier alles vinden over onze behandelingen, beweeggroepen en ons team.
        </p>

        {/* Afteller */}
        <div className="inline-flex items-center gap-3 sm:gap-4 bg-white/80 border border-foreground/10 px-5 sm:px-6 py-2.5 rounded-full shadow-xs text-sm text-foreground/80 mb-8">
          <span><strong className="text-blue-accent font-bold text-base">{timeLeft.days}</strong> dagen</span>
          <span className="text-foreground/20">•</span>
          <span><strong className="text-blue-accent font-bold text-base">{timeLeft.hours}</strong> uur</span>
          <span className="text-foreground/20">•</span>
          <span><strong className="text-blue-accent font-bold text-base">{timeLeft.minutes}</strong> min</span>
          <span className="text-foreground/20">•</span>
          <span><strong className="text-blue-accent font-bold text-base">{timeLeft.seconds}</strong> sec</span>
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="tel:+31573215058"
            className="px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-accent/90 transition-all flex items-center justify-center shadow-lg md:text-lg hover:scale-[1.02]"
          >
            Bel ons: 0573-215058
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
    </div>
  );
}
