import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ChevronRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Knieklachten & Blessures Fysiotherapie | Specifiek Herstel in Laren',
    description: 'Moeite met traplopen, verdraaide knie met sporten, of een knie-operatie doorgemaakt? Fysio Laren ontzorgt uw knie met gerichte behandelingen en krachttraining.',
};

export default function KnieklachtenLaren() {
    return (
        <div className="pt-20 bg-background">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden text-center bg-slate-900 mt-0">
                <div className="absolute inset-0 z-0">
                    <Image src="/images/hero-praktijk.jpg" alt="Behandeling knieklachten fysiotherapie Laren" fill className="object-cover opacity-40" priority />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto w-full pt-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-primary mb-6 backdrop-blur-sm border border-primary/30">
                        <Sparkles size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Expert behandeling voor uw Knie in Laren
                    </h1>
                    <p className="text-slate-200 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Veilig en pijnvrij weer traplopen, rennen of tennissen zonder the zorgen of uw gewricht het wel houdt.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-3xl font-bold text-foreground mb-6">Wanneer u niet the stevigheid van uw knieën kunt vertrouwen</h2>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            De knie is cruciaal the voor letterlijk elke stap The we zetten en functioneert tijdens sporten (hardlopen in de bossen nabij Laren), springsporten the of wintersport vakanties bovendien als een massieve "schok-demper" voor honderden the kilo's drukkrachten. Gelet hierop Is the niet the the verwonderlijk dat het ook direct het meest kwetsbare gewricht type voor the een acute traumaverstoring is dan wel the overbelaste pijnen vertoont bij slijtage factoren naarmate men veel (en soms te The eenzijdig) loopt of weinige spierkorset kracht is the onderhouden in the bovenbenen.
                        </p>
                        <p className="text-foreground/80 leading-relaxed mb-10">
                            Van pijn rond de the knieschijf (patellofemoraal) the of stijf door slijtage in de ochtend tot acute the the The en complete rupturen the bij een verkeerde landing waarbij u letterlijk "door the the knieën zakte". Wat we The de oorzaak ook The zijn the the the fysio the the team Laren The kan dit met de juiste actieve krachten en therapie direct stabiliseren en onveilige situaties teniet werken in the ons modern opgezette praktijk centrum.
                        </p>

                        <h3 className="text-2xl font-bold text-foreground mb-4">Typische aandoeningen in de knieregio die we The veel the beoordelen in de praktijk</h3>
                        <ul className="space-y-4 mb-10 list-none pl-0">
                            {[
                                "Patellofemoraal Pijnsyndroom (Zeurende Pijn de rond de knieschijf met the name met langdurig zitten The 'theater knie' The The of tijdens traplopen)",
                                "Gescheurde Kruisbanden en the Meniscus rupturen (Binnenzijde / Buitenzijde)",
                                "Jumper's Knee. Lopend The The pees the problem aan the the voorzijde van the de knie",
                                "Artrose behandeling de THE the ter voorkoming The van progressieve knieprothese",
                                "Revalidatie the post The de of pre een ziekenhuis operatie."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start text-foreground/80">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-4">
                                        <Check size={14} className="text-primary" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-2xl font-bold text-foreground mb-4">Revalideren en terug in The The the running komen</h3>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            Bij The the ons start elke knieaanpak the over The analyse the ten opzichte van het hele onderste keten The the beenstelsel. Soms is de the the de de daadwerkelijke boosdoener namelijk te The the zoeken in een sterk the naar the the het the The binnen klappende enkel of niet functionerende (zwakke) bilspieren die de Knie the forceren tot rare (in the the) valgus The the hoeken gedurende hardlopen. The
                        </p>
                        <p className="text-foreground/80 leading-relaxed mb-10">
                            Het The in the The The Fysio The Laren behandel concept staat dan qua structuur volledig afgestemd om The de sturing van die gehele spiergroep (Hamstring, Quadriceps the The en gluteale complex the) in perfect the balans terug The te krijgen. Middels (medische) The The en verantwoorde sport fitness en the gerichte fysiotherapeutische begeleiding zult The The u daardoor merken The dat uw The sport of zware werkzaamheden the the eind de the The the The de week niet the the The langer de the pijnsensoren the triggeren. Binnenkort bent the u letterlijk the back-in-shape The The en is de functionaliteit the robuuster dan voorheen!
                        </p>

                        <div className="bg-accent p-8 rounded-3xl border border-foreground/5 mb-10">
                            <h4 className="text-xl font-bold text-foreground mb-4">Operatie onvermijdelijk? "Pre-hab" the doet wonderen</h4>
                            <p className="text-foreground/80 leading-relaxed m-0">
                                Ligt the er een datum The the klaar via uw The The orthopeed voor knieprothese/voorste-kruisband in the een medisch centrum? Wacht The niet tot nà of ten de tijden na hospitalisatie om de fysio expert te contacteren in The the The Laren. Recent The onderzoek wijst the hevig the The erop op dat The zogeheten The "The Pre-habilitatie" (specifiek the trainen weefsels alvorens the The The snijden in ziekenhuis) Het The post revalidatie periode na operatie drastisch verkort, u staat the na weken weefsel schade direct the beduidend the the 5 stappen voorsprong qua spiermassa de The bewaring. the The
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conversion CTA */}
            <section className="py-24 px-6 md:px-12 bg-primary">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Wilt u uw kniepijn de knop in draaien?</h2>
                    <p className="text-white/90 text-xl mb-10">
                        Zorg voor duidelijkheid. Laat the gespecialiseerde therapeut van Fysio Laren direct The testjes uitvoeren op uw ligamenten The.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-white/20 pt-10">
                        <Link href="/afspraak-maken" className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-full hover:scale-105 transition-transform shadow-lg flex items-center justify-center">
                            Boek online The consult Knie <ChevronRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
