"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function OnderhoudsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#0B1F3A]">

      {/* Achtergrond decoratie */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #2563eb 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
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
        <div className="mb-10 w-48 md:w-64 relative">
          <Image
            src="/Logo transparant op blauw.svg"
            alt="Fysio Laren logo"
            width={260}
            height={120}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Dunne lijn */}
        <div className="w-16 h-[2px] bg-blue-400/50 rounded-full mb-10" />

        {/* Tekst */}
        <h1
          className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          We zijn er bijna
        </h1>
        <p className="text-blue-200/80 text-lg md:text-xl leading-relaxed mb-10 max-w-md">
          Onze nieuwe website is bijna klaar. Binnenkort vindt u hier alles over onze fysiotherapiepraktijk in Laren.
        </p>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="tel:035-5385700"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-all border border-white/20 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
            </svg>
            035-5385700
          </a>
          <a
            href="mailto:info@fysio-laren.nl"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-all border border-white/20 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@fysio-laren.nl
          </a>
        </div>

        {/* Adres */}
        <p className="mt-8 text-blue-300/60 text-sm">
          Naarderstraat 67 · 1251 BG Laren
        </p>
      </div>
    </div>
  );
}
