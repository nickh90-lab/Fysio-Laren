import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ChevronRight, Search } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Dry Needling Laren | Directe ontspanning van uw spieren',
    description: 'Behandeling van pijnlijke spierknopen (triggerpoints) in Laren met Dry Needling. Ervaar direct pijnvermindering en een betere beweeglijkheid bij Fysio Laren.',
};

export default function DryNeedlingLaren() {
    return (
        <div className="pt-20 bg-background">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden text-center bg-slate-900 mt-0">
                <div className="absolute inset-0 z-0">
                    <Image src="/images/hero-praktijk.jpg" alt="Dry Needling Behandeling in Laren" fill className="object-cover opacity-40" priority />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto w-full pt-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-primary mb-6 backdrop-blur-sm border border-primary/30">
                        <Search size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Dry Needling in Laren
                    </h1>
                    <p className="text-slate-200 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Directe verlichting van hardnekkige spierpijn en lastige triggerpoints.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-3xl font-bold text-foreground mb-6">Wat is Dry Needling en voor wie is het?</h2>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            Ervaart u zeurende pijn, stijfheid, of uitstralende pijn die maar niet lijkt te verdwijnen, zelfs niet na rust of massage? De kans is groot dat lastige "spierknoopjes" (myofasciale triggerpoints) de boosdoener zijn. Bij <strong>Fysio Laren</strong> zijn wij gespecialiseerd in het effectief verhelpen van deze triggerpoints door middel van Dry Needling.
                        </p>
                        <p className="text-foreground/80 leading-relaxed mb-10">
                            Dry Needling is een uiterst moderne, innovatieve behandelmethode binnen de fysiotherapie. Met behulp van een haardunne, zogenaamde 'droge naald' (er vloeit dus geen medicatie naar binnen) worden specifieke plekken in de spieren kortdurend aangeprikt. Dit leidt tot een zeer snelle, en vaak in het moment zelf voelbare, ontspanning van de spiervezels.
                        </p>

                        <h3 className="text-2xl font-bold text-foreground mb-4">Klachten die wij behandelen met Dry Needling</h3>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            Veel aandoeningen die gerelateerd zijn aan te hoge spierspanning kunnen succesvol worden behandeld met deze techniek. Overweeg een afspraak voor Dry Needling in Laren bij klachten zoals:
                        </p>
                        <ul className="space-y-4 mb-10 list-none pl-0">
                            {[
                                "Knoopvorming (stijve spieren) in nek en schouders, vaak leidend tot spanningshoofdpijn.",
                                "Langdurige, chronische lage rugklachten en bilpijn met uitstraling naar het been.",
                                "Klachten aan arm of pols, waaronder een tennisarm of muisarm (RSI).",
                                "Heup- en liesklachten veroorzaakt door hyperactieve spieren.",
                                "Kramp in kuiten, voet- of hielpijn (bijv. hielspoor klachten).",
                                "Verminderde mobiliteit door plaatselijke spierverkrampingen na intensief sporten."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start text-foreground/80">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-4">
                                        <Check size={14} className="text-primary" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-2xl font-bold text-foreground mb-4">Hoe verloopt een behandeling?</h3>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            De fysiotherapeut zal eerst via lichamelijk onderzoek nauwkeurig op zoek gaan naar de exacte triggerpoints (verkrampte zones). Het aanprikken zélf met het naaldje is nagenoeg pijnloos. Als de juiste triggerpoint wordt gevonden, dan spant de spier zich lokaal aan (een zogenaamde "Local Twitch Response"). Dit kan heel even een kramp-achtig en lokaal gevoel geven. Direct daarna ontspant de spier zichtbaar en voelbaar.
                        </p>
                        <p className="text-foreground/80 leading-relaxed mb-10">
                            U zult merken dat de mobiliteit nagenoeg direct verbetert. De spier kan wel wat stijf aanvoelen; dit 'spierpijn'-gevoel is normaal en verdwijnt meestal binnen 1 tot 2 dagen na de behandeling. Waar massage soms enkel oppervlakkig werkt, bereikt Dry Needling de dieper gelegen spierstructuren voor langdurig resultaat. Vaak ervaart de patiënt na een eerste reeks al een drastische verlichting van de al dan niet chronische pijnklachten.
                        </p>

                        <div className="bg-accent p-8 rounded-3xl border border-foreground/5 mb-10">
                            <h4 className="text-xl font-bold text-foreground mb-4">Wordt Dry Needling vergoed?</h4>
                            <p className="text-foreground/80 leading-relaxed m-0">
                                Ja! Dry Needling is bij Fysio Laren een geïntegreerd onderdeel van de reguliere behandeling fysiotherapie. Er worden daarom géén extra kosten berekend voor deze specialisatie. Bent u aanvullend verzekerd voor fysiotherapie? Dan valt dit gewoon onder de standaard vergoedingen van uw zorgverzekeraar. Bekijk uw specifieke polis voor de verzekerde behandeling.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conversion CTA */}
            <section className="py-24 px-6 md:px-12 bg-primary">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ervaar zelf de ontspannende werking</h2>
                    <p className="text-white/90 text-xl mb-10">
                        Kampt u met hardnekkige spierknopen of uitstralende pijn? Maak kennis met deze snelle en doeltreffende behandelmethode in Laren.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-white/20 pt-10">
                        <Link href="/afspraak-maken" className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-full hover:scale-105 transition-transform shadow-lg flex items-center justify-center">
                            Plan een fysiotherapie afspraak <ChevronRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
