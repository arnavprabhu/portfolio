import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-hairline bg-surface-dark px-margin-mobile py-8 md:px-margin-desktop">
      <div className="draw-line absolute top-0 left-0 h-px w-full bg-outline-variant/30" />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-meta-technical text-meta-technical text-on-surface-variant">
          ©2026 ARNAV PRABHU
        </span>
        <div className="flex items-center gap-8">
          <Link
            href="/privacy"
            className="link-fill-hover font-meta-technical text-meta-technical text-on-surface-variant hover:text-mint-green"
          >
            Privacy Policy
          </Link>
          <a
            href="#"
            className="flex items-center gap-2 font-meta-technical text-meta-technical text-on-surface-variant transition-colors hover:text-mint-green"
          >
            BACK TO TOP
            <span className="material-symbols-outlined text-[14px]">north</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
