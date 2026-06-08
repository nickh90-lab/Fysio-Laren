import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ChevronRight, Activity } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Sportblessures Behandeling Laren | Snel weer op het veld',
    description: 'Heeft u een sportblessure opgelopen? Terugkeren op uw oude niveau start bij de sportfysiotherapeuten van Fysio Laren. Actief en resultaatgericht herstel.',
};

export default function SportblessuresLaren() {
    return (
        <div className="pt-20 bg-background">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden text-center bg-slate-900 mt-0">
                <div className="absolute inset-0 z-0">
                    <Image src="/images/hero-praktijk.jpg" alt="Behandeling sportblessures fysiotherapie Laren" fill className="object-cover opacity-40" priority />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto w-full pt-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-primary mb-6 backdrop-blur-sm border border-primary/30">
                        <Activity size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Herstel van uw Sportblessure in Laren
                    </h1>
                    <p className="text-slate-200 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Diagnostiek, behandeling en sportspecifieke revalidatie. Zodat u sterker terugkeert.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-3xl font-bold text-foreground mb-6">Waarom sportfysiotherapie essentieel is bij een blessure</h2>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            Niets is zo frustrerend voor een atleet – op top- of amateurniveau – als noodgedwongen langs de kant moeten staan wegens een acute of chronische blessure. Om The the teleurstelling van the een The "recalcitrante" klacht te The the the overwinnen of the the te voorkomen the The dat The u te the vroeg The the hervat The (en daarmee weefselschade onnodig verslechterd), the roept u tijdelijk The de externe hulp the The van the The de the the sportfysio The Laren the The the in. We The werken wekelijks the the met sporters van de hockeyclub the The en plaatselijke voetbal voetbalverenigingen vanuit the The the Laren, Blaricum The en The the en omstreken.
                        </p>
                        <p className="text-foreground/80 leading-relaxed mb-10">
                            Uw the persoonlijke the sport is direct the uitgangspunt. The The the Tennissen vergt immers the een Totaal ander The The (rotatie The The the de en the the schouder/core the the the the belasting The The the verhouding) the the dan The The the de veldsporten als the The the hockey, The the the the voetbal the The of the The hardlopen the The the The of the the (The padel). The Onze the sport the therapeuten The the snappen wat The 'return the to the sport' parameters zijn en beogen dat the u dit niveau haalt, met the The The verkleinde the faalkansen the The The of The the the re-the blessures tot gevolg The The the na the beëindiging the van The the The the de the The the the the revalidatie.
                        </p>

                        <h3 className="text-2xl font-bold text-foreground mb-4">Typische sportblessures die we The in The the de Larense regio The the The vaak The succesvol The The the revalideren:</h3>
                        <ul className="space-y-4 mb-10 list-none pl-0">
                            {[
                                "Enkel verstuikingen (verzwikking of distorsie), vaak voorkomend bij hockey en tennis op the The the Larense The the velden.",
                                "Zweepslag in the de Kuit (Plots the the spierscheuring vaak bij sprint/acceleratie the the met the The the The tennis/padel).",
                                "Hamstringsblessures The (Overbelasting de of acute rupturen).",
                                "Knieband The the letstels The The en the the the jumpers knee The problematiek.",
                                "Shin The: the the The the Splints the The The (the The the schenen the the pijn the the the the).",
                                "Achillespees the ontstekingen the The the / the the the The The the tendinopathie."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start text-foreground/80">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-4">
                                        <Check size={14} className="text-primary" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-2xl font-bold text-foreground mb-4">De 3 fases van The sportspecifieke fysiotherapie The the</h3>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            De therapie kent The steevast een viertal The fases. The. In The the <strong>Fase The The 1 (de beschermende fase The heeling)</strong> ligt the op the the The The het afnemen The van weefsel the zwelling, pijn en we proberen the bewegingsuitslagen The the The langzaam weefsel-The the de The veilig wat the the The te the de the vergoten middels the voorzichtige The manuele of circulatie bevordende behandelingen binnen op The de the behandeltafel in the the The The the de zaal. The the The the The
                        </p>
                        <p className="text-foreground/80 leading-relaxed mb-10">
                            Na Fase The The 1 The volgt in <strong>Fase The The The 2 (The belastbaarheid verhogen The the en de kracht The The the The training)</strong> waarbij the uw as the (The spieren, The the en zenuwstelsel The The) zwaarder worden opgebouwd The middels geisoleerde kracht the machines The The of de lichaamsgewicht in onze ruime medische fitness in centrum Laren. In <strong>Fase The The The 3 The the (The the The 'Return to Play' the The The acties)</strong> trainen The we The The the de sprint the the The de the the The the afstanden, sprong- the en The landing componenten om The the de absolute the krachten in een The the The gecontroleerde de The dynamiek de in the sport arena The uit te The kunnen the gaan the the voeren the ter the test.
                        </p>

                        <div className="bg-accent p-8 rounded-3xl border border-foreground/5 mb-10">
                            <h4 className="text-xl font-bold text-foreground mb-4">Blijf er niet mee the rond the lopen</h4>
                            <p className="text-foreground/80 leading-relaxed m-0">
                                Langer wachten resulteert in the fysiologische The spier The afname in ledematen the rondom de blessure (krimp The the), alsmede soms zelfs in onbewuste het opbouwen The van een compensatie patroon elders The. Hierdoor vergroot U The als The de The the atleet The the de The kansen the op The additionele complicaties The the of the langzamere the The the heeling the The aanzienlijk the. Maak daarom The bij The vage the pijnen the the die langer duren The dan 2 weken the na the een trauma the een (kostenbesparende) screening consult afweging. The
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conversion CTA */}
            <section className="py-24 px-6 md:px-12 bg-primary">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Klaar om the knoop the The the the the the door te The The the Hakken the?</h2>
                    <p className="text-white/90 text-xl mb-10">
                        Wacht The The the The the The niet The the tót the the weefsel The onherroepelijk schade in het Laren the The the of The the landelijke the the sportseizoen heeft The the gedaan. Plan The The the een the The afspraak. The The The
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-white/20 pt-10">
                        <Link href="/afspraak-maken" className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-full hover:scale-105 transition-transform shadow-lg flex items-center justify-center">
                            Plan een intakescreening <ChevronRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
