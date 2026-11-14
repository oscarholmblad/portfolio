const Hero = () => {
  return (
    <section id="hem" className="scroll-mt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-16 pb-20 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:pt-24 md:pb-28">
        <div>
          <p className="mb-6 font-medium text-gold">
            Frontendutvecklare under utbildning i Karlstad
          </p>

          <h1 className="font-display text-5xl leading-[1.02] font-light tracking-tight sm:text-6xl lg:text-7xl">
            Hej, jag heter Oscar och jag bygger för webben.
          </h1>

          <p className="mt-8 max-w-xl text-lg text-lichen">
            Jag studerar frontendutveckling på Medieinstitutet och söker LIA.
            Här hittar du mina projekt och hur du når mig.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projekt"
              className="rounded-md bg-gold px-6 py-3.5 text-center font-semibold text-forest transition-colors hover:bg-gold-light"
            >
              Se mina projekt
            </a>
            <a
              href="/cv/oscar-holmblad-cv.pdf"
              download
              className="rounded-md border border-birch/40 px-6 py-3.5 text-center font-semibold transition-colors hover:border-gold hover:text-gold"
            >
              Ladda ner CV
            </a>
          </div>
        </div>

        <img
          src="/images/oscar-skog.jpg"
          alt="Oscar Holmblad i en solig tallskog"
          width={960}
          height={1200}
          className="aspect-[4/5] w-full rounded-sm object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
