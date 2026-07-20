"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";

interface HoloBadgeProps {
  role: string;
  org: string;
  date: string;
  desc: string;
  tag: string;
}

export function HoloBadge({ role, org, date, desc, tag }: HoloBadgeProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Generate a fallback initial for the logo
  const initial = org.charAt(0);

  return (
    <motion.div
      style={{ perspective: 1000 }}
      className="relative w-full interactive cursor-none"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full bg-[#0a0a0a] border border-border rounded-lg p-8 transform-gpu preserve-3d shadow-2xl transition-all duration-200 ease-linear overflow-hidden group"
      >
        {/* Holographic Glare Overlay */}
        <motion.div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-50 mix-blend-screen"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,46,147,0.4) 0%, transparent 60%)`
          }}
        />

        {/* Corporate Logo Placeholder */}
        <div className="absolute top-6 right-6 w-12 h-12 rounded-sm border border-accent/30 bg-accent/5 flex items-center justify-center transform-gpu translate-z-10 group-hover:border-accent transition-colors duration-500">
          <span className="font-sans text-xl font-bold text-accent/80">{initial}</span>
        </div>

        {/* Badge Content */}
        <div className="relative z-10 transform-gpu translate-z-8">
          <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-accent mb-4 block">
            [ CLEARANCE: {tag} ]
          </span>
          <h3 className="font-sans text-3xl font-light tracking-tight text-foreground mb-1 group-hover:text-accent transition-colors duration-500">
            {org}
          </h3>
          <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            {role}
          </h4>
          <p className="text-sm text-muted-foreground/80 font-mono leading-relaxed max-w-lg group-hover:text-foreground/90 transition-colors duration-500">
            {desc}
          </p>
        </div>

        {/* Security Barcode */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent/20 via-accent/5 to-transparent transform-gpu translate-z-4" />
        <div className="mt-8 flex items-end justify-between border-t border-border/50 pt-4 transform-gpu translate-z-4">
          <div className="flex gap-1">
            {[1,0,1,1,0,1,0,0,1,1,0,1].map((bar, i) => (
              <div key={i} className={`h-4 ${bar ? 'w-1 bg-accent/40' : 'w-[2px] bg-accent/10'}`} />
            ))}
          </div>
          <span className="font-mono text-[9px] text-muted-foreground tracking-widest">{date}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
