"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Fysiotherapie/Manueel therapie", href: "/fysiotherapie" },
    { name: "Sportis", href: "/sportis" },
    { name: "Ons team", href: "/ons-team" },
    { name: "De praktijk", href: "/de-praktijk" },
    { name: "Tarieven", href: "/tarieven" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        handleScroll(); // Check initial state
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Sluit menu bij navigatie
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out",
                isScrolled ? "py-3 px-4 md:py-4 md:px-12" : "py-5 px-4 md:py-6 md:px-12"
            )}
        >
            {/* Sticky background layer (visible only when scrolled) */}
            <div
                className={cn(
                    "absolute inset-0 bg-white/95 backdrop-blur-md shadow-md border-b border-black/5 transition-all duration-300",
                    isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
            />

            <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10 h-full">
                {/* User Logo / Branding */}
                <Link href="/" className="flex items-center relative z-20 group" onClick={closeMenu}>
                    <div className={cn(
                        "relative h-12 md:h-16 w-56 md:w-72 transition-all duration-300 group-hover:opacity-80 origin-left pointer-events-none",
                        isScrolled 
                            ? "scale-[1.4] md:scale-[2.0]" 
                            : "scale-[1.8] md:scale-[2.6]"
                    )}>
                        <Image 
                            src="/Logo%20transparant%20op%20wit.svg" 
                            alt="Fysio Laren Logo" 
                            fill 
                            className="object-contain object-left pointer-events-none" 
                            priority 
                            unoptimized 
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8 relative z-30">
                    {navLinks.slice(0, 4).map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn("text-sm font-bold transition-colors text-foreground/80 hover:text-foreground")}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Informatie Dropdown */}
                    <div className="relative group/dropdown py-4">
                        <button className="flex items-center gap-1 text-sm font-bold transition-colors text-foreground/80 hover:text-foreground">
                            Informatie
                            <ChevronDown size={14} className="opacity-70 group-hover/dropdown:rotate-180 transition-transform duration-300" />
                        </button>

                        <div className="absolute top-12 left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform group-hover/dropdown:translate-y-0 translate-y-2">
                            <div className="bg-white rounded-2xl shadow-2xl border border-black/5 py-3 w-48 relative before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white">
                                {navLinks.slice(4).map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={closeMenu}
                                        className="block px-5 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-black/5 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Header Actions */}
                <div className="flex items-center gap-2 md:gap-3 relative z-30">
                    {/* Bel Ons CTA */}
                    <a
                        href="tel:0351234567"
                        className="flex items-center justify-center gap-2 text-foreground/90 hover:text-foreground transition-all bg-black/5 hover:bg-black/10 rounded-full w-10 h-10 md:w-auto md:h-auto md:px-5 md:py-2 border border-black/5 shadow-sm"
                        title="Bel Fysio Laren direct op"
                    >
                        <Phone size={18} />
                        <span className="hidden md:block font-bold text-sm tracking-wide">035 123 45 67</span>
                    </a>

                    {/* Afspraak Maken CTA - Solid Blue */}
                    <Link href="/afspraak-maken" onClick={closeMenu}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-accent text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold shadow-md hover:bg-blue-accent/90 transition-all font-sans"
                        >
                            Afspraak maken
                        </motion.div>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden flex items-center justify-center w-10 h-10 text-foreground bg-black/5 rounded-full border border-black/10 transition-colors hover:bg-black/10"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-full left-0 right-0 bg-white border-t border-black/5 shadow-2xl overflow-hidden lg:hidden"
                    >
                        <nav className="flex flex-col p-6 space-y-1">
                            {navLinks.slice(0, 4).map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={closeMenu}
                                        className="flex items-center justify-between py-4 px-4 text-lg font-bold text-foreground/80 hover:text-foreground hover:bg-black/5 rounded-xl transition-all"
                                    >
                                        {link.name}
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Informatie Dropdown Mobile */}
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 4 * 0.05 }}
                                className="px-4 py-2"
                            >
                                <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-2 mt-2">Informatie</p>
                                <div className="space-y-1 pl-2 border-l border-black/10">
                                    {navLinks.slice(4).map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={closeMenu}
                                            className="block py-3 px-4 font-medium text-foreground/70 hover:text-foreground hover:bg-black/5 rounded-xl transition-all"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>

                            <div className="pt-6 mt-4 border-t border-black/5 flex flex-col gap-4">
                                <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest px-4">Contactgegevens</p>
                                <a href="tel:0351234567" className="flex items-center gap-3 px-4 py-2 text-foreground/80 hover:text-foreground transition-colors">
                                    <Phone size={18} className="text-blue-accent" />
                                    <span className="font-bold">035 123 45 67</span>
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
