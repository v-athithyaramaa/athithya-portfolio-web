"use client";

import { motion } from "framer-motion";

export function ArchitectManifesto() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8">
      
      {/* Editorial Portrait */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="col-span-1 lg:col-span-4 relative w-full aspect-[3/4] bg-card border border-border overflow-hidden group"
      >
        {/* Tech Wireframe Replacement for Image */}
        <div className="absolute inset-0 bg-background/50 flex flex-col justify-between p-6">
          <div className="flex justify-between items-start">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1">
              <path d="M12 2L2 22L12 18L22 22L12 2Z" />
            </svg>
            <span className="font-mono text-[9px] uppercase text-muted-foreground animate-pulse">Running...</span>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            <div className="absolute w-48 h-48 border border-accent/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute w-32 h-32 border border-accent/40 rounded-full animate-[spin_7s_linear_infinite_reverse]" />
            <div className="absolute w-16 h-16 border-t border-r border-accent/80 rounded-full animate-[spin_3s_linear_infinite]" />
            <span className="font-mono text-[10px] text-accent font-bold absolute">SYS.CORE</span>
          </div>
          <div className="font-mono text-[9px] uppercase text-muted-foreground">
            {">"} INITIALIZING ARCHITECTURE_
          </div>
        </div>
        {/* Subtle overlay lines */}
        <div className="absolute inset-0 border border-border m-4 pointer-events-none" />
        <div className="absolute bottom-6 left-6 font-mono text-[9px] uppercase tracking-widest text-muted-foreground bg-background/80 px-2 py-1">
          FIG. 01 — THE ARCHITECT
        </div>
      </motion.div>

      {/* The Story */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
        className="col-span-1 lg:col-span-8 flex flex-col justify-center"
      >
        <h3 className="serif italic text-3xl md:text-5xl text-foreground mb-10 leading-tight">
          "A visionary thinker and agile learner. I design robust backend engines and interfaces that communicate absolute precision."
        </h3>
        
        <div className="font-sans text-base md:text-lg text-muted-foreground font-light leading-relaxed space-y-6 max-w-3xl">
          <p>
            My engineering philosophy revolves around architecting production-grade multi-agent platforms and full-stack microservices. At <strong className="text-foreground font-normal">iCliniq</strong>, I build healthcare software that seamlessly connects patients and doctors across continents—where every system deployed must hold up under immense load.
          </p>
          <p>
            Boasting stellar leadership qualities, I effortlessly switch between being an adaptive team player and a dynamic team leader. Whether orchestrating autonomous LangGraph agents or engineering digital health twins (DTwin), I am goal-oriented, thrive on meeting strict deadlines, and actively seek meaningful collaborations.
          </p>
          <p>
            I don't just write code; I architect solutions. I consistently push boundaries to craft avant-garde ideas that solve real-world problems.
          </p>
        </div>

        {/* Clean Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 border-t border-border/50 pt-8">
          {[
            { label: "AUTONOMOUS AGENTS", value: "03+" },
            { label: "MICROSERVICES ARCHITECTED", value: "07+" },
            { label: "HACKATHONS WON", value: "08+" },
            { label: "INDUSTRY IMPACT", value: "GLOBAL" }
          ].map((metric, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -5 }}
              className="flex flex-col gap-2 cursor-default"
            >
              <span className="font-mono text-[9px] text-muted-foreground tracking-widest uppercase">{metric.label}</span>
              <span className="font-sans text-2xl font-light text-foreground">{metric.value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
