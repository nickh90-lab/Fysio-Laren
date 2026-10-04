"use client";

import React, { useState, useRef, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { GraduationCap, ChevronDown, ArrowUpRight } from "lucide-react";
import { team } from "@/data/team";
import { cn } from "@/lib/utils";

function TeamInteractiveContent() {
  const searchParams = useSearchParams();
  const lidParam = searchParams.get("lid");

  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

  const activeMemberId = selectedMemberId || (lidParam && team.some(m => m.slug === lidParam) ? lidParam : (team[0]?.slug || "marloes"));
  const setActiveMemberId = (slug: string) => setSelectedMemberId(slug);

  const activeMember = team.find(m => m.slug === activeMemberId) || team[0];

  const renderEmptyImage = (name: string, size: number = 64, textClass: string = "text-6xl") => (
      <div className="w-full h-full bg-foreground/5 flex flex-col items-center justify-center text-foreground/20 min-h-full">
          <GraduationCap size={size} className="mb-2 opacity-50" />
          <span className={cn("font-bold", textClass)}>{name[0]}</span>
      </div>
  );


  // Splits de extendedBio op in alinea's voor mooie opmaak
  const bioParagraphs = (activeMember.extendedBio || activeMember.bio)
    .split("\n\n")
    .filter(p => p.trim().length > 0);

  // State om bij te houden of er nog tekst naar beneden gescrold kan worden
  const [canScrollDown, setCanScrollDown] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      setCanScrollDown(scrollHeight - scrollTop - clientHeight > 20);
    }
  };

  const handleScrollDown = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
      setTimeout(checkScroll, 200);
      setTimeout(checkScroll, 500);
    }
  };

  useEffect(() => {
    checkScroll();
    // Reset scrollpositie naar boven bij wisselen van teamlid
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    const timer = setTimeout(checkScroll, 100);
    return () => clearTimeout(timer);
  }, [activeMemberId]);

  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-16 relative bg-white scroll-smooth w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center">
        
        {/* Intro - Compact & Direct in beeld */}
        <div className="text-center mb-6 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">Ontmoet ons team</h1>
        </div>

        {/* Alle collega's even groot naast elkaar in beeld */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 md:gap-8 mb-8">
          {team.map((member) => (
            <div key={member.slug} className="flex flex-col items-center group">
              <button 
                onClick={() => setActiveMemberId(member.slug)}
                className={cn(
                  "relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden transition-all duration-300 border-3 md:border-4 cursor-pointer",
                  activeMemberId === member.slug 
                    ? "border-blue-accent scale-105 shadow-lg opacity-100 saturate-100 ring-2 ring-blue-accent/20" 
                    : "border-transparent opacity-85 saturate-100 scale-95 group-hover:scale-100 group-hover:opacity-100"
                )}
              >
                {member.image ? (
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      sizes="(max-width: 768px) 80px, 96px"
                      className="object-cover object-[center_12%]" 
                    />
                ) : renderEmptyImage(member.name, 32, "text-2xl")}
              </button>
              <span className={cn(
                "mt-2 text-xs sm:text-sm font-semibold transition-colors duration-200",
                activeMemberId === member.slug ? "text-blue-accent font-bold" : "text-foreground/70 group-hover:text-foreground"
              )}>
                {member.name}
              </span>
            </div>
          ))}
        </div>

        {/* DETAILS BOX */}
        <div className="w-full max-w-4xl bg-muted/30 rounded-[2.5rem] md:rounded-[3rem] border border-foreground/5 shadow-sm overflow-hidden flex flex-col md:flex-row md:h-[500px] relative">
          {/* Foto Links: Op mobiel volledig in beeld (zonder uitsnede/zoom), op PC vullend */}
          <div className="w-full md:w-[38%] h-[320px] sm:h-[360px] md:h-full relative bg-slate-100/90 overflow-hidden shrink-0 flex items-center justify-center">
            {activeMember.image ? (
              <div key={activeMember.slug} className="w-full h-full relative flex items-center justify-center">
                {/* Zachte sfeervolle achtergrondvervaging op mobiel zodat de zijkanten mooi overlopen */}
                <div className="absolute inset-0 md:hidden overflow-hidden pointer-events-none">
                  <Image 
                    src={activeMember.image} 
                    alt="" 
                    fill 
                    className="object-cover blur-2xl opacity-25 scale-125" 
                    aria-hidden="true" 
                  />
                </div>

                {/* Hoofdfoto: mobiel object-contain (compleet in beeld zoals op PC), desktop object-cover */}
                <Image 
                  src={activeMember.image} 
                  alt={activeMember.name} 
                  fill 
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain md:object-cover object-bottom md:object-[center_10%] relative z-10" 
                />
              </div>
            ) : renderEmptyImage(activeMember.name, 64, "text-5xl")}
          </div>

          {/* Tekst Rechts met Scroll Container & Fade Indicator */}
          <div className="w-full md:w-[62%] relative flex flex-col h-[350px] md:h-full">
            <div 
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="p-6 sm:p-8 md:p-10 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-foreground/20 scrollbar-track-transparent pr-4 md:pr-8"
              style={{ scrollbarGutter: "stable" }}
            >
              {/* Header: Rol & Naam */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-accent block mb-1">
                  {activeMember.role}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  {activeMember.name}
                </h2>
              </div>

              {/* ⭐ SPECIALISMEN TABLETS / TAGS */}
              <div className="flex flex-wrap gap-2 my-3.5 pb-3.5 border-b border-foreground/10">
                {activeMember.specialties.map((spec) => {
                  if (spec.href) {
                    return (
                      <Link
                        key={spec.name}
                        href={spec.href}
                        className="inline-flex items-center gap-1 bg-white hover:bg-blue-accent/5 border border-foreground/15 hover:border-blue-accent/40 px-3 py-1 rounded-full text-xs font-semibold text-foreground/80 hover:text-blue-accent shadow-2xs group/spec transition-all duration-150 cursor-pointer"
                        title={`Bekijk behandeling: ${spec.name}`}
                      >
                        <span>{spec.name}</span>
                        <ArrowUpRight className="w-3 h-3 text-foreground/40 group-hover/spec:text-blue-accent group-hover/spec:translate-x-0.5 group-hover/spec:-translate-y-0.5 transition-all shrink-0" />
                      </Link>
                    );
                  }

                  return (
                    <span
                      key={spec.name}
                      className="inline-flex items-center bg-white border border-foreground/15 px-3 py-1 rounded-full text-xs font-semibold text-foreground/75 shadow-2xs"
                    >
                      {spec.name}
                    </span>
                  );
                })}
              </div>

              {/* Volledige persoonlijke tekst */}
              <div className="text-xs sm:text-sm md:text-[14.5px] text-foreground/80 font-light leading-relaxed space-y-3 pb-4">
                {bioParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* 🏆 AANGESLOTEN KWALITEITSNETWERKEN (Rustig & Minimalistisch onderaan) */}
              {activeMember.networks && activeMember.networks.length > 0 && (
                <div className="mt-6 pt-5 border-t border-foreground/10 pb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground/50 block mb-3">
                    Aangesloten Netwerken & Registers:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeMember.networks.map(net => (
                      <span 
                        key={net} 
                        className="bg-white border border-foreground/12 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-foreground/80 shadow-xs hover:border-foreground/25 transition-all"
                      >
                        {net}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ✨ SUBTIELE VISUELE SCROLL-INDICATOR / KLIKBARE KNOP */}
            {canScrollDown && (
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent flex items-end justify-center pb-3">
                <button
                  type="button"
                  onClick={handleScrollDown}
                  className="pointer-events-auto text-[11px] font-bold uppercase tracking-wider text-blue-accent bg-white/95 hover:bg-blue-accent hover:text-white px-4 py-1.5 rounded-full border border-blue-accent/25 hover:border-blue-accent shadow-xs hover:shadow-md flex items-center gap-1.5 transition-all duration-200 cursor-pointer active:scale-95 group"
                  aria-label="Scroll naar beneden voor meer informatie"
                >
                  <span>Meer informatie</span>
                  <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default function TeamInteractive() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <TeamInteractiveContent />
    </Suspense>
  );
}

