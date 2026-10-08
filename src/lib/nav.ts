import { pathFor, type Locale } from '../i18n/routes';
import { t } from '../i18n/ui';

export interface NavItem {
  key: string;
  label: string;
  href: string;
}

// `key` stays identical across languages (used to highlight the active
// page via the `active` prop), only `label`/`href` are localized.
export function getNavItems(locale: Locale): NavItem[] {
  const nav = t(locale).nav;
  return [
    { key: 'beranda', label: nav.home, href: pathFor('home', locale) },
    { key: 'tentang-kami', label: nav.about, href: pathFor('about', locale) },
    { key: 'layanan', label: nav.services, href: pathFor('services', locale) },
    { key: 'portfolio', label: nav.portfolio, href: pathFor('portfolio', locale) },
    { key: 'karier', label: nav.careers, href: pathFor('careers', locale) },
    { key: 'blog', label: nav.blog, href: pathFor('blog', locale) },
  ];
}

// Kept for any lingering Indonesian-only callers during the migration -
// equivalent to getNavItems('id').
export const NAV_ITEMS: NavItem[] = getNavItems('id');
