import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AppliedAI from "@/components/AppliedAI";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";

export default function Home() {
  return (
    <>
      <SiteEffects />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AppliedAI />
      </main>
      <Footer />
    </>
  );
}
