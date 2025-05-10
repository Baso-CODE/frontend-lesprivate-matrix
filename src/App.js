import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import AboutUsLesPrivate from "./Components/AboutUsLesPrivate/AboutUsLesPrivate";
import Halamankabupaten from "./Components/HalamanKabupaten/Halamankabupaten";
import Halamankecamatan from "./Components/HalamanKecamatan/Halamankecamatan";
import Halamankota from "./Components/HalamanKota/Halamankota";
import Homepage from "./Home/Homepage";
import LesPrivateSD from "./LesPrivate/LesPrivateSD/LesPrivateSD";

import LesPrivateBahasa from "./LesPrivate/LesPrivateBahasa/LesPrivateBahasa";
import LesPrivateKSM from "./LesPrivate/LesPrivateKSM/LesPrivateKSM";
import LesPrivateMahasiswa from "./LesPrivate/LesPrivateMahasiswa/LesPrivateMahasiswa";
import LesPrivateSBMPTN from "./LesPrivate/LesPrivateSBMPTN/LesPrivateSBMPTN";
import LesPrivateSimakUI from "./LesPrivate/LesPrivateSimakUI/LesPrivateSimakUI";
import LesPrivateSMA from "./LesPrivate/LesPrivateSMA/LesPrivateSMA";
import LesPrivateSMP from "./LesPrivate/LesPrivateSMP/LesPrivateSMP";
import LesPrivateTK from "./LesPrivate/LesPrivateTK/LesPrivateTK";

