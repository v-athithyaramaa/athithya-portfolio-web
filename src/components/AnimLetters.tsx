"use client";

import { motion } from "framer-motion";

const letterAnim = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: 0.4 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function AnimLetters({ text, offset = 0 }: { text: string; offset?: number }) {
  return (
    <span className="inline-block perspective-[1000px]">
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          custom={i + offset}
          variants={letterAnim}
          initial="hidden"
          animate="visible"
          whileHover={{ y: -8, color: "var(--accent)" }}
          className="inline-block transform-style-3d cursor-default transition-colors duration-200"
        >
          {c === " " ? "\u00A0" : c}
        </motion.span>
      ))}
    </span>
  );
}
