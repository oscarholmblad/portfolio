import type { Project } from "../types";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const hasLinks = Boolean(project.repoUrl || project.liveUrl);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-accent/60">
      <div className="aspect-video overflow-hidden bg-zinc-800">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm text-zinc-400">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tekniker">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-6 text-sm font-semibold">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              Kod &rarr;
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              Live-demo &rarr;
            </a>
          )}
          {!hasLinks && <span className="text-zinc-500">Kommer snart</span>}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
