import { defineConfig, squooshImageService } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService()
  },
  integrations: [sitemap(), react(), tailwind()]
});