import type { BlogPost } from '../types/blog';

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // Import blogs.json directly
    const blogs = await import('../../content/blogs/blogs.json');
    return blogs.default.filter((blog: BlogPost) => blog.published);
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<string> {
  try {
    // Import markdown file directly
    const post = await import(`../../content/blogs/posts/${slug}.md?raw`);
    return post.default;
  } catch (error) {
    console.error('Error loading blog post:', error);
    return '';
  }
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
