import Link from "next/link";

const links = [
  { href: "https://www.linkedin.com/in/arnavprabhu/", label: "LinkedIn" },
  { href: "https://github.com/arnavprabhu", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="gutter border-t-2 border-rule pt-[clamp(40px,6vw,48px)] pb-8"
    >
      <div className="label mb-4">Contact</div>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="display flex items-baseline justify-between gap-4 border-b border-rule text-[clamp(56px,10.5vw,132px)] leading-[1.05]"
        >
          <span>{link.label}</span>
          <span className="text-acc" aria-hidden>
            ↗
          </span>
        </a>
      ))}
      <div className="mt-12 flex flex-wrap justify-between gap-x-6 gap-y-2 text-[13px] font-semibold text-mute uppercase">
        <span>© 2026 Arnav Prabhu</span>
        <span>Dallas, TX</span>
        <Link href="/privacy">Privacy</Link>
        <span>Open to roles</span>
      </div>
    </footer>
  );
}
