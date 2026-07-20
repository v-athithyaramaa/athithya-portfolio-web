"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MagneticButton } from "./MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-500 border-b ${
        scrolled ? "bg-background/80 backdrop-blur-md border-border" : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 pl-16 md:pl-24 h-24 flex items-center justify-between">
        
        {/* Generated AI Logo */}
        <div className="flex items-center gap-4 interactive cursor-pointer group" onClick={() => scrollToSection("home")}>
          <div className="relative w-12 h-12 overflow-hidden border border-border group-hover:border-accent transition-colors duration-500 rounded-sm">
            <Image 
              src="/logo.png" 
              alt="VAR Custom Logo" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-sans text-sm font-bold tracking-widest text-foreground group-hover:text-accent transition-colors duration-500">
              VAR
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors duration-500">
              SYSTEM.ARCHITECT
            </span>
          </div>
        </div>

        {/* Scroll Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: "About", id: "about" },
            { name: "Trajectory", id: "records" },
            { name: "Case Files", id: "works" },
            { name: "Systems", id: "systems" },
            { name: "Telemetry", id: "telemetry" },
            { name: "Beyond", id: "beyond" },
          ].map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="relative interactive font-mono text-[10px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors group py-2"
            >
              {link.name}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-6">
          {/* Minimalist Mobile Menu Indicator */}
          <div className="md:hidden flex flex-col items-end gap-1 interactive p-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">MENU</span>
            <div className="w-6 h-[1px] bg-foreground"></div>
            <div className="w-4 h-[1px] bg-foreground"></div>
          </div>
          
          <div className="hidden md:flex interactive font-mono text-[10px] border border-border px-3 py-1 bg-muted/20 text-muted-foreground">
            CMD+K
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
