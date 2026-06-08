import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Klachtenregeling | Fysio Laren',
    description: 'Bespreek uw opmerkingen of klachten veilig en in vertrouwen met ons. Wij zijn aangesloten bij de SKGE en handelen conform de Wkkgz.',
};

export default function Klachtenregeling() {
    return (
        <div className="pt-32 pb-24 px-6 md:px-12 bg-background min-h-screen">
            <div className="max-w-3xl mx-auto font-sans">

                {/* Header */}
                <h1 className="text-4xl font-bold mb-6 text-foreground">Klachtenregeling</h1>
                <p className="text-lg text-foreground/80 mb-12">
                    Binnen Fysio Laren vinden we openheid, vertrouwen en kwalitatieve zorg erg belangrijk. Toch kan het voorkomen dat u een opmerking of klacht heeft over uw behandeling of onze praktijkvoering. We gaan hierover graag met u in gesprek.
                </p>

                {/* Text Content */}
                <div className="space-y-10 text-foreground/80 leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">1. Blijf er niet mee lopen</h2>
                        <p>
                            Mocht de behandeling of de bejegening anders verlopen dan u had verwacht, dan hopen wij dat u dit met ons deelt. Vaak berust een klacht op een misverstand en kan een verhelderend gesprek al veel oplossen.
                        </p>
                        <p className="mt-4">
                            De snelste manier om samen tot een oplossing te komen, is door uw klacht <strong>direct te bespreken met uw behandelend therapeut</strong>. Vindt u dit lastig of komt u er samen niet uit? Dan kunt u altijd terecht bij <span className="font-semibold text-foreground">Marloes, Karin of Nick</span>. Zij staan klaar om objectief met u mee te kijken en te luisteren naar uw verhaal.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">2. Onafhankelijke klachtenfunctionaris</h2>
                        <p>
                            Komen we er samen niet uit, of vindt u het prettiger om uw klacht via een onafhankelijke partij te laten verlopen? Dan kunt u kosteloos gebruikmaken van een onafhankelijke klachtenfunctionaris.
                        </p>
                        <p className="mt-4">
                            Fysio Laren is aangesloten bij de <a href="https://www.skge.nl/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors font-medium">Stichting Klachten en Geschillen Eerstelijnszorg (SKGE)</a>. Zij leveren deskundige en onafhankelijke klachtenfunctionarissen die u kunnen adviseren of bemiddelen bij het vinden van een oplossing. Mocht de bemiddeling onverhoopt niet tot het gewenste resultaat leiden, dan biedt de SKGE tevens toegang tot een erkende geschilleninstantie.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">Kwaliteit &amp; Wetgeving</h2>
                        <p>
                            Wij hechten veel waarde aan een veilige en professionele omgeving voor onze patiënten. Onze praktijk handelt daarom volledig conform de wetgeving en richtlijnen van de <strong>Wet kwaliteit, klachten en geschillen zorg (Wkkgz)</strong>.
                        </p>
                        <p className="mt-4">
                            Onze therapeuten zijn uiteraard <span className="font-semibold text-foreground">BIG-geregistreerd</span> en actief aangesloten bij het bevoegd kwaliteitsregister en de landelijke beroepsvereniging. Dit waarborgt dat we continu toetsen en werken aan de hoogste standaard binnen de zorg.
                        </p>
                    </section>

                </div>

                {/* Minimalist Contact Block */}
                <section className="bg-muted/30 p-8 rounded-xl mt-16 border border-foreground/5 text-foreground/80 leading-relaxed">
                    <h2 className="text-xl font-bold text-foreground mb-4">Praktijkgegevens voor contact</h2>
                    <p className="mb-8">
                        Heeft u vragen, wilt u een melding maken of heeft u behoefte aan nader overleg? Neem dan contact met ons op. <strong>Wij streven ernaar om binnen 5 werkdagen inhoudelijk op uw bericht te reageren.</strong>
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
