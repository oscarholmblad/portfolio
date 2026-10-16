type NavLinksProps = {
  variant: "desktop" | "mobile";
  onLinkClick?: () => void;
};

const links = [
  { href: "#hem", label: "Hem" },
  { href: "#om-mig", label: "Om mig" },
  { href: "#projekt", label: "Projekt" },
  { href: "#kontakt", label: "Kontakt" },
];

const NavLinks = ({ variant, onLinkClick }: NavLinksProps) => {
  const isDesktop = variant === "desktop";

  return (
    <ul className={isDesktop ? "flex gap-8" : "flex flex-col"}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            onClick={onLinkClick}
            className={
              isDesktop
                ? "text-sm text-zinc-300 transition-colors hover:text-accent"
                : "block rounded-lg px-3 py-3 text-lg text-zinc-200 transition-colors hover:bg-zinc-900 hover:text-accent"
            }
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
