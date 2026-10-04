"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        title: "Multi-Agent AI & Stateful Knowledge Automation Platform",
        year: "2025",
        constraint: "Stateful multi-agent graph engine handling 500+ concurrent state requests with zero collision; hybrid dense-retrieval RAG pipeline reducing hallucination below 5% across dense technical knowledge bases.",
        decision: "Built with LangGraph, LangChain, Redis, Python, Docker, AWS (EC2/S3).",
        result: "Production-grade multi-agent platform orchestrated via LangGraph, utilizing RAG pipelines and vector embeddings.",
        tech: ["LangGraph", "LangChain", "Redis", "Python", "Docker", "AWS"],
        type: "GenAI / Agentic",
        category: "GenAI & Agentic",
        links: { github: "#", demo: "#", arch: "#" }
    },
    {
        title: "AegisStructure (ResQ-Vision) – AI Structural Risk Platform",
        year: "2025",
        constraint: "Evaluates structural collapse risk compliant with FEMA P-154 and ATC-20 standards with sub-50ms radial proximity queries via PostGIS GIST indexing; client-side keyframe extraction via HTML5 Canvas and offline-first IndexedDB staging to guarantee zero data loss.",
        decision: "Built with Next.js 15 (App Router), PostGIS, Leaflet.js, Upstash Redis, Web Audio API, Vercel.",
        result: "Offline-first resilient geospatial risk platform.",
        tech: ["Next.js 15", "PostGIS", "Leaflet.js", "Redis", "Web Audio API", "IndexedDB"],
        type: "Full-Stack Platform",
        category: "Full-Stack & Distributed",
        links: { github: "#", demo: "#", arch: "#" }
    },
    {
        title: "Generative GPT Transformer From Scratch & C++ Operator Engine",
        year: "2024",
        constraint: "Built causal autoregressive GPT model from bare-metal PyTorch tensors with multi-head QKV projections, dynamic QKV caching, and residual blocks; profiling and INT8/FP16 quantization via Qualcomm QNN SDK and ONNX Runtime, achieving 60% memory compression on edge devices.",
        decision: "Built with PyTorch, C++, Multi-Head Attention, QKV Cache, ONNX, Qualcomm QNN SDK.",
        result: "Optimized bare-metal deep learning engine on edge hardware.",
        tech: ["PyTorch", "C++", "Attention", "ONNX", "QNN SDK"],
        type: "Deep Learning Systems",
        category: "Systems & Physical AI",
        links: { github: "#", demo: "#", arch: "#" }
    },
    {
        title: "NASA – ISS 3D Mission Operations & Real-Time Tracker",
        year: "2025",
        constraint: "Interactive mission control dashboard rendering 3D Earth and orbital trajectories at 60 FPS for dense datasets; tracks 50+ satellite orbits with <200ms latency via satellite.js mathematical coordinate projections.",
        decision: "Built with React 19, Three.js (React Three Fiber), Leaflet.js, Redis, Vercel.",
        result: "High-performance orbital tracker rendering continuous telemetry data.",
        tech: ["React 19", "Three.js", "Leaflet.js", "Redis", "satellite.js"],
        type: "3D WebGL Graphics",
        category: "Full-Stack & Distributed",
        links: { github: "#", demo: "#", arch: "#" }
    },
    {
        title: "Tunify – Microservices Audio Streaming Platform",
        year: "2024",
        constraint: "Decoupled User, Catalog, and Ingestion microservices communicating via REST APIs with isolated database schemas, sustaining sub-50ms latency across 1M+ monthly requests with JWT authentication and Redis rate limiting.",
        decision: "Built with TypeScript, Node.js, PostgreSQL (Neon), Redis, Docker, AWS.",
        result: "Highly scalable, decoupled backend service.",
        tech: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
        type: "Distributed Backend Architecture",
        category: "Full-Stack & Distributed",
        links: { github: "#", demo: "#", arch: "#" }
    },
    {
        title: "DTwin – Real-Time AI Digital Health Dashboard",
        year: "2025",
        constraint: "Sub-50ms peer-to-peer WebRTC video stream processing for vital telemetry capture and interactive wellness metrics.",
        decision: "Built with React, Vite, Tailwind CSS, WebRTC, Supabase, Vercel.",
        result: "Real-time AI digital health twin interface.",
        tech: ["React", "Vite", "WebRTC", "Supabase", "Tailwind CSS"],
        type: "WebRTC Telemetry",
        category: "Systems & Physical AI",
        links: { github: "#", demo: "#", arch: "#" }
    }
];

const categories = ["All", "Systems & Physical AI", "GenAI & Agentic", "Full-Stack & Distributed"];

export function EngineeringGallery() {
    const [expanded, setExpanded] = useState<number | null>(0);
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = projects.filter(p => activeFilter === "All" || p.category === activeFilter);

    return (
        <div className="w-full">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => {
                            setActiveFilter(cat);
                            setExpanded(null);
                        }}
                        className={`px-4 py-2 font-mono text-[10px] tracking-widest uppercase transition-colors border ${
                            activeFilter === cat
                                ? "bg-accent/10 border-accent/40 text-accent"
                                : "border-border/50 text-muted-foreground hover:border-accent/40 hover:text-accent"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="space-y-[1px] bg-border border border-border">
                {filteredProjects.map((p, index) => {
                    // find original index for stable CASE-XX numbering if preferred, 
                    // or just use map index. We'll use the original index for stability.
                    const originalIndex = projects.findIndex(orig => orig.title === p.title);
                    const isOpen = expanded === originalIndex;
                    return (
                        <motion.div
                            key={p.title}
                            className={`bg-background transition-all duration-300 overflow-hidden interactive group ${
                                isOpen ? "border-l-2 border-accent" : "border-l-2 border-transparent hover:border-border"
                            }`}
                            layout
                        >
                            <button
                                onClick={() => setExpanded(isOpen ? null : originalIndex)}
                                className="w-full text-left px-6 py-6 md:px-10 md:py-8 flex items-center justify-between gap-4"
                                aria-expanded={isOpen}
                            >
                                <div className="flex items-center gap-6 min-w-0">
                                    <span className="font-mono text-xs text-muted-foreground group-hover:text-accent transition-colors shrink-0">
                                        CASE-{String(originalIndex + 1).padStart(2, "0")}
                                    </span>
                                    <span className={`text-xl md:text-3xl font-light tracking-tight transition-colors truncate ${isOpen ? "text-accent" : "text-foreground group-hover:text-accent"}`}>
                                        {p.title}
                                    </span>
                                    <span className="hidden md:inline font-mono text-[10px] tracking-widest uppercase text-muted-foreground shrink-0">
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
                                                        <div className="font-mono text-[10px] tracking-widest text-accent mb-3 uppercase">Architectural Highlights</div>
                                                        <p className="text-sm md:text-base leading-relaxed text-muted-foreground font-light">
                                                            {p.constraint}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div className="font-mono text-[10px] tracking-widest text-accent mb-3 uppercase">Stack Overview</div>
                                                        <p className="text-sm md:text-base leading-relaxed text-muted-foreground font-light">
                                                            {p.decision}
                                                        </p>
                                                    </div>
                                                    
                                                    {/* External Links Triggers */}
                                                    <div className="flex gap-4 pt-2">
                                                        {["GitHub", "Demo", "Architecture"].map((lbl) => (
                                                            <a 
                                                                key={lbl}
                                                                href="#" 
                                                                className="font-mono text-[10px] tracking-widest uppercase border border-border/50 px-3 py-1 text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors"
                                                            >
                                                                {lbl}
                                                            </a>
                                                        ))}
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
