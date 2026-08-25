// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { portfolioMarkdownEmbeds } from './src/lib/portfolio-markdown-embeds.mjs';

export default defineConfig({
  site: 'https://hidden61ade.com',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [portfolioMarkdownEmbeds],
  },
  experimental: {
    // Astro View Transitions ship as stable; kept here only as a placeholder.
  },
});
