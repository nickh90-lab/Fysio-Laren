"use client";

import { useEffect } from "react";

export default function AfspraakMakenPage() {
    useEffect(() => {
        window.location.replace("https://fysio-laren.uwpraktijkonline.nl");
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF9F5] p-6 text-center">
            <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-sm border border-foreground/10 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-3 border-blue-accent border-t-transparent animate-spin mb-4" />
                <h1 className="text-lg font-bold text-foreground mb-2">
                    Doorsturen naar de online planmodule...
                </h1>
                <p className="text-foreground/70 text-xs sm:text-sm font-light mb-4">
                    U wordt automatisch doorgestuurd naar onze beveiligde planmodule.
                </p>
                <a 
                    href="https://fysio-laren.uwpraktijkonline.nl"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-blue-accent text-white font-semibold text-xs hover:bg-blue-accent/90 transition-all shadow-xs"
                >
                    Klik hier als u niet automatisch wordt doorgestuurd
                </a>
            </div>
        </div>
    );
}
