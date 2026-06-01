"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SectionBadge } from "@/components/ui/section-badge";
import { theme } from "@/lib/theme";

const screens = [
  {
    id: "command-center",
    title: "Command Center Dashboard",
    description: "Unified overview of all running audits, cost optimizations, and crash metrics in real time.",
    image: "/dashboard_mockup.png",
    tags: ["Real-time Status", "Aggregated Metrics", "Interactive Grid"],
  },
  {
    id: "web3-audit",
    title: "Web3 Smart Security Audit",
    description: "Detailed vulnerability scanning, gas optimizations, and AST code layout visualizer.",
    image: "/web3_audit_mockup.png",
    tags: ["Solidity Scan", "Gas Profiler", "Vulnerability Logs"],
  },
];

export function PlatformShowcase() {
  const reduce = useReducedMotion();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative overflow-hidden border-t border-violet-100 bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <SectionBadge>Platform Showcase</SectionBadge>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Take a look inside our{" "}
            <span className="hc-gradient-text">White-Label Platforms</span>
          </h2>
          <p className="mx-auto mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
            Curated enterprise interfaces built for speed, security, compliance, and intuitive operations.
          </p>

          {/* Tab Switcher */}
          <div className="mt-10 flex justify-center gap-3">
            {screens.map((screen, idx) => (
              <button
                key={screen.id}
                onClick={() => setActiveTab(idx)}
                className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === idx
                  ? "text-white shadow-[0_4px_16px_rgba(109,40,217,0.3)]"
                  : "text-gray-600 hover:text-violet-700 bg-violet-50/50 hover:bg-violet-50"
                  }`}
                style={
                  activeTab === idx
                    ? { background: `linear-gradient(135deg, ${theme.purple}, ${theme.purpleDark})` }
                    : undefined
                }
              >
                {screen.title}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display Panel */}
        <div className="relative mx-auto max-w-5xl rounded-3xl border border-violet-100/80 bg-violet-50/20 p-4 sm:p-6 shadow-[var(--hc-shadow-lg)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={reduce ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid gap-8 lg:grid-cols-12 lg:items-center"
            >

              <div className="lg:col-span-4 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  {screens[activeTab].title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
                  {screens[activeTab].description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {screens[activeTab].tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white border border-violet-100 px-3 py-1 text-[11px] font-semibold text-violet-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 border-t border-violet-100 pt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-violet-700 hover:text-violet-900 transition-colors group"
                  >
                    Request a live platform demo
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>

              {/* Mockup Frame Side */}
              <div className="lg:col-span-8">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-violet-100 bg-[#0f0c24] aspect-16/10">
                  {/* Window Controls */}
                  <div className="absolute top-0 inset-x-0 h-9 bg-black/35 backdrop-blur-md border-b border-white/10 px-4 flex items-center gap-1.5 z-10">
                    <div className="h-2 w-2 rounded-full bg-[#ef4444]" />
                    <div className="h-2 w-2 rounded-full bg-[#eab308]" />
                    <div className="h-2 w-2 rounded-full bg-[#22c55e]" />
                    <div className="mx-auto bg-white/5 rounded-md px-4 py-0.5 text-[8px] font-mono text-white/50 tracking-wider">
                      maxtron.ai/platform
                    </div>
                  </div>
                  <img
                    src={screens[activeTab].image}
                    alt={screens[activeTab].title}
                    className="w-full h-full object-cover object-top pt-9 transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
