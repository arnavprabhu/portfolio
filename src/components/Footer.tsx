"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-end justify-between px-5 py-12 sm:px-8 md:px-12 lg:px-16"
    >
      <Image
        src="/aplogo.png"
        alt="AP"
        width={24}
        height={24}
        className="h-5 w-5 shrink-0 opacity-80 sm:h-6 sm:w-6"
      />
      <p className="text-sm text-[#86868B]">
        © {year} Arnav Prabhu. All rights reserved.
      </p>
    </motion.footer>
  );
}
