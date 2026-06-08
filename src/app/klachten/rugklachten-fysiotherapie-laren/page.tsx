import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ChevronRight, Activity } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Rugklachten Fysiotherapie Laren | Behandeling van uw rugpijn',
    description: 'Last van acute lage rugpijn, spit, of een (mogelijke) hernia? De fysio- en manueel therapeuten van Fysio Laren helpen u snel en verantwoord weer op de been.',
};

export default function RugklachtenLaren() {
    return (
        <div className="pt-20 bg-background">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden text-center bg-slate-900 mt-0">
                <div className="absolute inset-0 z-0">
                    <Image src="/images/hero-praktijk.jpg" alt="Behandeling rugklachten fysiotherapie Laren" fill className="object-cover opacity-40" priority />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto w-full pt-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-primary mb-6 backdrop-blur-sm border border-primary/30">
                        <Activity size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Fysiotherapie bij Rugklachten in Laren
                    </h1>
                    <p className="text-slate-200 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Pak uw rugpijn bij de oorzaak aan. Snelle diagnostiek en doelgerichte therapie door onze specialisten.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-3xl font-bold text-foreground mb-6">Heeft u last van uw rug?</h2>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            Vele tienduizenden Nederlanders kampen dagelijks met problemen rondom de wervelkolom of bekken regio. Rugpijn vormt hiermee veruit de meest voorkomende reden dat mensen de fysiotherapeut bezoeken. Gelukkig is het verhelpen van acute en chronische rugklachten dé kernexpertise van ons praktijkteam in <strong>Laren</strong>.
                        </p>
                        <p className="text-foreground/80 leading-relaxed mb-10">
                            Misschien ervaart u een zeurende, continue pijn onderin de (hoge of lage) rug die er is tijdens lang stilzitten achter uw beeldscherm? Of wellicht is het er ineens ingeschoten (spit) toen u een boodschappentas uit de achterbak tilde. Wat ook de ontstaanswijze of hevigheid van de pijn betreft, passend verhelpen start met doeltreffend onderzoek door specialisten.
                        </p>

                        <h3 className="text-2xl font-bold text-foreground mb-4">De meest voorkomende rugklachten we wekelijks behandelen:</h3>
                        <ul className="space-y-4 mb-10 list-none pl-0">
                            {[
                                "Aspecifieke (Lage) Rugpijn (pijn zonder directe, aanwijsbare medische schade in botstructuur).",
                                "Spit (Lumbago): Opeens acute, heftig inschietende verkramping in de onderrug, waardoor strekken of bukken niet of nauwelijks meer mogelijk is.",
                                "Hernia-symptomatische pijn (uitstralende zenuwpijn voorbij de bil tot soms zelfs the onder de voet/tenen, in combinatie met krachtsverlies of tintelingen).",
                                "Ischias klachten of beklemming van het si-gewricht / de grote beenzenuw.",
                                "Slijtage of degeneratieve vernauwing (Artrose of Stenose) in de wervelkolom."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start text-foreground/80">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-4">
                                        <Check size={14} className="text-primary" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-2xl font-bold text-foreground mb-4">Onze unieke aanpak voor uw specifieke rug</h3>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            Zodra u de behandelkamer instapt doen we allereerst het 'echte speurwerk'. De manueel therapeut controleert direct of het om spierverkramping gaat of bijvoorbeeld of u een vastzittende wervel heeft (gewrichtsblokkade). Op basis van deze precieze bevindingen stellen we uw persoonlijke begeleidingsplan vast dat we direct samen al voor de eerste behandeling van start laten gaan.
                        </p>
                        <p className="text-foreground/80 leading-relaxed mb-10">
                            Dit kan bestaan uit dry needling voor acute spierkrampen te deactiveren; het lokaal 'kraken'/manueel moduleren van gestagneerde wervels of – vaak the onmisbare langetermijn factor: medisch bewezen revalidatie fysiotherapieoefeningen en 'core' versterkende fitnessprogramma's in onze zaal aanbouw in het centrum van Laren.
                        </p>

                        <div className="bg-accent p-8 rounded-3xl border border-foreground/5 mb-10">
                            <h4 className="text-xl font-bold text-foreground mb-4">Moet ik eerst naar de huisarts?</h4>
                            <p className="text-foreground/80 leading-relaxed m-0">
                                Voor fysiotherapie (inclusief manuele en sport medische fysiotherapie) bij Fysio Laren is in praktisch alle gevallen tegenwoordig <strong>géén verwijzing van een huisarts- of praktijkondersteuner vereist</strong>. U kunt gewoon zo vrij en direct mogelijk inbellen bij ons loket of via de webomgeving zich meteen aan laten melden waarna de specialist de screening ten behoeve de start uitvoert in de eerste minuten en bepaalt of dit een indicatie vormt (Dit heet D.T.F: Directe Toegankelijkheid). Twijfelt u of de pijn eventueel orgaan related is of zijn er acute ongevalsredenen? Maak dan ten allen tijden wel lokaal contact op met uw eigen HA/Huisartsenpost.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conversion CTA */}
            <section className="py-24 px-6 md:px-12 bg-primary">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Blijf niet langer gebukt gaan onder een pijnlijke rug</h2>
                    <p className="text-white/90 text-xl mb-10">
                        Zorg voor een snellere diagnose en direct de startbehandeling de u verdient de gespecialiseerde therapeut van Fysio Laren. Plan een consult (zonder verwijzing).
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-white/20 pt-10">
                        <Link href="/afspraak-maken" className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-full hover:scale-105 transition-transform shadow-lg flex items-center justify-center">
                            Maak een afspraak in Laren <ChevronRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
