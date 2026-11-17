import { createContext, useContext } from "react";
import { texts, type Lang, type Texts } from "./texts";

type LanguageContextValue = {
  lang: Lang;
  t: Texts;
  toggleLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextValue>({
  lang: "sv",
  t: texts.sv,
  toggleLanguage: () => {},
});

// Används i komponenterna: const { lang, t } = useLanguage();
export const useLanguage = () => useContext(LanguageContext);
