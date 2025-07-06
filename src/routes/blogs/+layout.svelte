<script lang="ts">
    import { page } from "$app/stores";
</script>

<div class="min-h-screen bg-white dark:bg-[#111111]">
    <div class="max-w-6xl mx-auto px-4">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
                <a
                    href="/blogs"
                    class="text-gray-600 hover:text-black transition-colors"
                    class:text-black={$page.url.pathname === "/blogs"}
                >
                </a>
            </div>
        </div>
    </div>

    <main class="max-w-6xl mx-auto px-4 py-8">
        <slot />
    </main>
</div>
