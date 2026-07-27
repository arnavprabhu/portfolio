import { HAIRLINE_BORDER } from "@/lib/constants";

const projects = [
  {
    index: "01",
    title: "Axton",
    description:
      "AI-powered SEC filing intelligence platform with a RAG pipeline for 10-K, 10-Q, and 8-K filings. Built with Next.js, Supabase, and Gemini AI.",
    tags: [
      { label: "AI / ML", primary: true },
      { label: "RAG PIPELINE", primary: false },
      { label: "FINANCE", primary: false },
    ],
    href: "https://axton.arnavprabhu.com",
    linkLabel: "VIEW PLATFORM",
    icon: "arrow_outward",
  },
  {
    index: "02",
    title: "pi-swarm",
    description:
      "Multi-agent orchestration framework built on pi.dev. Organizes AI agents into a 3-tier company hierarchy with 21 specialist roles. Model-agnostic, real-time cost tracking, and a live terminal UI.",
    tags: [
      { label: "SYSTEM ARCHITECTURE", primary: true },
      { label: "ORCHESTRATION", primary: false },
      { label: "PYTHON", primary: false },
    ],
    href: "https://github.com/arnavprabhu/pi-swarm",
    linkLabel: "VIEW REPOSITORY",
    icon: "code",
  },
  {
    index: "03",
    title: "Doxa",
    description:
      "AI-powered equity research pipeline that coordinates six specialized agents across market data, valuation, SEC filings, sentiment, writing, and editorial review to produce high-signal reports.",
    tags: [
      { label: "AI / ML", primary: true },
      { label: "EQUITY RESEARCH", primary: false },
      { label: "PYTHON", primary: false },
    ],
    href: "https://github.com/UnitedDiagram/Doxa",
    linkLabel: "VIEW REPOSITORY",
    icon: "code",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="node node-br relative border-b-hairline py-section-gap"
      style={{ borderColor: HAIRLINE_BORDER }}
    >
      <div className="draw-line absolute top-0 left-0 h-px w-full bg-outline-variant/30" />
      <div className="grid grid-cols-4 gap-gutter md:grid-cols-12">
        <div
          className="node node-tr col-span-4 border-b-hairline pb-8 md:col-span-3 md:border-r-hairline md:border-b-0 md:pr-8"
          style={{ borderColor: HAIRLINE_BORDER }}
        >
          <h2 className="scroll-reveal font-headline-md text-headline-md text-on-surface">
            Selected Work
          </h2>
          <p className="scroll-reveal mt-4 font-meta-technical text-meta-technical text-mint-green">
            [ 03_PROJECTS ]
          </p>
        </div>
        <div className="col-span-4 flex flex-col gap-16 md:col-span-9 md:pl-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card spotlight-card scroll-reveal group relative border border-hairline bg-surface-dark p-8 md:p-12"
              style={{ borderColor: HAIRLINE_BORDER }}
            >
              <div className="absolute top-0 right-0 p-4">
                <span className="font-meta-technical text-meta-technical text-on-surface-variant transition-colors group-hover:text-mint-green">
                  [ {project.index} ]
                </span>
              </div>
              <h3 className="mb-6 font-headline-lg text-headline-lg text-on-surface transition-colors group-hover:text-mint-green">
                {project.title}
              </h3>
              <p className="relative z-10 mb-8 max-w-2xl font-body-md text-body-md text-on-surface-variant">
                {project.description}
              </p>
              <div className="relative z-10 mb-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`project-tag px-3 py-1 font-meta-technical text-meta-technical ${
                      tag.primary
                        ? "bg-mint-green-fill text-on-mint"
                        : "border border-hairline-muted text-on-surface"
                    }`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <a
                className="link-fill-hover relative z-10 inline-flex items-center gap-2 font-label-caps text-label-caps text-on-surface"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.linkLabel}{" "}
                <span className="material-symbols-outlined text-[16px]">
                  {project.icon}
                </span>
              </a>
              <div className="absolute top-0 left-0 h-2 w-2 bg-mint-green opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute right-0 bottom-0 h-2 w-2 bg-mint-green opacity-0 transition-opacity group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
