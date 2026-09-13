"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12 relative overflow-hidden">
      {/* Subtiele achtergrond decoratie */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[45vw] h-[45vw] bg-primary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[35vw] h-[35vw] bg-blue-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      {/* Het Elegante Kader: Verenigt alle elementen in één rustige, samenhangende kaart */}
      <div className="relative z-10 max-w-5xl mx-auto w-full bg-white/85 backdrop-blur-xl rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-foreground/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Linkerkant: Inhoud & Contact */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Groot Logo */}
            <div className="mb-4 sm:mb-5 w-64 sm:w-72 md:w-80 relative">
              <Image
                src="/Logo%20transparant%20op%20wit.svg"
                alt="Fysio Laren"
                width={340}
                height={115}
                className="w-full h-auto drop-shadow-xs"
                priority
              />
            </div>

            {/* Titel */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight tracking-tight">
              Hier komt binnenkort onze nieuwe website.
            </h1>

            {/* 2 Kolommen met locaties & fasering */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full max-w-xl text-center sm:text-left mb-5 border-t border-b border-foreground/10 py-4 sm:py-5">
              {/* Kolom 1: 1 November 2026 */}
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black text-foreground tracking-tight block mb-0.5">
                  1 November 2026
                </span>
                <p className="text-sm sm:text-base font-bold text-foreground leading-snug mb-1.5">
                  Start als Fysio Laren
                </p>
                <div className="mt-auto">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/50 block">
                    Huidig pand (pand Solis):
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-foreground/85 leading-snug">
                    Rengersweg 2, Laren
                  </p>
                </div>
              </div>

              {/* Kolom 2: 1 Januari 2027 */}
              <div className="flex flex-col border-t sm:border-t-0 sm:border-l border-foreground/8 pt-3.5 sm:pt-0 sm:pl-6">
                <span className="text-base sm:text-lg font-black text-foreground tracking-tight block mb-0.5">
                  1 Januari 2027
                </span>
                <p className="text-sm sm:text-base font-bold text-foreground leading-snug mb-1.5">
                  Nieuwe praktijklocatie
                </p>
                <div className="mt-auto">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/50 block">
                    Nieuw pand:
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-foreground/85 leading-snug">
                    Huenderstraat 3, Laren
                  </p>
                </div>
              </div>
            </div>

            {/* Solis afspraakinfo */}
            <div className="w-full max-w-xl mb-5 text-xs sm:text-sm text-foreground/75 leading-relaxed bg-foreground/[0.03] rounded-xl p-3 sm:p-3.5 border border-foreground/8 text-center sm:text-left">
              <p className="font-medium text-foreground mb-0.5">
                Afspraak maken tot 1 november?
              </p>
              <p className="text-foreground/65 text-xs sm:text-[13px]">
                U kunt tot 1 november voor afspraken contact opnemen met <strong>Solis</strong> (<a href="tel:0573401984" className="hover:underline font-semibold text-foreground">0573-401984</a>). Vanaf 1 november zijn wij rechtstreeks bereikbaar via onderstaand nummer:
              </p>
            </div>

            {/* Contact knoppen */}
            <div className="flex flex-col sm:flex-row gap-2.5 items-center w-full justify-center lg:justify-start">
              <a
                href="tel:+31573215058"
                className="w-full sm:w-auto px-6 py-3 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-accent/90 transition-all flex items-center justify-center gap-2 shadow-sm text-sm hover:scale-[1.02]"
              >
                <Phone size={15} />
                <span>0573 - 21 50 58</span>
              </a>
              <a
                href="mailto:info@fysio-laren.nl"
                className="w-full sm:w-auto px-6 py-3 bg-white text-foreground font-semibold rounded-full border border-foreground/15 hover:bg-foreground/5 transition-all flex items-center justify-center gap-2 shadow-xs text-sm"
              >
                <Mail size={15} />
                <span>info@fysio-laren.nl</span>
              </a>
            </div>

          </div>

          {/* Rechterkant: Teamfoto in kader */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-[280px] sm:max-w-[310px] lg:max-w-[320px] aspect-[3545/5206] rounded-[2rem] overflow-hidden shadow-xl bg-muted border-4 border-white">
              <Image
                src="/images/Teamfoto_v2.jpg"
                alt="Team Fysio Laren"
                fill
                priority
                sizes="(max-width: 768px) 280px, 320px"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
