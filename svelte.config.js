import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
    // GitHub Pages를 위한 base path 설정
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/forest' : ''
    }
	}
};

export default config;
