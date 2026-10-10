import { Metadata } from "next";
import Aandoeningen from "@/components/Aandoeningen";

export const metadata: Metadata = {
    title: "Aandoeningen & Klachten | Fysio Laren",
    description: "Ontdek bij welke aandoeningen en klachten Fysio Laren u kan helpen. Van rug-, nek- en schouderklachten tot artrose, revalidatie en neurologische zorg in Laren.",
};

export default function AandoeningenPage() {
    const schemaOrgData = {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": "Fysio Laren",
        "description": "Specialist in fysiotherapie, manuele therapie en revalidatie in Laren en omstreken.",
        "url": "https://fysio-laren.nl/aandoeningen",
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
            <Aandoeningen />
        </main>
    );
}
