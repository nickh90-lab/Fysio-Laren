"use client";

import React from "react";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-blue-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Logo */}
        <div className="mb-12">
          <Image
            src="/Logo%20transparant%20op%20wit.svg"
            alt="Fysio Laren"
            width={180}
            height={60}
            className="h-14 w-auto"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          Binnenkort online.
        </h1>

        {/* Message */}
        <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-4">
          Wij werken hard aan onze nieuwe website. Nog even geduld — binnenkort kunt u hier alles vinden over onze praktijk, behandelingen en ons team.
        </p>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 items-center">
          <a
            href="tel:+31573215058"
            className="px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-accent/90 transition-all flex items-center justify-center shadow-lg md:text-lg"
          >
            Bel ons: 0573-215058
          </a>
        </div>

        <p className="text-foreground/50 text-sm mt-6">
          Of mail naar{" "}
          <a
            href="mailto:info@fysio-laren.nl"
            className="underline hover:text-foreground/70 transition-colors"
          >
            info@fysio-laren.nl
          </a>
        </p>
      </div>
    </div>
  );
}
