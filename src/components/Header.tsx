import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { sectionIds } from "../data/navigation";
import { useActiveSection } from "../hooks/useActiveSection";
import { useLanguage } from "../i18n/languageContext";
import NavLinks from "./NavLinks";

const cvUrl = "/cv/oscar-holmblad-cv.pdf";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const activeId = useActiveSection(sectionIds);
  const { t, toggleLanguage } = useLanguage();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Escape stänger mobilmenyn och flyttar fokus tillbaka till menyknappen
  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Knappen visar det andra språket, t.ex. "EN" när sidan är på svenska
  const languageButton = (
    <button
      type="button"
      onClick={toggleLanguage}
      lang={t.header.otherLang}
      className="cursor-pointer rounded-md px-2 py-2 text-sm font-semibold text-lichen transition-colors hover:text-birch"
    >
      <span aria-hidden="true">{t.header.otherLangShort}</span>
      <span className="sr-only">{t.header.otherLangName}</span>
    </button>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-birch/10 bg-forest/85 backdrop-blur-md">
      {/* Syns bara när man tabbar, så att man kan hoppa förbi menyn */}
      <a
        href="#innehall"
        className="sr-only rounded-md bg-gold px-4 py-2 font-semibold text-forest focus:not-sr-only focus:absolute focus:top-3 focus:left-4"
      >
        {t.skipLink}
      </a>

      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-4 sm:px-6 lg:px-12">
        <a
          href="#hem"
          onClick={closeMenu}
          className="flex items-center gap-2.5 font-display text-xl font-medium"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-5 fill-gold"
          >
            <path d="M12 1.5 16.8 8.5H14.6L19 14.5H16.6L21 20.5H13.4V23H10.6V20.5H3L7.4 14.5H5L9.4 8.5H7.2Z" />
          </svg>
          Oscar Holmblad
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <nav aria-label={t.header.mainMenu}>
            <NavLinks variant="desktop" activeId={activeId} />
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={cvUrl}
              download
              className="rounded-md border border-gold/60 px-3 py-1.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-forest"
            >
              <span className="sr-only">{t.header.cvHidden}</span>
              {t.header.cvShort}
            </a>
            {languageButton}
          </div>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          {languageButton}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobilmeny"
            className="cursor-pointer rounded-md border border-birch/40 px-3 py-2 text-sm"
          >
            {isMenuOpen ? t.header.closeMenu : t.header.openMenu}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobilmeny"
            aria-label={t.header.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-x-0 top-full overflow-hidden border-b border-birch/10 bg-forest md:hidden"
          >
            <div className="px-4 py-4">
              <NavLinks
                variant="mobile"
                activeId={activeId}
                onLinkClick={closeMenu}
              />
              <a
                href={cvUrl}
                download
                onClick={closeMenu}
                className="block rounded-md px-3 py-3 text-lg font-semibold text-gold transition-colors hover:bg-forest-light"
              >
                {t.hero.downloadCv}
              </a>
            </div>
            <div
              aria-hidden="true"
              className="tradgrans h-14 bg-forest-light"
            />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