import { useEffect, useState } from "react";
import Floatingcta from "./Components/FloatingCta/Floatingcta";
import Halamankelurahan from "./Components/HalamanKelurahan/HalamanKelurahan";
import MatrixFooter from "./Components/MatrixFooter/MatrixFooter";
import Tutor from "./Components/Tutor/Tutor";
import LoadingSpinner from "./helper/LoadingSpinner/LoadingSpinner";
import Nav from "./helper/Navbar/Nav/Nav";
import ScrollToTop from "./helper/scrollToTop";
import ScrollToTopButton from "./helper/ScrollToTopButton/ScrollToTopButton";
import LesPrivateBahasaKabupaten from "./LesPrivate/LesPrivateBahasa/LesPrivateBahasaKabupaten/LesPrivateBahasaKabupaten";
import LesPrivateBahasaKecamatan from "./LesPrivate/LesPrivateBahasa/LesPrivateBahasaKecamatan/LesPrivateBahasaKecamatan";
import LesPrivateBahasaKelurahan from "./LesPrivate/LesPrivateBahasa/LesPrivateBahasaKelurahan/LesPrivateBahasaKelurahan";
import LesPrivateBahasaKota from "./LesPrivate/LesPrivateBahasa/LesPrivateBahasaKota/LesPrivateBahasaKota";
import LesPrivateKSMKabupaten from "./LesPrivate/LesPrivateKSM/LesPrivateKSMKabupaten/LesPrivateKSMKabupaten";
import LesPrivateKSMKecamatan from "./LesPrivate/LesPrivateKSM/LesPrivateKSMKecamatan/LesPrivateKSMKecamatan";
import LesPrivateKSMKelurahan from "./LesPrivate/LesPrivateKSM/LesPrivateKSMKelurahan/LesPrivateKSMKelurahan";
import LesPrivateKSMKota from "./LesPrivate/LesPrivateKSM/LesPrivateKSMKota/LesPrivateKSMKota";
import LesPrivateMahasiswaKabupaten from "./LesPrivate/LesPrivateMahasiswa/LesPrivateMahasiswaKabupaten/LesPrivateMahasiswaKabupaten";
import LesPrivateMahasiswaKecamatan from "./LesPrivate/LesPrivateMahasiswa/LesPrivateMahasiswaKecamatan/LesPrivateMahasiswaKecamatan";
import LesPrivateMahasiswaKelurahan from "./LesPrivate/LesPrivateMahasiswa/LesPrivateMahasiswaKelurahan/LesPrivateMahasiswaKelurahan";
import LesPrivateMahasiswaKota from "./LesPrivate/LesPrivateMahasiswa/LesPrivateMahasiswaKota/LesPrivateMahasiswaKota";
import LesPrivateSBMPTNKabupaten from "./LesPrivate/LesPrivateSBMPTN/LesPrivateSBMPTNKabupaten/LesPrivateSBMPTNKabupaten";
import LesPrivateSBMPTNKecamatan from "./LesPrivate/LesPrivateSBMPTN/LesPrivateSBMPTNKecamatan/LesPrivateSBMPTNKecamatan";
import LesPrivateSBMPTNKelurahan from "./LesPrivate/LesPrivateSBMPTN/LesPrivateSBMPTNKelurahan/LesPrivateSBMPTNKelurahan";
import LesPrivateSBMPTNKkota from "./LesPrivate/LesPrivateSBMPTN/LesPrivateSBMPTNKkota/LesPrivateSBMPTNKkota";
import LesPrivateSDKabupaten from "./LesPrivate/LesPrivateSD/LesPrivateSDKabupaten/LesPrivateSDKabupaten";
import LesPrivateSDKecamatan from "./LesPrivate/LesPrivateSD/LesPrivateSDKecamatan/LesPrivateSDKecamatan";
import LesPrivateSDKelurahan from "./LesPrivate/LesPrivateSD/LesPrivateSDKelurahan/LesPrivateSDKelurahan";
import LesPrivateSDKota from "./LesPrivate/LesPrivateSD/LesPrivateSDKota/LesPrivateSDKota";
import LesPrivateSimakUIKabupaten from "./LesPrivate/LesPrivateSimakUI/LesPrivateSimakUIKabupaten/LesPrivateSimakUIKabupaten";
import LesPrivateSimakUIKecamatan from "./LesPrivate/LesPrivateSimakUI/LesPrivateSimakUIKecamatan/LesPrivateSimakUIKecamatan";
import LesPrivateSimakUIKota from "./LesPrivate/LesPrivateSimakUI/LesPrivateSimakUIKota/LesPrivateSimakUIKota";
import LesPrivateSMAKabupaten from "./LesPrivate/LesPrivateSMA/LesPrivateSMAKabupaten/LesPrivateSMAKabupaten";
import LesPrivateSMAKecamatan from "./LesPrivate/LesPrivateSMA/LesPrivateSMAKecamatan/LesPrivateSMAKecamatan";
import LesPrivateSMAKelurahan from "./LesPrivate/LesPrivateSMA/LesPrivateSMAKelurahan/LesPrivateSMAKelurahan";
import LesPrivateSMAKota from "./LesPrivate/LesPrivateSMA/LesPrivateSMAKota/LesPrivateSMAKota";
import LesPrivateSMPKabupaten from "./LesPrivate/LesPrivateSMP/LesPrivateSMPKabupaten/LesPrivateSMPKabupaten";
import LesPrivateSMPKecamatan from "./LesPrivate/LesPrivateSMP/LesPrivateSMPKecamatan/LesPrivateSMPKecamatan";
import LesPrivateSMPKelurahan from "./LesPrivate/LesPrivateSMP/LesPrivateSMPKelurahan/LesPrivateSMPKelurahan";
import LesPrivateSMPKota from "./LesPrivate/LesPrivateSMP/LesPrivateSMPKota/LesPrivateSMPKota";
import LesPrivateTKKabupaten from "./LesPrivate/LesPrivateTK/LesPrivateTKKabupaten/LesPrivateTKKabupaten";
import LesPrivateTKKecamatan from "./LesPrivate/LesPrivateTK/LesPrivateTkKecamatan/LesPrivateTkKecamatan";
import LesPrivateTKKelurahan from "./LesPrivate/LesPrivateTK/LesPrivateTkKelurahan/LesPrivateTkKelurahan";
import LesPrivateTKKota from "./LesPrivate/LesPrivateTK/LesPrivateTKKota/LesPrivateTKKota";

