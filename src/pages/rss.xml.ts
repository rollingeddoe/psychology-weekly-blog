import rss from '@astrojs/rss';
import { publishedPosts, href } from '../lib/posts';
export async function GET(context: { site: URL }) {
  const posts = await publishedPosts();
  return rss({ title: 'Psychology Weekly', description: 'Psychology research, in perspective.', site: context.site,
    items: posts.map(post => ({ title: post.data.title, pubDate: post.data.date, description: post.data.description, link: href(`posts/${post.id}/`) })),
    customData: '<language>en</language>',
  });
}
