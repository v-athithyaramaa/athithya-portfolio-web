"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function CircuitTracer() {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed left-6 md:left-12 top-0 bottom-0 w-[1px] bg-border z-50 pointer-events-none hidden md:block">
      {/* Static Circuit Nodes */}
      <div className="absolute top-[15%] -left-[5px] w-3 h-3 border border-border bg-background rotate-45" />
      <div className="absolute top-[45%] -left-[5px] w-3 h-3 border border-border bg-background rotate-45" />
      <div className="absolute top-[75%] -left-[5px] w-3 h-3 border border-border bg-background rotate-45" />
      
      {/* The Glowing Tracer Packet */}
      <motion.div 
        className="absolute top-0 left-[-1px] w-[3px] h-32 bg-gradient-to-b from-transparent via-accent to-transparent"
        style={{ top: yPos, y: "-50%" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_15px_var(--accent)]" />
      </motion.div>
    </div>
  );
}
