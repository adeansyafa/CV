import React, { useState, useEffect, useRef } from 'react';
import profilePic from './images/foto.jpg';
import silasImg from './images/Silas.png';
import pmluImg from './images/PMLU.png';
import parkInImg from './images/Park In.png';

/* =========================================================================
   === PANDUAN MENGGANTI / MENAMBAHKAN GAMBAR PROYEK SENDIRI ===
   1. Letakkan file gambar Anda di folder: `src/images/` (misal: project2.png)
   2. Import file tersebut di atas, contoh:
      import project2Img from './images/project2.png';
   3. Ganti nilai `thumbnail` pada daftar proyek di bawah dengan variabel import tersebut.
   ========================================================================= */

/* =========================================================================
   === EDIT DATA PROFIL & HERO DI SINI ===
   Silakan ubah teks, nama, peran, dan foto profil sesuai keinginan Anda.
   ========================================================================= */
const PROFILE_DATA = {
  name: "Kahlil Abrar",
  shortName: "Lill",
  role: "Arabic Language Enthusiast & Junior Data Analyst",
  subRole: "Web Enthusiast & 3D Interactive Explorer",
  welcomeTag: "Welcome to My Domain",
  heroBio:
    "Siswa pemula yang memiliki antusiasme mendalam dalam memadukan dunia pendidikan Pondok Pesantren modern dengan perkembangan teknologi untuk menciptakan pengalaman digital yang intuitif, cepat, dan berkesan.",
  aboutBio1:
    "Halo teman-teman saya Kahlil Abrar, seorang Beginner Developer yang gemar merancang dan membangun aplikasi web modern. Ketertarikan saya berawal dari rasa penasaran tentang bagaimana baris kode dapat bertransformasi menjadi visual interaktif dan sistem fungsional yang membantu banyak orang.",
  aboutBio2:
    "Saat ini saya aktif mengeksplorasi ekosistem HTML, CSS, JavaScript, React, TypeScript, Tailwind CSS, serta integrasi grafis 3D interaktif. Bagi saya, perpaduan desain antarmuka yang bersih dan performa kodingan yang solid adalah kunci dari produk digital masa depan.",
  location: "Balikpapan & Malang, Indonesia",
  status: "Terbuka untuk kolaborasi & magang",

  /* =========================================================================
     <!-- EDIT FOTO PROFIL DI SINI -->
     Foto profil diambil dari file src/images/foto.jpg
     ========================================================================= */
  avatarUrl: profilePic,
};

/* =========================================================================
   === DATA PENGALAMAN KERJA ===
   Silakan tambah, ubah, atau hapus data pengalaman kerja / magang / organisasi.
   ========================================================================= */
interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  typeBadge: string;
  bullets: string[];
  techStack: string[];
}

const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: "exp-1",
    company: "PM Ays-Syifa Balikpapan",
    role: "Arabic language educator",
    period: "Juli 2023 - Juli 2024",
    location: "Balikpapan, Kalimantan Timur",
    typeBadge: "Internship",
    bullets: [
      "Mengembangkan Kemampuan Edukasi pendidikan bahasa arab di jenjang Ibtidaiyah, Tsanawiyah, dan Aliyah.",
      "Meningkatkan skill siswa muda dalam menekunin kebiasaan berbahasa dalam keseharian mereka selama 24 jam.",
      "Berkolaborasi bersama guru pengajar besar dari luar negeri dan luar daerah balikpapan sebagai motivasi.",
      "Mengintegrasikan sistematis two week change proper to be next proper student.",
    ],
    techStack: ["Nahwu", "Shorof", "Balaghoh", "Tasyrif", "Ushl Fiqh", "Muthola'ah"],
  },
  {
    id: "exp-2",
    company: "Creative Web Studio & Freelance",
    role: "Junior Web & Automation Developer",
    period: "Juni 2024 - Sekarang",
    location: "Samarinda, Indonesia",
    typeBadge: "Freelance",
    bullets: [
      "Membangun landing page dan portofolio interaktif klien dengan desain futuristik dark mode dan responsivitas penuh di perangkat mobile.",
      "Mengembangkan skrip otomasi menggunakan Python dan AI API untuk menghasilkan draft artikel blog terstruktur secara otomatis.",
      "Menyusun dokumentasi teknis kodingan agar mudah dikembangkan dan dimaintain oleh klien.",
    ],
    techStack: ["JavaScript", "Python", "Vite", "OpenAI API", "HTML5/CSS3"],
  },
  {
    id: "exp-3",
    company: "PM Limashlahatil Ummah",
    role: "PMLU Teacher",
    period: "Juli 2025 - Sekarang",
    location: "Balikpapan, Kalimantan Timur",
    typeBadge: "Organisasi / Sekolah",
    bullets: [
      "Membimbing rekan siswa dalam memahami konsep fundamental algoritma, logika pemrograman, dan pengenalan Bahasa Pemrograman.",
      "Mengelola dan membimbing basic pattern & networking basic serta showcase aplikasi web internal",
    ],
    techStack: ["C Language", "Java", "Network Engineering", "Leadership", "Team Mentoring", "Master of Ceremony"],
  },
];

/* =========================================================================
   === DATA PENDIDIKAN ===
   Silakan sesuaikan riwayat pendidikan, tahun, lokasi, dan pencapaian Anda.
   ========================================================================= */
