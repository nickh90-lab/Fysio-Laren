import { Metadata } from "next";
import Behandelingen from "@/components/Behandelingen";

export const metadata: Metadata = {
    title: "Behandelingen & Fysiotherapie | Fysio Laren",
    description: "Een overzicht van alle gespecialiseerde fysiotherapie behandelingen bij Fysio Laren, van manuele therapie tot neurologische revalidatie.",
};

export default function FysiotherapiePage() {
    return (
        <main className="bg-background pt-32 pb-6 min-h-screen relative">
            <Behandelingen />
        </main>
    );
}
