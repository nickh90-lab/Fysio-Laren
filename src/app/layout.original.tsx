import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

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
      <body className={`${inter.className} min-h-screen flex flex-col text-[17px] leading-relaxed bg-background text-foreground antialiased`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
