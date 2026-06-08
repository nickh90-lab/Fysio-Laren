import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Privacybeleid | Fysio Laren',
    description: 'Lees hoe Fysio Laren zorgvuldig omgaat met uw persoonsgegevens, medisch dossier en privacy conform de AVG wetgeving.',
};

export default function Privacybeleid() {
    return (
        <div className="pt-32 pb-24 px-6 md:px-12 bg-background min-h-screen">
            <div className="max-w-3xl mx-auto font-sans">

                {/* Header */}
                <h1 className="text-4xl font-bold mb-6 text-foreground">Privacybeleid</h1>
                <p className="text-lg text-foreground/80 mb-12">
                    Binnen Fysio Laren hechten wij grote waarde aan de bescherming van uw persoonsgegevens en uw medische privacy. In dit privacybeleid leggen wij op een transparante manier uit welke gegevens wij verzamelen, waarom wij dat doen en hoe wij deze beveiligen, conform de Algemene Verordening Gegevensbescherming (AVG).
                </p>

                {/* Text Content */}
                <div className="space-y-10 text-foreground/80 leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">1. Doel van de gegevensverwerking</h2>
                        <p>
                            Om u een veilige en verantwoorde fysiotherapeutische behandeling te kunnen bieden, is het noodzakelijk dat wij zowel uw administratieve persoonsgegevens (zoals naam, adres, BSN) als medische gegevens verwerken. Deze informatie vormt samen uw patiëntendossier.
                        </p>
                        <p className="mt-4">
                            Op grond van de Wet op de Geneeskundige Behandelingsovereenkomst (WGBO) zijn wij <strong>wettelijk verplicht</strong> om dit medisch dossier goed bij te houden en tot minimaal 15 jaar na uw laatste behandeling te bewaren.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">2. Beveiliging en EPD (Fysioroadmap)</h2>
                        <p>
                            Wij gaan uiterst zorgvuldig om met uw medische dossier. Uw gegevens worden digitaal opgeslagen in een zwaar beveiligd en gecertificeerd Elektronisch Patiëntendossier (EPD), genaamd <strong>Fysioroadmap</strong>.
                        </p>
                        <p className="mt-4">
                            Alleen de fysiotherapeuten die direct of indirect bij uw behandeling betrokken zijn (en eventueel specifieke waarnemers) hebben, via inlogcodes en beveiligde verbindingen, toegang tot uw dossier. Zij hebben bovendien allemaal een wettelijke geheimhoudingsplicht.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">3. Delen van gegevens met derden</h2>
                        <p>
                            Wij delen uw medische informatie uitsluitend met externe partijen wanneer dit strikt noodzakelijk is voor uw behandeling of declaratie.
                        </p>
                        <ul className="list-disc list-outside ml-5 mt-4 space-y-2">
                            <li><strong>Zorgverzekeraars:</strong> Uitsluitend de administratieve gegevens en behandelcodes die benodigd zijn om de gedeclareerde zorg vergoed te krijgen (mits u hiervoor aanvullend verzekerd bent).</li>
                            <li><strong>Verwijzers:</strong> Bij aanvang en afsluiting van uw traject sturen wij vaak een gerichte, beveiligde rapportage naar uw huisarts of medisch specialist om hen op de hoogte te houden van uw herstel.</li>
                        </ul>
                        <p className="mt-4">
                            Voor het delen van informatie met eventuele andere partijen (zoals een arbodienst of advocaat) vragen wij <strong>altijd</strong> eerst uw expliciete en schriftelijke toestemming.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">4. Digitale communicatie (Doctolib Connect)</h2>
                        <p>
                            Voor algemene administratieve zaken en het maken of wijzigen van afspraken communiceren wij (soms) via onbeveiligde kanalen zoals reguliere e-mail.
                        </p>
                        <p className="mt-4">
                            Voor het uitwisselen van medisch-inhoudelijke informatie of foto&#39;s met andere zorgverleners (zoals huisartsen of verwijzers) gebruiken wij uitsluitend beveiligde en specifiek voor de zorg gecertificeerde applicaties, zoals zorgmail of <strong>Doctolib Connect</strong>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">5. Website functionaliteiten en Cookies</h2>
                        <p>
                            Wanneer u onze website bezoekt, maken wij gebruik van cookies voor analytische of functionele doeleinden. Bij uw eerste bezoek aan onze site krijgt u hiervoor automatisch een cookiebanner te zien, waarin u zelf expliciet uw voorkeuren en toestemming kunt opgeven of beheren.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">6. Cameratoezicht in de praktijk</h2>
                        <p>
                            Om de veiligheid van onze patiënten, therapeuten en praktijkeigendommen te waarborgen, maken wij gebruik van beveiligingscamera&#39;s in onder andere de wacht- en ontvangstruimte.
                        </p>
                        <p className="mt-4">
                            Deze beelden worden uitsluitend bekeken bij calamiteiten en na maximaal <strong>4 weken onomkeerbaar en automatisch overschreven</strong> en vernietigd, tenzij er gegronde redenen (zoals daderonderzoek) zijn om ze langer te bewaren.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">7. Uw AVG-rechten en aanspreekpunt</h2>
                        <p>
                            Onder de AVG heeft u diverse rechten, zoals het recht om uw dossier in te zien, te corrigeren of te laten vernietigen. Heeft u vragen over deze rechten, over bovenstaand privacybeleid, of wilt u een wijziging doorvoeren?
                        </p>
                        <p className="mt-4">
                            U bent altijd welkom om hiervoor contact op te nemen met <strong>Marloes, Karin of Nick</strong>. Zij vormen samen, als maatschapsleden, uw laagdrempelige contactpunten inzake de algemene gegevensbescherming binnen Fysio Laren.
                        </p>
                    </section>

                </div>

                {/* Minimalist Contact Block */}
                <section className="bg-muted/30 p-8 rounded-xl mt-16 border border-foreground/5 text-foreground/80 leading-relaxed">
                    <h2 className="text-xl font-bold text-foreground mb-4">Inzage of vragen?</h2>
                    <p className="mb-8">
                        Neem bij vragen over uw dossier of uw recht op gegevensbescherming direct en laagdrempelig contact met ons op via onderstaande gegevens.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-8 text-sm">
                        <div>
                            <p className="font-bold text-foreground mb-1">Bezoekadres</p>
                            <p>Fysio Laren</p>
                            <p>Huenderstraat 3</p>
                            <p>7245 AK Laren (GLD)</p>
                        </div>
                        <div>
                            <p className="font-bold text-foreground mb-1">Privacy Contact</p>
                            <p>Contactpersonen: Marloes, Karin of Nick</p>
                            <p>E-mail: <a href="mailto:info@fysiolaren.nl" className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors">info@fysiolaren.nl</a></p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
