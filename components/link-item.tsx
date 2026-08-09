interface LinkCardProps {
  href: string;
  label: string;
  note?: string;
  emoji?: string;
}

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

// Hairline card used in the link grids. The top border takes the section
// accent on hover (set by the enclosing <Section>).
export function LinkCard({ href, label, note, emoji }: LinkCardProps) {
  const external = isExternal(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group block rounded-lg border border-hairline px-4 py-3 transition-[border-color,transform] duration-150 hover:-translate-y-0.5 hover:[border-color:var(--accent)]"
    >
      <span className="font-medium">
        {emoji && <span className="mr-2" aria-hidden="true">{emoji}</span>}
        {label}
        {external && (
          <span className="ext-arrow ml-1 text-sm text-muted" aria-hidden="true">
            ↗
          </span>
        )}
      </span>
      {note && <span className="mt-0.5 block text-sm text-muted">{note}</span>}
    </a>
  );
}

// Plain inline text link with an accent-colored hover underline.
export function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = isExternal(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="underline decoration-hairline underline-offset-4 transition-colors hover:decoration-2 hover:[text-decoration-color:var(--accent,var(--color-spark))]"
    >
      {children}
    </a>
  );
}
