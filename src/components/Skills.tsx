const groups = [
  {
    title: "AI",
    items: ["Machine learning", "Neural networks", "RAG architectures", "NLP"],
  },
  {
    title: "Finance",
    items: [
      "Financial modeling",
      "Risk management",
      "Quantitative analysis",
      "Corporate finance",
      "Derivatives",
      "Portfolio management",
    ],
  },
  {
    title: "Also",
    items: ["Financial analysis", "Compliance", "Applying AI in finance"],
    muted: true,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section flex flex-wrap gap-6">
      <h2 className="label m-0 flex-[1_1_200px]">Skills</h2>
      <div className="grid flex-[3_1_560px] grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-x-6 gap-y-8">
        {groups.map((group) => (
          <div key={group.title} data-reveal className={group.muted ? "text-mute" : undefined}>
            <h3 className="m-0 mb-5 text-[clamp(44px,4.5vw,56px)] leading-none font-extrabold uppercase [font-stretch:80%]">
              {group.title}
            </h3>
            <ul className="m-0 list-none p-0 text-lg leading-[1.7]">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
