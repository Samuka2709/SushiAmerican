import { defineConfig } from 'astro/config';
import { restaurant } from './src/data/restaurant.ts';

// Endereço público usado no canonical, no Open Graph e no schema.org:
// domínio do cliente (restaurant.siteUrl) ou, se vazio, o domínio de produção da Vercel.
// Fora da produção (ex.: branch italiano), usa o endereço fixo da própria branch,
// para a imagem de compartilhamento sair da mesma versão do site.
const env = process.env;
const vercelUrl = env.VERCEL_ENV === 'production' ? env.VERCEL_PROJECT_PRODUCTION_URL : env.VERCEL_BRANCH_URL || env.VERCEL_URL;
const site = restaurant.siteUrl || (vercelUrl ? `https://${vercelUrl}` : 'http://localhost:4321');

// CSS embutido no HTML: uma requisição a menos antes da primeira pintura
export default defineConfig({ site, build: { inlineStylesheets: 'always' } });
