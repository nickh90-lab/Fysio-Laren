import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Algemene Voorwaarden | Fysio Laren',
    description: 'Lees de algemene voorwaarden en huisregels van fysiotherapiepraktijk Fysio Laren. Informatie over afspraken, betalingen, aansprakelijkheid en privacy.',
};

export default function AlgemeneVoorwaarden() {
    return (
        <div className="pt-32 pb-24 px-6 md:px-12 bg-background min-h-screen">
            <div className="max-w-3xl mx-auto font-sans">

                {/* Header */}
                <h1 className="text-4xl font-bold mb-6 text-foreground">Algemene Voorwaarden</h1>
                <p className="text-lg text-foreground/80 mb-12">
                    Welkom bij Fysio Laren. Om de behandelingen, de omgangsvormen en de administratie in onze praktijk zo prettig en soepel mogelijk te laten verlopen, hebben wij een aantal algemene voorwaarden en huisregels opgesteld. Door gebruik te maken van onze diensten gaat u akkoord met deze voorwaarden.
                </p>

                {/* Text Content */}
                <div className="space-y-10 text-foreground/80 leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">1. Afspraken en annuleringen</h2>
                        <p>
                            We plannen graag voldoende tijd en aandacht voor uw behandeling in. Bent u verhinderd voor een afspraak? Dan kunt u deze tot uiterlijk <strong>24 uur van tevoren</strong> kosteloos afzeggen of verzetten.
                        </p>
                        <p className="mt-4">
                            Bij annuleringen binnen 24 uur voor de geplande afspraak, of bij het niet verschijnen zonder afmelding (no-show), zijn wij helaas genoodzaakt het <strong>gehele behandeltarief</strong> bij u in rekening te brengen. Let op: deze kosten worden niet vergoed door uw zorgverzekeraar.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">2. Tarieven, betalingen en declaraties</h2>
                        <p>
                            Indien wij een contract hebben afgesloten met uw zorgverzekeraar en u over een toereikende aanvullende verzekering beschikt, declareren wij de kosten voor uw behandelingen direct en rechtstreeks bij uw verzekeraar.
                        </p>
                        <p className="mt-4">
                            Indien u niet of onvoldoende aanvullend verzekerd bent, of als wij geen contract hebben met uw zorgverzekeraar, ontvangt u van ons een particuliere factuur. Voor deze particuliere facturen hanteren wij een strikte betalingstermijn van <strong>14 dagen</strong> na factuurdatum.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">3. Behandelingsovereenkomst en informatieplicht</h2>
                        <p>
                            Bij uw eerste afspraak in de praktijk sluiten wij, veelal mondeling, een behandelingsovereenkomst met u af. Voor een veilige en doelmatige behandeling is het incidenteel noodzakelijk om te overleggen met uw huisarts of verwijzend medisch specialist. Wij gaan ervan uit dat u hiermee instemt, tenzij u hier expliciet bezwaar tegen maakt.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">4. Huisregels en praktisch</h2>
                        <p>
                            Wij vragen u vriendelijk om bij de allereerste intakeafspraak een geldig identiteitsbewijs (paspoort, ID-kaart of rijbewijs) aan ons te tonen, in verband met de wettelijke identificatieplicht in de zorg.
                        </p>
                        <p className="mt-4">
                            Daarnaast verzoeken wij u om uit hygiënisch oogpunt <strong>bij iedere behandeling een eigen (schone) handdoek</strong> mee te nemen om op de behandelbank te leggen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">5. Eigendommen en aansprakelijkheid</h2>
                        <p>
                            Fysio Laren is niet aansprakelijk voor schade aan, verlies van, of diefstal van uw persoonlijke eigendommen in en rondom de praktijkruimtes. Wij raden u aan waardevolle spullen zoveel mogelijk thuis te laten.
                        </p>
                        <p className="mt-4">
                            Tevens accepteren wij geen aansprakelijkheid voor enig lichamelijk letsel of materiële schade ontstaan tijdens of door de behandeling, tenzij wettelijk kan worden aangetoond dat dit is veroorzaakt door opzet of grove schuld van een van onze medewerkers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">6. Privacy en dossierbeheer</h2>
                        <p>
                            Om u goed te kunnen behandelen, houden wij een (digitaal) medisch dossier bij. We gaan zorgvuldig en vertrouwelijk om met uw persoonlijke en medische gegevens en conformeren ons daarbij strikt aan de Algemene Verordening Gegevensbescherming (AVG).
                        </p>
                        <p className="mt-4">
                            Op grond van de Wet op de Geneeskundige Behandelingsovereenkomst (WGBO) zijn wij bovendien wettelijk verplicht om uw medisch dossier tot minimaal 15 jaar na het afronden van de behandeling te bewaren.
                        </p>
                    </section>

                </div>

                {/* Minimalist Contact Block */}
                <section className="bg-muted/30 p-8 rounded-xl mt-16 border border-foreground/5 text-foreground/80 leading-relaxed">
                    <h2 className="text-xl font-bold text-foreground mb-4">Vragen over deze voorwaarden?</h2>
                    <p className="mb-8">
                        Mocht u naar aanleiding van deze algemene voorwaarden nog vragen of opmerkingen hebben, aarzel dan niet om contact met ons op te nemen of dit te bespreken met uw behandelend fysiotherapeut.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-8 text-sm">
                        <div>
                            <p className="font-bold text-foreground mb-1">Bezoekadres</p>
                            <p>Fysio Laren</p>
                            <p>Huenderstraat 3</p>
                            <p>7245 AK Laren (GLD)</p>
                        </div>
                        <div>
                            <p className="font-bold text-foreground mb-1">Bereikbaarheid</p>
                            <p>E-mail: <a href="mailto:info@fysiolaren.nl" className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors">info@fysiolaren.nl</a></p>
                            <p>Telefoon: <a href="tel:0612345678" className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors">06 1234 5678</a></p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
