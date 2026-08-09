interface SectionProps {
  id: string;
  title: string;
  accent: "writing" | "work" | "personal" | "contact";
  children: React.ReactNode;
}

const ACCENTS = {
  writing: "var(--color-writing)",
  work: "var(--color-work)",
  personal: "var(--color-personal)",
  contact: "var(--color-contact)",
} as const;

export function Section({ id, title, accent, children }: SectionProps) {
  return (
    <section id={id} className="mt-14 sm:mt-16" style={{ "--accent": ACCENTS[accent] } as React.CSSProperties}>
      <div aria-hidden="true" className="mb-14 hidden text-center text-muted/50 sm:mb-16 sm:block">
        ✦
      </div>
      <h2 className="font-display text-2xl font-medium">
        <span className="spark mr-2 text-lg" style={{ color: "var(--accent)" }} aria-hidden="true">
          ✦
        </span>
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
