# Portfolio – Oscar Holmblad

Detta är min personliga portfolio. Här visar jag vem jag är, vad jag har byggt och hur man kan kontakta mig.

**Live:** https://oscarholmblad.vercel.app

## Tekniker

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Motion (animationer)
- Vercel

## Funktioner

- Projektkort som renderas från en egen datafil (`src/data/projects.ts`)
- Filtrering på teknik där man kan välja flera taggar samtidigt
- CV att ladda ner som PDF
- Kontaktuppgifter med e-post, GitHub och LinkedIn
- Animerad mobilmeny och layout-animationer när projekten filtreras
- Responsiv från mobil (360 px) upp till desktop

## Tillgänglighet

- Semantiska element: `header`, `nav`, `main`, `section`, `article`, `footer`
- Filterknapparna har `aria-pressed` så att det framgår vilka som är valda
- Menyknappen har `aria-expanded` och `aria-controls`
- Räknaren läses upp med `aria-live` när filtret ändras
- Rörelse- och layoutanimationer stängs av om man har valt reducerad rörelse i systemet

## Kör projektet lokalt

Du behöver Node.js 20.19+ eller 22.12+.

```bash
git clone https://github.com/oscarholmblad/portfolio.git
cd portfolio
npm install
npm run dev
```

Sidan körs på `http://localhost:5173`.

## Scripts

| Kommando          | Gör                                          |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Startar utvecklingsservern                   |
| `npm run build`   | Typkontrollerar och bygger sidan till `dist` |
| `npm run preview` | Visar den byggda versionen lokalt            |
| `npm run lint`    | Kör ESLint                                   |

## Lägga till ett projekt

1. Lägg en skärmdump i `public/images/projects/` (jpg, 1200 px bred).
2. Lägg till ett nytt objekt i `src/data/projects.ts` med ett unikt `id`.
3. Använder projektet en ny teknik, lägg först till den i typen `Tag` i `src/types.ts`.

Filterknapparna räknas fram från projektdatan, så nya taggar dyker upp i filtret av sig själva.
