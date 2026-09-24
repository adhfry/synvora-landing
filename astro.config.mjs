// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://synvorateknologiindonesia.web.id',
  // Marketing pages still prerender to static HTML by default (output stays
  // 'static'); only routes that opt out with `export const prerender = false`
  // (the /api/* email endpoints) run through this adapter on the VPS's Node
  // process at request time.
  adapter: node({ mode: 'standalone' }),
  integrations: [sitemap()],
  // The Node standalone server sits behind an nginx TLS-terminating reverse
  // proxy and has no way to see that the original request was HTTPS (the
  // @astrojs/node adapter derives protocol from the raw socket, not
  // X-Forwarded-Proto). That makes Astro's same-origin POST check compare
  // "https://..." (browser Origin header) against "http://..." (what Node
  // thinks its own origin is) and reject every form submission with
  // "Cross-site POST form submissions are forbidden". The /api/* routes are
  // already protected by Cloudflare Turnstile + a honeypot field and don't
  // rely on cookie-based sessions, so this check is redundant here.
  security: {
    checkOrigin: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
