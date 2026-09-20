"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import PracticalInfoSelector from "@/components/PracticalInfoSelector";
import CTASelector from "@/components/CTASelector";
import SpecialtiesSelector from "@/components/SpecialtiesSelector";
import WaaromFysioSelector from "@/components/WaaromFysioSelector";
import InstagramFeed from "@/components/InstagramFeed";
import { partners } from "@/data/partners";
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
              Welkom bij Fysio Laren. Als professionele fysiotherapiepraktijk helpen wij u bij het behandelen, verhelpen en voorkomen van lichamelijke klachten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hoofdblok Fysiotherapie */}
            <div className="bg-muted rounded-[2.5rem] p-10 md:p-12 flex flex-col h-full border border-foreground/5 shadow-sm hover:shadow-lg transition-all group">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-primary-foreground transition-colors">Fysiotherapie</h3>
              <p className="text-foreground/80 mb-10 flex-grow text-lg leading-relaxed">
                Wij zijn in de basis een gespecialiseerde fysiotherapiepraktijk. Onze therapeuten bieden persoonlijke en doelgerichte behandelingen om u zo snel mogelijk weer pijnvrij in beweging te krijgen. Van herstel na een operatie tot complexe klachten.
              </p>
              <Link href="/afspraak-maken" className="inline-flex items-center text-white bg-blue-accent font-bold hover:bg-blue-accent/90 transition-all mt-auto w-fit px-8 py-4 rounded-full shadow-xl hover:scale-105 border border-foreground/5 md:text-lg">
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

      {/* Sectie 2: Expertises en Behandelingen (Beige vs Lichtblauw) - Tabs Component */}
      <SpecialtiesSelector />

      {/* Sectie 3: Waarom Fysio Laren? (Zand vs Nieuw) - Selector */}
      <WaaromFysioSelector />

      {/* Partners / Samenwerkingen */}
      <section className="py-12 md:py-16 bg-muted flex flex-col items-center overflow-hidden">
        <div className="w-full max-w-[100vw]">
          <div className="text-center mb-10 md:mb-12 px-6">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">Fysio Laren werkt samen met</h2>
          </div>
          
          <div className="relative flex w-full flex-nowrap items-center overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex w-max animate-marquee gap-12 md:gap-20 hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, arrayIndex) => (
                <div key={arrayIndex} className="flex gap-12 md:gap-20 items-center justify-around w-max">
                  {partners.map((partner) => (
                    <div 
                      key={partner.slug} 
                      className="group flex flex-col items-center gap-3 transition-all duration-300 w-24 md:w-32 shrink-0 cursor-pointer hover:-translate-y-1"
                    >
                      <div className="h-20 md:h-24 w-36 md:w-48 rounded-2xl flex items-center justify-center relative overflow-hidden bg-white shadow-sm border border-foreground/5 group-hover:shadow-md transition-all p-2 md:p-3">
                        <Image 
                          src={`/partners/${partner.slug}.${partner.ext || 'png'}`} 
                          alt={partner.name} 
                          fill
                          className={cn(
                            "object-contain p-2 md:p-3",
                            partner.slug === "het-doktershuus" && "invert opacity-80"
                          )}
                          sizes="(max-width: 768px) 144px, 192px"
                        />
                      </div>
                      <span className="text-xs md:text-sm font-semibold text-foreground/60 group-hover:text-blue-accent transition-colors text-center leading-tight">
                        {partner.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectie 4: Praktische informatie (Wit) - A/B Test Selector */}
      <PracticalInfoSelector />

      {/* Sectie 5: Instagram Feed */}
      <InstagramFeed />

      {/* Sectie 6: Call to action (A/B Test Selector) */}
      <CTASelector />
    </div>
  );
}
