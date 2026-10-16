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
    <Section id="om-mig" title="Om mig">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-zinc-300">
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
          <h3 className="mb-4 font-display text-xl font-semibold">
            Tekniker och verktyg
          </h3>
          <div className="space-y-5">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h4 className="mb-2 text-xs font-medium tracking-wide text-zinc-400 uppercase">
                  {group.title}
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
