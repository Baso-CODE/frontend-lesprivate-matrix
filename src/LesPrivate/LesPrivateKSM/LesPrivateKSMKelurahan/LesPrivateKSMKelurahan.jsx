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
import LesPrivateKSMHeader from "../components/LesPrivateKSMHeader";

const items = [
  {
    text: "Les Privat AKM (Asesmen Kompetensi Minimum)",
    href: "#les-privat-ksm",
    subItems: [
      {
        text: "Perubahan dalam Dunia Pendidikan di Indonesia",
        href: "#perubahan-dunia-pendidikan",
      },
      {
        text: "Bagian dari Asesmen Nasional",
        href: "#bagian-dari-asesmen-nasional",
      },
      {
        text: "Tujuan dari AKM dan Manfaatnya",
        href: "#tujuan-dari-akm",
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

const LesPrivateKSMKelurahan = () => {
  const [kelurahan, setKelurahan] = useState([]);
  const [heroData, setHeroData] = useState(null);
  const { kelurahanSlug, kecamatanSlug, kabupatenSlug, kotaSlug } = useParams();
  const nameCountry = kelurahan.kelurahan;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getKelurahanBySlug(kelurahanSlug);
        setKelurahan(response.data);

        const getHero = await getHeroData("AKM", "kelurahan");
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
          {`Bimbel Les Privat Asesmen Kompetensi Minimum (AKM) di ${nameCountry}  Literasi Membaca
dan Berhitung untuk SD, SMP, SMA Les Privat Matrix `}
        </title>
        <meta
          name="description"
          content={`Temukan informasi lengkap tentang Les Privat Asesmen Kompetensi Minimum (AKM) untuk SD, SMP, dan SMA di ${nameCountry} dengan Matrix. Pelajari tentang fitur program, pengajar, pilihan les online/offline, dan banyak lagi. `}
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://apps.bimbelmatrix.com/les-privat-akm-asesmen-kompetensi-minimum/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${kelurahanSlug}`}
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content={`Bimbel Les Privat Asesmen Kompetensi Minimum (AKM) di ${nameCountry}  Literasi Membaca
dan Berhitung untuk SD, SMP, SMA Les Privat Matrix `}
        />
        <meta
          property="og:description"
          content={`Temukan informasi lengkap tentang Les Privat Asesmen Kompetensi Minimum (AKM) untuk SD, SMP, dan SMA di ${nameCountry} dengan Matrix. Pelajari tentang fitur program, pengajar, pilihan les online/offline, dan banyak lagi. `}
        />
        <meta
          property="og:url"
          content={`https://apps.bimbelmatrix.com/les-privat-akm-asesmen-kompetensi-minimum/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${kelurahanSlug}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Bimbel Les Privat Asesmen Kompetensi Minimum (AKM) di ${nameCountry}  Literasi Membaca
dan Berhitung untuk SD, SMP, SMA Les Privat Matrix `}
        />
        <meta
          name="twitter:description"
          content={`Temukan informasi lengkap tentang Les Privat Asesmen Kompetensi Minimum (AKM) untuk SD, SMP, dan SMA di ${nameCountry} dengan Matrix. Pelajari tentang fitur program, pengajar, pilihan les online/offline, dan banyak lagi. `}
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
        <LesPrivateKSMHeader />
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

export default LesPrivateKSMKelurahan;
