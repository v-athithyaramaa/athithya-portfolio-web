"use client";

import { motion, useScroll, useVelocity, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function TensionScroll() {
  const { scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const [fired, setFired] = useState(false);

  useEffect(() => {
    const unsubscribe = smoothVelocity.on("change", (latest) => {
      // If velocity was high and drops suddenly, "fire" the arrow
      if (Math.abs(latest) > 0.5) {
        setFired(false);
      } else if (Math.abs(latest) < 0.1 && !fired) {
        setFired(true);
        // Reset the fired state after animation
        setTimeout(() => setFired(false), 1000);
      }
    });
    return () => unsubscribe();
  }, [smoothVelocity, fired]);

  // Curve calculation: pulls back based on scroll velocity
  const bowCurveX = useTransform(velocityFactor, (v) => {
    const tension = Math.min(Math.abs(v) * 20, 60);
    return 10 - tension;
  });

  return (
    <div className="fixed top-0 left-6 md:left-12 h-screen w-32 pointer-events-none z-0 hidden md:block">
      {/* The Bow String */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <motion.path
          d={useTransform(bowCurveX, (x) => `M 10 0 Q ${x} 500 10 1000`)}
          stroke="var(--accent)"
          strokeWidth="1"
          fill="none"
          strokeOpacity="0.2"
        />
        <motion.path
          d={useTransform(bowCurveX, (x) => `M 10 0 Q ${x} 500 10 1000`)}
          stroke="var(--foreground)"
          strokeWidth="1"
          fill="none"
          strokeOpacity="0.1"
        />
      </svg>

      {/* The Arrow Projectile */}
      <motion.div
        className="absolute w-[2px] h-32 bg-gradient-to-b from-transparent via-accent to-accent left-[9px]"
        style={{
          top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
        }}
      >
        {/* Glow point */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full blur-[8px] opacity-80" />
      </motion.div>

      {/* The Fire Pulse */}
      {fired && (
        <motion.div
          initial={{ top: "0%", opacity: 1, scaleY: 1 }}
          animate={{ top: "100%", opacity: 0, scaleY: 4 }}
          transition={{ duration: 0.8, ease: "circIn" }}
          className="absolute w-[1px] h-64 bg-accent left-[9px] blur-[2px]"
        />
      )}
    </div>
  );
}
