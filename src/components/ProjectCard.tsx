import type { Project } from "../types";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const hasLinks = Boolean(project.repoUrl || project.liveUrl);

  return (
    <article className="grid items-center gap-6 py-8 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-10">
      <img
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        width={1200}
        height={675}
        className="aspect-[16/10] w-full rounded-sm object-cover"
      />

      <div>
        <p className="text-sm font-medium text-gold">{project.category}</p>
        <h3 className="mt-1 font-display text-3xl">{project.title}</h3>
        <p className="mt-3 max-w-2xl text-lichen">{project.description}</p>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <p className="text-lichen">
            <span className="sr-only">Tekniker: </span>
            {project.tags.join(", ")}
          </p>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-gold underline underline-offset-4 transition-colors hover:text-gold-light"
            >
              Kod
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-gold underline underline-offset-4 transition-colors hover:text-gold-light"
            >
              Live-demo
            </a>
          )}
          {!hasLinks && <span className="text-lichen">Kommer snart</span>}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
