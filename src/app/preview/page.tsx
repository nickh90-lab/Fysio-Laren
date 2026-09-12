"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Eye, Loader2, X } from "lucide-react";

export default function PreviewPage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlCode = params.get("code") || params.get("preview");
      if (urlCode) {
        setCode(urlCode);
        setIsLoading(true);
        fetch("/api/preview", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: urlCode.trim() }),
        })
          .then((res) => {
            if (res.ok) {
              window.location.href = "/";
            } else {
              setError("Ongeldige code in de link. Vul hieronder de juiste code in.");
              setIsLoading(false);
            }
          })
          .catch(() => {
            setError("Er is iets misgegaan. Probeer het opnieuw.");
            setIsLoading(false);
          });
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code.trim() }),
      });

      if (res.ok) {
        // Cookie is set by the API, redirect to homepage
        window.location.href = "/";
      } else {
        setError("Ongeldige code. Probeer het opnieuw.");
      }
    } catch {
      setError("Er is iets misgegaan. Probeer het opnieuw.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[35vw] h-[35vw] bg-primary/20 rounded-full blur-3xl -translate-y-1/3 -translate-x-1/4" />
        <div className="absolute bottom-0 right-0 w-[25vw] h-[25vw] bg-blue-accent/5 rounded-full blur-3xl translate-y-1/4 translate-x-1/4" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full">
        {/* Logo */}
        <div className="mb-10">
          <Image
            src="/Logo%20transparant%20op%20wit.svg"
            alt="Fysio Laren"
            width={150}
            height={50}
            className="h-12 w-auto"
            priority
          />
        </div>

        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-blue-accent/10 flex items-center justify-center mb-6">
          <Eye size={28} className="text-blue-accent" />
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Website preview
        </h1>
        <p className="text-foreground/60 text-base md:text-lg mb-8 leading-relaxed">
          Voer de teamcode in om de website te bekijken.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="relative">
            <input
              type="text"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setError("");
              }}
              placeholder="Voer code in..."
              autoFocus
              className="w-full px-6 py-4 bg-white rounded-2xl border border-foreground/10 text-foreground text-center text-lg font-medium tracking-widest placeholder:tracking-normal placeholder:font-normal placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-blue-accent/30 focus:border-blue-accent/40 transition-all shadow-sm"
            />
            {code && (
              <button
                type="button"
                onClick={() => setCode("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/30 hover:text-foreground/60 transition-colors"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {error && (
            <p className="text-red-500 text-sm font-medium animate-pulse">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={!code.trim() || isLoading}
            className="w-full px-8 py-4 bg-blue-accent text-white font-bold rounded-full hover:bg-blue-accent/90 transition-all flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed md:text-lg"
          >
            {isLoading ? (
              <Loader2 size={22} className="animate-spin" />
            ) : (
              "Bekijk website"
            )}
          </button>
        </form>

        {/* Back link */}
        <a
          href="/coming-soon"
          className="mt-8 text-foreground/40 hover:text-foreground/60 transition-colors text-sm"
        >
          ← Terug
        </a>
      </div>
    </div>
  );
}
