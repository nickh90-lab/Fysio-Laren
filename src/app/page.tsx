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

export default function Home() {
  return (
    <div className="pt-20">
      {/* Sectie 1: Hero Sectie */}
      <div className="w-full bg-background flex flex-col lg:flex-row min-h-[85vh] -mt-20 pt-32 pb-16 relative items-center">
        <div className="max-w-screen-2xl mx-auto w-full flex flex-col lg:flex-row items-center px-6 lg:px-12 xl:px-24 gap-12 lg:gap-20">
          
          {/* Linkerzijde - Introductietekst */}
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
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
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
              <Link href="/fysiofit" className="inline-flex items-center text-foreground font-bold hover:gap-3 transition-all mt-auto bg-white/80 hover:bg-white w-fit px-8 py-4 rounded-full shadow-sm border border-foreground/10 md:text-lg">
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
