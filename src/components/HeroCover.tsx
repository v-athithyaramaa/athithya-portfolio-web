"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimLetters } from "./AnimLetters";

export default function HeroCover() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative pt-24 pb-12 overflow-hidden">
      
      {/* Structural Dimension Line */}
      <motion.div 
        className="absolute top-32 left-0 w-full h-[1px] bg-border z-0"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-0 left-32 w-[1px] h-full bg-border z-0 hidden lg:block"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto w-full">
        
        {/* Left Typography Column */}
        <div className="flex-1 w-full flex flex-col items-start text-left">
          
          <h1 className="display text-[clamp(3.5rem,8vw,7.5rem)] font-light uppercase leading-[0.85] tracking-tight mb-8">
            <AnimLetters text="V ATHITHYA" />
            <br />
            <AnimLetters text="RAMAA" offset={8} />
          </h1>

          {/* Animated Dimension Divider */}
          <motion.div
            className="flex items-center gap-4 mb-8 w-full max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <div className="w-px h-4 bg-border" />
            <div className="flex-1 h-px bg-border relative overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-accent origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
            </div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl leading-relaxed tracking-tight max-w-xl mb-10 text-muted-foreground font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
          >
            I architect production-grade multi-agent platforms and full-stack microservices. Currently a Software Engineer at <strong className="text-foreground">iCliniq</strong> architecting and developing high-performance healthcare platforms.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            {["FULLSTACK", "DEVOPS", "AI"].map((tag, i) => (
              <motion.span
                key={tag}
                className="mono px-4 py-2 text-[10px] font-bold tracking-[0.15em] uppercase border border-foreground/20 bg-background/50 backdrop-blur-md"
                style={{
                    color: "var(--foreground)",
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, borderColor: "var(--accent)", color: "var(--accent)" }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Terminal Explicit Instruction */}
          <motion.div
            className="mt-8 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-accent bg-accent/5 border border-accent/20 px-4 py-3 uppercase cursor-pointer hover:bg-accent/10 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            onClick={() => {
              // Programmatically trigger a keyboard event for CTRL+` to open the terminal
              // OR just let them read it. Better to just let them press it.
              window.dispatchEvent(new KeyboardEvent('keydown', { key: '`', ctrlKey: true }));
            }}
          >
            <span className="animate-pulse w-2 h-3 bg-accent inline-block" />
            <span>System Console: Press CTRL + ` to Initialize</span>
          </motion.div>
        </div>

        {/* Right Portrait Column with Crop Marks */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.6, duration: 1, ease: "circOut" }}
            className="relative w-[300px] md:w-[450px] shrink-0 aspect-square group mx-auto lg:mx-0"
        >
            {/* Architectural Crop Marks */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-foreground/30 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2" />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-foreground/30 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-foreground/30 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-foreground/30 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />

            <div className="relative w-full h-full overflow-hidden bg-transparent">
              {/* Spinning technical backing */}
              <div className="absolute inset-0 rounded-full border border-border animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-accent/20 animate-[spin_15s_linear_infinite_reverse]" />
              
              <div className="relative w-full h-full p-12">
                <Image
                    src="/lotus.png"
                    alt="Lotus Profile"
                    fill
                    priority
                    sizes="(max-width: 768px) 300px, 450px"
                    className="object-contain drop-shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Figure Caption Block */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-4 py-2 mono text-[10px] font-bold tracking-[0.15em] shadow-xl z-30 flex flex-col"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              <span>FIG. 01</span>
              <span className="font-light">IDENTITY_CORE</span>
            </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
