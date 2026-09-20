import { Metadata } from "next";
import TeamInteractive from "@/components/TeamInteractive";

export const metadata: Metadata = {
    title: 'Ons Team | Fysiotherapie Laren, Gld',
    description: 'Ontmoet de specialisten van Fysio Laren. Ons ervaren team staat voor u klaar met persoonlijke aandacht en expertise.',
};

export default function OnsTeam() {
    return <TeamInteractive />;
}
