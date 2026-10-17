import { SITE_UPDATED, SITE_URL, capabilities, person, projects, skillGroups } from "@/lib/content";

// Markdown for agents, following https://llmstxt.org. Served at /llms.txt and at /
// for requests that ask for text/markdown.
export function llmsText() {
  const projectLines = projects.map((p) => {
    const link = p.href ? ` ${p.href}` : " (private repository; results shown on the site)";
    const detail = p.detail ? ` ${p.detail}` : "";
    return `- **${p.name}** (${p.skill}): ${p.desc}${detail} Stack: ${p.stack.join(", ")}.${link}`;
  });

  return `# ${person.name}

> ${person.summary}

${person.about} ${person.status} Based in ${person.location}.

Website: ${SITE_URL}
Last updated: ${SITE_UPDATED}

## Projects

${projectLines.join("\n")}

## Applied AI

${capabilities.map((c) => `- ${c.title}: ${c.proof}`).join("\n")}

## Skills

${skillGroups.map((g) => `- ${g.title}: ${g.items.join(", ")}`).join("\n")}

## Education

- ${person.school}: ${person.degrees}

## Contact

${person.links.map((l) => `- ${l.label}: ${l.href}`).join("\n")}

## Optional

- [Privacy policy](${SITE_URL}/privacy): what visitor analytics this site collects
`;
}
