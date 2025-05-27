<script>
  import projects from '$lib/data/projects.json';
</script>

<section class="relative py-16 px-6 min-h-screen bg-white dark:bg-[#111111] dark:text-white transition-colors duration-300 overflow-hidden">
  <!-- Grid Lines Background -->
  <div class="absolute inset-0 grid grid-cols-12 gap-2 opacity-10 pointer-events-none z-0">
    {#each Array(12) as _, i}
      <div class="h-full border-r border-current"></div>
    {/each}
  </div>

  <div class="relative z-10 max-w-7xl mx-auto">
    <h2 class="text-4xl font-bold mb-12 text-center">Projects</h2>

    <div class="grid md:grid-cols-2 gap-10">
      {#each projects as project}
        <a href={`/projects/${project.slug}`} class="block group" aria-label={`View details for ${project.title}`}>
          <div class="relative bg-white dark:bg-[#1a1a1a] shadow-md rounded-lg overflow-hidden transition-transform group-hover:scale-105 group-hover:shadow-xl">

            <!-- Sloped Label -->
            <div class="absolute top-4 left-4 sloped-label text-white text-sm font-semibold z-20 px-4 py-1">
              <span class="not-skewed">PROJECT</span>
            </div>

            <img src={project.image} alt={project.title} class="w-full h-56 object-cover"/>

            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2">{project.title}</h3>
              <p class="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
              <div class="flex flex-wrap gap-2">
                {#each project.tags as tag}
                  <span class="bg-black/80 text-white text-sm px-3 py-1 rounded-full">{tag}</span>
                {/each}
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .sloped-label {
    background-color: black;
    clip-path: polygon(0 0, 100% 0%, 70% 100%, 0% 100%);
    transform: skewX(-12deg);
    width: 120px;
  }
  .not-skewed {
    display: inline-block;
    transform: skewX(12deg);
  }
</style>
