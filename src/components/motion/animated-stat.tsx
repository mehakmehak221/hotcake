"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedStatProps = {
  value: string;
  suffix?: string;
  className?: string;
};

export function AnimatedStat({ value, suffix = "", className }: AnimatedStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const target = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const spring = useSpring(0, { stiffness: 55, damping: 18 });
  const display = useTransform(spring, (v) => String(Math.round(v)));

  useEffect(() => {
    if (inView) spring.set(target);
  }, [inView, target, spring]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
