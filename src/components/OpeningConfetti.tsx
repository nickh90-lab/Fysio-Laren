"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { IS_OPENING_HERO } from "./OpeningHeroSelector";

interface Particle {
  x: number;
  y: number;
  w: number;
  h: number;
  vx: number;
  vy: number;
  angle: number;
  angularVelocity: number;
  tilt: number;
  tiltVelocity: number;
  wobble: number;
  wobbleSpeed: number;
  color: string;
  shape: "rect" | "circle";
  opacity: number;
  delay?: number;
}

// Chique Fysio Laren kleurenpalet: kobaltblauw, royal blue, hemelsblauw, champagne-goud en wit
const PALETTE = [
  "#1D3FA3", // Fysio Laren Kobaltblauw
  "#2563EB", // Royal blue
  "#38BDF8", // Fris lichtblauw / hemelsblauw
  "#60A5FA", // Zacht korenbloemblauw
  "#F59E0B", // Feestelijk warm champagne / goud
  "#FCD34D", // Licht goud
  "#FFFFFF", // Helder wit
];

const STORAGE_KEY = "fysio_laren_opening_confetti_seen";

export default function OpeningConfetti() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameIdRef = useRef<number | null>(null);

  // Confetti kanon deeltjes: schieten dynamisch omhoog en dwarrelen extreem langzaam naar beneden
  const createConfettiBurst = useCallback(() => {
    if (typeof window === "undefined") return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const newParticles: Particle[] = [];
    const isMobile = width < 768;

    const countPerSide = isMobile ? 30 : 50;
    const countCenter = isMobile ? 45 : 75;
    const countTopShower = isMobile ? 20 : 40;

    // 1. Linker kanon (schiet krachtig omhoog richting centrum)
    for (let i = 0; i < countPerSide; i++) {
      const angle = -Math.PI / 2 + (Math.random() * 0.6 - 0.05); // gericht naar het midden
      const speed = Math.random() * 8 + 16;
      newParticles.push({
        x: Math.random() * 60 + 20,
        y: height - Math.random() * 50,
        w: Math.random() * 6 + 7,
        h: Math.random() * 5 + 4,
        vx: Math.cos(angle) * speed + 3,
        vy: Math.sin(angle) * speed,
        angle: Math.random() * Math.PI * 2,
        angularVelocity: (Math.random() - 0.5) * 0.12,
        tilt: Math.random() * Math.PI,
        tiltVelocity: (Math.random() - 0.5) * 0.08,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.04 + 0.03,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        shape: Math.random() > 0.25 ? "rect" : "circle",
        opacity: 1,
        delay: 0,
      });
    }

    // 2. Rechter kanon (schiet krachtig omhoog richting centrum)
    for (let i = 0; i < countPerSide; i++) {
      const angle = -Math.PI / 2 - (Math.random() * 0.6 - 0.05); // gericht naar het midden
      const speed = Math.random() * 8 + 16;
      newParticles.push({
        x: width - (Math.random() * 60 + 20),
        y: height - Math.random() * 50,
        w: Math.random() * 6 + 7,
        h: Math.random() * 5 + 4,
        vx: Math.cos(angle) * speed - 3,
        vy: Math.sin(angle) * speed,
        angle: Math.random() * Math.PI * 2,
        angularVelocity: (Math.random() - 0.5) * 0.12,
        tilt: Math.random() * Math.PI,
        tiltVelocity: (Math.random() - 0.5) * 0.08,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.04 + 0.03,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        shape: Math.random() > 0.25 ? "rect" : "circle",
        opacity: 1,
        delay: 0,
      });
    }

    // 3. CENTRUM KANON (Schiet in het hart van het scherm in een brede waaier omhoog)
    const centerX = width * 0.5;
    for (let i = 0; i < countCenter; i++) {
      const spreadX = (Math.random() - 0.5) * (isMobile ? 100 : 220);
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.75; // waaier rond -90°
      const speed = Math.random() * 10 + 17;
      newParticles.push({
        x: centerX + spreadX,
        y: height - Math.random() * 40,
        w: Math.random() * 7 + 7,
        h: Math.random() * 5 + 4,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        angle: Math.random() * Math.PI * 2,
        angularVelocity: (Math.random() - 0.5) * 0.14,
        tilt: Math.random() * Math.PI,
        tiltVelocity: (Math.random() - 0.5) * 0.09,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.04 + 0.03,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        shape: Math.random() > 0.2 ? "rect" : "circle",
        opacity: 1,
        delay: Math.random() * 150,
      });
    }

    // 4. Boven-centrum dwarreling (begint na 500ms rustig te vallen)
    for (let i = 0; i < countTopShower; i++) {
      newParticles.push({
        x: centerX + (Math.random() - 0.5) * (width * 0.65),
        y: -20 - Math.random() * 40,
        w: Math.random() * 6 + 6,
        h: Math.random() * 4 + 4,
        vx: (Math.random() - 0.5) * 1.5,
        vy: 0.8 + Math.random() * 0.5,
        angle: Math.random() * Math.PI * 2,
        angularVelocity: (Math.random() - 0.5) * 0.08,
        tilt: Math.random() * Math.PI,
        tiltVelocity: (Math.random() - 0.5) * 0.06,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.03 + 0.02,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        shape: Math.random() > 0.3 ? "rect" : "circle",
        opacity: 1,
        delay: 500 + Math.random() * 600,
      });
    }

    particlesRef.current = newParticles;
  }, []);

  // Animatie loop: dynamisch omhoog schieten, daarna super langzaam & sierlijk neerdwarrelen
  const startAnimation = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Pas canvas resolutie aan
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let startTime: number | null = null;
    const totalDuration = 8500; // 8.5 seconden rustige, sierlijke dwarreling

    const render = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const remaining: Particle[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Vertraging voor de tweede golf
        if (p.delay && elapsed < p.delay) {
          remaining.push(p);
          continue;
        }

        // FASE 1: Omhoog schieten (kanon ontlading)
        if (p.vy < 0) {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.55; // Snelle afremming aan de top
          p.vx *= 0.96; // Luchtweerstand
        } else {
          // FASE 2: Extreem langzaam en sierlijk neerdwarrelen (zoals echt zijdepapier)
          const maxFallSpeed = p.shape === "circle" ? 1.4 : 1.05; // Maximaal ~1 px per frame!
          if (p.vy > maxFallSpeed) {
            p.vy = p.vy * 0.88 + maxFallSpeed * 0.12; // Zachte remming
          } else {
            p.vy = Math.min(maxFallSpeed, p.vy + 0.04); // Heel subtiele zwaartekracht
          }

          // Organische slingerende dwarrelbeweging (pendulum flutter)
          p.wobble += p.wobbleSpeed;
          p.x += Math.sin(p.wobble) * 1.6 + p.vx;
          p.y += p.vy;
          p.vx *= 0.98;
        }

        // 3D Ribbon tuimeling en rotatie
        p.angle += p.angularVelocity;
        p.tilt += p.tiltVelocity;

        // Heel geleidelijke fade-out pas in de laatste 1,7 seconden
        if (elapsed > 6800) {
          p.opacity = Math.max(0, p.opacity - 0.012);
        }

        if (p.opacity > 0 && p.y < canvas.height + 40) {
          remaining.push(p);

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);
          ctx.scale(Math.cos(p.tilt), 1); // 3D ribbon effect
          ctx.globalAlpha = p.opacity;
          ctx.fillStyle = p.color;

          if (p.shape === "circle") {
            ctx.beginPath();
            ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          }

          ctx.restore();
        }
      }

      particlesRef.current = remaining;

      if (remaining.length > 0 && elapsed < totalDuration) {
        animFrameIdRef.current = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        animFrameIdRef.current = null;
      }
    };

    if (animFrameIdRef.current) {
      cancelAnimationFrame(animFrameIdRef.current);
    }
    animFrameIdRef.current = requestAnimationFrame(render);
  }, []);

  // Handmatige of automatische trigger
  const fireConfetti = useCallback(() => {
    createConfettiBurst();
    startAnimation();
  }, [createConfettiBurst, startAnimation]);

  // Automatisch afspelen bij eerste bezoek
  useEffect(() => {
    if (!IS_OPENING_HERO) return;

    try {
      const hasSeen = localStorage.getItem(STORAGE_KEY);
      if (!hasSeen) {
        // Wacht 400ms zodat de homepage eerst rustig verschijnt
        const timer = setTimeout(() => {
          fireConfetti();
          localStorage.setItem(STORAGE_KEY, "true");
        }, 400);

        return () => clearTimeout(timer);
      }
    } catch {
      // Veilige fallback als localStorage geblokkeerd is
    }
  }, [fireConfetti]);

  // Schoon op bij unmount
  useEffect(() => {
    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  // Als we terug zijn op de definitieve standaard homepage, tonen we helemaal niets
  if (!IS_OPENING_HERO) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] w-full h-full"
    />
  );
}
