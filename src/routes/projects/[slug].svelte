<script context="module">
  import projects from '$lib/data/projects.json';

  export function load({ params }) {
    const project = projects.find(p => p.slug === params.slug);
    if (!project) {
      return { status: 404 };
    }
    return { props: { project } };
  }
</script>

<script>
  export let project;
</script>

<section class="min-h-screen bg-gray-100 dark:bg-[#111111] text-black dark:text-white py-16 px-6 relative overflow-hidden">
  <!-- Background Grid -->
  <div class="absolute inset-0 grid grid-cols-12 gap-2 opacity-10 pointer-events-none z-0">
    {#each Array(12) as _, i}
      <div class="h-full border-r border-current"></div>
    {/each}
  </div>

  <div class="max-w-5xl mx-auto relative z-10">
    <!-- Project Banner -->
    <img src={project.image} alt={project.title} class="w-full h-64 object-cover rounded-lg shadow mb-10" />

    <!-- Title with Sloped Label -->
    <div class="flex items-center gap-4 mb-6">
      <div class="sloped-label text-white text-sm px-4 py-1 font-semibold">
        <span class="not-skewed">PROJECT</span>
      </div>
      <h1 class="text-4xl font-bold">{project.title}</h1>
    </div>

    <!-- Tags -->
    <div class="flex flex-wrap gap-2 mb-4">
      {#each project.tags as tag}
        <span class="bg-black/80 text-white text-sm px-3 py-1 rounded-full">{tag}</span>
      {/each}
    </div>

    <!-- Description -->
    <p class="text-lg leading-relaxed mb-10">{project.description}</p>

    <!-- View Project Button -->
    <a href={project.link} target="_blank" class="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
      🔗 View Project
    </a>
  </div>
</section>

<style>
  .sloped-label {
    background-color: black;
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 10% 100%);
    transform: skewX(-12deg);
  }
  .not-skewed {
    display: inline-block;
    transform: skewX(12deg);
  }
</style>
