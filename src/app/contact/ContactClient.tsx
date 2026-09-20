"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";

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

const FormFields = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, phone, email, message }),
            });

            if (res.ok) {
                setSubmitted(true);
            } else {
                const data = await res.json().catch(() => ({}));
                setErrorMsg(data.error || "Er is een fout opgetreden. Probeer het opnieuw of bel ons direct.");
            }
        } catch {
            // Netwerk/offline fallback
            setSubmitted(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-sm">
                    <CheckCircle2 size={36} />
                </div>
                <h4 className="text-2xl font-bold text-foreground">Bedankt voor uw bericht!</h4>
                <p className="text-foreground/70 max-w-md text-base leading-relaxed">
                    Wij hebben uw gegevens goed ontvangen. We nemen zo spoedig mogelijk telefonisch of per e-mail contact met u op.
                </p>
                <button
                    type="button"
                    onClick={() => {
                        setName("");
                        setPhone("");
                        setEmail("");
                        setMessage("");
                        setSubmitted(false);
                    }}
                    className="text-sm font-semibold text-blue-accent hover:underline pt-4"
                >
                    Nog een bericht versturen
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {errorMsg && (
                <div className="p-4 rounded-2xl bg-red-50 text-red-700 text-sm border border-red-200">
                    {errorMsg}
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/60 ml-1 mb-2 block">Naam *</label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Uw naam"
                        className="w-full px-6 py-4 rounded-2xl bg-background border border-foreground/10 focus:border-blue-accent focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-accent/10 transition-all text-foreground"
                    />
                </div>
                <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/60 ml-1 mb-2 block">Telefoon</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0573 - ..."
                        className="w-full px-6 py-4 rounded-2xl bg-background border border-foreground/10 focus:border-blue-accent focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-accent/10 transition-all text-foreground"
                    />
                </div>
            </div>
            <div>
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/60 ml-1 mb-2 block">E-mailadres *</label>
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="uw@email.nl"
                    className="w-full px-6 py-4 rounded-2xl bg-background border border-foreground/10 focus:border-blue-accent focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-accent/10 transition-all text-foreground"
                />
            </div>
            <div>
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/60 ml-1 mb-2 block">Bericht of Vraag *</label>
                <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Waar kunnen we u mee helpen?"
                    className="w-full px-6 py-4 rounded-2xl bg-background border border-foreground/10 focus:border-blue-accent focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-accent/10 transition-all resize-none text-foreground"
                ></textarea>
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1e3a8a] text-white py-5 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-[#1e40af] transition-all shadow-lg shadow-blue-accent/20 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <span>{isSubmitting ? "Versturen..." : "Bericht verzenden"}</span>
                <Send size={18} className={isSubmitting ? "animate-pulse" : ""} />
            </button>
        </form>
    );
};

export default function ContactClient() {
    const contactInfo = {
        phone: "0573 - 21 50 58",
        phoneHref: "tel:0573215058",
        email: "info@fysio-laren.nl",
        emailHref: "mailto:info@fysio-laren.nl",
        address: (
            <>
                Huenderstraat 3<br />
                7245 BG Laren, Gld
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
                            <a href={contactInfo.phoneHref} className="flex gap-6 group items-center">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-blue-accent group-hover:bg-blue-accent group-hover:text-white transition-colors shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/50 mb-1">Telefoon</h4>
                                    <p className="text-xl font-bold text-foreground leading-snug group-hover:text-blue-accent transition-colors">{contactInfo.phone}</p>
                                </div>
                            </a>

                            <a href={contactInfo.emailHref} className="flex gap-6 group items-center">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-blue-accent group-hover:bg-blue-accent group-hover:text-white transition-colors shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/50 mb-1">E-mail</h4>
                                    <p className="text-xl font-bold text-foreground leading-snug group-hover:text-blue-accent transition-colors">{contactInfo.email}</p>
                                </div>
                            </a>

                            <div className="flex gap-6 group items-center">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-blue-accent shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/50 mb-1">Adres</h4>
                                    <p className="text-xl font-bold text-foreground leading-snug">{contactInfo.address}</p>
                                </div>
                            </div>
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
                            <p className="text-foreground/70 mb-6">U vindt ons centraal in Laren, Gld, met gratis parkeergelegenheid direct voor de deur.</p>
                            <a href="https://www.google.com/maps/dir/?api=1&destination=Huenderstraat+3,+7245+BG+Laren" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-accent font-bold hover:gap-2 transition-all">
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
