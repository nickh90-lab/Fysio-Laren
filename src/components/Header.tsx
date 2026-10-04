"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, ChevronRight, Search } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import SearchModal from "@/components/SearchModal";

// Authentiek WhatsApp logo (groene spraakwolk met wit telefoontje)
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
            <path
                fill="#25D366"
                d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"
            />
            <path
                fill="#FFFFFF"
                d="M17.52 14.33C17.22 14.18 15.75 13.46 15.48 13.36C15.21 13.26 15.01 13.21 14.81 13.51C14.61 13.81 14.04 14.48 13.87 14.68C13.7 14.88 13.52 14.9 13.22 14.75C12.92 14.6 11.96 14.29 10.83 13.28C9.95 12.49 9.35 11.52 9.18 11.22C9.01 10.92 9.16 10.76 9.31 10.61C9.44 10.48 9.6 10.27 9.75 10.1C9.9 9.93 9.95 9.8 10.05 9.6C10.15 9.4 10.1 9.23 10.03 9.08C9.95 8.93 9.35 7.47 9.1 6.87C8.86 6.29 8.62 6.37 8.43 6.36C8.26 6.35 8.06 6.35 7.86 6.35C7.66 6.35 7.34 6.42 7.07 6.72C6.8 7.02 6.03 7.74 6.03 9.2C6.03 10.66 7.1 12.07 7.25 12.27C7.4 12.47 9.35 15.48 12.33 16.77C13.04 17.08 13.59 17.26 14.02 17.4C14.73 17.63 15.38 17.6 15.89 17.52C16.46 17.43 17.65 16.8 17.9 16.1C18.15 15.4 18.15 14.81 18.07 14.68C18 14.56 17.82 14.48 17.52 14.33Z"
            />
        </svg>
    );
}

