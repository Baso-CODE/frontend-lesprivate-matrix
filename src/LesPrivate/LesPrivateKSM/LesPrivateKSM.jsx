import React from "react";
import { Helmet } from "react-helmet-async";
import AsalSekolahSiswaEdumatrix from "../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import PromoFree from "../../Components/BannerPromo/PromoFree";
import FiturProgram from "../../Components/FiturProgram/FiturProgram";
import Floatingcta from "../../Components/FloatingCta/Floatingcta";
import MasterCarousel from "../../Components/MasterCarousel/MasterCarousel";
import MatrixFeatures from "../../Components/MatrixFeatures/MatrixFeatures";
import OnlineLesOptions from "../../Components/OnlineLesOption/OnlineLesOption";
import PengajarLestPrivate from "../../Components/PengajarLestPrivate/PengajarLestPrivate";
import ProgramBelajarLesPrivat from "../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivat from "../../Components/ProgramLesPrivate/ProgramLesPrivate";
import PilihanProgram from "../../Components/ProgramOptions/PilihanProgram";
import AsalSekolahSiswaMarque from "../../Components/SekolahSiswaMarque/SekolahSiswaMarque";
import Slidertop from "../../Components/SlideTop/Slidertop";
import Listkota from "../../Components/Tab/Listkota";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import TableOfContents from "../components/TableOfContent";
import LesPrivateKSMHeader from "./components/LesPrivateKSMHeader";

