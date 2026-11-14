import Section from "./Section";

const skillGroups = [
  {
    title: "Frontend",
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
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "MySQL", "REST API"],
  },
  {
    title: "Verktyg",
    skills: ["Git", "GitHub", "Vite", "Figma", "Vercel", "Netlify"],
  },
];

const About = () => {
  return (
    <Section id="om-mig" title="Om mig" tinted>
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="space-y-5 text-lg text-lichen">
          <p>
            Jag är frontendutvecklare under utbildning på Medieinstitutet och
            bor i Karlstad. Under utbildningen har jag byggt allt från en
            webbshop och ett spel i JavaScript och TypeScript till API:er i
            Express och appar i React.
          </p>
          <p>
            Det jag gillar mest är vägen från idé till färdigt gränssnitt: att
            skissa i Figma, bygga komponenter och se till att sidan fungerar för
            alla, oavsett skärm. Just nu söker jag LIA helst i Karlstadsområdet
            men jag är också öppen för distans.
          </p>
        </div>

        <div>
          <h3 className="font-display text-2xl">Tekniker och verktyg</h3>
          <dl className="mt-6 border-t border-birch/15">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="grid gap-1 border-b border-birch/15 py-4 sm:grid-cols-[7rem_1fr] sm:gap-6"
              >
                <dt className="font-medium text-gold">{group.title}</dt>
                <dd className="text-lichen">{group.skills.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
};

export default About;
