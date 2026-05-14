"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo, type ReactNode } from "react";

const screen = "#0f172a";
const chart = "#b4c6fc";
const chartMuted = "rgba(180, 198, 252, 0.22)";
const easeOut = [0.22, 1, 0.36, 1] as const;

function DonutRing({
  size,
  stroke,
  pct,
  delay,
}: {
  size: number;
  stroke: number;
  pct: number;
  delay: number;
}) {
  const reduce = useReducedMotion();
  const r = (size - stroke) / 2 - 1;
  const cx = size / 2;
  const cy = size / 2;
  const c = 2 * Math.PI * r;
  const target = c * (1 - pct);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0">
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke={chartMuted}
        strokeWidth={stroke}
        className="opacity-90"
      />
      <motion.circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke={chart}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: reduce ? target : c }}
        animate={{ strokeDashoffset: target }}
        transition={{ duration: reduce ? 0 : 1.35, ease: easeOut, delay: reduce ? 0 : delay }}
        style={{ filter: "drop-shadow(0 0 6px rgba(180,198,252,0.45))" }}
        transform={`rotate(-90 ${cx} ${cy})`}
      />
    </svg>
  );
}

function DonutGauge({
  pct,
  label,
  delay,
  size = 52,
}: {
  pct: number;
  label: string;
  delay: number;
  size?: number;
}) {
  const stroke = size > 44 ? 5 : 4;
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <DonutRing size={size} stroke={stroke} pct={pct} delay={delay} />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[10px] font-semibold tabular-nums text-indigo-100 sm:text-[11px]">
            {Math.round(pct * 100)}%
          </span>
        </div>
      </div>
      <span className="font-mono text-[7px] uppercase tracking-wider text-indigo-300/80 sm:text-[8px]">{label}</span>
    </div>
  );
}

