import { XMLParser } from "fast-xml-parser";

export interface FeedPost {
  title: string;
  url: string;
  date: string; // ISO yyyy-mm-dd
  source: "substack" | "lesswrong";
}

const FEEDS: { url: string; source: FeedPost["source"] }[] = [
  { url: "https://aelerinya.substack.com/feed", source: "substack" },
  {
    url: "https://www.lesswrong.com/feed.xml?view=userPosts&userId=2yZ6G2cfNhBARiSLG&karmaThreshold=2",
    source: "lesswrong",
  },
];

interface RssItem {
  title?: string;
  link?: string;
  pubDate?: string;
}

async function fetchFeed(url: string, source: FeedPost["source"]): Promise<FeedPost[]> {
  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000),
      headers: { "User-Agent": "aelerinya.me (latest-writing section)" },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const parser = new XMLParser({ ignoreAttributes: true });
    const parsed = parser.parse(xml);
    const items: RssItem[] = parsed?.rss?.channel?.item ?? [];
    return (Array.isArray(items) ? items : [items])
      .filter((item) => item?.title && item?.link && item?.pubDate)
      .map((item) => ({
        title: String(item.title),
        url: String(item.link),
        date: new Date(String(item.pubDate)).toISOString().slice(0, 10),
        source,
      }));
  } catch {
    // A dead feed should never break the page — the section just shrinks.
    return [];
  }
}

export async function fetchLatestWriting(limit = 6): Promise<FeedPost[]> {
  const feeds = await Promise.all(FEEDS.map(({ url, source }) => fetchFeed(url, source)));
  return feeds
    .flat()
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}
