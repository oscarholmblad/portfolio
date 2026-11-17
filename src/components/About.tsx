import { education, experience } from "../data/cv";
import { useLanguage } from "../i18n/languageContext";
import type { CvItem } from "../types";
import Section from "./Section";

const skillGroups = [
  {
    title: { sv: "Frontend", en: "Frontend" },
    skills: [
      "HTML",
      "CSS",
      "SCSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    title: { sv: "Backend", en: "Backend" },
    skills: ["Node.js", "Express", "MongoDB", "MySQL", "REST API"],
  },
  {
    title: { sv: "Verktyg", en: "Tools" },
    skills: ["Git", "GitHub", "Vite", "Figma", "Vercel", "Netlify"],
  },
];

type CvListProps = {
  title: string;
  items: CvItem[];
};

// En lista med år till vänster, används för både utbildning och erfarenhet
const CvList = ({ title, items }: CvListProps) => {
  const { lang, t } = useLanguage();

  return (
    <div>
      <h3 className="font-display text-2xl">{title}</h3>
      <ol className="mt-6 border-t border-birch/15">
        {items.map((item) => (
          <li
            key={item.title.sv}
            className="grid gap-1 border-b border-birch/15 py-4 sm:grid-cols-[7rem_1fr] sm:gap-6"
          >
            <span className="font-medium text-gold">
              {item.current ? `${item.period}–${t.about.now}` : item.period}
            </span>
            <div>
              <p>{item.title[lang]}</p>
              <p className="text-lichen">{item.place[lang]}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

const About = () => {
  const { lang, t } = useLanguage();

  return (
    <Section id="om-mig" title={t.about.title} tinted>
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="max-w-2xl space-y-5 text-lg text-lichen">
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div>
          <h3 className="font-display text-2xl">{t.about.skillsTitle}</h3>
          <dl className="mt-6 border-t border-birch/15">
            {skillGroups.map((group) => (
              <div
                key={group.title.sv}
                className="grid gap-1 border-b border-birch/15 py-4 sm:grid-cols-[7rem_1fr] sm:gap-6"
              >
                <dt className="font-medium text-gold">{group.title[lang]}</dt>
                <dd className="text-lichen">{group.skills.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-2 md:gap-16">
        <CvList title={t.about.educationTitle} items={education} />
        <CvList title={t.about.experienceTitle} items={experience} />
      </div>
    </Section>
  );
};

export default About;
