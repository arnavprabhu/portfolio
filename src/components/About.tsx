import { person } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="section flex flex-wrap gap-x-6 gap-y-4">
      <h2 className="label m-0 flex-[1_1_200px]">About</h2>
      <p
        data-reveal
        className="m-0 flex-[3_1_560px] text-[clamp(24px,3.2vw,42px)] leading-[1.15] font-medium tracking-[-.015em] text-pretty"
      >
        {person.about}
      </p>
    </section>
  );
}
