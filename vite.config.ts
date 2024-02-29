import { sveltekit } from '@sveltejs/kit/vite';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite'; // Use 'vite' instead of 'vitest'

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	build: {
		rollupOptions: {
			input: {
				background: fileURLToPath(new URL('./src/service-worker.ts', import.meta.url))
			}
		}
	}
});
