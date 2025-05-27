<script>
  let menuOpen = false;
  let theme = "light";

  const toggleTheme = () => {
    theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", theme === "dark");
  };
</script>

<header class="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border border-black dark:border-white shadow-md transition-all duration-300">
  <div class="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
    <div class="relative">
  <div class="absolute inset-y-0 left-0 w-32 bg-black dark:bg-white clip-diagonal z-0"></div>
  <h1 class="relative z-10 pl-6 text-2xl font-bold text-white dark:text-black hover:scale-105 transition-transform duration-300">
    prem0x01
  </h1>
</div>



    <!-- Desktop nav -->
    <nav class="hidden lg:flex items-center space-x-8 text-lg">
      <a href="#about" class="text-black dark:text-white hover:text-gray-500">About</a>
      <a href="#skills" class="text-black dark:text-white hover:text-gray-500">Skills</a>
      <a href="#projects" class="text-black dark:text-white hover:text-gray-500">Projects</a>
      <a href="#contact" class="text-black dark:text-white hover:text-gray-500">Contact</a>
    </nav>

    <!-- Right controls -->
    <div class="flex items-center space-x-4">
      <!-- Theme toggle -->
      <button
        aria-label="Toggle theme"
        on:click={toggleTheme}
        class="text-xl text-black dark:text-white hover:scale-110 transition"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

      <!-- Hamburger menu -->
      <button
        aria-label="Toggle navigation menu"
        class="lg:hidden focus:outline-none"
        on:click={() => menuOpen = !menuOpen}
      >
        <div class="space-y-1.5">
          <span class={`block w-6 h-0.5 bg-black dark:bg-white transform transition ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span class={`block w-6 h-0.5 bg-black dark:bg-white transition ${menuOpen ? "opacity-0" : ""}`}></span>
          <span class={`block w-6 h-0.5 bg-black dark:bg-white transform transition ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </div>
      </button>
    </div>
  </div>

  <!-- Mobile menu -->
  {#if menuOpen}
    <nav class="lg:hidden px-4 pb-4 pt-2 bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md space-y-3 animate-slide-down text-center">
      <a href="#about" on:click={() => menuOpen = false} class="block text-lg text-black dark:text-white">About</a>
      <a href="#skills" on:click={() => menuOpen = false} class="block text-lg text-black dark:text-white">Skills</a>
      <a href="#projects" on:click={() => menuOpen = false} class="block text-lg text-black dark:text-white">Projects</a>
      <a href="#contact" on:click={() => menuOpen = false} class="block text-lg text-black dark:text-white">Contact</a>
    </nav>
  {/if}
</header>

<style>
  @keyframes slide-down {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .animate-slide-down {
    animation: slide-down 0.3s ease-out;
  }

  /* Extended diagonal clip for background behind logo */
.clip-diagonal {
  clip-path: polygon(0 0, 100% 0, 70% 100%, 0% 100%);
  width: 200px;
}

/* Hover underline animation for nav links */
nav a {
  position: relative;
  transition: color 0.3s ease;
}

nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0%;
  height: 2px;
  background: currentColor;
  transition: width 0.3s ease;
}

nav a:hover::after {
  width: 100%;
}

</style>
