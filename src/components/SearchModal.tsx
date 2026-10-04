"use client";

import React, { useState, useEffect, useMemo, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Search, 
    ArrowRight, 
    Activity, 
    Users, 
    Calendar, 
    Clock, 
    FileText, 
    UserCheck, 
    Phone
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface SearchItem {
    id: string;
    title: string;
    description: string;
    category: "Behandeling" | "Klacht / Aandoening" | "Beweeggroep" | "Ons Team" | "Praktisch";
    href: string;
    keywords: string[];
}

export const searchableItems: SearchItem[] = [
    // 1. BEHANDELINGEN
    {
        id: "b-algemeen",
        title: "Algemene fysiotherapie",
        description: "Herstel en optimalisatie van uw algehele bewegingsvrijheid en vitaliteit.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=algemene-fysiotherapie",
        keywords: ["algemeen", "oefentherapie", "bewegen", "mobiliteit", "herstel", "spieren", "gewrichten"]
    },
    {
        id: "b-manueel",
        title: "Manuele therapie",
        description: "Specialistische behandeling voor gewrichten, wervelkolom, rug- en nekklachten.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=manuele-therapie",
        keywords: ["manuele", "rug", "nek", "hoofdpijn", "wervelkolom", "kraken", "mobilisatie", "bekken"]
    },
    {
        id: "b-dry-needling",
        title: "Dry needling",
        description: "Gericht aanprikken van pijnlijke spierknopen (triggerpoints) voor snelle spierontspanning.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=dry-needling",
        keywords: ["dry needling", "triggerpoints", "spierknopen", "naaldjes", "stijve spieren", "verkramping", "spierspanning"]
    },
    {
        id: "b-revalidatie",
        title: "Orthopedische revalidatie",
        description: "Revalidatie na operaties, zoals een nieuwe heup, nieuwe knie of na botbreuken.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=orthopedische-revalidatie",
        keywords: ["revalidatie", "operatie", "nieuwe heup", "nieuwe knie", "total hip", "total knee", "ziekenhuis", "botbreuk"]
    },
    {
        id: "b-sportfysiotherapie",
        title: "Sport & blessures",
        description: "Begeleiding en actief herstel bij sportblessures en overbelasting.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=sportfysiotherapie",
        keywords: ["sport & blessures", "sportfysiotherapie", "sport", "blessure", "sportblessure", "knieband", "meniscus", "zweepslag", "sporters", "enkel"]
    },
    {
        id: "b-oedeem",
        title: "Oedeemtherapie",
        description: "Lymfedrainage en behandeling van vochtophoping na operatie of trauma.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=oedeemtherapie",
        keywords: ["oedeem", "vocht", "lymfedrainage", "zwelling", "dik been", "dikke arm", "lymfe", "compressie"]
    },
    {
        id: "b-oncologie",
        title: "Oncologische fysiotherapie",
        description: "Fysiotherapeutische begeleiding voor, tijdens en na de behandeling van kanker.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=oncologische-fysiotherapie",
        keywords: ["oncologie", "kanker", "chemo", "bestraling", "vermoeidheid", "herstel na kanker"]
    },
    {
        id: "b-parkinson",
        title: "Parkinson begeleiding",
        description: "Gespecialiseerde begeleiding bij de ziekte van Parkinson (ParkinsonNet).",
        category: "Behandeling",
        href: "/behandelingen?behandeling=parkinson",
        keywords: ["parkinson", "parkinsonnet", "trillen", "freezing", "looptraining", "balans"]
    },
    {
        id: "b-ms",
        title: "Multiple Sclerose (MS)",
        description: "Gerichte oefentherapie voor balans, kracht en energieverdeling bij MS.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=ms",
        keywords: ["ms", "multiple sclerose", "vermoeidheid", "balans", "zenuwstelsel"]
    },
    {
        id: "b-cva",
        title: "Beroerte (CVA)",
        description: "Neurorevalidatie bij herstel na een beroerte of herseninfarct, ook aan huis.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=cva",
        keywords: ["cva", "beroerte", "herseninfarct", "hersenbloeding", "neurorevalidatie", "aan huis"]
    },
    {
        id: "b-artrose",
        title: "Artrose behandeling",
        description: "Actief bewegen om gewrichten soepel en kraakbeen gezond te houden.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=artrose",
        keywords: ["artrose", "slijtage", "gewrichten", "knieartrose", "heupartrose", "stijve gewrichten"]
    },
    {
        id: "b-osteoporose",
        title: "Osteoporose",
        description: "Gerichte gewichtsdragende training voor behoud van botkwaliteit en spierkracht.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=osteoporose",
        keywords: ["osteoporose", "botontkalking", "botbreuken", "botdichtheid", "kalk"]
    },
    {
        id: "b-copd",
        title: "COPD behandeling",
        description: "Ademhalingstechnieken en conditietraining bij chronische longklachten.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=copd",
        keywords: ["copd", "longen", "benauwd", "kortademig", "ademhaling", "longfysio"]
    },
    {
        id: "b-etalagebenen",
        title: "Claudicatio Intermittens (etalagebenen)",
        description: "Gesuperviseerde looptherapie bij pijn of kramp in de benen tijdens het lopen.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=etalagebenen",
        keywords: ["claudicatio", "etalagebenen", "kramp in kuiten", "looptherapie", "slagader", "doorbloeding"]
    },
    {
        id: "b-ouderenzorg",
        title: "Ouderenzorg & Fysiotherapie aan huis",
        description: "Begeleiding van senioren voor mobiliteit, zelfstandigheid en behandeling aan huis.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=ouderenzorg",
        keywords: ["ouderenzorg", "ouderen", "senioren", "aan huis", "thuisbehandeling", "zelfstandig wonen"]
    },
    {
        id: "b-valpreventie",
        title: "Valpreventie en Otago",
        description: "Gerichte valpreventie en het Otago-oefenprogramma in kleine groep of aan huis.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=valpreventie",
        keywords: ["valpreventie", "otago", "otago-oefenprogramma", "vallen", "evenwicht", "balans", "struikelen", "senioren"]
    },
    {
        id: "b-chronische-pijn",
        title: "Chronische pijn",
        description: "Inzicht in het zenuwstelsel en stapsgewijze opbouw van belastbaarheid.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=chronische-pijn",
        keywords: ["chronische pijn", "langdurige pijn", "zenuwstelsel", "pijndemping", "graded activity", "alk", "solk"]
    },
    {
        id: "b-tens",
        title: "TENS behandeling",
        description: "Milde elektrische zenuwstimulatie voor veilige pijnbestrijding thuis.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=tens",
        keywords: ["tens", "stroompjes", "zenuwpijn", "elektroden", "pijnbestrijding"]
    },
    {
        id: "b-psychosomatiek",
        title: "Psychosomatiek",
        description: "Begeleiding bij lichamelijke klachten door stress, overspanning of emotionele druk.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=psychosomatiek",
        keywords: ["psychosomatiek", "stress", "spanning", "burn-out", "hoofdpijn", "overprikkeling"]
    },
    {
        id: "b-ademhaling",
        title: "Ontspanning- en ademhalingstherapie",
        description: "Praktische ontspannings- en ademinstructies bij hyperventilatie, stress en onrust.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=ademhalingstherapie",
        keywords: ["ontspanning", "ontspanningstherapie", "ademhaling", "ademtherapie", "ademhalingstherapie", "hyperventilatie", "borstademhaling", "stress", "spanning"]
    },
    {
        id: "b-hardlopen",
        title: "Hardloopanalyses",
        description: "Video-loopanalyse op de loopband voor looptechniek en blessurepreventie.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=hardloopanalyses",
        keywords: ["hardloopanalyse", "hardlopen", "loopband", "hardloopschoenen", "lopersknie", "achillespees"]
    },
    {
        id: "b-voeten",
        title: "Voetentraining",
        description: "Versterken van voetspieren en voetboog bij hielspoor, hallux valgus en pijn.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=voetentraining",
        keywords: ["voetentraining", "voeten", "hielspoor", "hallux valgus", "platvoeten", "peesplaat", "steunzolen"]
    },
    {
        id: "b-taping",
        title: "Medical taping",
        description: "Elastische tapetechnieken voor spierondersteuning, pijnverlichting en zwelling.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=medical-taping",
        keywords: ["medical taping", "kinesiotape", "tape", "intapen", "zweepslag", "blessuretape"]
    },
    {
        id: "b-leefstijl",
        title: "Leefstijladvies",
        description: "Praktische adviezen over werkhouding, slaap, herstel en gezond bewegen.",
        category: "Behandeling",
        href: "/behandelingen?behandeling=leefstijladvies",
        keywords: ["leefstijl", "ergonomie", "werkhouding", "slaap", "vitaliteit", "preventie"]
    },

    // 2. KLACHTEN & AANDOENINGEN
    {
        id: "k-overzicht",
        title: "Aandoeningen overzicht",
        description: "Bekijk alle 16 klachtenclusters waar wij u gericht bij kunnen helpen.",
        category: "Klacht / Aandoening",
        href: "/aandoeningen",
        keywords: ["aandoeningen", "klachten", "overzicht", "waar kunnen we bij helpen"]
    },
    {
        id: "k-rug",
        title: "Rugklachten & Lage rugpijn",
        description: "Oorzaken, symptomen en gerichte fysiotherapeutische aanpak bij rugpijn.",
        category: "Klacht / Aandoening",
        href: "/behandelingen?behandeling=manuele-therapie",
        keywords: ["rugklachten", "lage rugpijn", "spit", "hernia", "ischias", "stijve rug", "lumbago", "rugpijn"]
    },
    {
        id: "k-nek",
        title: "Nek- en schouderklachten",
        description: "Behandeling van stijve nek, uitstralende schouderpijn en spanningshoofdpijn.",
        category: "Klacht / Aandoening",
        href: "/behandelingen?behandeling=manuele-therapie",
        keywords: ["nekklachten", "stijve nek", "nekpijn", "whiplash", "hoofdpijn", "migraine", "spierpijn nek"]
    },
    {
        id: "k-knie",
        title: "Knieklachten & Meniscus",
        description: "Hulp bij meniscus, kruisbandletsel, overbelasting en artrose van de knie.",
        category: "Klacht / Aandoening",
        href: "/behandelingen?behandeling=sportfysiotherapie",
        keywords: ["knieklachten", "kniepijn", "meniscus", "kruisband", "patellofemoraal", "lopersknie"]
    },
    {
        id: "k-schouder",
        title: "Schouderklachten",
        description: "Behandeling van frozen shoulder, peesontstekingen en slijmbeursklachten.",
        category: "Klacht / Aandoening",
        href: "/behandelingen?behandeling=algemene-fysiotherapie",
        keywords: ["schouderklachten", "schouderpijn", "frozen shoulder", "slijmbeurs", "impingement", "rotator cuff"]
    },
    {
        id: "k-sportblessures",
        title: "Sportblessures & Overbelasting",
        description: "Herstel en verantwoorde sporthervatting na acute blessures of overbelasting.",
        category: "Klacht / Aandoening",
        href: "/behandelingen?behandeling=sportfysiotherapie",
        keywords: ["sportblessures", "sport", "blessure", "zweepslag", "verzwikte enkel", "hamstring", "achillespees"]
    },
    {
        id: "k-schouder-arm",
        title: "Schouder, Arm & Hand",
        description: "Behandeling van peesklachten, tennisarm, golferselleboog, RSI en polsklachten.",
        category: "Klacht / Aandoening",
        href: "/aandoeningen",
        keywords: ["schouder", "arm", "hand", "tennisarm", "golferselleboog", "rsi", "muisarm", "pols", "impingement", "peesontsteking"]
    },
    {
        id: "k-stress-ademhaling",
        title: "Ontspanning- en ademhalingstherapie",
        description: "Begeleiding bij overspannenheid, burn-out, hyperventilatie en ontregelde ademhaling.",
        category: "Klacht / Aandoening",
        href: "/aandoeningen",
        keywords: ["ontspanning", "ontspanningstherapie", "ademhaling", "ademhalingstherapie", "stress", "spanning", "burnout", "burn-out", "hyperventilatie", "gejaagd gevoel", "spanningshoofdpijn", "psychosomatiek"]
    },
    {
        id: "k-artrose",
        title: "Artrose & Gewrichtsklachten",
        description: "Slijtage, stijfheid en bewegingsbeperking in heup, knie, schouder of vingers.",
        category: "Klacht / Aandoening",
        href: "/behandelingen?behandeling=artrose",
        keywords: ["artrose", "slijtage", "kraakbeen", "gewrichten", "stijfheid", "reuma", "reumatische klachten", "gewrichtspijn"]
    },
    {
        id: "k-voeten",
        title: "Voet- en enkelklachten",
        description: "Hielspoor, hallux valgus, platvoeten, peesplaatontsteking en voorvoetpijn.",
        category: "Klacht / Aandoening",
        href: "/behandelingen?behandeling=voetentraining",
        keywords: ["voetklachten", "enkelklachten", "hielspoor", "hallux valgus", "platvoeten", "voorvoetpijn", "klauwtenen", "hamertenen", "mortons neuroom", "neuropathie", "doorgezakte voeten"]
    },
    {
        id: "k-revalidatie-op",
        title: "Revalidatie na operatie",
        description: "Herstel na een nieuwe knie, nieuwe heup, orthopedische ingreep of botbreuk.",
        category: "Klacht / Aandoening",
        href: "/behandelingen?behandeling=orthopedische-revalidatie",
        keywords: ["nieuwe knie", "nieuwe heup", "total hip", "total knee", "operatie", "ziekenhuis", "botbreuk", "krukken", "orthopedie", "prothese"]
    },
    {
        id: "k-duizeligheid",
        title: "Duizeligheid & Evenwichtsklachten",
        description: "Onderzoek en behandeling bij BPPD (draaiduizeligheid) en nek-gerelateerde duizeligheid.",
        category: "Klacht / Aandoening",
        href: "/behandelingen?behandeling=manuele-therapie",
        keywords: ["duizeligheid", "bppd", "draaiduizeligheid", "evenwicht", "draaierig", "licht in het hoofd", "duizelig"]
    },

    // 3. BEWEEGROEPEN & TRAINING
    {
        id: "g-overzicht",
        title: "Beweeggroepen & Training",
        description: "Overzicht van alle medische beweeggroepen en sporten in onze oefenzaal.",
        category: "Beweeggroep",
        href: "/gespecialiseerde-groepstraining",
        keywords: ["beweeggroepen", "groepstraining", "oefenzaal", "trainen in groepsverband", "sportgroep"]
    },
    {
        id: "g-fysiofit",
        title: "FysioFit / Fysiofitness",
        description: "Verantwoord en zelfstandig particulier sporten onder fysiotherapeutische begeleiding.",
        category: "Beweeggroep",
        href: "/fysiofit",
        keywords: ["fysiofit", "fysiofitness", "fitness", "sporten", "abonnement", "kracht", "conditie"]
    },
    {
        id: "g-neuro",
        title: "Neurologie Beweeggroepen",
        description: "NeuroFit, Trainen Op Muziek (TROM) en Non-contact boksen bij Parkinson en neurologie.",
        category: "Beweeggroep",
        href: "/neurologie",
        keywords: ["neurologie groepen", "neurofit", "trom", "boksen", "parkinson boksen", "muziek"]
    },
    {
        id: "g-copd",
        title: "COPD Groepstraining",
        description: "Gericht trainen aan longconditie, uithoudingsvermogen en ademhaling.",
        category: "Beweeggroep",
        href: "/copd",
        keywords: ["copd training", "longconditie", "longgroep", "ademtraining"]
    },
    {
        id: "g-rugfit",
        title: "RugFit Training",
        description: "Functionele romp- en rugstabiliteitstraining voor een sterke, klachtenvrije rug.",
        category: "Beweeggroep",
        href: "/rugfit",
        keywords: ["rugfit", "rugtraining", "rugschool", "rompstabiliteit", "core stability"]
    },
    {
        id: "g-rugtriathlon",
        title: "Rugtriathlon",
        description: "Gevarieerd trainingsprogramma met fietsen, wandelen en gerichte spieropbouw.",
        category: "Beweeggroep",
        href: "/rugtriathlon",
        keywords: ["rugtriathlon", "wandelen", "fietsen", "spiertraining"]
    },

    // 4. ONS TEAM (Alleen vindbaar op eigen naam of algemene teamtermen)
    {
        id: "t-overzicht",
        title: "Ons team van therapeuten",
        description: "Maak kennis met onze fysiotherapeuten: Marloes, Karin, Nick, Ingrid en Jacob.",
        category: "Ons Team",
        href: "/ons-team",
        keywords: ["team", "ons team", "therapeuten", "fysiotherapeuten", "wie werken er", "behandelaars", "collega", "collega's"]
    },
    {
        id: "t-marloes",
        title: "Marloes",
        description: "Fysiotherapeut en maatschapslid bij Fysio Laren.",
        category: "Ons Team",
        href: "/ons-team?lid=marloes",
        keywords: ["marloes", "marloes hospers", "tens"]
    },
    {
        id: "t-karin",
        title: "Karin",
        description: "Fysiotherapeut en maatschapslid bij Fysio Laren.",
        category: "Ons Team",
        href: "/ons-team?lid=karin",
        keywords: ["karin"]
    },
    {
        id: "t-nick",
        title: "Nick",
        description: "Fysio-/manueeltherapeut en maatschapslid bij Fysio Laren.",
        category: "Ons Team",
        href: "/ons-team?lid=nick",
        keywords: ["nick", "nick hospers"]
    },
    {
        id: "t-ingrid",
        title: "Ingrid",
        description: "Fysiotherapeut bij Fysio Laren.",
        category: "Ons Team",
        href: "/ons-team?lid=ingrid",
        keywords: ["ingrid", "medical taping", "taping"]
    },
    {
        id: "t-jacob",
        title: "Jacob",
        description: "Fysiotherapeut bij Fysio Laren.",
        category: "Ons Team",
        href: "/ons-team?lid=jacob",
        keywords: ["jacob"]
    },

    // 5. PRAKTISCHE ZAKEN, OPENINGSTIJDEN, CONTACT & ADRES
    {
        id: "p-afspraak",
        title: "Afspraak maken (Directe Toegankelijkheid)",
        description: "Plan direct online uw afspraak of neem contact op. Geen verwijsbrief van de huisarts nodig.",
        category: "Praktisch",
        href: "/afspraak-maken",
        keywords: ["afspraak maken", "afspraak plannen", "afspraak", "intake", "online agenda", "directe toegankelijkheid", "zonder verwijzing", "verwijzing", "verwijsbrief", "huisarts", "aanmelden"]
    },
    {
        id: "p-contact",
        title: "Contact & Telefoonnummer",
        description: "Bel 0573 - 21 50 58 of bekijk onze locaties Huenderstraat 3 & Rengersweg 2 in Laren.",
        category: "Praktisch",
        href: "/contact",
        keywords: ["contact", "telefoon", "telefoonnummer", "tel nr", "tel", "bellen", "0573", "0573-215058", "0573 21 50 58", "adres", "route", "locatie", "huenderstraat", "rengersweg", "email", "mail", "whatsapp", "dokter", "huisarts", "spreekuur", "parkeren", "bereikbaarheid", "inschrijven"]
    },
    {
        id: "p-openingstijden",
        title: "Openingstijden",
        description: "Bekijk de actuele openingstijden van onze praktijk en oefenzaal (maandag t/m vrijdag).",
        category: "Praktisch",
        href: "/openingstijden",
        keywords: ["openingstijden", "wanneer open", "open", "werktijden", "tijden", "gesloten", "avond", "weekend", "zaterdag", "uur"]
    },
    {
        id: "p-tarieven",
        title: "Tarieven & Zorgverzekering",
        description: "Overzicht van vergoedingen door de zorgverzekeraar, particuliere tarieven en contracten.",
        category: "Praktisch",
        href: "/tarieven",
        keywords: ["tarieven", "kosten", "prijs", "prijzen", "vergoeding", "vergoedingen", "zorgverzekering", "verzekering", "contracten", "factuur", "polis", "basisverzekering", "aanvullend", "eigen risico"]
    },
    {
        id: "p-praktijk",
        title: "De Praktijk (Fysio Laren)",
        description: "Lees meer over de historie, visie, oefenzaal en moderne faciliteiten van Fysio Laren.",
        category: "Praktisch",
        href: "/de-praktijk",
        keywords: ["de praktijk", "over ons", "gebouw", "faciliteiten", "oefenzaal", "historie", "laren gld", "visie"]
    },
    {
        id: "p-klachtenregeling",
        title: "Klachtenregeling (Wkkgz / SKGE)",
        description: "Informatie over onze kwaliteitswaarborging en onafhankelijke klachtenprocedure.",
        category: "Praktisch",
        href: "/klachtenregeling",
        keywords: ["klachtenregeling", "klacht indienen", "ontevreden", "skge", "wkkgz", "kwaliteitsregister"]
    },
    {
        id: "p-privacy",
        title: "Privacybeleid & AVG",
        description: "Hoe wij zorgvuldig en vertrouwelijk omgaan met uw medische gegevens en privacy.",
        category: "Praktisch",
        href: "/privacybeleid",
        keywords: ["privacy", "avg", "privacybeleid", "gegevens", "beveiliging", "dossier", "medisch dossier"]
    },
    {
        id: "p-voorwaarden",
        title: "Algemene Voorwaarden & Huisregels",
        description: "Praktijkvoorwaarden, betalingsvoorwaarden en afspraak annuleren (24 uur van tevoren).",
        category: "Praktisch",
        href: "/algemene-voorwaarden",
        keywords: ["algemene voorwaarden", "voorwaarden", "afzeggen", "annuleren", "betalingsvoorwaarden", "huisregels", "24 uur"]
    }
];

// Fuzzy matching & Levenshtein-afstand voor slimme typefout-tolerantie
function getLevenshteinDistance(a: string, b: string): number {
    const matrix: number[][] = [];
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

function isFuzzyMatch(word: string, queryWord: string): boolean {
    if (word.includes(queryWord)) return true;
    if (queryWord.length < 3) return false;

    // De eerste letter moet overeenkomen om vreemde kruis-matches te voorkomen (zoals 'parkin' -> 'karin')
    if (word[0] !== queryWord[0]) return false;
    
    const dist = getLevenshteinDistance(word, queryWord);
    if (queryWord.length <= 4) return dist <= 1;
    if (queryWord.length <= 7) return dist <= 2;
    return dist <= 3;
}

// Berekent een gewogen relevantiescore per zoekitem
function calculateScore(item: SearchItem, rawQuery: string): number {
    const query = rawQuery.trim().toLowerCase();
    if (!query) return 0;

    const queryTokens = query.split(/\s+/).filter(Boolean);
    const titleLower = item.title.toLowerCase();
    const descLower = item.description.toLowerCase();
    const catLower = item.category.toLowerCase();
    const keywordsLower = item.keywords.map((k) => k.toLowerCase());

    let score = 0;

    // 1. Directe titelovereenkomst (Hoogste prioriteit)
    if (titleLower === query) {
        score += 200;
    } else if (titleLower.startsWith(query)) {
        score += 120;
    } else if (titleLower.includes(` ${query}`) || titleLower.includes(`(${query}`)) {
        score += 90;
    } else if (titleLower.includes(query)) {
        score += 60;
    }

    // 2. Woorden in titel & lichte fuzzy match
    const titleTokens = titleLower.split(/[\s,()&/-]+/).filter(Boolean);
    for (const qTok of queryTokens) {
        if (titleTokens.some((tTok) => tTok === qTok)) {
            score += 45;
        } else if (titleTokens.some((tTok) => tTok.startsWith(qTok))) {
            score += 25;
        } else if (titleTokens.some((tTok) => isFuzzyMatch(tTok, qTok))) {
            score += 20;
        }
    }

    // 3. Trefwoorden (Keywords)
    for (const kw of keywordsLower) {
        if (kw === query) {
            score += 85;
        } else if (kw.startsWith(query)) {
            score += 50;
        } else if (kw.includes(query)) {
            score += 30;
        } else {
            const kwTokens = kw.split(/\s+/).filter(Boolean);
            for (const qTok of queryTokens) {
                if (kwTokens.some((kt) => kt === qTok)) {
                    score += 25;
                } else if (kwTokens.some((kt) => kt.startsWith(qTok))) {
                    score += 15;
                } else if (kwTokens.some((kt) => isFuzzyMatch(kt, qTok))) {
                    score += 12;
                }
            }
        }
    }

    // 4. Beschrijving (Niet meewegen voor 'Ons Team' om valse matches op aandoeningen te voorkomen)
    if (item.category !== "Ons Team") {
        if (descLower.includes(query)) {
            score += 25;
        }
        const descTokens = descLower.split(/[\s,()&/-]+/).filter(Boolean);
        for (const qTok of queryTokens) {
            if (descTokens.some((dt) => dt === qTok)) {
                score += 10;
            } else if (descTokens.some((dt) => dt.startsWith(qTok))) {
                score += 6;
            }
        }
    }

    // 5. Categorie match
    if (catLower.includes(query)) {
        score += 20;
    }

    // 6. Categorie-basisweging bij overeenkomst (zorgt dat de officiële pagina boven een losse vermelding staat)
    if (score > 0) {
        switch (item.category) {
            case "Behandeling":
                score += 15;
                break;
            case "Klacht / Aandoening":
                score += 12;
                break;
            case "Beweeggroep":
                score += 10;
                break;
            case "Praktisch":
                score += 8;
                break;
            case "Ons Team":
                score += 5;
                break;
        }
    }

    return score;
}

// Subtiele markering van het gezochte trefwoord
function HighlightMatch({ text, query }: { text: string; query: string }) {
    if (!query.trim()) return <>{text}</>;

    const tokens = query.trim().split(/\s+/).filter(Boolean);
    if (tokens.length === 0) return <>{text}</>;

    let parts: string[] = [text];
    let hasMatch = false;

    try {
        const escapedTokens = tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
        const regex = new RegExp(`(${escapedTokens.join("|")})`, "gi");
        parts = text.split(regex);
        hasMatch = true;
    } catch {
        hasMatch = false;
    }

    if (!hasMatch) {
        return <>{text}</>;
    }

    return (
        <>
            {parts.map((part, index) => {
                const isMatch = tokens.some((t) => t.toLowerCase() === part.toLowerCase());
                return isMatch ? (
                    <mark key={index} className="bg-blue-accent/15 text-blue-accent font-semibold rounded-xs px-0.5">
                        {part}
                    </mark>
                ) : (
                    part
                );
            })}
        </>
    );
}

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function useIsClient() {
    return useSyncExternalStore(
        () => () => {},
        () => true,
        () => false
    );
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState("");
    const isClient = useIsClient();
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    // Focus input bij openen en lock body scroll zonder layout-shift of flits
    useEffect(() => {
        if (!isOpen) return;

        // Bereken scrollbar-breedte om een verspringing/flits van de pagina te voorkomen
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        const originalOverflow = document.body.style.overflow;
        const originalPaddingRight = document.body.style.paddingRight;

        document.body.style.overflow = "hidden";
        if (scrollBarWidth > 0) {
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        }

        // Focus input veilig met preventScroll om viewport verspringing te voorkomen
        const timer = setTimeout(() => {
            setQuery("");
            inputRef.current?.focus({ preventScroll: true });
        }, 50);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = originalOverflow;
            document.body.style.paddingRight = originalPaddingRight;
        };
    }, [isOpen]);

    // Sluit bij ESC-toets
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    // Intelligente filtering en scoring (gesorteerd op relevantie)
    const results = useMemo(() => {
        const cleanQuery = query.trim().toLowerCase();
        if (!cleanQuery) return [];

        // Bereken score per item en filter matches
        const scored = searchableItems
            .map((item) => ({
                item,
                score: calculateScore(item, cleanQuery),
            }))
            .filter((entry) => entry.score > 0);

        // Rangschik hoogste score eerst
        scored.sort((a, b) => b.score - a.score);

        return scored.map((s) => s.item);
    }, [query]);

    // Klik op resultaat
    const handleSelect = (href: string) => {
        onClose();
        if (href.startsWith("http")) {
            window.open(href, "_blank", "noopener,noreferrer");
        } else {
            router.push(href);
        }
    };

    if (!isClient) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6">
                    {/* Backdrop - Zachte, warme sluier in de huiskleur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        onClick={onClose}
                        className="fixed inset-0 bg-[#212529]/35 backdrop-blur-xs"
                        aria-hidden="true"
                    />

                    {/* Modal Venster */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97, y: -8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97, y: -8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="relative w-full max-w-2xl bg-white rounded-3xl sm:rounded-[2rem] shadow-2xl border border-foreground/10 overflow-hidden flex flex-col z-10 max-h-[82vh]"
                    >
                    {/* Top Zoekbalk met warme off-white tint */}
                    <div className="p-4 sm:p-5 border-b border-foreground/8 flex items-center gap-3 bg-[#FAF9F6]">
                        <Search className="w-5 h-5 text-blue-accent shrink-0 ml-1" />
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Waar bent u naar op zoek?..."
                            className="w-full bg-transparent text-foreground placeholder:text-foreground/40 text-base sm:text-lg focus:outline-none font-medium"
                        />
                        {/* Actieknoppen rechts: duidelijke 'Wis' knop en 'Sluiten' knop */}
                        <div className="flex items-center gap-2 shrink-0">
                            {query && (
                                <button
                                    type="button"
                                    onClick={() => setQuery("")}
                                    className="px-2.5 py-1 rounded-full text-xs font-medium text-foreground/50 hover:text-foreground hover:bg-black/5 transition-colors cursor-pointer"
                                    title="Zoekopdracht wissen"
                                    aria-label="Wis zoekopdracht"
                                >
                                    Wis
                                </button>
                            )}
                            <div className="h-4 w-px bg-foreground/15 mx-0.5" aria-hidden="true" />
                            <button
                                type="button"
                                onClick={onClose}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-foreground/65 hover:text-foreground hover:bg-black/5 transition-all cursor-pointer group"
                                title="Sluiten (ESC)"
                                aria-label="Sluit zoekvenster"
                            >
                                <span>Sluiten</span>
                                <kbd className="hidden sm:inline-flex items-center text-[10px] font-mono font-medium text-foreground/45 px-1.5 py-0.5 rounded border border-foreground/10 bg-white shadow-2xs group-hover:border-foreground/25">
                                    ESC
                                </kbd>
                            </button>
                        </div>
                    </div>

                    {/* Resultaten of Rustige Empty State */}
                    <div className="flex-1 overflow-y-auto p-4 sm:p-6 scrollbar-thin scrollbar-thumb-foreground/15">
                        {query.trim().length === 0 ? (
                            <div className="py-12 sm:py-16 px-6 text-center">
                                <p className="text-foreground/45 text-sm sm:text-base font-light">
                                    Typ om direct te zoeken in behandelingen, klachten of praktische informatie...
                                </p>
                            </div>
                        ) : results.length > 0 ? (
                            <div className="space-y-4">
                                <div className="flex items-center justify-between px-1">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/45">
                                        {results.length} {results.length === 1 ? "resultaat gevonden" : "resultaten gevonden"}
                                    </span>
                                </div>

                                <div className="space-y-1.5">
                                    {results.map((item) => {
                                        // Subtiele badge-kleur per categorie
                                        const badgeClass = item.category === "Behandeling" 
                                            ? "bg-blue-accent/10 text-blue-accent border-blue-accent/20"
                                            : item.category === "Klacht / Aandoening"
                                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                            : item.category === "Beweeggroep"
                                            ? "bg-amber-50 text-amber-700 border-amber-200"
                                            : item.category === "Ons Team"
                                            ? "bg-purple-50 text-purple-700 border-purple-200"
                                            : "bg-slate-100 text-slate-700 border-slate-200";

                                        return (
                                            <button
                                                key={item.id}
                                                onClick={() => handleSelect(item.href)}
                                                className="w-full text-left p-3.5 sm:p-4 rounded-2xl hover:bg-[#F7F5F0] border border-transparent hover:border-foreground/8 transition-all group flex items-center justify-between gap-4 cursor-pointer"
                                            >
                                                <div className="flex items-start gap-3.5 min-w-0">
                                                    <div className="w-10 h-10 rounded-xl bg-foreground/5 text-blue-accent flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 group-hover:bg-blue-accent group-hover:text-white transition-all shadow-2xs">
                                                        {item.category === "Behandeling" && <Activity size={18} />}
                                                        {item.category === "Klacht / Aandoening" && <FileText size={18} />}
                                                        {item.category === "Beweeggroep" && <Users size={18} />}
                                                        {item.category === "Ons Team" && <UserCheck size={18} />}
                                                        {item.category === "Praktisch" && <Clock size={18} />}
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                            <h4 className="font-bold text-foreground text-sm sm:text-base group-hover:text-blue-accent transition-colors leading-snug truncate">
                                                                <HighlightMatch text={item.title} query={query} />
                                                            </h4>
                                                            <span className={cn(
                                                                "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border shrink-0",
                                                                badgeClass
                                                            )}>
                                                                {item.category}
                                                            </span>
                                                        </div>
                                                        <p className="text-xs sm:text-sm text-foreground/70 font-light leading-snug line-clamp-2">
                                                            <HighlightMatch text={item.description} query={query} />
                                                        </p>
                                                    </div>
                                                </div>
                                                <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-blue-accent group-hover:translate-x-1 transition-all shrink-0" />
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-10 px-4">
                                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center mx-auto mb-3 text-foreground/40">
                                    <Search size={22} />
                                </div>
                                <h3 className="font-bold text-foreground text-base mb-1">
                                    Geen resultaten voor &lsquo;{query}&rsquo;
                                </h3>
                                <p className="text-foreground/70 text-sm font-light max-w-sm mx-auto mb-6">
                                    We konden geen specifieke pagina vinden. Bekijk onze veelbekeken onderwerpen of neem gerust contact op.
                                </p>
                                <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-md mx-auto">
                                    {["Afspraak maken", "Openingstijden", "Tarieven", "Parkinson", "Artrose", "Contact"].map((sug) => (
                                        <button
                                            key={sug}
                                            type="button"
                                            onClick={() => setQuery(sug)}
                                            className="text-xs font-semibold text-foreground/80 bg-foreground/5 hover:bg-blue-accent hover:text-white px-3 py-1 rounded-full transition-all cursor-pointer"
                                        >
                                            {sug}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex flex-col sm:flex-row justify-center gap-3">
                                    <Link
                                        href="/contact"
                                        onClick={onClose}
                                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-blue-accent text-white font-bold text-xs hover:bg-blue-accent/90 transition-all shadow-xs"
                                    >
                                        <Phone size={14} /> Neem contact op
                                    </Link>
                                    <Link
                                        href="/afspraak-maken"
                                        onClick={onClose}
                                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground font-bold text-xs transition-all cursor-pointer"
                                    >
                                        <Calendar size={14} /> Afspraak inplannen
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
