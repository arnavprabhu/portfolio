import { SITE_URL, person, projects, type Project } from "@/lib/content";

const PERSON_ID = `${SITE_URL}/#person`;

function projectNode(p: Project) {
  const base = {
    name: p.name,
    description: [p.desc, p.detail].filter(Boolean).join(" "),
    author: { "@id": PERSON_ID },
    keywords: [p.skill, ...p.stack].join(", "),
  };
  if (!p.href) return { "@type": "CreativeWork", ...base };
  if (p.href.startsWith("https://github.com/")) {
    return { "@type": "SoftwareSourceCode", ...base, url: p.href, codeRepository: p.href };
  }
  return { "@type": "WebApplication", ...base, url: p.href, applicationCategory: "DeveloperApplication" };
}

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: person.name,
      jobTitle: person.jobTitle,
      description: person.summary,
      url: SITE_URL,
      image: `${SITE_URL}/icon.png`,
      sameAs: person.links.map((l) => l.href),
      address: { "@type": "PostalAddress", addressLocality: "Dallas", addressRegion: "TX", addressCountry: "US" },
      alumniOf: { "@type": "CollegeOrUniversity", name: person.school },
      knowsAbout: [
        "Retrieval-Augmented Generation (RAG)",
        "Multi-Agent Systems",
        "Agentic Workflows",
        "LLM Evaluation and Benchmarking",
        "Local LLM Inference on Apple Silicon",
        "LLM Applications",
        "Machine Learning",
        "Financial Modeling",
        "Quantitative Analysis",
        "Risk Management",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: person.name,
      description: person.tagline,
      publisher: { "@id": PERSON_ID },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: `${person.name} — Finance & AI`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": PERSON_ID },
      hasPart: {
        "@type": "ItemList",
        name: "Projects",
        itemListElement: projects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: projectNode(p),
        })),
      },
    },
  ],
};
