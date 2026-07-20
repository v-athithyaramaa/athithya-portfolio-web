"use client";

import { motion } from "framer-motion";

export function TechMarquee() {
  const techStack = [
    "TypeScript", "React.js", "Next.js", "Python", "LangChain", 
    "AWS", "Docker", "GraphQL", "MongoDB", "Redis", 
    "Domain-Driven Design", "Microservices", "Event-Driven Arch"
  ];

  // Duplicate the array to create a seamless infinite loop
  const marqueeItems = [...techStack, ...techStack, ...techStack];

  return (
    <div className="relative w-full overflow-hidden bg-accent text-background py-4 flex flex-col justify-center border-y border-accent">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 hidden md:block" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 hidden md:block" />
      
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-33.33%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // Adjust speed here
        }}
      >
        {marqueeItems.map((tech, index) => (
          <div key={index} className="flex items-center px-8">
            <span className="font-mono text-sm md:text-base font-bold uppercase tracking-[0.2em]">
              {tech}
            </span>
            <span className="mx-8 text-background/30 text-xs">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
