import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

import tailwind from "@astrojs/tailwind";

import htmx from 'astro-htmx';

// https://astro.build/config
export default defineConfig({
  site: 'https://francisricle.github.io',
  base: '/',
  integrations: [preact(), tailwind(), htmx()]
});
