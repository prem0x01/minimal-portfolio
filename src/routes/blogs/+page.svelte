<script lang="ts">
    import BlogCard from "$lib/components/BlogCard.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Blog</title>
    <meta name="description" content="My blog posts" />
</svelte:head>

<!-- Full page wrapper with grid background -->
<div
    class="relative min-h-screen py-20 px-6 bg-white dark:bg-[#111111] dark:text-white transition-colors duration-300 overflow-hidden"
>
    <!-- Grid background (full height, behind content) -->
    <div
        class="absolute inset-0 grid grid-cols-12 gap-2 opacity-10 pointer-events-none z-0"
    >
        {#each Array(12) as _, i}
            <div class="h-full border-r border-current"></div>
        {/each}
    </div>

    <!-- Main content, above grid -->
    <div class="relative z-10 max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-center mb-12">Blogs</h1>

        {#if data.posts.length > 0}
            <div class="grid gap-10">
                {#each data.posts as post}
                    <!-- Wrapped to isolate BlogCard from grid background -->
                    <div class="relative z-10">
                        <BlogCard {post} />
                    </div>
                {/each}
            </div>
        {:else}
            <p class="text-center text-gray-600 dark:text-gray-400">
                No blog posts yet.
            </p>
        {/if}
    </div>
</div>
