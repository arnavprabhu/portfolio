"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="px-5 py-12 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-[#86868B]">
          © {year} Arnav Prabhu. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
