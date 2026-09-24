export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  // Optional shorter, search-result-friendly description (~155 chars) for
  // <meta name="description">, og:description, and twitter:description.
  // Falls back to excerpt when omitted - only needed when excerpt runs long.
  metaDescription?: string;
  image: string;
  category: string;
  tags: string[];
  author: string;
  authorImage?: string;
  publishedAt: string;
  publishedDisplay: string;
  readTime: string;
}

// Ordered by publishedAt descending - index 0 is the most recent post and
// drives both the "featured" slot on /blog and the "latest" slices used
// across the blog listing and the topics page.
export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'bbm-belajar-bahasa-madura-inovasi-synvora',
    title: 'Kenalkan BBM: Inovasi Kedua SYNVORA yang Bawa Bahasa Madura ke Era Digital',
    excerpt:
      'Setelah SEP, SYNVORA menghadirkan inovasi kedua: BBM (Belajar Bahasa Madura), platform kamus, penerjemah, dan modul belajar berjenjang yang sudah dipakai puluhan siswa, guru, hingga dosen, sekaligus membangun fondasi text-to-speech Bahasa Madura pertama.',
    metaDescription:
      'BBM: platform kamus, penerjemah, dan modul belajar Bahasa Madura berjenjang dari SYNVORA, dipakai puluhan siswa hingga dosen di Sumenep.',
    image: '/images/blog/Landing-BBM.png',
    category: 'Berita',
    tags: ['Berita', 'Pendidikan', 'Bahasa Daerah', 'BBM', 'Inovasi'],
    author: 'Ahda Firly Barori',
    authorImage: '/images/team/Ahda-Jas.png',
    publishedAt: '2026-09-24',
    publishedDisplay: '24 September 2026',
    readTime: '8 menit baca',
  },
  {
    slug: 'synvora-anugerah-inovasi-daerah-2026-sep-smart-event-sumenep',
    title: 'SYNVORA Wakili Kategori Masyarakat di Anugerah Inovasi Daerah 2026, Perkenalkan SEP',
    excerpt:
      'Tim SYNVORA resmi mengikuti Anugerah Inovasi Daerah (AID) 2026 yang digelar BRIDA Kabupaten Sumenep lewat kategori masyarakat. Inovasi pertama yang diusung: SEP (Smart Event Sumenep), platform cerdas yang mengubah cara daerah memantau dampak setiap event budaya dan pariwisata.',
    metaDescription:
      'SYNVORA ikut Anugerah Inovasi Daerah 2026 BRIDA Sumenep lewat SEP (Smart Event Sumenep), platform pemantau dampak event budaya dan pariwisata.',
    image: '/images/blog/Madura-Night-Vaganza.jpg',
    category: 'Berita',
    tags: ['Berita', 'Inovasi Daerah', 'SEP', 'BRIDA', 'Sistem Informasi'],
    author: 'Ahda Firly Barori',
    authorImage: '/images/team/Ahda-Jas.png',
    publishedAt: '2026-09-24',
    publishedDisplay: '24 September 2026',
    readTime: '8 menit baca',
  },
  {
    slug: '5-tips-membangun-aplikasi-web-yang-user-friendly',
    title: '5 Tips Membangun Aplikasi Web yang User-Friendly',
    excerpt:
      'Pengalaman pengguna (UX) yang baik adalah kunci keberhasilan sebuah aplikasi. Berikut beberapa hal yang perlu diperhatikan.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200&h=630',
    category: 'Tips & Tutorial',
    tags: ['UX/UI', 'Aplikasi Web', 'Tips & Tutorial', 'Pengembangan Produk'],
    author: 'Tim Pengembang',
    publishedAt: '2026-09-23',
    publishedDisplay: '23 September 2026',
    readTime: '7 menit baca',
  },
  {
    slug: 'digitalisasi-layanan-laboratorium-lebih-cepat-lebih-akurat',
    title: 'Digitalisasi Layanan Laboratorium: Lebih Cepat, Lebih Akurat',
    excerpt:
      'Transformasi digital di laboratorium membantu meningkatkan akurasi hasil, efisiensi proses, dan kepuasan pengguna layanan.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200&h=630',
    category: 'Kesehatan',
    tags: ['Kesehatan', 'Laboratorium', 'Digitalisasi', 'Sistem Informasi'],
    author: 'Tim SYNVORA',
    publishedAt: '2026-09-15',
    publishedDisplay: '15 September 2026',
    readTime: '6 menit baca',
  },
  {
    slug: 'solusi-digital-untuk-pemerintahan-yang-lebih-transparan',
    title: 'Solusi Digital untuk Pemerintahan yang Lebih Transparan',
    excerpt:
      'Teknologi informasi berperan penting dalam mewujudkan tata kelola pemerintahan yang efektif, transparan, dan berorientasi pada masyarakat.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200&h=630',
    category: 'Pemerintahan',
    tags: ['Pemerintahan', 'Transparansi', 'Sistem Informasi', 'Tata Kelola Digital'],
    author: 'Ahda Firly Barori',
    authorImage: '/images/team/Ahda-Jas.png',
    publishedAt: '2026-09-11',
    publishedDisplay: '11 September 2026',
    readTime: '5 menit baca',
  },
  {
    slug: 'berkembang-bersama-budaya-kerja-di-synvora',
    title: 'Berkembang Bersama: Budaya Kerja di SYNVORA',
    excerpt:
      'Di SYNVORA, kami percaya bahwa lingkungan kerja yang positif mendorong lahirnya inovasi. Kenali lebih dekat budaya kerja kami.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200&h=630',
    category: 'Karier',
    tags: ['Karier', 'Budaya Kerja', 'SYNVORA', 'Tim'],
    author: 'Tim SYNVORA',
    publishedAt: '2026-09-07',
    publishedDisplay: '7 September 2026',
    readTime: '4 menit baca',
  },
  {
    slug: 'peran-ai-dalam-transformasi-digital-organisasi',
    title: 'Peran AI dalam Transformasi Digital Organisasi',
    excerpt:
      'Kecerdasan buatan bukan lagi sekadar tren, tetapi sudah menjadi kebutuhan strategis dalam meningkatkan efisiensi dan kualitas layanan publik maupun bisnis.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200&h=630',
    category: 'Teknologi',
    tags: ['Artificial Intelligence', 'Transformasi Digital', 'Inovasi', 'Teknologi', 'Organisasi'],
    author: 'Ahda Firly Barori',
    authorImage: '/images/team/Ahda-Jas.png',
    publishedAt: '2026-09-06',
    publishedDisplay: '6 September 2026',
    readTime: '5 menit baca',
  },
  {
    slug: 'membangun-sistem-informasi-yang-berkelanjutan',
    title: 'Membangun Sistem Informasi yang Berkelanjutan',
    excerpt:
      'Keberhasilan sistem informasi tidak hanya ditentukan oleh teknologi, tetapi juga oleh strategi, SDM, dan komitmen berkelanjutan.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=630',
    category: 'Sistem Informasi',
    tags: ['Sistem Informasi', 'Arsitektur', 'Tata Kelola TI', 'Keberlanjutan'],
    author: 'Tim SYNVORA',
    publishedAt: '2026-09-05',
    publishedDisplay: '5 September 2026',
    readTime: '4 menit baca',
  },
  {
    slug: 'synvora-teknologi-indonesia-resmi-berdiri',
    title: 'SYNVORA Teknologi Indonesia Resmi Berdiri',
    excerpt:
      'Dengan semangat Synchronous, Innovation, Evolution, Era, SYNVORA hadir untuk menjadi mitra terpercaya dalam solusi teknologi informasi.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200&h=630',
    category: 'Berita',
    tags: ['Berita', 'SYNVORA', 'Peluncuran', 'Perusahaan'],
    author: 'Ahda Firly Barori',
    authorImage: '/images/team/Ahda-Jas.png',
    publishedAt: '2026-09-01',
    publishedDisplay: '1 September 2026',
    readTime: '5 menit baca',
  },
];

