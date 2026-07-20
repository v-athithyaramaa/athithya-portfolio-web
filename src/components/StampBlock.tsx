"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EMAIL = "vathithyaramaa@gmail.com";
const PHONE = "+91 9962581115";

function LiveClock() {
    const [time, setTime] = useState<string | null>(null);

    useEffect(() => {
        const tick = () =>
            setTime(
                new Intl.DateTimeFormat("en-GB", {
                    timeZone: "Asia/Kolkata",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false,
                }).format(new Date())
            );
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <span className="font-mono text-xs tabular-nums text-foreground">
            {time ?? "--:--:--"} IST<span className="animate-pulse text-accent">_</span>
        </span>
    );
}

export function StampBlock() {
    const [copied, setCopied] = useState(false);
    const year = new Date().getFullYear();

    const copyEmail = () => {
        navigator.clipboard.writeText(EMAIL).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <section id="contact" className="bg-background text-foreground relative overflow-hidden py-24 border-t border-border/30">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col min-h-[60vh] justify-between">
                
                {/* Header Sheet Label */}
                <div className="flex items-center gap-4 mb-16">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">06</span>
                    <div className="h-px w-12 bg-border" />
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">STAMP BLOCK</span>
                    <div className="flex-1" />
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent border border-accent/30 px-2 py-1">
                        FINAL SHEET
                    </span>
                </div>

                {/* Main CTA */}
                <div className="flex-1 flex flex-col justify-center max-w-3xl mb-16">
                    <h2 className="display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[0.9] tracking-tighter mb-8">
                        Let's Architect <br />
                        <span className="text-muted-foreground italic serif">The Future.</span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed font-light text-lg mb-10 max-w-xl">
                        I build highly optimized, intelligent systems that scale. If you have a complex problem that requires an elegant, robust solution, let's establish a connection.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href={`mailto:${EMAIL}`}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-mono text-[10px] font-bold tracking-widest uppercase hover:bg-accent transition-colors duration-300"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" />
                            </svg>
                            INITIALIZE CONTACT
                        </a>
                        <button
                            onClick={copyEmail}
                            className="inline-flex items-center gap-3 px-6 py-4 border border-border font-mono text-[10px] font-bold tracking-widest uppercase hover:border-accent hover:text-accent transition-colors duration-300"
                        >
                            {copied ? "COPIED ✓" : EMAIL}
                        </button>
                        <span className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground">
                            ≤ 24H RESPONSE TIME
                        </span>
                    </div>
                </div>

                {/* Technical Title Block (Blueprint Style) */}
                <div className="border border-border/50 bg-card/20 backdrop-blur-sm">
                    <div className="grid grid-cols-2 md:grid-cols-4 border-b border-border/50">
                        <div className="col-span-2 p-5 border-r border-border/50">
                            <div className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground mb-2">PROJECT</div>
                            <div className="text-sm font-bold tracking-tight text-foreground">SYSTEM ARCHITECT PORTFOLIO</div>
                        </div>
                        <div className="p-5 border-r border-border/50">
                            <div className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground mb-2">DWG NO.</div>
                            <div className="font-mono text-sm text-accent">VAR-{year}-001</div>
                        </div>
                        <div className="p-5">
                            <div className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground mb-2">SYSTEM TIME</div>
                            <LiveClock />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {[
                            { label: "ARCHITECT", value: "V ATHITHYA RAMAA" },
                            { label: "NETWORK", value: EMAIL, href: `mailto:${EMAIL}` },
                            { label: "PHONE", value: PHONE, href: `tel:${PHONE.replace(/\s/g, '')}` },
                            { label: "GITHUB", value: "@v-athithyaramaa", href: "https://github.com/v-athithyaramaa" },
                        ].map((cell, i) => (
                            <motion.div
                                key={cell.label}
                                className={`p-5 ${i < 3 ? "md:border-r border-border/50" : ""}`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + i * 0.1 }}
                            >
                                <div className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground mb-2">
                                    {cell.label}
                                </div>
                                {cell.href ? (
                                    <a href={cell.href} target="_blank" rel="noopener noreferrer" className="font-mono text-xs hover:text-accent transition-colors break-all">
                                        {cell.value}
                                    </a>
                                ) : (
                                    <div className="font-mono text-xs text-foreground">{cell.value}</div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
