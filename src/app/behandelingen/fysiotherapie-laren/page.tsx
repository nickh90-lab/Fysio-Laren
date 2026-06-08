import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ChevronRight, Activity } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Fysiotherapie in Laren | Snel en effectief van uw pijn af',
    description: 'Op zoek naar goede fysiotherapie in Laren? Onze ervaren therapeuten helpen u snel van uw rug-, nek- of gewrichtsklachten af. Geen wachttijd.',
};

export default function FysiotherapieLaren() {
    return (
        <div className="pt-20 bg-background">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden text-center bg-slate-900 mt-0">
                <div className="absolute inset-0 z-0">
                    <Image src="/images/hero-praktijk.jpg" alt="Fysiotherapie behandeling in Laren" fill className="object-cover opacity-40" priority />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto w-full pt-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-primary mb-6 backdrop-blur-sm border border-primary/30">
                        <Activity size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Fysiotherapie in Laren
                    </h1>
                    <p className="text-slate-200 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Voor een doelgerichte behandeling van uw (pijn)klachten aan spieren, pezen en gewrichten.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-3xl font-bold text-foreground mb-6">Waarom fysiotherapie bij Fysio Laren?</h2>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            Heeft u last van fysieke klachten die u belemmeren in uw dagelijkse bezigheden, tijdens het werk of bij het sporten? Bij <strong>Fysio Laren</strong> bent u aan het juiste adres voor hoogwaardige, persoonlijke fysiotherapie. Ons ervaren team van specialisten helpt dagelijks tientallen patiënten uit Laren, Blaricum, Eemnes en omstreken om weer pijnvrij en vol vertrouwen te bewegen.
                        </p>
                        <p className="text-foreground/80 leading-relaxed mb-10">
                            Wij geloven niet in symptoombestrijding. We nemen de tijd om de échte oorzaak van uw lichamelijke pijn te achterhalen. Met moderne onderzoeksmethoden, waaronder desgewenst echografie, brengen we uw klacht exact in kaart voordat we met de behandeling starten.
                        </p>

                        <h3 className="text-2xl font-bold text-foreground mb-4">Met welke klachten kunt u bij ons terecht?</h3>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            Onder de noemer algemene fysiotherapie vallen talloze aandoeningen van het bewegingsapparaat. U kunt bij onze praktijk in Laren direct (zonder verwijzing van de arts) een afspraak maken voor onder andere:
                        </p>
                        <ul className="space-y-4 mb-10 list-none pl-0">
                            {[
                                "Rugklachten, waaronder (lage) rugpijn, spit of hernia.",
                                "Nek- en schouderpijn, bijvoorbeeld door stress of overbelasting.",
                                "Gewrichtspijn in knieën, enkels, heupen of polsen.",
                                "Spier- en peesblessures (verrekkingen, scheuringen, peesontstekingen).",
                                "Arbeidsgerelateerde klachten zoals RSI of CANS.",
                                "Houdingsgerelateerde problemen."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start text-foreground/80">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-4">
                                        <Check size={14} className="text-primary" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-2xl font-bold text-foreground mb-4">Onze behandelmethode</h3>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            Na een uitgebreide intake en lichamelijk onderzoek stellen we samen met u een persoonlijk behandelplan op. Dit plan bestaat vaak uit een combinatie van fysiotherapeutische technieken. We kunnen bijvoorbeeld gebruikmaken van massagetechnieken, mobilisaties van gewrichten en specifieke oefentherapie in onze moderne oefenzaal in Laren.
                        </p>
                        <p className="text-foreground/80 leading-relaxed mb-10">
                            Daarnaast voorzien we u altijd van concreet advies en gerichte huiswerkoefeningen. Zo werkt u niet alleen tijdens uw afspraak, maar ook thuis actief aan uw herstel. Dit zorgt voor een duurzaam resultaat en verkleint de kans op terugval.
                        </p>

                        <div className="bg-accent p-8 rounded-3xl border border-foreground/5 mb-10">
                            <h4 className="text-xl font-bold text-foreground mb-4">Wordt fysiotherapie vergoed?</h4>
                            <p className="text-foreground/80 leading-relaxed m-0">
                                Fysio Laren heeft contracten met <strong>alle Nederlandse zorgverzekeraars</strong>. Indien u aanvullend verzekerd bent voor fysiotherapie, worden de behandelingen in de meeste gevallen volledig vergoed en declareren wij dit rechtstreeks voor u. Heeft u een chronische indicatie, dan gelden de regels van de basisverzekering. Wij zoeken dit tijdens de intake graag exact voor u uit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conversion CTA */}
            <section className="py-24 px-6 md:px-12 bg-primary">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Wilt u snel geholpen worden?</h2>
                    <p className="text-white/90 text-xl mb-10">
                        Bij Fysio Laren garanderen wij dat u snel, en vaak nog dezelfde week, terecht kunt voor uw eerste consult fysiotherapie.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-white/20 pt-10">
                        <Link href="/afspraak-maken" className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-full hover:scale-105 transition-transform shadow-lg flex items-center justify-center">
                            Plan direct uw intake <ChevronRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
