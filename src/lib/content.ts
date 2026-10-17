// Single source for the site's content. The page, the JSON-LD and /llms.txt all read from here,
// so agents and people see the same facts.

export const SITE_URL = "https://arnavprabhu.com";
// Bump when the content changes; the sitemap and llms.txt report it.
export const SITE_UPDATED = "2026-10-17";

export const person = {
  name: "Arnav Prabhu",
  jobTitle: "Applied AI Engineer",
  tagline: "Finance and AI. Strategy, risk, and building with models.",
  summary:
    "Applied AI builder and finance student at the University of Texas at Dallas. Builds LLM systems end to end: RAG pipelines, multi-agent orchestration, agentic workflows, model evaluation and local inference, grounded in finance, risk and quantitative methods.",
  about:
    "An undergraduate at UT Dallas working toward two B.S. degrees, one in Finance and one in Business Analytics & AI. I build applied AI systems from start to finish, with a background in finance, risk and quantitative methods.",
  location: "Dallas, TX",
  status: "Open to roles where finance and AI overlap.",
  school: "The University of Texas at Dallas",
  degrees: "Dual B.S., Finance and Business Analytics & AI",
  links: [
    { href: "https://www.linkedin.com/in/arnavprabhu/", label: "LinkedIn" },
    { href: "https://github.com/arnavprabhu", label: "GitHub" },
  ],
};

export type Project = {
  no: string;
  name: string;
  skill: string;
  href?: string;
  desc: string;
  detail: string;
  stack: string[];
  charts?: { light: string; dark: string; alt: string }[];
};

export const projects: Project[] = [
  {
    no: "01",
    name: "Axton",
    skill: "RAG Systems",
    href: "https://axton.arnavprabhu.com",
    desc: "A platform for analyzing SEC filings with AI. It uses a RAG pipeline to answer questions about 10-K, 10-Q and 8-K filings.",
    detail: "Live at axton.arnavprabhu.com.",
    stack: ["Next.js", "Supabase", "Gemini"],
  },
  {
    no: "02",
    name: "pi-swarm",
    skill: "Multi-Agent Orchestration",
    href: "https://github.com/arnavprabhu/pi-swarm",
    desc: "A framework for coordinating many AI agents, built on pi.dev. The agents are organized like a three-level company with 21 specialist roles.",
    detail: "Works with any model, tracks cost in real time, has a live terminal UI.",
    stack: ["Python"],
  },
  {
    no: "03",
    name: "Doxa",
    skill: "Agentic Workflows",
    href: "https://github.com/UnitedDiagram/Doxa",
    desc: "A pipeline that writes equity research reports. Six specialist agents handle market data, valuation, SEC filings, sentiment, writing and editorial review.",
    detail: "",
    stack: ["Python"],
  },
  {
    no: "04",
    name: "Emulsion",
    skill: "Image Processing",
    href: "https://emulsion.arnavprabhu.com",
    desc: "A 35mm film lab in the browser. Drop in phone photos and they come back as film scans, with the grain, halation and soft highlights of real film stock.",
    detail: "Live at emulsion.arnavprabhu.com. Everything develops on your device, so nothing gets uploaded.",
    stack: ["Vite", "TypeScript", "WebGL2"],
  },
  {
    no: "05",
    name: "Splashboard",
    skill: "Local Inference",
    href: "https://github.com/arnavprabhu/splashboard",
    desc: "A macOS menu bar app for Splash, a local LLM engine for Apple silicon. It installs Splash and a model, serves one OpenAI- and Anthropic-compatible endpoint, and shows live tokens per second, memory and cache.",
    detail: "Runs Claude Code, Codex and other coding agents on your local model for a session. Install with brew install --cask arnavprabhu/tap/splashboard.",
    stack: ["Swift", "Python", "FastAPI", "Preact"],
  },
  {
    no: "06",
    name: "ArnavBench",
    skill: "Model Evaluation",
    desc: "A private LLM benchmark of 198 tasks sampled from public benchmarks to match the work I hand to models: repo-level coding, tool calling, secure code, library code, instruction following, code reasoning and finance.",
    detail: "Each task is graded by its benchmark's official metric in a network-off sandbox. 23 runs so far, from frontier APIs to 4-bit Qwen on a laptop.",
    stack: ["Python"],
    charts: [
      {
        light: "/arnavbench/pareto-cost-light.webp",
        dark: "/arnavbench/pareto-cost-dark.webp",
        alt: "ArnavBench score vs cost to run for 23 model runs, with the Pareto frontier highlighted",
      },
      {
        light: "/arnavbench/pareto-tokens-light.webp",
        dark: "/arnavbench/pareto-tokens-dark.webp",
        alt: "ArnavBench score vs output tokens used for 23 model runs, with the Pareto frontier highlighted",
      },
    ],
  },
];

export const capabilities = [
  { title: "RAG Systems", proof: "Axton" },
  { title: "Multi-Agent Orchestration", proof: "pi-swarm" },
  { title: "Agentic Workflows", proof: "Doxa" },
  { title: "Model Evaluation", proof: "ArnavBench" },
  { title: "Local Inference", proof: "Splashboard" },
  { title: "Production Delivery", proof: "Next.js + Supabase + Gemini" },
];

export const skillGroups = [
  {
    title: "AI",
    items: ["Machine learning", "Neural networks", "RAG architectures", "NLP"],
  },
  {
    title: "Finance",
    items: [
      "Financial modeling",
      "Risk management",
      "Quantitative analysis",
      "Corporate finance",
      "Derivatives",
      "Portfolio management",
    ],
  },
  {
    title: "Also",
    items: ["Financial analysis", "Compliance", "Applying AI in finance"],
    muted: true,
  },
];
