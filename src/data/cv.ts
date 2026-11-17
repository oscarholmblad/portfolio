import type { CvItem } from "../types";

// Utbildning och erfarenhet som visas i Om mig, samma uppgifter som i CV:t.
// Det senaste ligger först.
export const education: CvItem[] = [
  {
    period: "2025–2027",
    title: {
      sv: "Front End Developer (YH)",
      en: "Front End Developer (higher vocational education)",
    },
    place: { sv: "Medieinstitutet", en: "Medieinstitutet" },
  },
  {
    period: "2025",
    title: { sv: "Webbutveckling 1", en: "Web Development 1" },
    place: { sv: "Iris Hadar", en: "Iris Hadar" },
  },
  {
    period: "2023",
    title: { sv: "Digitalt skapande 2", en: "Digital Creation 2" },
    place: { sv: "Infokomp, Karlstad", en: "Infokomp, Karlstad" },
  },
  {
    period: "2022",
    title: { sv: "Digitalt skapande 1", en: "Digital Creation 1" },
    place: { sv: "Hermods, Forshaga", en: "Hermods, Forshaga" },
  },
  {
    period: "2019–2022",
    title: {
      sv: "Samhällsvetenskap, beteende",
      en: "Social Science, behavioural science",
    },
    place: {
      sv: "Fria Läroverken, Karlstad",
      en: "Fria Läroverken, Karlstad",
    },
  },
];

export const experience: CvItem[] = [
  {
    period: "2024",
    current: true,
    title: { sv: "Diskare och städare", en: "Dishwasher and cleaner" },
    place: { sv: "Pepa Deli, Karlstad", en: "Pepa Deli, Karlstad" },
  },
  {
    period: "2021",
    title: {
      sv: "Lägerledare och fastighetsskötare",
      en: "Camp leader and caretaker",
    },
    place: { sv: "Karlstads kommun", en: "Karlstad Municipality" },
  },
  {
    period: "2020",
    title: {
      sv: "Ledare, sommarskoj",
      en: "Leader, summer activities for children",
    },
    place: { sv: "Karlstads kommun", en: "Karlstad Municipality" },
  },
];
