import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite'
import relativeLinks from 'astro-relative-links';

export default defineConfig({
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [react(), relativeLinks()],
  vite: {
    plugins: [tailwindcss()],
  },
});