import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ChevronRight, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Revalidatie Fysiotherapie Laren | Uw herstel na een operatie',
    description: 'Gepersonaliseerde revalidatie in Laren na een (orthopedische) ingreep, trauma of ziekte. Begeleiding op maat in onze ruime en moderne oefenzaal.',
};

export default function RevalidatieLaren() {
    return (
        <div className="pt-20 bg-background">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden text-center bg-slate-900 mt-0">
                <div className="absolute inset-0 z-0">
                    <Image src="/images/hero-praktijk.jpg" alt="Medische Revalidatie oefenzaal in Laren" fill className="object-cover opacity-40" priority />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto w-full pt-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-primary mb-6 backdrop-blur-sm border border-primary/30">
                        <Clock size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Revalideren in Laren
                    </h1>
                    <p className="text-slate-200 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Stap voor stap uw zelfstandigheid en kracht terug na een zware (orthopedische) operatie, ongeluk, of door langdurig ziekteverzuim.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-3xl font-bold text-foreground mb-6">Waarom klinische revalidatie fysiotherapie noodzakelijk is</h2>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            Na een ingrijpende operatie, een ernstig sportongeluk of een periode van langdurige immobiliteit heeft uw lichaam tijd, maar vooral professionele en specifieke sturing nodig om volledig te herstellen. De therapeuten van <strong>Fysio Laren</strong> zijn gespecialiseerd in complexe orthopedische en pre- en post-operatieve revalidatietrajecten.
                        </p>
                        <p className="text-foreground/80 leading-relaxed mb-10">
                            Adequate vroege revalidatie zorgt voor een beter eindresultaat. Zo werken we direct toe naar doelen zoals: vermindering in de weefselpijn, verkleining van gezwollen gebied of spierkrimp tenietdoen waarna gestart word in het traject van mobiliteit (zoals weer een stukje kunnen wandelen), zelfredzaamheid te vergroten en verlies in kracht met weerstand terug te trainen op het wenselijke niveau.
                        </p>

                        <h3 className="text-2xl font-bold text-foreground mb-4">Voor welke revalidatietrajecten kunt u de afspraak maken?</h3>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            Wij begeleiden patiënten in onze zeer ruime en lichte moderne oefenzaal. Tijdens uw consult kunt u begeleid worden in revalidatie-specifieke condities voor velen trajecten maar focussen ons qua locatie lokaal voor de buurt rondom Laren vooral voor:
                        </p>
                        <ul className="space-y-4 mb-10 list-none pl-0">
                            {[
                                "Orthopedische operaties (o.a. nieuwe Voorste Kruisband reconstructie, knie- of heupprothese)",
                                "Meniscus of overige ligament kijkoperaties.",
                                "Traumabehandeling (hervatting herstelperiode ten tijden een lange periode na b.v. een botbreuk).",
                                "Operatieve schouder stabilisatie, waaronder schouderpees hechten of inklem klachten ruimte creëren door botsing operatie.",
                                "Terugkeer verzuim. Re-integratie na deels wegvallen werk/gezondheid.",
                                "Oncologische fysiotherapie behandelingen (krachtverlies, pre/post chemotherapie)."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start text-foreground/80">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-4">
                                        <Check size={14} className="text-primary" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-2xl font-bold text-foreground mb-4">Het traject, in de praktijk en/of aan huis</h3>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            Veel revalidatieklanten (direct na ontslag in het ziekenhuis uiteraard) zijn in eerste instantie na hun ingreep logischerwijs niet is staat de eigen woning eenvoudig of in de geheel te verlaten alvorens ze fysieke praktijkconsulten afspreken in het revalidatieplan.
                        </p>
                        <p className="text-foreground/80 leading-relaxed mb-10">
                            Daarom biedt Fysio Laren indien van toepassing – in overleg en vaak mits uw specialist hiervoor afgerekent kan de medische eis – aan-huis interventies: zo helpt de behandelaar met specifieke adviezen om thuisbasaal sneller op het veilige ritme de alledaagse functies veilig en beter toegediend uitvoeren voor we binnenkort bij de eigen sportpraktijk oefenzaal in stappen vervolgen qua verhoogde weerstand versterking en geijkte progressieve revalidatie-schema en planning ter plaatse behuizing afrondingen uitvoerig maken in de veilige omgeving van de gymzaal in praktijk in Laren.
                        </p>

                        <div className="bg-accent p-8 rounded-3xl border border-foreground/5 mb-10">
                            <h4 className="text-xl font-bold text-foreground mb-4">Aanvullende polis in relatie met traject vergoeding (Chronische status vergoeding)</h4>
                            <p className="text-foreground/80 leading-relaxed m-0">
                                Na veel grote ingrepen krijgt u als verwijzing direct de nota "C-Lijst Chronische indicatie Fysiotherapie" (de 'lijst van Borst'). Wat cru gezegd betekend dat uw behandeltraject in de eerstelijns via Laren Fysio (na uw eerste eigen 20 betalingen – hetzij via evt aanvullend pakket – hierin gedekt worden daarna middels directe lijn in uw huidige medisch basis zorgtoeslag.) Twijfel of uw code voor u dekking en deze rechten oplevert in de kosten overzichten: mail info@fysiolaren.nl om dit eerst op te zoeken tijdens de startconsult of neem eerst contact direct met uw polis voor alle gedetailleerd afgerende contract betaling regellijnen op u van te kunnen passend maken aan u Laren fysiotherapiecategorie en wensen omstreeks facturaties.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conversion CTA */}
            <section className="py-24 px-6 md:px-12 bg-primary">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Aan de slag met onze ervaren therapie expert</h2>
                    <p className="text-white/90 text-xl mb-10">
                        Klaar om de volgende post-operatie in te delen met de vertrouwde praktijk voor u? Met een veilige stapsgewijze revalidatie fysiotherapueut?
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-white/20 pt-10">
                        <Link href="/afspraak-maken" className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-full hover:scale-105 transition-transform shadow-lg flex items-center justify-center">
                            Aanmelden revalidatietraject <ChevronRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
