"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type LogoOption = "circle" | "app-icon" | "glass" | "floating-card" | "glow";

export default function LogoDisplaySelector() {
  const [activeOption, setActiveOption] = useState<LogoOption>("circle");

  const renderLogoOption = () => {
    switch (activeOption) {
      case "circle":
        return (
          <motion.div 
            key="circle"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-10 bg-white rounded-full shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] flex items-center justify-center p-6 border-4 border-white/80"
          >
            <Image src="/Logo%20transparant%20op%20wit.svg" alt="Fysio Laren Logo Icon" fill className="object-contain object-center p-5" priority unoptimized />
          </motion.div>
        );
      case "app-icon":
        return (
          <motion.div 
            key="app-icon"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-4 z-10 bg-white rounded-[2rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] flex items-center justify-center border border-slate-100"
          >
            <Image src="/Logo%20transparant%20op%20wit.svg" alt="Fysio Laren Logo Icon" fill className="object-contain object-center p-6" priority unoptimized />
          </motion.div>
        );
      case "glass":
        return (
          <motion.div 
            key="glass"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-10 bg-white/60 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center border border-white/80 p-6"
          >
            <Image src="/Logo%20transparant%20op%20wit.svg" alt="Fysio Laren Logo Icon" fill className="object-contain object-center p-5 drop-shadow-sm" priority unoptimized />
          </motion.div>
        );
      case "floating-card":
        return (
          <motion.div 
            key="floating-card"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute -right-8 sm:-right-16 top-1/2 -translate-y-1/2 w-[140%] h-[70%] z-10 bg-white rounded-2xl shadow-2xl flex items-center justify-center border-b-4 border-blue-accent/30"
          >
            <Image src="/Logo%20transparant%20op%20wit.svg" alt="Fysio Laren Logo Icon" fill className="object-contain object-center p-6" priority unoptimized />
          </motion.div>
        );
      case "glow":
        return (
          <motion.div 
            key="glow"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-10 flex items-center justify-center"
          >
            <div className="absolute inset-[-20%] bg-white rounded-full blur-[40px] opacity-100 z-0" />
            <div className="absolute inset-[10%] bg-white rounded-full blur-[15px] opacity-100 z-0" />
            <Image src="/Logo%20transparant%20op%20wit.svg" alt="Fysio Laren Logo Icon" fill className="object-contain object-center p-2 z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]" priority unoptimized />
          </motion.div>
        );
    }
  };

  return (
    <>
      {/* Logo Container in the Hero Section */}
      <div className="absolute -left-2 sm:-left-4 md:-left-12 -bottom-4 sm:-bottom-8 w-[50%] sm:w-[60%] aspect-square z-10 pointer-events-none">
        <AnimatePresence mode="wait">
          {renderLogoOption()}
        </AnimatePresence>
      </div>

      {/* Floating Selector Panel for the User */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-white/95 backdrop-blur-lg shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-slate-200 rounded-full p-2 flex items-center flex-wrap justify-center gap-1 max-w-[95vw]">
        <div className="px-4 py-2 bg-slate-100 rounded-full text-xs font-bold text-slate-500 uppercase tracking-widest hidden md:block">
          Logo Weergave:
        </div>
        
        {[
          { id: "circle", label: "Cirkel (Klassiek)" },
          { id: "app-icon", label: "App Icon" },
          { id: "glass", label: "Melkglas" },
          { id: "floating-card", label: "Visitekaart" },
          { id: "glow", label: "Zachte Glow" },
        ].map((opt) => (
          <button
            key={opt.id}
            onClick={() => setActiveOption(opt.id as LogoOption)}
            className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-full transition-all whitespace-nowrap ${
              activeOption === opt.id
                ? "bg-blue-accent text-white shadow-lg scale-105"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </>
  );
}
