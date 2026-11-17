import { publishedPosts, href } from '../lib/posts';
export async function GET({ site }: { site: URL }) {
  const paths = ['', 'archive/', 'about/', 'subscribe/', ...(await publishedPosts()).map(post => `posts/${post.id}/`)];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${new URL(href(path), site).href}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
}
