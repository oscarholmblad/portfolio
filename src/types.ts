export type Tag =
  | "HTML"
  | "CSS"
  | "SCSS"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Tailwind CSS"
  | "PWA"
  | "Express"
  | "MongoDB"
  | "MySQL";

export type Project = {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: Tag[];
  repoUrl?: string;
  liveUrl?: string;
};
