// // @ts-check
// import { defineConfig } from 'astro/config';

// import tailwindcss from '@tailwindcss/vite';

// import mdx from '@astrojs/mdx';

// // https://astro.build/config
// export default defineConfig({
//   vite: {
//     plugins: [tailwindcss(), mdx()]
//   }
// });

// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
});

