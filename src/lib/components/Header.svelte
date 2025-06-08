<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  
  let menuOpen = false;
  let theme = "light";
  let scrollY = 0;
  let headerVisible = true;
  let lastScrollY = 0;
  let headerHovered = false;
  
  const toggleTheme = () => {
    theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", theme === "dark");
    
    // Add a subtle pulse effect when toggling theme
    const button = document.querySelector('[aria-label="Toggle theme"]');
    button?.classList.add('pulse-once');
    setTimeout(() => button?.classList.remove('pulse-once'), 300);
  };

  const closeMenu = () => {
    menuOpen = false;
  };

  // Enhanced scroll behavior
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down - hide header
      headerVisible = false;
    } else {
      // Scrolling up - show header
      headerVisible = true;
    }
    
    lastScrollY = currentScrollY;
    scrollY = currentScrollY;
  };

  onMount(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    theme = savedTheme;
    document.documentElement.classList.toggle("dark", theme === "dark");
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  // Save theme preference
  $: if (typeof window !== 'undefined') {
    localStorage.setItem('theme', theme);
  }

  $: currentPath = $page.url.pathname;

  const navItems = [
    { href: '/about', label: 'About', icon: '' },
    { href: '/skills', label: 'Skills', icon: '' },
    { href: '/projects', label: 'Projects', icon: '' },
    { href: '/contact', label: 'Contact', icon: '' }
  ];

  // Close mobile menu when clicking outside
  const handleOutsideClick = (event) => {
    if (menuOpen && !event.target.closest('header')) {
      closeMenu();
    }
  };
</script>

<svelte:window bind:scrollY on:click={handleOutsideClick} />

<header 
  role="banner"
  class="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out
         {headerVisible || headerHovered || menuOpen ? 'translate-y-0' : '-translate-y-full'}
         {scrollY > 50 ? 'bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-2xl' : 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-md'}
         border-b border-gray-200 dark:border-gray-700"
  on:mouseenter={() => headerHovered = true}
  on:mouseleave={() => headerHovered = false}
>
  <div class="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
    <!-- Logo with enhanced effects -->
    <a href="/about" class="relative group logo-container">
      <div class="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 
                  clip-diagonal z-0 transition-all duration-500 ease-out
                  group-hover:scale-110 group-hover:shadow-xl group-hover:from-gray-900 group-hover:to-black
                  dark:group-hover:from-gray-100 dark:group-hover:to-white"></div>
      <h1 class="relative z-10 pl-6 text-2xl font-bold text-white dark:text-black
                 transition-all duration-300 group-hover:scale-105 group-hover:tracking-wider">
        prem0x01
      </h1>
      <!-- Subtle glow effect -->
      <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  bg-gradient-to-r from-gray-500/20 to-gray-700/20 dark:from-gray-300/20 dark:to-gray-500/20 blur-xl -z-10"></div>
    </a>
    
    <!-- Desktop Navigation with enhanced effects -->
    <nav class="hidden lg:flex items-center space-x-2" role="navigation" aria-label="Main navigation">
      {#each navItems as {href, label, icon}}
        <a
          {href}
          class="relative group px-4 py-2 rounded-lg transition-all duration-300 ease-out
                 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300
                 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:shadow-lg hover:-translate-y-1
                 {currentPath === href ? 'nav-active bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100' : ''}"
          aria-current={currentPath === href ? 'page' : undefined}
        >
          <!-- Icon with animation -->
          <span class="inline-block mr-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
            {icon}
          </span>
          {label}
          
          <!-- Enhanced underline effect -->
          <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-gray-700 to-black dark:from-gray-300 dark:to-white
                       transition-all duration-300 group-hover:w-full group-hover:left-0
                       {currentPath === href ? 'w-full left-0' : ''}"></span>
          
          <!-- Hover glow -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      bg-gradient-to-r from-gray-500/10 to-gray-700/10 dark:from-gray-300/10 dark:to-gray-500/10 rounded-lg blur-sm -z-10"></div>
        </a>
      {/each}
    </nav>

    <!-- Right Controls -->
    <div class="flex items-center space-x-3">
      <!-- Enhanced Theme Toggle -->
      <button
        aria-label="Toggle theme"
        on:click={toggleTheme}
        class="relative p-3 rounded-full transition-all duration-300 ease-out
               hover:bg-gray-100 dark:hover:bg-gray-800
               hover:shadow-lg hover:scale-110 active:scale-95
               {theme === 'dark' ? 'bg-gray-100 dark:bg-gray-800' : 'bg-gray-100 dark:bg-gray-800'}"
      >
        <span class="text-xl transition-all duration-300 hover:rotate-180 inline-block">
          {theme === "dark" ? "☀️" : "🌙"}
        </span>
        <!-- Theme toggle glow -->
        <div class="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300
                    bg-gradient-to-r from-gray-500/20 to-gray-700/20 dark:from-gray-300/20 dark:to-gray-500/20 rounded-full blur-md -z-10"></div>
      </button>

      <!-- Enhanced Mobile Menu Button -->
      <button
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        class="lg:hidden relative p-3 rounded-full transition-all duration-300 ease-out
               hover:bg-gray-100 dark:hover:bg-gray-800
               hover:shadow-lg hover:scale-110 active:scale-95
               {menuOpen ? 'bg-gray-200 dark:bg-gray-700' : ''}"
        on:click={() => menuOpen = !menuOpen}
      >
        <div class="w-6 h-6 flex flex-col justify-center space-y-1.5">
          <span class="block w-6 h-0.5 bg-black dark:bg-white transform transition-all duration-300 ease-out
                     {menuOpen ? 'rotate-45 translate-y-2 bg-gray-700 dark:bg-gray-300' : ''}"></span>
          <span class="block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-out
                     {menuOpen ? 'opacity-0 scale-0' : ''}"></span>
          <span class="block w-6 h-0.5 bg-black dark:bg-white transform transition-all duration-300 ease-out
                     {menuOpen ? '-rotate-45 -translate-y-2 bg-gray-700 dark:bg-gray-300' : ''}"></span>
        </div>
        <!-- Menu button glow -->
        <div class="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300
                    bg-gradient-to-r from-gray-500/20 to-gray-700/20 dark:from-gray-300/20 dark:to-gray-500/20 rounded-full blur-md -z-10"></div>
      </button>
    </div>
  </div>

  <!-- Enhanced Mobile Menu -->
  {#if menuOpen}
    <nav 
      id="mobile-menu"
      class="lg:hidden absolute w-full bg-white/95 dark:bg-black/95 backdrop-blur-2xl 
             shadow-2xl border-t border-gray-200 dark:border-gray-700
             animate-slide-down overflow-hidden"
      role="navigation" 
      aria-label="Mobile navigation"
    >
      <!-- Enhanced backdrop blur overlay -->
      <div class="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-xl"></div>
      
      <div class="relative z-10">
        {#each navItems as {href, label, icon}, index}
          <a
            {href}
            on:click={closeMenu}
            class="group flex items-center py-4 px-6 text-lg transition-all duration-300 ease-out
                   text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300
                   hover:bg-gray-100 dark:hover:bg-gray-800
                   border-b border-gray-200/50 dark:border-gray-700/50
                   hover:shadow-lg hover:pl-8 transform hover:scale-[1.02]
                   {currentPath === href ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-inner' : ''}"
            style="animation-delay: {index * 0.1}s"
            aria-current={currentPath === href ? 'page' : undefined}
          >
            <!-- Icon with stagger animation -->
            <span class="inline-block mr-4 text-2xl transition-all duration-300 
                         group-hover:scale-125 group-hover:rotate-12 group-hover:mr-6">
              {icon}
            </span>
            
            <span class="font-medium tracking-wide transition-all duration-300 group-hover:tracking-wider">
              {label}
            </span>
            
            <!-- Arrow indicator -->
            <span class="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 
                         transform translate-x-2 group-hover:translate-x-0 text-gray-500 dark:text-gray-400">
              →
            </span>
          </a>
        {/each}
        
        <!-- Mobile menu footer with close hint -->
        <div class="py-3 px-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200/50 dark:border-gray-700/50">
          <span class="opacity-70">Tap outside to close</span>
        </div>
      </div>
    </nav>
  {/if}
</header>

<style>
  @keyframes slide-down {
    from {
      transform: translateY(-2rem);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes pulse-once {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .animate-slide-down {
    animation: slide-down 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .pulse-once {
    animation: pulse-once 0.3s ease-out forwards;
  }

  .clip-diagonal {
    clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);
  }

  .nav-active {
    font-weight: 600;
    position: relative;
  }

  .nav-active::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.1));
    border-radius: 0.5rem;
    z-index: -1;
  }

  .dark .nav-active::before {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1));
  }

  /* Enhanced logo hover effects */
  .logo-container:hover .clip-diagonal {
    transform: scale(1.1) translateX(0.5rem);
    filter: brightness(1.2) saturate(1.5);
  }

  /* Smooth transitions for all interactive elements */
  a, button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Custom scrollbar for mobile menu if needed */
  nav::-webkit-scrollbar {
    width: 4px;
  }

  nav::-webkit-scrollbar-track {
    background: transparent;
  }

  nav::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }

  .dark nav::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
  }

  /* Enhanced mobile menu item animations */
  .lg\:hidden nav a {
    animation: slide-down 0.4s cubic-bezier(0.4, 0, 0.2, 1) both;
  }

  /* Responsive enhancements */
  @media (max-width: 768px) {
    .clip-diagonal {
      clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
    }
  }

  /* Focus styles for accessibility */
  button:focus, a:focus {
    outline: 2px solid rgba(0, 0, 0, 0.5);
    outline-offset: 2px;
  }

  .dark button:focus, .dark a:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
  }

  /* Reduce motion for users who prefer it */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
</style>