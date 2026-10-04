import { Metadata } from "next";
import Link from "next/link";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
    title: "Afspraak maken | Fysio Laren",
    description: "Binnenkort beschikbaar: de online agendamodule van HCI One.",
};

export default function AfspraakMakenPage() {
    return (
        <main className="min-h-screen bg-background flex items-center justify-center px-6 pt-24 pb-16">
            <div className="text-center max-w-md mx-auto">
                <div className="w-16 h-16 rounded-3xl bg-blue-accent/10 text-blue-accent flex items-center justify-center mx-auto mb-6 shadow-xs">
                    <Calendar size={28} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-foreground/40 block mb-3">
                    Afspraak maken
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-3">
                    Binnenkort beschikbaar
                </h1>
                <p className="text-foreground/60 text-base font-light leading-relaxed mb-8">
                    Hier komt de agendamodule van HCI One.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center text-sm font-semibold text-blue-accent hover:text-blue-accent/80 transition-colors"
                >
                    ← Terug naar home
                </Link>
            </div>
        </main>
    );
}
