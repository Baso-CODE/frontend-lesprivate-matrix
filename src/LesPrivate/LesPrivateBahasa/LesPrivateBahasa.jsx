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
import LesPrivateBahasaHeader from "./components/LesPrivateBahasaHeader";

const items = [
  {
    text: "Les Privat Bahasa – Guru Privat Bahasa Asing dan BIPA",
    href: "#les-privat-bahasa",
    subItems: [
      {
        text: "Program Les Privat Bahasa Asing dan BIPA",
        href: "#program-les-privat-bahasa",
      },
      {
        text: "Les Privat Bahasa Inggris Conversation dan Les Privat Bahasa Asing Offline dan Online",
        href: "#les-privat-bahasa-inggris",
      },
      {
        text: "Les Privat Bahasa Inggris Conversation dan Les Privat Bahasa Asing Offline dan Online",
        href: "#les-privat-bahasa-inggris",
      },
      {
        text: "Les Privat Bahasa Asing setiap hari dimana saja",
        href: "#les-privat-bahasa-setiap-hari",
      },
      {
        text: "Program Les Privat Bahasa Inggris Coversation dan Bahasa Asing",
        href: "#list-lest-private-bahasa",
      },
    ],
  },
  {
    text: "Pengajar Les Private Bahasa Asing",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private Bahasa Asing",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline Bahasa Asing",
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
const LesPrivateBahasa = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Bimbel Les Privat Bahasa Asing • Kursus Bahasa Inggris dan Asing - Les
          Privat Matrix
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Temukan les privat bahasa asing terbaik dengan berbagai pilihan program fleksibel, termasuk les privat online dan offline. Dukungan belajar terbaik untuk Bahasa Inggris dan bahasa asing lainnya bersama Les Private Matrix."
        />
        <meta
          name="keywords"
          content="
          Les Privat Bahasa Asing,
          Les Bahasa Inggris,
          Les Privat Online Bahasa,
          Les Privat Offline Bahasa,
          Program Les Bahasa Asing,
          Tutor Bahasa Asing,
          Les Bahasa Jepang,
          Les Bahasa Mandarin,
          Les Bahasa Prancis,
          Les Bahasa Spanyol,
          Les Bahasa Jerman,
          Les Bahasa Korea,
          Les Bahasa Arab
        "
        />
        <link
          rel="canonical"
          href="https://apps.bimbelmatrix.com/les-privat-bahasa-asing"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Les Privat Bahasa Asing Terbaik #1 - Les Private Matrix"
        />
        <meta
          property="og:description"
          content="Temukan les privat bahasa asing terbaik dengan berbagai pilihan program fleksibel, termasuk les privat online dan offline. Dukungan belajar terbaik untuk Bahasa Inggris dan bahasa asing lainnya bersama Les Private Matrix."
        />
        <meta
          property="og:url"
          content="https://apps.bimbelmatrix.com/les-privat-bahasa-asing"
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
          content="Les Privat Bahasa Asing Terbaik #1 - Les Private Matrix"
        />
        <meta
          name="twitter:description"
          content="Temukan les privat bahasa asing terbaik dengan berbagai pilihan program fleksibel, termasuk les privat online dan offline. Dukungan belajar terbaik untuk Bahasa Inggris dan bahasa asing lainnya bersama Les Private Matrix."
        />
        <meta
          name="twitter:image"
          content="https://dblpm.edulink-indonesia.com/promo-images/IMG1725949265851.png"
        />
        <meta name="twitter:site" content="@matrix_tutoring" />
      </Helmet>

      <div className="container-all">
        <Slidertop />
        <TableOfContents title="Table of Contents" items={items} />
        <LesPrivateBahasaHeader />

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

export default LesPrivateBahasa;