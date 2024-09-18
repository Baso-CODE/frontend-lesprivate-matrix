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
import LesPrivateSDHeader from "./components/LesPrivateSDHeader";

const items = [
  {
    text: "Les Privat SD – Guru Les Privat Sekolah Dasar",
    href: "#les-privat-sd",
    subItems: [
      {
        text: "Manfaat Les Privat SD",
        href: "#manfaat-les-privat-sd",
      },
      {
        text: "Keunggulan Les Privat SD di Edumatrix",
        href: "#keunggulan-les-privat-sd",
      },
      {
        text: "Layanan Les Privat SD di Edumatrix",
        href: "#layanan-les-privat-sd",
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
const LesPrivateSD = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bimbel dan Les Privat SD Terbaik #1 - Les Private Matrix</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Les Privat SD terbaik di Indonesia dengan layanan guru privat berkualitas untuk membantu anak belajar secara online dan offline."
        />
        <meta
          name="keywords"
          content="Les Privat SD, Les Privat Sekolah Dasar, Guru Privat SD, Guru Les Privat SD, Bimbel SD, Bimbingan Belajar SD, Les Privat Online SD, Les Privat Offline SD, Program Belajar SD, Program Les Sekolah Dasar, Guru Les Calistung SD, Les Calistung SD, Les Online SD, Les Privat Anak SD, Les Privat Matematika SD, Les Privat IPA SD, Les Privat Bahasa Inggris SD, Tutor SD Berpengalaman, Les Privat Mata Pelajaran SD"
        />
        <link
          rel="canonical"
          href="https://apps.bimbelmatrix.com/les-privat-sd"
        />
        <meta
          property="og:title"
          content="Les Privat SD Terbaik #1 - Guru Les Privat Sekolah Dasar"
        />
        <meta
          property="og:description"
          content="Les Privat SD di Indonesia dengan program belajar dari guru privat berpengalaman, tersedia secara online dan offline."
        />
        <meta
          property="og:url"
          content="https://apps.bimbelmatrix.com/les-privat-sd"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://dblpm.edulink-indonesia.com/promo-images/IMG1725949265851.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="twitter:card"
          content="https://dblpm.edulink-indonesia.com/promo-images/IMG1725949265851.png"
        />
        <meta name="twitter:site" content="@matrix_tutoring" />
        <meta
          name="twitter:title"
          content="Les Privat SD Terbaik #1 - Guru Les Privat Sekolah Dasar"
        />
        <meta
          name="twitter:description"
          content="Les Privat SD terbaik dengan guru berpengalaman. Program belajar untuk siswa SD dengan metode pembelajaran privat, tersedia online dan offline."
        />
        <meta
          name="twitter:image"
          content="https://dblpm.edulink-indonesia.com/promo-images/IMG1725949265851.png"
        />
      </Helmet>
      <div className="container-all">
        <Slidertop />
        <TableOfContents title="Table of Contents" items={items} />
        <LesPrivateSDHeader />
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

export default LesPrivateSD;
