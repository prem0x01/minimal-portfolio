<script>
  import { onMount } from 'svelte';

  let projects = [];

  onMount(async () => {
    const res = await fetch('/api/admin/projects');
    projects = await res.json();
  });

  async function deleteProject(id) {
    if (confirm('Are you sure you want to delete this project?')) {
      await fetch(`/api/admin/projects/${id}`, { method: 'DELETE' });
      projects = projects.filter(p => p.id !== id);
    }
  }
</script>

<h1>Manage Projects</h1>

<a href="/admin/projects/new">+ Add New Project</a>

<ul>
  {#each projects as project}
    <li>
      <strong>{project.title}</strong>
      <a href={`/admin/projects/${project.id}`}>Edit</a>
      <button on:click={() => deleteProject(project.id)}>Delete</button>
    </li>
  {/each}
</ul>
