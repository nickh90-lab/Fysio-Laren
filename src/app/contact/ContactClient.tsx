"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight } from "lucide-react";

const MapEmbed = ({ height = "h-[400px]", rounded = "rounded-[2.5rem]" }) => (
    <div className={`w-full ${height} overflow-hidden shadow-xl border border-foreground/5 ${rounded} relative z-10 bg-white/50 backdrop-blur-sm`}>
        <iframe
            src="https://maps.google.com/maps?q=Huenderstraat%203,%207245%20BG%20Laren&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
);

const FormFields = () => (
    <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/60 ml-1 mb-2 block">Naam</label>
                <input type="text" placeholder="Uw naam" className="w-full px-6 py-4 rounded-2xl bg-background border border-foreground/10 focus:border-blue-accent focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-accent/10 transition-all text-foreground" />
            </div>
            <div>
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/60 ml-1 mb-2 block">Telefoon</label>
                <input type="tel" placeholder="Uw telefoonnummer" className="w-full px-6 py-4 rounded-2xl bg-background border border-foreground/10 focus:border-blue-accent focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-accent/10 transition-all text-foreground" />
            </div>
        </div>
        <div>
            <label className="text-xs font-bold uppercase tracking-widest text-foreground/60 ml-1 mb-2 block">E-mailadres</label>
            <input type="email" placeholder="uw@email.nl" className="w-full px-6 py-4 rounded-2xl bg-background border border-foreground/10 focus:border-blue-accent focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-accent/10 transition-all text-foreground" />
        </div>
        <div>
            <label className="text-xs font-bold uppercase tracking-widest text-foreground/60 ml-1 mb-2 block">Bericht of Vraag</label>
            <textarea rows={4} placeholder="Waar kunnen we u mee helpen?" className="w-full px-6 py-4 rounded-2xl bg-background border border-foreground/10 focus:border-blue-accent focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-accent/10 transition-all resize-none text-foreground"></textarea>
        </div>
        <button type="button" className="w-full bg-[#1e3a8a] text-white py-5 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-[#1e40af] transition-all shadow-lg shadow-blue-accent/20 hover:scale-[1.02]">
            <span>Bericht verzenden</span>
            <Send size={18} />
        </button>
    </form>
);

export default function ContactClient() {
    const contactInfo = {
        phone: "035 123 4567",
        email: "info@fysiolaren.nl",
        address: (
            <>
                Huenderstraat 3<br />
                7245 BG Laren
            </>
        ),
    };

    return (
        <div className="bg-background min-h-screen pt-32 pb-24 px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start mb-20">

                    {/* Left Side: Info */}
                    <div className="pt-2 lg:pt-8">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Contact</h1>
                        <p className="text-lg text-foreground/70 mb-12 leading-relaxed max-w-md">
                            Heeft u een vraag over een behandeling, uw vergoeding of wilt u direct een afspraak inplannen? We horen graag van u.
                        </p>

                        <div className="space-y-8 mb-12">
                            {[
                                { icon: Phone, title: "Telefoon", val: contactInfo.phone },
                                { icon: Mail, title: "E-mail", val: contactInfo.email },
                                { icon: MapPin, title: "Adres", val: contactInfo.address },
                            ].map((item) => (
                                <div key={item.title} className="flex gap-6 group items-center">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-blue-accent group-hover:bg-blue-accent group-hover:text-white transition-colors shrink-0">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/50 mb-1">{item.title}</h4>
                                        <p className="text-xl font-bold text-foreground leading-snug">{item.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-sm border border-foreground/5">
                        <h3 className="text-2xl font-bold mb-8">Stuur een bericht</h3>
                        <FormFields />
                    </div>
                </div>

                {/* Bottom: Map */}
                <div className="px-6 md:px-12 bg-primary/20 py-12 md:py-20 rounded-[3.5rem] relative overflow-hidden">
                    <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/3">
                            <h3 className="text-3xl font-bold mb-6">Onze Locatie</h3>
                            <p className="text-foreground/70 mb-6">U vindt ons centraal in Laren, met gratis parkeergelegenheid direct voor de deur.</p>
                            <a href="#" className="inline-flex items-center text-blue-accent font-bold hover:gap-2 transition-all">
                                Plan uw route via Google Maps <ArrowRight size={18} className="ml-2" />
                            </a>
                        </div>
                        <div className="w-full md:w-2/3">
                            <MapEmbed height="h-[350px]" rounded="rounded-3xl" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
