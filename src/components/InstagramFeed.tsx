"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

interface InstagramPost {
    id: string;
    mediaUrl: string;
    permalink: string;
    caption?: string;
    mediaType?: string;
    thumbnailUrl?: string;
}

interface BeholdData {
    username?: string;
    profilePictureUrl?: string;
    posts?: InstagramPost[];
}

export default function InstagramFeed() {
    const [beholdData, setBeholdData] = React.useState<BeholdData | null>(null);

    React.useEffect(() => {
        const fetchFeed = async () => {
            try {
                const res = await fetch("https://feeds.behold.so/YlzyZcIeHGzluYnVhNoR");
                if (res.ok) {
                    const data = await res.json();
                    setBeholdData(data);
                }
            } catch (err) {
                console.error("Instagram feed fetch error:", err);
            }
        };

        fetchFeed();
    }, []);

    const posts = beholdData?.posts && beholdData.posts.length > 0
        ? beholdData.posts.slice(0, 4)
        : null;

    return (
        <section className="py-24 bg-white border-t border-foreground/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Een kijkje in de praktijk.</h2>
                        <p className="text-foreground/70 text-lg font-light">Volg ons op Instagram voor nieuws, oefeningen en updates.</p>
                    </div>
                    <Link 
                        href="https://www.instagram.com/fysiolaren" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-accent text-white font-semibold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-sm"
                    >
                        <Instagram size={20} />
                        Volg @fysiolaren
                    </Link>
                </div>

                {/* Live Feed of Clean Uitnodiging */}
                {posts && posts.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {posts.map((post) => (
                            <Link 
                                key={post.id}
                                href={post.permalink || "https://www.instagram.com/fysiolaren"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative aspect-square w-full rounded-2xl overflow-hidden group bg-muted shadow-sm"
                            >
                                <img 
                                    src={post.mediaUrl || post.thumbnailUrl}
                                    alt={post.caption || "Instagram post Fysio Laren"}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                                    <Instagram className="text-white w-8 h-8" />
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="bg-foreground/5 rounded-[2.5rem] p-10 md:p-14 text-center border border-foreground/5 flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-blue-accent mb-4">
                            <Instagram size={32} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Volg @fysiolaren op Instagram</h3>
                        <p className="text-foreground/70 max-w-md mb-6 text-sm md:text-base leading-relaxed">
                            Binnenkort verschijnen hier onze nieuwste berichten. Blijf op de hoogte van het laatste praktijknieuws en handige gezondheidstips.
                        </p>
                        <Link 
                            href="https://www.instagram.com/fysiolaren" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-foreground hover:text-blue-accent border border-foreground/10 font-bold px-6 py-3 rounded-full transition-all hover:shadow-md"
                        >
                            Bekijk ons profiel
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
