"use client";

import { motion, useReducedMotion } from "framer-motion";

export function PageAmbience() {
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -left-[20%] top-[8%] h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full bg-violet-300/25 blur-[100px]"
        animate={{
          x: [0, 40, 10, 0],
          y: [0, 20, -10, 0],
          scale: [1, 1.08, 1.02, 1],
          opacity: [0.35, 0.5, 0.4, 0.35],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[15%] top-[35%] h-[min(55vw,420px)] w-[min(55vw,420px)] rounded-full bg-purple-400/20 blur-[90px]"
        animate={{
          x: [0, -30, -8, 0],
          y: [0, -25, 15, 0],
          opacity: [0.25, 0.42, 0.3, 0.25],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[5%] left-[30%] h-[min(50vw,380px)] w-[min(50vw,380px)] rounded-full bg-indigo-300/15 blur-[80px]"
        animate={{
          scale: [1, 1.12, 1.05, 1],
          opacity: [0.2, 0.35, 0.28, 0.2],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
    </div>
  );
}
