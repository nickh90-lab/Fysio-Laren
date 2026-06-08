import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Behandelingen Fysiotherapie | Fysio Laren',
    description: 'Ontdek al onze fysiotherapeutische specialisaties in Laren. Van manuele therapie en dry needling tot (sport)medische revalidatie.',
};

export default function BehandelingenLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
