"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ARCHITECT_SCRIPT = [
  "VAR_OS v2.0.26 initialized...",
  "Loading architect_manifesto.md...",
  "Mounting microservices payload... [OK]",
  "Executing DDD logic gates...",
  "> Status: READY.",
  "> Awaiting command..."
];

export function ArchitectTerminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < ARCHITECT_SCRIPT.length) {
        const nextLine = ARCHITECT_SCRIPT[currentLine];
        if (nextLine) {
          setLines(prev => [...prev, nextLine]);
        }
        currentLine++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto md:mx-0 mt-8 rounded-lg overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">
      {/* Terminal Header */}
      <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="mx-auto text-[10px] font-mono tracking-widest text-white/40">
          zsh - var_architect
        </div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-4 md:p-6 font-mono text-xs md:text-sm text-white/80 min-h-[160px] flex flex-col gap-1.5">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {line?.startsWith('>') ? (
              <span className="text-accent">{line}</span>
            ) : (
              line
            )}
          </motion.div>
        ))}
        {isTyping && (
          <div className="w-2 h-4 bg-white/50 animate-pulse mt-1" />
        )}
        {!isTyping && (
          <div className="flex items-center gap-2 mt-1 text-accent">
            <span>{`>`}</span>
            <div className="w-2 h-4 bg-accent animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}
