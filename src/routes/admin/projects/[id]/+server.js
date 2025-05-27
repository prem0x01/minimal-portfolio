import { json } from '@sveltejs/kit';
import { getProjectById, updateProject, deleteProject } from '$lib/api/projects';

export async function GET({ params }) {
  return json(await getProjectById(params.id));
}

export async function PUT({ params, request }) {
  const data = await request.json();
  await updateProject(params.id, data);
  return json({ success: true });
}

export async function DELETE({ params }) {
  await deleteProject(params.id);
  return json({ success: true });
}
