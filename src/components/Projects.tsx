"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Axton",
    description:
      "AI-powered SEC filing intelligence platform with a RAG pipeline for 10-K, 10-Q, and 8-K filings. Built with Next.js, Supabase, and Gemini AI.",
    url: "https://axton.arnavprabhu.com",
  },
  {
    name: "pi-swarm",
    description:
      "Multi-agent orchestration framework built on pi.dev. Organizes AI agents into a 3-tier company hierarchy with 21 specialist roles. Model-agnostic, real-time cost tracking, and a live terminal UI.",
    url: "https://github.com/arnavprabhu/pi-swarm",
  },
];

export default function Projects() {
  return (
    <section className="px-5 py-24 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-sm font-medium tracking-wide text-[#86868B]"
        >
          Selected Work
        </motion.h2>
        <ul className="mt-12 flex flex-col gap-16">
          {projects.map((project, i) => (
            <motion.li
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              className="group"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-baseline gap-2 transition-opacity duration-200 hover:opacity-70"
              >
                <span className="text-xl font-medium tracking-tight text-[#F5F5F7] sm:text-2xl">
                  {project.name}
                </span>
                <ExternalLink
                  size={18}
                  className="text-[#86868B]"
                  strokeWidth={1.5}
                />
              </a>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-[#86868B]">
                {project.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
