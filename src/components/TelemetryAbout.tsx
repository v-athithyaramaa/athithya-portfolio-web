"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const manifestoText = `> INITIALIZING SECURE CONNECTION...
> IDENTITY VERIFIED: V ATHITHYA RAMAA
> ROLE: FULL-STACK ENGINEER & AI ARCHITECT
> STATUS: ONLINE

I build systems that hold up under load and interfaces that command attention. 
From engineering AI-powered digital health twins (DTwin) to orchestrating autonomous LangGraph agents, my focus is absolute precision.

I don't just write code; I architect solutions. Whether it's a scalable microservice backend on AWS or a high-performance React front-end, I ensure every byte serves a purpose.

> AWAITING COMMAND...`;

export function TelemetryAbout() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (isInView) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < manifestoText.length) {
          setTypedText((prev) => prev + manifestoText.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 15); // Typing speed
      return () => clearInterval(typingInterval);
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full interactive cursor-none">
      
      {/* Biometric Scanner Card */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="col-span-1 md:col-span-4 bg-[#050505] border border-border p-4 relative overflow-hidden h-[400px]"
      >
        <div className="absolute top-4 left-4 font-mono text-[9px] text-accent tracking-widest z-10 bg-background/80 px-2 py-1">
          [ BIOMETRIC SYNC ]
        </div>
        <div className="absolute top-4 right-4 flex gap-1 z-10">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-border rounded-full" />
        </div>
        
        {/* CRT Scan Line */}
        <motion.div 
          animate={{ top: ["-10%", "110%"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-accent/20 to-transparent z-20 pointer-events-none"
        />
        
        <div className="relative w-full h-full border border-border/50 grayscale hover:grayscale-0 transition-all duration-1000">
          <Image 
            src="/lotus.png" 
            alt="V Athithya Ramaa - Full-Stack Engineer, Physical AI & Robotics, Distributed Systems" 
            fill 
            loading="lazy"
            className="object-cover opacity-80"
          />
        </div>
      </motion.div>

      {/* UNIX Terminal Card */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="col-span-1 md:col-span-8 bg-[#020202] border border-border p-8 relative flex flex-col justify-between"
      >
        <div className="absolute top-0 left-0 w-full h-8 bg-border/20 border-b border-border flex items-center px-4 gap-2">
          <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          <span className="ml-4 font-mono text-[9px] text-muted-foreground tracking-widest">root@var-system:~</span>
        </div>
        
        <div className="mt-8 font-mono text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
          <span className="text-foreground">{typedText}</span>
          <motion.span 
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-accent ml-1 align-middle"
          />
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-3 gap-4 mt-12 border-t border-border/50 pt-8">
          {[
            { label: "AUTONOMOUS AGENTS", value: "03+" },
            { label: "MICROSERVICES ARCHITECTED", value: "07+" },
            { label: "HACKATHONS WON", value: "04" }
          ].map((metric, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <span className="font-mono text-[9px] text-muted-foreground tracking-widest uppercase">{metric.label}</span>
              <span className="font-sans text-3xl font-light text-foreground">{metric.value}</span>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
