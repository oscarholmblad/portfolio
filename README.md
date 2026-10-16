# Portfolio – Oscar Holmblad

## Projektbeskrivning

Detta är min personliga **portfolio**, byggd som en **one-page SPA** i **React** och **TypeScript**. Sidan presenterar vem jag är, mina projekt och hur man kan kontakta mig. Projekten kan filtreras på teknik och kontaktformuläret har validering på alla fält.

Inlämning 1 i kursen JavaScript-ramverk. Målet har varit att bygga sidan utifrån min egen Figma-skiss, med återanvändbara komponenter, state och animationer, och sedan publicera den på Vercel.

## Länkar

- **Live:** https://portfolio-tau-lake-8m4vedngel.vercel.app/
- **Figma-skiss (mobil + desktop):** https://www.figma.com/design/bE6ZWfUnMI906k7cM7uMIF/Portfolio---skiss?node-id=0-1&t=JNfVnB9fJX2SY3Sp-1

## Tekniker (tech stack)

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Motion (animationer)
- ESLint
- Vercel

## Funktioner

- Navigering till Hem, Om mig, Projekt och Kontakt, med en animerad mobilmeny
- Sex projektkort som renderas från en egen datafil (`src/data/projects.ts`)
- Filtrering på teknik där man kan välja flera taggar samtidigt, och en knapp för att rensa filtret
- En räknare som visar hur många projekt som visas
- Korten animeras när listan ändras (layout-animation)
- Kontaktformulär där alla fält är obligatoriska, med felmeddelande vid varje fält och ett bekräftelsemeddelande (inget riktigt mejl skickas)
- Responsiv från mobil (360 px) upp till desktop

## Tillgänglighet

- Semantiska element: `header`, `nav`, `main`, `section`, `article`, `footer`
- Formulärfälten har kopplade `label`, och felmeddelandena kopplas till fälten med `aria-describedby`
- Filterknapparna har `aria-pressed` så att det framgår vilka som är valda
- Menyknappen har `aria-expanded` och `aria-controls`
- Räknaren och bekräftelsen läses upp med `aria-live` och `role="status"`
- Rörelse- och layoutanimationer stängs av om man har valt reducerad rörelse i systemet

## Kör projektet lokalt

Du behöver Node.js 20.19+ eller 22.12+.

Klona repot och gå in i mappen:

```bash
git clone https://github.com/oscarholmblad/portfolio.git
cd portfolio
```

Installera paket:

```bash
npm install
```

Starta utvecklingsservern:

```bash
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

## Ändringar från skissen

Sidan följer skissens layout, färger och typsnitt, men några saker har ändrats under arbetets gång:

- Projekten i skissen var exempel. På sidan visas mina riktiga skolprojekt med skärmdumpar och länkar.
- Filterraden visar alla elva taggar som finns i projekten istället för fyra, eftersom listan räknas fram från datan.
- I Om mig har jag skrivit om texten och delat upp kompetenserna i Frontend, Backend och Verktyg. Profilbilden från desktop-skissen är inte med.
- Rubriken i hero är ändrad till "Hej, jag heter Oscar och jag bygger för webben."
- Kontaktformuläret har vita etiketter istället för grå, ingen platshållartext i fälten och en bekräftelse i ett stycke istället för rubrik och text.
- Introtexten i Kontakt är omskriven.

## Reflektion

### Komponentarkitektur

```
App
├── Header (state: isMenuOpen)
│   └── NavLinks ×2
├── Hero
├── About
├── Projects (state: selectedTags)
│   ├── TagFilter
│   └── ProjectCard ×6
├── Contact
│   └── ContactForm (state: values, errors, isSent)
│       └── FormField ×5
└── Footer
```

Jag delade upp sidan i en komponent per sektion som `App` sätter ihop. Där samma struktur återkommer har jag brutit ut den till egna komponenter: `Section` används av tre sektioner, `NavLinks` av både desktopmenyn och mobilmenyn och `FormField` av alla fem fälten i formuläret. Då räcker det att ändra på ett ställe. Projekten ligger i en egen datafil, så ett nytt projekt är bara ett nytt objekt.

### State

Jag har lagt varje state så nära där det används som möjligt. `selectedTags` ligger i `Projects` eftersom det är närmaste gemensamma förälder till filtret och listan. `TagFilter` får taggarna och funktioner som props och säger bara till när någon klickar. `isMenuOpen` ligger i `Header`, och i `ContactForm` använder jag ett objekt och en gemensam `handleChange` istället för fem olika `useState`.

Den filtrerade listan och taggarna i filtret är inte state, utan räknas fram från projektdatan. Då kan de aldrig hamna i otakt. När en tagg läggs till eller tas bort skapar jag en ny array istället för att ändra den gamla, så att React ser ändringen. Jag valde `.some()`, vilket betyder att ett projekt visas om det har någon av de valda taggarna. Med `.every()` hade React + MySQL gett noll projekt, eftersom inget projekt har båda.

### Vad jag skulle göra annorlunda

I efterhand hade jag nog lagt in mina riktiga projekt och texter i Figma från början, så att skissen och sidan skiljer sig mindre. Jag hade också testat i mobilläge tidigare. Där scrollade mobilmenyn först inte till rätt sektion, eftersom animationen när menyn stängdes avbröt scrollen. Jag skulle även vilja göra bilderna mindre och koppla formuläret till en riktig mejltjänst.

### AI-verktyg

Jag använde AI-krediter i Figma för att sätta upp stora delar av skissen. Jag förklarade hur jag ville att skissen skulle se ut och med Figmas inbyggda AI så gjorde den det mesta. Sedan gick jag in och korrigerade lite placering, text och färg. Jag har använt Claude som stöd genom hela projektet. Claude har varit som en extra lärare för mig, direkt jag fastnar eller behöver något förklarat så har jag frågat Claude om hjälp, vilket har gjort att jag har kunnat jobba väldigt effektivt. Jag har även fått steg för steg hjälp av Claude på några delar jag tyckte var svåra.