const items = [
  {
    text: "Les Privat AKM (Asesmen Kompetensi Minimum)",
    href: "#les-privat-ksm",
    subItems: [
      {
        text: "Perubahan dalam Dunia Pendidikan di Indonesia",
        href: "#perubahan-dunia-pendidikan",
      },
      {
        text: "Bagian dari Asesmen Nasional",
        href: "#bagian-dari-asesmen-nasional",
      },
      {
        text: "Tujuan dari AKM dan Manfaatnya",
        href: "#tujuan-dari-akm",
      },
    ],
  },
  {
    text: "Pengajar Les Private SD",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private SD",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline SD",
    href: "#pilihan-program-les-private",
  },
  {
    text: "Program Les Private Matrix",
    href: "#program-les-private-edumatrix",
  },
  {
    text: "Saat Ini, Matrix Juga Melayani Les Privat Online",
    href: "#matrix-juga-melayani-les-privat-online",
  },
  {
    text: "Asal Sekolah Siswa Edumatrix les Private",
    href: "#asal-sekolah-siswa-edumatrix-private",
  },
];
const LesPrivateKSM = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Bimbel Les Privat Asesmen Kompetensi Minimum (AKM) • Literasi Membaca
          dan Berhitung - untuk SD, SMP, SMA - Les Privat Matrix
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Temukan informasi lengkap tentang Les Privat Asesmen Kompetensi Minimum (AKM) untuk SD, SMP, dan SMA dengan Matrix. Pelajari tentang fitur program, pengajar, pilihan les online/offline, dan banyak lagi."
        />
        <meta
          name="keywords"
          content="
          Les Privat AKM,
          Les Privat Asesmen Kompetensi Minimum,
          Les Privat SD,
          Les Privat SMP,
          Les Privat SMA,
          Les AKM Online,
          Les AKM Offline,
          Tutor AKM,
          Bimbingan AKM,
          Les Literasi Membaca,
          Les Literasi Berhitung,
          Les Matematika,
          Les Bahasa Indonesia,
          Les Bahasa Inggris,
          Les IPA,
          Les IPS
        "
        />
        <link
          rel="canonical"
          href="https://apps.bimbelmatrix.com/les-privat-akm-asesmen-kompetensi-minimum"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Bimbel Les Privat Asesmen Kompetensi Minimum (AKM) • Literasi Membaca dan Berhitung - Les Privat Matrix"
        />
        <meta
          property="og:description"
          content="Temukan informasi lengkap tentang Les Privat Asesmen Kompetensi Minimum (AKM) untuk SD, SMP, dan SMA dengan Matrix. Pelajari tentang fitur program, pengajar, pilihan les online/offline, dan banyak lagi."
        />
        <meta
          property="og:url"
          content="https://apps.bimbelmatrix.com/les-privat-akm-asesmen-kompetensi-minimum"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://dblpm.edulink-indonesia.com/promo-images/IMG1725949265851.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta
          name="twitter:card"
          content="https://dblpm.edulink-indonesia.com/promo-images/IMG1725949265851.png"
        />
        <meta
          name="twitter:title"
          content="Bimbel Les Privat Asesmen Kompetensi Minimum (AKM) • Literasi Membaca dan Berhitung - Les Privat Matrix"
        />
        <meta
          name="twitter:description"
          content="Temukan informasi lengkap tentang Les Privat Asesmen Kompetensi Minimum (AKM) untuk SD, SMP, dan SMA dengan Matrix. Pelajari tentang fitur program, pengajar, pilihan les online/offline, dan banyak lagi."
        />
        <meta
          name="twitter:image"
          content="https://dblpm.edulink-indonesia.com/promo-images/IMG1725949265851.png"
        />
        <meta name="twitter:site" content="@matrix_tutoring" />
      </Helmet>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Bimbel Les Privat Asesmen Kompetensi Minimum (AKM) • Literasi Membaca
          dan Berhitung - untuk SD, SMP, SMA - Les Privat Matrix
        </title>
        <meta
          name="description"
          content="Temukan informasi lengkap tentang Les Privat Asesmen Kompetensi Minimum (AKM) untuk SD, SMP, dan SMA dengan Matrix. Pelajari tentang fitur program, pengajar, pilihan les online/offline, dan banyak lagi."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://apps.bimbelmatrix.com/les-privat-akm-asesmen-kompetensi-minimum"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Bimbel Les Privat Asesmen Kompetensi Minimum (AKM) • Literasi Membaca dan Berhitung - Les Privat Matrix"
        />
        <meta
          property="og:description"
          content="Temukan informasi lengkap tentang Les Privat Asesmen Kompetensi Minimum (AKM) untuk SD, SMP, dan SMA dengan Matrix. Pelajari tentang fitur program, pengajar, pilihan les online/offline, dan banyak lagi."
        />
        <meta
          property="og:url"
          content="https://apps.bimbelmatrix.com/les-privat-akm-asesmen-kompetensi-minimum"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://dblpm.edulink-indonesia.com/promo-images/IMG1725949265851.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bimbel Les Privat Asesmen Kompetensi Minimum (AKM) • Literasi Membaca dan Berhitung - Les Privat Matrix"
        />
        <meta
          name="twitter:description"
          content="Temukan informasi lengkap tentang Les Privat Asesmen Kompetensi Minimum (AKM) untuk SD, SMP, dan SMA dengan Matrix. Pelajari tentang fitur program, pengajar, pilihan les online/offline, dan banyak lagi."
        />
        <meta
          name="twitter:image"
          content="https://dblpm.edulink-indonesia.com/promo-images/IMG1725949265851.png"
        />
      </Helmet>
      <div className="container-all">
        <Slidertop />
        <TableOfContents title="Table of Contents" items={items} />
        <LesPrivateKSMHeader />

        <section id="pengajar-les-private">
          <PengajarLestPrivate />
        </section>
        <section id="fitur-program-les-private">
          <FiturProgram />
        </section>
        <PromoFree />
        <section id="pilihan-program-les-private">
          <PilihanProgram />
        </section>
        <section id="matrix-juga-melayani-les-privat-online">
          <OnlineLesOptions />
        </section>
        <section id="program-les-private-edumatrix">
          <ProgramLesPrivat />
        </section>
        <MasterCarousel />
        <ProgramBelajarLesPrivat />
        <MatrixFeatures />
        <section id="asal-sekolah-siswa-edumatrix-private">
          <AsalSekolahSiswaEdumatrix />
          <AsalSekolahSiswaMarque />
        </section>

        <Listkota />

        <PromoHomepage />
      </div>
      <Floatingcta />
      {/* <Bottombar /> */}
    </React.Fragment>
  );
};

export default LesPrivateKSM;