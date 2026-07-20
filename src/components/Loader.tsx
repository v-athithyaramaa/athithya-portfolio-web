"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2s mechanical initialization
    return () => clearTimeout(timer);
  }, []);

  // Avoid hydration mismatch by only rendering after mount
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background blueprint-grid"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4, ease: "circIn" }}
        >
          <div className="flex flex-col items-center w-full max-w-sm px-6">
            {/* Minimalist CAD dimension line */}
            <div className="w-full flex items-center justify-between text-[10px] text-muted-foreground font-mono mb-2">
              <span>SYS.INIT</span>
              <span>100%</span>
            </div>
            <div className="relative h-[1px] w-full bg-border overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-foreground"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "circInOut" }}
              />
            </div>
            
            <div className="mt-4 flex w-full justify-between text-xs font-mono uppercase tracking-[0.2em] text-foreground">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                V Athithya Ramaa
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-primary font-bold animate-pulse"
              >
                [ BOOTING ]
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
