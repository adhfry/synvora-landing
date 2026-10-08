export type ProjectKind = 'product' | 'solution' | 'innovation';
export type ProjectStatus = 'Live' | 'In Development' | 'Prototype' | 'Completed';

export interface PortfolioProject {
  id: string;
  title: string;
  // What this project actually is, not a vague label:
  // - 'product': a proprietary product SYNVORA builds and owns (e.g. Synctappy)
  // - 'solution': a system/website built for a specific client or institution
  // - 'innovation': a self-initiated R&D / civic-tech project (not commissioned,
  //   not sold as a SaaS product - built for community/government benefit)
  kind: ProjectKind;
  status: ProjectStatus;
  // Only set when the actual year is known - omitted rather than guessed.
  year?: number;
  categories: string[];
  image: string;
  shortDescription: string;
  link: string | null;
  overview: string;
  problem: string;
  solution: string;
  // What SYNVORA/the team actually contributed - kept honest and specific
  // rather than a generic "full development" claim where that isn't known.
  role: string;
  features: string[];
  benefits: string[];
  coolFeatures: string[];
  // Names of the SYNVORA team members who built this project - not every
  // project has this filled in yet, so it's optional.
  team?: string[];
}

// Three honest buckets, not one undifferentiated grid:
// - PRODUCTS: proprietary SaaS products SYNVORA builds and sells/operates itself.
// - SOLUTIONS: systems/websites built for a specific client or institution.
// - INNOVATION & R&D: self-initiated civic-tech projects for Sumenep, not
//   commissioned and not sold - some submitted to innovation programs.
// Within each bucket, newest first.
export const portfolioProjects: PortfolioProject[] = [
  // ================= PRODUCTS =================
  {
    id: 'synctappy',
    title: 'Synctappy',
    kind: 'product',
    status: 'Live',
    year: 2026,
    categories: ['SaaS', 'NFC & QR', 'Produk'],
    image: '/images/portfolio/synctappy-cover.png',
    shortDescription:
      'Platform digital engagement berbasis NFC dan QR: profil bisnis pintar, dynamic link, review generation, dan analitik dalam satu produk.',
    link: 'https://synctappy.biz.id/',
    overview:
      'Synctappy adalah produk SaaS milik SYNVORA yang menggabungkan NFC dan QR untuk digital engagement: profil bisnis pintar yang bisa diakses lewat satu tap atau scan tanpa perlu aplikasi, dynamic link yang bisa diubah tujuannya tanpa cetak ulang kartu/stiker, generasi ulasan (review generation), analitik tap/scan/klik, hingga kampanye dan promo terjadwal. Saat ini uji coba gratis 14 hari untuk satu perangkat sudah dibuka; paket berbayar (Basic, Pro, Premium) masih berstatus segera hadir dengan harga final diumumkan saat peluncuran.',
    problem:
      'Pelaku usaha butuh cara mudah bagi pelanggan untuk mengakses profil bisnis, tautan, atau form ulasan, tanpa pelanggan perlu memasang aplikasi apa pun.',
    solution:
      'Touchpoint NFC dan QR (kartu, stiker, stand meja) yang membuka halaman profil/tautan secara instan, lengkap dengan dynamic link, analitik, dan kampanye.',
    role: 'Dikembangkan, dimiliki, dan dioperasikan langsung oleh tim SYNVORA sebagai produk sendiri, bukan proyek pesanan klien.',
    features: [
      'Touchpoint NFC dan QR yang membuka halaman tanpa aplikasi',
      'Smart profile multi-link dengan call-to-action utama',
      'Dynamic link: ubah tujuan tautan tanpa cetak ulang kartu/stiker',
      'Review generation untuk mengumpulkan ulasan pelanggan',
      'Analitik tap, scan, dan klik',
      'Kampanye dan promo terjadwal',
    ],
    benefits: [
      'Pelanggan bisa langsung mengakses profil/tautan bisnis dengan satu tap atau scan',
      'Tujuan tautan bisa diubah kapan saja tanpa mengganti kartu atau stiker fisik',
      'Uji coba 14 hari gratis tersedia sebelum memutuskan berlangganan',
    ],
    coolFeatures: [
      'Perangkat keras (stand meja, kartu NFC, stiker tag) dan platform digital dirancang sebagai satu paket pengalaman',
      'Tersedia dalam Bahasa Indonesia dan Inggris',
    ],
  },

  // ================= INNOVATION & R&D =================
  {
    id: 'aira-artificial-intelligence-response-banjir',
    title: 'AIRA: Artificial Intelligence Response Banjir',
    kind: 'innovation',
    status: 'Live',
    year: 2026,
    categories: ['Sistem Informasi', 'AI', 'Pemerintahan', 'IoT'],
    image: '/images/blog/aira-sumenep-drone.jpg',
    shortDescription:
      'Platform pemantauan, analisis risiko, dan peringatan dini banjir Kabupaten Sumenep berbasis Computer Vision, sensor IoT, data cuaca, dan GIS.',
    link: 'https://aira.synvorateknologiindonesia.web.id',
    overview:
      'AIRA (Artificial Intelligence Response Banjir) adalah platform pemantauan, analisis risiko, dan peringatan dini banjir untuk Kabupaten Sumenep. AIRA memadukan lima lapisan sistem, mulai dari sumber data lapangan (CCTV, sensor tinggi muka air, sensor curah hujan, data cuaca, GIS, laporan petugas), edge/IoT untuk akuisisi data real-time, AI processing (Computer Vision, Time-Series AI, Risk Analysis Engine, Rule & Decision Engine), cloud platform untuk dashboard dan histori, hingga output berupa peringatan dini, verifikasi petugas, dan dokumentasi kejadian. Fondasi spasialnya berasal dari penelitian nyata: survei lapangan BRIDA Sumenep bersama ITS (2026), kajian drainase Resmani, Andawayanti & Cahya (2017), dan prosiding PSPK 3 UKWMS (2024), dengan akurasi koordinat yang tertelusur sampai sumbernya.',
    problem:
      'Informasi kondisi banjir di lapangan sering terlambat sampai ke pemerintah daerah, petugas, dan warga yang butuh bertindak cepat.',
    solution:
      'Platform pemantauan dan peringatan dini banjir berbasis Computer Vision, sensor IoT, data cuaca, dan GIS dalam satu dashboard terintegrasi.',
    role: 'Diinisiasi dan dikembangkan penuh oleh tim SYNVORA sebagai inovasi mandiri, bukan proyek pesanan.',
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
    kind: 'innovation',
    status: 'Live',
    year: 2026,
    categories: ['Pertanian', 'IoT'],
    image: '/images/blog/agrivita-penerapan-innovillage.jpg',
    shortDescription:
      'Bunker penyimpanan hasil panen cerdas berbasis IoT dan energi surya, mengubah gudang pasif menjadi ruang simpan yang terpantau dan berventilasi otomatis.',
    link: 'https://agrivita.synvorateknologiindonesia.web.id',
    overview:
      'AgriVita mengubah gudang penyimpanan hasil panen yang pasif menjadi bunker cerdas yang dipantau sensor, dikendalikan otomatis, ditenagai panel surya, dan tercatat di cloud, untuk menekan kehilangan pascapanen. Konsep ini dirintis bersama petani di Lenteng Timur, Sumenep, wilayah dengan luas ±405 Ha dan sekitar 7.315 jiwa penduduk yang mayoritas bekerja sebagai petani. AgriVita dibangun di atas arsitektur 5 lapisan (Physical, Sensing, Edge/Control, Cloud/Application, Human/Operational) dengan sensor suhu-kelembapan (DHT22), indikasi kualitas udara (MQ-135), dan estimasi level isi bunker (HC-SR04). Purwarupa fisiknya, AgriBunker, sudah pernah diterapkan langsung di lapangan pada 24 Februari 2025 oleh tim Innovillage dari Universitas Bahaudin Mudhary Madura (Uniba Madura).',
    problem:
      'Gudang penyimpanan hasil panen umumnya pasif dan diperiksa manual, sehingga kerusakan komoditas baru diketahui setelah terlihat.',
    solution:
      'Bunker penyimpanan cerdas berbasis sensor IoT dan energi surya dengan ventilasi otomatis dan peringatan dini kondisi penyimpanan.',
    role: 'Diinisiasi dan dikembangkan penuh oleh tim SYNVORA sebagai inovasi mandiri bersama petani Lenteng Timur; purwarupa fisiknya diuji lapangan bersama tim Innovillage Uniba Madura.',
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
    kind: 'innovation',
    status: 'Live',
    year: 2026,
    categories: ['Sistem Informasi', 'Masyarakat'],
    image: '/images/blog/Rekomendasi-Lowongan-Pengguna.png',
    shortDescription:
      'Platform agregator lowongan pekerjaan publik terpusat untuk Kabupaten Sumenep dan Madura Raya, dilengkapi rekomendasi kerja Rule-Based Matching.',
    link: 'https://jos.synvorateknologiindonesia.web.id',
    overview:
      'JOS (Job Opportunity Sumenep) adalah platform agregator lowongan pekerjaan berbasis web yang mengumpulkan informasi lowongan dari berbagai sumber publik (seperti Glints, JobStreet, KitaLulus, Pintarnya) dan sumber resmi pemerintah (Disnaker Sumenep), lalu menyajikannya dalam satu portal yang terstruktur dan mudah dicari khusus untuk warga Sumenep dan Madura Raya. JOS bukan marketplace lowongan: setiap lowongan tetap mengarahkan pelamar ke halaman sumber asli, JOS hanya berperan sebagai mesin pencari dan pengumpul informasi.',
    problem:
      'Info lowongan kerja di Sumenep tersebar di banyak platform berbeda, menyulitkan pencari kerja, terutama di wilayah kepulauan.',
    solution:
      'Portal agregator lowongan dari berbagai sumber publik dan pemerintah, dengan rekomendasi Rule-Based Matching yang transparan.',
    role: 'Diinisiasi dan dikembangkan penuh oleh tim SYNVORA sebagai inovasi mandiri, bukan proyek pesanan.',
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
    kind: 'innovation',
    status: 'Live',
    year: 2026,
    categories: ['Pendidikan'],
    image: '/images/blog/Landing-BBM.png',
    shortDescription:
      'Platform edukasi digital untuk belajar, mencari, dan menerjemahkan Bahasa Madura secara berjenjang, bisa dipasang sebagai aplikasi dan dipakai tanpa koneksi internet.',
    link: 'https://belajar-bahasa-madura.synvorateknologiindonesia.web.id/',
    overview:
      'BBM (Belajar Bahasa Madura) adalah satu platform untuk belajar, mencari, dan menerjemahkan Bahasa Madura, dipakai bersama di sekolah maupun dipelajari sendiri di rumah. Materinya disusun berjenjang mengikuti kurikulum asli: mulai dari huruf & ejaan, suku kata, kata, hingga kalimat dan tingkatan basa (Ondhâghen Basa, dari Enjâ\'-Iyâ, Engghi-Enten, sampai Engghi-Bhunten) yang jadi ciri khas tata krama berbahasa Madura. BBM bisa dipasang sebagai aplikasi (PWA) dan tetap dipakai tanpa koneksi internet, cocok untuk sekolah dengan akses internet terbatas.',
    problem:
      'Bahasa Madura berisiko tergerus karena minim media belajar digital yang terstruktur dan mudah diakses generasi muda.',
    solution:
      'Platform kamus, penerjemah, dan jalur belajar berjenjang Bahasa Madura yang bisa dipakai offline sebagai PWA.',
    role: 'Diinisiasi dan dikembangkan penuh oleh tim SYNVORA sebagai inovasi mandiri, bukan proyek pesanan.',
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
    kind: 'innovation',
    status: 'Prototype',
    year: 2026,
    categories: ['Pemerintahan', 'Sistem Informasi', 'AI'],
    image: '/images/blog/landing-page-sep.jpeg',
    shortDescription:
      'Platform pendukung keputusan berbasis dampak sekaligus kalender publik resmi untuk event daerah Sumenep, inovasi SYNVORA di Anugerah Inovasi Daerah 2026.',
    link: null,
    overview:
      'SEP (Smart Event Sumenep) adalah decision-support platform untuk event daerah yang sekaligus berfungsi sebagai kalender publik resmi. Setiap event, dari Kerapan Sapi, Petik Laut, Festival Musik Tong-Tong, hingga Madura Culture Fest, dicatat per penyelenggaraan tahunan agar dampaknya bisa dibandingkan secara konsisten, sementara masyarakat mendapat satu sumber informasi event yang resmi dan bisa diandalkan. SEP adalah inovasi masyarakat yang diusung SYNVORA di Anugerah Inovasi Daerah (AID) 2026 yang digelar BRIDA Kabupaten Sumenep. Saat ini SEP masih berstatus prototipe/submission, belum memiliki tautan publik yang live.',
    problem:
      'Belum ada cara konsisten untuk mengukur dan membandingkan dampak event budaya/pariwisata daerah dari tahun ke tahun.',
    solution:
      'Platform pendukung keputusan berbasis skor dampak (ekonomi & antusiasme digital) sekaligus kalender event publik resmi.',
    role: 'Diinisiasi dan dikembangkan oleh tim SYNVORA sebagai inovasi mandiri, diajukan ke Anugerah Inovasi Daerah 2026 BRIDA Kabupaten Sumenep.',
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

  // ================= SOLUTIONS (client / institutional work) =================
  {
    id: 'ds-studio',
    title: 'DS Studio',
    kind: 'solution',
    status: 'Live',
    categories: ['Website', 'UMKM'],
    image: '/images/portfolio/dsstudio[ds-studio.vercel.app].png',
    shortDescription:
      'Website resmi DS Studio, studio foto dan videografi di Sumenep, lengkap dengan galeri portofolio, alur booking, dan FAQ.',
    link: 'https://ds-studio.vercel.app',
    overview:
      'Website resmi DS Studio, studio foto dan videografi di Kota Sumenep, Madura. Website ini menampilkan sembilan kategori layanan (wedding & akad nikah, prewedding, wisuda, maternity & tujuh bulanan, portrait & personal branding, foto studio couple & keluarga, event & instansi, video dokumentasi, serta undangan digital), galeri portofolio per kategori, halaman Tentang, alur Cara Booking, FAQ, dan kontak langsung via WhatsApp dan Instagram.',
    problem:
      'DS Studio belum punya kanal digital resmi untuk menampilkan portofolio dan menjelaskan layanan, sehingga calon klien harus menanyakan hal yang sama berulang kali lewat chat sebelum booking.',
    solution:
      'Website satu halaman dengan galeri portofolio per kategori, penjelasan layanan, alur booking 4 langkah, dan FAQ, yang mengarahkan calon klien langsung ke WhatsApp untuk kelanjutan transaksi.',
    role: 'Perancangan dan pengembangan website untuk DS Studio.',
    features: [
      'Galeri portofolio dengan kategori Wedding, Prewedding, Wisuda, Maternity, Portrait, Studio, dan Event',
      'Penjelasan 9 kategori layanan, dari wedding & akad nikah hingga undangan digital',
      'Alur Cara Booking 4 langkah: chat WhatsApp, pilih paket, kunci jadwal, sesi & terima hasil',
      'Halaman FAQ yang menjawab pertanyaan umum soal lokasi, harga, foto outdoor, dan area layanan',
      'Peta lokasi studio dan tombol kontak langsung via WhatsApp dan Instagram',
    ],
    benefits: [
      'Calon klien bisa melihat portofolio dan memahami cakupan layanan sebelum menghubungi studio',
      'Alur booking yang jelas memangkas pertanyaan berulang di WhatsApp',
      'Desain responsif yang nyaman diakses dari ponsel, perangkat utama calon klien',
    ],
    coolFeatures: [
      'Tombol WhatsApp mengambang yang selalu terlihat di setiap halaman untuk mempercepat kontak',
      'FAQ yang ditulis dari pertanyaan nyata calon klien soal lokasi, harga, dan area layanan, bukan daftar generik',
    ],
  },
  {
    id: 'labkesda-sumenep',
    title: 'Website UPTD Labkesda Sumenep',
    kind: 'solution',
    status: 'Live',
    categories: ['Website', 'Pemerintahan'],
    image: '/images/portfolio/labkesdasumenep[labkesdasumenep.id].png',
    shortDescription:
      'Website resmi UPTD Laboratorium Kesehatan Daerah Kabupaten Sumenep, lengkap dengan pendaftaran online dan informasi layanan.',
    link: 'https://labkesdasumenep.id',
    overview:
      'Website resmi milik UPTD Laboratorium Kesehatan Daerah Kabupaten Sumenep, dirancang sebagai kanal utama informasi dan pendaftaran layanan pemeriksaan laboratorium bagi masyarakat.',
    problem:
      'Masyarakat belum punya kanal resmi untuk melihat layanan laboratorium kesehatan daerah dan mendaftar pemeriksaan tanpa datang langsung.',
    solution:
      'Website resmi UPTD Labkesda Sumenep dengan pendaftaran online, informasi layanan, dan kanal pengaduan masyarakat.',
    role: 'Perancangan, pengembangan, dan peluncuran website untuk UPTD Labkesda Sumenep.',
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
    kind: 'solution',
    status: 'Live',
    categories: ['Website', 'Kesehatan'],
    image: '/images/portfolio/produli[produli.labkesdasumenep.id].png',
    shortDescription:
      'Platform kesehatan preventif berbasis data laboratorium dengan analisis risiko otomatis dan pemantauan kunjungan real-time.',
    link: 'https://produli.labkesdasumenep.id',
    overview:
      'Platform kesehatan preventif yang membantu tenaga medis memantau peserta program pengelolaan penyakit kronis (Prolanis) berbasis data laboratorium.',
    problem:
      'Tenaga medis kesulitan memantau peserta program Prolanis secara konsisten karena data pemeriksaan tersebar dan dicatat manual.',
    solution:
      'Dashboard yang mengolah data laboratorium menjadi analisis risiko otomatis dan pemantauan kunjungan peserta secara real-time.',
    role: 'Perancangan dan pengembangan dashboard Produli untuk UPTD Labkesda Sumenep.',
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
    kind: 'solution',
    status: 'Live',
    categories: ['Website', 'Aplikasi Mobile'],
    image: '/images/portfolio/silacare[silacare.labkesdasumenep.id].png',
    shortDescription:
      'Portal digital pasien (hybrid web app/PWA) untuk melihat riwayat pemeriksaan lab, antrean online, dan pendaftaran pemeriksaan gratis.',
    link: 'https://silacare.labkesdasumenep.id',
    overview:
      'Portal digital pasien berbentuk hybrid web app/PWA yang memudahkan masyarakat mengakses layanan laboratorium kesehatan tanpa perlu datang langsung untuk sekadar bertanya atau mendaftar. Bisa dibuka langsung lewat browser maupun dipasang seperti aplikasi di ponsel.',
    problem:
      'Pasien harus datang langsung ke laboratorium hanya untuk bertanya riwayat pemeriksaan, mengantre, atau mendaftar.',
    solution:
      'Portal digital pasien (hybrid web app/PWA) untuk riwayat pemeriksaan, antrean online, dan pendaftaran pemeriksaan gratis.',
    role: 'Perancangan dan pengembangan portal SiLACARE sebagai hybrid web app/PWA untuk UPTD Labkesda Sumenep.',
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
    kind: 'solution',
    status: 'Live',
    categories: ['Website', 'Pemerintahan', 'AI'],
    image: '/images/portfolio/chat-bot[brida.sumenepkab.go.id slash chatbot].png',
    shortDescription:
      'Chatbot AI untuk Badan Riset dan Inovasi Daerah (BRIDA) Kabupaten Sumenep, membantu masyarakat mendapatkan informasi riset dan inovasi daerah secara cepat.',
    link: 'https://brida.sumenepkab.go.id/chatbot',
    overview:
      'Chatbot berbasis kecerdasan buatan untuk Badan Riset dan Inovasi Daerah (BRIDA) Kabupaten Sumenep, membantu masyarakat mendapatkan informasi riset dan inovasi daerah secara cepat dan interaktif.',
    problem:
      'Masyarakat kesulitan mendapat informasi program riset dan inovasi daerah dengan cepat di luar jam layanan.',
    solution:
      'Chatbot berbasis AI yang menjawab pertanyaan seputar riset dan inovasi daerah 24/7 di situs resmi BRIDA Kabupaten Sumenep.',
    role: 'Perancangan dan pengembangan chatbot Kancana untuk BRIDA Kabupaten Sumenep.',
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

export function getProjectsByKind(kind: ProjectKind): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.kind === kind);
}
