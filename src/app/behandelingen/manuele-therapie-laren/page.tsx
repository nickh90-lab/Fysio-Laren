import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ChevronRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Manuele Therapie Laren | Expert in Rug- en Nekklachten',
    description: 'Gespecialiseerd in Manuele Therapie in Laren. Snel van uw blokkades en complexe gewrichtspijn af met de erkende specialisten van Fysio Laren.',
};

export default function ManueleTherapieLaren() {
    return (
        <div className="pt-20 bg-background">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden text-center bg-slate-900 mt-0">
                <div className="absolute inset-0 z-0">
                    <Image src="/images/hero-praktijk.jpg" alt="Manueel therapeut Laren" fill className="object-cover opacity-40" priority />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto w-full pt-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-primary mb-6 backdrop-blur-sm border border-primary/30">
                        <ShieldCheck size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Manuele Therapie in Laren
                    </h1>
                    <p className="text-slate-200 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Voor een snelle toename van beweeglijkheid en afname van complexe gewrichtspijn.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-3xl font-bold text-foreground mb-6">Wat doet een manueel therapeut?</h2>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            Heeft u het gevoel dat u 'vastzit'? Gaat bewegen gepaard met stijfheid, uitstralende pijn of een beperking in uw bewegingsvrijheid (bijvoorbeeld bij het omkijken over uw schouder)? Dan is manuele therapie vaak de meest effectieve behandelmethode.
                        </p>
                        <p className="text-foreground/80 leading-relaxed mb-10">
                            Een manueel therapeut heeft na de reguliere opleiding fysiotherapie een meerjarige, gespecialiseerde masteropleiding gevolgd. Hierdoor bezitten de experts van <strong>Fysio Laren</strong> specifieke kennis over de complexe bewegingen en aandoeningen van de meervoudige gewrichten, met name in de wervelkolom (rug en nek).
                        </p>

                        <h3 className="text-2xl font-bold text-foreground mb-4">Voor welke klachten?</h3>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            Manuele therapie is bij uitstek geschikt voor klachten die gepaard gaan met pijn en het slechter kunnen bewegen van een of meerdere gewrichten. Typische klachten waarmee patiënten uit Laren, Blaricum en Huizen onze praktijk bezoeken zijn:
                        </p>
                        <ul className="space-y-4 mb-10 list-none pl-0">
                            {[
                                "Hoofd- en nekpijn in combinatie met een stijve bovenrug.",
                                "Nek- en schouderklachten (die vaak doortrekken tot in de armen).",
                                "Lage rugklachten, eventueel met uitstralende pijn naar het been (bijv. Ischias of Hernia).",
                                "Duizeligheid die wordt opgewekt door het bewegen van de nek.",
                                "Kaakklachten (eventueel in combinatie met nekpijn).",
                                "Heupklachten of artrose in brede zin."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start text-foreground/80">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-4">
                                        <Check size={14} className="text-primary" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-2xl font-bold text-foreground mb-4">Hoe verloopt een manuele behandeling?</h3>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            Nadat we middels een uitgebreid vraaggesprek (anamnese) en een fysiek onderzoek de oorzaak van uw klacht hebben geïsoleerd, starten we met de gerichte behandeling. Doel is altijd het verkrijgen van een betere functie van uw gewrichten en (als logisch gevolg) een afname in pijn en klachten.
                        </p>
                        <p className="text-foreground/80 leading-relaxed mb-10">
                            De manueel therapeut maakt hiervoor gebruik van specifieke technieken genaamd 'mobilisaties' of 'manipulaties'. Bij een manipulatie beweegt de therapeut het gewricht iets sneller ('kraken'). Dit gaat soms gepaard met een knappend geluid. De meeste patiënten ervaren dit als een vreemd, maar niet pijnlijk gevoel, waarna direct een grotere bewegingsvrijheid voelbaar is. Verder in het traject combineren we manuele technieken vaak met gerichte oefentherapie om het resultaat te borgen.
                        </p>

                        <div className="bg-accent p-8 rounded-3xl border border-foreground/5 mb-10">
                            <h4 className="text-xl font-bold text-foreground mb-4">Zonder verwijzing bereikbaar</h4>
                            <p className="text-foreground/80 leading-relaxed m-0">
                                U heeft <strong>geen verwijsbrief</strong> van de huisarts of medisch specialist nodig om een afspraak te maken bij de manueel therapeut. Net als bij de algemeen fysiotherapeut kunt u direct contact met ons opnemen of digitaal een intake inplannen. Let op: controleer uw (aanvullende) polisvoorwaarden ter bepaling van uw kosten dekking vanuit de zorgverzekeraar. Manuele therapie wordt voor tot het budget gedekt vanuit veel specifieke aanvullende fysiotherapie pakketten.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conversion CTA */}
            <section className="py-24 px-6 md:px-12 bg-primary">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Laat uw klachten niet chronisch worden</h2>
                    <p className="text-white/90 text-xl mb-10">
                        Heeft u veel last van een stijve rug of een vastzittende nek? Tijd voor de Master specialistische focus in manuele therapie.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-white/20 pt-10">
                        <Link href="/afspraak-maken" className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-full hover:scale-105 transition-transform shadow-lg flex items-center justify-center">
                            Maak een afspraak <ChevronRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
