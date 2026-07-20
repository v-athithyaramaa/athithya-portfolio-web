"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const researchTopics = [
  {
    id: "R-01",
    title: "Multi-Agent Swarm Intelligence",
    desc: "Exploring decentralized LangGraph orchestrations where autonomous AI agents negotiate and resolve complex backend workflows without human intervention. Moving beyond linear RAG pipelines into dynamic agentic ecosystems."
  },
  {
    id: "R-02",
    title: "Real-Time Vector Synchronization",
    desc: "Architecting zero-latency synchronization models between primary SQL databases and distributed Redis vector stores. Ensuring AI models have sub-millisecond access to shifting global states."
  },
  {
    id: "R-03",
    title: "Predictive Edge-Health Models",
    desc: "Leveraging Gemini Vision and edge-deployed microservices to analyze real-time patient telemetry. Shifting healthcare paradigms from reactive treatment to predictive algorithmic intervention."
  }
];

export function BrainTrust() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <div className="w-full bg-card/10 border border-border p-8 md:p-16">
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
        <div>
          <span className="meta block mb-4 text-accent">ACTIVE EXPLORATION</span>
          <h3 className="font-sans text-3xl md:text-5xl font-light tracking-tight text-foreground">
            The Brain Trust
          </h3>
        </div>
        <p className="text-muted-foreground max-w-md font-light leading-relaxed">
          A real-time ledger of the architectural concepts, distributed systems, and AI paradigms I am currently researching and stress-testing in the sandbox.
        </p>
      </div>

      <div className="flex flex-col">
        {researchTopics.map((topic, index) => (
          <div
            key={topic.id}
            onMouseEnter={() => setHoveredIndex(index)}
            className="group relative border-t border-border/50 py-8 md:py-12 cursor-pointer"
          >
            {/* Hover Indicator Line */}
            <div 
              className={`absolute left-0 top-0 h-full w-[2px] bg-accent transition-all duration-500 ease-out ${
                hoveredIndex === index ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
              }`} 
            />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pl-4 md:pl-8">
              <div className="flex items-center gap-8">
                <span className={`font-mono text-sm tracking-widest transition-colors duration-500 ${
                  hoveredIndex === index ? "text-accent" : "text-muted-foreground/40"
                }`}>
                  {topic.id}
                </span>
                <h4 className={`font-serif italic text-2xl md:text-4xl transition-colors duration-500 ${
                  hoveredIndex === index ? "text-foreground" : "text-muted-foreground"
                }`}>
                  {topic.title}
                </h4>
              </div>
              
              <div className="md:w-1/2 overflow-hidden">
                <AnimatePresence mode="wait">
                  {hoveredIndex === index ? (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                      className="text-sm md:text-base text-muted-foreground font-light leading-relaxed"
                    >
                      {topic.desc}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      className="h-[60px]" // Reserve space to prevent layout shift
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
