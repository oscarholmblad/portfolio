import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects } from "../data/projects";
import type { Tag } from "../types";
import ProjectCard from "./ProjectCard";
import Section from "./Section";
import TagFilter from "./TagFilter";

const allTags: Tag[] = [
  ...new Set(projects.flatMap((project) => project.tags)),
];

const Projects = () => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

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
    <Section id="projekt" title="Projekt">
      <TagFilter
        tags={allTags}
        selectedTags={selectedTags}
        onToggleTag={toggleTag}
        onClear={clearTags}
      />

      <p className="mb-6 text-sm text-zinc-400" aria-live="polite">
        Visar {filteredProjects.length} av {projects.length} projekt
      </p>

      <ul className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.li
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
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
