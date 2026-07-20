"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Grandmaster() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full bg-card/5 border border-border p-8 md:p-16 relative overflow-hidden flex flex-col justify-between">
      
      {/* Subtle Chessboard Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(45deg, var(--foreground) 25%, transparent 25%, transparent 75%, var(--foreground) 75%, var(--foreground)), linear-gradient(45deg, var(--foreground) 25%, transparent 25%, transparent 75%, var(--foreground) 75%, var(--foreground))`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="md:w-1/2">
          <span className="meta block mb-4 text-accent">STRATEGIC FORESIGHT</span>
          <h3 className="font-sans text-3xl md:text-5xl font-light tracking-tight text-foreground mb-6">
            The Grandmaster
          </h3>
          <p className="text-muted-foreground font-light leading-relaxed mb-6">
            With a Chess ELO exceeding 900, my approach to backend architecture mirrors the chessboard. I don't just write functions; I anticipate edge cases, protect core infrastructure, and architect systems that are three moves ahead of massive data loads.
          </p>
          <div className="flex gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest bg-white/5 px-3 py-1 border border-border">
              ANTICIPATION
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest bg-accent/10 text-accent px-3 py-1 border border-accent/20">
              DEFENSE-IN-DEPTH
            </span>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center relative h-[300px] w-full"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
          {/* Interactive Knight SVG */}
          <motion.div 
            className="relative z-20 cursor-[var(--cursor-crosshair)]"
            animate={{
              y: isHovered ? -20 : 0,
              filter: isHovered ? "drop-shadow(0 20px 30px rgba(255,46,147,0.3))" : "drop-shadow(0 0px 0px rgba(0,0,0,0))"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <svg width="180" height="220" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground">
              {/* Sleek, architectural knight profile */}
              <path d="M50 10 C30 10, 20 30, 20 50 C20 60, 30 70, 30 70 L25 85 L20 110 L80 110 L75 85 L70 70 C70 70, 80 60, 80 50 C80 20, 60 10, 50 10 Z" fill="var(--background)" stroke="var(--foreground)"/>
              <path d="M30 40 C40 30, 60 30, 70 40" stroke="var(--accent)" strokeDasharray="2 2" />
              <circle cx="40" cy="45" r="3" fill="var(--accent)" />
              <path d="M20 110 L80 110" stroke="var(--foreground)" strokeWidth="3" />
            </svg>

            {/* Tactical overlay lines when hovered */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {/* L-Shape movement path */}
                  <svg className="absolute -top-10 -right-20 w-40 h-40 overflow-visible" stroke="var(--accent)" strokeWidth="1" fill="none" strokeDasharray="4 4">
                    <motion.path 
                      d="M 90 150 L 90 50 L 190 50" 
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                    <circle cx="190" cy="50" r="4" fill="var(--accent)" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
