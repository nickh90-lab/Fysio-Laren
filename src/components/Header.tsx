"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const mainNavLinks = [
    { name: "Home", href: "/" },
    { name: "Fysiotherapie", href: "/fysiotherapie" },
];

const teamLink = { name: "Ons team", href: "/ons-team" };

const infoLinks = [
    { name: "De praktijk", href: "/de-praktijk" },
    { name: "Openingstijden", href: "/openingstijden" },
    { name: "Contact", href: "/contact" },
    { name: "Tarieven", href: "/tarieven" },
];

export function HeaderBase({ variant }: { variant: 'light' | 'dark' | 'blue' }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
    const [isGespecialiseerdOpen, setIsGespecialiseerdOpen] = useState(false);
    const [isNeuroOpen, setIsNeuroOpen] = useState(false);

    const toggleMobileSubmenu = (name: string) => {
        setOpenMobileSubmenu(prev => prev === name ? null : name);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        handleScroll(); // Check initial state
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Sluit menu bij navigatie
    const closeMenu = () => {
        setIsMobileMenuOpen(false);
        setOpenMobileSubmenu(null);
        setIsGespecialiseerdOpen(false);
        setIsNeuroOpen(false);
    };

    return (
        <header className="fixed z-[100] top-0 left-0 right-0">
            <div
                className={cn(
                    "transition-all duration-500 ease-out relative",
                    isScrolled 
                        ? "py-3 px-4 md:py-3.5 md:px-6 xl:px-12"
                        : "py-4 px-4 md:py-5 md:px-6 xl:px-12"
                )}
            >
            {/* Background layer */}
            <div
                className={cn(
                    "absolute inset-0 backdrop-blur-md transition-all duration-500",
                    variant === 'light' && (isScrolled 
                        ? "bg-white/95 shadow-2xs border-b border-black/5" 
                        : "bg-white/95 shadow-2xs border-b border-black/5"),
                    variant === 'dark' && (isScrolled 
                        ? "bg-foreground/95 shadow-2xl border-b border-white/5" 
                        : "bg-foreground/95 shadow-sm border-b border-white/10"),
                    variant === 'blue' && (isScrolled 
                        ? "bg-blue-accent/95 shadow-2xl border-b border-white/10" 
                        : "bg-blue-accent/95 shadow-sm border-b border-white/20")
                )}
            />

            <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10 h-full gap-2 xl:gap-4">
                {/* Logo & Branding - Optie 4 (Logo + Subtiele Typografische Descriptor) */}
                <Link href="/" className="flex items-center relative z-20 shrink-0" onClick={closeMenu}>
                    <div className="flex items-center">
                        <div className={cn(
                            "relative transition-all duration-300 shrink-0 aspect-[385/210]",
                            isScrolled 
                                ? "h-10 sm:h-11 md:h-12 xl:h-[52px]" 
                                : "h-12 sm:h-14 md:h-16 xl:h-[68px]"
                        )}>
                            <Image 
                                src={variant !== 'light' ? "/Logo_cropped_blauw.svg" : "/Logo_cropped_wit.svg"} 
                                alt="Fysio Laren Logo" 
                                fill 
                                className="object-contain object-left" 
                                priority 
                                unoptimized 
                            />
                        </div>
                        <div className={cn(
                            "hidden sm:flex items-center pl-3 sm:pl-3.5 ml-3 sm:ml-3.5 border-l transition-all duration-300 text-left shrink-0",
                            variant === 'light' ? "border-foreground/15" : "border-white/20"
                        )}>
                            <span className={cn(
                                "font-bold uppercase tracking-[0.22em] transition-all duration-300 leading-none",
                                isScrolled ? "text-[10px] md:text-[11px]" : "text-[11px] md:text-[12.5px]",
                                variant === 'light' ? "text-blue-accent" : "text-white"
                            )}>
                                Gelderland
                            </span>
                        </div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-3.5 xl:space-x-7 relative z-30 shrink-0">
                    {mainNavLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-bold transition-colors relative py-2 whitespace-nowrap",
                                variant === 'light' ? "text-foreground/90 hover:text-foreground" : "text-white/90 hover:text-white",
                                "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left",
                                variant !== 'light' && "after:bg-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Beweeggroepen - Directe link (zonder dropdown) */}
                    <Link
                        href="/gespecialiseerde-groepstraining"
                        onClick={closeMenu}
                        className={cn(
                            "text-sm font-bold transition-colors relative py-2 whitespace-nowrap shrink-0",
                            variant === 'light' ? "text-foreground/90 hover:text-foreground" : "text-white/90 hover:text-white",
                            "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left",
                            variant !== 'light' && "after:bg-white"
                        )}
                    >
                        Beweeggroepen
                    </Link>

                    {/* Ons team */}
                    <Link
                        href={teamLink.href}
                        className={cn(
                            "text-sm font-bold transition-colors relative py-2 whitespace-nowrap shrink-0",
                            variant === 'light' ? "text-foreground/90 hover:text-foreground" : "text-white/90 hover:text-white",
                            "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left",
                            variant !== 'light' && "after:bg-white"
                        )}
                    >
                        {teamLink.name}
                    </Link>

                    {/* Informatie Dropdown */}
                    <div className="relative group/dropdown py-4 shrink-0">
                        <button className={cn(
                            "flex items-center gap-1 text-sm font-bold transition-colors cursor-pointer whitespace-nowrap",
                            variant === 'light' ? "text-foreground/90 hover:text-foreground" : "text-white/90 hover:text-white"
                        )}>
                            Informatie
                            <ChevronDown size={14} className="opacity-70 group-hover/dropdown:rotate-180 transition-transform duration-300" />
                        </button>

                        <div className="absolute top-12 left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform group-hover/dropdown:translate-y-0 translate-y-2">
                            <div className={cn(
                                "rounded-2xl shadow-2xl py-3 w-48 relative before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent transition-colors duration-300",
                                variant === 'light' ? "bg-white border border-black/5 before:border-b-white" : "bg-[#1E293B] border border-white/10 before:border-b-[#1E293B]"
                            )}>
                                {infoLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={closeMenu}
                                        className={cn(
                                            "block px-5 py-2.5 text-sm font-medium transition-colors whitespace-nowrap",
                                            variant === 'light' ? "text-foreground/80 hover:text-foreground hover:bg-black/5" : "text-white/80 hover:text-white hover:bg-white/5"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Header Actions */}
                <div className="flex items-center gap-2 md:gap-3 relative z-30 shrink-0">
                    {/* Bel Ons CTA */}
                    <a
                        href="tel:0573215058"
                        className={cn(
                            "flex items-center justify-center gap-2 transition-all rounded-full w-10 h-10 md:w-auto md:h-auto px-3 xl:px-4 py-2 border shadow-sm shrink-0 whitespace-nowrap",
                            variant === 'light' 
                                ? "text-foreground/90 hover:text-foreground bg-black/5 hover:bg-black/10 border-black/5"
                                : "text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border-white/10"
                        )}
                        title="Bel Fysio Laren direct op"
                    >
                        <Phone size={16} className="shrink-0 text-blue-accent" />
                        <span className="hidden md:inline font-bold text-xs xl:text-sm tracking-wide whitespace-nowrap">0573 - 21 50 58</span>
                    </a>

                    {/* Afspraak Maken CTA - Solid Blue / Solid White */}
                    <Link href="/afspraak-maken" onClick={closeMenu} className="shrink-0">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={cn(
                                "px-3.5 py-2 xl:px-5 xl:py-2.5 rounded-full text-xs xl:text-sm font-bold shadow-md transition-all font-sans shrink-0 whitespace-nowrap",
                                variant !== 'blue' 
                                    ? "bg-blue-accent text-white hover:bg-blue-accent/90" 
                                    : "bg-white text-blue-accent hover:bg-white/90"
                            )}
                        >
                            Afspraak maken
                        </motion.div>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={cn(
                            "lg:hidden flex items-center justify-center w-10 h-10 rounded-full border transition-colors",
                            variant === 'light' 
                                ? "text-foreground bg-black/5 border-black/10 hover:bg-black/10" 
                                : "text-white bg-white/10 border-white/20 hover:bg-white/20"
                        )}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            </div>


            {/* Mobile Menu Overlay - Rustig & Georganiseerd, exact zoals PC */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-t border-black/5 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto lg:hidden"
                    >
                        <nav className="p-4 sm:p-6 space-y-1.5 max-w-lg mx-auto">
                            {/* 1. Home */}
                            <Link
                                href="/"
                                onClick={closeMenu}
                                className="flex items-center justify-between py-3 px-4 text-base font-bold text-foreground/85 hover:text-foreground hover:bg-black/5 rounded-2xl transition-all"
                            >
                                <span>Home</span>
                            </Link>

                            {/* 2. Fysiotherapie */}
                            <Link
                                href="/fysiotherapie"
                                onClick={closeMenu}
                                className="flex items-center justify-between py-3 px-4 text-base font-bold text-foreground/85 hover:text-foreground hover:bg-black/5 rounded-2xl transition-all"
                            >
                                <span>Fysiotherapie</span>
                            </Link>

                            {/* 3. Beweeggroepen (Inklapbaar menu) */}
                            <div className="rounded-2xl transition-colors">
                                <button
                                    onClick={() => toggleMobileSubmenu("groepen")}
                                    className={cn(
                                        "w-full flex items-center justify-between py-3 px-4 text-base font-bold transition-all rounded-2xl cursor-pointer",
                                        openMobileSubmenu === "groepen" 
                                            ? "bg-black/5 text-blue-accent" 
                                            : "text-foreground/85 hover:text-foreground hover:bg-black/5"
                                    )}
                                >
                                    <span>Beweeggroepen</span>
                                    <ChevronDown 
                                        size={18} 
                                        className={cn(
                                            "transition-transform duration-300 opacity-60",
                                            openMobileSubmenu === "groepen" && "rotate-180 text-blue-accent opacity-100"
                                        )} 
                                    />
                                </button>

                                <AnimatePresence>
                                    {openMobileSubmenu === "groepen" && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="bg-slate-50/80 rounded-2xl p-2 my-1.5 border border-black/5 space-y-1 text-sm">
                                                {/* FysioFit */}
                                                <Link
                                                    href="/gespecialiseerde-groepstraining"
                                                    onClick={closeMenu}
                                                    className="flex items-center justify-between py-2.5 px-3.5 rounded-xl font-semibold text-foreground/85 hover:text-blue-accent hover:bg-white transition-all"
                                                >
                                                    <span>FysioFit</span>
                                                    <ChevronRight size={15} className="opacity-40" />
                                                </Link>

                                                {/* Gespecialiseerde groepstraining (Dropdown niveau 2) */}
                                                <div>
                                                    <button
                                                        onClick={() => setIsGespecialiseerdOpen(prev => !prev)}
                                                        className={cn(
                                                            "w-full flex items-center justify-between py-2.5 px-3.5 rounded-xl font-semibold transition-all cursor-pointer",
                                                            isGespecialiseerdOpen 
                                                                ? "bg-white text-blue-accent shadow-2xs" 
                                                                : "text-foreground/85 hover:text-foreground hover:bg-white"
                                                        )}
                                                    >
                                                        <span>Gespecialiseerde groepstraining</span>
                                                        <ChevronDown 
                                                            size={16} 
                                                            className={cn(
                                                                "transition-transform duration-300 opacity-60",
                                                                isGespecialiseerdOpen && "rotate-180 text-blue-accent opacity-100"
                                                            )} 
                                                        />
                                                    </button>

                                                    <AnimatePresence>
                                                        {isGespecialiseerdOpen && (
                                                            <motion.div
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: "auto" }}
                                                                exit={{ opacity: 0, height: 0 }}
                                                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                                                className="overflow-hidden pl-3 pr-1 py-1"
                                                            >
                                                                <div className="border-l-2 border-blue-accent/20 pl-2.5 space-y-1 my-1">
                                                                    <Link
                                                                        href="/gespecialiseerde-groepstraining"
                                                                        onClick={closeMenu}
                                                                        className="block py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider text-blue-accent hover:bg-blue-50/60 transition-all"
                                                                    >
                                                                        Overzicht alle groepen →
                                                                    </Link>

                                                                    {/* Neurologie (Dropdown niveau 3) */}
                                                                    <div>
                                                                        <button
                                                                            onClick={() => setIsNeuroOpen(prev => !prev)}
                                                                            className={cn(
                                                                                "w-full flex items-center justify-between py-2 px-3 rounded-lg text-sm font-medium transition-all cursor-pointer",
                                                                                isNeuroOpen 
                                                                                    ? "text-blue-accent font-semibold bg-white shadow-2xs" 
                                                                                    : "text-foreground/80 hover:text-foreground hover:bg-white"
                                                                            )}
                                                                        >
                                                                            <span>Neurologie</span>
                                                                            <ChevronDown 
                                                                                size={14} 
                                                                                className={cn(
                                                                                    "transition-transform duration-300 opacity-60",
                                                                                    isNeuroOpen && "rotate-180 text-blue-accent opacity-100"
                                                                                )} 
                                                                            />
                                                                        </button>

                                                                        <AnimatePresence>
                                                                            {isNeuroOpen && (
                                                                                <motion.div
                                                                                    initial={{ opacity: 0, height: 0 }}
                                                                                    animate={{ opacity: 1, height: "auto" }}
                                                                                    exit={{ opacity: 0, height: 0 }}
                                                                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                                                                    className="overflow-hidden pl-3 pr-1 py-1"
                                                                                >
                                                                                    <div className="border-l-2 border-blue-accent/15 pl-2.5 space-y-0.5 my-1 text-xs">
                                                                                        <Link
                                                                                            href="/gespecialiseerde-groepstraining?groep=neurologie"
                                                                                            onClick={closeMenu}
                                                                                            className="block py-1.5 px-2.5 rounded-md font-semibold text-blue-accent hover:bg-blue-50/60 transition-all"
                                                                                        >
                                                                                            Overzicht Neurologie →
                                                                                        </Link>
                                                                                        <Link
                                                                                            href="/gespecialiseerde-groepstraining?groep=neurologie&sub=neurofit"
                                                                                            onClick={closeMenu}
                                                                                            className="block py-1.5 px-2.5 rounded-md text-foreground/75 hover:text-foreground hover:bg-white transition-all font-medium"
                                                                                        >
                                                                                            NeuroFit
                                                                                        </Link>
                                                                                        <Link
                                                                                            href="/gespecialiseerde-groepstraining?groep=neurologie&sub=trom"
                                                                                            onClick={closeMenu}
                                                                                            className="block py-1.5 px-2.5 rounded-md text-foreground/75 hover:text-foreground hover:bg-white transition-all font-medium"
                                                                                        >
                                                                                            Trainen Op Muziek (TROM)
                                                                                        </Link>
                                                                                        <Link
                                                                                            href="/gespecialiseerde-groepstraining?groep=neurologie&sub=boksen"
                                                                                            onClick={closeMenu}
                                                                                            className="block py-1.5 px-2.5 rounded-md text-foreground/75 hover:text-foreground hover:bg-white transition-all font-medium"
                                                                                        >
                                                                                            Non-contact boksen
                                                                                        </Link>
                                                                                    </div>
                                                                                </motion.div>
                                                                            )}
                                                                        </AnimatePresence>
                                                                    </div>

                                                                    {/* COPD */}
                                                                    <Link
                                                                        href="/gespecialiseerde-groepstraining?groep=copd"
                                                                        onClick={closeMenu}
                                                                        className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-medium text-foreground/80 hover:text-blue-accent hover:bg-white transition-all"
                                                                    >
                                                                        <span>COPD</span>
                                                                        <ChevronRight size={14} className="opacity-40" />
                                                                    </Link>
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* 4. Ons team */}
                            <Link
                                href={teamLink.href}
                                onClick={closeMenu}
                                className="flex items-center justify-between py-3 px-4 text-base font-bold text-foreground/85 hover:text-foreground hover:bg-black/5 rounded-2xl transition-all"
                            >
                                <span>{teamLink.name}</span>
                            </Link>

                            {/* 5. Informatie (Inklapbaar menu) */}
                            <div className="rounded-2xl transition-colors">
                                <button
                                    onClick={() => toggleMobileSubmenu("info")}
                                    className={cn(
                                        "w-full flex items-center justify-between py-3 px-4 text-base font-bold transition-all rounded-2xl cursor-pointer",
                                        openMobileSubmenu === "info" 
                                            ? "bg-black/5 text-blue-accent" 
                                            : "text-foreground/85 hover:text-foreground hover:bg-black/5"
                                    )}
                                >
                                    <span>Informatie</span>
                                    <ChevronDown 
                                        size={18} 
                                        className={cn(
                                            "transition-transform duration-300 opacity-60",
                                            openMobileSubmenu === "info" && "rotate-180 text-blue-accent opacity-100"
                                        )} 
                                    />
                                </button>

                                <AnimatePresence>
                                    {openMobileSubmenu === "info" && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="bg-slate-50/80 rounded-2xl p-2 my-1.5 border border-black/5 space-y-1 text-sm">
                                                {infoLinks.map((link) => (
                                                    <Link
                                                        key={link.name}
                                                        href={link.href}
                                                        onClick={closeMenu}
                                                        className="flex items-center justify-between py-2.5 px-3.5 font-semibold text-foreground/85 hover:text-blue-accent hover:bg-white rounded-xl transition-all"
                                                    >
                                                        <span>{link.name}</span>
                                                        <ChevronRight size={15} className="opacity-40" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Actieknoppen onderaan */}
                            <div className="pt-4 mt-2 border-t border-black/5 space-y-2.5">
                                <Link
                                    href="/afspraak-maken"
                                    onClick={closeMenu}
                                    className="w-full py-3 px-5 rounded-full bg-blue-accent text-white font-bold text-sm text-center shadow-md hover:bg-blue-accent/90 transition-all flex items-center justify-center gap-2"
                                >
                                    Afspraak maken
                                </Link>

                                <a
                                    href="tel:0573215058"
                                    className="w-full py-2.5 px-4 rounded-full bg-black/5 hover:bg-black/10 text-foreground/85 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                                >
                                    <Phone size={15} className="text-blue-accent" />
                                    <span>Direct bellen: 0573 - 21 50 58</span>
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default function Header() {
    return <HeaderBase variant="light" />;
}
