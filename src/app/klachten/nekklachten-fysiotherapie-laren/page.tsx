import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ChevronRight, Activity } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Nekklachten Fysiotherapie Laren | Behandeling van uw nekpijn',
    description: 'Last van hoofdpijn of een stijve nek door stress en beeldschermwerk? Bij Fysio Laren pakken we de oorzaak aan. Flexibele afspraaktijden.',
};

export default function NekklachtenLaren() {
    return (
        <div className="pt-20 bg-background">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden text-center bg-slate-900 mt-0">
                <div className="absolute inset-0 z-0">
                    <Image src="/images/hero-praktijk.jpg" alt="Behandeling nekklachten fysiotherapie Laren" fill className="object-cover opacity-40" priority />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto w-full pt-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-primary mb-6 backdrop-blur-sm border border-primary/30">
                        <Activity size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Fysiotherapie bij Nekklachten in Laren
                    </h1>
                    <p className="text-slate-200 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Voor de snelle vermindering van spanningshoofdpijn, stijfheid en bewegingsbeperkingen rond de nek en schoudergordel.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-3xl font-bold text-foreground mb-6">Waarom nekpijn direct aandacht verdient</h2>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            De halswervelkolom en nekspieren bevatten duizenden kleine, maar vitale en gevoelige sensoren. Op het moment dat hier een chronische of acute blokkade of hevige spierspanning ontstaat, straalt de pijn en beperking vaak direct door naar vele dagelijkse activiteiten. Nek, schouders en het hoofd voelen als lood: rondkijken, concentreren op een laptop-scherm of autorijden in (en ver buiten de stadsgebieden zoals) <strong>Laren</strong> wordt dan onveilig en simpelweg ongemakkelijk tot pijnlijk beperkend.
                        </p>
                        <p className="text-foreground/80 leading-relaxed mb-10">
                            Steeds meer mensen realiseren pas te laat, (voornamelijk door langere perioden van chronische (werk)stress, slechte ergonomie voor het thuiskantoor of na bijvoorbeeld het slapen in de foutieve tocht-stroom / airco), wat deze onvrijheden exact betekent voor een ontspannen leefritme en energieniveau de dag erna. Fysio Laren beschikt over de specialisaties om dit op basis van the nieuwste kennis in therapieland weer te kunnen ontdoen qua ontspannende fricties en oplossen der blokkades.
                        </p>

                        <h3 className="text-2xl font-bold text-foreground mb-4">Klachten aan de nek waarmee u naar de praktijk kunt:</h3>
                        <ul className="space-y-4 mb-10 list-none pl-0">
                            {[
                                "Spanningshoofdpijn of zelfs Cervicogene migraine varianten.",
                                "Slechte draaibaarheid - Niet uit de dode hoek bij auto/fiets in de regio kunnen goed overkijken door felle en stijve weefsels in uw nekgordelkant.",
                                "Torticollis – Stijve scheefhals na bij voorbeeld zware tocht de nacht voordien meegemaakt in spieren met veel knoop (myofasciale) blokkeering.",
                                "Tintelingen / Duizeligheidsgevoel dat door de nek en hals spieren en druk the armen binnen trekt langs ellebogen.",
                                "Whiplash-Associated Disorders (Opgelopen opvallende pijndrempels veelal door aanrijding van achteruit, maar na trauma revalidatie op medisch fysiologische controle)",
                                "Peesplaat overbelasting in achterkant monnikskapspier regio door een kantoor slechte of tablet-gebogen hals."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start text-foreground/80">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-4">
                                        <Check size={14} className="text-primary" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-2xl font-bold text-foreground mb-4">Hoe we u en uw nek vakkundig gaan begeleiden</h3>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            Tijdens het onderzoek start te allen tijde de master manueel fysiotherapeut de specifieke gewrichtsproeven omtrent uw nekwervel regio's om neurologische rode vlag of andere gevaren feilloos uit te schuiven en de veiligste methodica in kaart proberen te berekenen als behandelprogram op uw individuele en persoonlijke (in)spannings niveau te specificeren.
                        </p>
                        <p className="text-foreground/80 leading-relaxed mb-10">
                            Nadat het gebied veiliger in de mobilisering – eventueel in harmonisch besluit in het begin kort versterkte gewrichtsmanipulatie 'kraken', Dry needling voor hardnekkige spieren ('Spierknoop uitschakelingen') – wordt er gezamenlijke medisch correct houding-huiswerkoefeningen via inzicht programma op gang afgesteld. Met die aanpassingen van werkomgeving preventies voorkomt en bewerkstelligen het fysiotherapeutische team in Laren dat uw klacht te lang en/of te pijnlijk voor uzelf nog impact heeft gedragen,
                        </p>

                        <div className="bg-accent p-8 rounded-3xl border border-foreground/5 mb-10">
                            <h4 className="text-xl font-bold text-foreground mb-4">Gegarandeerde kwaliteit via het basis pakket of aanvullingspolissen</h4>
                            <p className="text-foreground/80 leading-relaxed m-0">
                                Patiënten hoeven niet meer eerste te passeren vooraf een huisartsen indicatie alvorens het medisch of alternatieve revalidatie op basis van spieren bij klachten start en in uw pakket via alle dekkingen regulier kunnen worden afgewikkeld in Fysio Laren indien via Laren uw woon of werkomgeving geld in Laren via een direct inbellen zonder vertogen en via uw verlies risico polis voorwaarden te ontleden deels naar facturatiemeldingen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conversion CTA */}
            <section className="py-24 px-6 md:px-12 bg-primary">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Voorkom chronische hoofdpijn of zenuwpijn</h2>
                    <p className="text-white/90 text-xl mb-10">
                        Een goede effectieve sessie is de eerste stap naar vorderend pijnvrij en ontspannen weefsel.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-white/20 pt-10">
                        <Link href="/afspraak-maken" className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-full hover:scale-105 transition-transform shadow-lg flex items-center justify-center">
                            Maak een intakeafspraak <ChevronRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
