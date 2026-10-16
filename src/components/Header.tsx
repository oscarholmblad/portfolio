import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#hem" className="font-display text-lg font-bold">
          Oscar<span className="text-accent">.</span>
        </a>

        <nav aria-label="Huvudmeny" className="hidden md:block">
          <NavLinks variant="desktop" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
