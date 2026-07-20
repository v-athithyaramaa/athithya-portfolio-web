"use client";

import { motion } from "framer-motion";

export function BeyondTheCode() {
  const aspects = [
    {
      title: "The Scholar",
      subtitle: "ACADEMIC EXCELLENCE",
      desc: "Always a front-runner. From general proficiency in early education to securing a Gold Medal and maintaining the 1st Rank consistently across every year of my B.Tech degree.",
      // High-end, thin-line minimalist SVG
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12"/>
          <path d="M12 15a1 1 0 0 1-1-1V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8z"/>
          <path d="M12 15v7"/>
          <path d="M9 22h6"/>
          <circle cx="12" cy="15" r="2"/>
        </svg>
      )
    },
    {
      title: "The Diplomat",
      subtitle: "GLOBAL LEADERSHIP",
      desc: "Represented India as the Student Leader at the United Nations' Student Conference on Paris Climate Change. Navigating complex geopolitical discussions and leading cross-cultural teams on a global stage.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          <path d="M2 12h20"/>
        </svg>
      )
    },
    {
      title: "The Philosopher",
      subtitle: "RAMAKRISHNA MATH",
      desc: "Deeply anchored in spirituality. Sharpening the mind through the disciplined chanting of Vedas, Shlokas, and Sukthams. Cultivating a holistic approach through meditation, yoga, and journaling.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9z"/>
          <path d="M12 12c-4.97 0-9-4.03-9-9 0-1.1.9-2 2-2h14a2 2 0 0 1 2 2c0 4.97-4.03 9-9 9z"/>
          <path d="M12 12v9"/>
        </svg>
      )
    },
    {
      title: "The Strategist",
      subtitle: "CHESS & ORATORY",
      desc: "A tactical thinker on and off the board. An active chess player with an ELO of 900+. This analytical mindset is balanced by a passion for drama, debating, and commanding the stage in MUNs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border">
        {aspects.map((aspect, index) => (
          <motion.div
            key={aspect.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "circOut" }}
            className="group bg-background p-10 md:p-16 hover:bg-card/40 transition-colors duration-500 min-h-[400px] flex flex-col justify-between relative overflow-hidden"
          >
            {/* Hover Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  {aspect.subtitle}
                </span>
                <div className="text-muted-foreground/30 group-hover:text-foreground transition-all duration-500 transform group-hover:scale-110">
                  {aspect.icon}
                </div>
              </div>
              <h3 className="serif italic text-4xl md:text-5xl font-light tracking-tight text-foreground mb-8">
                {aspect.title}
              </h3>
              <p className="font-sans text-base md:text-lg text-muted-foreground font-light leading-relaxed group-hover:text-foreground/90 transition-colors duration-500">
                {aspect.desc}
              </p>
            </div>
            
            {/* Background Aesthetic */}
            <div className="absolute bottom-[-5%] right-[-2%] font-mono text-[160px] font-bold text-border opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-700 pointer-events-none select-none z-0 leading-none">
              0{index + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
