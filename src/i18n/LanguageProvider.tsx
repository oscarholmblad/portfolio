import { useEffect, useState, type ReactNode } from "react";
import { LanguageContext } from "./languageContext";
import { texts, type Lang } from "./texts";

const storageKey = "sprak";

const isLang = (value: string | null): value is Lang =>
  value === "sv" || value === "en";

// ?lang=en i adressen går före allt annat, så att man kan länka direkt till
// den engelska versionen. Annars används det språk man valde senast.
const getStartLanguage = (): Lang => {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");

  if (isLang(fromUrl)) {
    return fromUrl;
  }

  try {
    const saved = localStorage.getItem(storageKey);

    if (isLang(saved)) {
      return saved;
    }
  } catch {
    // localStorage kan vara avstängt, då blir det svenska
  }

  return "sv";
};

type LanguageProviderProps = {
  children: ReactNode;
};

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [lang, setLang] = useState<Lang>(getStartLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = texts[lang].pageTitle;

    try {
      localStorage.setItem(storageKey, lang);
    } catch {
      // Gör inget om det inte går att spara
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang(lang === "sv" ? "en" : "sv");
  };

  return (
    <LanguageContext.Provider value={{ lang, t: texts[lang], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
