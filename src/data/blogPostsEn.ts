// English title/excerpt/category/metaDescription for every blog post, keyed
// by slug. This covers the EN blog LISTING only - full English article
// bodies don't exist yet for any post (that's a larger, separate effort:
// it also requires localizing BlogArticleLayout's comment UI, share
// labels, etc.). The EN listing links each post straight to its
// Indonesian article page rather than mixing languages inside one page.
export interface BlogPostEn {
  title: string;
  excerpt: string;
  metaDescription?: string;
  category: string;
}

export const blogPostsEn: Record<string, BlogPostEn> = {
  'synctappy-produk-saas-nfc-qr-synvora': {
    title: 'Synctappy, an NFC and QR SaaS Product from the SYNVORA Ecosystem',
    excerpt:
      'Beyond the technology solutions we build for clients and institutions, SYNVORA also builds its own digital products. Synctappy is one of them: an NFC and QR digital engagement platform with smart business profiles, dynamic links, review generation, and analytics, now live with an open free trial.',
    metaDescription: 'Synctappy: an NFC and QR SaaS product from the SYNVORA ecosystem for business digital engagement, now live with a 14-day free trial.',
    category: 'News',
  },
  'aira-sistem-peringatan-dini-banjir-sumenep': {
    title: 'AIRA, an AI and IoT Flood Early-Warning System for Sumenep',
    excerpt:
      'Alongside SEP, BBM, and JOS, SYNVORA presents AIRA (Artificial Intelligence Response Banjir): a flood monitoring, risk analysis, and early-warning platform for Sumenep Regency, combining Computer Vision, IoT sensors, weather data, and GIS in one integrated dashboard.',
    metaDescription: 'AIRA: an AI and IoT platform for flood monitoring, risk analysis, and early warning in Sumenep Regency from SYNVORA.',
    category: 'News',
  },
  'agrivita-bunker-penyimpanan-cerdas-iot-petani-sumenep': {
    title: 'AgriVita, an IoT-Based Smart Storage Bunker for Sumenep Farmers',
    excerpt:
      'SYNVORA introduces AgriVita: a smart harvest-storage system built on IoT and solar power that turns a passive warehouse into a sensor-monitored bunker, with automatic ventilation and early warnings on storage conditions. Its prototype, AgriBunker, has been field-tested since February 24, 2025 by the Innovillage Uniba Madura team.',
    metaDescription: 'AgriVita: a smart storage bunker built on IoT and solar power from SYNVORA, field-tested since February 2025.',
    category: 'News',
  },
  'jos-job-opportunity-sumenep-inovasi-synvora': {
    title: 'JOS, a Centralized Job Listing Portal for Sumenep and Madura',
    excerpt:
      'After SEP and BBM, SYNVORA presents its third innovation: JOS (Job Opportunity Sumenep), an aggregator platform that pulls job listings from various public and government sources into one portal, complete with transparent, non-AI Rule-Based Matching job recommendations.',
    metaDescription: 'JOS: a job listing aggregator portal for Sumenep and the wider Madura region from SYNVORA, with transparent Rule-Based Matching recommendations.',
    category: 'News',
  },
  'bbm-belajar-bahasa-madura-inovasi-synvora': {
    title: 'BBM, an Online Madurese Dictionary and Learning App from SYNVORA',
    excerpt:
      "After SEP, SYNVORA presents its second innovation: BBM (Belajar Bahasa Madura), a dictionary, translator, and tiered learning platform already used by dozens of students, teachers, and lecturers, while also building the first foundation for Madurese text-to-speech.",
    metaDescription: 'BBM: a dictionary, translator, and tiered Madurese-learning platform from SYNVORA, used by dozens of students up to lecturers in Sumenep.',
    category: 'News',
  },
  'synvora-anugerah-inovasi-daerah-2026-sep-smart-event-sumenep': {
    title: "SYNVORA Enters SEP into Sumenep Regency's 2026 Regional Innovation Awards",
    excerpt:
      "SYNVORA's team has officially entered the 2026 Regional Innovation Awards (Anugerah Inovasi Daerah/AID) held by BRIDA Sumenep Regency, in the community category. Its first entry: SEP (Smart Event Sumenep), a smart platform that changes how the region monitors the impact of every cultural and tourism event.",
    metaDescription: "SYNVORA enters the 2026 BRIDA Sumenep Regional Innovation Awards with SEP (Smart Event Sumenep), a platform for monitoring cultural and tourism event impact.",
    category: 'News',
  },
  '5-tips-membangun-aplikasi-web-yang-user-friendly': {
    title: '5 Tips for Building a User-Friendly Web Application',
    excerpt: 'Good user experience (UX) is key to an application’s success. Here are a few things worth paying attention to.',
    category: 'Tips & Tutorials',
  },
  'digitalisasi-layanan-laboratorium-lebih-cepat-lebih-akurat': {
    title: 'Digitizing Laboratory Services: Faster, More Accurate',
    excerpt: 'Digital transformation in laboratories helps improve result accuracy, process efficiency, and service user satisfaction.',
    category: 'Health',
  },
  'solusi-digital-untuk-pemerintahan-yang-lebih-transparan': {
    title: 'Digital Solutions for More Transparent Government',
    excerpt: 'Information technology plays a key role in building effective, transparent, public-oriented governance.',
    category: 'Government',
  },
  'berkembang-bersama-budaya-kerja-di-synvora': {
    title: 'Growing Together: Work Culture at SYNVORA',
    excerpt: 'At SYNVORA, we believe a positive work environment drives innovation. Get to know our work culture up close.',
    category: 'Careers',
  },
  'peran-ai-dalam-transformasi-digital-organisasi': {
    title: "AI's Role in Organizational Digital Transformation",
    excerpt: 'Artificial intelligence is no longer just a trend — it has become a strategic necessity for improving the efficiency and quality of public and business services alike.',
    category: 'Technology',
  },
  'membangun-sistem-informasi-yang-berkelanjutan': {
    title: 'Building a Sustainable Information System',
    excerpt: "An information system's success isn't determined by technology alone, but also by strategy, people, and sustained commitment.",
    category: 'Information Systems',
  },
  'synvora-teknologi-indonesia-resmi-berdiri': {
    title: 'SYNVORA Teknologi Indonesia Officially Incorporated',
    excerpt: 'In the spirit of Synchronous, Innovation, Evolution, Era, SYNVORA is here to become a trusted partner in information technology solutions.',
    category: 'News',
  },
};
