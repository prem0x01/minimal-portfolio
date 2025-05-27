// POST - Create a blog
import { json } from '@sveltejs/kit';
import { createBlog } from '$lib/api/blogs';

export async function POST({ request }) {
  const data = await request.json();
  try {
    await createBlog(data);
    return json({ success: true });
  } catch (e) {
    return json({ error: 'Failed to create blog' }, { status: 500 });
  }
}
