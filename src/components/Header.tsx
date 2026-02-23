"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "https://github.com/arnavprabhu/", icon: Github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/arnavprabhu/",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-5 sm:px-8 md:px-12 lg:px-16"
    >
      <Link
        href="/"
        className="text-sm font-medium text-[#F5F5F7] tracking-tight transition-opacity duration-200 hover:opacity-70"
      >
        Arnav Prabhu
      </Link>
      <nav className="flex items-center gap-6" aria-label="Social links">
        {navLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-[#F5F5F7] transition-opacity duration-200 hover:opacity-70"
          >
            <Icon size={20} strokeWidth={1.5} />
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
