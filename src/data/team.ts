export interface SocialLink {
  platform: 'instagram' | 'linkedin' | 'threads' | 'web';
  url: string;
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  photo?: string;
  socials?: SocialLink[];
}

// Font Awesome glyph, used when the platform has no dedicated brand image below.
export const SOCIAL_ICONS: Partial<Record<SocialLink['platform'], string>> = {
  linkedin: 'fa-brands fa-linkedin-in',
  web: 'fa-solid fa-globe',
};

// Real brand badge images take priority over the Font Awesome glyph above -
// checked first wherever a social link is rendered.
export const SOCIAL_IMAGES: Partial<Record<SocialLink['platform'], string>> = {
  threads: '/icons/Threads_Icon.png',
  instagram: '/icons/Instagram-Icon.webp',
};

export const founder: TeamMember & { quote: string; company: string; phone: string; address: string } = {
  name: 'Ahda Firly Barori',
  role: 'CEO & Founder',
  initials: 'AB',
  photo: '/images/team/Ahda-Jas.png',
  quote:
    'Setiap perjalanan hidup, memiliki makna. Hargailah setiap proses dan pelajarannya dengan ketenangan dan ketekunan, karena fondasi yang kokoh selalu dibangun dari detail-detail sunyi yang sering diabaikan orang.',
  company: 'PT Synvora Teknologi Indonesia',
  phone: '+62 812-3310-7475',
  address: 'Jl. Diponegoro 109 B, Bangselok, Sumenep, Jawa Timur',
  socials: [
    { platform: 'instagram', url: 'https://www.instagram.com/adhfry.r' },
    { platform: 'linkedin', url: 'https://www.linkedin.com/in/adhfry' },
    { platform: 'threads', url: 'https://www.threads.com/@adhfry.r' },
    { platform: 'web', url: 'https://adhfry.web.id' },
  ],
};

// More team members and their social links are still being collected -
// this list grows as they're shared.
export const teamMembers: TeamMember[] = [
  { name: 'Pyepit Rineksoa Andriyanto', role: 'Tim SYNVORA', initials: 'PR' },
  {
    name: 'Ahmad Muqtafi',
    role: 'Tim SYNVORA',
    initials: 'AM',
    photo: '/images/team/Ahmad-Muqtafi.jpeg',
    socials: [
      { platform: 'instagram', url: 'https://www.instagram.com/mqt.fii' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/ahmad-muqtafi-410bb830a/' },
      { platform: 'threads', url: 'https://www.threads.com/@mqt.fii' },
    ],
  },
  {
    name: 'Danur Wenda',
    role: 'Tim SYNVORA',
    initials: 'DW',
    photo: '/images/team/Danur-Wenda.jpeg',
    socials: [
      { platform: 'instagram', url: 'https://www.instagram.com/dnr.wnd' },
      { platform: 'threads', url: 'https://www.threads.com/@dnr.wnd' },
    ],
  },
  {
    name: 'Ilham Maulana',
    role: 'Tim SYNVORA',
    initials: 'IM',
    photo: '/images/team/Ilham-Maulana.jpeg',
    socials: [
      { platform: 'instagram', url: 'https://www.instagram.com/ilmn_escalante' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/ilham-maulana-022544235' },
      { platform: 'threads', url: 'https://www.threads.com/@initial_b13' },
    ],
  },
  {
    name: 'Abd. Rahman Siddik',
    role: 'Tim SYNVORA',
    initials: 'AR',
    photo: '/images/team/Abd-Rahman-Siddik.jpeg',
  },
];
