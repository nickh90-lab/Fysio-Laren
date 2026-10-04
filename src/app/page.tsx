"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PracticalInfoSelector from "@/components/PracticalInfoSelector";
import CTASelector from "@/components/CTASelector";
import WaaromFysioSelector from "@/components/WaaromFysioSelector";
import InstagramFeed from "@/components/InstagramFeed";
import PartnersCarousel from "@/components/PartnersCarousel";
import OpeningHeroSelector from "@/components/OpeningHeroSelector";
import OpeningConfetti from "@/components/OpeningConfetti";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Feestelijke openingsconfetti (bij 1e bezoek & met testknop) */}
      <OpeningConfetti />

      {/* Sectie 1: Hero Sectie (met Openings-Selector & Origineel) */}
      <OpeningHeroSelector />

      {/* Sectie 1: Wat kunnen wij voor u betekenen? (Wit) */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white flex flex-col items-center">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Wat kunnen wij voor u betekenen?</h2>
            <p className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Welkom bij Fysio Laren. Als fysiotherapiepraktijk helpen wij u bij het behandelen, verhelpen en voorkomen van lichamelijke klachten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hoofdblok Fysiotherapie */}
            <div className="bg-muted rounded-[2.5rem] p-10 md:p-12 flex flex-col h-full border border-foreground/5 shadow-sm hover:shadow-lg transition-all group">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-primary-foreground transition-colors">Fysiotherapie</h3>
              <p className="text-foreground/80 mb-10 flex-grow text-lg leading-relaxed">
                Wij zijn een gespecialiseerde fysiotherapiepraktijk. Onze therapeuten bieden persoonlijke en doelgerichte behandelingen om u zo snel mogelijk weer in beweging te krijgen.
              </p>
              <Link 
                href="/afspraak-maken" 
                className="inline-flex items-center text-white bg-blue-accent font-bold hover:bg-blue-accent/90 transition-all mt-auto w-fit px-8 py-4 rounded-full shadow-xl hover:scale-105 border border-foreground/5 md:text-lg"
              >
                Maak een afspraak <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>

            {/* Ondersteunend blok FysioFit */}
            <div className="bg-primary/20 rounded-[2.5rem] p-10 md:p-12 flex flex-col h-full border border-foreground/5 shadow-sm hover:shadow-lg transition-all group relative overflow-hidden">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-primary-foreground transition-colors">FysioFit</h3>
              <p className="text-foreground/80 mb-10 flex-grow text-lg leading-relaxed">
                Als krachtige aanvulling op onze fysiotherapie bieden wij FysioFit: verantwoord trainen onder professionele begeleiding. Ideaal ter ondersteuning van uw opgebouwde herstel en ter preventie van nieuwe klachten.
              </p>
              <Link href="/gespecialiseerde-groepstraining" className="inline-flex items-center text-foreground font-bold hover:gap-3 transition-all mt-auto bg-white/80 hover:bg-white w-fit px-8 py-4 rounded-full shadow-sm border border-foreground/10 md:text-lg">
                Ontdek FysioFit <ArrowRight size={20} className="ml-2 text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sectie 3: Waarom Fysio Laren? (Zand vs Nieuw) - Selector */}
      <WaaromFysioSelector />

      {/* Partners / Samenwerkingen */}
      <PartnersCarousel />

      {/* Sectie 4: Praktische informatie (Wit) - A/B Test Selector */}
      <PracticalInfoSelector />

      {/* Sectie 5: Instagram Feed */}
      <InstagramFeed />

      {/* Sectie 6: Call to action (A/B Test Selector) */}
      <CTASelector />
    </div>
  );
}
