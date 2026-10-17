"use client";

import Image from "next/image";
import { useState, useSyncExternalStore } from "react";
import { projects } from "@/lib/content";

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
        // Projects without a public link render as plain, focusable rows.
        const Row = project.href ? "a" : "div";
        const linkProps = project.href
          ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
          : { tabIndex: 0 };
        return (
          <Row
            key={project.name}
            {...linkProps}
            onMouseEnter={() => !touch && setHover(i)}
            onFocus={() => setHover(i)}
            onBlur={() => setHover(null)}
            className={`gutter block border-t ${project.href ? "cursor-pointer" : ""} border-rule pt-5 pb-7 transition-[background,color] duration-250 ${
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
            {/* Details stay in the HTML while collapsed, so crawlers and agents read every project. */}
            <div
              className={`grid transition-[grid-template-rows] duration-300 ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
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
                {project.charts && (
                  <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {project.charts.map((chart) => (
                      <div key={chart.light} className="border border-rule">
                        <Image
                          src={chart.light}
                          alt={chart.alt}
                          width={1600}
                          height={1600}
                          sizes="(min-width: 768px) 45vw, 100vw"
                          className="theme-img-light block h-auto w-full"
                        />
                        <Image
                          src={chart.dark}
                          alt={chart.alt}
                          width={1600}
                          height={1600}
                          sizes="(min-width: 768px) 45vw, 100vw"
                          className="theme-img-dark block h-auto w-full"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Row>
        );
      })}
    </section>
  );
}
