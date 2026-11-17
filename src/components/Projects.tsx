import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects } from "../data/projects";
import { useLanguage } from "../i18n/languageContext";
import type { Tag } from "../types";
import ProjectCard from "./ProjectCard";
import Section from "./Section";
import TagFilter from "./TagFilter";

const allTags: Tag[] = [
  ...new Set(projects.flatMap((project) => project.tags)),
];

const Projects = () => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const { t } = useLanguage();

  const toggleTag = (tag: Tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag),
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const clearTags = () => {
    setSelectedTags([]);
  };

  const filteredProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) =>
          selectedTags.some((tag) => project.tags.includes(tag)),
        );

  return (
    <Section id="projekt" title={t.projects.title}>
      <TagFilter
        tags={allTags}
        selectedTags={selectedTags}
        onToggleTag={toggleTag}
        onClear={clearTags}
      />

      <p className="mb-8 text-sm text-lichen" aria-live="polite">
        {t.projects.showing(filteredProjects.length, projects.length)}
      </p>

      <ul className="relative border-t border-birch/15">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.li
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-b border-birch/15"
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </Section>
  );
};

export default Projects;
