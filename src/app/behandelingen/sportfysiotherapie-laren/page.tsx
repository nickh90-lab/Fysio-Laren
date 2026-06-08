import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ChevronRight, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Sportfysiotherapie in Laren | Snel Herstel na een Blessure',
    description: 'Gespecialiseerde sportfysiotherapie in Laren. Werk gericht en actief aan uw revalidatie en kom sterker terug op het sportveld. Zonder verwijzing.',
};

export default function SportfysiotherapieLaren() {
    return (
        <div className="pt-20 bg-background">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden text-center bg-slate-900 mt-0">
                <div className="absolute inset-0 z-0">
                    <Image src="/images/hero-praktijk.jpg" alt="Sportfysiotherapie in Laren" fill className="object-cover opacity-40" priority />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto w-full pt-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-primary mb-6 backdrop-blur-sm border border-primary/30">
                        <Users size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Sportfysiotherapie in Laren
                    </h1>
                    <p className="text-slate-200 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Voor fanatieke en recreatieve sporters die snel, veilig en sterker terug willen keren.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-3xl font-bold text-foreground mb-6">Waarom sportfysiotherapie bij Fysio Laren?</h2>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            Een sportblessure is frustrerend. Het is niet alleen pijnlijk, maar het houdt u ook weg van de activiteiten die u leuk vindt en die belangrijk zijn voor uw gezondheid. Bij <strong>Fysio Laren</strong> begrijpen we de drive van sporters. Onze gespecialiseerde sportfysiotherapeuten staan klaar om u te begeleiden bij een optimaal en verantwoord revalidatietraject.
                        </p>
                        <p className="text-foreground/80 leading-relaxed mb-10">
                            Of u nu topsporter bent, regelmatig op het voetbalveld in de regio Laren staat, of een fanatieke hardloper of wielrenner bent; uw revalidatie vereist een andere aanpak dan standaard fysiotherapie. Wij focussen op de specifieke belasting die uw sport vraagt.
                        </p>

                        <h3 className="text-2xl font-bold text-foreground mb-4">Bij welke blessures helpt de sportfysiotherapeut?</h3>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            Sportgerelateerde klachten ontstaan vaak acuut (zoals door een val of een verkeerde beweging) of door overbelasting over een langere periode. U kunt in onze praktijk in Laren direct terecht voor de behandeling van:
                        </p>
                        <ul className="space-y-4 mb-10 list-none pl-0">
                            {[
                                "Knieblessures, waaronder meniscus- en kruisbandletsel.",
                                "Enkeldistorsies (verzwikte of verstuikte enkel).",
                                "Spierverrekkingen en spierscheuringen (o.a. hamstrings, kuiten).",
                                "Overbelastingsblessures zoals een tenniselleboog of shin splints.",
                                "Zweepslag en achillespeesblessures.",
                                "Revalidatie na (kijk)operaties ter voorbereiding op sporthervatting."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start text-foreground/80">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-4">
                                        <Check size={14} className="text-primary" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-2xl font-bold text-foreground mb-4">Onze actieve revalidatie aanpak</h3>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            Tijdens de intake van uw sportrevalidatie analyseren we niet alleen de plek van de blessure, maar bekijken we uw bewegingsketen als geheel. Vervolgens stellen we een behandelplan op dat is verdeeld in fasen. We starten vaak met pijnverlichting en het herwinnen van de basisbeweeglijkheid.
                        </p>
                        <p className="text-foreground/80 leading-relaxed mb-10">
                            Daarna verplaatst de behandeling zich steeds meer naar de moderne, uitgebreide oefenzaal van Fysio Laren. Aan de hand van een gericht krachts- en conditieschema werken we toe naar het niveau van uw sport. Daarbij besteden we specifieke aandacht aan valpreventie, coördinatie en sportspecifieke bewegingen. Zo zorgen we ervoor dat u sterker terugkomt, én voorkomen we een herhalingsblessure.
                        </p>

                        <div className="bg-accent p-8 rounded-3xl border border-foreground/5 mb-10">
                            <h4 className="text-xl font-bold text-foreground mb-4">Second Opinion of Advies?</h4>
                            <p className="text-foreground/80 leading-relaxed m-0">
                                Loopt u (te) lang met een blessure rond of wilt u advies over blessurepreventie en trainingsopbouw? Ook daarvoor bent u bij onze sportfysiotherapeut aan het juiste adres. Wij kunnen eventueel overleggen met sportartsen uit de regio voor de beste doorverwijzing of behandeling.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conversion CTA */}
            <section className="py-24 px-6 md:px-12 bg-primary">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Terug naar uw oude sportniveau?</h2>
                    <p className="text-white/90 text-xl mb-10">
                        Kies voor een actieve aanpak met een ervaren sportfysiotherapeut in de regio Laren. Maak direct een afspraak.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-white/20 pt-10">
                        <Link href="/afspraak-maken" className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-full hover:scale-105 transition-transform shadow-lg flex items-center justify-center">
                            Plan een sportconsult <ChevronRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
