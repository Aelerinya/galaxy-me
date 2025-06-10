interface Post {
  date: string;
  title: string;
  url: string;
}

export default function PostCard({ post }: { post: Post }) {
  const date = new Date(post.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex items-center gap-2 py-1 hover:bg-starlight-black/50 transition-colors rounded-lg">
      <span className="text-starlight-white/30">•</span>
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-starlight-white hover:text-starlight-blue"
          >
            {post.title}
          </a>
          <span className="text-starlight-white/70 text-sm">{formattedDate}</span>
        </div>
      </div>
    </div>
  );
}
