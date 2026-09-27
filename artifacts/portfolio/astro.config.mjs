import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const base = process.env.BASE_PATH || '/';
const port = process.env.PORT ? Number(process.env.PORT) : 4321;

export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || 'https://your-username.github.io',
  base,
  outDir: './dist/public',
  server: {
    host: true,
    port,
  },
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});