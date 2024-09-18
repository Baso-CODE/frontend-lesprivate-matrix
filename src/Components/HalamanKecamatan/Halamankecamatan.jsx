/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
// import "./Halamankabupaten.css";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import rumahAdat from "../../assets/rumah_adat.png";
import { getAllKecamatanBySlug } from "../../helper/request/getAllKecamatanBySlug";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import AsalSekolahSiswaEdumatrix from "../AsalSekolahSiswa/AsalSekolahSiswa";
import BannerComponent from "../Banner/Banner";
import PromoFree from "../BannerPromo/PromoFree";
import FiturProgram from "../FiturProgram/FiturProgram";
import Floatingcta from "../FloatingCta/Floatingcta";
import Keunggulan from "../Keunggulan/Keunggulan";
import LogoDescriptionComponent from "../LogoDescription/LogoDescription";
import MasterCarousel from "../MasterCarousel/MasterCarousel";
import MatrixFeatures from "../MatrixFeatures/MatrixFeatures";
import Navbar from "../Navbar/Navbar";
import OnlineLesOptions from "../OnlineLesOption/OnlineLesOption";
import PengajarLestPrivate from "../PengajarLestPrivate/PengajarLestPrivate";
import ProgramBelajarLesPrivat from "../ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivat from "../ProgramLesPrivate/ProgramLesPrivate";
import PilihanProgram from "../ProgramOptions/PilihanProgram";
import AsalSekolahSiswaMarque from "../SekolahSiswaMarque/SekolahSiswaMarque";
import Slidertop from "../SlideTop/Slidertop";
import SuccessStoryLesPrivate from "../SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import ListKelurahan from "../Tab/ListKelurahan";

const Halamankecamatan = () => {
  const [kecamatan, setKecamatan] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    const fetchKota = async () => {
      try {
        const response = await getAllKecamatanBySlug(slug);
        setKecamatan(response.data);
      } catch (error) {
        console.error("Failed to fetch kecamatan data:", error);
      }
    };

    fetchKota();
  }, [slug]);

  return (
    <React.Fragment>
      <Helmet>
        <meta
          charSet="utf-8"
          name="robots"
          content="Jasa Les Privat TK, SD, SMP, SMA, UTBK SNBT, SIMAK UI, UM PTN & CBT UGM terbaik dengan sistem belajar mengajar yang berkualitas  #1 - Edumatrix Indonesia"
        />
        <title>
          Les Privat di {`${kecamatan.kecamatan}`} - TK, SD, SMP, SMA, UTBK
          SNBT, SIMAK UI, UM PTN & CBT UGM - Bimbel di{" "}
          {`${kecamatan.kecamatan}`} Terbaik #1 - Matrix Indonesia Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kabupaten">
        <div className="content-kabupaten">
          <div className="teks-content">
            <h1 className="title-halaman-kabupaten">
              Les Privat di {kecamatan.kecamatan} - TK, SD, SMP, SMA, UTBK SNBT,
              SIMAK UI, UM PTN & CBT UGM Terbaik
            </h1>
            <div className="paragraf-kabupaten">
              <p>
                Bimbel Les Privat di Kota {kecamatan.kecamatan} untuk TK, SD,
                SMP, SMA, UN/AKM, OSN, CPNS, LPDP, PPDS, SIMAK UI, UTBK SNBT,
                CBT UGM, UMPTN.
              </p>
              <p className="child-paragraf-kota">
                Dapatkan layanan Les Privat kapan pun dan dimana pun dengan
                lebih dari 5.000 Master Teacher Matrix yang siap memberikan
                pelayanan terbaik.
              </p>
            </div>
          </div>
          <a className="parent-img-modeltanya-program" href="">
            <img
              className="rumah-adat"
              src={rumahAdat}
              alt="Bimbel TK-SD-SMP-SMA"
            />
          </a>

          {/* <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:">
            <img
              className="model-program-kota"
              src={modelTanyaProgram}
              alt="Bimbel TK-SD-SMP-SMA"
            />
          </a> */}
        </div>
        <Slidertop />
        <BannerComponent />
        <LogoDescriptionComponent />
        <PengajarLestPrivate />
        <FiturProgram />
        <PromoFree />
        <PilihanProgram />
        <OnlineLesOptions />
        <ProgramLesPrivat />
        <MasterCarousel />
        <ProgramBelajarLesPrivat />
        {/* <CurriculumOptions /> */}

        <MatrixFeatures />

        <SuccessStoryLesPrivate />
        {/* <TestimoniLestPrivate /> */}
        <AsalSekolahSiswaEdumatrix />

        <Keunggulan />

        <ListKelurahan />

        <AsalSekolahSiswaMarque />
        <PromoHomepage />
      </div>

      {/* <Bottombar /> */}
      <Floatingcta />
    </React.Fragment>
  );
};

export default Halamankecamatan;
