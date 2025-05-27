<script>
  import { onMount } from 'svelte';
  let blogs = [];

  onMount(async () => {
    const res = await fetch('/api/admin/blogs');
    blogs = await res.json();
  });

  async function deleteBlog(id) {
    await fetch(`/api/admin/blogs/${id}`, { method: 'DELETE' });
    blogs = blogs.filter(b => b.id !== id);
  }
</script>

<h1>Manage Blogs</h1>
<a href="/admin/blogs/new">➕ Create New Blog</a>
<ul>
  {#each blogs as blog}
    <li>
      <strong>{blog.title}</strong> - <a href={`/admin/blogs/${blog.id}`}>✏️ Edit</a>
      <button on:click={() => deleteBlog(blog.id)}>🗑️ Delete</button>
    </li>
  {/each}
</ul>
