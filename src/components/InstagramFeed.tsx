"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Instagram, Facebook, ArrowUpRight, Heart } from "lucide-react";

interface InstagramPost {
    id: string;
    mediaUrl: string;
    permalink: string;
    caption?: string;
    mediaType?: string;
    thumbnailUrl?: string;
    timestamp?: string;
    likeCount?: number;
    commentsCount?: number;
}

interface BeholdData {
    username?: string;
    profilePictureUrl?: string;
    posts?: InstagramPost[];
}

// Betrouwbare fallback data zodat de feed altijd direct gevuld is
const FALLBACK_POSTS: InstagramPost[] = [
    {
        id: "1",
        caption: "🎉 We zijn begonnen! 🙌\n\nFysio Laren is officieel gestart🥳!! We hebben zin om samen aan de slag te gaan! 💙\n\nTot 1 januari ontvangen we jullie nog aan de Rengersweg 2. Vanaf 1 januari verwelkomen we jullie graag op onze nieuwe locatie aan de Huenderstraat 3 in Laren.",
        mediaUrl: "https://behold.pictures/eyJ1Ijoic2l0RkQ4NWczV1VBRXltdUNUWGt0N2d3V3RoMSIsImYiOiJZbHp5WmNJZUhHemx1WW5WaE5vUiIsInAiOiIxODAzMTI5MjgxMDY5MTI2NSIsImgiOiJzbGNxdjUiLCJjIjoiMTgxMDc1NTI2MDU5OTQzNjQifQ.jpg?class=originalMedium",
        permalink: "https://www.instagram.com/p/Dfc1gKgl-H0/",
        timestamp: "2026-11-07T18:34:10+0000",
        likeCount: 15
    },
    {
        id: "2",
        caption: "De eerste stappen zijn gezet!\nHet begon bij de Kamer van Koophandel, het tekenen van het huurcontract, de sleuteloverdracht en inmiddels is de verbouwing begonnen…💪",
        mediaUrl: "https://behold.pictures/eyJ1Ijoic2l0RkQ4NWczV1VBRXltdUNUWGt0N2d3V3RoMSIsImYiOiJZbHp5WmNJZUhHemx1WW5WaE5vUiIsInAiOiIxODEwODk0NjAxNjI0OTE1MSIsImgiOiJ0cjZlZ2IifQ.jpg?class=originalMedium",
        permalink: "https://www.instagram.com/p/De6-lbBF583/",
        timestamp: "2026-10-25T14:59:21+0000",
        likeCount: 31
    },
    {
        id: "3",
        caption: "Het is bijna zover…\nVanaf 1 november gaan we starten met Fysio Laren🥳!!\nEerst nog aan de Rengersweg (pand Solis) en vanaf 1 januari 2027 aan de Huenderstraat.",
        mediaUrl: "https://behold.pictures/eyJ1Ijoic2l0RkQ4NWczV1VBRXltdUNUWGt0N2d3V3RoMSIsImYiOiJZbHp5WmNJZUhHemx1WW5WaE5vUiIsInAiOiIxODExMDg5MzYwNzIyODkzOSIsImgiOiI2OGUwa2kifQ.jpg?class=originalMedium",
        permalink: "https://www.instagram.com/p/DeUVMunoRYG/",
        timestamp: "2026-10-10T14:52:40+0000",
        likeCount: 28
    }
];

function formatPostDate(isoString?: string): string {
    if (!isoString) return "";
    try {
        const date = new Date(isoString);
        return date.toLocaleDateString("nl-NL", { day: "numeric", month: "long" });
    } catch {
        return "";
    }
}

export default function InstagramFeed() {
    const [beholdData, setBeholdData] = useState<BeholdData | null>(null);

    useEffect(() => {
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

    const rawPosts = beholdData?.posts && beholdData.posts.length > 0
        ? beholdData.posts
        : FALLBACK_POSTS;

    const posts = rawPosts.slice(0, 3);

    return (
        <section className="py-20 md:py-28 bg-white border-t border-foreground/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-accent block mb-2">
                            Social Media
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Een kijkje in de praktijk</h2>
                        <p className="text-foreground/70 text-base md:text-lg font-light max-w-xl">
                            Volg ons voor updates, sfeerbeelden en het laatste praktijknieuws uit Laren.
                        </p>
                    </div>

                    {/* Subtiele, rustige knoppen zonder felle gradients */}
                    <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                        <Link
                            href="https://www.instagram.com/fysiolaren"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-800 text-xs sm:text-sm font-semibold transition-colors border border-slate-200/80"
                        >
                            <Instagram size={16} className="text-foreground/75" />
                            <span>Instagram</span>
                        </Link>
                        <Link
                            href="https://www.facebook.com/people/Fysio-Laren-Gld/61592226100408/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-800 text-xs sm:text-sm font-semibold transition-colors border border-slate-200/80"
                        >
                            <Facebook size={16} className="text-foreground/75" />
                            <span>Facebook</span>
                        </Link>
                    </div>
                </div>

                {/* 3 Kaarten */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {posts.map((post) => {
                        const postDate = formatPostDate(post.timestamp);
                        return (
                            <Link
                                key={post.id}
                                href={post.permalink || "https://www.instagram.com/fysiolaren"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-3xl overflow-hidden border border-foreground/8 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
                            >
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={post.mediaUrl || post.thumbnailUrl}
                                        alt={post.caption ? post.caption.slice(0, 80) : "Post"}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    {postDate && (
                                        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-foreground/80 text-[11px] font-semibold px-3 py-1 rounded-full shadow-2xs">
                                            {postDate}
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 flex flex-col flex-grow justify-between">
                                    <p className="text-foreground/80 text-sm leading-relaxed line-clamp-4 font-normal whitespace-pre-line mb-4">
                                        {post.caption}
                                    </p>
                                    <div className="pt-4 border-t border-foreground/6 flex items-center justify-between text-xs">
                                        <span className="font-semibold text-blue-accent group-hover:underline flex items-center gap-1">
                                            Bekijk bericht <ArrowUpRight size={13} />
                                        </span>
                                        {post.likeCount !== undefined && post.likeCount > 0 && (
                                            <span className="flex items-center gap-1 text-foreground/60 font-medium">
                                                <Heart size={13} className="text-rose-500 fill-rose-500" />
                                                {post.likeCount}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
