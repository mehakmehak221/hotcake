"use client";

import { motion, useReducedMotion } from "framer-motion";

import { easeOutExpo, fadeUp, fadeUpReduced } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
};

export function Reveal({ children, className, delay = 0, amount = 0.15 }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <motion.div className={className}>{children}</motion.div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: "-48px" }}
      variants={fadeUp}
      transition={{ duration: 0.7, delay, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <motion.div className={className}>{children}</motion.div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={reduce ? undefined : fadeUpReduced}
      transition={{ duration: 0.55, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  );
}
