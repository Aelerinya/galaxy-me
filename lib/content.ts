// Single source of truth for everything the landing page says.
// Edit this file to update the site — no layout code involved.

export type IconName =
  | "substack"
  | "lesswrong"
  | "x"
  | "github"
  | "linkedin"
  | "email"
  | "signal"
  | "telegram"
  | "discord";

export interface Profile {
  name: string;
  handle: string;
  location: string;
  intro: string;
}

export const profile: Profile = {
  name: "Lucie Philippon",
  handle: "aelerinya",
  location: "Paris",
  intro:
    "Hi! I'm Lucie — a French rationalist in Paris. I work on AI safety community building and French AI policy, and I write about all of it, plus the occasional personal development rabbit hole.",
};

export interface IdentityLink {
  label: string;
  href: string;
  icon: IconName;
}

// The four external identities, shown in the hero.
export const identityLinks: IdentityLink[] = [
  { label: "Substack", href: "https://aelerinya.substack.com/", icon: "substack" },
  { label: "LessWrong", href: "https://www.lesswrong.com/users/lucie-philippon", icon: "lesswrong" },
  { label: "Twitter/X", href: "https://x.com/Aelerinya", icon: "x" },
  { label: "GitHub", href: "https://github.com/Aelerinya", icon: "github" },
];

// The /now section. Refresh the items and bump `updated` — nothing else to touch.
export const now = {
  updated: "August 2026",
  items: [
    // TODO(lucie): replace with your real current status
    "Building up the AI safety community in Paris.",
    "Writing about French AI policy and whatever else is on my mind, at Lux ex Machina and LessWrong.",
    "Open to interesting work and projects that need a hand.",
  ],
};

export const writingVenues = [
  {
    label: "Lux ex Machina",
    note: "essays & life updates, on Substack",
    href: "https://aelerinya.substack.com/",
  },
  {
    label: "LessWrong",
    note: "AI safety & French AI policy",
    href: "https://www.lesswrong.com/users/lucie-philippon",
  },
  {
    label: "Microblog",
    note: "near-daily posts, Feb–Jul 2025",
    href: "/schlaugh",
  },
];

export const work = {
  blurb:
    "I work on AI safety community building and French AI policy, from Paris. Recent projects:",
  projects: [
    { label: "Global Call on AI Red Lines", href: "https://red-lines.ai/" },
    { label: "AI Safety Connect", href: "https://www.aisafetyconnect.com/" },
    { label: "AI Safety Paris", href: "/paris-ai-safety" },
  ],
  hireLine: [
    { label: "CV", href: "/cv" },
    { label: "hire me", href: "/hire-me" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/lucie-philippon-67690a165/" },
  ],
};

export const personal = {
  framing: "The parts of the site that aren't about work.",
  links: [
    {
      label: "Conversation menu",
      emoji: "💬",
      href: "https://lucieworkinghard.notion.site/Lucie-s-conversation-menu-263f3b13347e49b8a2d09ddcd112f75a",
    },
    {
      label: "Activities menu",
      emoji: "🧗",
      href: "https://lucieworkinghard.notion.site/Activities-menu-1a7baaa52195808588eec4545964dfcb?pvs=25",
    },
    {
      label: "Dating doc",
      emoji: "💞",
      href: "https://www.notion.so/lucieworkinghard/Dating-doc-1e9baaa5219580229fced2a11dcab259",
    },
    {
      label: "Manifold.love",
      emoji: "🔮",
      href: "https://www.manifold.love/Aelerinya",
    },
  ],
};

export type ContactMethod =
  | { label: string; detail: string; icon: IconName; kind: "link"; href: string }
  | { label: string; detail: string; icon: IconName; kind: "copy"; value: string };

export const contact: { framing: string; methods: ContactMethod[] } = {
  framing: "The best ways to reach me are Signal and email.",
  methods: [
    {
      label: "Email",
      detail: "lucie.philippon@proton.me",
      icon: "email",
      kind: "link",
      href: "mailto:lucie.philippon@proton.me",
    },
    {
      label: "Signal",
      detail: "@aelerinya.49",
      icon: "signal",
      kind: "copy",
      value: "@aelerinya.49",
    },
    {
      label: "Telegram",
      detail: "@aelerinya",
      icon: "telegram",
      kind: "link",
      href: "https://t.me/aelerinya",
    },
    {
      label: "Discord",
      detail: "@aelerinya",
      icon: "discord",
      kind: "copy",
      value: "@aelerinya",
    },
  ],
};

export const footer = {
  archive: {
    label: "old writing archive",
    href: "https://lucieworkinghard.notion.site/Lucie-s-homepage-c1deefa7fbc64ed5b3bb7dd98b963f8d",
  },
};
