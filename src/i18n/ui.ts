import type { Locale } from './routes';

// Shared UI strings (nav, footer, CTAs, forms, cookie consent, 404). Page
// body copy lives in each page file itself (id/ and en/ pages), since
// long-form prose doesn't fit a flat key/value dictionary well - this file
// is deliberately scoped to the small, reused chrome around it.
export const ui = {
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang Kami',
      services: 'Layanan',
      portfolio: 'Portfolio',
      careers: 'Karier',
      blog: 'Blog',
      contact: 'Hubungi Kami',
      cta: 'Hubungi Kami',
    },
    footer: {
      tagline: 'Teknologi yang menyatukan, menginspirasi, dan menciptakan masa depan yang lebih baik.',
      navHeading: 'Navigasi',
      servicesHeading: 'Layanan',
      contactHeading: 'Kontak',
      hours: 'Senin - Jumat\n08.00 - 17.00 WIB',
      rights: 'All rights reserved.',
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat & Ketentuan',
      cookiePolicy: 'Kebijakan Cookie',
      cookieSettings: 'Pengaturan Cookie',
    },
    form: {
      name: 'Nama Lengkap',
      email: 'Email',
      whatsapp: 'Nomor WhatsApp',
      company: 'Nama Perusahaan',
      message: 'Pesan',
      required: 'Wajib diisi',
      invalidEmail: 'Alamat email tidak valid',
      submit: 'Kirim',
      sending: 'Mengirim...',
      success: 'Pesan Anda berhasil terkirim.',
      error: 'Terjadi kesalahan. Silakan coba lagi nanti.',
    },
    empty: {
      noResults: 'Tidak ada hasil ditemukan.',
      tryAgain: 'Coba kata kunci atau filter lain.',
    },
    legal: {
      breadcrumbHome: 'Beranda',
      lastUpdated: 'Terakhir diperbarui',
    },
    notFound: {
      title: 'Halaman Tidak Ditemukan',
      description: 'Halaman yang Anda cari tidak ada atau telah dipindahkan.',
      cta: 'Kembali ke Beranda',
    },
    cookie: {
      bannerTitle: 'Privasi Anda penting bagi kami',
      bannerBody:
        'Kami menggunakan cookie untuk menjaga website tetap berfungsi dan, jika Anda mengizinkan, membantu kami memahami penggunaan website dan meningkatkan pengalaman Anda.',
      acceptAll: 'Terima Semua',
      managePreferences: 'Kelola Preferensi',
      rejectNonEssential: 'Tolak Non-Esensial',
      modalTitle: 'Preferensi Cookie',
      modalIntro: 'Pilih kategori cookie yang ingin Anda izinkan. Preferensi ini dapat Anda ubah kapan saja.',
      save: 'Simpan Preferensi',
      close: 'Tutup',
      categories: {
        necessary: {
          title: 'Necessary / Esensial',
          badge: 'Selalu Aktif',
          desc: 'Cookie yang diperlukan agar fungsi dasar website berjalan dengan benar. Cookie ini tidak dapat dinonaktifkan melalui pengaturan ini.',
        },
        preferences: {
          title: 'Preferences / Preferensi',
          desc: 'Cookie yang membantu mengingat pilihan Anda, seperti preferensi bahasa dan pengaturan antarmuka.',
        },
        analytics: {
          title: 'Analytics / Analitik',
          desc: 'Cookie yang membantu kami memahami bagaimana pengunjung menggunakan website (saat ini: Google Analytics 4).',
        },
        marketing: {
          title: 'Marketing / Pemasaran',
          badge: 'Tidak Digunakan Saat Ini',
          desc: 'Cookie pemasaran TIDAK digunakan di website ini saat ini. Kategori ini ditampilkan agar siap digunakan secara transparan apabila di masa depan kami benar-benar mengimplementasikan fitur pemasaran semacam itu.',
        },
      },
    },
    langSwitcher: {
      label: 'Pilih bahasa',
      id: 'Bahasa Indonesia',
      en: 'English',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      careers: 'Careers',
      blog: 'Blog',
      contact: 'Contact',
      cta: 'Contact Us',
    },
    footer: {
      tagline: 'Technology that connects, inspires, and builds a better future.',
      navHeading: 'Navigation',
      servicesHeading: 'Services',
      contactHeading: 'Contact',
      hours: 'Monday - Friday\n08:00 - 17:00 WIB',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookiePolicy: 'Cookie Policy',
      cookieSettings: 'Cookie Settings',
    },
    form: {
      name: 'Full Name',
      email: 'Email',
      whatsapp: 'WhatsApp Number',
      company: 'Company Name',
      message: 'Message',
      required: 'Required',
      invalidEmail: 'Please enter a valid email address',
      submit: 'Submit',
      sending: 'Sending...',
      success: 'Your message was sent successfully.',
      error: 'Something went wrong. Please try again later.',
    },
    empty: {
      noResults: 'No results found.',
      tryAgain: 'Try another search term or filter.',
    },
    legal: {
      breadcrumbHome: 'Home',
      lastUpdated: 'Last updated',
    },
    notFound: {
      title: 'Page Not Found',
      description: "The page you're looking for doesn't exist or has been moved.",
      cta: 'Back to Home',
    },
    cookie: {
      bannerTitle: 'Your privacy matters',
      bannerBody:
        'We use cookies to keep the website functioning and, where you allow it, to understand how the website is used and improve your experience.',
      acceptAll: 'Accept All',
      managePreferences: 'Manage Preferences',
      rejectNonEssential: 'Reject Non-Essential',
      modalTitle: 'Cookie Preferences',
      modalIntro: 'Choose which categories of cookies you allow. You can change this at any time.',
      save: 'Save Preferences',
      close: 'Close',
      categories: {
        necessary: {
          title: 'Necessary',
          badge: 'Always Active',
          desc: 'Cookies required for the website’s core functionality to work correctly. These cannot be disabled through this panel.',
        },
        preferences: {
          title: 'Preferences',
          desc: 'Cookies that remember your choices, such as language preference and interface settings.',
        },
        analytics: {
          title: 'Analytics',
          desc: 'Cookies that help us understand how visitors use the website (currently: Google Analytics 4).',
        },
        marketing: {
          title: 'Marketing',
          badge: 'Not Currently Used',
          desc: 'Marketing cookies are NOT currently used on this website. This category is shown so it is ready to be used transparently if we actually implement a marketing feature like this in the future.',
        },
      },
    },
    langSwitcher: {
      label: 'Select language',
      id: 'Bahasa Indonesia',
      en: 'English',
    },
  },
} as const;

export function t(locale: Locale) {
  return ui[locale];
}
