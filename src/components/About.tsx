import Section from "./Section";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Git",
  "Figma",
];

const About = () => {
  return (
    <Section id="om-mig" title="Om mig">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-zinc-300">
          <p>
            Jag bor i Karlstad och läser till frontendutvecklare på distans på
            Medieinstitutet. Jag gillar när design och kod möts: att ta en skiss
            i Figma och göra den till ett gränssnitt som fungerar lika bra i
            mobilen som på datorn.
          </p>
          <p>Exempel text jag inte kommit på än.</p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-xl font-semibold">
            Det här jobbar jag med
          </h3>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default About;
