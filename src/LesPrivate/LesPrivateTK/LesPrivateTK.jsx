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
import LearningFeaturesLesPrivateTk from "./components/LearningFeaturesLesPrivateTk";
import LesPrivateTKHeader from "./components/LesPrivateTKHeader";

const items = [
  {
    text: "Les Privat TK – Guru Les Privat Calistung",
    href: "#les-privat-tk",
    subItems: [
      {
        text: "Kegiatan Belajar Masa Taman Kanak-Kanak",
        href: "#kegiatan-belajar-masa-taman-kanak-kanak",
      },
      {
        text: "Kegiatan Belajar Les Privat TK/Paud",
        href: "#kegiatan-belajar-les-privat-tk-paud",
      },
    ],
  },
  {
    text: "Pengajar Les Private TK/Paud",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private TK/Paud",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline TK/Paud",
    href: "#pilihan-program-les-private",
  },
  {
    text: "Program Les Private Matrix  ",
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

const LesPrivateTK = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Les Privat TK Terbaik #1 - Guru Les Privat Calistung, PAUD, dan Taman
          Kanak-Kanak | Matrix Tutoring
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Les Privat TK Terbaik di Indonesia, meliputi calistung, PAUD, dan kegiatan belajar untuk masa taman kanak-kanak. Guru les privat berpengalaman hadir secara online dan offline."
        />
        <meta
          name="keywords"
          content="Les Privat TK, Guru Calistung, Les PAUD, Les Privat Online TK, Les Privat Taman Kanak-Kanak, Program Belajar TK, Guru Les TK"
        />
        <link
          rel="canonical"
          href="https://apps.bimbelmatrix.com/les-privat-tk"
        />
        <meta
          property="og:title"
          content="Les Privat TK Terbaik #1 - Guru Les Privat Calistung dan PAUD"
        />
        <meta
          property="og:description"
          content="Les Privat TK dan PAUD terbaik di Indonesia. Program belajar dari guru privat berpengalaman yang mencakup calistung, taman kanak-kanak, dan PAUD, tersedia secara online dan offline."
        />
        <meta
          property="og:url"
          content="https://apps.bimbelmatrix.com/les-privat-tk"
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
          content="Les Privat TK Terbaik #1 - Guru Les Privat Calistung dan PAUD"
        />
        <meta
          name="twitter:description"
          content="Les Privat TK terbaik di Indonesia, termasuk calistung, PAUD, dan program belajar taman kanak-kanak. Guru privat online dan offline berpengalaman."
        />
        <meta
          name="twitter:image"
          content="https://dblpm.edulink-indonesia.com/promo-images/IMG1725949265851.png"
        />
      </Helmet>

      <div className="container-all">
        <Slidertop />
        <TableOfContents title="Table of Contents" items={items} />
        <LesPrivateTKHeader />
        <LearningFeaturesLesPrivateTk />

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

export default LesPrivateTK;