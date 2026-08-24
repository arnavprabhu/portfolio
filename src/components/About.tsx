import { HAIRLINE_BORDER } from "@/lib/constants";

const skillTagsPrimary = [
  "MACHINE LEARNING",
  "NEURAL NETWORKS",
  "RAG ARCHITECTURES",
  "NATURAL LANGUAGE PROCESSING",
];

const skillTagsSecondary = [
  "FINANCIAL MODELING",
  "RISK MANAGEMENT",
  "QUANTITATIVE ANALYSIS",
  "CORPORATE FINANCE",
  "DERIVATIVES",
  "PORTFOLIO MANAGEMENT",
];

export default function About() {
  return (
    <section
      id="background"
      className="node node-bl relative border-b-hairline py-24 md:py-section-gap"
      style={{ borderColor: HAIRLINE_BORDER }}
    >
      <div className="draw-line absolute top-0 left-0 h-px w-full bg-outline-variant/30" />
      <div className="grid grid-cols-4 gap-gutter md:grid-cols-12">
        <div className="col-span-4 md:col-span-10 md:col-start-2">
          <p className="scroll-reveal mb-8 font-meta-technical text-meta-technical text-mint-green">
            [ 03_BACKGROUND ]
          </p>
          <div className="scroll-reveal mb-16 border-l-4 border-mint-green py-2 pl-8">
            <p className="font-headline-lg text-headline-lg leading-tight text-on-surface">
              &ldquo;Looking for roles where{" "}
              <span className="italic">finance and AI overlap</span>.&rdquo;
            </p>
          </div>
          <div
            className="node node-tr relative grid grid-cols-1 gap-16 border-t-hairline pt-16 md:grid-cols-2"
            style={{ borderColor: HAIRLINE_BORDER }}
          >
            <div className="draw-line absolute top-0 left-0 h-px w-full bg-outline-variant/30" />
            <div className="scroll-reveal">
              <h3 className="mb-6 border-b border-hairline pb-2 font-meta-technical text-meta-technical text-mint-green">
                EDUCATION
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface">
                Arnav Prabhu is a UT Dallas undergraduate pursuing dual B.S.
                degrees in Finance and Business Analytics &amp; AI. He builds
                and ships applied AI systems — RAG pipelines, multi-agent
                frameworks, and LLM applications — with a foundation in
                finance, risk, and quantitative methods.
              </p>
            </div>
            <div className="scroll-reveal">
              <h3 className="mb-6 border-b border-hairline pb-2 font-meta-technical text-meta-technical text-mint-green">
                EXPERTISE &amp; SKILLS
              </h3>
              <p className="mb-6 font-body-md text-body-md text-on-surface-variant">
                Experienced in financial analysis, risk management, compliance,
                and applying AI in finance.
              </p>
              <div className="flex flex-wrap gap-2">
                {skillTagsPrimary.map((tag) => (
                  <span
                    key={tag}
                    className="project-tag accent-chip px-3 py-1 font-meta-technical text-meta-technical"
                  >
                    {tag}
                  </span>
                ))}
                {skillTagsSecondary.map((tag) => (
                  <span
                    key={tag}
                    className="project-tag border border-hairline-muted px-3 py-1 font-meta-technical text-meta-technical text-on-surface"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
