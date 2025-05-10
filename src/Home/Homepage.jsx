/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Helmet } from "react-helmet-async";
import AsalSekolahSiswaEdumatrix from "../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import BannerComponent from "../Components/Banner/Banner";
import FiturProgram from "../Components/FiturProgram/FiturProgram";
import LogoDescriptionComponent from "../Components/LogoDescription/LogoDescription";
import MatrixFeatures from "../Components/MatrixFeatures/MatrixFeatures";
import OnlineLesOptions from "../Components/OnlineLesOption/OnlineLesOption";
import PengajarLestPrivate from "../Components/PengajarLestPrivate/PengajarLestPrivate";
import ProgramBelajarLesPrivat from "../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivat from "../Components/ProgramLesPrivate/ProgramLesPrivate";
import PilihanProgram from "../Components/ProgramOptions/PilihanProgram";
import AsalSekolahSiswaMarque from "../Components/SekolahSiswaMarque/SekolahSiswaMarque";

import HeroHome from "../Components/HeroHome/HeroHome";
import MasterTeacher from "../Components/MasterTeacher/MasterTeacher";
import EmbrelaSlider from "../Components/SlideTop/EmbrelaSlider";
import SuccessStoryLesPrivate from "../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import Listkota from "../Components/Tab/Listkota";
import TestimonialSiswa from "../Components/TestimonialSiswa/TestimonialSiswa";
import TestimoniOrtuSiswa from "../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import "./Homepage.css";
import PromoHomepage from "./PromoHomepage/PromoHomepage";

const Homepage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Les Privat Online & Guru ke Rumah TK SD SMP SMA AKM UTBK SNBT SIMAK UI
          Mahasiswa Bahasa Mengaji Komputer TOEFL Terbaik - Matrix Tutoring
        </title>
        <meta
          name="description"
          content="Matrix Tutoring menyediakan layanan les privat online dan ke rumah untuk TK hingga SMA, termasuk AKM, persiapan universitas, dan bahasa asing."
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
          content="https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp"
        />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
        <meta
          name="twitter:card"
          content="https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp"
        />
        <meta
          name="twitter:image"
          content="https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp"
        />
      </Helmet>

      <div className="container-all">
        <HeroHome />
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
        <TestimonialSiswa />
        <TestimoniOrtuSiswa />
        {/* <TestimoniLestPrivate /> */}
        <AsalSekolahSiswaEdumatrix />
        <AsalSekolahSiswaMarque />
        {/* <Keunggulan /> */}
        <Listkota />
        {/* <AccordionFAQ /> */}
        <PromoHomepage />
      </div>

      {/* <Floatingcta /> */}
    </React.Fragment>
  );
};

export default Homepage;
