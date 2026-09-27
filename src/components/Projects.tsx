"use client";

import { useState, useSyncExternalStore } from "react";

const projects = [
  {
    no: "01",
    name: "Axton",
    skill: "RAG Systems",
    href: "https://axton.arnavprabhu.com",
    desc: "A platform for analyzing SEC filings with AI. It uses a RAG pipeline to answer questions about 10-K, 10-Q and 8-K filings.",
    detail: "Live at axton.arnavprabhu.com",
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
];

const TOUCH_QUERY = "(hover: none)";

function subscribeTouch(onChange: () => void) {
  const mql = window.matchMedia(TOUCH_QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

export default function Projects() {
  const [hover, setHover] = useState<number | null>(null);
  // Touch devices can't hover, so every project stays expanded there.
  const touch = useSyncExternalStore(
    subscribeTouch,
    () => window.matchMedia(TOUCH_QUERY).matches,
    () => false,
  );

  return (
    <section
      id="work"
      className="border-t-2 border-rule"
      onMouseLeave={() => setHover(null)}
    >
      <h2 className="label gutter m-0 py-6">Projects</h2>
      {projects.map((project, i) => {
        const active = hover === i;
        const open = touch || active;
        return (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => !touch && setHover(i)}
            onFocus={() => setHover(i)}
            onBlur={() => setHover(null)}
            className={`gutter block cursor-pointer border-t border-rule pt-5 pb-7 transition-[background,color] duration-250 ${
              active ? "bg-acc text-on-acc" : "bg-transparent text-ink"
            }`}
          >
            <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
              <h3 className="display m-0 text-[clamp(64px,12.5vw,160px)] leading-[.85] tracking-[-.02em]">
                {project.name}
              </h3>
              <div className="label">
                {project.no} — {project.skill}
              </div>
            </div>
            {open && (
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-4">
                <p className="m-0 flex-[2_1_420px] text-xl leading-[1.4] text-pretty">
                  {project.desc}
                </p>
                <p className="m-0 flex-[1_1_220px] text-base leading-[1.45]">
                  {project.detail}
                </p>
                <p className="label m-0 flex-[0_1_200px] leading-[1.6]">
                  {project.stack.join(" / ")}
                </p>
              </div>
            )}
          </a>
        );
      })}
    </section>
  );
}
