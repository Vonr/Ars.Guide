import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  // output: 'server',
  site: 'https://ars.guide',
  integrations: [mdx(), react(), purgecss()],
});
