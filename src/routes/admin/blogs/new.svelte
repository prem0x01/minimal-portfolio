<script>
  let title = '';
  let slug = '';
  let content = '';

  async function createBlog() {
    const res = await fetch('/api/admin/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, slug, content })
    });

    if (res.ok) {
      window.location.href = '/admin/blogs';
    } else {
      alert('Error creating blog');
    }
  }
</script>

<h1>Create New Blog</h1>

<form on:submit|preventDefault={createBlog}>
  <label>Title:</label>
  <input bind:value={title} required />

  <label>Slug (URL-friendly title):</label>
  <input bind:value={slug} required />

  <label>Content (Markdown supported):</label>
  <textarea rows="12" bind:value={content} required></textarea>

  <button type="submit">Publish Blog</button>
</form>
