import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    category: "Webbapp",
    title: "Budget Tracker",
    description:
      "Håll koll på inkomster och utgifter. Ett skolprojekt som jag vidareutvecklat på egen hand mot en installerbar app (PWA).",
    image: "/images/Rectangle 1.png",
    imageAlt:
      "Budget Tracker med saldo och formulär för inkomster och utgifter",
    tags: ["TypeScript", "CSS", "PWA"],
    repoUrl: "https://github.com/oscarholmblad/budget-tracker",
    liveUrl: "https://budgettracker91.netlify.app",
  },
  {
    id: 2,
    category: "E-handel",
    title: "Gottfrid's Fik",
    description:
      "Webbshop i en sida för ett fik, med filtrering, sortering, varukorg och beställningsformulär med validering. Priset räknas om efter regler som måndagsrabatt, helgpåslag och mängdrabatt.",
    image: "/images/Rectangle 2.png",
    imageAlt: "Gottfrid's Fik med produktfilter, produktkort och varukorg",
    tags: ["HTML", "JavaScript", "SCSS"],
    liveUrl: "https://unique-crumble-3d6a51.netlify.app",
  },
  {
    id: 3,
    category: "Fullstack",
    title: "Book API",
    description:
      "REST-API för böcker med inloggning, adminsida och recensioner, byggt i grupp om tre. Jag ansvarade för böckerna: MongoDB-databasen, CRUD-endpoints och klientens bok- och adminsidor.",
    image: "/images/Rectangle 3.png",
    imageAlt: "Boklistan i Book API-klienten med bokomslag",
    tags: ["TypeScript", "Express", "MongoDB"],
    repoUrl: "https://github.com/RasmusFranssonHub/api-book-group",
  },
  {
    id: 4,
    category: "Spel",
    title: "IKEA Escape Room",
    description:
      "Escape room där spelaren har gått vilse på IKEA och måste lösa pussel genom varuhusets avdelningar. Byggt i grupp om fyra; jag gjorde sista rummet, Kassan.",
    image: "/images/Rectangle 4.png",
    imageAlt: "Startsidan till IKEA-spelet",
    tags: ["HTML", "TypeScript", "SCSS"],
    liveUrl:
      "https://medieinstitutet.github.io/fed25d-js-intro-grupparbete-the-vorticon-vikings/",
  },
  {
    id: 5,
    category: "Backend",
    title: "E-shop API",
    description:
      "REST-API för en e-shops produktkatalog med CRUD för produkter och kategorier, sökning och sortering. Normaliserad MySQL-databas där en produkt kan tillhöra flera kategorier.",
    image: "/images/Rectangle 5.png",
    imageAlt: "ER-diagram över produkter, kategorier och kopplingstabellen",
    tags: ["TypeScript", "Express", "MySQL"],
    repoUrl: "https://github.com/oscarholmblad/eshop-api",
  },
  {
    id: 6,
    category: "Webbplats",
    title: "Portfolio",
    description:
      "Den här sidan. En React-SPA med filtrerbara projekt, animerad mobilmeny och ett validerat kontaktformulär.",
    image: "/images/Rectangle 6.png",
    imageAlt: "Startsidan på portfolion med mörk bakgrund och grön accentfärg",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/oscarholmblad/portfolio",
    liveUrl: "https://portfolio-tau-lake-8m4vedngel.vercel.app/",
  },
];
