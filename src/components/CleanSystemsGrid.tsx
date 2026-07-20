"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C++"]
  },
  {
    category: "AI & Advanced Architecture",
    skills: ["LangChain", "LangGraph", "Multi-Agent Systems", "RAG Pipelines", "AI Chatbots"]
  },
  {
    category: "Software Architecture",
    skills: ["Microservices", "Domain-Driven Design (DDD)", "Event-Driven Architecture", "Monorepo Architecture"]
  },
  {
    category: "Frontend",
    skills: ["React.js", "Astro", "HTML5", "CSS3", "Tailwind CSS", "Storybook"]
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express.js", "GraphQL", "RESTful APIs"]
  },
  {
    category: "Databases & Caching",
    skills: ["MongoDB", "SQL", "Redis", "Data Migration", "ETL"]
  },
  {
    category: "DevOps & Cloud Platforms",
    skills: ["AWS", "Docker", "Nginx", "Linux", "CI/CD Pipelines"]
  },
  {
    category: "2026 Core Infrastructure",
    skills: ["WebRTC", "Vector Databases", "Edge Computing", "tRPC", "React Server Components"]
  },
  {
    category: "Tools, CMS & Coursework",
    skills: ["Directus", "HyGraph", "Git", "GitHub", "Jest", "Figma", "Canva", "DSA", "DBMS", "OS", "OOP"]
  }
];

export function CleanSystemsGrid() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-px bg-border border border-border">
        {skillsData.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-background p-8 md:p-12 hover:bg-card transition-colors duration-500"
          >
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-8">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-sans text-lg md:text-xl font-light tracking-tight text-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
        
        {/* Placeholder aesthetic box to balance a 9th cell if using a 3-col grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-card/30 p-12 hidden xl:flex flex-col justify-end items-end relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCIvPjwvc3ZnPg==')] opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground relative z-10">
            SYSTEM.ARCHITECT // VAR
          </span>
        </motion.div>
      </div>
    </div>
  );
}
