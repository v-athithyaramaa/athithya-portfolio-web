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
          "Engineering robust, low-latency distributed systems and physical AI architectures that scale flawlessly under production loads."
        </h3>
        
        <div className="font-sans text-base md:text-lg text-muted-foreground font-light leading-relaxed space-y-6 max-w-3xl">
          <p>
            My technical focus centers on bridging distributed platforms, automated infrastructure, and autonomous perception models. At <strong className="text-foreground font-normal">iCliniq</strong>, I decoupled monolithic business modules into domain-driven microservices, optimizing cold-start latency by 28% and architecting ETL pipelines that safely migrated 100M+ transaction records with zero downtime.
          </p>
          <p>
            In the physical AI domain with <strong className="text-foreground font-normal">MultiCoreWare</strong>, I developed high-bandwidth ROS 2 C++ nodes that process multi-channel Lidar/Radar feeds. By optimizing binary socket serialization and shared-memory IPC, we eliminated latency jitter and sustained a flawless 60 FPS spatial bounding box telemetry stream, cutting perception lag by 30ms.
          </p>
          <p>
            From deploying RAG-backed multi-agent LangGraph orchestrators managing 500+ concurrent requests, to fine-tuning autoregressive GPT engines on bare-metal PyTorch tensors for edge hardware—I engineer systems defined by measurable performance, architectural resilience, and uncompromising reliability.
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
