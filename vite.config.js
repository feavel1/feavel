import { sveltekit } from '@sveltejs/kit/vite';
import { paraglide } from '@inlang/paraglide-js-adapter-sveltekit/vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/paraglide'
		}),
		purgeCss({
			safelist: {
				// any selectors that begin with "hljs-" will not be purged
				greedy: [/^hljs-/]
			}
		})
	]
});
