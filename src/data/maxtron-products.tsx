import type { ReactNode } from "react";

export type MaxtronProduct = {
  title: string;
  description: string;
  highlights: string[];
  href: string;
  cta: string;
  icon: ReactNode;
};

export const maxtronProducts: MaxtronProduct[] = [
  {
    title: "Smart Contracts Audit",
    description:
      "Enterprise-grade smart contract reviews with executive-ready reporting, on-chain verification, risk scoring, and compliance-ready deliverables before you ship.",
    highlights: ["On-chain verification", "Risk scoring", "Audit reports"],
    href: "https://www.audit.maxtron.ai/",
    cta: "Visit Smart Audit",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M12 3l8 4v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "AI Audit",
    description:
      "The definitive enterprise benchmark for AI readiness: audit infrastructure, culture, compute, talent density, and compliance with board-ready insights in minutes.",
    highlights: ["Audit v4.2", "500+ enterprises", "15-min reports"],
    href: "https://ai-audit-phi.vercel.app/",
    cta: "Begin AI Audit",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "AI Infra Cost Optimizer",
    description:
      "Stop burning money on AI infrastructure. Track LLM, GPU, cloud, and inference spend in real time and cut waste by up to 43% with smart routing and prompt optimization.",
    highlights: ["Multi-cloud", "Token analytics", "GPU monitoring"],
    href: "https://ai-infra-vert.vercel.app/",
    cta: "Start Free Audit",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M4 14l4-4 4 4 8-8" />
        <path d="M4 20h16" />
      </svg>
    ),
  },
  {
    title: "AI App Crash Investigator",
    description:
      "AI-powered mobile crash intelligence for iOS and Android with root-cause analysis, session replay, release health, and real-time alerts before users churn.",
    highlights: ["React Native · Flutter", "Session replay", "70% faster debug"],
    href: "https://app-investigator.vercel.app/",
    cta: "Open Crash Investigator",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M12 3v4M5.6 5.6l2.8 2.8M3 12h4M5.6 18.4l2.8-2.8M12 21v-4M18.4 18.4l-2.8-2.8M21 12h-4" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "AI Crypto Trading Bot Platform",
    description:
      "End-to-end automated trading with AI market intelligence, multi-exchange execution, risk management, copy trading, and institutional reporting for funds and communities.",
    highlights: ["Multi-exchange", "Copy trading", "White-label"],
    href: "https://trading-bot-nu-self.vercel.app/",
    cta: "Explore Trading Bot",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M4 19V5M4 19h16M8 15V9M12 15V7M16 15v-4" />
      </svg>
    ),
  },
  {
    title: "Token Launchpad + Community Engine",
    description:
      "Compliant RWA tokenization and $MAXT presale infrastructure for programmable ownership of gold, real estate, equities, and infrastructure across USA, UK, Dubai, and India.",
    highlights: ["$MAXT presale", "RWA tokenization", "Community growth"],
    href: "https://presale.maxtronize.com/",
    cta: "Join Presale",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];
