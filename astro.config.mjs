// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Design System Docs',
      customCss: [
        // Path to your Tailwind base styles:
        './src/styles/global.css',
      ],
      social: [
        { icon: 'x.com', label: 'X', href: 'https://x.com' },
        { icon: 'facebook', label: 'Facebook', href: 'https://facebook.com' },
        { icon: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
      ],
      sidebar: [
        {
          label: 'Components',
          items: [
            { label: 'Overview', slug: 'components/overview' },
            { label: 'Ation bar', slug: 'components/actionbar' },
            { label: 'Banner', slug: 'components/banner' },
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
