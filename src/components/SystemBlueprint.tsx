"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function SystemBlueprint() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    { id: 1, label: "API Gateway", x: 10, y: 50, desc: "Ingesting requests from 1,400+ healthcare professionals globally." },
    { id: 2, label: "GraphQL Monorepo", x: 40, y: 50, desc: "Resolving complex nested health queries via highly-typed endpoints." },
    { id: 3, label: "Unified Tes (AI)", x: 70, y: 20, desc: "Domain-Driven AI chatbot orchestrating patient-to-information routing." },
    { id: 4, label: "Redis / DB Cluster", x: 70, y: 80, desc: "Caching 100M+ medical data points for sub-millisecond retrieval." }
  ];

  return (
    <div className="w-full bg-[#050505] border border-border p-8 md:p-16 relative overflow-hidden">
      
      {/* Technical Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="relative z-10 mb-12">
        <span className="meta block mb-4 text-accent">DOMAIN-DRIVEN DESIGN</span>
        <h3 className="font-sans text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
          The Blueprint
        </h3>
        <p className="text-white/60 max-w-lg font-light leading-relaxed">
          At iCliniq, I didn't just write scripts; I architected scalable ecosystems. This interactive blueprint visualizes the data flow of the <strong>Unified Tes</strong> microservices architecture.
        </p>
      </div>

      <div className="relative w-full h-[300px] md:h-[400px] border border-white/10 bg-black flex items-center justify-center p-4">
        <div className="w-full h-full relative max-w-4xl">
          
          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <motion.path 
              d="M 10% 50% L 40% 50%" 
              stroke="rgba(255,46,147,0.3)" strokeWidth="2" strokeDasharray="5 5" fill="none" 
            />
            <motion.path 
              d="M 40% 50% L 70% 20%" 
              stroke="rgba(255,46,147,0.3)" strokeWidth="2" strokeDasharray="5 5" fill="none" 
            />
            <motion.path 
              d="M 40% 50% L 70% 80%" 
              stroke="rgba(255,46,147,0.3)" strokeWidth="2" strokeDasharray="5 5" fill="none" 
            />
            
            {/* Animated Data Packets */}
            <circle cx="0" cy="0" r="3" fill="var(--accent)">
              <animateMotion dur="3s" repeatCount="indefinite" path="M 10% 50% L 40% 50%" />
            </circle>
            <circle cx="0" cy="0" r="3" fill="var(--accent)">
              <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s" path="M 40% 50% L 70% 20%" />
            </circle>
            <circle cx="0" cy="0" r="3" fill="var(--accent)">
              <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s" path="M 40% 50% L 70% 80%" />
            </circle>
          </svg>

          {/* Render Nodes */}
          {nodes.map((node) => (
            <div 
              key={node.id}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-[var(--cursor-crosshair)] group"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${activeNode === node.id ? 'bg-accent border-accent scale-150 shadow-[0_0_15px_rgba(255,46,147,0.8)]' : 'bg-black border-white/50 group-hover:border-accent'}`} />
              
              <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                <span className="font-mono text-xs tracking-widest text-white/80 uppercase">{node.label}</span>
              </div>
            </div>
          ))}

          {/* Description Overlay */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto md:w-96 min-h-[80px] bg-white/5 border border-white/10 p-4 backdrop-blur-md">
            <span className="font-mono text-[10px] text-accent tracking-widest uppercase block mb-2">
              SYSTEM ANALYSIS
            </span>
            <p className="text-sm text-white/80 font-light leading-relaxed">
              {activeNode !== null 
                ? nodes.find(n => n.id === activeNode)?.desc 
                : "Hover over a system node to analyze the microservice routing and architectural purpose."}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
