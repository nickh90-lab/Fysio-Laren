"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

/* =========================================================================
   HERO CONFIGURATIE:
   Zet IS_OPENING_HERO op `false` om direct terug te keren naar de
   originele homepage ("Samen werken aan uw gezondheid").
   ========================================================================= */
export const IS_OPENING_HERO = true;

export default function OpeningHeroSelector() {
  // 1. ORIGINELE VERSIE (Voor later / standaardsituatie)
  if (!IS_OPENING_HERO) {
    return (
      <div className="w-full bg-background flex flex-col lg:flex-row min-h-[85vh] -mt-20 pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 relative items-center">
        <div className="max-w-screen-2xl mx-auto w-full flex flex-col lg:flex-row items-center px-6 lg:px-12 xl:px-24 gap-12 lg:gap-20">
          
          {/* Linkerzijde - Originele tekst */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left items-center lg:items-start z-10">
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-[1.1] lg:leading-[1.05]">
              Samen werken<br className="hidden md:block" /> aan uw<br className="hidden md:block" /> gezondheid.
            </h1>
            <p className="text-foreground/70 text-lg md:text-xl max-w-md font-light leading-relaxed mx-auto lg:mx-0">
              Persoonlijke aandacht, duidelijke uitleg en een behandeling die bij u past. Samen werken we aan herstel en blijvend resultaat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 items-center lg:items-start w-full sm:w-auto">
              <Link href="/afspraak-maken" className="w-full sm:w-auto px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-accent/90 transition-all flex items-center justify-center shadow-lg hover:shadow-blue-accent/20 md:text-lg">
                Maak een afspraak
              </Link>
              <Link href="/ons-team" className="w-full sm:w-auto px-8 py-4 bg-white/80 hover:bg-white text-foreground font-bold rounded-full border border-foreground/10 shadow-sm transition-all flex items-center justify-center md:text-lg">
                Ons team
              </Link>
            </div>
          </div>

          {/* Rechterzijde - De Groepsfoto */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center pt-4 sm:pt-6 lg:pt-8">
            <div className="relative w-full max-w-[370px] aspect-[3545/5206] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-muted">
              <Image 
                src="/images/Teamfoto_v2.jpg" 
                alt="Team Fysio Laren" 
                fill
                priority
                sizes="(max-width: 768px) 370px, 450px"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    );
  }

  // 2. TIJDELIJKE OPENINGSVERSIE (Hoera, we gaan beginnen - subtieler formaat & rustig)
  return (
    <div className="w-full bg-background flex flex-col lg:flex-row min-h-[85vh] -mt-20 pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 relative items-center">
      <div className="max-w-screen-2xl mx-auto w-full flex flex-col lg:flex-row items-center px-6 lg:px-12 xl:px-24 gap-12 lg:gap-20">
        
        {/* Linkerzijde - Feestelijke maar stijlvolle openingstekst */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center items-center z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-foreground mb-6 leading-[1.18] lg:leading-[1.12] tracking-tight text-center w-full">
            Hoera, we gaan beginnen<br />
            <span className="text-blue-accent">Welkom bij Fysio Laren!</span>
          </h1>

          <p className="text-foreground/80 text-lg md:text-xl max-w-xl font-light leading-relaxed mx-auto text-center">
            Vanaf 1 november starten wij aan de Rengersweg 2 en vanaf 1 januari aan de Huenderstraat 3. Onze agenda voor behandelingen is geopend vanaf 1 november. Wilt u een afspraak vóór 1 november? Bel dan naar <a href="tel:0570685899" className="font-semibold text-blue-accent underline hover:text-blue-accent/80 transition-colors">0570 - 68 58 99</a>. Voor afspraken vanaf 1 november kunt u alvast online plannen of bellen naar <a href="tel:0573215058" className="font-semibold text-blue-accent underline hover:text-blue-accent/80 transition-colors">0573 - 21 50 58</a>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 items-center justify-center w-full sm:w-auto">
            <Link
              href="/afspraak-maken"
              className="w-full sm:w-auto px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-accent/90 transition-all flex items-center justify-center shadow-lg hover:shadow-blue-accent/20 md:text-lg hover:scale-102"
            >
              Plan alvast uw afspraak
            </Link>
            <Link
              href="/ons-team"
              className="w-full sm:w-auto px-8 py-4 bg-white/80 hover:bg-white text-foreground font-bold rounded-full border border-foreground/10 shadow-sm transition-all flex items-center justify-center md:text-lg"
            >
              Maak kennis met ons team
            </Link>
          </div>
        </div>

        {/* Rechterzijde - De Groepsfoto */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center pt-4 sm:pt-6 lg:pt-8">
          <div className="relative w-full max-w-[370px] aspect-[3545/5206] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-muted">
            <Image 
              src="/images/Teamfoto_v2.jpg" 
              alt="Team Fysio Laren" 
              fill
              priority
              sizes="(max-width: 768px) 370px, 450px"
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
