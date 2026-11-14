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
                ? "text-sm text-lichen transition-colors hover:text-birch"
                : "block rounded-md px-3 py-3 text-lg transition-colors hover:bg-forest-light hover:text-gold"
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
