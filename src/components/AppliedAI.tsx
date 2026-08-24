import { HAIRLINE_BORDER } from "@/lib/constants";

const capabilities = [
  {
    index: "01",
    title: "RAG Systems",
    description:
      "Retrieval-augmented generation over unstructured documents — chunking, embeddings, and grounded answers with citations back to source.",
    proof: "SHIPPED IN: AXTON",
  },
  {
    index: "02",
    title: "Multi-Agent Orchestration",
    description:
      "Designing agent hierarchies with specialist roles, task delegation, and real-time cost tracking across model providers.",
    proof: "SHIPPED IN: PI-SWARM",
  },
  {
    index: "03",
    title: "Agentic Workflows",
    description:
      "Coordinating multiple specialized agents — data, analysis, writing, review — into reliable end-to-end pipelines.",
    proof: "SHIPPED IN: DOXA",
  },
  {
    index: "04",
    title: "Production Delivery",
    description:
      "Taking LLM applications from prototype to deployed product with full-stack tooling, evaluation, and iteration.",
    proof: "NEXT.JS + SUPABASE + GEMINI",
  },
];

export default function AppliedAI() {
  return (
    <section
      id="applied-ai"
      className="node node-br relative border-b-hairline py-24 md:py-section-gap"
      style={{ borderColor: HAIRLINE_BORDER }}
    >
      <div className="draw-line absolute top-0 left-0 h-px w-full bg-outline-variant/30" />
      <div className="grid grid-cols-4 gap-gutter md:grid-cols-12">
        <div
          className="node node-tr col-span-4 border-b-hairline pb-8 md:col-span-3 md:border-r-hairline md:border-b-0 md:pr-8"
          style={{ borderColor: HAIRLINE_BORDER }}
        >
          <h2 className="scroll-reveal font-headline-md text-headline-md text-on-surface">
            Applied AI
          </h2>
          <p className="scroll-reveal mt-4 font-meta-technical text-meta-technical text-mint-green">
            [ 01_APPLIED_AI ]
          </p>
        </div>
        <div className="col-span-4 grid grid-cols-1 gap-6 md:col-span-9 md:grid-cols-2 md:pl-8">
          {capabilities.map((capability, i) => (
            <article
              key={capability.title}
              className={`spotlight-card scroll-reveal stagger-${i + 1} group node node-tr relative flex flex-col border border-hairline bg-surface-dark p-8`}
              style={{ borderColor: HAIRLINE_BORDER }}
            >
              <span className="absolute top-0 right-0 p-4 font-meta-technical text-meta-technical text-on-surface-variant transition-colors group-hover:text-mint-green">
                [ {capability.index} ]
              </span>
              <h3 className="mb-4 max-w-[80%] font-headline-md text-headline-md text-on-surface transition-colors group-hover:text-mint-green">
                {capability.title}
              </h3>
              <p className="relative z-10 mb-8 font-body-md text-body-md text-on-surface-variant">
                {capability.description}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 font-meta-technical text-meta-technical text-mint-green">
                <span className="h-2 w-2 bg-mint-green opacity-0 transition-opacity group-hover:opacity-100" />
                {capability.proof}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
