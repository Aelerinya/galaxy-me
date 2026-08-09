import { fetchLatestWriting } from "@/lib/feeds";

const SOURCE_LABELS = { substack: "substack", lesswrong: "lesswrong" } as const;

export async function LatestWriting() {
  const posts = await fetchLatestWriting();
  if (posts.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="font-mono text-sm uppercase tracking-wider text-muted">Latest</h3>
      <ul className="mt-3 space-y-3">
        {posts.map((post) => (
          <li key={post.url}>
            <span className="block font-mono text-xs text-muted">
              {post.date} · {SOURCE_LABELS[post.source]}
            </span>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-hairline underline-offset-4 hover:decoration-2 hover:[text-decoration-color:var(--accent)]"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
