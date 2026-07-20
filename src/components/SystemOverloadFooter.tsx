"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MagneticButton } from "./MagneticButton";

export function SystemOverloadFooter() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="pt-48 pb-32 flex flex-col items-center justify-center border-t border-border/50 text-center relative overflow-hidden interactive cursor-none">
      
      {/* Glitching Background on Hover */}
      {isHovered && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0, 0.5, 0] }}
          transition={{ repeat: Infinity, duration: 0.2, repeatType: "mirror" }}
          className="absolute inset-0 bg-accent/20 mix-blend-color-burn z-0 pointer-events-none"
        />
      )}

      {/* Terminal Title */}
      <h2 className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-16 relative z-10">
        root@var-system:~$ execute contact_protocol.sh
      </h2>

      {/* The Massive Button */}
      <div 
        className="relative z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <MagneticButton href="mailto:vathithyaramaa@gmail.com">
          <div className={`relative px-8 py-6 md:px-16 md:py-8 border transition-all duration-100 bg-[#050505]
            ${isHovered ? 'border-accent shadow-[0_0_50px_rgba(255,46,147,0.6)] text-background' : 'border-border text-accent'}
          `}>
            {/* The Text that glitches on hover */}
            <span className={`relative z-10 font-mono text-sm md:text-2xl font-bold tracking-widest uppercase
              ${isHovered ? 'animate-pulse' : ''}
            `}>
              [ INITIATE COLLABORATION ]
            </span>
            
            {/* The Glitch Fill */}
            <div className={`absolute inset-0 bg-accent transition-transform duration-300 ease-out z-0
              ${isHovered ? 'scale-x-100' : 'scale-x-0 origin-left'}
            `} />
          </div>
        </MagneticButton>
      </div>

      {/* System Diagnostics Output (Contact Links) */}
      <div className="mt-32 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-[10px] text-muted-foreground uppercase tracking-widest border-t border-border pt-8 relative z-10 text-left">
        
        <div className="flex flex-col gap-2 group">
          <span className="text-border">SYS.STATUS</span>
          <span className="text-foreground flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" /> ONLINE
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-border">COMMS.PRIMARY</span>
          <a href="mailto:vathithyaramaa@gmail.com" className="hover:text-accent interactive transition-colors">vathithyaramaa@gmail.com</a>
          <a href="tel:+919962581115" className="hover:text-accent interactive transition-colors">+91 9962581115</a>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-border">NETWORK.NODES</span>
          <a href="https://github.com/v-athithyaramaa" target="_blank" className="hover:text-accent interactive transition-colors">GITHUB://V-ATHITHYARAMAA</a>
          <a href="https://www.linkedin.com/in/v-athithya-ramaa1/" target="_blank" className="hover:text-accent interactive transition-colors">LINKEDIN://V-ATHITHYA-RAMAA1</a>
        </div>

        <div className="flex flex-col gap-2 text-right">
          <span className="text-border">SYS.AUTHOR</span>
          <span className="text-foreground">© 2024 V ATHITHYA RAMAA</span>
          <span>CHENNAI, INDIA</span>
        </div>

      </div>
    </section>
  );
}