interface EducationItem {
  id: string;
  institution: string;
  major: string;
  degree: string;
  period: string;
  location: string;
  statusBadge: string;
  gpaOrScore?: string;
  achievements: string[];
}

const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-1",
    institution: "Universitas Muhammadiyah Malang",
    major: "Teknik Informatika",
    degree: "Sarjana",
    period: "2023 - Sekarang",
    location: "Malang, Jawa Timur",
    statusBadge: "Sedang Menempuh",
    gpaOrScore: "Rata-rata Nilai IPK : 3.50",
    achievements: [
      "Fokus pendalaman pada Front-End Architecture, Database Management, dan Web Application Development.",
      "Mahasiswa Biasa yang berusaha membahagiakan kedua orang tua.",
      "Berpartisipasi dalam perancangan aplikasi administrasi data siswa tingkat sekolah.",
    ],
  },
  {
    id: "edu-2",
    institution: "Pondok Modern Asy-Syifa Balikpapan",
    major: "Pendidikan Tingkat Menengah Atas",
    degree: "Madrasah Aliyah (MA)",
    period: "2027 - 2023",
    location: "Balikpapan, Kalimantan Timur",
    statusBadge: "Alumni Lulusan",
    gpaOrScore: "Predikat: Lulusan Mumtaz",
    achievements: [
      "Membangun fondasi logika matematika, problem solving, dan minat awal dalam dunia Pendidikan Bahasa.",
      "Juara dalam kompetisi logika sains dan komputer antar madrasah.",
      "Pengurus aktif organisasi Pelajar Pondok Modern Bagian Pendidikan.",
    ],
  },
];

/* =========================================================================
   === EDIT DATA STATISTIK DI SINI ===
   ========================================================================= */
const STATS_DATA = [
  { value: "3", label: "Projek Selesai", desc: "Web app & Information System" },
  { value: "3", label: "Sertifikasi", desc: "Akademik HUB Indonesia" },
  { value: "3", label: "Penghargaan", desc: "Kompetisi & prestasi Hari Santri" },
  { value: "47%", label: "Dedikasi Belajar", desc: "Continuous improvement" },
];

/* =========================================================================
   === EDIT DATA KEAHLIAN / TECH STACK DI SINI ===
   ========================================================================= */
const SKILLS_DATA = [
  "React.js",
  "TypeScript",
  "Tailwind CSS v4",
  "JavaScript (ES6+)",
  "HTML5 / CSS3",
  "Node.js",
  "Three.js Basics",
  "Git & GitHub",
  "Vite",
  "Figma (UI/UX)",
];

/* =========================================================================
   === EDIT DAFTAR VIDEO / PLAYLIST YOUTUBE DI SINI ===
   Cukup masukkan ID Video YouTube (contoh: "jfKfPfyJRdk" dari URL watch?v=...).
   Thumbnail dan player akan otomatis diambil langsung dari server YouTube!
   ========================================================================= */
interface YouTubeVideo {
  id: number;
  youtubeId: string;
  title: string;
  channel: string;
  duration: string;
  tag: string;
}

const YOUTUBE_PLAYLIST: YouTubeVideo[] = [
  {
    id: 1,
    youtubeId: "https://youtu.be/RO75uUZiAw0?si=6VHi_7FMP_mxGfTd",
    title: "Teh Hijau 📚 - Official Lyric Video",
    channel: "Tulus",
    duration: "3:31",
    tag: "Indo Pop",
  },
  {
    id: 2,
    youtubeId: "https://youtu.be/csQoHEt9WZA?si=g78UISPwdLLjIOW_",
    title: "Gontor Voice - Nasyid Gontor Medley",
    channel: "Gontor Voice",
    duration: "7:00",
    tag: "Nasyid",
  },
  {
    id: 3,
    youtubeId: "https://youtu.be/GwUu1pM_mAU?si=-ea7LoFsOxnTTjtk",
    title: "Nasyid Gontor - Pengabdi Ilahi",
    channel: "gontortv",
    duration: "4:14",
    tag: "Nasyid",
  },
  {
    id: 4,
    youtubeId: "https://youtu.be/pkCyfBibIbI?si=46jY5oX563xjSIel",
    title: "Meghan Trainor 🌌 - Better When I'm Dancin'",
    channel: "Meghan Trainor",
    duration: "2:57",
    tag: "Pop",
  },
];

/* =========================================================================
   === EDIT DUMMY DATA PROYEK DI SINI ===
   ========================================================================= */
interface Project {
  id: string;
  title: string;
  category: "All" | "Information System" | "Web App" | "AI & Bot" | "Database" | string;
  description: string;
  detailedDescription: string;
  features: string[];
  techStack: string[];
  thumbnail: string;
  liveUrl?: string;
  githubUrl?: string;
}

