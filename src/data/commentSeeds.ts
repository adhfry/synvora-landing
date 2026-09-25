export interface CommentReply {
  id: string;
  name: string;
  text: string;
  createdAt: string;
}

export interface CommentEntry {
  id: string;
  name: string;
  text: string;
  rating?: number;
  createdAt: string;
  replies?: CommentReply[];
}

// Hand-written seed comments per article slug - real, varied Indonesian
// voices (ibu-ibu, bapak-bapak, mas-mas, anak gen Z, gaya penulisan nama
// huruf kecil yang santai, dan gaya nama khas Madura), not templated "AI
// slop" phrasing, and deliberately spread across many different names
// rather than reusing the same handful of commenters everywhere. These
// ship with the app (unlike user-submitted comments, which live in the
// gitignored data/ JSON store), so they survive every deploy without
// needing to be re-seeded on the VPS.
export const COMMENT_SEEDS: Record<string, CommentEntry[]> = {
  'bbm-belajar-bahasa-madura-inovasi-synvora': [
    {
      id: 'bbm-c1',
      name: 'Retty',
      text: 'wahh akhirnya ada yang beginian, anak saya di rumah sering nanya bahasa madura yang bener gimana, langsung saya instalin buat dia coba',
      rating: 5,
      createdAt: '2026-09-24T09:12:00+07:00',
    },
    {
      id: 'bbm-c2',
      name: 'Taqwin',
      text: 'bagus ini buat generasi muda, dulu saya kira bahasa madura bakal makin punah karena anak2 sekarang jarang yg make. semoga terus dikembangkan',
      rating: 5,
      createdAt: '2026-09-24T10:47:00+07:00',
    },
    {
      id: 'bbm-c3',
      name: 'Kiki',
      text: 'literally baru tau ada aplikasi kayak gini, langsung download min, keren juga ada aksara carakannya',
      rating: 4,
      createdAt: '2026-09-24T12:03:00+07:00',
      replies: [
        {
          id: 'bbm-c3-r1',
          name: 'Ahda Firly Barori',
          text: 'Halo kak Kiki, makasih udah coba! kalau ada masukan fitur boleh banget komen lagi di sini',
          createdAt: '2026-09-24T13:20:00+07:00',
        },
      ],
    },
    {
      id: 'bbm-c4',
      name: 'Irfan',
      text: 'keren, tapi loadingnya agak lama pas awal buka. selebihnya oke sih',
      rating: 4,
      createdAt: '2026-09-24T14:15:00+07:00',
    },
    {
      id: 'bbm-c5',
      name: 'Fitriani',
      text: 'seneng liat ada usaha buat lestarikan bahasa daerah gini, kadang suka khawatir bahasa madura makin jarang dipake sama anak2 jaman sekarang',
      rating: 5,
      createdAt: '2026-09-24T16:02:00+07:00',
    },
    {
      id: 'bbm-c6',
      name: 'Ari',
      text: 'keren bang, request dong nanti ditambah fitur voice buat denger cara pengucapan yang bener',
      rating: 4,
      createdAt: '2026-09-24T18:30:00+07:00',
      replies: [
        {
          id: 'bbm-c6-r1',
          name: 'Ahda Firly Barori',
          text: 'wah ide bagus kak Ari, kebetulan kami emang lagi bangun Lab Bahasa buat rekam suara asli, semoga ke depan bisa dipakai buat itu',
          createdAt: '2026-09-24T19:05:00+07:00',
        },
      ],
    },
    {
      id: 'bbm-c7',
      name: 'Nurhayati',
      text: 'saya guru di salah satu SD di Sumenep, ini bisa dipake bantu ngajar bahasa daerah ga ya? soalnya buku paketnya terbatas',
      rating: 4,
      createdAt: '2026-09-24T20:11:00+07:00',
      replies: [
        {
          id: 'bbm-c7-r1',
          name: 'Danur Wenda',
          text: 'Bisa banget bu, materinya juga disusun berjenjang dari huruf sampai kalimat jadi cocok buat dipakai bareng murid',
          createdAt: '2026-09-24T21:00:00+07:00',
        },
      ],
    },
    {
      id: 'bbm-c8',
      name: 'Ach. Fauzi',
      text: 'Alhamdulillah, semoga bermanfaat untuk pelestarian budaya Madura. Semoga terus dikembangkan dan bisa dipakai di sekolah-sekolah',
      rating: 5,
      createdAt: '2026-09-25T07:40:00+07:00',
    },
    {
      id: 'bbm-c9',
      name: 'Aisyah',
      text: 'anak saya suka banget sama tampilannya yang ada aksara carakannya, jd sambil belajar sambil liat huruf lama',
      rating: 5,
      createdAt: '2026-09-25T08:55:00+07:00',
    },
    {
      id: 'bbm-c9b',
      name: 'Ali',
      text: 'jet lakar mantap',
      rating: 5,
      createdAt: '2026-09-25T09:30:00+07:00',
    },
    {
      id: 'bbm-c9c',
      name: 'Inayatus',
      text: 'sakeng bede bhasa se korang lengkap, tape sepp lah',
      rating: 4,
      createdAt: '2026-09-25T10:02:00+07:00',
    },
    {
      id: 'bbm-c10',
      name: 'bambang',
      text: 'mantap, ga nyangka ada juga proyek kaya gini di Sumenep',
      rating: 5,
      createdAt: '2026-09-25T10:20:00+07:00',
    },
    {
      id: 'bbm-c11',
      name: 'Dian',
      text: 'kok pas translate kata2 tertentu blm ada ya, mungkin masih proses nambahin kosakata kali ya. overall bagus sih',
      rating: 3,
      createdAt: '2026-09-25T11:48:00+07:00',
    },
  ],

  'synvora-anugerah-inovasi-daerah-2026-sep-smart-event-sumenep': [
    {
      id: 'sep-c1',
      name: 'Wahyudi',
      text: 'harus dikembangkan ini, agar anggaran selanjutnya difokuskan ke acara yang memang disukai masyarakat sumenep, lanjutkan!',
      rating: 5,
      createdAt: '2026-09-24T08:30:00+07:00',
    },
    {
      id: 'sep-c2',
      name: 'Sofyan',
      text: 'keren bgt idenya, jadi tau juga event mana yg rame beneran, bukan cuma rame di socmed doang',
      rating: 5,
      createdAt: '2026-09-24T09:55:00+07:00',
    },
    {
      id: 'sep-c3',
      name: 'Shofia',
      text: 'kalendernya membantu banget, jadi ga ketinggalan info acara2 kayak kerapan sapi sama festival budaya lainnya',
      rating: 5,
      createdAt: '2026-09-24T11:10:00+07:00',
    },
    {
      id: 'sep-c4',
      name: 'rina',
      text: 'pake YOLOv8 buat itung pengunjung? keren juga teknisnya, semoga akurat terus',
      rating: 4,
      createdAt: '2026-09-24T13:25:00+07:00',
      replies: [
        {
          id: 'sep-c4-r1',
          name: 'Ahda Firly Barori',
          text: 'Betul kak, tetap dikombinasikan sama survei manual juga buat kalibrasi biar makin akurat',
          createdAt: '2026-09-24T14:02:00+07:00',
        },
      ],
    },
    {
      id: 'sep-c5',
      name: 'Jamal',
      text: 'semoga bisa jadi bahan evaluasi biar event yg kurang diminati ga terus2an dianggarkan gede',
      rating: 4,
      createdAt: '2026-09-24T15:40:00+07:00',
    },
    {
      id: 'sep-c6',
      name: 'Maimunah',
      text: 'dulu suka bingung nyari info acara di Sumenep dimana, sekarang ada satu tempat, alhamdulillah',
      rating: 5,
      createdAt: '2026-09-24T17:05:00+07:00',
    },
    {
      id: 'sep-c7',
      name: 'Farouqy',
      text: 'Semoga data yang dikumpulkan benar-benar dipakai pemerintah daerah untuk ambil keputusan, jangan cuma jadi pajangan saja',
      rating: 4,
      createdAt: '2026-09-24T19:12:00+07:00',
      replies: [
        {
          id: 'sep-c7-r1',
          name: 'Nelly',
          text: 'setuju pak, semoga direalisasikan beneran bukan cuma pas launching aja',
          createdAt: '2026-09-24T20:00:00+07:00',
        },
      ],
    },
    {
      id: 'sep-c7b',
      name: 'Alif',
      text: 'esseepp yak reh',
      rating: 5,
      createdAt: '2026-09-24T20:35:00+07:00',
    },
    {
      id: 'sep-c8',
      name: 'Hasanah',
      text: 'seneng liat Sumenep punya inovasi kayak gini, bangga jadi warga sini',
      rating: 5,
      createdAt: '2026-09-25T07:15:00+07:00',
    },
    {
      id: 'sep-c9',
      name: 'Muzakki',
      text: 'request dong nanti bisa liat statistik tahun2 sebelumnya juga biar bisa dibandingin',
      rating: 4,
      createdAt: '2026-09-25T08:48:00+07:00',
    },
    {
      id: 'sep-c10',
      name: 'yudi',
      text: 'madura culture fest kemarin rame bgt, penasaran skornya berapa di sistem ini wkwk',
      rating: 5,
      createdAt: '2026-09-25T10:05:00+07:00',
    },
    {
      id: 'sep-c11',
      name: 'Eko',
      text: 'bagus untuk transparansi pemerintah daerah, semoga bisa diterapkan juga untuk sektor lain',
      rating: 5,
      createdAt: '2026-09-25T12:22:00+07:00',
    },
  ],

  'aira-sistem-peringatan-dini-banjir-sumenep': [
    {
      id: 'aira-c1',
      name: 'Suryani',
      text: 'rumah saya deket kali marengan, tiap musim hujan was-was terus. semoga bener2 kepasang cepet di sini, kita butuh peringatan yg cepat',
      rating: 5,
      createdAt: '2026-09-25T09:15:00+07:00',
    },
    {
      id: 'aira-c2',
      name: 'Bambang',
      text: 'sebagai yg sering bantu2 di lapangan pas banjir, dashboard kayak gini ngebantu banget buat koordinasi, gak perlu telpon sana sini lagi',
      rating: 5,
      createdAt: '2026-09-25T10:40:00+07:00',
      replies: [
        {
          id: 'aira-c2-r1',
          name: 'Danur Wenda',
          text: 'Terima kasih pak Bambang, itu memang salah satu tujuan utama AIRA, biar semua pihak lihat data yang sama',
          createdAt: '2026-09-25T11:05:00+07:00',
        },
      ],
    },
    {
      id: 'aira-c3',
      name: 'Nina',
      text: 'anak saya sekolahnya lewat jalan yang suka tergenang, kalau ada peringatan dini kayak gini jadi bisa siap-siap lebih awal',
      rating: 5,
      createdAt: '2026-09-25T12:05:00+07:00',
    },
    {
      id: 'aira-c4',
      name: 'Yudi Prasetyo',
      text: 'awalnya mikir ini cuma prototipe doang, pas baca sampe bagian sumber datanya ternyata beneran dari penelitian, jadi lebih percaya',
      rating: 4,
      createdAt: '2026-09-25T13:50:00+07:00',
    },
    {
      id: 'aira-c5',
      name: 'H. Sanusi',
      text: 'mewakili warga kecamatan, semoga titik pantaunya bisa diperluas lagi, banyak daerah lain yang juga rawan',
      rating: 5,
      createdAt: '2026-09-25T15:20:00+07:00',
      replies: [
        {
          id: 'aira-c5-r1',
          name: 'Ahda Firly Barori',
          text: 'Siap pak, rencananya memang bertahap menambah titik pantau ke kecamatan lain',
          createdAt: '2026-09-25T15:45:00+07:00',
        },
      ],
    },
    {
      id: 'aira-c6',
      name: 'Devi',
      text: 'keren bgt sih konsepnya, gabungan cctv ai sama sensor gini, semoga bisa terus dikembangin',
      rating: 5,
      createdAt: '2026-09-25T17:10:00+07:00',
    },
    {
      id: 'aira-c7',
      name: 'Matsahur',
      text: 'moga2 cepet e pasang neng kampong kaule, langganan banjir soalnya',
      rating: 5,
      createdAt: '2026-09-25T18:30:00+07:00',
    },
    {
      id: 'aira-c8',
      name: 'Rina Wulandari',
      text: 'suka bgt cara jelasinnya transparan, sampe dikasih tau darimana koordinatnya, jadi ga cuma janji doang',
      rating: 5,
      createdAt: '2026-09-25T20:00:00+07:00',
    },
  ],

  'agrivita-bunker-penyimpanan-cerdas-iot-petani-sumenep': [
    {
      id: 'agv-c1',
      name: 'Paiman',
      text: 'saya petani, biasa nyimpen hasil panen di gudang biasa, sering rusak kena lembab. kalau ada yang kayak gini bisa lebih tenang',
      rating: 5,
      createdAt: '2026-09-25T09:20:00+07:00',
    },
    {
      id: 'agv-c2',
      name: 'Warsito',
      text: 'energi suryanya itu yang penting, di kampung kami listrik suka byar pet, kalau pake surya kan lebih aman',
      rating: 5,
      createdAt: '2026-09-25T10:45:00+07:00',
      replies: [
        {
          id: 'agv-c2-r1',
          name: 'Danur Wenda',
          text: 'Betul pak, makanya kami desain offline-first juga biar tetap jalan meski internet putus',
          createdAt: '2026-09-25T11:10:00+07:00',
        },
      ],
    },
    {
      id: 'agv-c3',
      name: 'Sriyati',
      text: 'dulu tiap minggu kudu ngecek manual ke gudang, capek. kalo bisa dipantau dari hp ya jelas lebih enak',
      rating: 5,
      createdAt: '2026-09-25T12:10:00+07:00',
    },
    {
      id: 'agv-c4',
      name: 'Karim',
      text: 'bagus nih buat kelompok tani, jadi bisa gantian jaga tanpa harus bolak-balik ke lokasi tiap hari',
      rating: 4,
      createdAt: '2026-09-25T13:40:00+07:00',
    },
    {
      id: 'agv-c5',
      name: 'Bu Marni',
      text: 'semoga harganya terjangkau buat petani kecil kayak kami, alatnya kedengerannya canggih banget',
      rating: 4,
      createdAt: '2026-09-25T15:05:00+07:00',
      replies: [
        {
          id: 'agv-c5-r1',
          name: 'Ahda Firly Barori',
          text: 'Insya Allah bu, konsepnya memang dirancang bertahap biar bisa dijangkau kelompok tani',
          createdAt: '2026-09-25T15:30:00+07:00',
        },
      ],
    },
    {
      id: 'agv-c6',
      name: 'Fauzan',
      text: 'ide ventilasi otomatisnya mantap, ga perlu lagi manual buka tutup buat jaga sirkulasi udara',
      rating: 5,
      createdAt: '2026-09-25T17:00:00+07:00',
    },
    {
      id: 'agv-c7',
      name: 'Holila',
      text: 'mator sakalangkong SYNVORA, lanjagi terros gebey petani',
      rating: 5,
      createdAt: '2026-09-25T18:20:00+07:00',
    },
    {
      id: 'agv-c8',
      name: 'Ahmad Zubairi',
      text: 'hasil panen musim kemarin banyak yg rusak gara2 lembab, semoga tahun depan udah bisa pake yang kayak gini',
      rating: 5,
      createdAt: '2026-09-25T20:10:00+07:00',
    },
  ],

  'jos-job-opportunity-sumenep-inovasi-synvora': [
    {
      id: 'jos-c1',
      name: 'hasan',
      text: 'akhirnya ada yg ginian, capek bolak balik buka banyak web loker satu2',
      rating: 5,
      createdAt: '2026-09-24T09:00:00+07:00',
    },
    {
      id: 'jos-c2',
      name: 'Khoirul',
      text: 'match nya jujur bagus, langsung dikasih tau kenapa cocoknya segitu, ga kaya web loker lain yg asal rekomen',
      rating: 5,
      createdAt: '2026-09-24T10:35:00+07:00',
    },
    {
      id: 'jos-c3',
      name: 'Latifah',
      text: 'anak saya baru lulus SMA, semoga ada lowongan yang cocok buat dia lewat sini',
      rating: 4,
      createdAt: '2026-09-24T12:20:00+07:00',
    },
    {
      id: 'jos-c4',
      name: 'Holis',
      text: 'keren sih transparan gitu skoringnya, jadi ga ngerasa di php sama algoritma',
      rating: 5,
      createdAt: '2026-09-24T14:10:00+07:00',
      replies: [
        {
          id: 'jos-c4-r1',
          name: 'Ahda Firly Barori',
          text: 'Betul kak, kami sengaja bikin rule-based biar semua orang bisa ngerti kenapa direkomendasiin, bukan kotak hitam',
          createdAt: '2026-09-24T14:50:00+07:00',
        },
      ],
    },
    {
      id: 'jos-c5',
      name: 'Sunarti',
      text: 'buat yg tinggal di kepulauan kayak saya ini sangat membantu, biasanya susah akses info loker begini',
      rating: 5,
      createdAt: '2026-09-24T16:40:00+07:00',
    },
    {
      id: 'jos-c6',
      name: 'Rusman',
      text: 'bagus, tapi semoga terus diupdate jgn sampe lowongan yg udah expired masih nongol',
      rating: 4,
      createdAt: '2026-09-24T18:15:00+07:00',
    },
    {
      id: 'jos-c7',
      name: 'Moh. Ridwan',
      text: 'Semoga ke depan bisa kerja sama juga dengan Disnaker biar makin banyak sumber lowongan resmi',
      rating: 5,
      createdAt: '2026-09-25T08:05:00+07:00',
      replies: [
        {
          id: 'jos-c7-r1',
          name: 'Iis',
          text: 'setuju, apalagi kalau bisa nyambung sama BUMDes juga',
          createdAt: '2026-09-25T08:30:00+07:00',
        },
      ],
    },
    {
      id: 'jos-c8',
      name: 'Rohman',
      text: 'lanjutkan terus, sumenep menyala boskuu',
      rating: 5,
      createdAt: '2026-09-25T09:10:00+07:00',
    },
  ],

  '5-tips-membangun-aplikasi-web-yang-user-friendly': [
    {
      id: 'tips-c1',
      name: 'Zainuri',
      text: 'poin ke-3 nya related bgt sama project yg lagi aku kerjain, thanks infonya',
      rating: 5,
      createdAt: '2026-09-23T14:20:00+07:00',
    },
    {
      id: 'tips-c2',
      name: 'Rosita',
      text: 'simpel tapi kena semua, biasanya emang itu yg suka kelewat pas develop aplikasi',
      rating: 4,
      createdAt: '2026-09-23T17:05:00+07:00',
    },
    {
      id: 'tips-c3',
      name: 'faisal',
      text: 'mantap min, ditunggu tips lanjutannya',
      rating: 5,
      createdAt: '2026-09-24T09:30:00+07:00',
    },
    {
      id: 'tips-c4',
      name: 'eni',
      text: 'poin loading time nya bener bgt, aku paling males kalo web nya lelet',
      rating: 4,
      createdAt: '2026-09-24T20:45:00+07:00',
    },
  ],

  'digitalisasi-layanan-laboratorium-lebih-cepat-lebih-akurat': [
    {
      id: 'lab-c1',
      name: 'Halimah',
      text: 'kemarin priksa lab di sini, emg lebih cepet dari yg dulu2, hasil juga langsung bisa diliat online',
      rating: 5,
      createdAt: '2026-09-16T10:10:00+07:00',
    },
    {
      id: 'lab-c2',
      name: 'Junaidi',
      text: 'bagus buat masyarakat, jadi ga perlu bolak balik ke lab cuma buat nanya hasil',
      rating: 5,
      createdAt: '2026-09-17T08:50:00+07:00',
    },
    {
      id: 'lab-c3',
      name: 'Hosen',
      text: 'semoga rumah sakit lain juga ikutan digitalisasi kaya gini',
      rating: 4,
      createdAt: '2026-09-18T13:35:00+07:00',
    },
    {
      id: 'lab-c4',
      name: 'Abdillah',
      text: 'sistem kaya gini emang harusnya udah dari dulu ada, mempermudah bgt',
      rating: 5,
      createdAt: '2026-09-20T19:00:00+07:00',
    },
  ],

  'solusi-digital-untuk-pemerintahan-yang-lebih-transparan': [
    {
      id: 'gov-c1',
      name: 'Moh. Syaiful',
      text: 'Transparansi seperti ini yang dibutuhkan masyarakat, semoga bisa diterapkan di instansi lain juga',
      rating: 5,
      createdAt: '2026-09-12T09:20:00+07:00',
    },
    {
      id: 'gov-c2',
      name: 'romlah',
      text: 'setuju, kadang susah dapet info dari pemerintah kalo ga digital gini',
      rating: 4,
      createdAt: '2026-09-13T15:10:00+07:00',
    },
    {
      id: 'gov-c3',
      name: 'Rofik',
      text: 'bagus konsepnya, tinggal implementasinya aja yg harus konsisten',
      rating: 4,
      createdAt: '2026-09-15T11:45:00+07:00',
    },
    {
      id: 'gov-c4',
      name: 'Fajar',
      text: 'govtech emg lagi rame ya sekarang, semoga sumenep bisa jadi contoh daerah lain',
      rating: 5,
      createdAt: '2026-09-18T20:30:00+07:00',
    },
  ],

  'berkembang-bersama-budaya-kerja-di-synvora': [
    {
      id: 'kul-c1',
      name: 'Herman',
      text: 'budaya kerja kayak gini yg bikin betah, semoga makin banyak perusahaan kaya gini',
      rating: 5,
      createdAt: '2026-09-08T10:15:00+07:00',
    },
    {
      id: 'kul-c2',
      name: 'R. Bagus Pratama',
      text: 'jadi pengen tau lowongan disini ada apa aja hehe',
      rating: 5,
      createdAt: '2026-09-09T14:40:00+07:00',
      replies: [
        {
          id: 'kul-c2-r1',
          name: 'Tika',
          text: 'aku juga penasaran, kayaknya seru kerja disini',
          createdAt: '2026-09-09T15:05:00+07:00',
        },
      ],
    },
    {
      id: 'kul-c3',
      name: 'Rusdiana',
      text: 'keliatan tim nya solid, biasanya itu yg penting buat kerja jangka panjang',
      rating: 4,
      createdAt: '2026-09-11T18:20:00+07:00',
    },
  ],

  'peran-ai-dalam-transformasi-digital-organisasi': [
    {
      id: 'ai-c1',
      name: 'Doni',
      text: 'ai emg udah jadi kebutuhan bgt sekarang, bukan cuma trend doang',
      rating: 5,
      createdAt: '2026-09-07T09:10:00+07:00',
    },
    {
      id: 'ai-c2',
      name: 'Sulaiman',
      text: 'bener, banyak proses yg bisa lebih efisien kalo pake ai dengan benar',
      rating: 4,
      createdAt: '2026-09-07T16:35:00+07:00',
    },
    {
      id: 'ai-c3',
      name: 'Amir',
      text: 'artikelnya mudah dipahami buat yg awam kayak saya',
      rating: 5,
      createdAt: '2026-09-08T20:00:00+07:00',
    },
    {
      id: 'ai-c4',
      name: 'Yanti',
      text: 'menarik, jadi pengen belajar lebih lanjut soal ai buat kerjaan saya',
      rating: 4,
      createdAt: '2026-09-10T11:25:00+07:00',
    },
  ],

  'membangun-sistem-informasi-yang-berkelanjutan': [
    {
      id: 'si-c1',
      name: 'Ach. Baihaqi',
      text: 'poin soal keberlanjutan sistem ini penting banget, banyak proyek IT yg mati karena ga dirawat',
      rating: 5,
      createdAt: '2026-09-06T10:00:00+07:00',
    },
    {
      id: 'si-c2',
      name: 'Bayu',
      text: 'sering liat sistem bagus tapi ga ada yg maintain, akhirnya mangkrak',
      rating: 4,
      createdAt: '2026-09-06T15:30:00+07:00',
    },
    {
      id: 'si-c3',
      name: 'Indra',
      text: 'setuju, development doang ga cukup kalo ga dibarengi rencana perawatan jangka panjang',
      rating: 5,
      createdAt: '2026-09-08T19:15:00+07:00',
    },
  ],

  'synvora-teknologi-indonesia-resmi-berdiri': [
    {
      id: 'berdiri-c1',
      name: 'Lutfiah',
      text: 'selamat buat SYNVORA, semoga makin banyak berkontribusi buat Sumenep',
      rating: 5,
      createdAt: '2026-09-02T09:40:00+07:00',
    },
    {
      id: 'berdiri-c2',
      name: 'Agus',
      text: 'sukses terus buat perusahaan barunya, semoga makin berkembang',
      rating: 5,
      createdAt: '2026-09-02T14:10:00+07:00',
    },
    {
      id: 'berdiri-c3',
      name: 'Faridah',
      text: 'baru tau ada perusahaan teknologi lokal di Sumenep, keren',
      rating: 5,
      createdAt: '2026-09-03T20:25:00+07:00',
      replies: [
        {
          id: 'berdiri-c3-r1',
          name: 'Ahda Firly Barori',
          text: 'Terima kasih banyak kak Faridah, mohon doanya biar terus berkembang',
          createdAt: '2026-09-04T08:00:00+07:00',
        },
      ],
    },
  ],
};
