import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <nav className="gutter flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-5 text-sm font-semibold tracking-[.02em] uppercase">
      <Link href="/">Arnav Prabhu</Link>
      <div className="flex flex-wrap gap-x-8 gap-y-3 text-mute">
        <span>Finance / Analytics &amp; AI</span>
        <span>UT Dallas</span>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/#work">Work</Link>
        <a href="#contact">Contact</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