const PROJECTS_DATA: Project[] = [
  {
    id: "Silas Asy-Syifa",
    title: "Silas Asy-Syifa",
    category: "Information System",
    description:
      "Platform showcase informasi akademik dan administrasi sekolah, mempermudah akses informasi bagi siswa dan orang tua.",
    detailedDescription:
      "Sistem Aplikasi Layanan Pendidikan Asy-Syifa merupakan platform terintegrasi yang dirancang khusus untuk mendukung manajemen administrasi dan informasi akademik di lingkungan Pondok Modern Asy-Syifa. Sistem ini menyediakan fitur-fitur esensial seperti pengelolaan data santri, pelaporan nilai, presensi, serta sistem notifikasi digital yang memastikan alur komunikasi antara pihak sekolah, guru, dan wali santri berjalan lancar.",
    features: [
      "Antarmuka modern dan responsif",
      "Performa optimal dengan arsitektur SPA",
      "Struktur komponen modular dan reusable",
      "Optimasi tampilan di perangkat mobile maupun desktop",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Canvas FX"],
    /* <!-- GAMBAR PROYEK 1: Menggunakan Silas.png yang sudah di-import --> */
    thumbnail: silasImg,
    liveUrl: "https://silasasysyifabalikpapan.netlify.app/",
    githubUrl: "https://github.com/adeansyafa/Asy-Syifa-1.git",
  },
  {
    id: "Promote Web",
    title: "Promote Web",
    category: "Education Web",
    description:
      "Promote Web adalah platform website yang digunakan untuk mempromosikan sekolah dan informasi akademik yang terdapat di sekolah tersebut, mempermudah akses informasi bagi siswa dan orang tua.",
    detailedDescription:
      "Solusi cerdas untuk menghasilkan draf artikel blog berkualitas tinggi dalam hitungan detik. Pengguna cukup memasukkan kata kunci atau topik utama, dan bot akan mengolah struktur judul, sub-bab, serta ringkasan siap terbit.",
    features: [
      "Hero Section yang interaktif",
      "Pembukti Sosial yang selalu update",
      "Komunikasi dan Handle Cepat",
      "Pengaturan tone suara (formal, santai, persuasif)",
    ],
    techStack: ["Node.js", "OpenAI API", "Tailwind CSS", "JavaScript"],
    /* <!-- GAMBAR PROYEK 2: Menggunakan PMLU.png --> */
    thumbnail: pmluImg,
    liveUrl: "#",
    githubUrl: "https://github.com/adeansyafa",
  },
  {
    id: "park-in",
    title: "PARK IN",
    category: "Database",
    description:
      "Sistem administrasi basis data parkir dan manajemen operasional kendaraan dengan operasi CRUD terstruktur.",
    detailedDescription:
      "Park In adalah sistem basis data dan aplikasi manajemen parkir terpadu yang dirancang untuk mengelola data masuk-keluar kendaraan, perhitungan tarif, rekapitulasi data, serta pemantauan ketersediaan slot parkir secara real-time.",
    features: [
      "Operasi CRUD data kendaraan dan catatan parkir",
      "Filter pencarian nomor plat dan status parkir",
      "Manajemen kapasitas dan ketersediaan slot",
      "Validasi dan pencatatan transaksi secara real-time",
    ],
    techStack: ["React", "Tailwind CSS", "REST API", "Database Engine"],
    /* <!-- GAMBAR PROYEK 3: Menggunakan Park In.png --> */
    thumbnail: parkInImg,
    liveUrl: "#",
    githubUrl: "https://github.com/FarrelAnshari/Project_Mobile.git",
  },
];

/* =========================================================================
   === EDIT DATA KOMENTAR AWAL (GUESTBOOK) DI SINI ===
   ========================================================================= */
interface CommentItem {
  id: string;
  name: string;
  message: string;
  timeAgo: string;
  avatarColor: string;
}

const INITIAL_COMMENTS: CommentItem[] = [
  {
    id: "1",
    name: "Hamdan Muhammad",
    message: "Portofolionya keren banget broo! Animasi canvas dan player youtube sangat rapi dan estetik. Sukses terus!",
    timeAgo: "2 jam yang lalu",
    avatarColor: "from-cyan-500 to-blue-600",
  },
  {
    id: "2",
    name: "Budi Santoso",
    message: "Projek Web Promote sangat berpotensi. Keren melihat siswa Ponpes sudah mahir teknologi modern seperti ini.",
    timeAgo: "Kemarin",
    avatarColor: "from-sky-400 to-indigo-600",
  },
  {
    id: "3",
    name: "Akbar Rahman",
    message: "Desain visualnya clean banget, paduan warnanya pas di mata. Semangat terus belajarnya!",
    timeAgo: "3 hari yang lalu",
    avatarColor: "from-teal-400 to-cyan-600",
  },
];

/* =========================================================================
   === EDIT LINK SOSIAL MEDIA & KONTAK DI SINI ===
   ========================================================================= */
const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/adeansyafa?tab=repositories",
    username: "@adeansyafa",
    iconName: "github",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/therbaikk_?srtk=ZWZ4MWhlbmx5azBw",
    username: "@therbaikk_",
    iconName: "instagram",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@blizzard_beliung?is_from_webapp=1&sender_device=pc",
    username: "@Youyuta",
    iconName: "tiktok",
  },
];

const CONTACT_INFO = {
  email: "kaalil08@webmail.umm.ac.id",
  telegram: "@kaalill",
  address: "Samarinda, Kalimantan Timur, Indonesia",
};

/* =========================================================================
   === INLINE SVG ICONS (Tidak Memerlukan Dependensi Tambahan) ===
   ========================================================================= */
