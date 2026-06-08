"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Activity, Users, Clock, ShieldCheck, Check, Phone, ArrowRight, MapPin, Search } from "lucide-react";
import PracticalInfoSelector from "@/components/PracticalInfoSelector";
import CTASelector from "@/components/CTASelector";
import SpecialtiesSelector from "@/components/SpecialtiesSelector";
import WaaromFysioSelector from "@/components/WaaromFysioSelector";
import LogoDisplaySelector from "@/components/LogoDisplaySelector";


export default function Home() {
  const heroImageSrc = "/images/hero-praktijk-binnen.jpg";
  return (
    <div className="pt-20">
      {/* Sectie 1: Hero Sectie */}
      <div className="w-full bg-background flex flex-col lg:flex-row min-h-[85vh] -mt-20 pt-32 pb-16 relative">
        <div className="max-w-screen-2xl mx-auto w-full flex flex-col lg:flex-row items-center px-6 lg:px-12 xl:px-24 gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 flex flex-col justify-center py-12 lg:py-24 z-10 text-center lg:text-left items-center lg:items-start">
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-[1.1] lg:leading-[1.05]">
              Samen werken<br className="hidden md:block" /> aan uw<br className="hidden md:block" /> gezondheid.
            </h1>
            <p className="text-foreground/70 text-lg md:text-xl max-w-md font-light leading-relaxed mx-auto lg:mx-0">
              Persoonlijke aandacht, duidelijke uitleg en een behandeling die bij u past.<br className="hidden lg:block lg:mb-2" /> Samen werken we aan herstel en blijvend resultaat.
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
          <div className="w-full lg:w-1/2 relative h-[40vh] sm:h-[50vh] lg:h-auto min-h-[300px] sm:min-h-[500px]">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] sm:w-[85%] aspect-square rounded-full overflow-hidden shadow-[0_40px_80px_-20px_rgba(30,41,59,0.15)] ring-1 ring-black/5 border-[4px] sm:border-[6px] border-white/90 z-0">
              <Image src={heroImageSrc} alt="Praktijk" fill className="object-cover object-right" priority />
            </div>
            <LogoDisplaySelector />
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

            {/* Ondersteunend blok Sportis */}
            <div className="bg-primary/20 rounded-[2.5rem] p-10 md:p-12 flex flex-col h-full border border-foreground/5 shadow-sm hover:shadow-lg transition-all group relative overflow-hidden">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-primary-foreground transition-colors">Sportis</h3>
              <p className="text-foreground/80 mb-10 flex-grow text-lg leading-relaxed">
                Als krachtige aanvulling op onze fysiotherapie bieden wij Sportis: verantwoord trainen onder professionele begeleiding. Ideaal ter ondersteuning van uw opgebouwde herstel en ter preventie van nieuwe klachten.
              </p>
              <Link href="/sportis" className="inline-flex items-center text-foreground font-bold hover:gap-3 transition-all mt-auto bg-white/80 hover:bg-white w-fit px-8 py-4 rounded-full shadow-sm border border-foreground/10 md:text-lg">
                Ontdek Sportis <ArrowRight size={20} className="ml-2 text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sectie 2: Expertises en Behandelingen (Beige vs Lichtblauw) - Tabs Component */}
      <SpecialtiesSelector />

      {/* Sectie 3: Waarom Fysio Laren? (Zand vs Nieuw) - Selector */}
      <WaaromFysioSelector />

      {/* Sectie 4: Praktische informatie (Wit) - A/B Test Selector */}
      <PracticalInfoSelector />

      {/* Sectie 5: Call to action (A/B Test Selector) */}
      <CTASelector />
    </div>
  );
}


