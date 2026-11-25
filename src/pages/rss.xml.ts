import settings from '../data/site.json';
import rss from '@astrojs/rss';
import { publishedPosts, href } from '../lib/posts';
export async function GET(context: { site: URL }) {
  const posts = await publishedPosts();
  return rss({ title: settings.title, description: settings.description, site: new URL(href(), context.site),
    items: posts.map(post => ({ title: post.data.title, pubDate: post.data.date, description: post.data.description, link: href(`posts/${post.id}/`) })),
    customData: '<language>en</language>',
  });
}
