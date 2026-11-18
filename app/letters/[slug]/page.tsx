import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SealedLetter } from "@/components/sealed-letter";
import { getSealedLetter, listSealedSlugs } from "@/lib/letters";

// Letters that exist at build time are prerendered. Unknown slugs fall
// through to notFound() below, and the dev server picks up newly sealed
// letters without a restart.
export function generateStaticParams() {
  return listSealedSlugs().map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

// Everything here is public, so it's deliberately generic. The real title
// is inside the encrypted letter and is set in the browser once it opens.
const TITLE = "A letter";
const DESCRIPTION = "A letter for you.";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: { index: false, follow: false },
    },
    alternates: { canonical: null },
    openGraph: {
      type: "article",
      url: `/letters/${slug}`,
      title: TITLE,
      description: DESCRIPTION,
    },
    twitter: { title: TITLE, description: DESCRIPTION },
  };
}

export default async function LetterPage({ params }: Props) {
  const { slug } = await params;
  const sealed = getSealedLetter(slug);
  if (!sealed) notFound();

  return (
    <main className="mx-auto max-w-[35rem] px-6 pb-28 pt-16 sm:pt-28">
      <SealedLetter sealed={sealed} />
      <noscript>
        <p className="py-24 text-center font-mono text-sm text-muted">
          This letter needs JavaScript to open.
        </p>
      </noscript>
      <p className="mt-24 text-center text-sm text-spark" aria-hidden="true">
        ✦
      </p>
    </main>
  );
}
