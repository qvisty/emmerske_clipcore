import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://qvisty.github.io',
  base: '/emmerske_clipcore',
  output: 'static',
});
