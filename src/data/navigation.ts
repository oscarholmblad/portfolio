// Sektionerna som menyn länkar till, i samma ordning som på sidan.
// Texterna för länkarna finns i src/i18n/texts.ts under nav.
export const sectionIds = ["hem", "om-mig", "projekt", "kontakt"] as const;

export type SectionId = (typeof sectionIds)[number];
