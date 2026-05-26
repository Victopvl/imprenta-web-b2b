import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://Victopvl.github.io',
  base: '/imprenta-web-b2b/',
  integrations: [tailwind()]
});