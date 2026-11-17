import { sectionIds } from "../data/navigation";
import { useLanguage } from "../i18n/languageContext";

type NavLinksProps = {
  variant: "desktop" | "mobile";
  activeId: string;
  onLinkClick?: () => void;
};

const NavLinks = ({ variant, activeId, onLinkClick }: NavLinksProps) => {
  const { t } = useLanguage();
  const isDesktop = variant === "desktop";

  return (
    <ul className={isDesktop ? "flex gap-8" : "flex flex-col"}>
      {sectionIds.map((id) => {
        const isActive = id === activeId;

        return (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={onLinkClick}
              aria-current={isActive ? "true" : undefined}
              className={
                isDesktop
                  ? `text-sm transition-colors hover:text-birch ${isActive ? "text-gold" : "text-lichen"}`
                  : `block rounded-md px-3 py-3 text-lg transition-colors hover:bg-forest-light hover:text-gold ${isActive ? "text-gold" : ""}`
              }
            >
              {t.nav[id]}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
