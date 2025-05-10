import React from "react";
import { Helmet } from "react-helmet-async";
import AsalSekolahSiswaEdumatrix from "../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import FiturProgram from "../../Components/FiturProgram/FiturProgram";
import Keunggulan from "../../Components/Keunggulan/Keunggulan";
import MasterTeacher from "../../Components/MasterTeacher/MasterTeacher";
import MatrixFeatures from "../../Components/MatrixFeatures/MatrixFeatures";
import OnlineLesOptions from "../../Components/OnlineLesOption/OnlineLesOption";
import PengajarLestPrivate from "../../Components/PengajarLestPrivate/PengajarLestPrivate";
import ProgramBelajarLesPrivat from "../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivat from "../../Components/ProgramLesPrivate/ProgramLesPrivate";
import PilihanProgram from "../../Components/ProgramOptions/PilihanProgram";
import AsalSekolahSiswaMarque from "../../Components/SekolahSiswaMarque/SekolahSiswaMarque";
import EmbrelaSlider from "../../Components/SlideTop/EmbrelaSlider";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import ListKotaProgramLesPrivate from "../components/ListKotaProgramLesPrivate/ListKotaProgramLesPrivate";
import TableOfContents from "../components/TableOfContent";
import LesPrivateMahasiswaHeader from "./components/LesPrivateMahasiswaHeader";

const items = [
  {
    text: "Les Privat Mahasiswa",
    href: "#les-privat-mahasiswa",
    subItems: [
      {
        text: "Pentingnya Les Privat untuk Mahasiswa",
        href: "#pentingnya-les-privat-mahasiswa",
      },
      {
        text: "Jadwal Fleksibel dan Les Privat Online",
        href: "#jadwal-fleksibel-dan-les-privat-online",
      },
      {
        text: "List les privat datang ke rumah dan les privat online untuk mahasiswa seluruh Indonesia",
        href: "#list-les-privat-mahasiswa",
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

const LesPrivateMahasiswa = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Bimbel dan Les Privat Mahasiswa Terbaik #1 Les Private Matrix
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Les privat terbaik untuk mahasiswa dengan berbagai pilihan program fleksibel, termasuk les privat online dan offline. Temukan dukungan belajar terbaik dengan Les Private Matrix."
        />
        <meta
          name="keywords"
          content="
            Les Privat Mahasiswa,
            Les Mahasiswa,
            Bimbingan Mahasiswa,
            Les Privat Online Mahasiswa,
            Les Privat Offline Mahasiswa,
            Program Les Mahasiswa,
            Tutor Mahasiswa,
            Les Matematika Mahasiswa,
            Les IPA Mahasiswa,
            Les Bahasa Inggris Mahasiswa,
            Les Fisika Mahasiswa,
            Les Kimia Mahasiswa,
            Les Biologi Mahasiswa,
            Les Ekonomi Mahasiswa,
            Les Geografi Mahasiswa
          "
        />
        <link
          rel="canonical"
          href="https://apps.bimbelmatrix.com/les-privat-mahasiswa"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Les Privat Mahasiswa Terbaik #1 Les Private Matrix"
        />
        <meta
          property="og:description"
          content="Les privat terbaik untuk mahasiswa dengan berbagai pilihan program fleksibel, termasuk les privat online dan offline. Temukan dukungan belajar terbaik dengan Les Private Matrix."
        />
        <meta
          property="og:url"
          content="https://apps.bimbelmatrix.com/les-privat-mahasiswa"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta
          name="twitter:card"
          content="https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp"
        />
        <meta name="twitter:site" content="@matrix_tutoring" />
        <meta
          name="twitter:title"
          content="Les Privat Mahasiswa Terbaik #1 Les Private Matrix"
        />
        <meta
          name="twitter:description"
          content="Les privat terbaik untuk mahasiswa dengan berbagai pilihan program fleksibel, termasuk les privat online dan offline. Temukan dukungan belajar terbaik dengan Les Private Matrix."
        />
        <meta
          name="twitter:image"
          content="https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp"
        />
      </Helmet>

      <div className="container-all">
        <EmbrelaSlider />
        {/* <Slidertop /> */}
        <TableOfContents title="Table of Contents" items={items} />
        <LesPrivateMahasiswaHeader />
        <section id="pengajar-les-private">
          <PengajarLestPrivate />
        </section>
        <section id="fitur-program-les-private">
          <FiturProgram />
        </section>
        {/*    {/* <PromoFree /> */}
        <section id="pilihan-program-les-private">
          <PilihanProgram />
        </section>
        <section id="matrix-juga-melayani-les-privat-online">
          <OnlineLesOptions />
        </section>
        <section id="program-les-private-edumatrix">
          <ProgramLesPrivat />
        </section>
        <MasterTeacher />
        <ProgramBelajarLesPrivat />
        <MatrixFeatures />
        <section id="asal-sekolah-siswa-edumatrix-private">
          <AsalSekolahSiswaEdumatrix />
          <AsalSekolahSiswaMarque />
        </section>
        <Keunggulan />
        <ListKotaProgramLesPrivate
          program={"les-privat-mahasiswa"}
          title={"Les Privat Mahasiswa"}
        />
        {/* <AccordionFAQ /> */}
        <AsalSekolahSiswaMarque />
        <PromoHomepage />
      </div>

      {/* <Floatingcta /> */}
      {/* <Bottombar /> */}
    </React.Fragment>
  );
};

export default LesPrivateMahasiswa;
