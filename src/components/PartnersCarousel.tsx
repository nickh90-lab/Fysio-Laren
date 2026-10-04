"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { partners } from "@/data/partners";

export default function PartnersCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);

  // Position & animation state refs for 60/120fps direct DOM manipulation
  const xPos = useRef(0);
  const singleSetWidth = useRef(0);
  const isDragging = useRef(false);
  const lastTime = useRef<number | null>(null);

  // Drag coordinates
  const dragLastX = useRef(0);

  // React state only for cursor styling
  const [isGrabbing, setIsGrabbing] = useState(false);

  // Update width of one full set of items
  const updateWidth = useCallback(() => {
    if (firstSetRef.current) {
      const width = firstSetRef.current.getBoundingClientRect().width;
      if (width > 0) {
        singleSetWidth.current = width;
      }
    }
  }, []);

  useEffect(() => {
    updateWidth();

    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });

    if (firstSetRef.current) {
      resizeObserver.observe(firstSetRef.current);
    }
    window.addEventListener("resize", updateWidth);

    // Speed: one full loop in 80 seconds (matches original CSS marquee tempo)
    let animationFrameId: number;

    const animate = (time: number) => {
      if (lastTime.current === null) {
        lastTime.current = time;
      }
      const dt = Math.min((time - lastTime.current) / 1000, 0.1); // cap dt at 100ms
      lastTime.current = time;

      const width = singleSetWidth.current;

      // Auto-scroll when not dragging
      if (!isDragging.current && width > 0) {
        const speed = width / 80; // pixels per second
        xPos.current -= speed * dt;

        // Wrap around seamlessly
        while (xPos.current <= -width) {
          xPos.current += width;
        }
        while (xPos.current > 0) {
          xPos.current -= width;
        }

        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${xPos.current}px, 0, 0)`;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, [updateWidth]);

  // Apply position to DOM and handle infinite wrap
  const applyPosition = (newX: number) => {
    const width = singleSetWidth.current;
    if (width > 0) {
      while (newX <= -width) {
        newX += width;
      }
      while (newX > 0) {
        newX -= width;
      }
    }
    xPos.current = newX;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${newX}px, 0, 0)`;
    }
  };

  // --- Unified Pointer Handlers (Mouse & Touch on Mobile) ---
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only primary contact (left mouse button or first touch finger)
    if (!e.isPrimary) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;

    isDragging.current = true;
    dragLastX.current = e.clientX;
    lastTime.current = null;
    setIsGrabbing(true);

    // On mouse, capture pointer so fast dragging outside the box still tracks
    if (e.pointerType === "mouse") {
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {}
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - dragLastX.current;
    dragLastX.current = e.clientX;
    applyPosition(xPos.current + deltaX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    lastTime.current = null;
    setIsGrabbing(false);

    if (e.pointerType === "mouse") {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
    }
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    lastTime.current = null;
    setIsGrabbing(false);

    if (e.pointerType === "mouse") {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
    }
  };

  return (
    <section className="py-12 md:py-16 bg-muted flex flex-col items-center overflow-hidden select-none">
      <div className="w-full max-w-[100vw]">
        <div className="text-center mb-10 md:mb-12 px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            Fysio Laren werkt samen met
          </h2>
        </div>

        <div
          ref={containerRef}
          className={cn(
            "relative flex w-full flex-nowrap items-center overflow-hidden touch-pan-y transition-cursor",
            isGrabbing ? "cursor-grabbing" : "cursor-grab",
            "[mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          )}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          <div
            ref={trackRef}
            className="flex w-max will-change-transform"
            style={{ transform: "translate3d(0px, 0, 0)" }}
          >
            {/* 4 sets of identical partner items for ultra-smooth, infinite seamless drag & scroll */}
            {[0, 1, 2, 3].map((setIndex) => (
              <div
                key={setIndex}
                ref={setIndex === 0 ? firstSetRef : undefined}
                className="flex gap-12 md:gap-20 items-center justify-around shrink-0 pr-12 md:pr-20"
              >
                {partners.map((partner) => (
                  <div
                    key={`${setIndex}-${partner.slug}`}
                    className="group flex flex-col items-center gap-3 transition-all duration-300 w-24 md:w-32 shrink-0 hover:-translate-y-1"
                  >
                    <div className="h-20 md:h-24 w-36 md:w-48 rounded-2xl flex items-center justify-center relative overflow-hidden bg-white shadow-sm border border-foreground/5 group-hover:shadow-md transition-all p-2 md:p-3">
                      <Image
                        src={`/partners/${partner.slug}.${partner.ext || "png"}`}
                        alt={partner.name}
                        fill
                        draggable={false}
                        className={cn(
                          "object-contain p-2 md:p-3 pointer-events-none select-none",
                          partner.slug === "het-doktershuus" && "invert opacity-80"
                        )}
                        sizes="(max-width: 768px) 144px, 192px"
                      />
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-foreground/60 group-hover:text-blue-accent transition-colors text-center leading-tight">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
