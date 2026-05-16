"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState } from "react";

import { ContactSection } from "@/components/contact-section";
import { MaxtronLogo } from "@/components/maxtron-logo";
import { IndustrialGradeCore } from "@/components/industrial-grade-core";
import { AnimatedStat } from "@/components/motion/animated-stat";
import { PageAmbience } from "@/components/motion/page-ambience";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/motion/reveal";
import { SectionBadge } from "@/components/ui/section-badge";
import { maxtronProducts } from "@/data/maxtron-products";
import { easeOutExpo, springSoft } from "@/lib/motion";
import { CALENDLY_URL } from "@/lib/site";
import { easeOut, theme } from "@/lib/theme";

const pillars = [
  {
    title: "AI & Enterprise Systems",
    body: "Readiness audits, infra cost optimization, and crash intelligence built for teams shipping AI at scale.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M12 2a4 4 0 014 4v1h1a3 3 0 013 3v8a3 3 0 01-3 3H8a3 3 0 01-3-3v-8a3 3 0 013-3h1V6a4 4 0 014-4z" />
        <path d="M9 14h6M10 18h4" />
      </svg>
    ),
  },
  {
    title: "Web3 & Security",
    body: "Smart contract audits, token launchpads, and compliant RWA tokenization across global markets.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M12 3l8 4v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
      </svg>
    ),
  },
  {
    title: "Trading & Growth",
    body: "Institutional crypto trading automation, community engines, and revenue systems. Not generic software.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M4 19V5M4 19h16M8 15V9M12 15V7M16 15v-4" />
      </svg>
    ),
  },
];

const stats = [
  { value: "6", label: "Flagship products", suffix: "" },
  { value: "500", label: "Enterprises audited", suffix: "+" },
  { value: "43", label: "Max infra savings", suffix: "%" },
  { value: "4", label: "Global markets", suffix: "" },
];

const trustLabels = [
  "Smart Audit",
  "AI Audit",
  "Infra Optimizer",
  "Crash Investigator",
  "Trading Bot",
  "Maxtronize",
  "RWA Tokenization",
];

