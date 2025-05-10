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
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";

import MasterTeacher from "../../../Components/MasterTeacher/MasterTeacher";
import { getAllKecamatanBySlug } from "../../../helper/request/getAllKecamatanBySlug";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import ListKelurahanLesPrivate from "../../components/ListKelurahanLesPrivate/ListKelurahanLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import LearningFeaturesLesPrivateTk from "../components/LearningFeaturesLesPrivateTk";
import LesPrivateTKHeader from "../components/LesPrivateTKHeader";

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
const LesPrivateTKKecamatan = () => {
  const [kecamatan, setKecamatan] = useState([]);
  const { kecamatanSlug, kabupatenSlug, kotaSlug } = useParams();
  const [heroData, setHeroData] = useState(null);

  const nameCountry = kecamatan.kecamatan;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllKecamatanBySlug(kecamatanSlug);
        setKecamatan(response.data);

        const heroImage = await getHeroData("TK", "kecamatan");
        setHeroData(heroImage);
      } catch (error) {
        console.error("Failed to fetch kecamatan data:", error);
      }
    };

    fetchData();
  }, [kecamatanSlug]);

  return (
    <div>
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Les Privat TK Terbaik {`${kecamatan.kecamatan}`} #1 Guru Les Privat
            Calistung PAUD dan Taman Kanak-Kanak Matrix Tutoring
          </title>
          <meta name="robots" content="index, follow" />
          <meta
            name="description"
            content={`Les Privat TK Terbaik di ${kecamatan.kecamatan}, meliputi calistung, PAUD, dan kegiatan belajar untuk masa taman kanak-kanak. Guru les privat berpengalaman hadir secara online dan offline.`}
          />
          <meta
            name="keywords"
            content="Les Privat TK, Guru Calistung, Les PAUD, Les Privat Online TK, Les Privat Taman Kanak-Kanak, Program Belajar TK, Guru Les TK"
          />
          <link
            rel="canonical"
            href={`https://apps.bimbelmatrix.com/les-privat-tk/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}`}
          />
          <meta
            property="og:title"
            content={`Les Privat TK Terbaik #1 di ${kecamatan.kecamatan} Guru Les Privat Calistung dan PAUD`}
          />
          <meta
            property="og:description"
            content={`Les Privat TK dan PAUD terbaik di ${kecamatan.kecamatan}. Program belajar dari guru privat berpengalaman yang mencakup calistung, taman kanak-kanak, dan PAUD, tersedia secara online dan offline.`}
          />
          <meta
            property="og:url"
            content={`https://apps.bimbelmatrix.com/les-privat-tk/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}`}
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
            content={`Les Privat TK Terbaik #1 di ${kecamatan.kecamatan} Guru Les Privat Calistung dan PAUD`}
          />
          <meta
            name="twitter:description"
            content={`Les Privat TK terbaik di ${kecamatan.kecamatan}, termasuk calistung, PAUD, dan program belajar taman kanak-kanak. Guru privat online dan offline berpengalaman.`}
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
          <LesPrivateTKHeader />
          <LearningFeaturesLesPrivateTk />

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

          <ListKelurahanLesPrivate
            program={"les-privat-tk"}
            title={"Les Privat TK"}
          />

          <PromoHomepage />
        </div>

        {/* <Floatingcta /> */}
        {/* <Bottombar /> */}
      </React.Fragment>
    </div>
  );
};

export default LesPrivateTKKecamatan;
