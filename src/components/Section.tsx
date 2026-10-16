import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id} className="scroll-mt-16 border-t border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <h2 className="mb-10 font-display text-3xl font-bold md:text-4xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
