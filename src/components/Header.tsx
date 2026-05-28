import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <nav className="fixed top-0 z-50 flex h-20 w-full items-center justify-between border-b border-hairline bg-[var(--theme-nav-scrim)] px-margin-mobile backdrop-blur-[30px] md:px-margin-desktop">
      <div className="flex items-center">
        <a
          className="font-display-hero-mobile text-[1.5rem] leading-none tracking-[-0.02em] text-on-surface focus:outline-none md:font-display-hero md:text-[1.75rem] md:tracking-[-0.04em]"
          href="/"
        >
          <span>Arnav</span> <span>Prabhu</span>
        </a>
      </div>
      <div className="hidden h-full items-center gap-8 border-l border-r border-hairline px-8 md:flex">
        <a
          className="nav-link font-meta-technical text-meta-technical text-on-surface-variant hover:text-mint-green"
          href="/#work"
        >
          WORK
        </a>
        <a
          className="nav-link font-meta-technical text-meta-technical text-on-surface-variant hover:text-mint-green"
          href="/#background"
        >
          BACKGROUND
        </a>
        <a
          className="nav-link font-meta-technical text-meta-technical text-on-surface-variant hover:text-mint-green"
          href="/#contact"
        >
          CONTACT
        </a>
      </div>
      <div className="flex items-center gap-3 md:gap-4">
        <ThemeToggle />
        <a
          className="btn-fill-hover flex items-center gap-2 px-4 py-3 font-display-hero-mobile text-[1.5rem] leading-none tracking-[-0.02em] text-on-surface md:px-6 md:font-display-hero md:text-[1.75rem] md:tracking-[-0.04em]"
          href="/#contact"
        >
          Let&apos;s Chat
          <span className="material-symbols-outlined text-[16px]">
            arrow_forward
          </span>
        </a>
      </div>
    </nav>
  );
}
