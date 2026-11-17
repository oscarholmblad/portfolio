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
- LIA-perioder i hero och utbildning och erfarenhet i Om mig, från egna datafiler
- Menyn markerar den sektion man är i medan man scrollar
- Kontaktuppgifter med e-post, GitHub och LinkedIn, och en knapp som kopierar mejladressen
- Granar mellan sektionerna (och en älg någonstans i skogen)
- Hela sidan finns på svenska och engelska. Språket byts med knappen i headern och sparas till nästa besök, och med `?lang=en` i adressen öppnas den engelska versionen direkt
- CV-knapp i headern och projektbilder i en ram som liknar ett webbläsarfönster
- Typsnitten ligger i projektet (`public/fonts`), så inget hämtas från Google
- Egen ikon om sidan sparas på hemskärmen på en mobil
- Egen delningsbild som visas när länken delas på t.ex. LinkedIn
- Animerad mobilmeny och layout-animationer när projekten filtreras
- Responsiv från mobil (320 px) upp till stora skärmar

## Tillgänglighet

- Semantiska element: `header`, `nav`, `main`, `section`, `article`, `footer`
- En länk som hoppar förbi menyn till innehållet syns när man tabbar in på sidan
- `lang` på `html` följer det valda språket, så att skärmläsare läser upp texten med rätt uttal
- Filterknapparna har `aria-pressed` så att det framgår vilka som är valda, och ligger i en grupp med en etikett
- Menyknappen har `aria-expanded` och `aria-controls`, och Escape stänger mobilmenyn och flyttar tillbaka fokus till knappen
- Den aktiva menylänken har `aria-current`
- Räknaren läses upp med `aria-live` när filtret ändras
- Bekräftelsen när mejladressen kopierats läses upp med `role="status"`
- För den som använder skärmläsare säger länkarna till kod och live-demo vilket projekt de hör till, och alla länkar som öppnas i en ny flik säger det
- Granarna och älgen är bara dekoration och döljs för skärmläsare med `aria-hidden`
- All text har minst 4,5:1 i kontrast mot bakgrunden, och kanterna på knapparna minst 3:1
- Alla knappar och länkar får en synlig guldram när man tabbar
- Rörelse- och layoutanimationer stängs av om man har valt reducerad rörelse i systemet
- Sidan går att läsa utan att scrolla i sidled ända ner till 320 px, vilket motsvarar 400 % zoom
- Testad med axe (WCAG 2.2 AA) på svenska och engelska, på desktop och mobil, utan fel

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

## Struktur

```
src/
  components/  Sidans delar, t.ex. Header, Hero och ProjectCard
  data/        Projekten, CV-uppgifterna och sektionerna i menyn
  hooks/       useActiveSection, som håller koll på vilken sektion som syns
  i18n/        Texterna på svenska och engelska och bytet mellan språken
public/        Bilder, typsnitt, ikoner och CV
```

Innehållet ligger i egna datafiler och inte i komponenterna, så ett nytt projekt eller en ny text läggs till utan att röra koden för sidan.
