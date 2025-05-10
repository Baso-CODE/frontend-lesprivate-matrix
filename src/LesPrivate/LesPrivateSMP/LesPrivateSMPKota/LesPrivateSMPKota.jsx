import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AsalSekolahSiswaEdumatrix from "../../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import FiturProgram from "../../../Components/FiturProgram/FiturProgram";
import Keunggulan from "../../../Components/Keunggulan/Keunggulan";
import MatrixFeatures from "../../../Components/MatrixFeatures/MatrixFeatures";
import OnlineLesOptions from "../../../Components/OnlineLesOption/OnlineLesOption";
import PengajarLestPrivate from "../../../Components/PengajarLestPrivate/PengajarLestPrivate";
import ProgramBelajarLesPrivat from "../../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivat from "../../../Components/ProgramLesPrivate/ProgramLesPrivate";
import PilihanProgram from "../../../Components/ProgramOptions/PilihanProgram";
import AsalSekolahSiswaMarque from "../../../Components/SekolahSiswaMarque/SekolahSiswaMarque";
import EmbrelaSlider from "../../../Components/SlideTop/EmbrelaSlider";
import { getAllKotBySlug } from "../../../helper/request/getAllKotaBySlug";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import LesPrivateSMPHeader from "../components/LesPrivateSMPHeader";

import MasterTeacher from "../../../Components/MasterTeacher/MasterTeacher";
import { getHeroData } from "../../../utils/getHeroData";
import ListKabupatenLesPrivate from "../../components/ListKabupatenLesPrivate/ListKabupatenLesPrivate";
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

const LesPrivateSMPKota = () => {
  const [kota, setKota] = useState([]);
  const { kotaSlug } = useParams();
  const [heroData, setHeroData] = useState(null);

  const nameCountry = kota.kota;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllKotBySlug(kotaSlug);
        setKota(response.data);

        const getHero = await getHeroData("SMP", "kota");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch kota data:", error);
      }
    };

    fetchData();
  }, [kotaSlug]);
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {`Les Privat SMP #1 di ${nameCountry} Bimbingan Belajar Terbaik untuk Sukses Akademik!`}
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Les Privat SMP terbaik di Indonesia! Dapatkan bimbingan belajar dari guru privat berpengalaman dengan metode pembelajaran yang efektif, tersedia online dan offline. Tingkatkan prestasi akademik dengan les privat yang disesuaikan untuk siswa SMP."
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
          href={`https://apps.bimbelmatrix.com/les-privat-smp/${kotaSlug}`}
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content={`Les Privat SMP #1 di ${nameCountry} Bimbingan Belajar Terbaik untuk Sukses Akademik!`}
        />
        <meta
          property="og:description"
          content="Les Privat SMP di Indonesia dengan program belajar dari guru privat berpengalaman, tersedia secara online dan offline."
        />
        <meta
          property="og:url"
          content={`https://apps.bimbelmatrix.com/les-privat-smp/${kotaSlug}`}
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
          content={`Les Privat SMP #1 di ${nameCountry} Bimbingan Belajar Terbaik untuk Sukses Akademik!`}
        />
        <meta
          name="twitter:description"
          content="Les Privat SMP terbaik dengan guru berpengalaman. Program belajar untuk siswa SMP dengan metode pembelajaran privat, tersedia online dan offline."
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
        <LesPrivateSMPHeader />

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
        <ListKabupatenLesPrivate
          program={"les-privat-smp"}
          title={"Les Privat SMP"}
        />

        {/* <AccordionFAQ /> */}
        <PromoHomepage />
      </div>

      {/* <Floatingcta /> */}
      {/* <Bottombar /> */}
    </React.Fragment>
  );
};

export default LesPrivateSMPKota;
