<script lang="ts">
    import type { BlogPost } from "../types/blog";
    import { formatDate } from "../utils/blog";

    export let post: BlogPost;
</script>

<a
    href={`/blogs/${post.slug}`}
    class="flex flex-col justify-between h-full border bg-white
    dark:bg-[#1a1a1a] border-black rounded p-6 dark:border-white
    transition-colors"
>
    <div>
        <h3 class="text-xl font-semibold mb-2 dark:text-white">{post.title}</h3>

        <!-- Truncated description -->
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {post.description}
        </p>
    </div>

    <div class="flex flex-col gap-3 mt-auto">
        <div
            class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400"
        >
            <span>{formatDate(post.date)}</span>
            <span>{post.readTime} min read</span>
        </div>

        {#if post.tags.length > 0}
            <div class="flex flex-wrap gap-2">
                {#each post.tags as tag}
                    <span
                        class="bg-gray-300 text-black text-xs px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
                    >
                        {tag}
                    </span>
                {/each}
            </div>
        {/if}
    </div>
</a>
