import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";
import { HAIRLINE_BORDER } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <SiteEffects />
      <Header />
      <main
        className="relative z-10 mx-auto max-w-[1920px] border-l border-r border-hairline px-margin-mobile md:px-margin-desktop"
        style={{
          borderLeftColor: HAIRLINE_BORDER,
          borderRightColor: HAIRLINE_BORDER,
        }}
      >
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