function GlassPanel({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={`rounded-md border border-[#b4c6fc]/18 bg-[#b4c6fc]/6 shadow-[inset_0_1px_0_rgba(180,198,252,0.08)] backdrop-blur-sm ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

function BarStrip({
  bars,
  delayBase,
  className,
}: {
  bars: number[];
  delayBase: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const max = Math.max(...bars, 1);

  return (
    <div className={`flex h-full min-h-[72px] w-full items-end gap-[2px] sm:min-h-[88px] sm:gap-px ${className ?? ""}`}>
      {bars.map((h, i) => {
        const nh = (h / max) * 100;
        return (
          <div key={i} className="flex min-w-0 flex-1 flex-col justify-end" style={{ height: "100%" }}>
            <motion.div
              className="w-full rounded-[1px] bg-linear-to-t from-indigo-900/40 to-[#b4c6fc]/95 shadow-[0_0_10px_rgba(180,198,252,0.18)]"
              initial={reduce ? false : { scaleY: 0, opacity: 0.35 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
                delay: reduce ? 0 : delayBase + i * 0.018,
              }}
              style={{ height: `${nh}%`, transformOrigin: "bottom" }}
            />
          </div>
        );
      })}
    </div>
  );
}

function FlickerValue({ base, suffix = "" }: { base: string; suffix?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className="font-mono tabular-nums text-indigo-100/90 text-[9px] sm:text-[10px]"
      animate={reduce ? undefined : { opacity: [1, 0.7, 0.9, 1] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
    >
      {base}
      {suffix}
    </motion.span>
  );
}

export function HeroLaptopDashboard() {
  const reduce = useReducedMotion();

  const barsLeft = useMemo(
    () => Array.from({ length: 36 }, (_, i) => 12 + ((i * 13) % 37) + (i % 5) * 4),
    [],
  );
  const barsRight = useMemo(
    () => Array.from({ length: 36 }, (_, i) => 18 + ((i * 11) % 41) + ((i + 3) % 7) * 3),
    [],
  );

  return (
    <div className="absolute inset-0 flex min-h-0 flex-col bg-[#0a0f1c] p-[2.5%] sm:p-[3%]">
      <div
        className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-slate-600/50 shadow-[inset_0_0_80px_rgba(0,0,0,0.5),0_0_1px_rgba(180,198,252,0.15)]"
        style={{ backgroundColor: screen }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.45) 2px, rgba(255,255,255,0.45) 3px)",
          }}
          aria-hidden
        />

        <div className="relative z-1 flex min-h-0 flex-1 flex-col gap-2 p-2.5 sm:gap-3 sm:p-3 md:p-4">
          <div className="flex shrink-0 items-center justify-between gap-2">
            <div className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-indigo-200/90 sm:text-[10px]">
              INDEX<span className="text-indigo-500/60">/</span>STATUS
            </div>
            <div className="hidden items-center gap-2 font-mono text-[8px] text-indigo-300/60 sm:flex sm:text-[9px]">
              <FlickerValue base="NODE" />
              <span className="text-indigo-600/80">::</span>
              <FlickerValue base="OK" />
            </div>
          </div>

          <div className="flex min-h-0 flex-1 gap-2 sm:gap-3">
            <div className="flex w-[18%] max-w-[92px] shrink-0 flex-col gap-1.5 sm:gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={reduce ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: reduce ? 0 : 0.15 + i * 0.08, ease: easeOut }}
                >
                  <GlassPanel className="h-6 px-2 py-1 sm:h-7">
                    <div className="h-1 w-full rounded-full bg-[#b4c6fc]/30" />
                  </GlassPanel>
                </motion.div>
              ))}
              <GlassPanel className="mt-auto flex min-h-[40px] flex-1 flex-col gap-1 p-1.5 sm:min-h-[48px] sm:p-2">
                <div className="font-mono text-[7px] uppercase tracking-wider text-indigo-400/65">Filter</div>
                <div className="space-y-1">
                  {[40, 65, 35].map((w, j) => (
                    <div key={j} className="h-0.5 rounded-full bg-[#b4c6fc]/25" style={{ width: `${w}%` }} />
                  ))}
                </div>
              </GlassPanel>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-2 sm:gap-3">
              <div className="flex shrink-0 justify-end gap-2 sm:gap-4 md:gap-6">
                <DonutGauge pct={0.78} label="cap" delay={0.2} size={48} />
                <DonutGauge pct={0.44} label="cpu" delay={0.32} size={48} />
                <DonutGauge pct={0.91} label="io" delay={0.44} size={48} />
              </div>

              <div className="grid min-h-0 flex-1 grid-cols-2 gap-2 sm:gap-3">
                <GlassPanel className="flex min-h-[72px] flex-col p-2 sm:min-h-[88px] sm:p-2.5">
                  <div className="mb-1.5 flex items-center justify-between gap-1">
                    <span className="font-mono text-[7px] uppercase tracking-wider text-indigo-400/75 sm:text-[8px]">
                      Throughput
                    </span>
                    <FlickerValue base="428" suffix=" mb/s" />
                  </div>
                  <BarStrip bars={barsLeft} delayBase={0.35} />
                </GlassPanel>
                <GlassPanel className="flex min-h-[72px] flex-col p-2 sm:min-h-[88px] sm:p-2.5">
                  <div className="mb-1.5 flex items-center justify-between gap-1">
                    <span className="font-mono text-[7px] uppercase tracking-wider text-indigo-400/75 sm:text-[8px]">
                      Latency
                    </span>
                    <FlickerValue base="12" suffix=" ms" />
                  </div>
                  <BarStrip bars={barsRight} delayBase={0.42} />
                </GlassPanel>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="mx-auto mt-1.5 h-3 w-[88%] max-w-3xl shrink-0 rounded-b-lg bg-linear-to-b from-slate-800/95 to-[#0a0f1c] shadow-[0_12px_40px_rgba(0,0,0,0.55)] sm:mt-2 sm:h-4" />
    </div>
  );
}
