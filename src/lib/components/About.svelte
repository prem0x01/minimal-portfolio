<script>
  import { onMount } from 'svelte';
  let typed = '';
  const text = "Clean code, clean UI, and no unnecessary small talk. I build digital experiences that are fast, functional, and sometimes even fun. If you're looking for someone who blends logic with a little chaos — you're in the right place. Whether it’s a slick front-end, a robust backend, or a full system that just works — I deliver with precision. No buzzwords, no fluff. Just well-crafted solutions that speak louder than a thousand meetings.";
  
  onMount(() => {
    let i = 0;
    const interval = setInterval(() => {
      typed = text.slice(0, i);
      i++;
      if (i > text.length) clearInterval(interval);
    }, 50);
  });
</script>

<section class="w-full min-h-screen flex flex-col justify-center items-center bg-gray text-black px-6 dark:bg-[#111111] dark:text-white transition-colors duration-300 relative overflow-hidden">
  <!-- Background Grid Effect -->
  <div class="absolute inset-0 grid grid-cols-12 gap-2 opacity-10 pointer-events-none">
    {#each Array(12) as _, i}
      <div class="h-full border-r border-current"></div>
    {/each}
  </div>

  <div class="max-w-7xl w-full grid md:grid-cols-2 gap-8 items-center relative z-10">
    <!-- Left Side: Text -->
    <div class="flex flex-col justify-center">
      <h2 class="text-5xl md:text-5xl font-bold mb-4"> Hey there, I'm Prem 👋</h2>
       
      <p class="text-lg md:text-xl text-black-300 mb-6 leading-relaxed typewriter-text">
        {typed}
      </p>
      <p class="text-md md:text-lg text--400 border-l-2 border-current pl-4 animate-pulse">
        Always learning. Always building. Always dreaming.
      </p>
    </div>

    <!-- Right Side: Image -->
    <div class="flex justify-center relative">
      <img 
        src="/assets/prem.png" 
        alt="Prem Mankar" 
        class="max-w-xs md:max-w-4xl relative z-10 hover:scale-105 transition-transform duration-300" 
      />
    </div>
  </div>
</section>

<style>
  .animate-wave {
    animation: wave 2s infinite;
  }

  @keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(20deg); }
  }

  .typewriter-text {
    border-right: 2px solid currentColor;
    animation: blink 0.75s step-end infinite;
  }

  @keyframes blink {
    from, to { border-color: transparent }
    50% { border-color: currentColor; }
  }
</style>
