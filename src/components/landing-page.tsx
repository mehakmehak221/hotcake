"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import type { ReactNode } from "react";
import { useState } from "react";

import { HeroLaptopDashboard } from "@/components/hero-laptop-dashboard";

/** Maxtron reference — deep navy + periwinkle */
const bg = "#0a0f1c";
const accent = "#b4c6fc";
const accentBright = "#d4ddff";
const heading = "#ffffff";
const muted = "#94a3b8";

const borderCard =
  "border border-slate-600/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]";

const easeOut = [0.22, 1, 0.36, 1] as const;

function MaxtronGridMark() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 text-[#cbd5e1]"
      aria-hidden
    >
      <rect x="3" y="3" width="7" height="7" rx="1.25" stroke="currentColor" strokeWidth="1.35" />
      <rect x="14" y="3" width="7" height="7" rx="1.25" stroke="currentColor" strokeWidth="1.35" />
      <rect x="3" y="14" width="7" height="7" rx="1.25" stroke="currentColor" strokeWidth="1.35" />
      <rect x="14" y="14" width="7" height="7" rx="1.25" stroke="currentColor" strokeWidth="1.35" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline shrink-0"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function FeatureIcon({ children }: { children: ReactNode }) {
  return (
    <div className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center text-[#b4c6fc] drop-shadow-[0_0_14px_rgba(180,198,252,0.25)] sm:mb-0">
      {children}
    </div>
  );
}

const features = [
  {
    title: "AI Business Command Center",
    description: "Centralized orchestration layer for automated business logic and operations.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h.01M15 9h.01M9 15h6" />
      </svg>
    ),
  },
  {
    title: "Token Launchpad + Community Engine",
    description: "Web3-ready token issuance platform with integrated growth and engagement tools.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "AI Infra Cost Optimizer",
    description: "Automated resource management reducing cloud expenditure by up to...",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M4 14l4-4 4 4 8-8" />
        <path d="M4 20h16" />
      </svg>
    ),
  },
  {
    title: "AI App Crash Investigator",
    description: "Instant root-cause analysis and automated patching for enterprise...",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M12 3v4M5.6 5.6l2.8 2.8M3 12h4M5.6 18.4l2.8-2.8M12 21v-4M18.4 18.4l-2.8-2.8M21 12h-4M18.4 5.6l-2.8 2.8" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "AI Crypto Trading Bot Platform",
    description: "Algorithmic liquidity management and signal-based execution for institutions.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M4 19V5M4 19h16M8 15V9M12 15V7M16 15v-4" />
      </svg>
    ),
  },
  {
    title: "AI Audit Services",
    description: "Verifiable protocols for smart contracts and systems to ensure compliance.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M12 3l8 4v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

function SectionDivider() {
  return (
    <div
      className="pointer-events-none h-px w-full bg-linear-to-r from-transparent via-[#b4c6fc]/25 to-transparent"
      aria-hidden
    />
  );
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: reduce ? 0 : 0.62, delay: reduce ? 0 : delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

function AmbientBackdrop({ reduce }: { reduce: boolean }) {
  if (reduce) {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute -left-[25%] top-0 h-[min(80vh,720px)] w-[min(80vw,720px)] rounded-full opacity-[0.06] blur-[120px]"
          style={{ background: `radial-gradient(circle, ${accent} 0%, transparent 70%)` }}
        />
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -left-[20%] -top-[25%] h-[min(85vmin,820px)] w-[min(85vmin,820px)] rounded-full blur-[120px]"
        style={{ background: `radial-gradient(circle, ${accent} 0%, transparent 68%)` }}
        initial={{ opacity: 0.07 }}
        animate={{
          opacity: [0.07, 0.11, 0.08, 0.1, 0.07],
          x: [0, 40, 10, 32, 0],
          y: [0, 24, 8, 18, 0],
          scale: [1, 1.05, 1.02, 1.03, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[15%] bottom-[5%] h-[min(70vmin,640px)] w-[min(70vmin,640px)] rounded-full blur-[110px]"
        style={{ background: "radial-gradient(circle, #3730a3 0%, transparent 72%)" }}
        initial={{ opacity: 0.04 }}
        animate={{
          opacity: [0.04, 0.08, 0.05, 0.07, 0.04],
          x: [0, -28, -8, -20, 0],
          y: [0, -16, -4, -12, 0],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <div
        className="hc-ambient hc-ambient--slow absolute left-1/2 top-[40%] h-[40vmin] w-[90vw] max-w-4xl -translate-x-1/2 rounded-full opacity-[0.045] blur-[90px]"
        style={{ background: `linear-gradient(90deg, transparent, ${accentBright}, transparent)` }}
      />
    </div>
  );
}

export function LandingPage() {
  const reduce = useReducedMotion();
  const [navSolid, setNavSolid] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setNavSolid(y > 20);
  });

  const heroDur = reduce ? 0 : 0.58;

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans tracking-tight" style={{ backgroundColor: bg, color: heading }}>
      <AmbientBackdrop reduce={!!reduce} />

      <motion.header
        className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ${
          navSolid
            ? `${borderCard} border-[#b4c6fc]/15 bg-[#0a0f1c]/92 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl backdrop-saturate-150`
            : "border-transparent bg-transparent shadow-none"
        }`}
        initial={false}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <motion.div
            className="flex items-center gap-2.5"
            initial={reduce ? false : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <MaxtronGridMark />
            <span className="text-lg font-extrabold tracking-tight text-[#cbd5e1] sm:text-xl">Maxtron</span>
          </motion.div>
          <motion.button
            type="button"
            whileHover={reduce ? undefined : { scale: 1.04, y: -1 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="btn-primary-shine rounded-lg px-4 py-2 font-mono text-xs font-semibold text-[#0a0f1c] shadow-[0_0_24px_-4px_rgba(180,198,252,0.45)] sm:text-sm"
            style={{ backgroundColor: accent, color: "#0a0f1c" }}
          >
            Book Strategy Call
          </motion.button>
        </div>
      </motion.header>

      <main className="relative z-10">
        <section className="relative px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-14 lg:px-10">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-linear-to-r from-transparent via-[#b4c6fc]/20 to-transparent"
            aria-hidden
          />
          <div className="mx-auto max-w-7xl text-left">
            <motion.h1
              className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: heading, textShadow: "0 0 100px rgba(180,198,252,0.1)" }}
              initial={false}
            >
              <motion.span
                className="block"
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: heroDur, ease: easeOut }}
              >
                Maxtron Flagship Solutions
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl"
              style={{ color: muted }}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: heroDur, delay: 0.08, ease: easeOut }}
            >
              High-impact AI, Web3, and Enterprise Technology Solutions built for scale, automation, and business growth.
            </motion.p>

            <motion.div
              className="mt-10 flex max-w-md flex-col gap-3"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: heroDur, delay: 0.16, ease: easeOut }}
            >
              <motion.button
                type="button"
                whileHover={reduce ? undefined : { scale: 1.02, y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 420, damping: 24 }}
                className="btn-primary-shine inline-flex items-center justify-center rounded-lg px-8 py-3.5 font-mono text-sm font-semibold text-[#0a0f1c] shadow-[0_0_36px_-6px_rgba(180,198,252,0.45)] sm:text-base"
                style={{ backgroundColor: accent, color: "#0a0f1c" }}
              >
                Explore Solutions
              </motion.button>
              <motion.button
                type="button"
                whileHover={
                  reduce
                    ? undefined
                    : {
                        scale: 1.02,
                        borderColor: accent,
                        boxShadow: "0 0 0 1px rgba(180,198,252,0.35), 0 0 28px rgba(180,198,252,0.12)",
                        backgroundColor: "rgba(180,198,252,0.05)",
                      }
                }
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 420, damping: 24 }}
                className="inline-flex items-center justify-center rounded-lg border border-white/80 px-8 py-3.5 font-mono text-sm font-semibold text-white sm:text-base"
              >
                Schedule Now
              </motion.button>
            </motion.div>

            <motion.div
              className={`relative mt-14 overflow-hidden rounded-2xl ${borderCard} bg-[#0f172a]/50 ring-1 ring-[#b4c6fc]/12 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.65)]`}
              initial={reduce ? false : { opacity: 0, y: 36, scale: 0.98 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: reduce ? 0 : 0.72, ease: easeOut, delay: reduce ? 0 : 0.1 }}
            >
              <div className="relative aspect-16/10 w-full">
                <motion.div
                  className="absolute inset-0"
                  initial={reduce ? false : { scale: 1.035 }}
                  whileInView={reduce ? undefined : { scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: reduce ? 0 : 1.1, ease: easeOut }}
                  role="img"
                  aria-label="Laptop display with data charts"
                >
                  <HeroLaptopDashboard />
                </motion.div>
              </div>
            </motion.div>
            <motion.p
              className="mt-4 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b4c6fc]/90 sm:text-xs"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              AI INFRASTRUCTURE FORGE
            </motion.p>
          </div>
        </section>

        <SectionDivider />

        <section className="border-t border-slate-700/40 px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-[#b4c6fc]/90">
                SYSTEMIC CORE
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Industrial Grade Core
              </h2>
            </Reveal>

            <div className="mt-12 flex flex-col gap-4 sm:gap-5">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={Math.min(i * 0.06, 0.4)}>
                  <motion.article
                    initial={false}
                    whileHover={
                      reduce
                        ? undefined
                        : {
                            y: -4,
                            borderColor: "rgba(180, 198, 252, 0.28)",
                            boxShadow:
                              "0 20px 50px -28px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(180,198,252,0.12)",
                          }
                    }
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    className="group rounded-xl border border-slate-600/50 bg-[#0f172a] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm sm:p-6"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                      <FeatureIcon>{f.icon}</FeatureIcon>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-bold text-white sm:text-xl">{f.title}</h3>
                        <p className="mt-2.5 text-sm leading-relaxed text-slate-400 sm:text-base">{f.description}</p>
                        <motion.a
                          href="#"
                          className="mt-5 inline-flex items-center gap-2 font-mono text-sm font-medium text-[#b4c6fc] transition-colors hover:text-[#d4ddff]"
                          whileHover={reduce ? undefined : { x: 3 }}
                          transition={{ type: "spring", stiffness: 380, damping: 26 }}
                        >
                          Learn More
                          <ArrowRight />
                        </motion.a>
                      </div>
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <section className="border-t border-slate-700/40 px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Trusted by the Architects of Tomorrow
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { stat: "50M+", label: "Query requests" },
                { stat: "742+", label: "Live Monitoring" },
              ].map((box, i) => (
                <Reveal key={box.label} delay={i * 0.08}>
                  <motion.div
                    whileHover={
                      reduce
                        ? undefined
                        : {
                            y: -6,
                            borderColor: "rgba(180, 198, 252, 0.28)",
                            boxShadow:
                              "0 20px 50px -24px rgba(0,0,0,0.55), 0 0 0 1px rgba(180,198,252,0.14)",
                          }
                    }
                    transition={{ type: "spring", stiffness: 320, damping: 24 }}
                    className={`rounded-2xl ${borderCard} bg-[#0f172a] px-6 py-8 text-center ring-1 ring-[#b4c6fc]/10 sm:text-left`}
                  >
                    <p className="text-2xl font-bold tabular-nums text-[#d4ddff] sm:text-3xl">{box.stat}</p>
                    <p className="mt-1 text-sm text-slate-400 sm:text-base">{box.label}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.12}>
              <figure
                className={`group relative mt-10 overflow-hidden rounded-2xl ${borderCard} bg-[#0f172a] p-8 ring-1 ring-[#b4c6fc]/12 sm:p-10`}
              >
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#b4c6fc]/10 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                  aria-hidden
                />
                <blockquote className="relative font-serif text-lg font-normal italic leading-relaxed text-white sm:text-xl">
                  &ldquo;Maxtron&apos;s AI infrastructure didn&apos;t just optimize our stack—it redefined our entire approach to
                  data-driven decision making. Their precision is unmatched.&rdquo;
                </blockquote>
                <figcaption className="relative mt-8 flex items-center gap-4">
                  <motion.div
                    className="h-12 w-12 shrink-0 rounded-md bg-slate-700 ring-1 ring-[#b4c6fc]/25"
                    aria-hidden
                    whileHover={reduce ? undefined : { scale: 1.06 }}
                  />
                  <div>
                    <p className="font-semibold text-white">Erik, Head of Digital</p>
                    <p className="mt-0.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                      PHASE SIX SYSTEMS INCORP
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        <SectionDivider />

        <section className="border-t border-slate-700/40 px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <motion.div
                whileHover={
                  reduce
                    ? undefined
                    : {
                        boxShadow:
                          "0 0 0 1px rgba(180,198,252,0.2), 0 32px 90px -28px rgba(0,0,0,0.65), 0 0 80px -40px rgba(180,198,252,0.1)",
                      }
                }
                transition={{ duration: 0.4 }}
                className={`relative overflow-hidden rounded-2xl ${borderCard} bg-linear-to-b from-[#0f172a] to-[#0a0f1c] px-6 py-12 text-center ring-1 ring-[#b4c6fc]/15 sm:px-12 sm:py-16`}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-50"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(180,198,252,0.12), transparent 55%)",
                  }}
                  aria-hidden
                />
                <div className="relative">
                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    Let&apos;s Build Your Next Competitive Advantage
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                    Deploy institutional-grade AI and Web3 infrastructure in weeks, not years.
                  </p>
                  <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
                    <motion.button
                      type="button"
                      whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
                      whileTap={reduce ? undefined : { scale: 0.98 }}
                      className="btn-primary-shine inline-flex items-center justify-center rounded-lg px-8 py-3.5 font-mono text-sm font-semibold tracking-wide text-[#0a0f1c] shadow-[0_0_40px_-8px_rgba(180,198,252,0.5)] sm:text-base"
                      style={{ backgroundColor: accent, color: "#0a0f1c" }}
                    >
                      BOOK A STRATEGY CALL
                    </motion.button>
                    <motion.button
                      type="button"
                      whileHover={
                        reduce
                          ? undefined
                          : {
                              scale: 1.03,
                              borderColor: "rgba(255,255,255,0.95)",
                              boxShadow: "0 0 0 1px rgba(255,255,255,0.2)",
                            }
                      }
                      whileTap={reduce ? undefined : { scale: 0.98 }}
                      className="inline-flex items-center justify-center rounded-lg border border-white bg-[#0f172a] px-8 py-3.5 font-mono text-sm font-semibold tracking-wide text-white sm:text-base"
                    >
                      GET STARTED
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </section>

        <SectionDivider />

        <Reveal>
          <footer className="border-t border-slate-700/40 px-5 py-14 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="text-lg font-semibold text-white">Maxtron</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">Investor Grade Infrastructure.</p>
                </div>
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#b4c6fc]/90">Resources</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-400">
                    <li>
                      <motion.a href="#" className="inline-block hover:text-white" whileHover={reduce ? undefined : { x: 3 }}>
                        Security Architecture
                      </motion.a>
                    </li>
                    <li>
                      <motion.a href="#" className="inline-block hover:text-white" whileHover={reduce ? undefined : { x: 3 }}>
                        White Papers
                      </motion.a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#b4c6fc]/90">Legal</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-400">
                    <li>
                      <motion.a href="#" className="inline-block hover:text-white" whileHover={reduce ? undefined : { x: 3 }}>
                        Privacy Policy
                      </motion.a>
                    </li>
                    <li>
                      <motion.a href="#" className="inline-block hover:text-white" whileHover={reduce ? undefined : { x: 3 }}>
                        Terms of Service
                      </motion.a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#b4c6fc]/90">Offices</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    85 Wall Street, New York NY 10005
                  </p>
                </div>
              </div>
              <p className="mt-12 border-t border-slate-700/40 pt-8 text-xs text-slate-500">
                © {new Date().getFullYear()} Maxtron. All rights reserved.
              </p>
            </div>
          </footer>
        </Reveal>
      </main>
    </div>
  );
}
