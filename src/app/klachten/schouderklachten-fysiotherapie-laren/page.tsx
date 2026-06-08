import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ChevronRight, HandHeart } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Schouderklachten Fysiotherapie Laren | Pijnvrij uw arm bewegen',
    description: 'Last van uw schouder bij het heffen van uw arm of tijdens het slapen? Fysio Laren biedt gespecialiseerde behandeling voor frozen shoulder en peesontstekingen.',
};

export default function SchouderklachtenLaren() {
    return (
        <div className="pt-20 bg-background">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden text-center bg-slate-900 mt-0">
                <div className="absolute inset-0 z-0">
                    <Image src="/images/hero-praktijk.jpg" alt="Behandeling schouderklachten in Laren" fill className="object-cover opacity-40" priority />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto w-full pt-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-primary mb-6 backdrop-blur-sm border border-primary/30">
                        <HandHeart size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Actieve behandeling van Schouderpijn in Laren
                    </h1>
                    <p className="text-slate-200 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Herstel uw mobiliteit en kracht bij complexe gewrichtsklachten rondom uw schouderblad en arm.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-3xl font-bold text-foreground mb-6">Een schouderklacht belemmert uw hele dag</h2>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            De schouder is anatomisch gezien het meest beweeglijke, maar daarmee ook het meest gecompliceerde gewricht dat de mens bezit. Juist doordat we de arm in zoveel hoeken kunnen heffen en draaien – hangt onze stabiliteit erg af van een fijne samenwerking tussen hele specifieke spieren, pezen en het schouderkapsel. Een storing daarin (door veroudering, (sport)overbelasting of een acuut trauma) voelt men vrijwel met elke kleine dagelijkse verrichting weer zeuren of scherp steken.
                        </p>
                        <p className="text-foreground/80 leading-relaxed mb-10">
                            Of u nu niet meer pijnvrij een pan kunt afgieten, u uw jas niet goed meer aankrijgt, of 's nachts steevast wakker schrikt omdat u op de "foute" pijnschouder probeert de draaien; het belemmert enorm. Het fysiotherapie team van <strong>Fysio Laren</strong> is speciaal hiervoor geschoold en neemt met u het zekere voor het onzekere om snel correcte diagnose the bieden op deze vervelende belemmeringen rond het omliggend Larense gebied.
                        </p>

                        <h3 className="text-2xl font-bold text-foreground mb-4">Typische schouderaandoeningen</h3>
                        <ul className="space-y-4 mb-10 list-none pl-0">
                            {[
                                "Subacromiaal Pijnsyndroom (SAPS): Voorheen beter bekend als een 'Impingement' of 'Slijmbeursontsteking' in de schouderruimte met name pijnlijk de arm zijwaarts heffen.",
                                "Frozen Shoulder (Adhesieve Capsulitis): Een enorm vastzittend schouderkapsel met een vaak pijnlijk en langdurig natuurlijk beloop, waarbij fysiotherapeutische begeleiding absolute stagnatie probeert te minimaliseren.",
                                "Rotator Cuff scheur (peesweefsel scheurtjes, ontstekingen binnen de manchet spieren).",
                                "Artrose in the schouder gewricht (bot-op-bot slijtage van het kraakbeen vlies).",
                                "Instabiliteit of schouderluxaties (Het 'uit de kom' schieten van de schouders na eerdere ongevallen).",
                                "Revalidatie na operaties (zoals in nabijgelegen ziekenhuizen)."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start text-foreground/80">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-4">
                                        <Check size={14} className="text-primary" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-2xl font-bold text-foreground mb-4">De weg naar pijnvrij heffen</h3>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            Schouder klachten komen jammer genoeg zelden in aanmerking voor een "quick fix". Afhankelijk van specifiek welk schouderpeesje we met echo- of weefsel testen verdacht maken is The herstel periode gevarieerd van 6 weken tot soms veel langer wegens trage doorbloeding van peesstructuren. Binnen the eerste fase starten wij de reguliere praktijkruimte traject met een zeer actief ontlasten en frictie massages of 'Dry Needling'.
                        </p>
                        <p className="text-foreground/80 leading-relaxed mb-10">
                            Om pezen te doen laten weefsel versterken (Zullen we progressief excentrisch the oefenen in the modern ingerichte medische gym te Laren) met behulp inzet onze revalidatie experts (Sporttherapeut). Tevens leren The specialisten patiënten slim te draaien bij taken zonder hefboom pijn uitlokken te forceren zodat pijn in nacht structureel direct af zal zinken.
                        </p>

                        <div className="bg-accent p-8 rounded-3xl border border-foreground/5 mb-10">
                            <h4 className="text-xl font-bold text-foreground mb-4">Echo faciliteiten</h4>
                            <p className="text-foreground/80 leading-relaxed m-0">
                                Om the the exacte 'scheuring' te elimineren the diagnoses (wat cruciaal bewijst the verdere verloop van behandeling met de hefsnelheid) kunnen Fysiotherapeuten binnen directe lijnen van Fysio Laren direct aanbevelen of we echografisch weefsel moeten nakijken – direct via huisarts netwerk of inpandig afhankelijk locatiedekking/afstemming – Voor absolute vaststelling. Geen tijd verloren gokken dus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conversion CTA */}
            <section className="py-24 px-6 md:px-12 bg-primary">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Lig er niet langer wakker van</h2>
                    <p className="text-white/90 text-xl mb-10">
                        De schouderexperts in de omgeving Laren staan deze week nog voor u paraat.
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
