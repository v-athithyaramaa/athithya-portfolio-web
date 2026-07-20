"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const SKILLS = [
  "MERN Stack", "Google Gemini", "Vite", "Tailwind CSS", 
  "LangGraph", "Redis", "Docker", "AWS", 
  "PostgreSQL", "Socket.io", "Python", "TypeScript",
  "Node.js", "Express", "Microservices", "REST APIs"
];

export function NeuralToolkit() {
  const [nodes, setNodes] = useState<{ id: number; skill: string; x: number; y: number }[]>([]);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  useEffect(() => {
    // Generate random stable positions for nodes
    const generatedNodes = SKILLS.map((skill, index) => ({
      id: index,
      skill,
      // Random percentage positions between 10% and 90%
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
    }));
    setNodes(generatedNodes);
  }, []);

  return (
    <div className="relative w-full h-[600px] bg-[#050505] border border-border overflow-hidden interactive cursor-none">
      
      {/* Dynamic SVG Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {hoveredNode !== null && nodes.map((node, i) => {
          if (node.id === hoveredNode) return null;
          // Connect hovered node to 4 closest or random nodes
          // For simplicity, connect to nodes with even/odd relationships
          if ((hoveredNode + i) % 3 === 0) {
             return (
               <motion.line
                 key={i}
                 initial={{ pathLength: 0, opacity: 0 }}
                 animate={{ pathLength: 1, opacity: 0.3 }}
                 exit={{ pathLength: 0, opacity: 0 }}
                 x1={`${nodes[hoveredNode].x}%`}
                 y1={`${nodes[hoveredNode].y}%`}
                 x2={`${node.x}%`}
                 y2={`${node.y}%`}
                 stroke="var(--accent)"
                 strokeWidth="1"
               />
             );
          }
          return null;
        })}
      </svg>

      {/* Floating Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        >
          <div 
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            className={`font-mono text-[10px] md:text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-300 backdrop-blur-md cursor-crosshair
              ${hoveredNode === node.id 
                ? "border-accent bg-accent/10 text-accent scale-110 shadow-[0_0_15px_rgba(255,46,147,0.4)]" 
                : hoveredNode !== null 
                  ? "border-border/20 bg-background/5 text-muted-foreground/30" 
                  : "border-border/50 bg-background/20 text-muted-foreground hover:text-foreground"
              }`}
          >
            {node.skill}
          </div>
        </motion.div>
      ))}

      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-[-1] opacity-5"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
}
