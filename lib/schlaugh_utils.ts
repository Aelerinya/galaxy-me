interface SchlaughPost {
  body: string;
  tags: Record<string, unknown>;
  title: string;
  url: string;
  post_id: string;
  date: string;
}

interface SchlaughAuthor {
  author: string;
  _id: string;
  authorPic: string;
}

interface SchlaughResponse {
  error: boolean;
  posts: SchlaughPost[];
  authorData: SchlaughAuthor;
  pages: number;
  authorInfo: SchlaughAuthor;
}

export async function fetchSchlaughPostsPage(
  page: number = 0,
): Promise<SchlaughResponse> {
  const authorId = "67c000111610bf329ab41598";
  const url = 'https://www.schlaugh.com/getPosts';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        author: authorId,
        page,
        postCode: "TFFF",
        needAuthorInfo: true,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Schlaugh posts:', error);
    throw error;
  }
}

export async function fetchAllSchlaughPosts(): Promise<SchlaughPost[]> {
  const allPosts: SchlaughPost[] = [];
  let currentPage = 0;
  let totalPages = 0;

  while (true) {
    const response = await fetchSchlaughPostsPage(currentPage);
    allPosts.push(...response.posts);
    totalPages = response.pages;

    if (currentPage >= totalPages - 1) {
      break;
    }
    currentPage++;
  }

  return allPosts;
}