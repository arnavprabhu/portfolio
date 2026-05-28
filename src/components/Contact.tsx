import { HAIRLINE_BORDER } from "@/lib/constants";

const links = [
  {
    href: "https://www.linkedin.com/in/arnavprabhu/",
    label: "LINKEDIN",
    icon: "arrow_outward",
    stagger: "stagger-1",
  },
  {
    href: "https://github.com/arnavprabhu/",
    label: "GITHUB",
    icon: "code",
    stagger: "stagger-2",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
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
            Let&apos;s Talk
          </h2>
          <p className="scroll-reveal mt-4 font-meta-technical text-meta-technical text-mint-green">
            [ 02_CONTACT ]
          </p>
        </div>
        <div className="col-span-4 flex flex-col gap-8 md:col-span-9 md:pl-8">
          <p className="scroll-reveal max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            Open to finance and AI opportunities.
          </p>
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <div
                key={link.label}
                className={`scroll-reveal ${link.stagger}`}
              >
                <a
                  className="contact-link font-label-caps text-label-caps text-on-surface"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                  <span className="material-symbols-outlined text-[16px]">
                    {link.icon}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
