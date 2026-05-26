import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Victopvl.github.io',
  base: '/imprenta-web-b2b/',
  vite: {
    plugins: [tailwindcss()]
  }
});