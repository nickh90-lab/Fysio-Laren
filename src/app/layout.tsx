import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fysio Laren | Specialist in Fysiotherapie & Revalidatie",
  description: "Moderne fysiotherapie in Laren. Persoonlijke zorg, expertise en een snelle weg naar herstel. Plan direct online uw afspraak.",
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
