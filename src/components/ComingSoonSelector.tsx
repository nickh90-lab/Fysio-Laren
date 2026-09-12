"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  Users, 
  Activity, 
  Sparkles, 
  SlidersHorizontal, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Dumbbell,
  HeartPulse
} from "lucide-react";
import { cn } from "@/lib/utils";

type VariantId = "variant-1" | "variant-2" | "variant-3" | "variant-4" | "variant-5";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function ComingSoonSelector() {
  const [selectedVariant, setSelectedVariant] = useState<VariantId>("variant-1");
  const [isSelectorMinimized, setIsSelectorMinimized] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target: 1 november 2026 om 08:00
    const targetDate = new Date("2026-11-01T08:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const variants = [
    { id: "variant-1", label: "1. Warm & Elegant", desc: "Rustig beige, zachte kaarten" },
    { id: "variant-2", label: "2. Modern Kobalt", desc: "Krachtig diepblauw contrast" },
    { id: "variant-3", label: "3. Team & Praktijk", desc: "Met foto van het team" },
    { id: "variant-4", label: "4. Save the Date", desc: "Stijlvolle kalenderfocus" },
    { id: "variant-5", label: "5. Actief & Vitaal", desc: "Met de 3 behandelpijlers" },
  ];

  return (
    <div className="relative min-h-screen">
      {/* ========================================================================= */}
      {/* VARIANT 1: WARM & ELEGANT (Rustig, vriendelijk en minimalistisch)        */}
      {/* ========================================================================= */}
      {selectedVariant === "variant-1" && (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
          {/* Sfeervolle achtergrond blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[45vw] h-[45vw] bg-primary/35 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[35vw] h-[35vw] bg-blue-accent/8 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto w-full">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/Logo%20transparant%20op%20wit.svg"
                alt="Fysio Laren"
                width={190}
                height={65}
                className="h-14 sm:h-16 w-auto"
                priority
              />
            </div>

            {/* Datum Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-accent/10 border border-blue-accent/20 text-blue-accent font-semibold text-sm mb-6 shadow-xs">
              <Calendar size={15} />
              <span>Vanaf 1 november 2026 geopend</span>
            </div>

            {/* Hoofdtitel */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-5 tracking-tight leading-[1.1]">
              Samen bouwen aan<br />uw gezondheid.
            </h1>

            <p className="text-foreground/75 text-lg sm:text-xl font-light leading-relaxed max-w-xl mx-auto mb-10">
              Op <strong className="font-semibold text-foreground">1 november 2026</strong> openen wij met trots onze nieuwe praktijk in Laren. Wij leggen momenteel de laatste hand aan onze faciliteiten en website.
            </p>

            {/* Countdown Cards */}
            <div className="grid grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-lg mb-10">
              {[
                { value: timeLeft.days, label: "Dagen" },
                { value: timeLeft.hours, label: "Uur" },
                { value: timeLeft.minutes, label: "Minuten" },
                { value: timeLeft.seconds, label: "Seconden" },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/90 backdrop-blur-md border border-foreground/10 rounded-2xl p-3 sm:p-4 shadow-sm flex flex-col items-center justify-center"
                >
                  <span className="text-2xl sm:text-4xl font-extrabold text-blue-accent tracking-tight">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-foreground/60 uppercase tracking-wider mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact & Locatie */}
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full sm:w-auto mb-6">
              <a
                href="tel:+31573215058"
                className="w-full sm:w-auto px-7 py-3.5 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-accent/90 transition-all flex items-center justify-center gap-2 shadow-md hover:scale-[1.02]"
              >
                <Phone size={18} />
                <span>0573 - 21 50 58</span>
              </a>
              <a
                href="mailto:info@fysio-laren.nl"
                className="w-full sm:w-auto px-7 py-3.5 bg-white text-foreground font-bold rounded-full border border-foreground/15 hover:bg-foreground/5 transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <Mail size={18} />
                <span>info@fysio-laren.nl</span>
              </a>
            </div>

            <div className="inline-flex items-center gap-2 text-foreground/60 text-xs sm:text-sm">
              <MapPin size={14} className="text-blue-accent" />
              <span>Huenderstraat 3, 7245 BG Laren (Gld)</span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VARIANT 2: MODERN KOBALT (Strak, diepblauw en medisch premium)           */}
      {/* ========================================================================= */}
      {selectedVariant === "variant-2" && (
        <div className="min-h-screen bg-gradient-to-br from-[#08153A] via-[#102462] to-[#1D3FA3] text-white flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
          {/* Gradient accent highlights */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto w-full">
            {/* Logo wit */}
            <div className="mb-8">
              <Image
                src="/Logo%20transparant%20op%20blauw.svg"
                alt="Fysio Laren"
                width={190}
                height={65}
                className="h-14 sm:h-16 w-auto drop-shadow-md"
                priority
              />
            </div>

            {/* Glowing pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Officiële opening • 1 november 2026</span>
            </div>

            {/* Titel */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-5 tracking-tight leading-[1.1]">
              Een nieuwe standaard in zorg en herstel.
            </h1>

            <p className="text-white/80 text-lg sm:text-xl font-light leading-relaxed max-w-xl mx-auto mb-10">
              Vanaf 1 november verwelkomen wij u in onze moderne praktijk. Persoonlijke fysiotherapie, manuele therapie en FysioFit onder één dak.
            </p>

            {/* Countdown met glas-effect */}
            <div className="grid grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-lg mb-10">
              {[
                { value: timeLeft.days, label: "Dagen" },
                { value: timeLeft.hours, label: "Uur" },
                { value: timeLeft.minutes, label: "Minuten" },
                { value: timeLeft.seconds, label: "Seconden" },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:p-5 shadow-2xl flex flex-col items-center justify-center"
                >
                  <span className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-white/70 uppercase tracking-widest mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Knoppen */}
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full sm:w-auto mb-6">
              <a
                href="tel:+31573215058"
                className="w-full sm:w-auto px-7 py-3.5 bg-white text-[#102462] font-extrabold rounded-full hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02]"
              >
                <Phone size={18} />
                <span>Bel: 0573 - 21 50 58</span>
              </a>
              <a
                href="mailto:info@fysio-laren.nl"
                className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white font-bold rounded-full border border-white/25 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Mail size={18} />
                <span>info@fysio-laren.nl</span>
              </a>
            </div>

            <div className="inline-flex items-center gap-2 text-white/60 text-xs sm:text-sm">
              <MapPin size={14} className="text-white/80" />
              <span>Huenderstraat 3, 7245 BG Laren (Gld)</span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VARIANT 3: PERSOONLIJK & TEAM PREVIEW (Warm, herkenbaar met teamfoto)    */}
      {/* ========================================================================= */}
      {selectedVariant === "variant-3" && (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12 sm:py-16 relative">
          <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Linkerzijde: Tekst & Countdown */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="mb-6">
                <Image
                  src="/Logo%20transparant%20op%20wit.svg"
                  alt="Fysio Laren"
                  width={180}
                  height={60}
                  className="h-12 sm:h-14 w-auto mx-auto lg:mx-0"
                  priority
                />
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-accent/10 border border-blue-accent/20 text-blue-accent font-semibold text-xs sm:text-sm mb-4">
                <Calendar size={14} />
                <span>Opening: 1 november 2026</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight leading-tight">
                Wij staan vanaf 1 november voor u klaar.
              </h1>

              <p className="text-foreground/75 text-base sm:text-lg font-light leading-relaxed mb-6">
                Met een hecht en gespecialiseerd team therapeuten openen wij op 1 november de deuren van Fysio Laren. Van gerichte revalidatie tot actieve begeleiding.
              </p>

              {/* Countdown compact */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-md mb-8">
                {[
                  { value: timeLeft.days, label: "Dagen" },
                  { value: timeLeft.hours, label: "Uur" },
                  { value: timeLeft.minutes, label: "Min." },
                  { value: timeLeft.seconds, label: "Sec." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-foreground/10 p-2.5 sm:p-3 shadow-xs text-center">
                    <div className="text-xl sm:text-2xl font-black text-blue-accent">
                      {String(item.value).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] font-medium text-foreground/50 uppercase">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact info */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-4">
                <a
                  href="tel:+31573215058"
                  className="px-6 py-3 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-accent/90 transition-all flex items-center justify-center gap-2 shadow-sm text-sm"
                >
                  <Phone size={16} />
                  <span>0573 - 21 50 58</span>
                </a>
                <a
                  href="mailto:info@fysio-laren.nl"
                  className="px-6 py-3 bg-white text-foreground font-bold rounded-full border border-foreground/15 hover:bg-foreground/5 transition-all flex items-center justify-center gap-2 shadow-xs text-sm"
                >
                  <Mail size={16} />
                  <span>info@fysio-laren.nl</span>
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-foreground/50">
                <MapPin size={13} className="text-blue-accent" />
                <span>Huenderstraat 3, Laren (Gld)</span>
              </div>
            </div>

            {/* Rechterzijde: Team preview card */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-sm rounded-[2rem] overflow-hidden bg-white p-3 shadow-xl border border-foreground/10">
                <div className="relative aspect-[3545/5206] w-full rounded-[1.5rem] overflow-hidden bg-muted">
                  <Image
                    src="/images/Teamfoto_v2.jpg"
                    alt="Team Fysio Laren"
                    fill
                    sizes="(max-width: 768px) 320px, 380px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-5 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-200 block mb-1">
                      Uw team in Laren
                    </span>
                    <p className="text-sm font-medium text-white/90">
                      Marloes • Jacob • Ingrid • Karin • Nick
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VARIANT 4: SAVE THE DATE (Stijlvol, kalendericoon & direct in agenda)     */}
      {/* ========================================================================= */}
      {selectedVariant === "variant-4" && (
        <div className="min-h-screen bg-[#F8F6F1] flex flex-col items-center justify-center px-6 py-16 relative">
          <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto w-full">
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/Logo%20transparant%20op%20wit.svg"
                alt="Fysio Laren"
                width={170}
                height={55}
                className="h-12 w-auto"
                priority
              />
            </div>

            {/* Save The Date Badge */}
            <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-accent mb-4">
              Save the date
            </span>

            {/* Het Kalender Blad */}
            <div className="w-48 sm:w-56 bg-white rounded-3xl shadow-xl border border-foreground/10 overflow-hidden mb-8 transform hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-accent text-white font-black text-sm uppercase tracking-widest py-2.5">
                November 2026
              </div>
              <div className="p-5 flex flex-col items-center justify-center bg-gradient-to-b from-white to-stone-50">
                <span className="text-6xl sm:text-7xl font-black text-foreground tracking-tighter">
                  1
                </span>
                <span className="text-xs font-bold text-foreground/50 uppercase tracking-widest mt-1">
                  Zondag • Opening
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
              Nieuwe praktijk, vertrouwde zorg.
            </h1>

            <p className="text-foreground/70 text-base sm:text-lg font-light leading-relaxed max-w-md mb-8">
              Zet <span className="font-semibold text-foreground">1 november</span> in uw agenda. Fysio Laren start met moderne behandelruimtes en een vernieuwde trainingszaal.
            </p>

            {/* Countdown als een strakke horizontale ticker */}
            <div className="bg-white/80 backdrop-blur-sm border border-foreground/10 rounded-full px-5 sm:px-8 py-3 shadow-sm inline-flex items-center gap-3 sm:gap-6 mb-8">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-blue-accent text-lg sm:text-xl">{timeLeft.days}</span>
                <span className="text-xs text-foreground/60 font-medium">dg</span>
              </div>
              <span className="text-foreground/20">•</span>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-blue-accent text-lg sm:text-xl">{timeLeft.hours}</span>
                <span className="text-xs text-foreground/60 font-medium">uur</span>
              </div>
              <span className="text-foreground/20">•</span>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-blue-accent text-lg sm:text-xl">{timeLeft.minutes}</span>
                <span className="text-xs text-foreground/60 font-medium">min</span>
              </div>
              <span className="text-foreground/20">•</span>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-blue-accent text-lg sm:text-xl">{timeLeft.seconds}</span>
                <span className="text-xs text-foreground/60 font-medium">sec</span>
              </div>
            </div>

            {/* Contact opties */}
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <a
                href="tel:+31573215058"
                className="w-full sm:w-auto px-6 py-3.5 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-accent/90 transition-all flex items-center justify-center gap-2 shadow-sm text-sm"
              >
                <Phone size={16} />
                <span>0573 - 21 50 58</span>
              </a>
              <a
                href="mailto:info@fysio-laren.nl"
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-foreground font-bold rounded-full border border-foreground/15 hover:bg-foreground/5 transition-all flex items-center justify-center gap-2 shadow-xs text-sm"
              >
                <Mail size={16} />
                <span>info@fysio-laren.nl</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VARIANT 5: ACTIEF & VITAAL (Met 3 preview pijlers van de praktijk)         */}
      {/* ========================================================================= */}
      {selectedVariant === "variant-5" && (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-14 relative">
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/Logo%20transparant%20op%20wit.svg"
                alt="Fysio Laren"
                width={170}
                height={55}
                className="h-12 w-auto"
                priority
              />
            </div>

            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-4">
              <Sparkles size={14} />
              <span>Het aftellen is begonnen • 1 November 2026</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-foreground mb-4 tracking-tight">
              Binnenkort start uw herstel en vitaliteit.
            </h1>

            <p className="text-foreground/75 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto mb-8">
              Fysio Laren brengt hoogwaardige zorg en actieve preventie samen. Ontdek vanaf 1 november ons complete behandelaanbod:
            </p>

            {/* Countdown Box */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-md mb-10">
              {[
                { value: timeLeft.days, label: "Dagen" },
                { value: timeLeft.hours, label: "Uur" },
                { value: timeLeft.minutes, label: "Min." },
                { value: timeLeft.seconds, label: "Sec." },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-foreground/10 p-3 shadow-xs">
                  <span className="text-2xl sm:text-3xl font-black text-blue-accent">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="block text-[10px] font-semibold text-foreground/50 uppercase mt-0.5">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Drie Pijlers Preview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-10 text-left">
              <div className="bg-white rounded-2xl p-5 border border-foreground/10 shadow-xs flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-blue-accent/10 flex items-center justify-center text-blue-accent mb-3">
                  <HeartPulse size={20} />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">Fysiotherapie</h3>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  Gerichte behandelingen bij blessures, chronische klachten en revalidatie na operaties.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-foreground/10 shadow-xs flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-primary/40 flex items-center justify-center text-foreground mb-3">
                  <Dumbbell size={20} />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">FysioFit</h3>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  Verantwoord en veilig bewegen in kleine groepen onder constante fysiotherapeutische begeleiding.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-foreground/10 shadow-xs flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-3">
                  <Users size={20} />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">Gespecialiseerd</h3>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  ParkinsonNet, COPD-trainingen, ouderenzorg en manuele therapie door ervaren specialisten.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <a
                href="tel:+31573215058"
                className="w-full sm:w-auto px-7 py-3 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-accent/90 transition-all flex items-center justify-center gap-2 shadow-sm text-sm"
              >
                <Phone size={16} />
                <span>Neem alvast contact op: 0573 - 21 50 58</span>
              </a>
              <a
                href="mailto:info@fysio-laren.nl"
                className="w-full sm:w-auto px-7 py-3 bg-white text-foreground font-bold rounded-full border border-foreground/15 hover:bg-foreground/5 transition-all flex items-center justify-center gap-2 shadow-xs text-sm"
              >
                <Mail size={16} />
                <span>info@fysio-laren.nl</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* FLOATING DESIGN SELECTOR TOOLBAR (Vast onderin beeld om te testen)       */}
      {/* ========================================================================= */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-[200] transition-all duration-300">
        {!isSelectorMinimized ? (
          <div className="bg-slate-950/95 text-white backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl md:rounded-full p-2.5 sm:px-4 sm:py-2 flex flex-col md:flex-row items-center gap-2 md:gap-3 max-w-[96vw]">
            <div className="flex items-center gap-2 px-2 text-xs font-semibold text-white/70 border-b md:border-b-0 md:border-r border-white/15 pb-1 md:pb-0 md:pr-3 w-full md:w-auto justify-between md:justify-start">
              <span className="flex items-center gap-1.5 text-amber-300">
                <SlidersHorizontal size={14} />
                <span>Kies Coming Soon Design:</span>
              </span>
              <button 
                onClick={() => setIsSelectorMinimized(true)}
                className="text-white/50 hover:text-white transition-colors p-1 md:hidden"
                title="Minimaliseer balk"
              >
                <ChevronDown size={16} />
              </button>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-1.5 sm:gap-2 justify-center items-center">
              {variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVariant(v.id as VariantId)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap",
                    selectedVariant === v.id
                      ? "bg-blue-accent text-white font-bold shadow-md shadow-blue-500/30 ring-2 ring-white/30"
                      : "bg-white/10 hover:bg-white/20 text-white/80 hover:text-white"
                  )}
                >
                  {v.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsSelectorMinimized(true)}
              className="hidden md:flex items-center justify-center p-1.5 rounded-full hover:bg-white/15 text-white/60 hover:text-white transition-colors ml-1 cursor-pointer"
              title="Minimaliseer balk"
            >
              <ChevronDown size={16} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsSelectorMinimized(false)}
            className="bg-slate-950/90 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-2xl border border-white/20 flex items-center gap-2 backdrop-blur-lg hover:scale-105 transition-all cursor-pointer"
          >
            <SlidersHorizontal size={14} className="text-amber-300" />
            <span>Kies design (5 opties)</span>
            <ChevronUp size={14} className="text-white/60" />
          </button>
        )}
      </div>
    </div>
  );
}
