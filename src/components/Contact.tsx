import ContactForm from "./ContactForm";
import Section from "./Section";

const contactDetails = [
  {
    label: "E-post",
    text: "oscarholmblad@outlook.com",
    href: "mailto:oscarholmblad@outlook.com",
  },
  {
    label: "GitHub",
    text: "github.com/oscarholmblad",
    href: "https://github.com/oscarholmblad",
  },
  {
    label: "LinkedIn",
    text: "linkedin.com/in/oscar-holmblad-aa3382393",
    href: "https://www.linkedin.com/in/oscar-holmblad-aa3382393",
  },
];

const Contact = () => {
  return (
    <Section id="kontakt" title="Kontakt">
      <div className="grid gap-12 lg:grid-cols-[2fr_3fr]">
        <div>
          <p className="text-zinc-300">
            Söker ni en LIA-praktikant, eller vill du bara säga hej? Skicka ett
            meddelande via formuläret eller hör av dig direkt.
          </p>

          <ul className="mt-8 space-y-4">
            {contactDetails.map((detail) => (
              <li key={detail.label}>
                <span className="block text-sm text-zinc-500">
                  {detail.label}
                </span>
                <a
                  href={detail.href}
                  target={
                    detail.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel="noreferrer"
                  className="font-medium transition-colors hover:text-accent"
                >
                  {detail.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;
