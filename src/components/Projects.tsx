import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

const Projects = () => {
  return (
    <Section id="projekt" title="Projekt">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Projects;
