import Section from "./Section";

const email = "oscarholmblad@outlook.com";

const links = [
  { label: "GitHub", href: "https://github.com/oscarholmblad" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/oscar-holmblad-aa3382393",
  },
  { label: "CV (PDF)", href: "/cv/oscar-holmblad-cv.pdf" },
];

const Contact = () => {
  return (
    <Section id="kontakt" title="Kontakt" tinted>
      <p className="max-w-xl text-lg text-lichen">
        Söker ni en LIA-praktikant, eller vill du bara säga hej? Hör gärna av
        dig via mejl eller LinkedIn.
      </p>

      <a
        href={`mailto:${email}`}
        className="mt-10 inline-block font-display text-2xl font-light break-words underline decoration-gold decoration-2 underline-offset-8 transition-colors hover:text-gold sm:text-4xl md:text-5xl"
      >
        {email}
      </a>

      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline underline-offset-4 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Contact;
