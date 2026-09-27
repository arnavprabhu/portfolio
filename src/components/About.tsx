export default function About() {
  return (
    <section id="about" className="section flex flex-wrap gap-x-6 gap-y-4">
      <h2 className="label m-0 flex-[1_1_200px]">About</h2>
      <p
        data-reveal
        className="m-0 flex-[3_1_560px] text-[clamp(24px,3.2vw,42px)] leading-[1.15] font-medium tracking-[-.015em] text-pretty"
      >
        An undergraduate at UT Dallas working toward two B.S. degrees, one in
        Finance and one in Business Analytics &amp; AI. I build applied AI
        systems from start to finish, with a background in finance, risk and
        quantitative methods.
      </p>
    </section>
  );
}
