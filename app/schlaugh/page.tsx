import { Metadata } from "next";
import PostCard from "@/components/post-card";
import _ from "lodash";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import postsData from "@/public/schlaugh_posts_list.json";

interface Post {
  date: string;
  title: string;
  url: string;
}

export const metadata: Metadata = {
  title: "Aelerinya's Schlaugh",
  description: "Index of all my posts on schlaugh",
};

export default function SchlaughPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 underline">
        <a href="https://www.schlaugh.com/Aelerinya">
          Aelerinya&apos;s Schlaugh
          <ArrowTopRightOnSquareIcon className="ml-1 inline w-6 h-6" />
        </a>
      </h1>
      <p className="text-gray-600 mb-8">
        Since April 2025, I started blogging nearly daily on schlaugh. In this
        time, I wrote more than ever before. However, the unstructured nature of
        the format means that it&apos;s hard to find back specific posts.
      </p>
      <p className="text-gray-600 mb-8">
        You can find below a list of all my posts, with Claude generated titles.
      </p>
      <div className="space-y-6">
        {_.sortBy(postsData.posts, (post) => new Date(post.date).getTime())
          .reverse()
          .map((post: Post) => (
            <PostCard key={post.url} post={post} />
          ))}
      </div>
    </div>
  );
}
