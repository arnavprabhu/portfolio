const capabilities = [
  { title: "RAG Systems", proof: "Axton" },
  { title: "Multi-Agent Orchestration", proof: "pi-swarm" },
  { title: "Agentic Workflows", proof: "Doxa" },
  { title: "Production Delivery", proof: "Next.js + Supabase + Gemini" },
];

export default function AppliedAI() {
  return (
    <section id="applied-ai" className="section">
      <h2 className="label m-0 mb-10">Applied AI</h2>
      <ol
        data-reveal
        className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-x-6 gap-y-8 p-0"
      >
        {capabilities.map((capability, i) => (
          <li key={capability.title} className="border-t border-rule pt-4">
            <div
              className="display text-[clamp(88px,9vw,120px)] leading-[.9] text-acc"
              aria-hidden
            >
              {i + 1}
            </div>
            <div className="mt-4 text-[22px] font-bold">{capability.title}</div>
            <div className="mt-1.5 text-base text-mute">{capability.proof}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}
