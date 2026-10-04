"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";

interface Day {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export function OSDashboard() {
  const [time, setTime] = useState<Date | null>(null);
  const [githubData, setGithubData] = useState<Day[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTime(new Date());
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const response = await fetch("https://github-contributions-api.jogruber.de/v4/v-athithyaramaa");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        
        // The jogruber API returns data across multiple years.
        // We need to sort chronologically and take the last 365 days.
        const sortedDays = data.contributions.sort((a: Day, b: Day) => 
          new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        const last365 = sortedDays.slice(-365);
        
        setGithubData(last365);
      } catch (err) {
        console.error("Failed to fetch github data:", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchGitHub();
  }, []);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border border border-border auto-rows-[250px]">
        
        {/* Widget 1: Identity & Status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-background p-8 md:col-span-2 flex flex-col justify-between group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1">
              <path d="M12 2L2 22L12 18L22 22L12 2Z" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">System Online</span>
            </div>
            <h3 className="text-3xl font-light tracking-tight text-foreground mb-2">V Athithya Ramaa</h3>
            <p className="font-mono text-xs text-accent">Fullstack x DevOps x AI Engineer</p>
          </div>
          <div className="flex gap-4 border-t border-border/50 pt-4 mt-8">
            <div className="flex-1">
              <span className="block font-mono text-[9px] uppercase text-muted-foreground mb-1">Location</span>
              <span className="font-mono text-xs text-foreground">Chennai, IN</span>
            </div>
            <div className="flex-1 border-l border-border/50 pl-4">
              <span className="block font-mono text-[9px] uppercase text-muted-foreground mb-1">Status</span>
              <span className="font-mono text-xs text-foreground">Available for Work</span>
            </div>
          </div>
        </motion.div>

        {/* Widget 2: Live Clock */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-background p-8 flex flex-col items-center justify-center relative overflow-hidden group hover:bg-card transition-colors"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent absolute top-6 left-6">Local Time</span>
          <div className="text-4xl md:text-5xl font-light tracking-tighter text-foreground mt-4">
            {time ? time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }) : "--:--"}
            <span className="text-accent animate-pulse">:</span>
            {time ? time.toLocaleTimeString('en-US', { hour12: false, second: '2-digit' }) : "--"}
          </div>
          <span className="font-mono text-[9px] text-muted-foreground mt-4 uppercase tracking-widest">Asia/Kolkata</span>
        </motion.div>

        {/* Widget 3: Core Stack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-accent p-8 flex flex-col justify-between"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent-foreground/60">Primary Stack</span>
          <ul className="space-y-2 mt-auto">
            {['Next.js', 'React', 'TypeScript', 'Node.js', 'Python'].map(tech => (
              <li key={tech} className="font-mono text-sm text-accent-foreground font-bold flex justify-between items-center border-b border-accent-foreground/20 pb-1">
                {tech} <span>↗</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Widget 4: GitHub Activity Mock */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-background p-8 md:col-span-2 flex flex-col justify-between group"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">Activity Log</span>
            <a href="https://github.com/v-athithyaramaa" target="_blank" rel="noopener noreferrer" className="font-mono text-[9px] text-muted-foreground hover:text-foreground transition-colors">
              GITHUB.COM/V-ATHITHYARAMAA ↗
            </a>
          </div>
          
          <div className="w-full flex-1 overflow-hidden flex items-end justify-start opacity-80 hover:opacity-100 transition-opacity min-h-[120px]">
            {loading ? (
              <span className="font-mono text-xs text-muted-foreground animate-pulse mb-4">Initializing Github stream...</span>
            ) : githubData.length > 0 ? (
              <ActivityCalendar 
                data={githubData}
                blockSize={10}
                blockMargin={3}
                fontSize={10}
                colorScheme="dark"
                theme={{
                  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                  dark: ['hsl(var(--border) / 0.3)', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
              />
            ) : (
              <span className="font-mono text-xs text-red-500/80 mb-4">Failed to fetch contribution graph.</span>
            )}
          </div>
        </motion.div>

        {/* Widget 5: AI & Architecture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-background p-8 md:col-span-2 flex flex-col justify-between border-t border-border/50 hover:bg-card transition-colors group"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent mb-6">Advanced Engineering</span>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-auto">
             <div>
                <span className="block font-mono text-[9px] uppercase text-muted-foreground mb-1">Architecture</span>
                <span className="font-sans text-sm text-foreground">Microservices, DDD, Event-Driven</span>
             </div>
             <div>
                <span className="block font-mono text-[9px] uppercase text-muted-foreground mb-1">AI / ML</span>
                <span className="font-sans text-sm text-foreground">LangChain, RAG, Multi-Agent Systems</span>
             </div>
             <div>
                <span className="block font-mono text-[9px] uppercase text-muted-foreground mb-1">DevOps & Infra</span>
                <span className="font-sans text-sm text-foreground">AWS, Docker, Kubernetes, CI/CD</span>
             </div>
             <div>
                <span className="block font-mono text-[9px] uppercase text-muted-foreground mb-1">Databases</span>
                <span className="font-sans text-sm text-foreground">MongoDB, SQL, Redis, Vector DBs</span>
             </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
