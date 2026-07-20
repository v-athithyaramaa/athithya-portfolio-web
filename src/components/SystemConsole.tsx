"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SystemConsoleProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LogEntry {
  type: "in" | "out" | "error";
  text: React.ReactNode;
}

export function SystemConsole({ isOpen, onClose }: SystemConsoleProps) {
  const [logs, setLogs] = useState<LogEntry[]>([
    { type: "out", text: "INIT SYSTEM.ARCHITECT VER 2.0.26" },
    { type: "out", text: "SECURE CONNECTION ESTABLISHED." },
    { type: "out", text: 'TYPE "help" TO VIEW AVAILABLE COMMANDS.' },
  ]);
  const [input, setInput] = useState("");
  const consoleEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleCommand = (cmd: string) => {
    const raw = cmd.trim();
    if (!raw) return;

    const parts = raw.split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    const newLogs = [...logs, { type: "in" as const, text: raw }];

    switch (command) {
      case "help":
        newLogs.push({
          type: "out",
          text: (
            <div className="flex flex-col gap-1 mt-2 mb-4">
              <span className="text-accent mb-2">AVAILABLE COMMANDS:</span>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="text-white/80">whoami</span><span>Display architect dossier</span>
                <span className="text-white/80">ls</span><span>List available filesystem directories</span>
                <span className="text-white/80">cd &lt;dir&gt;</span><span>Navigate to directory</span>
                <span className="text-white/80">contact</span><span>Initialize secure comms (mailto)</span>
                <span className="text-white/80">clear</span><span>Clear console buffer</span>
                <span className="text-white/80">exit</span><span>Terminate console session</span>
              </div>
            </div>
          )
        });
        break;
      case "whoami":
        newLogs.push({
          type: "out",
          text: "V ATHITHYA RAMAA. Fullstack Engineer x DevOps x AI. Currently Architecting at iCliniq."
        });
        break;
      case "ls":
        newLogs.push({
          type: "out",
          text: (
            <div className="flex gap-6 text-accent mt-2 mb-4 flex-wrap font-bold">
              <span>home/</span>
              <span>about/</span>
              <span>records/</span>
              <span>works/</span>
              <span>systems/</span>
              <span>telemetry/</span>
              <span>beyond/</span>
            </div>
          )
        });
        break;
      case "cd":
        if (args.length === 0) {
          newLogs.push({ type: "error", text: "cd: missing operand" });
        } else {
          const dir = args[0].replace(/\//g, "").toLowerCase();
          const validDirs = ["home", "about", "records", "works", "systems", "telemetry", "beyond"];
          if (validDirs.includes(dir)) {
            newLogs.push({ type: "out", text: `NAVIGATING TO /${dir}...` });
            const el = document.getElementById(dir);
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
              setTimeout(onClose, 800); // Close console after jumping
            }
          } else {
            newLogs.push({ type: "error", text: `cd: ${dir}: No such directory` });
          }
        }
        break;
      case "contact":
        newLogs.push({ type: "out", text: "INITIALIZING MAIL PROTOCOL..." });
        window.location.href = "mailto:vathithyaramaa@gmail.com";
        break;
      case "clear":
        setLogs([]);
        setInput("");
        return;
      case "exit":
        onClose();
        return;
      default:
        newLogs.push({ type: "error", text: `COMMAND NOT FOUND: ${command}. Type "help" for a list of commands.` });
    }

    setLogs(newLogs);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>

          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-4 md:bottom-24 left-1/2 -translate-x-1/2 w-[95vw] max-w-3xl h-[60vh] md:h-[50vh] bg-[#0a0a0a]/95 backdrop-blur-xl border border-accent/50 z-[9995] shadow-[0_0_50px_rgba(255,46,147,0.15)] font-mono flex flex-col rounded-lg overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-xs text-white/40 tracking-widest hidden sm:block">SYS_CONSOLE // ATHITHYA_RAMAA // PRESS CTRL+` TO CLOSE</span>
                <span className="text-xs text-white/40 tracking-widest sm:hidden">SYS_CONSOLE // TERMINAL</span>
              </div>
              <button 
                onClick={onClose}
                className="text-white/40 hover:text-accent transition-colors flex items-center justify-center p-1"
                title="Close Terminal"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div 
              className="flex-1 overflow-y-auto p-6 md:p-8 space-y-2 text-xs md:text-sm cursor-text scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
              onClick={() => inputRef.current?.focus()}
            >
              {logs.map((log, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`${log.type === "error" ? "text-red-500" : log.type === "in" ? "text-white mt-4" : "text-white/70"}`}
                >
                  {log.type === "in" && <span className="text-accent mr-2">guest@var-architect:~$</span>}
                  {log.text}
                </motion.div>
              ))}

              <div className="flex items-center mt-4">
                <span className="text-accent mr-2">guest@var-architect:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleCommand(input);
                    }
                  }}
                  className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 m-0 w-full"
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>

              <div ref={consoleEndRef} className="h-4" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
