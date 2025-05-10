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
import { getKelurahanBySlug } from "../../../helper/request/getAllKelurahanBySlug";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import LesPrivateSMAHeader from "../components/LesPrivateSMAHeader";

const items = [
  {
    text: "Les Privat SMA – Guru Les Privat SMA ke Rumah dan Bimbel Online",
    href: "#les-privat-sma",
    subItems: [
      {
        text: "Kurikulum dan Mata Pelajaran",
        href: "#kurikulum-dan-mata-pelajaran",
      },

      {
        text: "Pengajar Berkualitas dan Terpercaya",
        href: "#pengajar-berkualitas-sma",
      },
    ],
  },
  {
    text: "Pengajar Les Private SMA",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private SMA",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline SMA",
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
const LesPrivateSMAKelurahan = () => {
  const [kelurahan, setKelurahan] = useState([]);
  const [heroData, setHeroData] = useState(null);
  const { kelurahanSlug, kecamatanSlug, kabupatenSlug, kotaSlug } = useParams();
  const nameCountry = kelurahan.kelurahan;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getKelurahanBySlug(kelurahanSlug);
        setKelurahan(response.data);

        const getHero = await getHeroData("SMA", "kelurahan");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch kelurahan data:", error);
      }
    };

    fetchData();
  }, [kelurahanSlug]);
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {`Bimbel dan Les Privat SMA Terbaik #1 di ${nameCountry} Les Private Matrix Tutoring`}
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content={`Les Privat SMA terbaik di ${nameCountry} dengan layanan guru privat berkualitas untuk membantu siswa SMA belajar secara online dan offline.`}
        />
        <meta
          name="keywords"
          content="
  Les Privat SMA, 
  Les Privat Sekolah Menengah Atas, 
  Guru Privat SMA, 
  Guru Les Privat SMA, 
  Bimbel SMA, 
  Bimbingan Belajar SMA, 
  Les Privat Online SMA, 
  Les Privat Offline SMA, 
  Program Belajar SMA, 
  Program Les Sekolah Menengah Atas, 
  Guru Les Matematika SMA, 
  Les Matematika SMA, 
  Les IPA SMA, 
  Les Bahasa Inggris SMA, 
  Tutor SMA Berpengalaman, 
  Les Privat Mata Pelajaran SMA, 
  Les Privat Bahasa Indonesia SMA, 
  Les Privat Fisika SMA, 
  Les Privat Kimia SMA, 
  Les Privat Biologi SMA, 
  Les Privat Ekonomi SMA, 
  Les Privat Geografi SMA
"
        />

        <link
          rel="canonical"
          href={`https://apps.bimbelmatrix.com/les-privat-sma/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${kelurahanSlug}`}
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content={`Les Privat SMA Terbaik #1 di ${nameCountry} Guru Les Privat Sekolah Menengah Atas`}
        />
        <meta
          property="og:description"
          content={`Les Privat SMA di ${nameCountry} dengan program belajar dari guru privat berpengalaman, tersedia secara online dan offline.`}
        />
        <meta
          property="og:url"
          content={`https://apps.bimbelmatrix.com/les-privat-sma/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${kelurahanSlug}`}
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
          content={`Les Privat SMA Terbaik #1 di ${nameCountry} Guru Les Privat Sekolah Menengah Atas`}
        />
        <meta
          name="twitter:description"
          content={`Les Privat SMA terbaik di ${nameCountry}  dengan guru berpengalaman. Program belajar untuk siswa SMA dengan metode pembelajaran privat, tersedia online dan offline.`}
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
        <LesPrivateSMAHeader />

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
        <section id="asal-sekolah-siswa-edumatrix-private">
          <AsalSekolahSiswaEdumatrix />
          <AsalSekolahSiswaMarque />
        </section>
        <Keunggulan />

        {/* <AccordionFAQ /> */}

        <PromoHomepage />
      </div>

      {/* <Floatingcta /> */}
    </React.Fragment>
  );
};

export default LesPrivateSMAKelurahan;
