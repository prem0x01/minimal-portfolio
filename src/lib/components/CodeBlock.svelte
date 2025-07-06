<script lang="ts">
    export let code: string;
    export let language: string = "";

    let copied = false;

    async function copyCode() {
        try {
            await navigator.clipboard.writeText(code);
            copied = true;
            setTimeout(() => (copied = false), 2000);
        } catch (err) {
            console.error("Failed to copy code:", err);
        }
    }
</script>

<div class="relative bg-gray-200 rounded border my-4">
    <div class="flex justify-between items-center px-4 py-2 border-b">
        <span class="text-sm text-black">{language}</span>
        <button
            on:click={copyCode}
            class="text-sm px-2 text-black py-1 bg-gray-200 hover:bg-gray-300 rounded"
        >
            {copied ? "Copied!" : "Copy"}
        </button>
    </div>
    <pre class="p-4 dark:text-black overflow-x-auto "><code>{code}</code></pre>
</div>
