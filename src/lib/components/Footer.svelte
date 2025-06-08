<script>
  const year = new Date().getFullYear();

  const socials = [
    {
      name: 'GitHub',
      link: 'https://github.com/prem0x01',
      svg: `<svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 0C5.373 0 0 5.373 ..."/></svg>`
    },
    {
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/prem0x01',
      svg: `<svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M19 0h-14c-2.761 ..."/></svg>`
    },
    {
      name: 'X',
      link: 'https://x.com/prem0x01',
      svg: `<svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M23.954 4.569c-0.885 ..."/></svg>`
    }
  ];
</script>

<footer class="w-full mt-auto bg-white dark:bg-black text-black dark:text-white border-t border-black dark:border-white">
  <div class="max-w-6xl mx-auto px-6 py-10 text-center flex flex-col items-center space-y-5">
    <h2 class="text-2xl font-bold">Let’s Connect</h2>

    <div class="flex space-x-4">
      {#each socials as social}
        <a
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          class="p-3 rounded-full transition transform hover:scale-110 bg-gray-100 dark:bg-gray-800"
          aria-label={social.name}
          title={social.name}
          >
          {@html social.svg}
        </a>
      {/each}
    </div>

    <div class="text-sm space-y-1">
      <p class="flex items-center justify-center gap-2">
        <svg class="w-5 h-5 text-black dark:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 8.99V6h16v2.99l-8 4.99-8-4.99z" />
        </svg>
        <a href="mailto:mankars130@gmail.com" class="hover:underline">mankars130@gmail.com</a>
      </p>
      <p class="flex items-center justify-center gap-2">
        <svg class="w-5 h-5 text-black dark:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.74 3.84.74a1 1 0 011 1v3.5a1 1 0 01-1 1c-9.39 0-17-7.61-17-17a1 1 0 011-1h3.5a1 1 0 011 1c0 1.34.26 2.64.74 3.84a1 1 0 01-.21 1.11l-2.2 2.2z" />
        </svg>
        <a href="tel:+919325177342" class="hover:underline">+91 9325177342</a>
      </p>
    </div>

    <p class="text-xs text-gray-500 dark:text-gray-400">© {year} prem0x01. All rights reserved.</p>
  </div>
</footer>

<style>
  

  :global(body) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
