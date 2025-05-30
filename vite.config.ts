import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        allowedHosts: [
            'd462-2401-4900-8fca-ffb2-b875-f7b6-9a39-6362.ngrok-free.app'
        ]
    }
});
