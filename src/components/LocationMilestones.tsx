import React from "react";
import { ArrowRight } from "lucide-react";

export default function LocationMilestones() {
  return (
    <div className="w-full max-w-[370px] mt-4 sm:mt-5 bg-white rounded-3xl p-4 sm:p-5 border border-blue-accent/25 shadow-md shadow-blue-accent/5 hover:border-blue-accent/40 transition-all">
      <div className="flex items-center justify-between text-xs">
        {/* Links: Start */}
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-accent mb-1">
            We gaan starten!
          </span>
          <span className="text-base sm:text-lg font-black text-blue-accent tracking-tight leading-tight">
            1 NOV &apos;26
          </span>
          <div className="text-[11.5px] font-bold text-foreground mt-0.5">
            Rengersweg 2
          </div>
          <span className="text-[10px] text-foreground/55 font-medium">
            Oude locatie (Solis)
          </span>
        </div>

        {/* Midden: Tijdlijn Connector met subtiele blauwe node */}
        <div className="flex flex-col items-center px-1.5 shrink-0">
          <div className="relative flex items-center justify-center">
            <div className="w-8 sm:w-12 border-t-2 border-dashed border-blue-accent/30" />
            <div className="w-6 h-6 rounded-full bg-blue-accent text-white flex items-center justify-center shadow-xs absolute">
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
          <span className="text-[9px] font-bold text-blue-accent uppercase tracking-wider mt-3">
            Verhuizing
          </span>
        </div>

        {/* Rechts: Nieuwe locatie */}
        <div className="flex flex-col items-end text-right">
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-accent mb-1">
            Nieuwe locatie
          </span>
          <span className="text-base sm:text-lg font-black text-blue-accent tracking-tight leading-tight">
            1 JAN
          </span>
          <div className="text-[11.5px] font-bold text-foreground mt-0.5">
            Huenderstraat 3
          </div>
          <span className="text-[10px] text-foreground/55 font-medium">
            (Fysio Laren, Gld)
          </span>
        </div>
      </div>
    </div>
  );
}
