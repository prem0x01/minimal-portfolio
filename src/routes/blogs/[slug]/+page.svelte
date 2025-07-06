<script lang="ts">
    import BlogPost from "$lib/components/BlogPost.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>{data.post.title}</title>
    <meta name="description" content={data.post.description} />
</svelte:head>

<nav class="mb-8">
    <a href="/blogs" class="text-gray-600 hover:text-black transition-colors"
        >← Back to Blog</a
    >
</nav>

<BlogPost post={data.post} content={data.content} />
