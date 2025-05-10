/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
// import "./Halamankabupaten.css";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { getAllKecamatanBySlug } from "../../helper/request/getAllKecamatanBySlug";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import AsalSekolahSiswaEdumatrix from "../AsalSekolahSiswa/AsalSekolahSiswa";
import BannerComponent from "../Banner/Banner";
import FiturProgram from "../FiturProgram/FiturProgram";
import Keunggulan from "../Keunggulan/Keunggulan";
import LogoDescriptionComponent from "../LogoDescription/LogoDescription";
import MasterTeacher from "../MasterTeacher/MasterTeacher";
import MatrixFeatures from "../MatrixFeatures/MatrixFeatures";
import OnlineLesOptions from "../OnlineLesOption/OnlineLesOption";
import PengajarLestPrivate from "../PengajarLestPrivate/PengajarLestPrivate";
import ProgramBelajarLesPrivat from "../ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivat from "../ProgramLesPrivate/ProgramLesPrivate";
import PilihanProgram from "../ProgramOptions/PilihanProgram";
import AsalSekolahSiswaMarque from "../SekolahSiswaMarque/SekolahSiswaMarque";
import EmbrelaSlider from "../SlideTop/EmbrelaSlider";
import SuccessStoryLesPrivate from "../SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import ListKelurahan from "../Tab/ListKelurahan";

const Halamankecamatan = () => {
  const [kecamatan, setKecamatan] = useState([]);
  const { kecamatanSlug } = useParams();
  useEffect(() => {
    const fetchKota = async () => {
      try {
        const response = await getAllKecamatanBySlug(kecamatanSlug);
        setKecamatan(response.data);
      } catch (error) {
        console.error("Failed to fetch kecamatan data:", error);
      }
    };

    // {`${kecamatan.kecamatan}`}
    fetchKota();
  }, [kecamatanSlug]);

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Les Privat {`${kecamatan.kecamatan}`} TK SD SMP SMA OSN UTBK SNBT
          SIMAK UI CBT UGM & Mahasiswa Privat Online & Guru ke Rumah Berkualitas
        </title>
        <meta
          name="description"
          content={`Les Privat ${kecamatan.kecamatan} ke Rumah & Online TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT UGM & Mahasiswa Bimbel berkualitas, Guru Les dari UI UGM ITB dan PTN Top`}
        />
        <meta
          name="keywords"
          content={`Les Terbaik , ${kecamatan.kecamatan}, Guru Les Profesiona, Les untuk Anak , Les Privat Online, Les Privat ke Rumah, Bimbel , Les Privat SD, SMP, SMA , Les SIMAK UI, Les UM PTN, Les CBT UGM, pendidikan, tutor berkualitas, belajar efektif`}
        />
        <meta name="author" content="Matrix Tutoring" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content={`Les Privat ${kecamatan.kecamatan} TK SD SMP SMA OSN UTBK SNBT
          SIMAK UI CBT UGM & Mahasiswa  Privat Online & Guru ke Rumah
          Berkualitas`}
        />
        <meta
          property="og:description"
          content={`Les Privat ${kecamatan.kecamatan} ke Rumah & Online TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT UGM & Mahasiswa Bimbel berkualitas, Guru Les dari UI UGM ITB dan PTN Top`}
        />
        <meta
          property="og:image"
          content="https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp"
        />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />{" "}
        <link rel="canonical" href={window.location.href} />
        {/* Twitter Card Meta Tags */}
        <meta
          name="twitter:card"
          content="https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp"
        />
        <meta
          name="twitter:title"
          content={`Les Privat ${kecamatan.kecamatan}  TK SD SMP SMA OSN UTBK SNBT
          SIMAK UI CBT UGM & Mahasiswa  Privat Online & Guru ke Rumah
          Berkualitas`}
        />
        <meta
          name="twitter:description"
          content={`Les Privat ${kecamatan.kecamatan} ke Rumah & Online TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT UGM & Mahasiswa Bimbel berkualitas, Guru Les dari UI UGM ITB dan PTN Top`}
        />
        <meta
          name="twitter:image"
          content="https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp"
        />
      </Helmet>
      <div className="container-all">
        <div className="content-kota">
          <div className="teks-content">
            <h1 className="title-halaman-kota">
              Les Privat di{" "}
              <span className="highlight-yellow-kota">
                {kecamatan.kecamatan}
              </span>{" "}
              - TK, SD, SMP, SMA, UTBK SNBT, SIMAK UI, UM PTN & CBT UGM{" "}
              <span className="highlight-yellow-kota">Terbaik</span>
            </h1>
            <div className="paragraf-kota">
              <p className="child-paragraf-kota">
                Bimbel Les Privat di Kecamatan{" "}
                <span className="highlight-yellow-kota">
                  {kecamatan.kecamatan}
                </span>{" "}
                untuk TK, SD, SMP, SMA, UN/AKM, OSN, CPNS, LPDP, PPDS, SIMAK UI,
                UTBK SNBT, CBT UGM, UMPTN.
              </p>
              <p className="child-paragraf-kota">
                Dapatkan layanan Les Privat kapan pun dan dimana pun dengan
                lebih dari 5.000 Master Teacher Matrix yang siap memberikan
                pelayanan{" "}
                <span className="highlight-yellow-kota">terbaik.</span>
              </p>
            </div>
          </div>

          <img
            className="rumah-adat"
            loading="eager"
            src={"/images/KECAMATAN _1.webp"}
            alt={`les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) di ${kecamatan.kecamatan} - Matrix Tutoring`}
          />
        </div>
        <EmbrelaSlider />
        {/* <Slidertop /> */}
        <BannerComponent />
        <LogoDescriptionComponent />
        <PengajarLestPrivate />
        <FiturProgram />
        {/*    {/* <PromoFree /> */}
        <PilihanProgram />
        <OnlineLesOptions />
        <ProgramLesPrivat />
        <MasterTeacher />
        <ProgramBelajarLesPrivat />
        {/* <CurriculumOptions /> */}
        <MatrixFeatures />
        <SuccessStoryLesPrivate />
        {/* <TestimoniLestPrivate /> */}
        <AsalSekolahSiswaEdumatrix />
        <AsalSekolahSiswaMarque />
        <Keunggulan />
        <ListKelurahan />
        <PromoHomepage />
      </div>

      {/* <Bottombar /> */}
      {/* <Floatingcta /> */}
    </React.Fragment>
  );
};

export default Halamankecamatan;
