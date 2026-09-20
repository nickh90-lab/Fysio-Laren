"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Controleer of de gebruiker al een keuze heeft gemaakt
        const consent = localStorage.getItem("fysiolaren-cookie-consent");
        
        if (consent === "accepted") {
            if (typeof window !== "undefined") {
                const win = window as unknown as { gtag?: (type: string, action: string, config: Record<string, string>) => void };
                if (typeof win.gtag === "function") {
                    win.gtag("consent", "update", {
                        analytics_storage: "granted",
                        ad_storage: "granted"
                    });
                }
            }
        }

        if (!consent) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("fysiolaren-cookie-consent", "accepted");
        setIsVisible(false);
        
        if (typeof window !== "undefined") {
            const win = window as unknown as { gtag?: (type: string, action: string, config: Record<string, string>) => void };
            if (typeof win.gtag === "function") {
                win.gtag("consent", "update", {
                    analytics_storage: "granted",
                    ad_storage: "granted"
                });
            }
        }
    };

    const handleDecline = () => {
        localStorage.setItem("fysiolaren-cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-8 z-50 md:max-w-md"
                >
                    <div className="bg-white rounded-2xl md:rounded-[1.5rem] p-6 shadow-2xl shadow-blue-accent/10 border border-blue-accent/15 relative overflow-hidden">
                        {/* Kobaltblauwe accentbalk bovenin de kaart */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-blue-accent"></div>

                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-full bg-blue-accent/10 text-blue-accent flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-bold text-foreground">Uw privacy bij Fysio Laren</h3>
                        </div>

                        <p className="text-sm text-foreground/75 mb-5 leading-relaxed">
                            Wij gebruiken cookies voor een optimale werking van de website en anonieme statistieken. We gaan zorgvuldig om met uw gegevens.
                            <Link href="/privacybeleid" className="text-blue-accent font-semibold hover:underline ml-1 inline-block">Lees meer in ons Privacybeleid.</Link>
                        </p>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={handleAccept}
                                className="flex-1 bg-blue-accent text-white text-sm font-bold py-2.5 px-4 rounded-xl hover:bg-blue-accent/90 transition-all shadow-sm active:scale-95 cursor-pointer text-center"
                            >
                                Accepteren
                            </button>
                            <button
                                onClick={handleDecline}
                                className="flex-1 bg-white text-foreground/80 hover:text-foreground text-sm font-semibold py-2.5 px-4 rounded-xl border border-foreground/15 hover:border-foreground/30 hover:bg-foreground/5 transition-all active:scale-95 cursor-pointer text-center"
                            >
                                Weigeren
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
