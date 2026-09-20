"use client";

import React from "react";
import { cn } from "@/lib/utils";

/* =========================================================================
   SUB-HEADER RIBBON (Onder de navigatiebalk)
   Kleur: Fysio Laren Kobaltblauw (#1D3FA3) met dynamische backdrop bij scrollen.
   ========================================================================= */
export function SubHeaderBar({ isScrolled = false }: { isScrolled?: boolean }) {
  return (
    <div
      className={cn(
        "w-full text-white border-b py-2 sm:py-2.5 md:py-3 px-4 md:px-6 xl:px-12 text-xs sm:text-[13px] md:text-sm relative z-[90] transition-all duration-500 ease-out",
        isScrolled
          ? "bg-[#1D3FA3]/92 backdrop-blur-md shadow-md border-white/25"
          : "bg-[#1D3FA3] shadow-xs border-white/20"
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1.5 sm:gap-2 md:gap-6 leading-normal">
        
        {/* Links: Afspraken & Telefoonnummers */}
        <div className="flex items-center flex-wrap justify-center md:justify-start gap-x-2.5 gap-y-1 text-center md:text-left">
          <span className="text-white/95">
            <span className="text-white/80 font-medium">Afspraak vóór 1 nov?</span>{" "}
            <a 
              href="tel:0570685899" 
              className="font-bold text-white hover:text-white/80 transition-colors underline decoration-white/60 underline-offset-2 hover:decoration-white text-xs sm:text-[13px] md:text-sm"
            >
              0570 - 68 58 99
            </a>
          </span>
          <span className="text-white/35 hidden sm:inline">·</span>
          <span className="text-white/95">
            <span className="text-white/80 font-medium">Afspraak vanaf 1 nov?</span>{" "}
            <a 
              href="tel:0573215058" 
              className="font-bold text-white hover:text-white/80 transition-colors underline decoration-white/60 underline-offset-2 hover:decoration-white text-xs sm:text-[13px] md:text-sm"
            >
              0573 - 21 50 58
            </a>
          </span>
        </div>

        {/* Rechts: Locaties & Verhuizing */}
        <div className="flex items-center flex-wrap justify-center md:justify-end gap-x-2 gap-y-1 text-center md:text-right text-white/95 text-xs sm:text-[13px] md:text-sm">
          <span className="font-bold tracking-wider uppercase text-[10px] sm:text-[11px] md:text-xs text-white/75 mr-0.5 hidden lg:inline">
            Locaties:
          </span>
          <span>
            Start 1 nov: <strong className="font-bold text-white">Rengersweg 2</strong>
          </span>
          <span className="text-white/35 hidden sm:inline">·</span>
          <span>
            Vanaf 1 jan: <strong className="font-bold text-white">Huenderstraat 3</strong>
          </span>
        </div>

      </div>
    </div>
  );
}

// Fallback export voor backwards compatibility
export function NewsBannerGlobalElements() {
  return null;
}
