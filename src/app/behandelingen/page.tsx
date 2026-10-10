import { Metadata } from "next";
import Behandelingen from "@/components/Behandelingen";

export const metadata: Metadata = {
    title: "Behandelingen & Specialisaties | Fysio Laren",
    description: "Overzicht van alle gespecialiseerde fysiotherapie behandelingen bij Fysio Laren: manuele therapie, revalidatie, oedeemtherapie, dry needling en meer.",
};

export default function BehandelingenPage() {
    const schemaOrgData = {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": "Fysio Laren",
        "description": "Specialist in fysiotherapie, manuele therapie en revalidatie in Laren en omstreken.",
        "url": "https://fysio-laren.nl/behandelingen",
        "telephone": "+31573215058",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Huenderstraat 3",
            "addressLocality": "Laren",
            "postalCode": "7245 BG",
            "addressCountry": "NL"
        },
        "medicalSpecialty": [
            "Physiotherapy",
            "PhysicalTherapy"
        ]
    };

    return (
        <main className="bg-background pt-32 pb-6 min-h-screen relative">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
            />
            <Behandelingen />
        </main>
    );
}
