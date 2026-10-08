// Route equivalence map: every public page's Indonesian path <-> English
// path. Slugs genuinely differ per language (tentang-kami/about,
// layanan/services, etc.), so this is a hand-maintained table rather than
// Astro's built-in same-slug i18n routing. Both the language switcher and
// each page's hreflang/canonical tags read from this single source so they
// never drift apart.
export const LOCALES = ['id', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'id';

// Keys are a stable route id, NOT the path itself, so renaming a slug later
// only touches one line here.
export const ROUTES: Record<string, { id: string; en: string }> = {
  home: { id: '/', en: '/en/' },
  about: { id: '/tentang-kami', en: '/en/about' },
  services: { id: '/layanan', en: '/en/services' },
  portfolio: { id: '/portfolio', en: '/en/portfolio' },
  careers: { id: '/karier', en: '/en/careers' },
  contact: { id: '/hubungi-kami', en: '/en/contact' },
  // No standalone English consultation-form page exists yet - its nearest
  // equivalent is the Contact page, so hreflang/the switcher point there
  // instead of a route that doesn't exist.
  consultation: { id: '/konsultasi-gratis', en: '/en/contact' },
  blog: { id: '/blog', en: '/en/blog' },
  privacy: { id: '/kebijakan-privasi', en: '/en/privacy-policy' },
  terms: { id: '/syarat-ketentuan', en: '/en/terms-of-service' },
  cookies: { id: '/kebijakan-cookie', en: '/en/cookie-policy' },
};

// For a page identified by routeKey, get the equivalent path in the other
// locale - used by the language switcher and hreflang tags.
export function alternatePath(routeKey: string, targetLocale: Locale): string | null {
  const entry = ROUTES[routeKey];
  if (!entry) return null;
  return entry[targetLocale];
}

export function pathFor(routeKey: string, locale: Locale): string {
  const entry = ROUTES[routeKey];
  if (!entry) return locale === 'en' ? '/en/' : '/';
  return entry[locale];
}

// Blog articles aren't in ROUTES (one entry per slug would duplicate the
// blogPosts data) - their alternate path is derived directly from the slug.
export function blogPostPath(slug: string, locale: Locale): string {
  return locale === 'en' ? `/en/blog/${slug}` : `/blog/${slug}`;
}
