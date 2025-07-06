import type { PageLoad } from './$types';
import { getBlogPosts } from '$lib/utils/blog';

export const load: PageLoad = async () => {
  const posts = await getBlogPosts();

  return {
    posts: posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  };
};
