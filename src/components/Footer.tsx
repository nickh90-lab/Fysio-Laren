import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-foreground text-white py-16 px-6 md:px-12 mt-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">
                {/* About */}
                <div className="flex flex-col items-center sm:items-start">
                    <Link href="/" className="flex items-center mb-6 group">
                        <div className="relative h-20 md:h-24 w-72 md:w-96 transition-opacity group-hover:opacity-80">
                            <Image 
                                src="/Logo%20transparant%20op%20blauw.svg" 
                                alt="Fysio Laren Logo" 
                                fill 
                                className="object-contain object-center sm:object-left" 
                                unoptimized 
                            />
                        </div>
                    </Link>
                    <div className="flex space-x-6 mt-4">
                        <Link href="https://www.instagram.com/fysiolaren" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-accent transition-all hover:scale-110">
                            <Instagram size={22} strokeWidth={1.5} />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="https://www.facebook.com/people/Fysio-Laren-Gld/61592226100408/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-accent transition-all hover:scale-110">
                            <Facebook size={22} strokeWidth={1.5} />
                            <span className="sr-only">Facebook</span>
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold mb-6 text-white text-center sm:text-left">Navigatie</h4>
                    <ul className="space-y-4">
                        {[
                            { name: "Home", href: "/" },
                            { name: "Fysiotherapie", href: "/fysiotherapie" },
                            { name: "FysioFit", href: "/fysiofit" },
                            { name: "Gespecialiseerde groepstraining", href: "/gespecialiseerde-groepstraining" },
                            { name: "Ons team", href: "/ons-team" },
                            { name: "De praktijk", href: "/de-praktijk" },
                            { name: "Contact", href: "/contact" },
                        ].map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-sm text-white/80 hover:text-white transition-colors block text-center sm:text-left"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Openingstijden */}
                <div>
                    <h4 className="text-lg font-bold mb-6 text-white text-center sm:text-left">Openingstijden</h4>
                    <ul className="space-y-4 text-sm text-white/80 max-w-[240px] mx-auto sm:mx-0">
                        <li className="flex justify-between"><span>Maandag:</span> <span>08:00 - 21:00</span></li>
                        <li className="flex justify-between"><span>Dinsdag:</span> <span>08:00 - 21:00</span></li>
                        <li className="flex justify-between"><span>Woensdag:</span> <span>08:00 - 18:00</span></li>
                        <li className="flex justify-between"><span>Donderdag:</span> <span>08:00 - 21:00</span></li>
                        <li className="flex justify-between"><span>Vrijdag:</span> <span>08:00 - 18:00</span></li>
                        <li className="flex justify-between"><span>Zaterdag:</span> <span className="text-white/40">Gesloten</span></li>
                        <li className="flex justify-between"><span>Zondag:</span> <span className="text-white/40">Gesloten</span></li>
                    </ul>
                </div>

                {/* Contact info */}
                <div className="flex flex-col items-center sm:items-start">
                    <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
                    <ul className="space-y-4 w-full flex flex-col items-center sm:items-start">
                        <li className="flex items-start space-x-3 group cursor-pointer text-center sm:text-left">
                            <div className="p-2 bg-white/10 rounded-full group-hover:bg-white group-hover:text-foreground text-white transition-all shrink-0">
                                <MapPin size={16} />
                            </div>
                            <span className="text-sm text-white/80 mt-1">
                                Huenderstraat 3<br />
                                7245 BG Laren
                            </span>
                        </li>
                        <li>
                            <a href="tel:0573215058" className="flex items-center space-x-3 group hover:text-white transition-colors">
                                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white group-hover:text-foreground text-white transition-all shrink-0">
                                    <Phone size={16} />
                                </div>
                                <span className="text-sm text-white/80 group-hover:text-white">0573 - 21 50 58</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info@fysio-laren.nl" className="flex items-center space-x-3 group hover:text-white transition-colors">
                                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white group-hover:text-foreground text-white transition-all shrink-0">
                                    <Mail size={16} />
                                </div>
                                <span className="text-sm text-white/80 group-hover:text-white">info@fysio-laren.nl</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>



            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-xs text-white/70">
                    © {new Date().getFullYear()} Fysio Laren. Alle rechten voorbehouden.
                </p>
                <div className="flex space-x-6 text-xs text-white/70">
                    <Link href="/privacybeleid" className="hover:text-white transition-colors hover:underline">Privacybeleid</Link>
                    <Link href="/algemene-voorwaarden" className="hover:text-white transition-colors hover:underline">Algemene Voorwaarden</Link>
                    <Link href="/klachtenregeling" className="hover:text-white transition-colors hover:underline">Klachtenregeling</Link>
                </div>
            </div>
        </footer>
    );
}
