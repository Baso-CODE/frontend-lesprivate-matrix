import React from "react";
import { Helmet } from "react-helmet-async";
// import Bottombar from "../BottomBar/Bottombar";
import Floatingcta from "../FloatingCta/Floatingcta";
import Navbar from "../Navbar/Navbar";
import PengajarLestPrivate2 from "../PengajarLestPrivate/PengajarLesPrivat2";
import AboutUsHistoryAndSuccess from "./AboutUsHIstoryAndSuccesLesPrivate/AboutUsHistoryAndSuceesLesPrivate";
import "./AboutUsLesPrivate.css";
import ProfesionalTeam from "./OurTeam/ProfesionalTeam";

const AboutUsLesPrivate = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tentang Kami - #1 Edumatrix Indonesia</title>
        <link rel="canonical" href="/tentang-kami" />
      </Helmet>
      <Navbar />
      <div className="container-all">
        <div className="about-us">
          <header className="about-us-header">
            <h1>Tentang Kami</h1>
          </header>
          <section className="about-us-content">
            <div className="about-us-image">
              <img src="/images/about-us/hero-about.png" alt="About Us" />
            </div>

            {/* pengajar les private */}
            <PengajarLestPrivate2 />
            <div className="about-us-info">
              <h2>Visi Kami</h2>
              <p>
                Visi kami adalah untuk menyediakan dukungan pendidikan
                berkualitas tinggi kepada siswa dari segala usia. Kami bertujuan
                untuk menciptakan lingkungan belajar yang mendukung dan
                merangsang yang membantu siswa mencapai potensi penuh mereka.
              </p>
              <h2>Misi Kami</h2>
              <p>
                Kami berkomitmen untuk menyediakan program dan layanan yang
                berkualitas, merekrut, melatih, dan menugaskan pengajar yang
                berkompeten dari berbagai perguruan tinggi terbaik. Kami juga
                mengembangkan sistem layanan akademik yang efektif dan solutif.
                Kami berusaha menjadi sahabat siswa untuk mengoptimalkan
                kemampuan akademik terbaik mereka, serta menjadi partner orang
                tua dalam membimbing dan memotivasi anak agar selalu berprestasi
                dan berbahagia.
              </p>
            </div>
          </section>
          <AboutUsHistoryAndSuccess />
          <ProfesionalTeam />
        </div>
      </div>

      <Floatingcta />
      {/* <Bottombar /> */}
    </React.Fragment>
  );
};

export default AboutUsLesPrivate;
