import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  tinted?: boolean;
};

// tinted ger sektionen en ljusare grön bakgrund, så att sektionerna växlar
const Section = ({ id, title, children, tinted = false }: SectionProps) => {
  return (
    <section
      id={id}
      className={`scroll-mt-16 ${tinted ? "bg-forest-light" : ""}`}
    >
      <div className="mx-auto max-w-page px-4 py-20 sm:px-6 md:py-28 lg:px-12">
        <h2 className="mb-12 font-display text-4xl font-light md:text-6xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
