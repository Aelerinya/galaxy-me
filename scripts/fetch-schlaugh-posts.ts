import { fetchAllSchlaughPosts } from "../lib/schlaugh_utils";
import * as fs from "fs/promises";
import * as path from "path";
import { Anthropic } from "@anthropic-ai/sdk";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function generateTitle(content: string): Promise<string> {
  const msg = await client.messages.create({
    model: "claude-haiku-4-5",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `You are tasked with creating an engaging and informative title for a post based on its content. Here is the content of the post:\n\n<post_content>\n${content}\n</post_content>\n\nYour goal is to create a title that accurately reflects the main topic or theme of the post while also being concise. Follow these guidelines:\n\n1. The title should be no longer than 8 words.\n2. Capture the essence of the post's main topic or most interesting point.\n3. If appropriate, incorporate keywords that reflect the post's content.\n4. If the post contains multiple sections with distinct topics, mention them separately\n\nProvide your title inside <title> tags.`,
          },
        ],
      },
    ],
  });

  if (msg.content[0].type !== "text") {
    throw new Error("Unexpected response format");
  }

  const response = msg.content[0].text.trim();

  const title = response.match(/<title>(.*?)<\/title>/)?.[1];

  if (!title) {
    throw new Error(`Unexpected response format: ${response}`);
  }

  return title;
}

interface SavedPost {
  date: string;
  title: string;
  url: string;
}

async function main() {
  console.log("Fetching all posts...");
  const newPosts = await fetchAllSchlaughPosts();

  // Read existing posts
  const outputPath = path.join(
    __dirname,
    "..",
    "data",
    "schlaugh_posts_list.json"
  );
  const existingData: { posts: SavedPost[] } = JSON.parse(
    await fs.readFile(outputPath, "utf8")
  );

  // Get all existing dates and the latest date
  const existingDates = new Set(existingData.posts.map((post) => post.date));

  // Only add posts that are newer than the latest existing post and not already in the set
  const newFormattedPosts = [];
  for (const post of newPosts) {
    if (existingDates.has(post.date)) {
      continue;
    }
    const title = post.title || (await generateTitle(post.body));
    console.log(`New post ${post.date}: ${title}`);
    newFormattedPosts.push({
      date: post.date,
      title,
      url: `https://www.schlaugh.com/~/${post.post_id}`,
    });
  }

  newFormattedPosts.sort((a, b) => a.date.localeCompare(b.date));

  // Combine existing and new posts
  const combinedPosts = [...existingData.posts, ...newFormattedPosts];

  // Write updated data
  const data = JSON.stringify({ posts: combinedPosts }, null, 2);
  await fs.writeFile(outputPath, data);

  console.log(`Successfully updated ${outputPath}`);
  console.log(`- Existing posts: ${existingData.posts.length}`);
  console.log(`- New posts added: ${newFormattedPosts.length}`);
  console.log(`- Total posts: ${combinedPosts.length}`);
}

main().catch((error) => {
  console.error("Error updating posts:", error);
  process.exit(1);
});
