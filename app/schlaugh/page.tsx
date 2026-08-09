import { Metadata } from "next";
import Link from "next/link";
import { PostRow } from "@/components/post-card";
import postsData from "@/data/schlaugh_posts_list.json";

interface Post {
  date: string;
  title: string;
  url: string;
}

export const metadata: Metadata = {
  title: "Microblog",
  description: "Index of all my posts on schlaugh, with Claude-generated titles",
  alternates: { canonical: "/schlaugh" },
};

const MONTH_FORMAT = new Intl.DateTimeFormat("en", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export default function SchlaughPage() {
  const posts = [...(postsData.posts as Post[])].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  const byMonth = new Map<string, Post[]>();
  for (const post of posts) {
    const month = MONTH_FORMAT.format(new Date(post.date));
    byMonth.set(month, [...(byMonth.get(month) ?? []), post]);
  }

  const first = posts[posts.length - 1]?.date.slice(0, 7);
  const last = posts[0]?.date.slice(0, 7);

  return (
    <main className="mx-auto max-w-2xl px-5 pb-24 pt-16 sm:pt-24">
      <p className="font-mono text-sm text-muted">
        <Link href="/" className="hover:text-ink">
          ← aelerinya.me
        </Link>
      </p>
      <h1 className="mt-6 font-display text-4xl font-semibold">
        <a
          href="https://www.schlaugh.com/Aelerinya"
          target="_blank"
          rel="noopener noreferrer"
        >
          Microblog
          <span className="ext-arrow ml-2 text-xl text-muted" aria-hidden="true">
            ↗
          </span>
        </a>
      </h1>
      <p className="mt-2 font-mono text-xs text-muted">
        {posts.length} posts · {first} → {last} · on schlaugh.com
      </p>
      <p className="mt-6">
        I posted here near-daily from February to July 2025 — I wrote more in
        that stretch than ever before. The format is unstructured, so this index
        exists to find posts back. Titles are Claude-generated.
      </p>
      <div className="mt-10">
        {[...byMonth.entries()].map(([month, monthPosts]) => (
          <section key={month} className="mt-8 first:mt-0">
            <h2 className="font-display text-lg font-medium">
              <span className="spark mr-2 text-sm text-writing" aria-hidden="true">
                ✦
              </span>
              {month}
            </h2>
            <ul className="mt-2">
              {monthPosts.map((post) => (
                <PostRow key={post.url} post={post} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
