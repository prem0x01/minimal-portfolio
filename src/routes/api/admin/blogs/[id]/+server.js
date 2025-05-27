import { json } from '@sveltejs/kit';
import { getBlogById, updateBlog, deleteBlog } from '$lib/api/blogs';

export async function GET({ params }) {
  const blog = await getBlogById(params.id);
  return json(blog);
}

export async function PUT({ params, request }) {
  const data = await request.json();
  await updateBlog(params.id, data);
  return json({ success: true });
}

export async function DELETE({ params }) {
  await deleteBlog(params.id);
  return json({ success: true });
}
