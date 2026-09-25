export interface PortfolioProject {
  id: string;
  title: string;
  categories: string[];
  image: string;
  shortDescription: string;
  link: string | null;
  overview: string;
  features: string[];
  benefits: string[];
  coolFeatures: string[];
  // Names of the SYNVORA team members who built this project - not every
  // project has this filled in yet, so it's optional.
  team?: string[];
}

// Ordered with the newest project first - AIRA and AgriVita are our latest
// launches, so they lead the grid ahead of JOS, BBM, and SEP; the rest keep
// their original showcase order behind it.
export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'aira-artificial-intelligence-response-banjir',
    title: 'AIRA: Artificial Intelligence Response Banjir',
    categories: ['Website', 'Sistem Informasi', 'AI', 'Pemerintahan'],
    image: '/images/blog/aira-sumenep-drone.jpg',
    shortDescription:
      'Platform pemantauan, analisis risiko, dan peringatan dini banjir Kabupaten Sumenep berbasis Computer Vision, sensor IoT, data cuaca, dan GIS.',
    link: 'https://aira.synvorateknologiindonesia.web.id',
    overview:
      'AIRA (Artificial Intelligence Response Banjir) adalah platform pemantauan, analisis risiko, dan peringatan dini banjir untuk Kabupaten Sumenep. AIRA memadukan lima lapisan sistem, mulai dari sumber data lapangan (CCTV, sensor tinggi muka air, sensor curah hujan, data cuaca, GIS, laporan petugas), edge/IoT untuk akuisisi data real-time, AI processing (Computer Vision, Time-Series AI, Risk Analysis Engine, Rule & Decision Engine), cloud platform untuk dashboard dan histori, hingga output berupa peringatan dini, verifikasi petugas, dan dokumentasi kejadian. Fondasi spasialnya berasal dari penelitian nyata: survei lapangan BRIDA Sumenep bersama ITS (2026), kajian drainase Resmani, Andawayanti & Cahya (2017), dan prosiding PSPK 3 UKWMS (2024), dengan akurasi koordinat yang tertelusur sampai sumbernya.',
    features: [
      'Pemantauan CCTV berbasis Computer Vision (YOLOv10) untuk mendeteksi genangan dan kenaikan muka air',
      'Integrasi sensor IoT: tinggi muka air, curah hujan, dan pemantauan kondisi perangkat secara real-time',
      'Data cuaca dan analisis prediksi risiko banjir berbasis AI (LSTM) untuk beberapa jam ke depan',
      'Peta interaktif berbasis GIS dengan layer wilayah rawan dan analisis risiko multi-sumber data',
      'Peringatan dini multi-kanal: dashboard, WhatsApp Gateway, email, dan integrasi sirene publik',
      'Manajemen kejadian dan laporan: pencatatan otomatis, verifikasi petugas, hingga ekspor data',
    ],
    benefits: [
      'Memberi pemerintah daerah satu dashboard komando terpadu untuk koordinasi BPBD, dinas, dan kecamatan saat banjir terjadi',
      'Mempercepat verifikasi dan respons petugas lapangan lewat lokasi prioritas dan rute real-time',
      'Memberi masyarakat peringatan dini dan jalur evakuasi lebih cepat, bukan sekadar informasi setelah banjir terjadi',
    ],
    coolFeatures: [
      'Model TMA saluran vs sungai menghitung backwater (Δ = TMA sungai − TMA saluran) berdasarkan panjang pengaruh backwater hasil kajian 2017, bukan asumsi',
      'Setiap koordinat titik pantau punya status akurasi tertelusur (data resmi, penelitian, OSM, atau direktori), bukan titik yang digambar sembarangan di peta',
    ],
    team: ['Ahda Firly Barori', 'Danur Wenda', 'Ahmad Muqtafi', 'Ilham Maulana', 'Abd. Rahman Siddik'],
  },
  {
    id: 'agrivita-smart-storage',
    title: 'AgriVita: Smart Agricultural Storage',
    categories: ['Website', 'Pertanian', 'IoT'],
    image: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&q=80&w=1200&h=630',
    shortDescription:
      'Bunker penyimpanan hasil panen cerdas berbasis IoT dan energi surya, mengubah gudang pasif menjadi ruang simpan yang terpantau dan berventilasi otomatis.',
    link: 'https://agrivita.synvorateknologiindonesia.web.id',
    overview:
      'AgriVita mengubah gudang penyimpanan hasil panen yang pasif menjadi bunker cerdas yang dipantau sensor, dikendalikan otomatis, ditenagai panel surya, dan tercatat di cloud, untuk menekan kehilangan pascapanen. Konsep ini dirintis bersama petani di Lenteng Timur, Sumenep, wilayah dengan luas ±405 Ha dan sekitar 7.315 jiwa penduduk yang mayoritas bekerja sebagai petani. AgriVita dibangun di atas arsitektur 5 lapisan (Physical, Sensing, Edge/Control, Cloud/Application, Human/Operational) dengan sensor suhu-kelembapan (DHT22), indikasi kualitas udara (MQ-135), dan estimasi level isi bunker (HC-SR04).',
    features: [
      'Monitoring real-time suhu, kelembapan, kualitas udara, dan level isi bunker di dashboard web & mobile',
      'Peringatan dini bertingkat (Info, Warning, Critical) dengan debounce agar notifikasi tidak berlebihan',
      'Ventilasi otomatis: rule engine menyalakan kipas saat kondisi melewati batas, atau dikendalikan manual sesuai hak akses',
      'Histori dan analitik time-series untuk pola harian, frekuensi alarm, dan evaluasi kualitas penyimpanan',
      'Energi surya dengan panel, charge controller, dan baterai, lengkap pemantauan status energi',
      'Offline-first: edge tetap membaca sensor dan menjalankan rule lokal saat internet terputus, lalu sinkron saat pulih',
    ],
    benefits: [
      'Menekan kehilangan hasil panen akibat kelembapan, suhu tak terkendali, hama, dan sirkulasi udara buruk yang sebelumnya hanya diperiksa manual',
      'Bunker tetap beroperasi meski jauh dari jaringan listrik yang stabil, berkat energi surya dan mode offline-first',
      'Histori time-series memungkinkan evaluasi penyimpanan yang objektif, bukan lagi perkiraan dari pengecekan sesekali',
    ],
    coolFeatures: [
      'Lima tingkat kecerdasan sistem dirancang bertahap, dari sekadar Monitoring hingga Predictive, sehingga bunker bisa berkembang seiring data historis yang terkumpul',
      'Rule engine membedakan kegagalan sensor dari nilai ekstrem yang valid, agar alarm palsu tidak membanjiri operator',
    ],
    team: ['Ilham Maulana', 'Danur Wenda', 'Ahda Firly Barori'],
  },
  {
    id: 'jos-job-opportunity-sumenep',
    title: 'JOS: Job Opportunity Sumenep',
    categories: ['Website', 'Sistem Informasi', 'Masyarakat'],
    image: '/images/blog/Rekomendasi-Lowongan-Pengguna.png',
    shortDescription:
      'Platform agregator lowongan pekerjaan publik terpusat untuk Kabupaten Sumenep dan Madura Raya, dilengkapi rekomendasi kerja Rule-Based Matching.',
    link: 'https://jos.synvorateknologiindonesia.web.id',
    overview:
      'JOS (Job Opportunity Sumenep) adalah platform agregator lowongan pekerjaan berbasis web yang mengumpulkan informasi lowongan dari berbagai sumber publik (seperti Glints, JobStreet, KitaLulus, Pintarnya) dan sumber resmi pemerintah (Disnaker Sumenep), lalu menyajikannya dalam satu portal yang terstruktur dan mudah dicari khusus untuk warga Sumenep dan Madura Raya. JOS bukan marketplace lowongan: setiap lowongan tetap mengarahkan pelamar ke halaman sumber asli, JOS hanya berperan sebagai mesin pencari dan pengumpul informasi.',
    features: [
      'Web scraper otomatis berbasis Python yang menarik data dari 7 sumber publik dan pemerintah secara berkala',
      'Pencarian dan filter lowongan berdasarkan lokasi, posisi, pendidikan, pengalaman, keahlian, jenis pekerjaan, dan sumber',
      'Smart Job Matching: skor kecocokan transparan berbasis rumus rule-based (bukan AI/black box) dari skill, pendidikan, lokasi, pengalaman, minat, dan usia',
      'Profil pencari kerja lengkap: pendidikan, pengalaman, keahlian, lokasi, dan preferensi pekerjaan',
      'Saved Jobs untuk menyimpan lowongan menarik dan membukanya kembali tanpa mencari ulang',
      'Dashboard administrator: statistik lowongan, kelola sumber scraping, sinkronisasi manual, dan log aktivitas sistem',
    ],
    benefits: [
      'Memusatkan informasi lowongan yang sebelumnya tersebar di banyak situs ke dalam satu portal khusus Sumenep',
      'Menjangkau pencari kerja di wilayah daratan maupun kepulauan Sumenep secara setara',
      '100% gratis dan tanpa perantara, tetap mengarahkan pelamar langsung ke sumber resmi',
    ],
    coolFeatures: [
      'Setiap skor kecocokan bisa dijawab "Mengapa?", rincian bobot per kriteria (skill 30%, pendidikan 20%, lokasi 20%, pengalaman 15%, minat 10%, usia 5%) ditampilkan transparan ke pengguna',
      'Scraper modular per sumber sehingga sumber lowongan baru bisa ditambahkan tanpa mengubah sistem inti',
    ],
    team: ['Ahda Firly Barori', 'Danur Wenda', 'Ilham Maulana'],
  },
  {
    id: 'belajar-bahasa-madura',
    title: 'BBM: Belajar Bahasa Madura',
    categories: ['Website', 'Pendidikan'],
    image: '/images/blog/Landing-BBM.png',
    shortDescription:
      'Platform edukasi digital untuk belajar, mencari, dan menerjemahkan Bahasa Madura secara berjenjang, bisa dipasang sebagai aplikasi dan dipakai tanpa koneksi internet.',
    link: 'https://belajar-bahasa-madura.synvorateknologiindonesia.web.id/',
    overview:
      'BBM (Belajar Bahasa Madura) adalah satu platform untuk belajar, mencari, dan menerjemahkan Bahasa Madura, dipakai bersama di sekolah maupun dipelajari sendiri di rumah. Materinya disusun berjenjang mengikuti kurikulum asli: mulai dari huruf & ejaan, suku kata, kata, hingga kalimat dan tingkatan basa (Ondhâghen Basa, dari Enjâ\'-Iyâ, Engghi-Enten, sampai Engghi-Bhunten) yang jadi ciri khas tata krama berbahasa Madura. BBM bisa dipasang sebagai aplikasi (PWA) dan tetap dipakai tanpa koneksi internet, cocok untuk sekolah dengan akses internet terbatas.',
    features: [
      'Kamus digital Indonesia-Madura lengkap dengan kelas kata dan contoh kalimat, ala KBBI',
      'Penerjemah dua arah Bahasa Indonesia-Madura',
      'Pemenggalan suku kata otomatis untuk membantu eja dan baca',
      'Pengurai kata dasar otomatis, kata berimbuhan diuraikan tanpa perlu kamus statis',
      'Jalur belajar berjenjang (huruf, suku kata, kata, kalimat & tingkatan basa) lengkap dengan kuis dan progres yang terkunci bertahap',
      'Lab Bahasa (TTS), alat admin untuk merekam dan mengurasi korpus suara Madura per huruf/suku kata/kata/kalimat',
      'Manajemen pengguna multi-peran: siswa, mahasiswa, guru, dosen, hingga pengguna umum',
    ],
    benefits: [
      'Mendukung pelestarian Bahasa Madura di tangan generasi muda',
      'Bisa dipasang sebagai aplikasi dan tetap berfungsi tanpa koneksi internet',
      'Akses untuk semua usia, area klik besar, kontras jelas, navigasi mudah dari siswa SD hingga guru senior',
    ],
    coolFeatures: [
      'Lab Bahasa (TTS) membangun korpus suara Madura asli secara terstruktur, fondasi menuju text-to-speech Bahasa Madura',
      'Pengurai kata dasar otomatis yang membedah kata berimbuhan secara mandiri, bukan sekadar mencocokkan ke daftar kata',
    ],
    team: ['Ahda Firly Barori'],
  },
  {
    id: 'sep-smart-event-sumenep',
    title: 'SEP: Smart Event Sumenep',
    categories: ['Website', 'Pemerintahan', 'Sistem Informasi', 'AI'],
    image: '/images/blog/landing-page-sep.jpeg',
    shortDescription:
      'Platform pendukung keputusan berbasis dampak sekaligus kalender publik resmi untuk event daerah Sumenep, inovasi SYNVORA di Anugerah Inovasi Daerah 2026.',
    link: null,
    overview:
      'SEP (Smart Event Sumenep) adalah decision-support platform untuk event daerah yang sekaligus berfungsi sebagai kalender publik resmi. Setiap event, dari Kerapan Sapi, Petik Laut, Festival Musik Tong-Tong, hingga Madura Culture Fest, dicatat per penyelenggaraan tahunan agar dampaknya bisa dibandingkan secara konsisten, sementara masyarakat mendapat satu sumber informasi event yang resmi dan bisa diandalkan. SEP adalah inovasi masyarakat yang diusung SYNVORA di Anugerah Inovasi Daerah (AID) 2026 yang digelar BRIDA Kabupaten Sumenep.',
    features: [
      'Skor Ekonomi dari volume kunjungan, belanja pengunjung luar daerah, dan kenaikan omzet UMKM',
      'Skor Antusiasme Digital dari kurasi TikTok operator (volume dan sentimen)',
      'Estimasi pengunjung berbasis video venue dengan YOLOv8 (counting-only, tanpa face recognition)',
      'Survei publik mandiri via QR code dengan margin of error sebagai ukuran ketepatan',
      'Matriks strategi 3x3 dengan rekomendasi yang bisa ditelusuri sampai sumber datanya',
      'Kalender publik resmi lengkap dengan detail agenda, galeri, peta, dan RSVP',
    ],
    benefits: [
      'Evaluasi dampak antar-event yang konsisten dan berbasis data, bukan asumsi',
      'Satu sumber informasi event resmi bagi masyarakat, menggantikan info berantai yang simpang siur',
      'Jujur pada data, saat data lemah sistem menyatakan butuh evaluasi dulu, bukan memaksakan rekomendasi',
    ],
    coolFeatures: [
      'Kombinasi computer vision (YOLOv8) dan analisis sentimen Bahasa Indonesia/Madura (IndoBERTweet) untuk membaca dampak event secara menyeluruh',
      'Setiap rekomendasi bisa dijawab "Mengapa?", tertelusur sampai komponen skor dan sumber data aslinya',
    ],
    team: ['Ahmad Muqtafi', 'Abd. Rahman Siddik'],
  },
  {
    id: 'labkesda-sumenep',
    title: 'Website UPTD Labkesda Sumenep',
    categories: ['Website', 'Pemerintahan'],
    image: '/images/portfolio/labkesdasumenep[labkesdasumenep.id].png',
    shortDescription:
      'Website resmi UPTD Laboratorium Kesehatan Daerah Kabupaten Sumenep, lengkap dengan pendaftaran online dan informasi layanan.',
    link: 'https://labkesdasumenep.id',
    overview:
      'Website resmi milik UPTD Laboratorium Kesehatan Daerah Kabupaten Sumenep, dirancang sebagai kanal utama informasi dan pendaftaran layanan pemeriksaan laboratorium bagi masyarakat.',
    features: [
      'Pendaftaran pemeriksaan laboratorium secara online',
      'Informasi jenis layanan dan tarif pemeriksaan',
      'Profil dan struktur organisasi instansi',
      'Galeri kegiatan dan berita terbaru',
      'Formulir kontak dan pengaduan masyarakat',
    ],
    benefits: [
      'Desain responsif dan mudah diakses di semua perangkat',
      'Navigasi informasi yang jelas dan terstruktur',
      'Terintegrasi dengan identitas visual instansi resmi',
    ],
    coolFeatures: [
      'Alur pendaftaran online yang memangkas antrean fisik',
      'Update informasi layanan secara real-time',
    ],
  },
  {
    id: 'produli',
    title: 'Produli (Prolanis Peduli)',
    categories: ['Website', 'Kesehatan'],
    image: '/images/portfolio/produli[produli.labkesdasumenep.id].png',
    shortDescription:
      'Platform kesehatan preventif berbasis data laboratorium dengan analisis risiko otomatis dan pemantauan kunjungan real-time.',
    link: 'https://produli.labkesdasumenep.id',
    overview:
      'Platform kesehatan preventif yang membantu tenaga medis memantau peserta program pengelolaan penyakit kronis (Prolanis) berbasis data laboratorium.',
    features: [
      'Dashboard analisis risiko kesehatan otomatis',
      'Pemantauan kunjungan peserta secara real-time',
      'Riwayat pemeriksaan pasien yang terintegrasi',
      'Notifikasi jadwal kontrol rutin',
    ],
    benefits: [
      'Membantu deteksi dini risiko kesehatan peserta',
      'Mengurangi pekerjaan pencatatan manual tenaga medis',
      'Data terpusat dan mudah diakses oleh tim medis',
    ],
    coolFeatures: [
      'Analisis risiko otomatis berbasis data laboratorium',
      'Visualisasi tren kesehatan pasien dari waktu ke waktu',
    ],
  },
  {
    id: 'silacare',
    title: 'SiLACARE',
    categories: ['Website', 'Aplikasi Mobile'],
    image: '/images/portfolio/silacare[silacare.labkesdasumenep.id].png',
    shortDescription:
      'Portal digital pasien (hybrid web app/PWA) untuk melihat riwayat pemeriksaan lab, antrean online, dan pendaftaran pemeriksaan gratis.',
    link: 'https://silacare.labkesdasumenep.id',
    overview:
      'Portal digital pasien berbentuk hybrid web app/PWA yang memudahkan masyarakat mengakses layanan laboratorium kesehatan tanpa perlu datang langsung untuk sekadar bertanya atau mendaftar. Bisa dibuka langsung lewat browser maupun dipasang seperti aplikasi di ponsel.',
    features: [
      'Riwayat pemeriksaan laboratorium digital',
      'Sistem antrean online',
      'Pendaftaran pemeriksaan gratis',
      'Notifikasi saat hasil pemeriksaan siap',
    ],
    benefits: [
      'Mengurangi waktu tunggu di lokasi laboratorium',
      'Akses riwayat kesehatan kapan saja diperlukan',
      'Proses pendaftaran yang lebih cepat dan transparan',
    ],
    coolFeatures: [
      'Antrean online yang terintegrasi langsung dengan jadwal laboratorium',
      'Notifikasi otomatis begitu hasil pemeriksaan tersedia',
    ],
  },
  {
    id: 'kancana-brida',
    title: 'Kancana BRIDA',
    categories: ['Website', 'Pemerintahan', 'AI'],
    image: '/images/portfolio/chat-bot[brida.sumenepkab.go.id slash chatbot].png',
    shortDescription:
      'Chatbot AI untuk Badan Riset dan Inovasi Daerah (BRIDA) Kabupaten Sumenep, membantu masyarakat mendapatkan informasi riset dan inovasi daerah secara cepat.',
    link: 'https://brida.sumenepkab.go.id/chatbot',
    overview:
      'Chatbot berbasis kecerdasan buatan untuk Badan Riset dan Inovasi Daerah (BRIDA) Kabupaten Sumenep, membantu masyarakat mendapatkan informasi riset dan inovasi daerah secara cepat dan interaktif.',
    features: [
      'Tanya jawab otomatis berbasis AI',
      'Informasi program riset dan inovasi daerah',
      'Respons real-time yang tersedia 24/7',
      'Antarmuka percakapan yang mudah digunakan',
    ],
    benefits: [
      'Mempercepat akses informasi publik',
      'Mengurangi beban kerja layanan informasi manual',
      'Tersedia kapan saja tanpa terikat jam operasional',
    ],
    coolFeatures: [
      'Didukung kecerdasan buatan untuk memahami bahasa alami',
      'Respons instan tanpa perlu menunggu petugas',
    ],
  },
];

export function getPortfolioCategories(): string[] {
  return [...new Set(portfolioProjects.flatMap((p) => p.categories))];
}

// Categories we intend to showcase but don't have a public case study for
// yet - shown in the filter so visitors know the scope of our work, with a
// "coming soon" invitation instead of an empty grid. Empty for now since
// every current category (including Website) already has real projects.
export const upcomingCategories: string[] = [];

export function getAllPortfolioCategories(): string[] {
  return [...getPortfolioCategories(), ...upcomingCategories];
}
