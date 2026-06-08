"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function OnderhoudsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background">

      {/* Subtiele achtergrond decoratie */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #E8DFD1 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #1D3FA3 0%, transparent 70%)" }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl mx-auto"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* Logo */}
        <div className="mb-10 w-64 md:w-80 relative">
          <Image
            src="/Logo transparant op wit.svg"
            alt="Fysio Laren logo"
            width={260}
            height={120}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>



        {/* Tekst */}
        <h1
          className="text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          Website in aanbouw.
        </h1>
        <p className="text-foreground/60 text-lg md:text-xl leading-relaxed mb-10 max-w-md">
          Onze nieuwe website is bijna klaar. Binnenkort vindt u hier alles over onze nieuwe praktijk in Laren.
        </p>

        {/* E-mail knop */}
        <a
          href="mailto:info@fysio-laren.nl"
          className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all border border-foreground/15 hover:border-foreground/30 hover:bg-foreground/5 text-foreground"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          info@fysio-laren.nl
        </a>
      </div>
    </div>
  );
}
