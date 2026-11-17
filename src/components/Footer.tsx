import { useLanguage } from "../i18n/languageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="mx-auto flex max-w-page flex-col gap-2 px-4 py-8 text-sm text-lichen sm:flex-row sm:justify-between sm:px-6 lg:px-12">
        <p>&copy; {new Date().getFullYear()} Oscar Holmblad</p>
        <p>{t.footer.builtWith}</p>
        <a
          href="#hem"
          className="underline underline-offset-4 transition-colors hover:text-birch"
        >
          {t.footer.toTop}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
