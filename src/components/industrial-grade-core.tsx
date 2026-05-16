"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Reveal } from "@/components/motion/reveal";
import { SectionBadge } from "@/components/ui/section-badge";
import { maxtronProducts } from "@/data/maxtron-products";
import { springSoft } from "@/lib/motion";
import { theme } from "@/lib/theme";

export function IndustrialGradeCore() {
  const reduce = useReducedMotion();

  return (
    <section
      id="solutions"
      className="hc-dot-grid relative overflow-hidden border-t border-violet-100/80 px-5 py-24 sm:px-8 sm:py-32 lg:px-10"
      style={{
        background:
          "linear-gradient(180deg, #FAF5FF 0%, #F3E8FF 40%, #EDE9FE 70%, #F5F3FF 100%)",
      }}
    >
      <motion.div
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl"
        animate={reduce ? undefined : { opacity: [0.25, 0.45, 0.25], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rounded-full bg-purple-300/25 blur-3xl"
        animate={reduce ? undefined : { opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <motion.div className="mx-auto max-w-3xl text-center">
            <SectionBadge>Enterprise Suite</SectionBadge>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Industrial Grade{" "}
              <span className="hc-gradient-text">Core</span>
            </h2>
            <p className="mx-auto mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              Six flagship Maxtron products: audit, AI ops, mobile reliability, trading automation, and RWA
              tokenization built for scale, compliance, and revenue.
            </p>
          </motion.div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {maxtronProducts.map((product, i) => (
            <Reveal key={product.title} delay={Math.min(i * 0.08, 0.4)}>
              <motion.article
                className="hc-card group relative flex h-full flex-col overflow-hidden p-7 sm:p-8"
                whileHover={reduce ? undefined : { y: -10, transition: springSoft }}
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-50 transition-opacity duration-300 group-hover:opacity-80"
                  style={{ background: `radial-gradient(circle, ${theme.purpleLight} 0%, transparent 70%)` }}
                  aria-hidden
                />

                <div className="relative flex items-start justify-between gap-3">
                  <motion.div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_8px_20px_-6px_rgba(109,40,217,0.45)] ring-4 ring-violet-100/80"
                    style={{
                      background: `linear-gradient(145deg, ${theme.purple} 0%, ${theme.purpleDark} 100%)`,
                    }}
                    whileHover={reduce ? undefined : { rotate: [0, -4, 4, 0], scale: 1.06 }}
                    transition={{ duration: 0.45 }}
                  >
                    {product.icon}
                  </motion.div>
                  <span
                    className="rounded-lg bg-violet-50 px-2.5 py-1 font-mono text-[10px] font-bold tabular-nums text-violet-600"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative mt-6 text-xl font-bold tracking-tight text-gray-900">{product.title}</h3>

                <p className="relative mt-3 flex-1 text-[15px] leading-relaxed text-gray-600">
                  {product.description}
                </p>

                <ul className="relative mt-5 flex flex-wrap gap-2">
                  {product.highlights.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-violet-100 bg-violet-50/80 px-3 py-1 text-[11px] font-medium text-violet-800 sm:text-xs"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-shine relative mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-xl py-3 text-sm font-semibold text-white sm:w-auto sm:px-7"
                  style={{
                    background: `linear-gradient(135deg, ${theme.purple} 0%, ${theme.purpleDark} 100%)`,
                    boxShadow: "0 6px 20px -6px rgba(109,40,217,0.5)",
                  }}
                  whileHover={reduce ? undefined : { scale: 1.02 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                >
                  {product.cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.a>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-violet-100/80 bg-white/60 px-6 py-5 text-center backdrop-blur-sm sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-violet-800">Live demos available.</span> Explore each product
              or book a strategy session with Maxtron.
            </p>
            <a
              href="#contact"
              className="shrink-0 text-sm font-semibold text-violet-700 underline-offset-4 hover:underline"
            >
              Contact sales →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
