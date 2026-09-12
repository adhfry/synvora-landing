export interface NavItem {
  key: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { key: 'beranda', label: 'Beranda', href: '/' },
  { key: 'tentang-kami', label: 'Tentang Kami', href: '/tentang-kami' },
  { key: 'layanan', label: 'Layanan', href: '/layanan' },
  { key: 'portfolio', label: 'Portfolio', href: '/portfolio' },
  { key: 'karier', label: 'Karier', href: '/karier' },
  { key: 'blog', label: 'Blog', href: '/blog' },
];
