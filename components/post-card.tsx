interface Post {
  date: string;
  title: string;
  url: string;
}

export function PostRow({ post }: { post: Post }) {
  return (
    <li className="flex flex-col gap-x-6 gap-y-0.5 py-1.5 sm:flex-row sm:items-baseline">
      <span className="shrink-0 font-mono text-xs text-muted sm:w-24">{post.date}</span>
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-hairline underline-offset-4 hover:decoration-2 hover:[text-decoration-color:var(--color-writing)]"
      >
        {post.title}
      </a>
    </li>
  );
}
