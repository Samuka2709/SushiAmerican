import { defineConfig } from 'astro/config';
import { restaurant } from './src/data/restaurant.ts';

export default defineConfig({
  site: restaurant.siteUrl,
});
