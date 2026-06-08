"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, ArrowRight, X, Calendar, Focus, MapPin, Plus } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Expanded data with more info
const team = [
    {
        name: "Marloes",
        role: "Praktijkeigenaar",
        image: "/foto Marloes.jpeg",
        bio: "Met passie voor het vak begeleidt Marloes haar patiënten naar een klachtenvrij leven. Ze combineert een brede kennis met een persoonlijke, no-nonsense aanpak die kenmerkend is voor Fysio Laren. Ze kijkt altijd verder dan alleen de symptomen om de echte oorzaak van uw klacht te vinden.",
        extendedBio: "Na haar master Manuele Therapie is Marloes zich verder gaan verdiepen in complexe wervelkolomklachten. Daarnaast gebruikt ze actieve revalidatie en dry needling als krachtige tools om snel resultaat te bereiken. Voor haar staat gelijkwaardigheid centraal: \"We doen dit écht samen.\"",
        specialties: ["Manuele therapie", "Dry Needling", "Wervelkolom specialist", "Hoofdpijnklachten", "Post-operatieve revalidatie"],
        big: "19924567804",
        education: "Master Manuele Therapie",
        quote: "Samen werken we aan een duurzaam herstel.",
        days: "Ma, Di, Do, Vr"
    },
    {
        name: "Karin",
        role: "Senior Fysiotherapeut",
        image: "/images/karin.png",
        bio: "Karin heeft jarenlange ervaring in de behandeling van complexe aandoeningen. Ze is gespecialiseerd in gerichte oedeemtherapie en begeleidt vrouwen rondom en na zwangerschappen.",
        extendedBio: "Door haar jarenlange ervaring weet Karin precies hoe de weefsels en het lymfesysteem in het lichaam reageren op trauma en operaties. Haar behandelingen zijn zacht, maar ontzettend effectief. Ze heeft tevens de specialisatie Bekkenfysiotherapie afgerond om een nog betere en bredere zorg rondom het bekkengebied te kunnen bieden.",
        specialties: ["Oedeemtherapie", "Bekkenfysio", "Zwangerschapsbegeleiding", "Littekenbehandeling", "Oncologische revalidatie"],
        big: "29934567804",
        education: "BSc Fysiotherapie, Oedeemtherapeut",
        quote: "Aandacht voor de mens achter de klacht.",
        days: "Di, Wo, Do"
    },
    {
        name: "Nick",
        role: "Sportfysiotherapeut",
        image: null,
        bio: "Als fanatiek sporter weet Nick hoe belangrijk een vlotte terugkeer is na een blessure. Hij helpt (top)sporters weer onbevangen het veld op met effectieve en actieve trajecten.",
        extendedBio: "Tijdens zijn Master deed Nick uitgebreid onderzoek naar voorste kruisband revalidatie. Hij combineert zware krachttraining naadloos met functionele veldtraining. Nick streeft altijd naar het allerhoogste niveau en daagt zijn patiënten uit om sterker uit een blessure te komen dan ze voorheen waren.",
        specialties: ["Sportrevalidatie", "Kruisband (VKB) revalidatie", "Knie-expert", "Echografie", "Shockwave therapie", "Return to Play testing"],
        big: "39944567804",
        education: "Master Sportfysiotherapie",
        quote: "Sterker terugkomen dan voorheen.",
        days: "Ma, Wo, Vr"
    },
    {
        name: "Ingrid",
        role: "Fysiotherapeut",
        image: null,
        bio: "Gespecialiseerd in de zorg voor ouderen en revalidatie na orthopedische operaties. Haar behandelingen kenmerken zich door geduld, positiviteit en oprechte aandacht.",
        extendedBio: "Ingrid focust zich sterk op zelfredzaamheid en valpreventie. Ze helpt patiënten na bijvoorbeeld een nieuwe knie of heup vol vertrouwen hun dagelijkse leven weer op te pakken. Haar zachte aanpak gecombineerd met gerichte oefeningen thuis zorgt voor een veilig en duurzaam herstel.",
        specialties: ["Geriatrie", "Nieuwe Heup/Knie revalidatie", "Valpreventie", "Medical Taping", "Valtraining", "Aan huis behandelingen"],
        big: "49954567804",
        education: "BSc Fysiotherapie",
        quote: "Zorg met aandacht en geduld.",
        days: "Ma, Di, Wo, Vr"
    }
];

export type TeamMember = typeof team[0];

