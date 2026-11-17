import { useLanguage } from "../i18n/languageContext";
import type { Project } from "../types";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { lang, t } = useLanguage();
  const hasLinks = Boolean(project.repoUrl || project.liveUrl);

  return (
    <article className="grid items-center gap-6 py-8 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-10 lg:grid-cols-[minmax(0,28rem)_1fr] lg:gap-14">
      {/* Ram som ser ut som ett webbläsarfönster, så att de ljusa
          skärmdumparna inte lyser rakt mot den mörka bakgrunden */}
      <div className="overflow-hidden rounded-md border border-birch/15 bg-forest-light">
        <div
          aria-hidden="true"
          className="flex gap-1.5 border-b border-birch/10 px-3 py-2.5"
        >
          <span className="size-2 rounded-full bg-birch/25" />
          <span className="size-2 rounded-full bg-birch/25" />
          <span className="size-2 rounded-full bg-birch/25" />
        </div>
        <img
          src={project.image}
          alt={project.imageAlt[lang]}
          loading="lazy"
          width={1200}
          height={750}
          className="aspect-[16/10] w-full object-cover object-top"
        />
      </div>

      <div>
        <p className="text-sm font-medium text-gold">
          {project.category[lang]}
        </p>
        <h3 className="mt-1 font-display text-3xl">{project.title}</h3>
        <p className="mt-3 max-w-2xl text-lichen">
          {project.description[lang]}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <p className="text-lichen">
            <span className="sr-only">{t.projects.techLabel}</span>
            {project.tags.join(", ")}
          </p>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-gold underline underline-offset-4 transition-colors hover:text-gold-light"
            >
              {t.projects.code}
              <span className="sr-only">
                {` ${t.projects.linkFor(project.title)} ${t.newTab}`}
              </span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-gold underline underline-offset-4 transition-colors hover:text-gold-light"
            >
              {t.projects.liveDemo}
              <span className="sr-only">
                {` ${t.projects.linkFor(project.title)} ${t.newTab}`}
              </span>
            </a>
          )}
          {!hasLinks && (
            <span className="text-lichen">{t.projects.comingSoon}</span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