const IconCode = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const IconSparkles = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const IconBriefcase = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconGraduation = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" />
  </svg>
);

const IconLocation = () => (
  <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconCalendar = () => (
  <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const IconCheck = () => (
  <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const IconPlay = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const IconPause = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const IconSkipNext = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
  </svg>
);

const IconSkipPrev = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
  </svg>
);

const IconYouTube = () => (
  <svg className="w-6 h-6 fill-[#FF0000]" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const IconExternalLink = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const IconGithub = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const IconInstagram = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const IconTiktok = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const IconMessage = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const IconSend = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const IconClose = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

/* =========================================================================
   === HELPER FUNCTION YOUTUBE ===
   Mengekstrak ID video secara otomatis baik jika user memasukkan ID saja
   maupun URL penuh YouTube (https://youtu.be/... atau watch?v=...).
   ========================================================================= */
const extractYoutubeId = (urlOrId: string): string => {
  if (!urlOrId) return "";
  const trimmed = urlOrId.trim();
  const match = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : trimmed;
};

/* =========================================================================
   === KOMPONEN UTAMA (APP) ===
   ========================================================================= */
export default function App() {
  // Navigation State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // YouTube Player State
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Projects Filter & Modal State
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [notFoundModalProject, setNotFoundModalProject] = useState<Project | null>(null);

  // Kategori filter dinamis (otomatis menyesuaikan kategori proyek yang ada)
  const projectCategories = ["All", ...Array.from(new Set(PROJECTS_DATA.map((p) => p.category)))];

  // Handler untuk Live URL (Menampilkan pop-up 404 jika belum ada live URL)
  const handleLiveUrlClick = (e: React.MouseEvent, project: Project) => {
    if (!project.liveUrl || project.liveUrl.trim() === '#' || !project.liveUrl.startsWith('http')) {
      e.preventDefault();
      setNotFoundModalProject(project);
    }
  };

  // Guestbook / Komentar State
  // Komentar bawaan kodingan (INITIAL_COMMENTS) selalu tampil secara dinamis sesuai isi kodingan Anda.
  // Komentar pengunjung yang dikirim lewat form akan disimpan di state & localStorage.
  const [visitorComments, setVisitorComments] = useState<CommentItem[]>(() => {
    const saved = localStorage.getItem("kahlil_visitor_comments");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });
  const [guestName, setGuestName] = useState("");
  const [guestMessage, setGuestMessage] = useState("");
  const [commentSuccess, setCommentSuccess] = useState(false);

  // Quick Contact Form State
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactSent, setContactSent] = useState(false);

  // 3D Canvas Background Ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Hapus cache lama sekali jalan agar komentar yang Anda edit di kodingan langsung muncul
  useEffect(() => {
    if (localStorage.getItem("kahlil_guestbook_comments")) {
      localStorage.removeItem("kahlil_guestbook_comments");
    }
  }, []);

  // Simpan komentar pengunjung baru ke localStorage
  useEffect(() => {
    localStorage.setItem("kahlil_visitor_comments", JSON.stringify(visitorComments));
  }, [visitorComments]);

  // Gabungkan komentar pengunjung baru dengan INITIAL_COMMENTS dari kodingan Anda
  const allComments = [...visitorComments, ...INITIAL_COMMENTS];


  // Efek Latar Belakang 3D Particle Network Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const numParticles = Math.min(Math.floor((width * height) / 18000), 65);
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 0.8 + 0.2,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.22;
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx * p.z;
        p.y += p.vy * p.z;

        const mdx = mouseX - p.x;
        const mdy = mouseY - p.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 120) {
          p.x -= (mdx / mDist) * 0.8;
          p.y -= (mdy / mDist) * 0.8;
        }

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = `rgba(56, 189, 248, ${0.4 + p.z * 0.5})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * p.z, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Filter Projek
  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  // Handle Kirim Komentar
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestMessage.trim()) return;

    const newComment: CommentItem = {
      id: Date.now().toString(),
      name: guestName.trim(),
      message: guestMessage.trim(),
      timeAgo: "Baru saja",
      avatarColor: "from-cyan-400 to-sky-500",
    };

    setVisitorComments([newComment, ...visitorComments]);
    setGuestName("");
    setGuestMessage("");
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 4000);
  };

  // Handle Kirim Kontak Cepat
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setContactSent(true);
    setContactForm({ name: "", email: "", message: "" });
    setTimeout(() => setContactSent(false), 4000);
  };

  const currentVideo = YOUTUBE_PLAYLIST[currentVideoIndex];
  const currentVidId = extractYoutubeId(currentVideo.youtubeId);

  return (
    <div className="relative min-h-screen text-slate-100 bg-[#080c14] selection:bg-cyan-500 selection:text-slate-950 font-sans">
      {/* =========================================================================
          === LATAR BELAKANG KANVAS 3D & GLOW LIGHT ORBS ===
          ========================================================================= */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-60"
        aria-hidden="true"
      />

      <div className="fixed top-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-[45%] right-[-10%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Grid Pattern Subtil */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* =========================================================================
            === NAVBAR / HEADER DENGAN MENU LENGKAP ===
            ========================================================================= */}
        <header className="sticky top-4 z-40 px-4 max-w-6xl mx-auto w-full">
          <nav className="flex items-center justify-between px-5 sm:px-6 py-3.5 rounded-2xl glass-panel shadow-lg shadow-black/30 border border-slate-800/80">
            {/* Logo / Monogram */}
            <a href="#hero" className="flex items-center gap-2.5 group">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-slate-950 text-base shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                A
              </span>
              <span className="font-semibold tracking-wide text-sm sm:text-base text-slate-200 group-hover:text-cyan-400 transition-colors">
                {PROFILE_DATA.shortName}
                <span className="text-cyan-400">.dev</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 text-xs xl:text-sm font-medium text-slate-400">
              <a href="#hero" className="hover:text-cyan-400 transition-colors">
                Beranda
              </a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">
                Tentang
              </a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors">
                Pengalaman
              </a>
              <a href="#education" className="hover:text-cyan-400 transition-colors">
                Pendidikan
              </a>
              <a href="#youtube" className="hover:text-red-400 transition-colors flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                YouTube
              </a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">
                Projek
              </a>
              <a href="#guestbook" className="hover:text-cyan-400 transition-colors">
                Buku Tamu
              </a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">
                Kontak
              </a>
            </div>

            {/* Status Pill & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/70 border border-slate-700/60 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Available</span>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-2 p-5 rounded-2xl glass-panel border border-slate-800 flex flex-col gap-2.5 shadow-xl text-sm font-medium animate-fade-in">
              <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="py-1.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-cyan-400">Beranda</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-1.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-cyan-400">Tentang</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-1.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-cyan-400">Pengalaman Kerja</a>
              <a href="#education" onClick={() => setMobileMenuOpen(false)} className="py-1.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-cyan-400">Pendidikan</a>
              <a href="#youtube" onClick={() => setMobileMenuOpen(false)} className="py-1.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-red-400">YouTube Lounge</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-1.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-cyan-400">Portofolio Projek</a>
              <a href="#guestbook" onClick={() => setMobileMenuOpen(false)} className="py-1.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-cyan-400">Buku Tamu</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-1.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-cyan-400">Kontak</a>
            </div>
          )}
        </header>

        {/* =========================================================================
            === HERO SECTION (LENGKAP DENGAN FOTO PROFIL MODERN) ===
            ========================================================================= */}
        <section
          id="hero"
          className="min-h-[85vh] flex items-center justify-center px-4 py-16 md:py-24 relative"
        >
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Welcome Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs sm:text-sm font-medium text-cyan-300 mb-6 glow-cyan">
              <IconSparkles />
              <span>{PROFILE_DATA.welcomeTag}</span>
            </div>

            {/* =====================================================================
                <!-- EDIT FOTO PROFIL DI SINI -->
                Foto Profil Modern Berbingkai Glow Cyan & Floating Status Indicator
                ===================================================================== */}
            <div className="relative group mb-8">
              {/* Efek Lingkaran Glow Aksen Cyan */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500" />

              {/* Bingkai Foto Profil Melingkar */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-slate-950 glow-avatar-hero">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-cyan-400/40 bg-slate-900">
                  <img
                    src={PROFILE_DATA.avatarUrl}
                    alt={PROFILE_DATA.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Status Badge Melayang di Bawah Foto */}
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-slate-950/90 border border-cyan-500/50 backdrop-blur-md shadow-lg flex items-center gap-1.5 whitespace-nowrap text-[11px] font-semibold text-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{PROFILE_DATA.status}</span>
              </div>
            </div>

            {/* Nama Lengkap & Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                {PROFILE_DATA.name}
              </span>
            </h1>

            {/* Role & Keahlian */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-base sm:text-xl font-medium text-slate-300 mb-6">
              <span className="text-cyan-400 font-semibold">{PROFILE_DATA.role}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">{PROFILE_DATA.subRole}</span>
            </div>

            {/* Deskripsi Singkat */}
            <p className="max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed mb-10">
              {PROFILE_DATA.heroBio}
            </p>

            {/* Tombol CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <IconCode />
                <span>Lihat Projek</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl glass-panel text-slate-200 font-semibold text-sm border border-slate-700/80 hover:border-cyan-500/60 hover:text-cyan-300 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <IconSend />
                <span>Hubungi Saya</span>
              </a>
            </div>

            {/* Indikator Interaksi Kanvas 3D */}
            <div className="mt-12 text-xs text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Gerakkan kursor untuk berinteraksi dengan kanvas 3D</span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            === ABOUT ME & STATS SECTION ===
            ========================================================================= */}
        <section id="about" className="py-20 px-4 max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Mengenal Lebih Dekat
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-slate-100">
              Tentang Saya & Ringkasan Keahlian
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Profil Bio */}
            <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800">
              <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start mb-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-500/40 bg-slate-900 shadow-md flex-shrink-0">
                  <img
                    src={PROFILE_DATA.avatarUrl}
                    alt={PROFILE_DATA.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-2xl font-bold text-slate-100">{PROFILE_DATA.name}</h3>
                  <p className="text-cyan-400 text-sm font-medium mt-0.5">{PROFILE_DATA.role}</p>
                  <p className="text-slate-400 text-xs mt-1.5 flex items-center justify-center sm:justify-start gap-1">
                    <IconLocation />
                    {PROFILE_DATA.location}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm leading-relaxed border-t border-slate-800/80 pt-5">
                <p>{PROFILE_DATA.aboutBio1}</p>
                <p>{PROFILE_DATA.aboutBio2}</p>
              </div>

              {/* Skills Tags */}
              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Teknologi & Alat Pilihan
                </h4>
                <div className="flex flex-wrap gap-2">
                  {SKILLS_DATA.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-cyan-300 border border-slate-700 hover:border-cyan-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid Statistik Angka */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STATS_DATA.map((st, i) => (
                <div
                  key={i}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 text-center flex flex-col justify-center"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    {st.value}
                  </div>
                  <div className="text-sm font-bold text-slate-200 mt-1.5">{st.label}</div>
                  <div className="text-xs text-slate-500 mt-1">{st.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            === SECTION PENGALAMAN KERJA (WORK EXPERIENCE) ===
            ========================================================================= */}
        <section id="experience" className="py-20 px-4 max-w-5xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400 mb-2">
              <IconBriefcase />
              <span>Jejak Karir & Pengalaman</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
              Pengalaman Kerja & Magang
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mt-3">
              Perjalanan profesional dalam merancang perangkat lunak, kolaborasi tim, dan kontribusi nyata dalam industri digital.
            </p>
          </div>

          {/* Timeline Pengalaman Kerja Modern */}
          <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:inset-0 before:left-2.5 sm:before:left-3 before:w-0.5 before:timeline-line">
            {WORK_EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Node Titik Bercahaya di Garis Timeline */}
                <div className="absolute -left-[23px] sm:-left-[27px] top-6 w-5 h-5 rounded-full bg-[#080c14] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 group-hover:border-cyan-300 transition-all shadow-md shadow-cyan-500/30">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Kartu Pengalaman Kerja Glassmorphism */}
                <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 border-b border-slate-800/80">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                          {exp.typeBadge}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-cyan-300 mt-1">
                        {exp.company}
                      </h4>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 font-medium text-slate-300">
                        <IconCalendar />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <IconLocation />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points Deskripsi Tugas & Pencapaian */}
                  <div className="mt-5 space-y-2.5">
                    {exp.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <IconCheck />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 items-center">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Tech Stack:
                    </span>
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-800/90 text-cyan-300 border border-slate-700/80 hover:border-cyan-400/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            === SECTION PENDIDIKAN (EDUCATION) ===
            ========================================================================= */}
        <section id="education" className="py-20 px-4 max-w-5xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400 mb-2">
              <IconGraduation />
              <span>Latar Belakang Akademik</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
              Riwayat Pendidikan
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mt-3">
              Jejak pendidikan formal yang membentuk fondasi keilmuan, logika berpikir, dan pemahaman teknologi.
            </p>
          </div>

          {/* Grid Kartu Pendidikan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {EDUCATION_DATA.map((edu) => (
              <div
                key={edu.id}
                className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      {edu.statusBadge}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                      <IconCalendar />
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {edu.institution}
                  </h3>
                  <h4 className="text-sm font-semibold text-cyan-300 mt-1">
                    {edu.major}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                    <IconLocation />
                    {edu.location}
                  </p>

                  {edu.gpaOrScore && (
                    <div className="mt-3.5 inline-block px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-emerald-400">
                      🎯 {edu.gpaOrScore}
                    </div>
                  )}

                  {/* Highlights & Pencapaian */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Fokus & Pencapaian:
                    </span>
                    {edu.achievements.map((ach, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500">
                  {edu.degree}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            === YOUTUBE CODING LOUNGE / VIDEO & PLAYLIST SECTION ===
            ========================================================================= */}
        <section id="youtube" className="py-20 px-4 max-w-5xl mx-auto w-full">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs text-red-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>YouTube Coding Lounge</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
              Video & Musik Favorit di YouTube
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mt-2">
              Putar langsung soundtrack coding, lo-fi beats, dan video inspiratif yang menemani proses belajar setiap hari.
            </p>
          </div>

          {/* YouTube Interactive Widget Card */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 relative overflow-hidden shadow-2xl">
            {/* Background Glow Aksen YouTube */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Sisi Kiri: Real YouTube Player Embed */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-black relative">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${currentVidId}?rel=0&autoplay=0`}
                    title={currentVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-500/20 text-red-400 border border-red-500/30">
                        {currentVideo.tag}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        ⏱ {currentVideo.duration}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-100">{currentVideo.title}</h3>
                    <p className="text-xs text-slate-400 mt-0.5 font-medium">{currentVideo.channel}</p>
                  </div>

                  <a
                    href={`https://www.youtube.com/watch?v=${currentVidId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="self-start sm:self-auto px-4 py-2 rounded-xl text-xs font-semibold bg-red-600 hover:bg-red-500 text-white flex items-center gap-1.5 shadow-md shadow-red-600/25 transition-all"
                  >
                    <span>Buka di YouTube</span>
                    <IconExternalLink />
                  </a>
                </div>
              </div>

              {/* Sisi Kanan: Playlist Daftar Video */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                  <div className="flex items-center gap-2">
                    <IconYouTube />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Coding Playlist Queue
                    </span>
                  </div>
                  <span className="text-xs text-slate-500">{YOUTUBE_PLAYLIST.length} Video</span>
                </div>

                <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                  {YOUTUBE_PLAYLIST.map((video, idx) => {
                    const isSelected = idx === currentVideoIndex;
                    const vidId = extractYoutubeId(video.youtubeId);
                    return (
                      <div
                        key={video.id}
                        onClick={() => setCurrentVideoIndex(idx)}
                        className={`flex items-center gap-3 p-2.5 rounded-2xl cursor-pointer transition-all ${isSelected
                          ? "bg-slate-800/90 border border-red-500/50 shadow-lg text-slate-100"
                          : "hover:bg-slate-800/40 text-slate-300 border border-transparent"
                          }`}
                      >
                        {/* Auto YouTube Thumbnail via YouTube CDN */}
                        <div className="relative w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-900 border border-slate-700/60">
                          <img
                            src={`https://img.youtube.com/vi/${vidId}/mqdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          {isSelected && (
                            <div className="absolute inset-0 bg-red-600/30 flex items-center justify-center">
                              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                            </div>
                          )}
                          <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-black/80 text-white">
                            {video.duration}
                          </span>
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-semibold text-red-400">{video.tag}</span>
                          </div>
                          <h4 className="text-xs font-bold truncate text-slate-100 mt-0.5">
                            {video.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 truncate mt-0.5">{video.channel}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Klik video untuk memutar</span>
                  <span className="text-red-400 font-medium">YouTube Embedded</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            === PORTFOLIO / PROJECTS GRID SECTION ===
            ========================================================================= */}
        <section id="projects" className="py-20 px-4 max-w-6xl mx-auto w-full">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Karya & Eksplorasi
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-slate-100">
              Portofolio & Projek Pilihan
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mt-3">
              Kompilasi aplikasi web, otomatisasi bot, dan sistem database yang telah saya rancang serta kembangkan.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${selectedCategory === cat
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                    : "glass-panel text-slate-400 hover:text-slate-100 hover:border-slate-700"
                    }`}
                >
                  {cat === "All" ? "Semua Projek" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Kartu Projek */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-slate-800 flex flex-col group"
              >
                {/* Thumbnail Gambar */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold bg-slate-900/80 backdrop-blur-md text-cyan-400 border border-cyan-500/30">
                    {project.category}
                  </span>
                </div>

                {/* Deskripsi & Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tombol Action & Details */}
                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all flex items-center gap-1.5"
                    >
                      <span>Details</span>
                      <IconSparkles />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
                          title="Source Code"
                        >
                          <IconGithub />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          onClick={(e) => handleLiveUrlClick(e, project)}
                          target={project.liveUrl !== '#' && project.liveUrl.startsWith('http') ? "_blank" : undefined}
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
                          title={project.liveUrl === '#' ? "Live URL belum tersedia (404)" : "Live Demo"}
                        >
                          <IconExternalLink />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal Pop-up Rincian Projek */}
          {activeModalProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
              <div className="glass-panel max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-slate-700 relative shadow-2xl max-h-[90vh] overflow-y-auto">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-slate-100 hover:bg-slate-700 transition-all"
                  aria-label="Close details"
                >
                  <IconClose />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    {activeModalProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-100">
                    {activeModalProject.title}
                  </h3>
                </div>

                <div className="rounded-2xl overflow-hidden mb-6 h-56 bg-slate-900 border border-slate-800">
                  <img
                    src={activeModalProject.thumbnail}
                    alt={activeModalProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                  <p>{activeModalProject.detailedDescription}</p>

                  <div>
                    <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                      Fitur Utama & Keunggulan:
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-300">
                      {activeModalProject.features.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                      Teknologi yang Digunakan:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeModalProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-cyan-300 border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(null)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  >
                    Tutup
                  </button>

                  {activeModalProject.liveUrl && (
                    <a
                      href={activeModalProject.liveUrl}
                      onClick={(e) => handleLiveUrlClick(e, activeModalProject)}
                      target={activeModalProject.liveUrl !== '#' && activeModalProject.liveUrl.startsWith('http') ? "_blank" : undefined}
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 flex items-center gap-1.5 hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                    >
                      <span>Lihat Live</span>
                      <IconExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Modal Pop-up 404 Not Found (Live URL Belum Tersedia) */}
          {notFoundModalProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
              <div className="glass-panel max-w-md w-full rounded-3xl p-6 sm:p-8 border border-rose-500/30 relative shadow-2xl text-center overflow-hidden">
                {/* Glow orbs */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-44 h-44 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setNotFoundModalProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-slate-100 hover:bg-slate-700 transition-all"
                  aria-label="Tutup"
                >
                  <IconClose />
                </button>

                {/* 404 Icon & Graphic */}
                <div className="w-16 h-16 mx-auto rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-4 shadow-lg shadow-rose-500/20">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>

                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-300 to-amber-400 tracking-tight">
                  404
                </div>
                <h3 className="text-lg font-bold text-slate-100 mt-2">
                  Live URL Belum Tersedia
                </h3>

                <div className="mt-3 inline-block px-3.5 py-1 rounded-full bg-slate-800/80 text-xs font-semibold text-cyan-300 border border-slate-700">
                  Projek: {notFoundModalProject.title}
                </div>

                <p className="text-xs text-slate-300 mt-3.5 leading-relaxed">
                  Mohon maaf, proyek <span className="text-slate-100 font-semibold">{notFoundModalProject.title}</span> saat ini masih dalam tahap pengembangan lokal / database internal dan belum di-hosting ke publik (Live URL).
                </p>

                <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-3">
                  {notFoundModalProject.githubUrl && notFoundModalProject.githubUrl !== '#' && (
                    <a
                      href={notFoundModalProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
                    >
                      <IconGithub />
                      <span>Source Code</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setNotFoundModalProject(null)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 transition-all hover:scale-105"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* =========================================================================
            === SECTION KOMENTAR / INTERACTIVE GUESTBOOK ===
            ========================================================================= */}
        <section id="guestbook" className="py-20 px-4 max-w-4xl mx-auto w-full">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Interaksi Pengunjung
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-slate-100">
              Buku Tamu / Komentar
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mt-2">
              Tinggalkan pesan, saran, atau sekadar salam pertemanan di sini!
            </p>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl">
            <form onSubmit={handleAddComment} className="space-y-4">
              <div>
                <label htmlFor="guestName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Nama Anda
                </label>
                <input
                  id="guestName"
                  type="text"
                  required
                  placeholder="Masukkan nama atau nickname..."
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div>
                <label htmlFor="guestMessage" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Pesan / Ucapan
                </label>
                <textarea
                  id="guestMessage"
                  rows={3}
                  required
                  placeholder="Tuliskan komentar atau feedback untuk Kahlil..."
                  value={guestMessage}
                  onChange={(e) => setGuestMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-500">
                  Data tersimpan secara dinamis (State & Local Storage)
                </span>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs tracking-wide shadow-md shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <IconSend />
                  <span>Kirim Komentar</span>
                </button>
              </div>

              {commentSuccess && (
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium text-center animate-fade-in">
                  ✨ Terima kasih! Komentar Anda berhasil dipublikasikan.
                </div>
              )}
            </form>

            <div className="my-8 border-t border-slate-800" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <IconMessage />
                  <span>Komentar Publik ({allComments.length})</span>
                </h3>
                <span className="text-xs text-slate-500">Urutan Terbaru</span>
              </div>

              <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1">
                {allComments.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-7 h-7 rounded-full bg-gradient-to-tr ${item.avatarColor} flex items-center justify-center font-bold text-[11px] text-slate-950`}
                        >
                          {item.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-sm font-bold text-slate-200">{item.name}</span>
                      </div>
                      <span className="text-[11px] text-slate-500">{item.timeAgo}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-9">
                      {item.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            === FOOTER & SOCIAL LINKS & QUICK CONTACT ===
            ========================================================================= */}
        <footer id="contact" className="mt-auto border-t border-slate-800/80 bg-slate-950/70 pt-16 pb-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
              {/* Kolom Profil Ringkas & Sosmed */}
              <div className="md:col-span-5 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-slate-950 text-sm">
                    A
                  </span>
                  <span className="font-bold text-base text-slate-100">
                    {PROFILE_DATA.name}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                  Pengembang muda yang berfokus menciptakan antarmuka web modern, fungsional, dan visual yang memikat.
                </p>

                <div className="pt-2">
                  <span className="text-xs font-semibold text-slate-400 block mb-2.5">
                    Hubungkan dengan saya:
                  </span>
                  <div className="flex items-center gap-3">
                    {SOCIAL_LINKS.map((soc) => (
                      <a
                        key={soc.name}
                        href={soc.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all hover:scale-105"
                        title={soc.name}
                      >
                        {soc.iconName === "github" && <IconGithub />}
                        {soc.iconName === "instagram" && <IconInstagram />}
                        {soc.iconName === "tiktok" && <IconTiktok />}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Kolom Informasi Kontak Cepat */}
              <div className="md:col-span-3 space-y-3 text-xs text-slate-400">
                <h4 className="text-sm font-bold text-slate-200">Kontak Langsung</h4>
                <p>
                  <span className="text-slate-500 block">Email Resmi:</span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-cyan-400 hover:underline">
                    {CONTACT_INFO.email}
                  </a>
                </p>
                <p>
                  <span className="text-slate-500 block">Telegram:</span>
                  <span className="text-slate-300">{CONTACT_INFO.telegram}</span>
                </p>
                <p>
                  <span className="text-slate-500 block">Lokasi:</span>
                  <span className="text-slate-300">{CONTACT_INFO.address}</span>
                </p>
              </div>

              {/* Kolom Form Kirim Pesan Singkat */}
              <div className="md:col-span-4 glass-panel p-5 rounded-2xl border border-slate-800">
                <h4 className="text-sm font-bold text-slate-100 mb-3 flex items-center gap-2">
                  <IconSend />
                  <span>Kirim Pesan Singkat</span>
                </h4>

                <form onSubmit={handleContactSubmit} className="space-y-2.5">
                  <input
                    type="text"
                    required
                    placeholder="Nama Anda"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Alamat Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                  <textarea
                    rows={2}
                    required
                    placeholder="Pesan Anda..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
                  >
                    Kirim Pesan
                  </button>

                  {contactSent && (
                    <div className="text-[11px] text-cyan-300 text-center mt-1">
                      Pesan terkirim! Terima kasih telah menghubungi.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Copyright & Navigasi Bawah */}
            <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
              <p>
                © {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#hero" className="hover:text-cyan-400 transition-colors">
                  Kembali ke Atas ↑
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
