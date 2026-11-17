import type { SectionId } from "../data/navigation";

export type Lang = "sv" | "en";

// Alla texter på sidan. Den svenska versionen bestämmer vilka texter som finns,
// och TypeScript klagar om någon text saknas i den engelska.
const sv = {
  pageTitle: "Oscar Holmblad | Frontendutvecklare",
  skipLink: "Hoppa till innehållet",
  // Läses bara upp av skärmläsare på länkar som öppnas i en ny flik
  newTab: "(öppnas i ny flik)",
  nav: {
    hem: "Hem",
    "om-mig": "Om mig",
    projekt: "Projekt",
    kontakt: "Kontakt",
  } satisfies Record<SectionId, string>,
  header: {
    mainMenu: "Huvudmeny",
    mobileMenu: "Mobilmeny",
    openMenu: "Meny",
    closeMenu: "Stäng",
    cvShort: "CV",
    cvHidden: "Ladda ner ",
    // Knappen visar det andra språket
    otherLang: "en",
    otherLangShort: "EN",
    otherLangName: "In English",
  },
  hero: {
    kicker: "Frontendutvecklare under utbildning i Karlstad",
    heading: "Hej, jag heter Oscar och jag bygger för webben.",
    intro:
      "Jag studerar frontendutveckling på Medieinstitutet och söker LIA. Här hittar du mina projekt och hur du når mig.",
    seeProjects: "Se mina projekt",
    downloadCv: "Ladda ner CV",
    photoAlt: "Oscar Holmblad i en solig tallskog",
    liaName: (number: number) => `LIA ${number}`,
    weeks: (weeks: number) => `${weeks} veckor`,
    dateLocale: "sv-SE",
  },
  about: {
    title: "Om mig",
    paragraphs: [
      "Jag är frontendutvecklare under utbildning på Medieinstitutet och bor i Karlstad. Under utbildningen har jag byggt allt från en webbshop och ett spel i JavaScript och TypeScript till API:er i Express och appar i React.",
      "Det jag gillar mest är vägen från idé till färdigt gränssnitt: att skissa i Figma, bygga komponenter och se till att sidan fungerar för alla, oavsett skärm. Just nu söker jag LIA helst i Karlstadsområdet men jag är också öppen för distans.",
    ],
    skillsTitle: "Tekniker och verktyg",
    educationTitle: "Utbildning",
    experienceTitle: "Erfarenhet",
    now: "nu",
  },
  projects: {
    title: "Projekt",
    filterLabel: "Filtrera projekt på teknik",
    clearFilter: "Rensa filter",
    showing: (shown: number, total: number) =>
      `Visar ${shown} av ${total} projekt`,
    techLabel: "Tekniker: ",
    code: "Kod",
    liveDemo: "Live-demo",
    // Gör att skärmläsare hör vilket projekt länken hör till, t.ex. "Kod för Book API"
    linkFor: (title: string) => `för ${title}`,
    comingSoon: "Kommer snart",
  },
  contact: {
    title: "Kontakt",
    intro:
      "Söker ni en LIA-praktikant, eller vill du bara säga hej? Hör gärna av dig via mejl eller LinkedIn.",
    copy: "Kopiera adressen",
    copied: "Kopierad",
    copiedStatus: "Mejladressen är kopierad",
    copyFailed:
      "Det gick inte att kopiera. Markera adressen och kopiera den själv.",
    cvLink: "CV (PDF)",
  },
  footer: {
    builtWith: "Byggd med React, TypeScript och Tailwind CSS",
    toTop: "Till toppen",
  },
};

export type Texts = typeof sv;

const en: Texts = {
  pageTitle: "Oscar Holmblad | Frontend developer",
  skipLink: "Skip to content",
  newTab: "(opens in a new tab)",
  nav: {
    hem: "Home",
    "om-mig": "About",
    projekt: "Projects",
    kontakt: "Contact",
  },
  header: {
    mainMenu: "Main menu",
    mobileMenu: "Mobile menu",
    openMenu: "Menu",
    closeMenu: "Close",
    cvShort: "CV",
    cvHidden: "Download ",
    otherLang: "sv",
    otherLangShort: "SV",
    otherLangName: "På svenska",
  },
  hero: {
    kicker: "Frontend developer student in Karlstad, Sweden",
    heading: "Hi, I’m Oscar and I build for the web.",
    intro:
      "I’m studying frontend development at Medieinstitutet and looking for an internship (LIA). Here you’ll find my projects and how to reach me.",
    seeProjects: "See my projects",
    downloadCv: "Download CV (Swedish)",
    photoAlt: "Oscar Holmblad in a sunny pine forest",
    liaName: (number: number) => `Internship ${number}`,
    weeks: (weeks: number) => `${weeks} weeks`,
    dateLocale: "en-GB",
  },
  about: {
    title: "About me",
    paragraphs: [
      "I’m a frontend developer student at Medieinstitutet, based in Karlstad. During the programme I’ve built everything from a web shop and a game in JavaScript and TypeScript to APIs in Express and apps in React.",
      "What I enjoy most is the path from idea to finished interface: sketching in Figma, building components and making sure the site works for everyone, on any screen. Right now I’m looking for an internship (LIA), preferably in the Karlstad area, but I’m also open to working remotely.",
    ],
    skillsTitle: "Skills and tools",
    educationTitle: "Education",
    experienceTitle: "Experience",
    now: "present",
  },
  projects: {
    title: "Projects",
    filterLabel: "Filter projects by technology",
    clearFilter: "Clear filter",
    showing: (shown: number, total: number) =>
      `Showing ${shown} of ${total} projects`,
    techLabel: "Technologies: ",
    code: "Code",
    liveDemo: "Live demo",
    linkFor: (title: string) => `for ${title}`,
    comingSoon: "Coming soon",
  },
  contact: {
    title: "Contact",
    intro:
      "Looking for an intern, or just want to say hi? Feel free to get in touch by email or on LinkedIn.",
    copy: "Copy address",
    copied: "Copied",
    copiedStatus: "Email address copied",
    copyFailed: "Couldn’t copy. Select the address and copy it yourself.",
    cvLink: "CV (PDF, Swedish)",
  },
  footer: {
    builtWith: "Built with React, TypeScript and Tailwind CSS",
    toTop: "Back to top",
  },
};

export const texts: Record<Lang, Texts> = { sv, en };
