"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";

export function PremiumFooter() {
  return (
    <section className="pt-48 pb-32 flex flex-col items-center justify-center border-t border-border/50 text-center relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-accent to-transparent opacity-50" />

      {/* Elegant Typography Hook */}
      <h2 className="display text-6xl md:text-9xl font-bold tracking-tighter mb-4 text-stroke">
        INITIATE
      </h2>
      <h2 className="serif italic text-5xl md:text-8xl tracking-tight mb-16 text-foreground">
        Deployment.
      </h2>
      
      <MagneticButton href="mailto:vathithyaramaa@gmail.com">
        <div className="font-mono text-xs uppercase tracking-widest border border-border px-12 py-6 hover:border-accent hover:bg-accent hover:text-background transition-all duration-500 relative overflow-hidden group">
          <span className="relative z-10 font-bold">CONTACT ARCHITECT</span>
          <div className="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
        </div>
      </MagneticButton>
      
      {/* Sophisticated Grid Information */}
      <div className="mt-32 w-full max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-8 font-mono text-[10px] text-muted-foreground uppercase tracking-widest border-t border-border pt-12 text-center md:text-left">
        
        <div className="flex flex-col gap-3 items-center md:items-start">
          <span className="text-white/60">PHONE</span>
          <a href="tel:+919962581115" className="hover:text-accent transition-colors text-white">+91 9962581115</a>
        </div>

        <div className="flex flex-col gap-3 items-center md:items-start">
          <span className="text-white/60">EMAIL</span>
          <a href="mailto:vathithyaramaa@gmail.com" className="hover:text-accent transition-colors text-white">VATHITHYARAMAA@GMAIL.COM</a>
        </div>

        <div className="flex flex-col gap-3 items-center md:items-start">
          <span className="text-white/60">SOCIAL</span>
          <div className="flex gap-4">
            <a href="https://github.com/v-athithyaramaa" target="_blank" className="hover:text-accent transition-colors text-white">GITHUB</a>
            <a href="https://www.linkedin.com/in/v-athithya-ramaa1/" target="_blank" className="hover:text-accent transition-colors text-white">LINKEDIN</a>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center md:items-end">
          <span className="text-white/60">IDENTITY</span>
          <span className="text-white font-bold">© 2026 V ATHITHYA RAMAA</span>
          <span className="text-white/80">CHENNAI, INDIA</span>
        </div>

      </div>
    </section>
  );
}
