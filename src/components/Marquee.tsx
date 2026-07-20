"use client";

import { motion } from "framer-motion";

export function Marquee({ text }: { text: string }) {
  return (
    <div className="relative w-full overflow-hidden border-y border-border py-4 bg-background/50 backdrop-blur-sm z-20">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        <div className="flex gap-8 px-4 font-mono text-sm tracking-widest uppercase text-foreground items-center">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>{text}</span>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
