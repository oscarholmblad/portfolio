import { useLanguage } from "../i18n/languageContext";

// LIA-perioderna som visas under knapparna. Ändra datumen här vid behov.
const liaPeriods = [
  { number: 1, start: "2027-01-04", end: "2027-03-12", weeks: 10 },
  { number: 2, start: "2027-04-26", end: "2027-10-01", weeks: 16 },
];

// Gör om "2027-01-04" till "4 januari" eller "4 January". timeZone: "UTC" gör
// att datumet inte kan hamna på fel dag beroende på besökarens tidszon.
const formatDate = (date: string, locale: string, withYear = false) =>
  new Date(date).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: withYear ? "numeric" : undefined,
    timeZone: "UTC",
  });

const Hero = () => {
  const { t } = useLanguage();
  const locale = t.hero.dateLocale;

  return (
    <section id="hem" className="scroll-mt-16">
      <div className="mx-auto grid max-w-page items-center gap-12 px-4 pt-16 pb-20 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:pt-24 md:pb-28 lg:px-12 xl:grid-cols-[1fr_30rem]">
        <div>
          <p className="mb-6 font-medium text-gold">{t.hero.kicker}</p>

          <h1 className="font-display text-5xl leading-[1.02] font-light tracking-tight sm:text-6xl lg:text-7xl">
            {t.hero.heading}
          </h1>

          <p className="mt-8 max-w-xl text-lg text-lichen">{t.hero.intro}</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projekt"
              className="rounded-md bg-gold px-6 py-3.5 text-center font-semibold text-forest transition-colors hover:bg-gold-light"
            >
              {t.hero.seeProjects}
            </a>
            <a
              href="/cv/oscar-holmblad-cv.pdf"
              download
              className="rounded-md border border-birch/40 px-6 py-3.5 text-center font-semibold transition-colors hover:border-gold hover:text-gold"
            >
              {t.hero.downloadCv}
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-birch/15 pt-6">
            {liaPeriods.map((period) => (
              <div key={period.number} className="contents">
                <dt className="font-medium text-gold">
                  {t.hero.liaName(period.number)}
                </dt>
                <dd className="text-lichen">
                  <time dateTime={period.start}>
                    {formatDate(period.start, locale)}
                  </time>
                  {" – "}
                  <time dateTime={period.end}>
                    {formatDate(period.end, locale, true)}
                  </time>
                  ,{" "}
                  <span className="whitespace-nowrap">
                    {t.hero.weeks(period.weeks)}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <img
          src="/images/oscar-skog.jpg"
          alt={t.hero.photoAlt}
          width={960}
          height={1200}
          fetchPriority="high"
          className="aspect-[4/5] w-full rounded-sm object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
