"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  MessageCircle, 
  X, 
  Send, 
  RotateCcw, 
  ArrowRight, 
  ChevronRight 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  quickLinks?: { label: string; href: string }[];
  suggestedQuestions?: string[];
  timestamp: string;
}

const INITIAL_SUGGESTIONS = [
  "Wat zijn de openingstijden?",
  "Waar zijn jullie gevestigd?",
  "Wat kost een behandeling?",
  "Hoe kan ik een afspraak maken?",
  "Wat is FysioFit?"
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "Welkom bij Fysio Laren. 👋\n\nHeeft u een vraag over onze behandelingen, tarieven of werkwijze? Ik help u graag direct op weg. Waar kan ik u mee van dienst zijn?",
      suggestedQuestions: INITIAL_SUGGESTIONS,
      timestamp: "Zojuist"
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    if (!isOpen) {
      setIsOpen(true);
    }

    const userMsgId = `user-${Date.now()}`;
    const newMessages: Message[] = [
      ...messages,
      {
        id: userMsgId,
        sender: "user",
        text: query,
        timestamp: "Zojuist"
      }
    ];

    setMessages(newMessages);
    setInputMessage("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query })
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: data.response || "Geen antwoord ontvangen.",
          quickLinks: data.quickLinks,
          suggestedQuestions: data.suggestedQuestions,
          timestamp: "Zojuist"
        }
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: "Er ging helaas iets mis bij het ophalen van het antwoord. Neem gerust telefonisch contact op via 0573 - 21 50 58.",
          quickLinks: [{ label: "Contact opnemen", href: "/contact" }],
          timestamp: "Zojuist"
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: "welcome-reset",
        sender: "bot",
        text: "Het gesprek is gewist. Stel gerust een nieuwe vraag over Fysio Laren!",
        suggestedQuestions: INITIAL_SUGGESTIONS,
        timestamp: "Zojuist"
      }
    ]);
  };

  return (
    <>
      {/* Uitnodigende Vraag-Pil (Trigger rechtsonder) */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40">
        <AnimatePresence>
          {!isOpen ? (
            <motion.button
              onClick={() => setIsOpen(true)}
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/95 backdrop-blur-md text-foreground hover:text-blue-accent pl-3.5 pr-4 py-2.5 sm:py-3 rounded-full shadow-xl border border-foreground/10 hover:border-blue-accent/40 flex items-center gap-3 transition-all cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-full bg-blue-accent text-white flex items-center justify-center relative shadow-sm group-hover:scale-105 transition-transform shrink-0">
                <MessageCircle className="w-4 h-4" />
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-white"></span>
                </span>
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold leading-tight text-foreground group-hover:text-blue-accent transition-colors">
                  Praktijkassistent
                </span>
                <span className="block text-[11px] text-foreground/60 font-light">
                  Openingstijden, tarieven & info
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-foreground/40 group-hover:translate-x-0.5 group-hover:text-blue-accent transition-all ml-0.5" />
            </motion.button>
          ) : null}
        </AnimatePresence>
      </div>

      {/* Chat Popup Venster */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-6 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-[400px] md:w-[420px] h-[570px] max-h-[84vh] bg-[#FAF9F6] rounded-[2rem] shadow-2xl border border-foreground/10 flex flex-col overflow-hidden"
          >
            {/* Header met Fysio Laren Cobalt branding */}
            <div className="bg-blue-accent px-5 py-4 flex items-center justify-between shrink-0 text-white shadow-sm">
              <div>
                <h3 className="font-bold text-base leading-tight text-white">
                  Praktijkassistent
                </h3>
                <p className="text-xs text-white/80 font-light mt-0.5">
                  Fysio Laren
                </p>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleReset}
                  title="Gesprek wissen"
                  className="p-2 text-white/75 hover:text-white hover:bg-white/15 rounded-full transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Sluiten"
                  className="p-2 text-white/75 hover:text-white hover:bg-white/15 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Berichtenlijst */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-[#FAF9F6]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex flex-col max-w-[88%]",
                    msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <div
                    className={cn(
                      "p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-xs whitespace-pre-line",
                      msg.sender === "user"
                        ? "bg-blue-accent text-white rounded-tr-xs font-medium"
                        : "bg-white text-foreground/90 border border-foreground/8 rounded-tl-xs"
                    )}
                  >
                    {msg.text}
                  </div>

                  {/* Doorklik links */}
                  {msg.quickLinks && msg.quickLinks.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {msg.quickLinks.map((link, idx) => {
                        const isExternalOrTel = link.href.startsWith("tel:") || link.href.startsWith("http");
                        return isExternalOrTel ? (
                          <a
                            key={idx}
                            href={link.href}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-accent bg-white hover:bg-blue-accent hover:text-white border border-blue-accent/25 hover:border-blue-accent px-3.5 py-1.5 rounded-full shadow-2xs transition-all"
                          >
                            <span>{link.label}</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        ) : (
                          <Link
                            key={idx}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-accent bg-white hover:bg-blue-accent hover:text-white border border-blue-accent/25 hover:border-blue-accent px-3.5 py-1.5 rounded-full shadow-2xs transition-all"
                          >
                            <span>{link.label}</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        );
                      })}
                    </div>
                  )}

                  {/* Suggestie buttons */}
                  {msg.suggestedQuestions && msg.suggestedQuestions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {msg.suggestedQuestions.map((sugg, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(sugg)}
                          className="text-xs font-medium text-foreground/80 bg-white hover:bg-[#F7F5F0] hover:text-blue-accent hover:border-blue-accent/30 border border-foreground/10 px-3.5 py-2 rounded-full transition-all shadow-2xs cursor-pointer text-left"
                        >
                          {sugg}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-1.5 bg-white px-4 py-3 rounded-2xl border border-foreground/8 w-fit rounded-tl-xs shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-blue-accent/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-2 h-2 rounded-full bg-blue-accent/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-2 h-2 rounded-full bg-blue-accent/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Invoerbalk */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 sm:p-4 bg-white border-t border-foreground/8 flex flex-col gap-1.5 shrink-0"
            >
              <div className="flex items-center gap-2 bg-[#F7F5F0] focus-within:bg-white border border-foreground/10 focus-within:border-blue-accent/40 rounded-full px-3.5 py-1 transition-all shadow-inner">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Stel een vraag over de praktijk..."
                  className="flex-1 bg-transparent text-foreground placeholder:text-foreground/45 text-xs sm:text-sm py-2 outline-none"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isLoading}
                  aria-label="Verstuur bericht"
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-all shrink-0",
                    inputMessage.trim() && !isLoading
                      ? "bg-blue-accent text-white hover:bg-blue-accent/90 shadow-sm cursor-pointer"
                      : "bg-foreground/10 text-foreground/30 cursor-not-allowed"
                  )}
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              <span className="text-[10px] text-center text-foreground/50 font-light mt-0.5">
                Voor medisch advies over uw klacht verwijzen we naar onze fysiotherapeuten.
              </span>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
