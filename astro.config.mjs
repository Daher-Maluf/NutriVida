// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  adapter: vercel({
    analytics: true,
    imageService: true,
    imagesConfig: {
      sizes: [640, 750, 828, 1080, 1200],
      domains: ['source.unsplash.com'],
      formats: ['image/webp', 'image/avif'],
    },
  })
});
