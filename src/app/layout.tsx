import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fysio-laren.nl"),
  title: {
    default: "Fysio Laren | Specialist in Fysiotherapie, Manuele Therapie & FysioFit",
    template: "%s | Fysio Laren"
  },
  description: "Professionele fysiotherapie, manuele therapie en revalidatie in Laren (Gelderland). Persoonlijke aandacht, deskundige therapeuten en een gerichte aanpak voor snel herstel.",
  keywords: [
    "Fysiotherapie Laren",
    "Fysio Laren",
    "Manuele therapie Laren",
    "FysioFit Laren",
    "Fysiotherapeut Lochem",
    "Revalidatie Laren",
    "Dry needling Laren",
    "Sportfysiotherapie Laren Gelderland",
    "Oedeemtherapie Laren"
  ],
  authors: [{ name: "Fysio Laren" }],
  creator: "Fysio Laren",
  publisher: "Fysio Laren",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Fysio Laren | Specialist in Fysiotherapie & Revalidatie",
    description: "Professionele fysiotherapie en manuele therapie in Laren (Gelderland). Persoonlijke zorg en een snelle weg naar herstel.",
    url: "https://www.fysio-laren.nl",
    siteName: "Fysio Laren",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/images/Teamfoto_v2.jpg",
        width: 1200,
        height: 630,
        alt: "Team Fysio Laren",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fysio Laren | Specialist in Fysiotherapie & Revalidatie",
    description: "Professionele fysiotherapie en manuele therapie in Laren (Gelderland).",
    images: ["/images/Teamfoto_v2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Fysio Laren",
  "image": "https://www.fysio-laren.nl/images/Teamfoto_v2.jpg",
  "@id": "https://www.fysio-laren.nl",
  "url": "https://www.fysio-laren.nl",
  "telephone": "+31573215058",
  "email": "info@fysio-laren.nl",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Huenderstraat 3",
    "addressLocality": "Laren",
    "postalCode": "7245 BG",
    "addressRegion": "Gelderland",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.1931,
    "longitude": 6.3683
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Thursday"],
      "opens": "08:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Wednesday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "medicalSpecialty": [
    "Physiotherapy",
    "PhysicalTherapy"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied'
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col text-[17px] leading-relaxed bg-background text-foreground antialiased`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
    </html>
  );
}
