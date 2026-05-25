// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. Reemplaza con tu nombre de usuario de GitHub
  site: 'https://victopvl.github.io',
  
  // 2. Reemplaza con el nombre exacto de tu repositorio (mantén las barras / adelante y atrás)
  base: '/imprenta-web-b2b/',

  vite: {
    plugins: [tailwindcss()]
  }
});