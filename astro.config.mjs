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
          label: 'Foundations',
          items: [
            { label: 'Overview', slug: 'components/overview' },
            { label: 'Tokens defition', slug: 'components/modal' },
            { label: 'Color', slug: 'components/popover' },
            { label: 'Typography', slug: 'components/popover' },
            { label: 'Corner radius', slug: 'components/popover' },
            { label: 'Borders', slug: 'components/popover' },
            { label: 'Size', slug: 'components/popover' },
            { label: 'Grid System', slug: 'components/popover' },
            { label: 'Elevations', slug: 'components/popover' },
            { label: 'Focus ring', slug: 'components/popover' },
            { label: 'Icons', slug: 'components/popover' },
            { label: 'Assets', slug: 'components/popover' },
          ],
        },
        {
          label: 'Components',
          items: [
            { label: 'Overview', slug: 'components/overview' },
            { label: 'Acordion', slug: 'components/modal' },
            { label: 'action Group', slug: 'components/modal' },
            { label: 'Anchor Menu', slug: 'components/modal' },
            { label: 'Asset Link', slug: 'components/modal' },
            { label: 'Avatar', slug: 'components/modal' },
            { label: 'Badges', slug: 'components/modal' },
            { label: 'Button', slug: 'components/modal' },
            { label: 'Breadcrumbs', slug: 'components/modal' },
            { label: 'Cards', slug: 'components/modal' },
            { label: 'Chip', slug: 'components/modal' },
            { label: 'Color Picker', slug: 'components/modal' },
            { label: 'Contextual Menu', slug: 'components/modal' },
            { label: 'Counter', slug: 'components/modal' },
            { label: 'Divider', slug: 'components/modal' },
            { label: 'Empty State', slug: 'components/modal' },
            { label: 'File Uploader', slug: 'components/modal' },
            { label: 'Inline Notification', slug: 'components/modal' },
            { label: 'Link', slug: 'components/modal' },
            { label: 'List', slug: 'components/modal' },
            { label: 'Modal', slug: 'components/modal' },
            { label: 'Paginator', slug: 'components/popover' },
            { label: 'Password', slug: 'components/popover' },
            { label: 'Progreess Indicator', slug: 'components/popover' },
            { label: 'Quantity Selector', slug: 'components/popover' },
            { label: 'Radio Button', slug: 'components/popover' },
            { label: 'Ratings & Reviews', slug: 'components/popover' },
            { label: 'Search', slug: 'components/popover' },
            { label: 'Segmented Control', slug: 'components/popover' },
            { label: 'Select', slug: 'components/popover' },
            { label: 'Selectiong Card', slug: 'components/popover' },
            { label: 'Sheet', slug: 'components/popover' },
            { label: 'Slider', slug: 'components/popover' },
            { label: 'Stepper', slug: 'components/popover' },
            { label: 'Sticyvar', slug: 'components/popover' },
            { label: 'Stock indicator', slug: 'components/popover' },
            { label: 'Slider Controlbar', slug: 'components/popover' },
            { label: 'Tag', slug: 'components/popover' },
            { label: 'Toggle', slug: 'components/popover' },
            { label: 'Tag', slug: 'components/popover' },
            { label: 'Text Box', slug: 'components/popover' },
            { label: 'Text Area', slug: 'components/popover' },
            { label: 'Thumbnails', slug: 'components/popover' },
          ],
        },
        {
          label: 'Patterns',
          items: [
            { label: 'Quick Filters', slug: 'patterns/overview' },
            { label: 'Filterbar', slug: 'patterns/overview' },
            { label: 'Popover', slug: 'patterns/overview' },
          ],
        },
        {
          label: 'Templates',
          items: [
            { label: 'Overview', slug: 'patterns/overview' },
            { label: 'PDP page', slug: 'patterns/overview' },
            { label: 'PLP page', slug: 'patterns/overview' },
          ],
        },
      ],
      components: {
        SiteTitle: "./src/components/CustomSiteTitle.astro",
        SocialIcons: "./src/components/SocialIcons.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro"

      }
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
