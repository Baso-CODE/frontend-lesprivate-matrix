import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AsalSekolahSiswaEdumatrix from "../../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import FiturProgram from "../../../Components/FiturProgram/FiturProgram";
import Keunggulan from "../../../Components/Keunggulan/Keunggulan";
import MasterTeacher from "../../../Components/MasterTeacher/MasterTeacher";
import MatrixFeatures from "../../../Components/MatrixFeatures/MatrixFeatures";
import OnlineLesOptions from "../../../Components/OnlineLesOption/OnlineLesOption";
import PengajarLestPrivate from "../../../Components/PengajarLestPrivate/PengajarLestPrivate";
import ProgramBelajarLesPrivat from "../../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivat from "../../../Components/ProgramLesPrivate/ProgramLesPrivate";
import PilihanProgram from "../../../Components/ProgramOptions/PilihanProgram";
import AsalSekolahSiswaMarque from "../../../Components/SekolahSiswaMarque/SekolahSiswaMarque";
import EmbrelaSlider from "../../../Components/SlideTop/EmbrelaSlider";
import SuccessStoryLesPrivate from "../../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import { getAllKecamatanBySlug } from "../../../helper/request/getAllKecamatanBySlug";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import ListKelurahanLesPrivate from "../../components/ListKelurahanLesPrivate/ListKelurahanLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import LesPrivateSimakUIHeader from "../components/LesPrivateSimakUIHeader";

export const items = [
  {
    text: "Les Privat Simak UI – Guru Les Privat Simak UI",
    href: "#les-privat-simak-ui",
    subItems: [
      {
        text: "Kegiatan Belajar Masa Simak UI",
        href: "#kegiatan-belajar-simak-ui",
      },
      {
        text: "Dukungan Orang Tua",
        href: "#dukungan-orang-tua",
      },
      {
        text: "List Program Simak UI",
        href: "#list-lest-private-simak-ui",
      },
      {
        text: "Sistem Belajar Terstruktur",
        href: "#sistem-belajar-terstruktur",
      },
      {
        text: "Program Simak UI",
        href: "#program-simak-ui",
      },
      {
        text: "Keunggulan Program Simak UI",
        href: "#keunggulan-program-simak-ui",
      },
    ],
  },
  {
    text: "Pengajar Les Private Simak UI",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private Simak UI",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline Simak UI",
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
const LesPrivateSimakUIKecamatan = () => {
  const [kecamatan, setKecamatan] = useState([]);
  const [heroData, setHeroData] = useState(null);
  const { kecamatanSlug, kabupatenSlug, kotaSlug } = useParams();

  const nameCountry = kecamatan.kecamatan;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllKecamatanBySlug(kecamatanSlug);
        setKecamatan(response.data);

        const getHero = await getHeroData("SIMAK-UI", "kecamatan");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch kecamatan data:", error);
      }
    };

    fetchData();
  }, [kecamatanSlug]);

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Les Privat Simak UI Terbaik #1  di ${nameCountry} Les Private Matrix`}</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content={`Les Privat Simak UI terbaik di ${nameCountry} dengan layanan guru privat berkualitas untuk membantu siswa Simak UI belajar secara online dan offline.`}
        />
        <meta
          name="keywords"
          content="
Les Privat Simak UI, 
Les Privat Universitas Indonesia, 
Guru Privat Simak UI, 
Guru Les Privat Simak UI, 
Bimbel Simak UI, 
Bimbingan Belajar Simak UI, 
Les Privat Online Simak UI, 
Les Privat Offline Simak UI, 
Program Belajar Simak UI, 
Program Les Universitas Indonesia, 
Guru Les Matematika Simak UI, 
Les Matematika Simak UI, 
Les IPA Simak UI, 
Les Bahasa Inggris Simak UI, 
Tutor Simak UI Berpengalaman, 
Les Privat Mata Pelajaran Simak UI, 
Les Privat Bahasa Indonesia Simak UI, 
Les Privat Fisika Simak UI, 
Les Privat Kimia Simak UI, 
Les Privat Biologi Simak UI, 
Les Privat Ekonomi Simak UI, 
Les Privat Geografi Simak UI
"
        />

        <link
          rel="canonical"
          href={`https://apps.bimbelmatrix.com/les-privat-simak-ui/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}`}
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content={`Les Privat Simak UI Terbaik #1 ${nameCountry} Guru Les Privat Universitas Indonesia`}
        />
        <meta
          property="og:description"
          content={`Les Privat Simak UI di ${nameCountry} dengan program belajar dari guru privat berpengalaman, tersedia secara online dan offline.`}
        />
        <meta
          property="og:url"
          content={`https://apps.bimbelmatrix.com/les-privat-simak-ui/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}`}
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
          content={`Les Privat Simak UI Terbaik #1 di ${nameCountry} Guru Les Privat Universitas Indonesia`}
        />
        <meta
          name="twitter:description"
          content={`Les Privat Simak UI terbaik di ${nameCountry}  dengan guru berpengalaman. Program belajar untuk siswa Simak UI dengan metode pembelajaran privat, tersedia online dan offline.`}
        />
        <meta
          name="twitter:image"
          content="https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp"
        />
      </Helmet>

      <div className="container-all">
        <HeroLesPrivate
          heading={heroData?.heading}
          desc={heroData?.description}
          nameCountry={nameCountry}
          images={heroData?.image}
        />
        <EmbrelaSlider />
        {/* <Slidertop /> */}
        <TableOfContents title="Table of Contents" items={items} />
        <LesPrivateSimakUIHeader />

        <section id="pengajar-les-private">
          <PengajarLestPrivate />
        </section>
        <section id="fitur-program-les-private">
          <FiturProgram />
        </section>
        {/* <PromoFree /> */}
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
        <SuccessStoryLesPrivate />
        <section id="asal-sekolah-siswa-edumatrix-private">
          <AsalSekolahSiswaEdumatrix />
          <AsalSekolahSiswaMarque />
        </section>

        <Keunggulan />
        <ListKelurahanLesPrivate
          program={"les-privat-simak-ui"}
          title={"Les Privat SIMAK UI"}
        />
        {/* <AccordionFAQ /> */}
        <PromoHomepage />
      </div>

      {/* <Floatingcta /> */}
      {/* <Bottombar /> */}
    </React.Fragment>
  );
};

export default LesPrivateSimakUIKecamatan;
