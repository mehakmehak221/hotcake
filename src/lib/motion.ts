export const easeOut = [0.22, 1, 0.36, 1] as const;
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export const springSnappy = { type: "spring" as const, stiffness: 420, damping: 32 };
export const springSoft = { type: "spring" as const, stiffness: 260, damping: 28 };
export const springBouncy = { type: "spring" as const, stiffness: 380, damping: 22 };

export const fadeUp = {
  hidden: { opacity: 0, y: 36, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export const fadeUpReduced = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};
