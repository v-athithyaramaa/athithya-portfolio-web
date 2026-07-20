"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SystemConsole } from "./SystemConsole";

export function FloatingDock() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [consoleOpen, setConsoleOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling down 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Simple intersection observer logic for active section
      const sections = ["home", "about", "records", "works", "systems", "telemetry", "beyond"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 300 && rect.bottom >= 300) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setConsoleOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "00" },
    { id: "about", label: "01" },
    { id: "records", label: "02" },
    { id: "works", label: "03" },
    { id: "systems", label: "04" },
    { id: "telemetry", label: "05" },
    { id: "beyond", label: "06" }
  ];

  return (
    <>
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9900] hidden md:flex items-center gap-1 p-2 bg-background/80 backdrop-blur-xl border border-border rounded-full shadow-2xl"
      >
        <div className="px-4 py-2 border-r border-border/50">
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">NAVIGATE</span>
        </div>
        
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`interactive relative w-10 h-10 rounded-full flex items-center justify-center font-mono text-[10px] tracking-widest transition-colors duration-300
              ${activeSection === item.id ? "text-background" : "text-muted-foreground hover:text-foreground"}
            `}
          >
            {activeSection === item.id && (
              <motion.div
                layoutId="activeDockIndicator"
                className="absolute inset-0 bg-accent rounded-full -z-10 shadow-[0_0_15px_rgba(255,46,147,0.5)]"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            {item.label}
          </button>
        ))}

        {/* System Console Trigger */}
        <div className="px-2 border-l border-border/50 ml-2">
          <button
            onClick={() => setConsoleOpen(true)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-accent hover:bg-accent/10 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 17l6-6-6-6M12 19h8" />
            </svg>
          </button>
        </div>
      </motion.div>

      <SystemConsole isOpen={consoleOpen} onClose={() => setConsoleOpen(false)} />
    </>
  );
}
