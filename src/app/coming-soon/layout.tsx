import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Binnenkort Online | Fysio Laren",
  description:
    "De nieuwe website van Fysio Laren komt eraan. Neem contact op via 0573-215058 of info@fysio-laren.nl.",
};

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Override the main layout: no header, no footer */}
      <style>{`
        header, footer, .cookie-banner { display: none !important; }
        main { padding: 0 !important; margin: 0 !important; }
      `}</style>
      {children}
    </>
  );
}