export function getRelatedPosts(currentSlug: string, count = 3): BlogPostMeta[] {
  return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, count);
}

export function getCategories(): string[] {
  return [...new Set(blogPosts.map((p) => p.category))];
}

export const TOPIC_ICONS: Record<string, string> = {
  'Artificial Intelligence': 'fa-solid fa-microchip',
  'Sistem Informasi': 'fa-solid fa-database',
  'Transformasi Digital': 'fa-solid fa-arrows-spin',
  Kesehatan: 'fa-solid fa-heart-pulse',
  Pemerintahan: 'fa-solid fa-building-columns',
  Inovasi: 'fa-regular fa-lightbulb',
  'Inovasi Daerah': 'fa-solid fa-trophy',
  Pendidikan: 'fa-solid fa-graduation-cap',
  'Bahasa Daerah': 'fa-solid fa-language',
  'Tips & Tutorial': 'fa-solid fa-lightbulb',
  Karier: 'fa-solid fa-briefcase',
  Berita: 'fa-regular fa-newspaper',
};

export interface TopicCount {
  name: string;
  slug: string;
  icon: string;
  count: number;
}

// Real topic popularity computed from how many posts actually carry each tag -
// no placeholder numbers. Sorted by count desc, matching definition order for ties.
export function getTopics(): TopicCount[] {
  const counts = new Map<string, number>();
  for (const post of blogPosts) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return Object.keys(TOPIC_ICONS)
    .filter((name) => counts.has(name))
    .map((name) => ({
      name,
      slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      icon: TOPIC_ICONS[name],
      count: counts.get(name) ?? 0,
    }))
    .sort((a, b) => b.count - a.count);
}

export function getPostsByTag(tag: string): BlogPostMeta[] {
  return blogPosts.filter((p) => p.tags.includes(tag));
}
