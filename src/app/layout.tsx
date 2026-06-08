import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

// ONDERHOUD MODUS ACTIEF
// Om terug te gaan naar de echte website:
// 1. Verwijder dit bestand en herstel layout.original.tsx
// 2. Hernoem page.website.tsx terug naar page.tsx

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fysio Laren | Binnenkort online",
  description: "Fysio Laren is binnenkort online. Specialist in fysiotherapie en revalidatie in Laren.",
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
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
    </html>
  );
}
