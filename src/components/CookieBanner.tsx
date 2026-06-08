"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Controleer of de gebruiker al een keuze heeft gemaakt
        const consent = localStorage.getItem("fysiolaren-cookie-consent");
        
        if (consent === "accepted") {
            if (typeof window !== "undefined") {
                // @ts-ignore - gtag is defined by Google Analytics
                if (typeof window.gtag === "function") {
                    // @ts-ignore - gtag is defined by Google Analytics
                    window.gtag("consent", "update", {
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
            // @ts-ignore - gtag is defined by Google Analytics
            if (typeof window.gtag === "function") {
                // @ts-ignore - gtag is defined by Google Analytics
                window.gtag("consent", "update", {
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
                    className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-8 z-50 md:max-w-sm"
                >
                    <div className="bg-white rounded-2xl p-6 shadow-2xl border border-foreground/5 relative overflow-hidden">
                        {/* Kleine blauwe accentbalk bovenin de kaart ter versiering */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-primary/20"></div>

                        <div className="flex items-center space-x-2 mb-3">
                            <h3 className="text-base font-bold text-foreground">Uw privacy</h3>
                        </div>

                        <p className="text-sm text-foreground/70 mb-5 leading-relaxed">
                            Wij gebruiken cookies voor een optimale werking van de website en anonieme statistieken. We gaan zorgvuldig om met uw gegevens.
                            <Link href="/privacybeleid" className="text-primary hover:underline ml-1 inline-block">Lees meer in ons Privacybeleid.</Link>
                        </p>

                        <div className="flex items-center space-x-3">
                            <button
                                onClick={handleAccept}
                                className="flex-1 bg-primary text-white text-sm font-bold py-2.5 px-4 rounded-xl hover:bg-primary/90 transition-colors shadow-sm"
                            >
                                Accepteren
                            </button>
                            <button
                                onClick={handleDecline}
                                className="flex-1 bg-muted text-foreground/80 text-sm font-bold py-2.5 px-4 rounded-xl hover:bg-muted/80 hover:text-foreground transition-colors"
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
