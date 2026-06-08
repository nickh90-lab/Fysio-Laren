import { Metadata } from "next";
import OnsTeamClient from "./OnsTeamClient";

export const metadata: Metadata = {
    title: 'Ons Team | Fysiotherapie Laren',
    description: 'Ontmoet de specialisten van Fysio Laren. Ons ervaren team staat voor u klaar met persoonlijke aandacht en expertise.',
};

export default function OnsTeam() {
    return <OnsTeamClient />;
}
