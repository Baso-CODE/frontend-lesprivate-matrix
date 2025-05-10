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
import LesPrivateSDHeader from "../components/LesPrivateSDHeader";

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
const LesPrivateSDKelurahan = () => {
  const [kelurahan, setKelurahan] = useState([]);
  const { kelurahanSlug, kotaSlug, kabupatenSlug, kecamatanSlug } = useParams();
  const [heroData, setHeroData] = useState(null);

  const nameCountry = kelurahan.kelurahan;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getKelurahanBySlug(kelurahanSlug);
        setKelurahan(response.data);

        const getHero = await getHeroData("SD", "kelurahan");
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
        <title>{`Bimbel dan Les Privat SD Terbaik #1 di ${nameCountry} Les Private Matrix`}</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content={`Les Privat SD terbaik di ${nameCountry}  dengan layanan guru privat berkualitas untuk membantu anak belajar secara online dan offline.`}
        />
        <meta
          name="keywords"
          content="Les Privat SD, Les Privat Sekolah Dasar, Guru Privat SD, Guru Les Privat SD, Bimbel SD, Bimbingan Belajar SD, Les Privat Online SD, Les Privat Offline SD, Program Belajar SD, Program Les Sekolah Dasar, Guru Les Calistung SD, Les Calistung SD, Les Online SD, Les Privat Anak SD, Les Privat Matematika SD, Les Privat IPA SD, Les Privat Bahasa Inggris SD, Tutor SD Berpengalaman, Les Privat Mata Pelajaran SD"
        />
        <link
          rel="canonical"
          href={`https://apps.bimbelmatrix.com/les-privat-sd/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${kelurahanSlug}`}
        />
        <meta
          property="og:title"
          content={`Les Privat SD Terbaik #1 di ${nameCountry} Guru Les Privat Sekolah Dasar`}
        />
        <meta
          property="og:description"
          content={`Les Privat SD di ${nameCountry} dengan program belajar dari guru privat berpengalaman, tersedia secara online dan offline.`}
        />
        <meta
          property="og:url"
          content={`https://apps.bimbelmatrix.com/les-privat-sd/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${kelurahanSlug}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="twitter:card"
          content="https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp"
        />
        <meta name="twitter:site" content="@matrix_tutoring" />
        <meta
          name="twitter:title"
          content={`Les Privat SD Terbaik #1 di ${nameCountry} Guru Les Privat Sekolah Dasar`}
        />
        <meta
          name="twitter:description"
          content={`Les Privat SD terbaik di ${nameCountry} dengan guru berpengalaman. Program belajar untuk siswa SD dengan metode pembelajaran privat, tersedia online dan offline.`}
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
        <LesPrivateSDHeader />
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
        {/* <AccordionFAQ /> */}
        <PromoHomepage />
      </div>

      {/* <Floatingcta /> */}
      {/* <Bottombar /> */}
    </React.Fragment>
  );
};

export default LesPrivateSDKelurahan;
