"use client";

import { useEffect } from "react";

export default function SiteEffects() {
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove("reveal-pending");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.05 },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.classList.add("reveal-pending");
      // Enable the transition only after the hidden state has been painted.
      requestAnimationFrame(() => el.classList.add("reveal-ready"));
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
