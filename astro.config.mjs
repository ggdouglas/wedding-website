import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://kristenandgreg.wedding',
  integrations: [tailwind(), image(), sitemap(), compress()],
});
