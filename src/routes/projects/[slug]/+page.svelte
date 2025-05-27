<script lang="ts">
  import { page } from '$app/stores';
  import { error } from '@sveltejs/kit';
  import projects from '$lib/data/projects.json';

  const slug = $page.params.slug;
  const project = projects.find(p => p.slug === slug);

  if (!project) throw error(404, 'Project not found');
</script>

<section class="py-16 px-6 max-w-4xl mx-auto">
  <h1 class="text-4xl font-bold mb-4">{project.title}</h1>
  <img src={project.image} alt={project.title} class="w-full h-auto mb-6 rounded shadow-lg" />
  <p class="mb-4 text-lg text-gray-700 dark:text-gray-300">{project.description}</p>

  <div class="flex flex-wrap gap-2 mb-6">
    {#each project.tags as tag}
      <span class="bg-black/80 text-white text-sm px-3 py-1 rounded-full">{tag}</span>
    {/each}
  </div>

  {#if project.link}
    <a href={project.link} target="_blank" class="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
      View Project
    </a>
  {/if}
</section>
