<script>
  import Icon from '@iconify/svelte';

  const year = new Date().getFullYear();

  const socials = [
    { name: 'GitHub', link: 'https://github.com/prem0x01', icon: 'mdi:github' },
    { name: 'LinkedIn', link: 'https://linkedin.com/in/prem0x01', icon: 'mdi:linkedin' },
    { name: 'X', link: 'https://x.com/prem0x01', icon: 'ri:twitter-x-line' }
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
        >
          <Icon icon={social.icon} class="w-6 h-6 text-black dark:text-white" />
         
          
        </a>
      {/each}
    </div>

    <div class="text-sm space-y-1">
      <p class="flex items-center justify-center gap-2">
        <Icon icon="mdi:email" class="text-black" />
        <a href="mailto:mankars130@gmail.com" class="hover:underline">mankars130@gmail.com</a>
      </p>
      <p class="flex items-center justify-center gap-2">
        <Icon icon="mdi:phone" class="text-black" />
        <a href="tel:+919325177342" class="hover:underline">+91 9325177342</a>
      </p>
    </div>

    <p class="text-xs text-gray-500 dark:text-gray-400">© {year} prem0x01. All rights reserved.</p>
  </div>
</footer>

<style>
  html, body {
    height: 100%;
  }

  :global(body) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
