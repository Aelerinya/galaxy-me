import Image from "next/image";
import { Icon } from "@/components/icons";
import { Section } from "@/components/section";
import { LinkCard, InlineLink } from "@/components/link-item";
import { CopyButton } from "@/components/copy-button";
import { LatestWriting } from "@/components/latest-writing";
import {
  profile,
  identityLinks,
  now,
  writingVenues,
  work,
  personal,
  contact,
  footer,
} from "@/lib/content";
import postsData from "@/data/schlaugh_posts_list.json";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-5 pb-24 pt-16 sm:pt-24">
      {/* Hero */}
      <header>
        <Image
          src="/images/profile.jpg"
          alt="Lucie Philippon, on a path in the Bois de Vincennes at sunset"
          width={88}
          height={88}
          priority
          className="rounded-full border border-hairline"
        />
        <h1 className="mt-6 font-display text-4xl font-semibold sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-2 font-mono text-sm text-muted">
          @{profile.handle} · {profile.location}
        </p>
        <p className="mt-6">{profile.intro}</p>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {identityLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-spark"
              >
                <Icon name={link.icon} className="h-4 w-4" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </header>

      {/* Now */}
      <Section id="now" title="Now" accent="contact">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          Last updated: {now.updated}
        </p>
        <ul className="mt-3 space-y-2">
          {now.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-spark" aria-hidden="true">
                ✦
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* Writing */}
      <Section id="writing" title="Writing" accent="writing">
        <div className="grid gap-3 sm:grid-cols-3">
          {writingVenues.map((venue) => (
            <LinkCard
              key={venue.label}
              href={venue.href}
              label={venue.label}
              note={
                venue.href === "/schlaugh"
                  ? `${postsData.posts.length} ${venue.note}`
                  : venue.note
              }
            />
          ))}
        </div>
        <LatestWriting />
      </Section>

      {/* Work */}
      <Section id="work" title="Work" accent="work">
        <p>{work.blurb}</p>
        <ul className="mt-4 space-y-2">
          {work.projects.map((project) => (
            <li key={project.label} className="flex gap-3">
              <span style={{ color: "var(--accent)" }} aria-hidden="true">
                ✦
              </span>
              <InlineLink href={project.href}>{project.label}</InlineLink>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-muted">{work.previously.blurb}</p>
        <ul className="mt-3 space-y-2">
          {work.previously.projects.map((project) => (
            <li key={project.label} className="flex gap-3">
              <span className="opacity-60" style={{ color: "var(--accent)" }} aria-hidden="true">
                ✦
              </span>
              <InlineLink href={project.href}>{project.label}</InlineLink>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-muted">
          Open to interesting work —{" "}
          {work.hireLine.map((link, i) => (
            <span key={link.label}>
              {i > 0 && " · "}
              <InlineLink href={link.href}>{link.label}</InlineLink>
            </span>
          ))}
        </p>
      </Section>

      {/* Get to know me */}
      <Section id="personal" title="Get to know me" accent="personal">
        <p className="text-muted">{personal.framing}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {personal.links.map((link) => (
            <LinkCard key={link.label} href={link.href} label={link.label} emoji={link.emoji} />
          ))}
        </div>
      </Section>

      {/* Say hi */}
      <Section id="contact" title="Say hi" accent="contact">
        <p className="text-muted">{contact.framing}</p>
        <ul className="mt-4 space-y-1">
          {contact.methods.map((method) => (
            <li key={method.label}>
              {method.kind === "link" ? (
                <a
                  href={method.href}
                  {...(method.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex min-h-11 items-center gap-3 rounded-lg px-2 py-2 -mx-2 transition-colors hover:bg-hairline/40"
                >
                  <Icon name={method.icon} className="h-4 w-4 text-muted" />
                  <span className="font-medium">{method.label}</span>
                  <span className="font-mono text-sm text-muted">{method.detail}</span>
                </a>
              ) : (
                <CopyButton
                  value={method.value}
                  className="group flex min-h-11 w-full items-center gap-3 rounded-lg px-2 py-2 -mx-2 text-left transition-colors hover:bg-hairline/40"
                >
                  <Icon name={method.icon} className="h-4 w-4 text-muted" />
                  <span className="font-medium">{method.label}</span>
                  <span className="font-mono text-sm text-muted">{method.detail}</span>
                </CopyButton>
              )}
            </li>
          ))}
        </ul>
      </Section>

      {/* Footer */}
      <footer className="mt-24 border-t border-hairline pt-8 text-center">
        <p className="text-spark" aria-hidden="true">
          ✦
        </p>
        <p className="mt-4 font-mono text-xs text-muted">
          aelerinya.me ·{" "}
          <a href={footer.archive.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-ink">
            {footer.archive.label}
          </a>
        </p>
      </footer>
    </main>
  );
}
