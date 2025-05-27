<script>
  let title = '';
  let description = '';
  let link = '';
  let tags = '';

  async function createProject() {
    await fetch('/api/admin/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, link, tags })
    });
    window.location.href = '/admin/projects';
  }
</script>

<h1>Add New Project</h1>

<form on:submit|preventDefault={createProject}>
  <label>Title:</label>
  <input bind:value={title} required />

  <label>Description:</label>
  <textarea bind:value={description} required></textarea>

  <label>Project Link:</label>
  <input bind:value={link} />

  <label>Tags (comma-separated):</label>
  <input bind:value={tags} />

  <button type="submit">Create Project</button>
</form>
