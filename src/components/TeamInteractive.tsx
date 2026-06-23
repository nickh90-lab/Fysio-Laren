"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GraduationCap, MousePointer2 } from "lucide-react";
import { team, TeamMember } from "@/data/team";
import { cn } from "@/lib/utils";

export default function TeamInteractive() {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  const renderEmptyImage = (name: string, size: number = 64, textClass: string = "text-6xl") => (
      <div className="w-full h-full bg-foreground/5 flex flex-col items-center justify-center text-foreground/20 min-h-full">
          <GraduationCap size={size} className="mb-2 opacity-50" />
          <span className={cn("font-bold", textClass)}>{name[0]}</span>
      </div>
  );

  return (
    <div className="min-h-screen pt-32 pb-32 relative bg-white scroll-smooth w-full">
      <div className="max-w-6xl mx-auto flex flex-col items-center px-6 md:px-12">
        <h1 className="text-3xl md:text-5xl font-light text-center mb-16 tracking-tight text-foreground">
          Kies een behandelaar.
        </h1>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16">
          {team.map((member) => (
            <div key={member.slug} className="flex flex-col items-center group">
              <button 
                onClick={() => setActiveMember(member)}
                className={cn(
                  "relative w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden transition-all duration-500 border-4",
                  activeMember?.slug === member.slug 
                    ? "border-blue-accent scale-110 shadow-xl" 
                    : "border-transparent saturate-50 opacity-80 group-hover:saturate-100 group-hover:opacity-100 group-hover:scale-105"
                )}
              >
                {member.image ? (
                    <Image src={member.image} alt={member.name} fill className="object-cover object-center" />
                ) : renderEmptyImage(member.name, 32, "text-2xl")}
              </button>
              <span className={cn(
                "mt-3 text-sm md:text-base font-semibold transition-colors duration-300",
                activeMember?.slug === member.slug ? "text-blue-accent" : "text-foreground/70 group-hover:text-foreground"
              )}>
                {member.name}
              </span>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="w-full max-w-3xl bg-muted/30 rounded-3xl p-8 md:p-16 text-center transition-all duration-500 min-h-[400px] flex flex-col justify-center items-center">
          {activeMember ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h2 className="text-4xl font-bold text-foreground mb-2">{activeMember.name}</h2>
              <p className="text-blue-accent font-medium mb-8 uppercase tracking-widest text-sm">{activeMember.role}</p>
              <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                {activeMember.extendedBio || activeMember.bio}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {activeMember.specialties.map(spec => (
                  <span key={spec} className="bg-white border border-foreground/10 px-4 py-2 rounded-full text-sm font-medium text-foreground/70 shadow-sm">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center opacity-40 animate-pulse">
                <MousePointer2 size={48} className="mb-4 text-foreground/50" />
                <h3 className="text-2xl font-light text-foreground">Selecteer een teamlid</h3>
                <p className="text-foreground/70 mt-2 font-light">Klik op één van de foto's hierboven om meer te lezen over de achtergrond en specialisaties.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
