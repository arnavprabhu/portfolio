"use client";

import { useEffect, useState } from "react";
import {
  getAppliedTheme,
  persistTheme,
  type Theme,
} from "@/lib/theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(getAppliedTheme());
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    persistTheme(next);
    setTheme(next);
  };

  const label =
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggle}
      className="theme-toggle flex h-12 w-12 shrink-0 items-center justify-center border border-hairline bg-transparent text-on-surface transition-[color,border-color] duration-300 hover:border-mint-green hover:text-mint-green focus:outline-none"
      aria-label={mounted ? label : "Toggle color theme"}
      aria-pressed={theme === "light"}
      title={mounted ? label : undefined}
    >
      <span className="material-symbols-outlined text-[20px]" aria-hidden>
        {mounted ? (theme === "dark" ? "light_mode" : "dark_mode") : "contrast"}
      </span>
      <span className="sr-only">{label}</span>
    </button>
  );
}
