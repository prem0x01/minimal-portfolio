<script lang="ts">
    import type { BlogPost } from "../types/blog";
    import { formatDate } from "../utils/blog";
    import { parseMarkdown } from "../utils/markdown";
    import CodeBlock from "./CodeBlock.svelte";

    export let post: BlogPost;
    export let content: string;

    $: parsed = parseMarkdown(content);
    $: parsedContent = parsed.html;
    $: codeBlocks = parsed.codeBlocks;
</script>

<article class="max-w-4xl mx-auto">
    <header class="mb-8">
        <h1 class="text-3xl font-bold dark:text-white mb-4">{post.title}</h1>
        <div class="flex items-center gap-4 text-gray-600 mb-4">
            <time>{formatDate(post.date)}</time>
            <span>{post.readTime} min read</span>
        </div>
        {#if post.tags.length > 0}
            <div class="flex flex-wrap gap-2">
                {#each post.tags as tag}
                    <span class="bg-gray-300 px-3 py-1 rounded text-sm"
                        >{tag}</span
                    >
                {/each}
            </div>
        {/if}
    </header>

    <div class="prose max-w-none dark:text-white">
        {#each parsedContent.split('<div data-code-placeholder="') as part, i}
            {#if i === 0}
                {@html part}
            {:else}
                {@const placeholderEnd = part.indexOf('"></div>')}
                {@const placeholder = part.substring(0, placeholderEnd)}
                {@const afterPlaceholder = part.substring(placeholderEnd + 8)}
                {@const codeBlock = codeBlocks.find(
                    (cb) => cb.placeholder === placeholder,
                )}

                {#if codeBlock}
                    <CodeBlock
                        code={codeBlock.code}
                        language={codeBlock.language}
                    />
                {/if}
                {@html afterPlaceholder}
            {/if}
        {/each}
    </div>
</article>
