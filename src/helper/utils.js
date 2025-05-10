import {
  BookOpenText,
  Users,
  GraduationCap,
  ClipboardCheck,
  Edit3,
  Globe,
  CheckCircle,
  FileText,
  Coffee,
} from "lucide-react"; // Import the necessary icons

export const Menus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Program", // Nama untuk Program
    subMenu: [
      {
        name: "Les Privat TK", // Program Les Privat TK
        desc: "Les untuk TK",
        icon: BookOpenText, // Icon untuk TK
        link: "/les-privat-tk", // Link ke halaman TK
      },
      {
        name: "Les Privat SD",
        desc: "Les untuk SD",
        icon: Users, // Icon untuk SD
        link: "/les-privat-sd",
      },
      {
        name: "Les Privat SMP",
        desc: "Les untuk SMP",
        icon: GraduationCap, // Icon untuk SMP
        link: "/les-privat-smp",
      },
      {
        name: "Les Privat SMA",
        desc: "Les untuk SMA",
        icon: ClipboardCheck, // Icon untuk SMA
        link: "/les-privat-sma",
      },
      {
        name: "Les Privat AKM",
        desc: "Les untuk AKM",
        icon: Edit3, // Icon untuk AKM
        link: "/les-privat-akm-asesmen-kompetensi-minimum",
      },
      {
        name: "Les Privat Mahasiswa",
        desc: "Les untuk Mahasiswa",
        icon: Globe, // Icon untuk Mahasiswa
        link: "/les-privat-mahasiswa",
      },
      {
        name: "Les Privat Bahasa Asing",
        desc: "Les untuk Bahasa Asing",
        icon: CheckCircle, // Icon untuk Bahasa Asing
        link: "/les-privat-bahasa-asing",
      },
      {
        name: "Les Privat SIMAK UI",
        desc: "Les untuk SIMAK UI",
        icon: FileText, // Icon untuk SIMAK UI
        link: "/les-privat-simak-ui",
      },
      {
        name: "Les Privat SBMPTN",
        desc: "Les untuk SBMPTN",
        icon: Coffee, // Icon untuk SBMPTN
        link: "/les-privat-sbmptn",
      },
    ],
    gridCols: 2,
  },
  {
    name: "About Us",
    link: "/tentang-kami", // Link untuk About Us
  },
  {
    name: "Tutor",
    link: "/tutor", // Link untuk Tutor
  },
];
