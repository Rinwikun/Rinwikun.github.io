import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const base = process.env.BASE_PATH || '/';

export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || 'https://your-username.github.io',
  base,
  outDir: './dist/public',
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});