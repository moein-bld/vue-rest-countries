import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		emptyOutDir: true,
		lib: {
			entry: 'src/main.ts',
			formats: ['es'],
			name: 'UiLib',
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					Vue: 'vue',
				},
			},
		},
	},
	plugins: [vue(), dts()],
});
