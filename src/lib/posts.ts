import { getCollection } from 'astro:content';

export const href = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
export const formatDate = (date: Date) => new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date);
export async function publishedPosts() {
  return (await getCollection('posts', ({ data }) => !data.draft && data.date <= new Date()))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
