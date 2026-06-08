import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Veelvoorkomende Klachten | Fysio Laren',
    description: 'Hebt u last van uw nek, rug, knie of schouder? Bekijk hier informatie over de meest voorkomende fysieke klachten en hoe wij u daar in Laren mee helpen.',
};

export default function KlachtenLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
