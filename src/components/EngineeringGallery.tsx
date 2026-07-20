"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        title: "DTwin",
        year: "2025",
        constraint: "Deliver real-time predictive health monitoring, mental state detection, and personalized wellness tracking securely.",
        decision: "Integrated Google Gemini Vision and Clarifai for deep analysis, leveraging WebRTC and a Fitbit SDK for real-time telemetry.",
        result: "An intelligent, responsive health twin providing real-time interactive visualizations and accurate risk assessments.",
        tech: ["MERN", "Gemini AI", "WebRTC", "Fitbit SDK", "JWT"],
        type: "AI / Healthcare",
    },
    {
        title: "Multi-Agent Platform",
        year: "2026",
        constraint: "Extract actionable insights autonomously from dense knowledge bases with near-zero hallucination rates in a production environment.",
        decision: "Architected a decoupled microservices platform orchestrating specialized LangGraph agents, backed by RAG vector embeddings and a Redis caching layer.",
        result: "Highly scalable, stateful multi-agent system deployed securely on AWS with custom Nginx load balancing.",
        tech: ["LangGraph", "Microservices", "Redis", "RAG", "AWS"],
        type: "LLM Orchestration",
    },
    {
        title: "NASA – ISS Tracker",
        year: "2025",
        constraint: "Process and render live, complex orbital telemetry and 3D geospatial data without performance bottlenecks.",
        decision: "Utilized Three.js and Leaflet.js for high-fidelity rendering, caching AI-powered space queries via Redis to optimize API costs.",
        result: "Immersive, real-time command center featuring interactive 3D simulations and zero-latency TLE predictions.",
        tech: ["Three.js", "Redis", "Docker", "Gemini AI", "satellite.js"],
        type: "Simulation / Telemetry",
    },
    {
        title: "VAR Tech Pro",
        year: "2024",
        constraint: "Ensure robust role-based access control and efficient, globally managed cart state across active user sessions.",
        decision: "Implemented an MVP-driven full-stack architecture using the Context API for lightweight state management and JWT for secure isolation.",
        result: "Scalable, SEO-optimized digital storefront with distinct admin/user portals and secure payment pipelines.",
        tech: ["React", "Node.js", "MongoDB", "Context API", "JWT"],
        type: "E-Commerce Arch",
    },
    {
        title: "Contact Manager Backend",
        year: "2024",
        constraint: "Design a strictly authenticated, high-throughput REST API with flawless middleware execution and data isolation.",
        decision: "Engineered a pure backend architecture applying MVP organization, modular middleware pipelines, and granular JWT protection.",
        result: "A highly secure, decoupled, and performant backend service built entirely on standard clean coding principles.",
        tech: ["Express.js", "Node.js", "MongoDB", "JWT", "REST API"],
        type: "Backend Service",
    }
];

export function EngineeringGallery() {
    const [expanded, setExpanded] = useState<number | null>(0);

    return (
        <div className="w-full">
            <div className="space-y-[1px] bg-border border border-border">
                {projects.map((p, i) => {
                    const isOpen = expanded === i;
                    return (
                        <motion.div
                            key={p.title}
                            className={`bg-background transition-all duration-300 overflow-hidden interactive group ${
                                isOpen ? "border-l-2 border-accent" : "border-l-2 border-transparent hover:border-border"
                            }`}
                            layout
                        >
                            <button
                                onClick={() => setExpanded(isOpen ? null : i)}
                                className="w-full text-left px-6 py-6 md:px-10 md:py-8 flex items-center justify-between gap-4"
                                aria-expanded={isOpen}
                            >
                                <div className="flex items-center gap-6 min-w-0">
                                    <span className="font-mono text-xs text-muted-foreground group-hover:text-accent transition-colors">
                                        CASE-{String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className={`text-2xl md:text-4xl font-light tracking-tight transition-colors ${isOpen ? "text-accent" : "text-foreground group-hover:text-accent"}`}>
                                        {p.title}
                                    </span>
                                    <span className="hidden md:inline font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                                        {p.type}
                                    </span>
                                </div>
                                <div className="flex items-center gap-6 flex-shrink-0">
                                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground">{p.year}</span>
                                    <motion.div
                                        className={`w-6 h-6 border flex items-center justify-center transition-colors ${isOpen ? "border-accent text-accent" : "border-border text-muted-foreground group-hover:border-accent group-hover:text-accent"}`}
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <svg width="10" height="10" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <line x1="4" y1="0" x2="4" y2="8" />
                                            <line x1="0" y1="4" x2="8" y2="4" />
                                        </svg>
                                    </motion.div>
                                </div>
                            </button>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <div className="px-6 md:px-10 pb-8 md:pb-12 pt-4 border-t border-border/50">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                                                <div className="space-y-8">
                                                    <div>
                                                        <div className="font-mono text-[10px] tracking-widest text-accent mb-3 uppercase">Constraint</div>
                                                        <p className="text-sm md:text-base leading-relaxed text-muted-foreground font-light">
                                                            {p.constraint}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div className="font-mono text-[10px] tracking-widest text-accent mb-3 uppercase">Key Decision</div>
                                                        <p className="text-sm md:text-base leading-relaxed text-muted-foreground font-light">
                                                            {p.decision}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="space-y-8">
                                                    <div>
                                                        <div className="font-mono text-[10px] tracking-widest text-accent mb-3 uppercase">Result</div>
                                                        <p className="text-sm md:text-base leading-relaxed text-foreground font-light">
                                                            {p.result}
                                                        </p>
                                                    </div>

                                                    <div className="border-l border-accent/30 pl-4">
                                                        <div className="font-mono text-[10px] tracking-widest text-muted-foreground mb-3 uppercase">Technical Stack</div>
                                                        <div className="flex flex-wrap gap-2">
                                                            {p.tech.map(t => (
                                                                <span key={t} className="font-mono text-[9px] uppercase tracking-widest bg-muted/50 px-3 py-1 text-accent">
                                                                    {t}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
