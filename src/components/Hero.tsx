import { HAIRLINE_BORDER } from "@/lib/constants";

const GRID_COLS = Array.from({ length: 11 });

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="node node-bl relative flex min-h-screen flex-col justify-center border-b-hairline pt-32 pb-16"
      style={{ borderColor: HAIRLINE_BORDER }}
    >
      <canvas id="particle-canvas" />
      <div className="pointer-events-none absolute inset-0 z-[-1] grid grid-cols-4 md:grid-cols-12">
        {GRID_COLS.map((_, i) => (
          <div
            key={i}
            className={`border-r-hairline col-span-1 h-full ${i > 0 && i < 10 ? "hidden md:block" : ""}`}
            style={{ borderColor: HAIRLINE_BORDER }}
          />
        ))}
      </div>
      <div className="relative z-10 grid grid-cols-4 gap-gutter md:grid-cols-12">
        <div className="col-span-4 md:col-span-10 md:col-start-2">
          <div className="scroll-reveal mb-12 flex items-center gap-4">
            <div className="h-2 w-2 animate-pulse bg-mint-green" />
            <span className="accent-chip px-3 py-1 font-meta-technical text-meta-technical">
              OPEN TO ROLES
            </span>
          </div>
          <h1
            className="reveal-text mb-8 font-display-hero-mobile text-display-hero-mobile text-on-surface md:font-display-hero md:text-display-hero"
            id="hero-title"
          >
            <span>Arnav</span> <span>Prabhu</span>
          </h1>
          <div className="node node-tr relative my-8 h-px w-full bg-outline-variant/30">
            <div className="draw-line h-full w-full bg-mint-green" />
          </div>
          <div className="scroll-reveal mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 font-headline-md text-headline-md text-on-surface">
                Finance &amp; AI.
              </h2>
            </div>
            <div>
              <p className="max-w-lg font-body-lg text-body-lg text-on-surface-variant">
                Finance and AI. Strategy, risk, and building with models. (And a
                massive soccer enthusiast.)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-reveal absolute right-0 bottom-8 flex origin-bottom-right rotate-90 items-center gap-2 font-meta-technical text-meta-technical text-on-surface-variant opacity-70">
        SCROLL{" "}
        <span className="material-symbols-outlined -rotate-90 text-[16px]">
          south
        </span>
      </div>
    </section>
  );
}
