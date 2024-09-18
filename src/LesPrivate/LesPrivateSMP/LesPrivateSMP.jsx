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
import LesPrivateSMPHeader from "./components/LesPrivateSMPHeader";

const items = [
  {
    text: "Les Privat SMP – Guru Les Privat SMP ke Rumah dan Bimbel Online",
    href: "#les-privat-smp",
    subItems: [
      {
        text: "Pilihan Bahasa dan Kurikulum",
        href: "#pilihan-bahasa-dan-kurikulum",
      },
      {
        text: "Persiapan Ujian",
        href: "#persiapan-ujian",
      },
      {
        text: "Pengajar Berkualitas dan Fleksibilitas",
        href: "#pengajar-berkualitas-dan-fleksibilitas",
      },
    ],
  },
  {
    text: "Pengajar Les Private SMP",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private SMP",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline SMP",
    href: "#pilihan-program-les-private",
  },
  {
    text: "Program Les Private Matrix ",
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

const LesPrivateSMP = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bimbel dan Les Privat SMP Terbaik #1 - Les Private Matrix</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Les Privat SMP terbaik di Indonesia dengan layanan guru privat berkualitas untuk membantu siswa SMP belajar secara online dan offline."
        />
        <meta
          name="keywords"
          content="
      Les Privat SMP, 
      Les Privat Sekolah Menengah Pertama, 
      Guru Privat SMP, 
      Guru Les Privat SMP, 
      Bimbel SMP, 
      Bimbingan Belajar SMP, 
      Les Privat Online SMP, 
      Les Privat Offline SMP, 
      Program Belajar SMP, 
      Program Les Sekolah Menengah Pertama, 
      Guru Les Matematika SMP, 
      Les Matematika SMP, 
      Les IPA SMP, 
      Les Bahasa Inggris SMP, 
      Tutor SMP Berpengalaman, 
      Les Privat Mata Pelajaran SMP, 
      Les Privat Bahasa Indonesia SMP, 
      Les Privat Fisika SMP, 
      Les Privat Kimia SMP, 
      Les Privat Biologi SMP, 
      Les Privat Ekonomi SMP, 
      Les Privat Geografi SMP
    "
        />

        <link
          rel="canonical"
          href="https://apps.bimbelmatrix.com/les-privat-smp"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Les Privat SMP Terbaik #1 - Guru Les Privat Sekolah Menengah Pertama"
        />
        <meta
          property="og:description"
          content="Les Privat SMP di Indonesia dengan program belajar dari guru privat berpengalaman, tersedia secara online dan offline."
        />
        <meta
          property="og:url"
          content="https://apps.bimbelmatrix.com/les-privat-smp"
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
        <meta name="twitter:site" content="@matrix_tutoring" />
        <meta
          name="twitter:title"
          content="Les Privat SMP Terbaik #1 - Guru Les Privat Sekolah Menengah Pertama"
        />
        <meta
          name="twitter:description"
          content="Les Privat SMP terbaik dengan guru berpengalaman. Program belajar untuk siswa SMP dengan metode pembelajaran privat, tersedia online dan offline."
        />
        <meta
          name="twitter:image"
          content="https://dblpm.edulink-indonesia.com/promo-images/IMG1725949265851.png"
        />
      </Helmet>

      <div className="container-all">
        <Slidertop />
        <TableOfContents title="Table of Contents" items={items} />
        <LesPrivateSMPHeader />

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

export default LesPrivateSMP;
