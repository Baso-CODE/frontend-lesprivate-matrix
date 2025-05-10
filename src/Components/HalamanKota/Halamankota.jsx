/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { getAllKotBySlug } from "../../helper/request/getAllKotaBySlug";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
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
import ListKabupaten from "../Tab/ListKabupaten";
import "./Halamankota.css";

const Halamankota = () => {
  const [kota, setKota] = useState([]);

  const { kotaSlug } = useParams();
  useEffect(() => {
    const fetchKota = async () => {
      try {
        const response = await getAllKotBySlug(kotaSlug);

        setKota(response.data);
      } catch (error) {
        console.error("Failed to fetch kota data:", error);
      }
    };

    fetchKota();
  }, [kotaSlug]);

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Les Privat {`${kota.kota}`} TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT
          UGM & Mahasiswa Online & Guru Datang ke Rumah
        </title>
        <meta
          name="description"
          content={`Les Privat ${kota.kota} Datang ke Rumah & Online TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT UGM & Mahasiswa Bimbel berkualitas, guru les privat dari UI UGM ITB dan PTN terbaik`}
        />
        <meta
          name="keywords"
          content={`Les Terbaik, ${kota.kota}, Guru Les Profesiona, Les untuk Anak , Les Privat Online, Les Privat ke Rumah, Bimbel , Les Privat SD, SMP, SMA , Les SIMAK UI, Les UM PTN, Les CBT UGM, pendidikan, tutor berkualitas, belajar efektif`}
        />
        <meta name="author" content="Matrix Tutoring" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content={`Les Privat di ${kota.kota} TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT
          UGM & Mahasiswa  Online & Guru Datang ke Rumah`}
        />
        <meta
          property="og:description"
          content={`Les Privat ${kota.kota} Datang ke Rumah & Online TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT UGM & Mahasiswa Bimbel berkualitas, guru les privat dari UI UGM ITB dan PTN terbaik`}
        />
        <meta
          property="og:image"
          content="https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp"
        />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
        {/* Twitter Card Meta Tags */}
        <meta
          name="twitter:card"
          content="https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp"
        />
        <meta
          name="twitter:title"
          content={`Les Privat di ${kota.kota} TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT
          UGM & Mahasiswa  Online & Guru Datang ke Rumah`}
        />
        <meta
          name="twitter:description"
          content={`Les Privat ${kota.kota} Datang ke Rumah & Online TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT UGM & Mahasiswa Bimbel berkualitas, guru les privat dari UI UGM ITB dan PTN terbaik`}
        />
        <meta
          name="twitter:image"
          content="https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp"
        />
      </Helmet>{" "}
      <div className="container-all">
        <div className="content-kota">
          <div className="teks-content">
            <h1 className="title-halaman-kota">
              Les Privat di{" "}
              <span className="highlight-yellow-kota">{kota.kota}</span> - TK,
              SD, SMP, SMA, UTBK SNBT, SIMAK UI, UM PTN & CBT UGM{" "}
              <span className="highlight-yellow-kota">Terbaik</span>
            </h1>

            <div className="paragraf-kota">
              <p className="child-paragraf-kota">
                Bimbel Les Privat di Kota {kota.kota} untuk TK, SD, SMP, SMA,
                UN/AKM, OSN, CPNS, LPDP, PPDS, SIMAK UI, UTBK SNBT, CBT UGM,
                UMPTN.
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
            loading="eager"
            className="rumah-adat"
            src={kota.url}
            alt={`les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) di${kota.kota} - Matrix Tutoring`}
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
        <MatrixFeatures />
        <SuccessStoryLesPrivate />
        {/* <TestimoniLestPrivate /> */}
        <AsalSekolahSiswaMarque />
        <Keunggulan />
        <ListKabupaten />
        {/* <AccordionFAQ /> */}
        <PromoHomepage />
      </div>
      {/* <Floatingcta /> */}
    </React.Fragment>
  );
};

export default Halamankota;
