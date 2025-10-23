// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Orion UI Library',
      logo: {
        src: './src/assets/images/logo.svg'
      },
      customCss: [
        // Path to your Tailwind base styles:
        './src/styles/global.css',
      ],
      sidebar: [
        {
          label: 'Components',
          items: [
            { label: 'Overview', slug: 'components/overview' },
            { label: 'Modal', slug: 'components/modal' },
            { label: 'Popover', slug: 'components/popover' },
          ],
        },
        {
          label: 'Patterns',
          items: [
            { label: 'Overview', slug: 'patterns/overview' },
          ],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
