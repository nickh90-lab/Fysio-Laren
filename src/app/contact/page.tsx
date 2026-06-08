import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: 'Contact Fysiotherapie Laren | Adres en Openingstijden',
    description: 'Neem contact op met Fysio Laren voor al uw vragen of maak een afspraak. Bekijk onze openingstijden, adres en routebeschrijving. Bel 035-1234567.',
};

export default function Contact() {
    return <ContactClient />;
}
