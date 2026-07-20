"use client";

import { motion } from "framer-motion";

export const CHESS_KNIGHT = [
  [0,0,0,1,1,1,0,0],
  [0,0,1,1,1,1,1,0],
  [0,1,1,0,1,1,1,0],
  [0,0,1,1,1,1,0,0],
  [0,0,0,1,1,1,0,0],
  [0,0,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1]
];

export const UN_GLOBE = [
  [0,0,1,1,1,1,0,0],
  [0,1,0,1,1,0,1,0],
  [1,0,1,1,1,1,0,1],
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1],
  [1,0,1,1,1,1,0,1],
  [0,1,0,1,1,0,1,0],
  [0,0,1,1,1,1,0,0]
];

export const LOTUS = [
  [0,0,0,1,1,0,0,0],
  [0,0,1,1,1,1,0,0],
  [0,1,1,1,1,1,1,0],
  [1,1,1,1,1,1,1,1],
  [1,1,0,1,1,0,1,1],
  [0,1,1,1,1,1,1,0],
  [0,0,1,1,1,1,0,0],
  [0,0,0,1,1,0,0,0]
];

export const MEDAL = [
  [1,1,0,0,0,0,1,1],
  [0,1,1,0,0,1,1,0],
  [0,0,1,1,1,1,0,0],
  [0,0,1,1,1,1,0,0],
  [0,1,1,0,0,1,1,0],
  [0,1,0,0,0,0,1,0],
  [0,0,1,1,1,1,0,0],
  [0,0,0,1,1,0,0,0]
];

export default function PixelSprite({ map, className = "" }: { map: number[][]; className?: string }) {
  const rows = map.length;
  const cols = map[0].length;

  return (
    <div 
      className={`grid gap-px ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`
      }}
    >
      {map.map((row, i) =>
        row.map((cell, j) => (
          <motion.div
            key={`${i}-${j}`}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: cell ? 1 : 0.05, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (i * cols + j) * 0.01, duration: 0.2 }}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 ${cell ? 'bg-accent shadow-[0_0_5px_var(--accent)]' : 'bg-border/20'}`}
          />
        ))
      )}
    </div>
  );
}
