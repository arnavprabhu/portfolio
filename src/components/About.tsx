"use client";

import { motion } from "framer-motion";

const bio =
  "UT Dallas undergraduate pursuing dual B.S. degrees in Finance and Business Analytics & AI. Experienced in financial analysis, risk management, compliance, and data-driven strategy. Proficient in SQL, Python, Tableau, Power BI, and Excel. Currently seeking finance, management, or analytics roles to drive strategic, risk-aware, and operational performance.";

export default function About() {
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
          Background
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="mt-8 text-base leading-relaxed text-[#F5F5F7] sm:text-lg"
        >
          {bio}
        </motion.p>
      </div>
    </section>
  );
}