export default function OnsTeamClient() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (selectedMember) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => { document.body.style.overflow = "auto"; };
    }, [selectedMember]);

    // Helper for placeholder circles
    const renderEmptyImage = (name: string, large = false) => (
        <div className="w-full h-full bg-blue-accent/5 flex flex-col items-center justify-center text-blue-accent/40">
            <GraduationCap size={large ? 80 : 48} className="mb-3 opacity-50" />
            <span className={cn("font-bold", large ? "text-6xl" : "text-2xl")}>{name[0]}</span>
        </div>
    );

    return (
        <div className="min-h-screen pt-32 pb-24 relative bg-background">

            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Introductie Sectie */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">Onze Specialisten.</h1>
                    <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-light">
                        Ons team bestaat uit ervaren therapeuten met ieder een eigen aandachtsgebied.<br className="hidden sm:block" />
                        Met aandacht, persoonlijk contact en korte lijnen werken we gericht aan uw herstel.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {team.map((member, i) => (
                        <div
                            key={member.name}
                            onClick={() => setSelectedMember(member)}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col border border-foreground/5"
                        >
                            {/* Top Image: Much larger now (Square) */}
                            <div className="relative aspect-[1/1] w-full shrink-0 overflow-hidden bg-primary/10">
                                {member.image ? (
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : renderEmptyImage(member.name)}
                            </div>

                            {/* Bottom: White Card Info (Tighter padding) */}
                            <div className="p-5 sm:p-6 pb-6 flex flex-col items-center text-center relative bg-white h-full">
                                <span className="text-blue-accent font-bold tracking-widest uppercase text-[10px] mb-1.5">
                                    {member.role}
                                </span>
                                <h3 className="text-xl font-bold text-foreground mb-2.5">
                                    {member.name}
                                </h3>

                                {/* Subtiele specialisaties weergave */}
                                <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mb-1">
                                    {member.specialties.slice(0, 2).map((spec, index) => (
                                        <div key={spec} className="flex items-center gap-2">
                                            <span className="text-foreground/60 text-xs font-medium">{spec}</span>
                                            {index === 0 && <span className="w-1 h-1 rounded-full bg-blue-accent/40" />}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto flex flex-col w-full gap-2 pt-1">
                                    <Link
                                        href="/afspraak-maken"
                                        onClick={(e) => { e.stopPropagation(); }}
                                        className="w-full py-2.5 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                                    >
                                        Afspraak <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <span className="text-foreground/50 text-[10px] font-semibold uppercase tracking-widest group-hover:text-blue-accent transition-colors pt-1">
                                        Meer info
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal / Expanded View */}
                <AnimatePresence>
                    {selectedMember && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedMember(null)}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                            />

                            {/* Modal Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl overflow-hidden z-10 flex flex-col lg:flex-row max-h-[90vh]"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="absolute top-4 right-4 z-50 p-2 bg-white/50 hover:bg-white backdrop-blur-md rounded-full shadow-sm text-foreground/50 hover:text-foreground transition-colors"
                                    aria-label="Sluit pop-up"
                                >
                                    <X size={24} />
                                </button>

                                {/* Left: Image pane */}
                                <div className="w-full lg:w-2/5 shrink-0 bg-primary/20 relative aspect-square lg:aspect-auto">
                                    {selectedMember.image ? (
                                        <Image src={selectedMember.image} alt={selectedMember.name} fill className="object-cover" />
                                    ) : renderEmptyImage(selectedMember.name, true)}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
                                    <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                                        <h2 className="text-4xl font-bold text-white mb-1">{selectedMember.name}</h2>
                                        <p className="text-blue-200 font-bold uppercase tracking-widest text-sm">{selectedMember.role}</p>
                                    </div>
                                </div>

                                {/* Right: Info pane */}
                                <div className="flex-1 overflow-y-auto p-6 lg:p-12 pb-24 lg:pb-12 bg-white relative hide-scrollbar">
                                    <div className="hidden lg:flex justify-between items-start mb-8 gap-4 border-b border-foreground/5 pb-8">
                                        <div>
                                            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">{selectedMember.name}</h2>
                                            <p className="text-blue-accent font-bold uppercase tracking-widest text-sm">{selectedMember.role}</p>
                                        </div>
                                        <Link
                                            href="/afspraak-maken"
                                            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a8a] text-white font-bold rounded-full hover:bg-[#1e40af] transition-colors shadow-md shadow-blue-accent/20"
                                        >
                                            Maak afspraak <ArrowRight size={18} />
                                        </Link>
                                    </div>

                                    <div className="lg:hidden mb-8 border-b border-foreground/5 pb-6">
                                        <Link
                                            href="/afspraak-maken"
                                            className="w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 bg-[#1e3a8a] text-white font-bold rounded-full hover:bg-[#1e40af] transition-colors shadow-md shadow-blue-accent/20"
                                        >
                                            Maak een afspraak bij {selectedMember.name} <ArrowRight size={18} />
                                        </Link>
                                    </div>

                                    <div className="prose prose-lg text-foreground/80 mb-10 max-w-none">
                                        <p className="text-xl leading-relaxed font-medium mb-6 italic text-foreground/90 border-l-4 border-blue-accent pl-4">&quot;{selectedMember.quote}&quot;</p>
                                        <p className="mb-4">{selectedMember.bio}</p>
                                        <p>{selectedMember.extendedBio}</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                        {/* Specialties List */}
                                        <div className="bg-muted/50 p-6 rounded-3xl border border-foreground/5">
                                            <div className="flex items-center gap-3 mb-4 text-foreground font-bold">
                                                <Focus className="text-blue-accent" size={20} />
                                                <h4>Specialisaties</h4>
                                            </div>
                                            <ul className="space-y-2">
                                                {selectedMember.specialties.map(spec => (
                                                    <li key={spec} className="flex items-start gap-3 text-sm text-foreground/70 leading-relaxed font-medium">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-accent/60 mt-1.5 shrink-0" />
                                                        {spec}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Practical Info List */}
                                        <div className="bg-muted/50 p-6 rounded-3xl border border-foreground/5 flex flex-col gap-6">
                                            <div>
                                                <div className="flex items-center gap-3 mb-1 text-foreground font-bold">
                                                    <GraduationCap className="text-blue-accent" size={18} />
                                                    <h4>Opleiding</h4>
                                                </div>
                                                <p className="text-sm text-foreground/70 font-medium">{selectedMember.education}</p>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-3 mb-1 text-foreground font-bold">
                                                    <Calendar className="text-blue-accent" size={18} />
                                                    <h4>Aanwezigheid</h4>
                                                </div>
                                                <p className="text-sm text-foreground/70 font-medium">{selectedMember.days}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-foreground/40 font-mono tracking-widest uppercase mt-2">BIG Register: {selectedMember.big}</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
}
