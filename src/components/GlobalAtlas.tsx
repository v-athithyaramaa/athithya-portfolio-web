"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function GlobalAtlas() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  return (
    <div className="w-full bg-card/5 border border-border p-8 md:p-16 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
      
      {/* Background Cartography Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
        <div>
          <span className="meta block mb-4 text-accent">INFRASTRUCTURE REACH</span>
          <h3 className="font-sans text-3xl md:text-5xl font-light tracking-tight text-foreground">
            Global Atlas
          </h3>
        </div>
        <div className="text-right">
          <p className="text-muted-foreground max-w-sm font-light leading-relaxed mb-4">
            Architecting cross-border systems that seamlessly bridge continents, ensuring zero-latency data transmission for critical healthcare infrastructure.
          </p>
          <span className="font-mono text-[9px] uppercase tracking-widest bg-accent/10 text-accent px-3 py-1 border border-accent/20">
            MSKCC // NY ↔ IND
          </span>
        </div>
      </div>

      {/* Map Visualization */}
      <div className="relative w-full h-[300px] md:h-[400px] border border-border/50 bg-background/50 flex items-center justify-center">
        
        {/* Minimalist World Map Outline (SVG) */}
        <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20 absolute inset-0 pointer-events-none">
          <path d="M 200 150 Q 250 100, 300 160 T 400 150 M 600 250 Q 650 200, 700 220 T 800 280" fill="none" stroke="var(--foreground)" strokeWidth="1" strokeDasharray="4 4" />
          <text x="250" y="200" fill="var(--foreground)" className="font-mono text-xs">NORTH AMERICA</text>
          <text x="700" y="300" fill="var(--foreground)" className="font-mono text-xs">SOUTH ASIA</text>
        </svg>

        {/* Nodes and Connection */}
        <svg viewBox="0 0 1000 500" className="w-full h-full absolute inset-0">
          
          {/* NY Node */}
          <g transform="translate(250, 180)">
            <circle cx="0" cy="0" r="4" fill="var(--accent)" />
            <motion.circle 
              cx="0" cy="0" r="16" fill="none" stroke="var(--accent)" strokeWidth="1"
              initial={{ scale: 0.5, opacity: 1 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
            />
            <text x="-40" y="-15" fill="var(--foreground)" className="font-mono text-[10px] tracking-widest">NEW YORK</text>
            <text x="-40" y="-3" fill="var(--muted-foreground)" className="font-mono text-[8px] tracking-widest">40.7128° N, 74.0060° W</text>
          </g>

          {/* Chennai/India Node */}
          <g transform="translate(720, 320)">
            <circle cx="0" cy="0" r="4" fill="var(--accent)" />
            <motion.circle 
              cx="0" cy="0" r="16" fill="none" stroke="var(--accent)" strokeWidth="1"
              initial={{ scale: 0.5, opacity: 1 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut", delay: 1 }}
            />
            <text x="15" y="-15" fill="var(--foreground)" className="font-mono text-[10px] tracking-widest">CHENNAI</text>
            <text x="15" y="-3" fill="var(--muted-foreground)" className="font-mono text-[8px] tracking-widest">13.0827° N, 80.2707° E</text>
          </g>

          {/* Data Connection Arc */}
          {isAnimating && (
            <motion.path
              d="M 250 180 Q 485 50, 720 320"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0.5 }}
              animate={{ pathLength: 1, opacity: [0.5, 1, 0.5] }}
              transition={{ 
                pathLength: { duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
                opacity: { duration: 3, ease: "easeInOut", repeat: Infinity }
              }}
            />
          )}

          {/* Data Packets */}
          {isAnimating && (
            <motion.circle
              cx="0" cy="0" r="3" fill="#fff"
              animate={{
                offsetDistance: ["0%", "100%"]
              }}
              style={{
                offsetPath: `path("M 250 180 Q 485 50, 720 320")`,
                boxShadow: "0 0 10px #fff"
              }}
              transition={{ duration: 3, ease: "linear", repeat: Infinity }}
            />
          )}
        </svg>

      </div>
    </div>
  );
}