// const TRACKING_ID = "G-NZRFMBB12N";
// ReactGA.initialize(TRACKING_ID);

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handlePageChange = () => {
      setLoading(true); // Set loading true saat berpindah halaman
      const timer = setTimeout(() => {
        setLoading(false); // Set loading false setelah 1 detik
      }, 1000);

      return () => clearTimeout(timer); // Cleanup timer
    };

    handlePageChange();
  }, [location]); // Trigger effect saat location berubah

  return (
    <>
      <ScrollToTop />
      <Nav />
      {/* <Navbar /> */}
      {loading && <LoadingSpinner />}{" "}
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        {/* Rute dinamis untuk kota */}
        <Route
          exact
          path="/les-privat-di-kota/:kotaSlug"
          element={<Halamankota />}
        />
        {/* Rute dinamis untuk kabupaten */}
        <Route
          exact
          path="/les-privat-di-kota/:kotaSlug/:kabupatenSlug"
          element={<Halamankabupaten />}
        />
        {/* Rute dinamis untuk kecamatan */}
        <Route
          exact
          path="/les-privat-di-kota/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
          element={<Halamankecamatan />}
        />
        {/* Rute dinamis untuk kelurahan */}
        <Route
          exact
          path="/les-privat-di-kota/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
          element={<Halamankelurahan />}
        />

        <Route exact path="*" element={<Homepage />}></Route>
        {/* Go to Search Kelas */}

        <Route
          exact
          path="/tentang-kami"
          element={<AboutUsLesPrivate />}></Route>

        {/* LES PRIVATE */}
        {/* LES PRIVATE TK */}
        <Route exact path="/les-privat-tk" element={<LesPrivateTK />}></Route>
        <Route
          exact
          path="/les-privat-tk/:kotaSlug"
          element={<LesPrivateTKKota />}></Route>
        <Route
          exact
          path="/les-privat-tk/:kotaSlug/:kabupatenSlug"
          element={<LesPrivateTKKabupaten />}></Route>
        <Route
          exact
          path="/les-privat-tk/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
          element={<LesPrivateTKKecamatan />}></Route>
        <Route
          exact
          path="/les-privat-tk/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
          element={<LesPrivateTKKelurahan />}></Route>

        {/* LES PRIVATE SD */}
        <Route exact path="/les-privat-sd" element={<LesPrivateSD />}></Route>
        <Route
          exact
          path="/les-privat-sd/:kotaSlug"
          element={<LesPrivateSDKota />}></Route>
        <Route
          exact
          path="/les-privat-sd/:kotaSlug/:kabupatenSlug"
          element={<LesPrivateSDKabupaten />}></Route>
        <Route
          exact
          path="/les-privat-sd/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
          element={<LesPrivateSDKecamatan />}></Route>
        <Route
          exact
          path="/les-privat-sd/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
          element={<LesPrivateSDKelurahan />}></Route>

        {/* LES PRIVATE SMP */}
        <Route exact path="/les-privat-smp" element={<LesPrivateSMP />}></Route>
        <Route
          exact
          path="/les-privat-smp/:kotaSlug"
          element={<LesPrivateSMPKota />}></Route>
        <Route
          exact
          path="/les-privat-smp/:kotaSlug/:kabupatenSlug"
          element={<LesPrivateSMPKabupaten />}></Route>
        <Route
          exact
          path="/les-privat-smp/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
          element={<LesPrivateSMPKecamatan />}></Route>
        <Route
          exact
          path="/les-privat-smp/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
          element={<LesPrivateSMPKelurahan />}></Route>

        {/* LES PRIVATE SMA */}
        <Route exact path="/les-privat-sma" element={<LesPrivateSMA />}></Route>
        <Route
          exact
          path="/les-privat-sma/:kotaSlug"
          element={<LesPrivateSMAKota />}></Route>
        <Route
          exact
          path="/les-privat-sma/:kotaSlug/:kabupatenSlug"
          element={<LesPrivateSMAKabupaten />}></Route>
        <Route
          exact
          path="/les-privat-sma/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
          element={<LesPrivateSMAKecamatan />}></Route>
        <Route
          exact
          path="/les-privat-sma/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
          element={<LesPrivateSMAKelurahan />}></Route>

        {/* LES PRIVIATE AKM */}
        <Route
          exact
          path="/les-privat-akm-asesmen-kompetensi-minimum"
          element={<LesPrivateKSM />}></Route>
        <Route
          exact
          path="/les-privat-akm-asesmen-kompetensi-minimum/:kotaSlug"
          element={<LesPrivateKSMKota />}></Route>
        <Route
          exact
          path="/les-privat-akm-asesmen-kompetensi-minimum/:kotaSlug/:kabupatenSlug"
          element={<LesPrivateKSMKabupaten />}></Route>
        <Route
          exact
          path="/les-privat-akm-asesmen-kompetensi-minimum/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
          element={<LesPrivateKSMKecamatan />}></Route>
        <Route
          exact
          path="/les-privat-akm-asesmen-kompetensi-minimum/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
          element={<LesPrivateKSMKelurahan />}></Route>

        {/* LES PRIVATE MAHASISWA */}
        <Route
          exact
          path="/les-privat-mahasiswa"
          element={<LesPrivateMahasiswa />}></Route>
        <Route
          exact
          path="/les-privat-mahasiswa/:kotaSlug"
          element={<LesPrivateMahasiswaKota />}></Route>
        <Route
          exact
          path="/les-privat-mahasiswa/:kotaSlug/:kabupatenSlug"
          element={<LesPrivateMahasiswaKabupaten />}></Route>
        <Route
          exact
          path="/les-privat-mahasiswa/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
          element={<LesPrivateMahasiswaKecamatan />}></Route>
        <Route
          exact
          path="/les-privat-mahasiswa/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
          element={<LesPrivateMahasiswaKelurahan />}></Route>

        {/* LES PRIVATE BAHASA */}
        <Route
          exact
          path="/les-privat-bahasa-asing"
          element={<LesPrivateBahasa />}></Route>
        <Route
          exact
          path="/les-privat-bahasa-asing/:kotaSlug"
          element={<LesPrivateBahasaKota />}></Route>
        <Route
          exact
          path="/les-privat-bahasa-asing/:kotaSlug/:kabupatenSlug"
          element={<LesPrivateBahasaKabupaten />}></Route>
        <Route
          exact
          path="/les-privat-bahasa-asing/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
          element={<LesPrivateBahasaKecamatan />}></Route>
        <Route
          exact
          path="/les-privat-bahasa-asing/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
          element={<LesPrivateBahasaKelurahan />}></Route>

        {/* LES PRIVATE SIMAK UI */}
        <Route
          exact
          path="/les-privat-simak-ui"
          element={<LesPrivateSimakUI />}></Route>
        <Route
          exact
          path="/les-privat-simak-ui/:kotaSlug"
          element={<LesPrivateSimakUIKota />}></Route>
        <Route
          exact
          path="/les-privat-simak-ui/:kotaSlug/:kabupatenSlug"
          element={<LesPrivateSimakUIKabupaten />}></Route>
        <Route
          exact
          path="/les-privat-simak-ui/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
          element={<LesPrivateSimakUIKecamatan />}></Route>
        <Route
          exact
          path="/les-privat-simak-ui/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
          element={<LesPrivateSMAKelurahan />}></Route>

        {/* LES PRIVATE SBMPTN */}
        <Route
          exact
          path="/les-privat-sbmptn"
          element={<LesPrivateSBMPTN />}></Route>
        <Route
          exact
          path="/les-privat-sbmptn/:kotaSlug"
          element={<LesPrivateSBMPTNKkota />}></Route>
        <Route
          exact
          path="/les-privat-sbmptn/:kotaSlug/:kabupatenSlug"
          element={<LesPrivateSBMPTNKabupaten />}></Route>
        <Route
          exact
          path="/les-privat-sbmptn/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
          element={<LesPrivateSBMPTNKecamatan />}></Route>
        <Route
          exact
          path="/les-privat-sbmptn/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
          element={<LesPrivateSBMPTNKelurahan />}></Route>
        <Route exact path="/tutor" element={<Tutor />}></Route>
      </Routes>
      {/* <MediaMassaMarquee /> */}
      <Floatingcta />
      <ScrollToTopButton />
      <MatrixFooter />
    </>
  );
}

export default App;