function HeroVisual({ reduce }: { reduce: boolean }) {
  return (
    <motion.div
      className="hc-float relative"
      initial={reduce ? false : { opacity: 0, scale: 0.94, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.12, ease: easeOutExpo }}
    >
      <motion.div
        className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl"
        style={{ background: `radial-gradient(circle, ${theme.purpleGlow} 0%, transparent 70%)` }}
        animate={reduce ? undefined : { opacity: [0.35, 0.55, 0.35], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-violet-200/60 bg-white p-1.5 shadow-[var(--hc-shadow-lg)]"
        whileHover={reduce ? undefined : { scale: 1.01, rotate: 0.2 }}
        transition={springSoft}
      >
        <motion.div
          className="relative overflow-hidden rounded-xl bg-linear-to-br from-[#1e1b4b] via-violet-950 to-indigo-950 p-5 sm:p-6"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: easeOutExpo }}
        >
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
            animate={reduce ? undefined : { backgroundPosition: ["0px 0px", "20px 20px"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-400/50 to-transparent"
            animate={reduce ? undefined : { top: ["0%", "100%", "0%"], opacity: [0, 0.6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />

          <motion.div
            className="relative mb-5 flex items-center justify-between"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: easeOut }}
          >
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-300">
                Command Center
              </p>
              <p className="mt-0.5 text-sm font-semibold text-white">Flagship Solutions</p>
            </div>
            <span className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2.5 py-1 text-[10px] font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              All systems live
            </span>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            {maxtronProducts.slice(0, 4).map((p, i) => (
              <motion.a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md transition-all hover:border-violet-400/30 hover:bg-white/10"
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 + i * 0.07, duration: 0.5, ease: easeOut }}
                whileHover={reduce ? undefined : { y: -3 }}
              >
                <p className="text-[11px] font-semibold leading-snug text-violet-100 sm:text-xs">{p.title}</p>
                <p className="mt-1.5 flex items-center gap-1 text-[10px] text-violet-300/90 transition-colors group-hover:text-violet-200">
                  Launch
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </p>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="relative mt-5 border-t border-white/10 pt-5"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "AI readiness", pct: "92%" },
                { label: "Cost saved", pct: "43%" },
                { label: "Debug time", pct: "70%" },
              ].map((m, i) => (
                <motion.div
                  key={m.label}
                  className="rounded-lg bg-white/5 px-2 py-2 text-center"
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08, duration: 0.45, ease: easeOut }}
                  whileHover={reduce ? undefined : { scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <p className="text-sm font-bold text-white">{m.pct}</p>
                  <p className="text-[9px] text-violet-300">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}


function LogoMarquee() {
  const items = [...trustLabels, ...trustLabels];
  return (
    <Reveal amount={0.3}>
    <motion.div className="hc-marquee-wrap relative overflow-hidden border-y border-violet-100/80 bg-violet-50/50 py-5">
      <motion.div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-violet-50/90 to-transparent"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-violet-50/90 to-transparent"
        aria-hidden
      />
      <div className="flex overflow-hidden">
        <div className="hc-marquee-track flex shrink-0 items-center gap-12 px-6">
          {items.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="whitespace-nowrap font-mono text-xs font-semibold uppercase tracking-[0.2em] text-violet-400/90"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
    </Reveal>
  );
}

export function LandingPage() {
  const reduce = useReducedMotion();
  const [navSolid, setNavSolid] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const heroParallaxY = useTransform(scrollY, [0, 500], [0, reduce ? 0 : 60]);

  useMotionValueEvent(scrollY, "change", (y) => {
    setNavSolid(y > 20);
  });

  const heroDur = reduce ? 0 : 0.55;
  const navLinks = [
    { href: "#solutions", label: "Solutions" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.div className="relative min-h-screen bg-white font-sans text-gray-900 antialiased">
      <PageAmbience />
      <motion.header
        initial={reduce ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: easeOutExpo }}
        className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 ${
          navSolid
            ? "border-b border-violet-100/90 bg-white/90 shadow-[0_8px_32px_-16px_rgba(109,40,217,0.12)] backdrop-blur-xl"
            : "border-b border-transparent bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <MaxtronLogo size={40} priority />
            <div className="leading-tight">
              <span className="block text-lg font-extrabold tracking-tight text-gray-900">Flagship Solutions</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-500">
                by Maxtron
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hc-nav-link text-sm">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduce ? undefined : { scale: 1.03, y: -1 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="btn-primary-shine hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-[0_6px_20px_-6px_rgba(109,40,217,0.55)] sm:inline-flex"
              style={{ background: `linear-gradient(135deg, ${theme.purple}, ${theme.purpleDark})` }}
            >
              Book Strategy Call
            </motion.a>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-200 text-violet-700 md:hidden"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                {mobileOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: easeOut }}
              className="overflow-hidden border-t border-violet-100 bg-white md:hidden"
            >
              <div className="px-5 py-4">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={reduce ? false : { opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 + i * 0.05, duration: 0.35, ease: easeOut }}
                className="block py-3 text-sm font-medium text-gray-700"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-shine mt-2 block rounded-full py-3 text-center text-sm font-semibold text-white"
              style={{ background: theme.purple }}
            >
              Book Strategy Call
            </a>
            <a
              href="#contact"
              className="mt-2 block rounded-full border-2 border-violet-200 py-3 text-center text-sm font-semibold text-violet-800"
              onClick={() => setMobileOpen(false)}
            >
              Send a message
            </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="overflow-x-clip pt-[4.75rem]">
        <section className="hc-hero-mesh relative overflow-hidden px-5 pb-8 pt-8 sm:px-8 sm:pb-12 sm:pt-10 lg:px-10 lg:pt-12">
          <div className="hc-dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: heroDur, ease: easeOut }}
              >
                <SectionBadge>Maxtron.ai · Flagship Solutions</SectionBadge>
              </motion.div>

              <motion.h1
                className="mt-6 text-[2.5rem] font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.5rem]"
                initial={reduce ? false : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: heroDur, delay: 0.06, ease: easeOut }}
              >
                <span className="hc-gradient-text hc-gradient-text-animate">Flagship Solutions</span>
                <br />
                <span className="text-gray-900">Every Maxtron product, one professional hub.</span>
              </motion.h1>

              <motion.p
                className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: heroDur, delay: 0.12, ease: easeOut }}
              >
                Institutional-grade AI audits, smart contract security, infra optimization, mobile crash
                intelligence, crypto trading automation, and RWA tokenization. Curated, linked, and ready to deploy.
              </motion.p>

              <motion.div
                className="mt-9 max-w-md"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: heroDur, delay: 0.18, ease: easeOut }}
              >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <motion.a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={reduce ? undefined : { scale: 1.02, y: -2 }}
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                    className="btn-primary-shine inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_28px_-8px_rgba(109,40,217,0.55)] sm:col-span-2 sm:px-8 sm:py-4"
                    style={{ background: `linear-gradient(135deg, ${theme.purple}, ${theme.purpleDark})` }}
                  >
                    Book Strategy Call
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#contact"
                    whileHover={reduce ? undefined : { scale: 1.02, backgroundColor: theme.purpleLight }}
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                    className="inline-flex items-center justify-center rounded-full border-2 border-violet-200 bg-white px-6 py-3.5 text-sm font-semibold text-violet-800"
                  >
                    Send a message
                  </motion.a>
                  <motion.a
                    href="#solutions"
                    whileHover={reduce ? undefined : { scale: 1.02, backgroundColor: theme.purpleLight }}
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                    className="inline-flex items-center justify-center rounded-full border-2 border-violet-100 bg-violet-50/80 px-6 py-3.5 text-sm font-semibold text-violet-800"
                  >
                    Explore solutions
                  </motion.a>
                </div>
              </motion.div>
            </div>

            <motion.div style={{ y: heroParallaxY }}>
              <HeroVisual reduce={!!reduce} />
            </motion.div>
          </div>
        </section>

        <LogoMarquee />

        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <SectionBadge>Why Flagship Solutions</SectionBadge>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  One front door.{" "}
                  <span className="hc-gradient-text">Six revenue systems.</span>
                </h2>
                <p className="mt-4 text-base text-gray-600 sm:text-lg">
                  Stop juggling scattered product URLs. One hub unifies Maxtron&apos;s flagship stack for founders,
                  funds, and enterprise teams.
                </p>
              </div>
            </Reveal>

            <StaggerReveal className="mt-14 grid gap-6 sm:grid-cols-3 lg:gap-8">
              {pillars.map((p) => (
                <StaggerItem key={p.title}>
                  <motion.div
                    className="hc-card group h-full p-8"
                    whileHover={reduce ? undefined : { y: -8, transition: springSoft }}
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md transition-transform duration-300 group-hover:scale-105"
                      style={{ background: `linear-gradient(145deg, ${theme.purple}, ${theme.purpleDark})` }}
                    >
                      {p.icon}
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-gray-900">{p.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-gray-600">{p.body}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>

        <section id="about" className="border-t border-violet-50 bg-violet-50/30 px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-[var(--hc-shadow-lg)]">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(145deg, #1e1b4b 0%, #4c1d95 40%, #6d28d9 75%, #c4b5fd 100%)",
                  }}
                />
                <motion.div
                  className="absolute inset-0 opacity-50"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 25% 75%, rgba(34,211,238,0.35) 0%, transparent 45%), radial-gradient(circle at 75% 25%, rgba(251,146,60,0.25) 0%, transparent 40%)",
                  }}
                  aria-hidden
                />
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <div className="grid w-full max-w-sm grid-cols-2 gap-4">
                    {[
                      { label: "AI", sub: "Audit & Ops" },
                      { label: "Web3", sub: "Security" },
                      { label: "UX", sub: "Product" },
                      { label: "Data", sub: "Analytics" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        className="rounded-2xl border border-white/25 bg-white/10 p-5 backdrop-blur-md"
                        initial={reduce ? false : { opacity: 0, y: 16, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: easeOutExpo }}
                        whileHover={reduce ? undefined : { scale: 1.03, backgroundColor: "rgba(255,255,255,0.15)" }}
                      >
                        <p className="text-2xl font-bold text-white">{item.label}</p>
                        <p className="mt-1 text-xs text-violet-200">{item.sub}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <SectionBadge>About Maxtron</SectionBadge>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl">
                Technical depth meets{" "}
                <span className="hc-gradient-text">go-to-market excellence</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                Our team blends ex-successful startup founders with top talent from Blockchain, AI, Product,
                UX/UI, Software Development, Data Analytics, and Marketing, unified by one goal: redefine product
                innovation with deep understanding of your business and technology needs.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Flagship Solutions is Maxtron&apos;s curated showcase. Every product in one polished experience, built
                to convert interest into deployed infrastructure.
              </p>
              <StaggerReveal className="mt-8 space-y-3">
                {["Board-ready AI audits in minutes", "Enterprise Web3 & compliance", "Revenue-grade trading systems"].map(
                  (item) => (
                    <StaggerItem key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                        style={{ background: theme.purple }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
                          <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </StaggerItem>
                  ),
                )}
              </StaggerReveal>
              <motion.a
                href="#solutions"
                className="mt-9 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-6 py-3 text-sm font-semibold text-violet-800 shadow-sm transition-shadow hover:shadow-md"
                whileHover={reduce ? undefined : { x: 4 }}
              >
                View all solutions
                <span aria-hidden>→</span>
              </motion.a>
            </Reveal>
          </div>
        </section>

        <IndustrialGradeCore />

        <section
          className="border-t border-violet-100 px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
          style={{ background: `linear-gradient(180deg, ${theme.purpleLight} 0%, #f5f3ff 100%)` }}
        >
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="text-center">
                <SectionBadge>Proof</SectionBadge>
                <h2 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                  Trusted by teams shipping the future
                </h2>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-violet-200/60 bg-violet-200/60 sm:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.06}>
                  <motion.div
                    className="hc-stat-card bg-white px-6 py-8 text-center sm:py-10"
                    whileHover={reduce ? undefined : { backgroundColor: "#faf5ff", y: -3, transition: springSoft }}
                  >
                    <p className="text-3xl font-bold tabular-nums sm:text-4xl" style={{ color: theme.purpleDark }}>
                      <AnimatedStat value={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-2 text-xs font-medium text-gray-600 sm:text-sm">{s.label}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.12}>
              <figure className="hc-card mx-auto mt-14 max-w-3xl p-10 sm:p-12">
                <motion.div className="flex justify-center gap-1 text-violet-500" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.svg
                      key={i}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                      initial={reduce ? false : { opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.06, type: "spring", stiffness: 380, damping: 18 }}
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </motion.svg>
                  ))}
                </motion.div>
                <blockquote className="mt-6 text-center text-lg font-medium leading-relaxed text-gray-800 sm:text-xl">
                  &ldquo;Maxtron&apos;s stack gave us one place to audit AI readiness, cut inference costs, and ship
                  Web3 products with institutional confidence.&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex flex-col items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ background: `linear-gradient(135deg, ${theme.purple}, ${theme.purpleDark})` }}
                  >
                    ET
                  </div>
                  <motion.div className="text-center">
                    <p className="font-semibold text-gray-900">Enterprise AI & Web3 Teams</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                      Maxtron flagship customers
                    </p>
                  </motion.div>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div
                className="relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-14 sm:py-16"
                style={{
                  background: `linear-gradient(135deg, ${theme.purpleDeep} 0%, ${theme.purple} 45%, #7c3aed 100%)`,
                }}
              >
                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "radial-gradient(circle at 30% 20%, white 0%, transparent 50%)",
                  }}
                  animate={reduce ? undefined : { opacity: [0.15, 0.28, 0.15] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                />
                <motion.div
                  className="pointer-events-none absolute -right-20 top-1/2 h-56 w-56 rounded-full bg-violet-300/30 blur-3xl"
                  animate={reduce ? undefined : { scale: [1, 1.2, 1], x: [0, -20, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                />
                <motion.div
                  className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-indigo-300/25 blur-3xl"
                  animate={reduce ? undefined : { scale: [1, 1.15, 1], y: [0, -15, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  aria-hidden
                />
                <div className="relative">
                  <SectionBadge variant="onDark">Get Started</SectionBadge>
                  <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                    Ready to deploy your next competitive advantage?
                  </h2>
                  <p className="mx-auto mt-4 max-w-lg text-base text-violet-100 sm:text-lg">
                    Pick a product from the grid, book a strategy call, or partner with Maxtron on a custom
                    enterprise build.
                  </p>
                  <StaggerReveal className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
                    <StaggerItem>
                    <motion.a
                      href="#solutions"
                      whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
                      whileTap={reduce ? undefined : { scale: 0.98 }}
                      className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold shadow-xl sm:w-auto sm:text-base"
                      style={{ color: theme.purpleDark }}
                    >
                      Browse Solutions
                    </motion.a>
                    </StaggerItem>
                    <StaggerItem>
                    <motion.a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={reduce ? undefined : { scale: 1.03, backgroundColor: "rgba(255,255,255,0.12)" }}
                      whileTap={reduce ? undefined : { scale: 0.98 }}
                      className="inline-flex w-full items-center justify-center rounded-full border-2 border-white/70 px-8 py-4 text-sm font-semibold text-white sm:w-auto sm:text-base"
                    >
                      Book Strategy Call
                    </motion.a>
                    </StaggerItem>
                    <StaggerItem>
                    <motion.a
                      href="#contact"
                      whileHover={reduce ? undefined : { scale: 1.03, backgroundColor: "rgba(255,255,255,0.12)" }}
                      whileTap={reduce ? undefined : { scale: 0.98 }}
                      className="inline-flex w-full items-center justify-center rounded-full border-2 border-white/40 px-8 py-4 text-sm font-semibold text-violet-100 sm:w-auto sm:text-base"
                    >
                      Send a message
                    </motion.a>
                    </StaggerItem>
                  </StaggerReveal>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <ContactSection />

        <footer className="border-t border-violet-100 bg-gray-50/80 px-5 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <StaggerReveal className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <StaggerItem>
                <div className="flex items-center gap-2.5">
                  <MaxtronLogo size={32} />
                  <span className="text-lg font-bold text-gray-900">Flagship Solutions</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  Maxtron&apos;s flagship solutions hub for AI, Web3, mobile, trading, and RWA tokenization in one
                  professional experience.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="text-xs font-bold uppercase tracking-wider text-violet-600">Solutions</p>
                <ul className="mt-5 space-y-3 text-sm text-gray-600">
                  {maxtronProducts.slice(0, 4).map((p) => (
                    <li key={p.title}>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-violet-700"
                      >
                        {p.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
              <StaggerItem>
                <p className="text-xs font-bold uppercase tracking-wider text-violet-600">More</p>
                <ul className="mt-5 space-y-3 text-sm text-gray-600">
                  {maxtronProducts.slice(4).map((p) => (
                    <li key={p.title}>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-violet-700"
                      >
                        {p.title}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="https://www.maxtronize.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-violet-700"
                    >
                      Maxtronize RWA
                    </a>
                  </li>
                </ul>
              </StaggerItem>
              <StaggerItem>
                <p className="text-xs font-bold uppercase tracking-wider text-violet-600">Contact</p>
                <a
                  href="mailto:business@maxtron.ai"
                  className="mt-3 block text-sm text-gray-600 hover:text-violet-700"
                >
                  business@maxtron.ai
                </a>
              </StaggerItem>
            </StaggerReveal>
            <Reveal delay={0.1}>
            <p className="mt-14 border-t border-violet-100 pt-8 text-center text-xs text-gray-500 sm:text-left">
              © {new Date().getFullYear()} Maxtron. All rights reserved.
            </p>
            </Reveal>
          </div>
        </footer>
      </main>
    </motion.div>
  );
}
