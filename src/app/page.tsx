"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArchitectManifesto } from "@/components/ArchitectManifesto";
import { CleanSystemsGrid } from "@/components/CleanSystemsGrid";
import { CleanTimelineCard } from "@/components/CleanTimelineCard";
import { BeyondTheCode } from "@/components/BeyondTheCode";
import { PremiumFooter } from "@/components/PremiumFooter";
import { PremiumCursor } from "@/components/PremiumCursor";
import { FloatingDock } from "@/components/FloatingDock";
import { TechMarquee } from "@/components/TechMarquee";
import { OSDashboard } from "@/components/OSDashboard";
import { SystemsToolkit } from "@/components/SystemsToolkit";
import HeroCover from "@/components/HeroCover";
import { EngineeringGallery } from "@/components/EngineeringGallery";
import { StampBlock } from "@/components/StampBlock";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const experiences = [
    {
      role: "Software Engineer Intern (Physical AI & Real-Time Systems)",
      org: "MultiCoreWare Inc.",
      desc: "Researching and developing Physical AI perception architectures for autonomous vehicles and robotics, focusing on Bird's-Eye-View (BEV) spatial feature pooling, Vision-Language Models (VLMs), and Vision-Language-Action (VLA) models for real-time action prediction. Engineered low-level C++ and ROS 2 communication nodes streaming and synchronizing multi-channel radar/lidar sensor feeds with 3D spatial bounding boxes at 60 FPS without frame drops, reducing perception latency by 30ms. Built interactive 2D/3D WebGL annotation canvas tooling in React, accelerating manual bounding-box labeling throughput by 35% across NuScenes datasets. Optimized binary socket serialization buffers and shared-memory IPC channels, eliminating latency jitter during continuous high-bandwidth broadcast.",
      tag: "PRESENT",
      date: "Aug 2025 - Present"
    },
    {
      role: "Full-Stack Software Engineer Intern (Backend, Cloud & AI)",
      org: "iCliniq",
      desc: "Optimized GraphQL API cold-start query latency by 28% via Domain-Driven Design (DDD) in a TypeScript monorepo, decoupling business modules across high-traffic booking routes. Architected a zero-downtime ETL migration service transferring 1,400+ doctor profiles and 100M+ medical transaction records using cursor-based streaming and checksum parity validation. Partnered with DevOps to provision automated AWS cloud infrastructure (EC2, S3, RDS, ECS) via Terraform and Terragrunt; containerized microservices via Docker and automated CI/CD pipelines. Engineered 'Unified Tes', an AI medical query triage chatbot using LangChain and RAG pipelines, decreasing patient query routing delays by 40% while sustaining sub-100ms response times.",
      tag: "PRESENT",
      date: "Jul 2024 - Present"
    },
    {
      role: "Software Engineering Consultant",
      org: "OrientBell Tiles & Diebold Nixdorf",
      desc: "Constructed an automated AutoPay test harness for Diebold Nixdorf with sandboxed backend execution environments, cutting manual test validation cycles by 50%. Built automated web ingestion scrapers in BeautifulSoup for OrientBell, indexing 10,000+ structured catalog items into vector databases for sub-150ms semantic search.",
      tag: "FREELANCE",
      date: "Nov 2024 - Mar 2025"
    }
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden font-sans selection:bg-accent selection:text-background">
      <PremiumCursor />
      <FloatingDock />

      {/* Kinetic Typography Background */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-[0.03] overflow-hidden">
        <motion.div style={{ y }} className="whitespace-nowrap font-serif italic font-bold text-[15vw] leading-none select-none">
          ATHITHYA RAMAA
        </motion.div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* 0. HERO SECTION */}
        <h1 className="sr-only">V Athithya Ramaa - Full-Stack Engineer, Physical AI & Robotics, Systems & Cloud Architect</h1>
        <section id="home">
          <HeroCover />
        </section>

        {/* INFINITE TECH MARQUEE */}
        <TechMarquee />

        {/* 1. ARCHITECT MANIFESTO SECTION */}
        <section id="about" className="py-32 border-b border-border/30">
          <ArchitectManifesto />
        </section>

        {/* 2. PROFESSIONAL TRAJECTORY (EXPERIENCE) */}
        <section id="records" className="py-32 border-b border-border/30">
          <div className="mb-24">
            <span className="meta block mb-4 text-accent">TIMELINE</span>
            <h2 className="display text-6xl md:text-8xl tracking-tighter text-foreground">
              Trajectory
            </h2>
          </div>
          <div className="space-y-4 border-l border-border/50 ml-4 md:ml-8 pl-8 md:pl-16 relative">
            <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-accent via-border to-transparent -translate-x-[0.5px]" />
            
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <CleanTimelineCard
                  role={exp.role}
                  org={exp.org}
                  date={exp.date}
                  desc={exp.desc}
                  tag={exp.tag}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. SELECTED WORKS (ENGINEERING CASE FILES) */}
        <section id="works" className="py-32 border-b border-border/30">
          <div className="flex flex-col items-end text-right mb-16">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent mb-4 border border-accent/30 px-2 py-1">SELECTED WORKS</span>
            <h2 className="display text-6xl md:text-8xl tracking-tighter text-foreground mb-6">
              Case Files
            </h2>
            <p className="text-muted-foreground font-light max-w-md">
              A detailed breakdown of constraints, architectural decisions, and final results for mission-critical deployments.
            </p>
          </div>

          <EngineeringGallery />

          <div className="mt-12 flex justify-end">
            <a 
              href="https://github.com/v-athithyaramaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-accent transition-colors group"
            >
              <span>[ ARCHIVE // VIEW FULL GITHUB REPOSITORY ]</span>
              <svg 
                className="w-3 h-3 group-hover:translate-x-1 transition-transform" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="square"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </section>

        {/* 4. SYSTEMS & TOOLKITS */}
        <section id="systems" className="py-32 border-b border-border/30">
          <div className="mb-16 flex flex-col items-start">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent mb-4 border border-accent/30 px-2 py-1">STACK</span>
            <h2 className="font-sans text-4xl md:text-6xl font-light tracking-tight text-foreground">
              Systems & Toolkits
            </h2>
          </div>
          <SystemsToolkit />
        </section>

        {/* 5. CORE ARCHITECTURE & TOOLING (OS DASHBOARD) */}
        <section id="telemetry" className="py-32 border-b border-border/30">
          <div className="mb-16">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent mb-4 border border-accent/30 px-2 py-1">TELEMETRY</span>
            <h2 className="font-sans text-4xl md:text-6xl font-light tracking-tight text-foreground">
              System Interface
            </h2>
          </div>
          <OSDashboard />
        </section>

        {/* 6. BEYOND THE CODE SECTION (The Human Element) */}
        <section id="beyond" className="py-32 border-b border-border/30">
          <div className="flex flex-col items-end text-right mb-16">
            <span className="meta block mb-4 text-accent">THE HUMAN ELEMENT</span>
            <h2 className="display text-5xl md:text-7xl tracking-tighter leading-none">
              BEYOND <br />
              <span className="serif italic text-4xl md:text-6xl text-muted-foreground pr-12 md:pr-24">
                The Code
              </span>
            </h2>
          </div>
          <BeyondTheCode />
        </section>

      </main>

      <StampBlock />
    </div>
  );
}
