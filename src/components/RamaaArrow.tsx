"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function RamaaArrow() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="fixed top-[84px] left-0 w-full h-[2px] pointer-events-none z-[9999]">
      {/* Background Track */}
      <div className="absolute top-0 left-0 w-full h-full bg-border/20" />
      
      {/* The Arrow Projectile */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 h-12 w-40"
        style={{
          left: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
          x: useTransform(smoothProgress, [0, 0.95, 1], ["-100%", "-100%", "0%"])
        }}
      >
        {/* Subtle Divine Glow behind arrow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-8 bg-accent blur-[10px] opacity-30 mix-blend-screen rounded-full" />
        
        {/* The Astra (Divine Arrow) SVG */}
        <svg 
          viewBox="0 0 150 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-[120px] h-full relative z-10 drop-shadow-[0_0_5px_var(--accent)]"
        >
          {/* Fletching (Feathers at the back) */}
          <path d="M5 20 L20 10 L20 18 L35 18 L20 5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 20 L20 30 L20 22 L35 22 L20 35" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 20 L25 15 L25 19 L35 19 L25 10" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
          <path d="M15 20 L25 25 L25 21 L35 21 L25 30" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>

          {/* Shaft (The central rod, longer and elegant) */}
          <path d="M5 20 L130 20" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
          
          {/* Ornate Binding near the head */}
          <rect x="115" y="17" width="5" height="6" fill="var(--accent)" />
          <rect x="122" y="18" width="2" height="4" fill="var(--accent)" />

          {/* The Divine Arrowhead (Trishul/Astra inspired shape) */}
          <path d="M130 20 L125 12 L145 20 L125 28 Z" fill="var(--background)" stroke="var(--accent)" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M130 20 L150 20 L135 15" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M150 20 L135 25" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </div>
  );
}
