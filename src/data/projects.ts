import type { Project } from "../types";

// Lägg till ett nytt projekt genom att kopiera ett objekt nedan och ändra värdena.
// - id måste vara unikt
// - category, description och imageAlt skrivs på både svenska (sv) och engelska (en)
// - lägg bilden i public/images/projects/ (jpg i 1200 × 750 px)
// - nya tekniker i tags måste först läggas till i typen Tag i src/types.ts
// - repoUrl och liveUrl är valfria, men minst en av dem bör finnas med
export const projects: Project[] = [
  {
    id: 1,
    category: { sv: "Webbapp", en: "Web app" },
    title: "Budget Tracker",
    description: {
      sv: "Håll koll på inkomster och utgifter. Ett skolprojekt som jag vidareutvecklat på egen hand mot en installerbar app (PWA).",
      en: "Keep track of income and expenses. A school project that I've kept developing on my own into an installable app (PWA).",
    },
    image: "/images/projects/budget-tracker.jpg",
    imageAlt: {
      sv: "Budget Tracker med saldo, inkomster, utgifter och formulär för nya poster",
      en: "Budget Tracker showing the balance, income, expenses and the form for new entries",
    },
    tags: ["TypeScript", "CSS", "PWA"],
    repoUrl: "https://github.com/oscarholmblad/budget-tracker",
    liveUrl: "https://budgettracker91.netlify.app",
  },
  {
    id: 2,
    category: { sv: "E-handel", en: "E-commerce" },
    title: "Gottfrid's Fik",
    description: {
      sv: "Webbshop i en sida för ett fik, med filtrering, sortering, varukorg och beställningsformulär med validering. Priset räknas om efter regler som måndagsrabatt, helgpåslag och mängdrabatt.",
      en: "One-page web shop for a café, with filtering, sorting, a shopping cart and an order form with validation. Prices are recalculated by rules such as a Monday discount, a weekend surcharge and a bulk discount.",
    },
    image: "/images/projects/gottfrids-fik.jpg",
    imageAlt: {
      sv: "Gottfrid's Fik med produktfilter, produktkort och varukorg",
      en: "Gottfrid's Fik with product filters, product cards and the shopping cart",
    },
    tags: ["HTML", "JavaScript", "SCSS"],
    liveUrl: "https://unique-crumble-3d6a51.netlify.app",
  },
  {
    id: 3,
    category: { sv: "Fullstack", en: "Full stack" },
    title: "Book API",
    description: {
      sv: "REST-API för böcker med inloggning, adminsida och recensioner, byggt i grupp om tre. Jag ansvarade för böckerna: MongoDB-databasen, CRUD-endpoints och klientens bok- och adminsidor.",
      en: "REST API for books with login, an admin page and reviews, built in a group of three. I was responsible for the books: the MongoDB database, the CRUD endpoints and the client’s book and admin pages.",
    },
    image: "/images/projects/book-api.jpg",
    imageAlt: {
      sv: "Boklistan i Book API-klienten med bokomslag",
      en: "The book list in the Book API client with book covers",
    },
    tags: ["TypeScript", "Express", "MongoDB"],
    repoUrl: "https://github.com/RasmusFranssonHub/api-book-group",
  },
  {
    id: 4,
    category: { sv: "Spel", en: "Game" },
    title: "IKEA Escape Room",
    description: {
      sv: "Escape room där spelaren har gått vilse på IKEA och måste lösa pussel genom varuhusets avdelningar. Byggt i grupp om fyra; jag gjorde sista rummet, Kassan.",
      en: "An escape room where the player is lost in IKEA and has to solve puzzles through the store’s departments. Built in a group of four; I made the last room, the checkout.",
    },
    image: "/images/projects/ikea-escape-room.jpg",
    imageAlt: {
      sv: "Startsidan till IKEA-spelet med introduktion och inloggning",
      en: "The start page of the IKEA game with the introduction and login",
    },
    tags: ["HTML", "TypeScript", "SCSS"],
    liveUrl:
      "https://medieinstitutet.github.io/fed25d-js-intro-grupparbete-the-vorticon-vikings/",
  },
  {
    id: 5,
    category: { sv: "Backend", en: "Backend" },
    title: "E-shop API",
    description: {
      sv: "REST-API för en e-shops produktkatalog med CRUD för produkter och kategorier, sökning och sortering. Normaliserad MySQL-databas där en produkt kan tillhöra flera kategorier.",
      en: "REST API for an e-shop’s product catalogue with CRUD for products and categories, search and sorting. Normalised MySQL database where a product can belong to several categories.",
    },
    image: "/images/projects/eshop-api.jpg",
    imageAlt: {
      sv: "ER-diagram över produkter, kategorier och kopplingstabellen",
      en: "ER diagram of products, categories and the join table",
    },
    tags: ["TypeScript", "Express", "MySQL"],
    repoUrl: "https://github.com/oscarholmblad/eshop-api",
  },
  {
    id: 6,
    category: { sv: "Webbplats", en: "Website" },
    title: "Portfolio",
    description: {
      sv: "Den här sidan. En React-SPA på svenska och engelska, med filtrerbara projekt och CV att ladda ner.",
      en: "This site. A React SPA in Swedish and English, with filterable projects and a downloadable CV.",
    },
    image: "/images/projects/portfolio.jpg",
    imageAlt: {
      sv: "Startsidan på portfolion med mörkgrön bakgrund, en bild från skogen och en rad granar längst ner",
      en: "The portfolio’s start page with a dark green background, a photo from the forest and a row of spruce trees at the bottom",
    },
    tags: ["React", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/oscarholmblad/portfolio",
    liveUrl: "https://oscarholmblad.vercel.app/",
  },
];
