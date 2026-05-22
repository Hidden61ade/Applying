// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://portfolio.hiddenblade.net',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    // Astro View Transitions ship as stable; kept here only as a placeholder.
  },
});
