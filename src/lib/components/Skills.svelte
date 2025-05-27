<script>
  const skills = [
  {
    name: 'Java',
    image: '/assets/skills/java.png',
    tags: ['OOP', 'Backend', 'Android'],
    description: 'Used for Android app development, especially in my custom Notes and DepressionGuru apps using MVVM.'
  },
  {
    name: 'GoLang',
    image: '/assets/skills/golang.png',
    tags: ['Backend', 'Systems', 'API'],
    description: 'Used for high-performance backend APIs, like the YouTube downloader and Hospital Management dashboard.'
  },
  {
    name: 'Python',
    image: '/assets/skills/python.png',
    tags: ['Automation', 'Scripting', 'AI'],
    description: 'Built automation scripts, YouTube video downloader, and SQLite-based CLI tools using Python.'
  },
  {
    name: 'JavaScript',
    image: '/assets/skills/js.png',
    tags: ['Frontend', 'Browser'],
    description: 'Used for dynamic interactions in my portfolio and project dashboards.'
  },
  {
    name: 'Svelte',
    image: '/assets/skills/svelete.png',
    tags: ['Frontend', 'Framework'],
    description: 'Used to create fast, reactive UIs with minimal code in my animated and responsive portfolio.'
  },
  {
    name: 'SQLite3',
    image: '/assets/skills/sqlite.png',
    tags: ['Database', 'Embedded'],
    description: 'Implemented lightweight databases in my hospital system and feedback forms with secure SQL logic.'
  },
  {
    name: 'Docker',
    image: '/assets/skills/docker.png',
    tags: ['DevOps', 'Containers'],
    description: 'Used to containerize and deploy backend services efficiently, especially Golang-based APIs.'
  }
];

</script>

<section class="relative w-full min-h-screen py-16 px-6 bg-white dark:bg-[#111111] text-black dark:text-white overflow-hidden">

  <!-- 🔳 Background Grid -->
  <div class="absolute inset-0 grid grid-cols-12 gap-2 opacity-10 pointer-events-none z-0">
    {#each Array(12) as _, i}
      <div class="h-full border-r border-current"></div>
    {/each}
  </div>

  <h2 class="text-4xl font-bold text-center mb-12 z-10 relative">Skills</h2>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
    {#each skills as skill}
      <div class="relative group rounded-xl overflow-hidden border border-black dark:border-white shadow-lg dark:shadow-xl bg-white dark:bg-[#1a1a1a] transition duration-300 hover:scale-[1.02]">

        <!-- 📌 Hover Description Tooltip -->
        <div class="absolute top-0 left-0 w-full h-full text-white text-sm flex items-center justify-center px-4 text-center opacity-0 group-hover:opacity-100 transition duration-300 z-20 bg-black/80 backdrop-blur-sm pointer-events-none">
          {skill.description}
        </div>

        <!-- 🖼 Skill Image -->
        <img src={skill.image} alt={skill.name} class="w-full h-32 object-contain p-4 bg-white dark:bg-[#1a1a1a] z-10 relative" />

        <!-- 🏷 Tags -->
        <div class="flex flex-wrap gap-2 px-4 py-2 z-10 relative">
          {#each skill.tags as tag}
            <span class="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white">{tag}</span>
          {/each}
        </div>

        <!-- 🏁 Sloped Skill Name Bar -->
        <div class="sloped-skill-name text-white text-center text-lg font-bold relative z-10">
  <span class="not-skewed">{skill.name}</span>
</div>
      </div>
    {/each}
  </div>
</section>

<style>
  .sloped-skill-name {
    background: black;
    clip-path: polygon(0 0, 100% 0%, 70% 100%, 0% 100%);
    padding: 0.75rem;
    transform: skewX(-12deg);
    margin-top: 0.5rem;
  }

  .not-skewed {
  display: inline-block;
  transform: skewX(12deg);
}
</style>
