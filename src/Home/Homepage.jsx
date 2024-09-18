/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet-async";
import AsalSekolahSiswaEdumatrix from "../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import BannerComponent from "../Components/Banner/Banner";
import PromoFree from "../Components/BannerPromo/PromoFree";
import FiturProgram from "../Components/FiturProgram/FiturProgram";
import Floatingcta from "../Components/FloatingCta/Floatingcta";
import Keunggulan from "../Components/Keunggulan/Keunggulan";
import LogoDescriptionComponent from "../Components/LogoDescription/LogoDescription";
import MatrixFeatures from "../Components/MatrixFeatures/MatrixFeatures";
import Navbar from "../Components/Navbar/Navbar";
import OnlineLesOptions from "../Components/OnlineLesOption/OnlineLesOption";
import PengajarLestPrivate from "../Components/PengajarLestPrivate/PengajarLestPrivate";
import ProgramBelajarLesPrivat from "../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivat from "../Components/ProgramLesPrivate/ProgramLesPrivate";
import PilihanProgram from "../Components/ProgramOptions/PilihanProgram";
import AsalSekolahSiswaMarque from "../Components/SekolahSiswaMarque/SekolahSiswaMarque";

import AccordionFAQ from "../Components/FAQ/AccordionFAQ";
import MasterCarousel from "../Components/MasterCarousel/MasterCarousel";
import Slidertop from "../Components/SlideTop/Slidertop";
import SuccessStoryLesPrivate from "../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import Listkota from "../Components/Tab/Listkota";
import "./Homepage.css";
import PromoHomepage from "./PromoHomepage/PromoHomepage";

const Homepage = ({ setProgress }) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);

    setProgress(60);
    setTimeout(() => {
      setProgress(100);
    }, 50);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Les Privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa,
          Bahasa Asing, Simak UI, SBMPTN) Terbaik - Matrix Tutoring
        </title>
        <meta
          name="description"
          content="Matrix Tutoring menyediakan layanan les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) terbaik di Tutoring dengan berbagai fitur dan program unggulan untuk membantu belajar lebih efektif."
        />
        <meta
          name="keywords"
          content="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN), edukasi, Matrix, belajar efektif, program les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN), tutor berkualitas"
        />
        <meta name="author" content="Matrix Tutoring" />
        <meta
          property="og:title"
          content="Les Privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) Terbaik di Indonesi - Matrix Tutoring"
        />
        <meta
          property="og:description"
          content="Matrix Tutoring menyediakan layanan les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) terbaik di Indonesia dengan berbagai fitur dan program unggulan untuk membantu belajar lebih efektif."
        />
        <meta
          property="og:image"
          content="https://dblpm.edulink-indonesia.com/promo-images/IMG1725949265851.png"
        />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      {/* <PreLoader /> */}
      <Navbar />
      <div className="container-all">
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
        <AsalSekolahSiswaMarque />

        <Keunggulan />

        <Listkota />
        <AccordionFAQ />

        <PromoHomepage />
      </div>

      {/* <Bottombar /> */}
      <Floatingcta />
    </React.Fragment>
  );
};

export default Homepage;
