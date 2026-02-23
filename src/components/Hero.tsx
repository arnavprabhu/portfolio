"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center px-5 py-24 text-center sm:px-8 md:px-12 lg:px-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="text-4xl font-semibold tracking-tight text-[#F5F5F7] sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Arnav Prabhu
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="mt-4 text-lg text-[#86868B] sm:text-xl md:text-2xl"
      >
        Finance, Business Analytics & AI.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
        className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-[#86868B] sm:text-lg"
      >
        Bridging finance and artificial intelligence to drive data-informed
        strategy and risk management. (And a massive soccer enthusiast.)
      </motion.p>
    </section>
  );
}
