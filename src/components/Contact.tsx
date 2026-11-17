import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/languageContext";
import Section from "./Section";

const email = "oscarholmblad@outlook.com";

const githubUrl = "https://github.com/oscarholmblad";
const linkedinUrl = "https://www.linkedin.com/in/oscar-holmblad-aa3382393";
const cvUrl = "/cv/oscar-holmblad-cv.pdf";

type CopyStatus = "idle" | "copied" | "failed";

const Contact = () => {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const { t } = useLanguage();

  const links = [
    { label: "GitHub", href: githubUrl },
    { label: "LinkedIn", href: linkedinUrl },
    { label: t.contact.cvLink, href: cvUrl },
  ];

  // Knappen går tillbaka till "Kopiera adressen" efter några sekunder
  useEffect(() => {
    if (copyStatus !== "copied") {
      return;
    }

    const timer = setTimeout(() => setCopyStatus("idle"), 2500);

    return () => clearTimeout(timer);
  }, [copyStatus]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
  };

  return (
    <Section id="kontakt" title={t.contact.title} tinted>
      <p className="max-w-xl text-lg text-lichen">{t.contact.intro}</p>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a
          href={`mailto:${email}`}
          className="font-display text-xl font-light wrap-anywhere underline decoration-gold decoration-2 underline-offset-8 transition-colors hover:text-gold min-[22.5rem]:text-2xl sm:text-4xl md:text-5xl"
        >
          {email}
        </a>

        <button
          type="button"
          onClick={copyEmail}
          className="cursor-pointer rounded-md border border-birch/45 px-4 py-2 text-sm font-semibold transition-colors hover:border-gold hover:text-gold"
        >
          {copyStatus === "copied" ? t.contact.copied : t.contact.copy}
        </button>
      </div>

      <p role="status" className="mt-3 text-sm text-lichen">
        {copyStatus === "copied" && (
          <span className="sr-only">{t.contact.copiedStatus}</span>
        )}
        {copyStatus === "failed" && t.contact.copyFailed}
      </p>

      <ul className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline underline-offset-4 transition-colors hover:text-gold"
            >
              {link.label}
              <span className="sr-only">{` ${t.newTab}`}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Contact;
