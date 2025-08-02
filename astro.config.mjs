import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  sitemap: true,
  site: 'https://matsuverse.gitlab.io/',
  outDir: 'dist',
  publicDir: 'static',
});
