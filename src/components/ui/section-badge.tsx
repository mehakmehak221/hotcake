"use client";

import { theme } from "@/lib/theme";

type SectionBadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "onDark";
};

export function SectionBadge({
  children,
  className = "",
  variant = "default",
}: SectionBadgeProps) {
  if (variant === "onDark") {
    return (
      <span
        className={`inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm ${className}`}
      >
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          aria-hidden
        />
        {children}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-violet-50 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-700 sm:text-xs ${className}`}
    >
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: theme.purple }}
        aria-hidden
      />
      {children}
    </span>
  );
}
