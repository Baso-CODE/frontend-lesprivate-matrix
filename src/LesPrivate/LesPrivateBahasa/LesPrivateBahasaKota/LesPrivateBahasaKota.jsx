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
import { getAllKotBySlug } from "../../../helper/request/getAllKotaBySlug";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import ListKabupatenLesPrivate from "../../components/ListKabupatenLesPrivate/ListKabupatenLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import LesPrivateBahasaHeader from "../components/LesPrivateBahasaHeader";

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

const LesPrivateBahasaKota = () => {
  const [kota, setKota] = useState([]);
  const [heroData, setHeroData] = useState(null);
  const { kotaSlug } = useParams();

  const nameCountry = kota.kota;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllKotBySlug(kotaSlug);
        setKota(response.data);

        const getHero = await getHeroData("BAHASA", "kota");
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
          {`Bimbel Les Privat Bahasa Asing  Kursus Bahasa Inggris dan Asing di ${nameCountry} Les
          Privat Matrix`}
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content={`Temukan les privat bahasa asing terbaik dengan berbagai pilihan program fleksibel, termasuk les privat online dan offline. Dukungan belajar terbaik untuk Bahasa Inggris dan bahasa asing lainnya di ${nameCountry}  bersama Les Private Matrix.
            `}
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
          href={`https://apps.bimbelmatrix.com/les-privat-bahasa-asing/${kotaSlug}`}
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content={`Bimbel Les Privat Bahasa Asing  Kursus Bahasa Inggris dan Asing di ${nameCountry} Les
          Privat Matrix`}
        />
        <meta
          property="og:description"
          content={`Temukan les privat bahasa asing terbaik dengan berbagai pilihan program fleksibel, termasuk les privat online dan offline. Dukungan belajar terbaik untuk Bahasa Inggris dan bahasa asing lainnya di ${nameCountry} bersama Les Private Matrix.
          `}
        />
        <meta
          property="og:url"
          content={`https://apps.bimbelmatrix.com/les-privat-bahasa-asing/${kotaSlug}`}
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
        <meta
          name="twitter:title"
          content={`Bimbel Les Privat Bahasa Asing  Kursus Bahasa Inggris dan Asing di ${nameCountry} Les
          Privat Matrix`}
        />
        <meta
          name="twitter:description"
          content={`Temukan les privat bahasa asing terbaik dengan berbagai pilihan program fleksibel, termasuk les privat online dan offline. Dukungan belajar terbaik untuk Bahasa Inggris dan bahasa asing lainnya di ${nameCountry} bersama Les Private Matrix.
          `}
        />
        <meta
          name="twitter:image"
          content="https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp"
        />
        <meta name="twitter:site" content="@matrix_tutoring" />
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
        <LesPrivateBahasaHeader />
        <section id="pengajar-les-private">
          <PengajarLestPrivate />
        </section>
        <section id="fitur-program-les-private">
          {`Bimbel Les Privat Bahasa Asing  Kursus Bahasa Inggris dan Asing di ${nameCountry} Les
          Privat Matrix`}
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
        <ListKabupatenLesPrivate
          program={"les-privat-bahasa-asing"}
          title={"Les Privat Bahasa Asing"}
        />
        {/* <AccordionFAQ /> */}
        <PromoHomepage />
      </div>

      {/* <Floatingcta /> */}
      {/* <Bottombar /> */}
    </React.Fragment>
  );
};

export default LesPrivateBahasaKota;
