"use client";

import { getAppliedTheme, persistTheme } from "@/lib/theme";

export default function ThemeToggle() {
  const toggle = () => {
    persistTheme(getAppliedTheme() === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="cursor-pointer border-0 bg-ink px-3 py-2 text-bg uppercase [font:inherit]"
    >
      <span className="theme-label-dark">☾ Dark</span>
      <span className="theme-label-light">☀ Light</span>
    </button>
  );
}
