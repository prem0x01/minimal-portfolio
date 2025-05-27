<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  let id = '';
  let title = '';
  let description = '';
  let link = '';
  let tags = '';

  onMount(async () => {
    id = $page.params.id;
    const res = await fetch(`/api/admin/projects/${id}`);
    const data = await res.json();
    title = data.title;
    description = data.description;
    link = data.link;
    tags = data.tags;
  });

  async function updateProject() {
    await fetch(`/api/admin/projects/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, link, tags })
    });
    window.location.href = '/admin/projects';
  }
</script>

<h1>Edit Project</h1>

<form on:submit|preventDefault={updateProject}>
  <label>Title:</label>
  <input bind:value={title} required />

  <label>Description:</label>
  <textarea bind:value={description} required></textarea>

  <label>Project Link:</label>
  <input bind:value={link} />

  <label>Tags:</label>
  <input bind:value={tags} />

  <button type="submit">Update Project</button>
</form>
