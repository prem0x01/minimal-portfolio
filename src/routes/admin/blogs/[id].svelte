<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  let title = '';
  let slug = '';
  let content = '';
  let id = '';

  onMount(async () => {
    id = $page.params.id;
    const res = await fetch(`/api/admin/blogs/${id}`);
    const data = await res.json();
    title = data.title;
    slug = data.slug;
    content = data.content;
  });

  async function updateBlog() {
    const res = await fetch(`/api/admin/blogs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, slug, content })
    });

    if (res.ok) {
      window.location.href = '/admin/blogs';
    } else {
      alert('Error updating blog');
    }
  }
</script>

<h1>Edit Blog</h1>

<form on:submit|preventDefault={updateBlog}>
  <label>Title:</label>
  <input bind:value={title} required />

  <label>Slug:</label>
  <input bind:value={slug} required />

  <label>Content:</label>
  <textarea rows="12" bind:value={content} required></textarea>

  <button type="submit">Update Blog</button>
</form>
