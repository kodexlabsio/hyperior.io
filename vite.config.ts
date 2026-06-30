import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import htmlMinifier from 'vite-plugin-html-minifier-terser';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        svelte(),
        htmlMinifier({
            collapseWhitespace: true,
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
        }),
    ],
});
