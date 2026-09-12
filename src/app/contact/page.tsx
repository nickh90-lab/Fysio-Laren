import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: 'Contact Fysiotherapie Laren | Adres en Openingstijden',
    description: 'Neem contact op met Fysio Laren voor al uw vragen of maak direct een afspraak. Bekijk onze openingstijden, adres en routebeschrijving. Bel 0573-215058 of mail info@fysio-laren.nl.',
};

export default function Contact() {
    return <ContactClient />;
}
