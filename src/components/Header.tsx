import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import NavLinks from "./NavLinks";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-birch/10 bg-forest/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#hem"
          onClick={closeMenu}
          className="font-display text-xl font-medium"
        >
          Oscar Holmblad
        </a>

        <nav aria-label="Huvudmeny" className="hidden md:block">
          <NavLinks variant="desktop" />
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobilmeny"
          className="cursor-pointer rounded-md border border-birch/30 px-3 py-2 text-sm md:hidden"
        >
          {isMenuOpen ? "Stäng" : "Meny"}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobilmeny"
            aria-label="Mobilmeny"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-x-0 top-full overflow-hidden border-b border-birch/10 bg-forest md:hidden"
          >
            <div className="px-4 py-4">
              <NavLinks variant="mobile" onLinkClick={closeMenu} />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
