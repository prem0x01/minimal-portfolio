import type { PageLoad } from './$types';
import { getBlogPosts, getBlogPost } from '$lib/utils/blog';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
  const posts = await getBlogPosts();
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    throw error(404, 'Post not found');
  }

  const content = await getBlogPost(params.slug);

  return {
    post,
    content
  };
};
