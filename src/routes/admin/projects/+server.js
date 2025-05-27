import { json } from '@sveltejs/kit';
import { getAllProjects, createProject } from '$lib/api/projects';

export async function GET() {
  return json(await getAllProjects());
}

export async function POST({ request }) {
  const data = await request.json();
  await createProject(data);
  return json({ success: true });
}
