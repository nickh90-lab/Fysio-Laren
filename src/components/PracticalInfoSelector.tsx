import React from "react";
import { CreditCard, FileSignature, Users, Network } from "lucide-react";

export default function PracticalInfoSelector() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-white flex flex-col items-center min-h-[600px]">
            <div className="max-w-7xl w-full">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                    <div className="lg:w-1/3 pt-4 sticky top-32">
                        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">Goed om te weten</h2>
                        <p className="text-foreground/70 text-lg leading-relaxed">
                            Korte lijnen, duidelijke vergoedingen en bewezen samenwerkingen. Hieronder vindt u belangrijke praktische en kwalitatieve informatie over onze werkwijze en contractering, zodat uw behandeltraject direct soepel van start kan gaan.
                        </p>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        <div className="flex flex-col gap-4 group">
                            <div className="w-14 h-14 bg-muted text-blue-accent flex items-center justify-center rounded-2xl group-hover:bg-primary/20 group-hover:scale-105 transition-all">
                                <CreditCard size={28} strokeWidth={2} />
                            </div>
                            <h4 className="font-bold text-foreground text-2xl leading-snug">Contracten met verzekeraars</h4>
                            <p className="text-foreground/70 leading-relaxed text-lg">
                                Wij hebben contracten met nagenoeg alle zorgverzekeraars in Nederland. Bekijk uw pakket om te zien of fysiotherapie voor u vergoed wordt.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 group">
                            <div className="w-14 h-14 bg-muted text-blue-accent flex items-center justify-center rounded-2xl group-hover:bg-primary/20 group-hover:scale-105 transition-all">
                                <FileSignature size={28} strokeWidth={2} />
                            </div>
                            <h4 className="font-bold text-foreground text-2xl leading-snug">Geen verwijzing nodig</h4>
                            <p className="text-foreground/70 leading-relaxed text-lg">
                                Ook zonder verwijzing bent u welkom bij ons. U heeft tegenwoordig geen verwijsbrief meer nodig van uw arts of specialist om een afspraak te maken.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 group">
                            <div className="w-14 h-14 bg-muted text-blue-accent flex items-center justify-center rounded-2xl group-hover:bg-primary/20 group-hover:scale-105 transition-all">
                                <Users size={28} strokeWidth={2} />
                            </div>
                            <h4 className="font-bold text-foreground text-2xl leading-snug">Samenwerking</h4>
                            <p className="text-foreground/70 leading-relaxed text-lg">
                                Wij onderhouden nauwe banden met huisartsen, specialisten en overige verwijzers in de omgeving.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 group">
                            <div className="w-14 h-14 bg-muted text-blue-accent flex items-center justify-center rounded-2xl group-hover:bg-primary/20 group-hover:scale-105 transition-all">
                                <Network size={28} strokeWidth={2} />
                            </div>
                            <h4 className="font-bold text-foreground text-2xl leading-snug">Netwerk</h4>
                            <p className="text-foreground/70 leading-relaxed text-lg">
                                Wij zijn aangesloten bij het KNGF, Chronisch ZorgNet, Reumanet, ParkinsonNet en het MS-centrum Stedendriehoek.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