const mainNavLinks = [
    { name: "Home", href: "/" },
    { name: "Aandoeningen", href: "/aandoeningen" },
    { name: "Behandelingen", href: "/behandelingen" },
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
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMobileSubmenu = (name: string) => {
        setOpenMobileSubmenu(prev => prev === name ? null : name);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsSearchOpen(prev => !prev);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

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
                        ? "bg-white/95 shadow-2xs border-b border-blue-accent" 
                        : "bg-white/95 shadow-2xs border-b border-blue-accent"),
                    variant === 'dark' && (isScrolled 
                        ? "bg-foreground/95 shadow-2xl border-b border-white/5" 
                        : "bg-foreground/95 shadow-sm border-b border-white/10"),
                    variant === 'blue' && (isScrolled 
                        ? "bg-blue-accent/95 shadow-2xl border-b border-white/10" 
                        : "bg-blue-accent/95 shadow-sm border-b border-white/20")
                )}
            />

            <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10 h-full gap-2 xl:gap-4">
                {/* Logo & Branding */}
                <Link href="/" className="flex items-center relative z-20 shrink-0" onClick={closeMenu}>
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
                <div className="flex items-center gap-2 sm:gap-3 xl:gap-4 relative z-30 shrink-0">
                    {/* Desktop Telefoonlink - Typografisch & rustig */}
                    <a
                        href="tel:0573215058"
                        className={cn(
                            "hidden md:flex items-center gap-1.5 text-xs xl:text-sm font-semibold transition-colors shrink-0 whitespace-nowrap",
                            variant === 'light' ? "text-foreground/80 hover:text-blue-accent" : "text-white/85 hover:text-white"
                        )}
                        title="Bel Fysio Laren direct op"
                    >
                        <Phone size={14} className="text-blue-accent shrink-0" />
                        <span>0573 - 21 50 58</span>
                    </a>

                    <div className={cn("hidden md:block h-4 w-px shrink-0", variant === 'light' ? "bg-foreground/15" : "bg-white/20")} />

                    {/* Mobiele snelle contactknoppen: WhatsApp & Bellen (alleen op mobiele telefoon) */}
                    <a
                        href="https://wa.me/31573215058"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:hidden flex items-center justify-center w-8 h-8 shrink-0 transition-transform active:scale-95 hover:scale-105"
                        title="Stuur een WhatsApp bericht"
                        aria-label="WhatsApp bericht sturen"
                    >
                        <WhatsAppIcon className="w-8 h-8 drop-shadow-xs" />
                    </a>
                    <a
                        href="tel:0573215058"
                        className={cn(
                            "md:hidden flex items-center justify-center w-8 h-8 shrink-0 transition-transform active:scale-95 hover:scale-105",
                            variant === 'light' ? "text-blue-accent hover:text-blue-accent/80" : "text-white hover:text-white/80"
                        )}
                        title="Bel direct met Fysio Laren"
                        aria-label="Direct bellen"
                    >
                        <Phone size={20} />
                    </a>

                    {/* Zoeken Knop (Stijlvolle Fysio Laren Blauwe Accent-knop, 32px) */}
                    <button
                        type="button"
                        onClick={() => setIsSearchOpen(true)}
                        className={cn(
                            "flex items-center justify-center w-8 h-8 rounded-full transition-all shrink-0 cursor-pointer border shadow-2xs hover:scale-105 active:scale-95 group",
                            variant === 'light' 
                                ? "bg-blue-accent/10 hover:bg-blue-accent border-blue-accent/20 text-blue-accent hover:text-white" 
                                : "bg-white/15 hover:bg-white border-white/25 text-white hover:text-blue-accent"
                        )}
                        title="Zoeken op de website (Cmd + K)"
                        aria-label="Zoeken op website"
                    >
                        <Search size={16} className="stroke-[2.4] transition-colors" />
                    </button>

                    {/* Afspraak Maken CTA - Solid Blue / Solid White */}
                    <Link 
                        href="/afspraak-maken" 
                        onClick={closeMenu} 
                        className="shrink-0"
                    >
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className={cn(
                                "px-3.5 py-2 sm:px-4 sm:py-2 xl:px-5 xl:py-2.5 rounded-full text-xs xl:text-sm font-bold shadow-md transition-all font-sans shrink-0 whitespace-nowrap",
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
                            "lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border transition-colors cursor-pointer",
                            variant === 'light' 
                                ? "text-foreground bg-black/5 border-black/10 hover:bg-black/10" 
                                : "text-white bg-white/10 border-white/20 hover:bg-white/20"
                        )}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
                            {/* Zoekbalk Knop in Mobiel Menu */}
                            <button
                                type="button"
                                onClick={() => {
                                    closeMenu();
                                    setIsSearchOpen(true);
                                }}
                                className="w-full flex items-center gap-3 py-3 px-4 mb-2 bg-foreground/5 text-foreground/75 hover:text-foreground hover:bg-foreground/10 rounded-2xl transition-all text-sm font-medium text-left cursor-pointer"
                            >
                                <Search size={16} className="text-blue-accent shrink-0" />
                                <span>Zoeken op de website...</span>
                            </button>

                            {/* 1. Home */}
                            <Link
                                href="/"
                                onClick={closeMenu}
                                className="flex items-center justify-between py-3 px-4 text-base font-bold text-foreground/85 hover:text-foreground hover:bg-black/5 rounded-2xl transition-all"
                            >
                                <span>Home</span>
                            </Link>

                            {/* 2. Aandoeningen */}
                            <Link
                                href="/aandoeningen"
                                onClick={closeMenu}
                                className="flex items-center justify-between py-3 px-4 text-base font-bold text-foreground/85 hover:text-foreground hover:bg-black/5 rounded-2xl transition-all"
                            >
                                <span>Aandoeningen</span>
                            </Link>

                            {/* 3. Behandelingen */}
                            <Link
                                href="/behandelingen"
                                onClick={closeMenu}
                                className="flex items-center justify-between py-3 px-4 text-base font-bold text-foreground/85 hover:text-foreground hover:bg-black/5 rounded-2xl transition-all"
                            >
                                <span>Behandelingen</span>
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
                                                    href="/gespecialiseerde-groepstraining?groep=fysiofit"
                                                    onClick={closeMenu}
                                                    className="flex items-center justify-between py-2.5 px-3.5 rounded-xl font-semibold text-foreground/85 hover:text-blue-accent hover:bg-white transition-all"
                                                >
                                                    <span>FysioFit</span>
                                                    <ChevronRight size={15} className="opacity-40" />
                                                </Link>

                                                {/* RugFit */}
                                                <Link
                                                    href="/gespecialiseerde-groepstraining?groep=rugfit"
                                                    onClick={closeMenu}
                                                    className="flex items-center justify-between py-2.5 px-3.5 rounded-xl font-semibold text-foreground/85 hover:text-blue-accent hover:bg-white transition-all"
                                                >
                                                    <span>RugFit</span>
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

                                <a
                                    href="https://wa.me/31573215058"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-2.5 px-4 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-semibold text-xs flex items-center justify-center gap-2 transition-colors border border-emerald-200/70"
                                >
                                    <WhatsAppIcon className="w-4 h-4" />
                                    <span>WhatsApp: 0573 - 21 50 58</span>
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Zoekfunctie Modal Overlay */}
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </header>
    );
}

export default function Header() {
    return <HeaderBase variant="light" />;
}
