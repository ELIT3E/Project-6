import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: 'AUEOvz3RIoHPNPON3EEiCQtt', // Ihr Token
      components: {
        'Page': 'src/layouts/Page.astro',
        'Welcome': 'src/components/Welcome.astro',
      },
    }),
  ],
});