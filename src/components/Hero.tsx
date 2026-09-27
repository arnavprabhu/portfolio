export default function Hero() {
  return (
    <header className="gutter border-t-2 border-rule pt-[clamp(24px,4vw,40px)] pb-[clamp(40px,6vw,64px)]">
      <h1
        data-reveal
        className="display m-0 text-[clamp(84px,22.5vw,300px)] leading-[.8] tracking-[-.03em]"
      >
        Finance
        <br />
        <span className="text-acc">&amp;</span> AI.
      </h1>
      <div
        data-reveal
        className="mt-[clamp(32px,5vw,56px)] flex flex-wrap items-start gap-6"
      >
        <p className="m-0 flex-[2_1_420px] text-[clamp(26px,3vw,38px)] leading-[1.1] font-medium tracking-[-.01em]">
          Strategy, risk, and building with models.
        </p>
        <p className="m-0 flex-[1_1_220px] text-lg leading-[1.4]">
          Looking for roles where finance and AI overlap.
        </p>
        <div className="inline-flex flex-none items-center gap-2.5 bg-acc px-3.5 py-2.5 text-sm font-bold tracking-[.06em] text-on-acc">
          <span className="pulse-dot" aria-hidden />
          OPEN TO ROLES
        </div>
      </div>
    </header>
  );
}
