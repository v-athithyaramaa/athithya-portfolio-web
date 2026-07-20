"use client";

import { motion } from "framer-motion";

interface TimelineCardProps {
  role: string;
  org: string;
  date: string;
  desc: string; // Changed from bullets[] to a single powerful string
  tag: string;
}

export function CleanTimelineCard({ role, org, date, desc, tag }: TimelineCardProps) {
  return (
    <div className="relative w-full group">
      <div className="w-full bg-card/20 backdrop-blur-md border border-border p-8 md:p-12 transition-colors duration-500 hover:bg-card/60 hover:border-accent/40 flex flex-col justify-between">
        
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 md:mb-10 gap-4 border-b border-border/30 pb-6">
          <div>
            <h3 className="font-sans text-3xl md:text-4xl font-light tracking-tight text-foreground group-hover:text-accent transition-colors duration-500">
              {org}
            </h3>
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mt-2">
              {role}
            </h4>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <span className="font-mono text-[9px] uppercase tracking-widest bg-muted px-2 py-1 text-muted-foreground">
              {tag}
            </span>
            <span className="font-mono text-[10px] text-muted-foreground/80 tracking-widest">
              {date}
            </span>
          </div>
        </div>

        {/* Single Professional Paragraph */}
        <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-4xl group-hover:text-foreground/90 transition-colors duration-500">
          {desc}
        </p>

        {/* Elegant Accent Line */}
        <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
      </div>
    </div>
  );
}
