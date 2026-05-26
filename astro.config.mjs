import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://Victopvl.github.io',
  base: '/imprenta-web-b2b/',
  integrations: [tailwind()]
});
