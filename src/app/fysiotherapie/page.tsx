import { Metadata } from "next";
import Fysiotherapie from "@/components/Fysiotherapie";

export const metadata: Metadata = {
    title: "Fysiotherapie & Behandelingen | Fysio Laren",
    description: "Een overzicht van alle klachten en gespecialiseerde fysiotherapie behandelingen bij Fysio Laren, van manuele therapie tot neurologische revalidatie.",
};

export default function FysiotherapiePage() {
    // Schema.org JSON-LD for MedicalClinic & MedicalSpecialty
    const schemaOrgData = {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": "Fysio Laren",
        "description": "Specialist in fysiotherapie, manuele therapie en revalidatie in Laren en omstreken.",
        "url": "https://www.fysiolaren.nl/fysiotherapie",
        "telephone": "+31351234567", // Update with real phone number later
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
        ],
        "availableService": [
            // Voorbeeld integratie, idealiter wordt dit uit een algemene config gehaald
            { "@type": "MedicalTherapy", "name": "Rug-, nek- en schouderklachten" },
            { "@type": "MedicalTherapy", "name": "Artrose & Gewrichtsklachten" },
            { "@type": "MedicalTherapy", "name": "Sportblessures" },
            { "@type": "MedicalTherapy", "name": "Neurologische klachten" },
            { "@type": "MedicalTherapy", "name": "Reguliere Fysiotherapie" },
            { "@type": "MedicalTherapy", "name": "Manuele Therapie" },
            { "@type": "MedicalTherapy", "name": "Revalidatie (Post-operatief)" },
        ]
    };

    return (
        <main className="bg-background pt-32 pb-6 min-h-screen relative">
            {/* Inject JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
            />

            <Fysiotherapie />
        </main>
    );
}
