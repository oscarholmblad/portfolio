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

// En text på både svenska och engelska
export type Localized = {
  sv: string;
  en: string;
};

export type CvItem = {
  period: string;
  // true om det pågår fortfarande, då visas "2024–nu"
  current?: boolean;
  title: Localized;
  place: Localized;
};

export type Project = {
  id: number;
  category: Localized;
  title: string;
  description: Localized;
  image: string;
  imageAlt: Localized;
  tags: Tag[];
  repoUrl?: string;
  liveUrl?: string;
};
