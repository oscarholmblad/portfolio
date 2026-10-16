const Hero = () => {
  return (
    <section id="hem" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <p className="mb-4 font-medium text-accent">
          Frontendutvecklare under utbildning
        </p>

        <h1 className="max-w-3xl font-display text-4xl leading-tight font-bold sm:text-5xl md:text-6xl">
          Hej, jag heter Oscar och jag bygger för webben.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Jag studerar frontendutveckling på Medieinstitutet och söker LIA. Här
          hittar du mina projekt och hur du når mig.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projekt"
            className="rounded-full bg-accent px-6 py-3 text-center font-semibold text-zinc-950 transition-colors hover:bg-accent-strong"
          >
            Se mina projekt
          </a>
          <a
            href="#kontakt"
            className="rounded-full border border-zinc-700 px-6 py-3 text-center font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            Kontakta mig
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
