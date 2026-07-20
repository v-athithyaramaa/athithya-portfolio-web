"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SystemsToolkit() {
  const [activeCategory, setActiveCategory] = useState<string>("CLIENT SYSTEMS");

  const categories = {
    "CLIENT SYSTEMS": ["TypeScript", "React.js", "Next.js", "Astro", "Tailwind CSS", "Framer Motion", "Storybook", "Directus CMS"],
    "CORE ARCHITECTURE": ["Node.js", "Java", "C++", "GraphQL", "Microservices", "Domain-Driven Design", "Event-Driven Arch", "MongoDB", "Redis"],
    "INTELLIGENCE": ["Python", "LangChain", "LangGraph", "Multi-Agent Systems", "RAG Pipelines", "AI Chatbots"],
    "INFRASTRUCTURE": ["AWS", "Docker", "Linux", "Nginx", "CI/CD Pipelines", "Data Migration / ETL", "Jest Testing"]
  };

  return (
    <div className="w-full bg-card/30 border border-border flex flex-col md:flex-row overflow-hidden min-h-[400px]">
      
      {/* Category Selectors */}
      <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-border flex flex-col">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onMouseEnter={() => setActiveCategory(cat)}
            className={`flex-1 text-left px-8 py-6 font-mono text-xs tracking-widest uppercase transition-all duration-300 border-b border-border last:border-0 relative ${
              activeCategory === cat ? "text-accent bg-accent/5" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {/* Active Indicator Line */}
            {activeCategory === cat && (
              <motion.div 
                layoutId="activeCategoryLine" 
                className="absolute left-0 top-0 bottom-0 w-1 bg-accent"
              />
            )}
            {cat}
          </button>
        ))}
      </div>

      {/* Tech Stack Display */}
      <div className="w-full md:w-2/3 p-8 md:p-12 relative flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, filter: "blur(10px)", x: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            exit={{ opacity: 0, filter: "blur(10px)", x: -20 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="flex flex-wrap gap-4"
          >
            {categories[activeCategory as keyof typeof categories].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.2 }}
                className="font-sans text-3xl md:text-5xl font-light tracking-tight text-foreground interactive cursor-crosshair hover:text-accent transition-colors duration-300"
              >
                {tech}
                {i !== categories[activeCategory as keyof typeof categories].length - 1 && (
                  <span className="text-border mx-4">/</span>
                )}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Background Glitch Text */}
        <div className="absolute top-4 right-4 pointer-events-none opacity-5 font-mono text-8xl md:text-9xl font-bold tracking-tighter text-foreground whitespace-nowrap overflow-hidden z-[-1] uppercase">
          {activeCategory}
        </div>
      </div>

    </div>
  );
}
