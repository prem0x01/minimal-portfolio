<!-- src/routes/blog/[slug]/+error.svelte -->
<script lang="ts">
    import { page } from "$app/stores";
</script>

const errorPage = `
<div
    class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center"
>
    <div class="text-center">
        <h1 class="text-6xl font-bold mb-4">404</h1>
        <h2 class="text-2xl font-semibold mb-4">Blog Post Not Found</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-8">
            The blog post you're looking for doesn't exist.
        </p>
        <a
            href="/blog"
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
            Back to Blog
        </a>
    </div>
</div>
`; export {(blogListPage, blogPostPage, errorPage)};
