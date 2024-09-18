import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./App.css";
import AboutUsLesPrivate from "./Components/AboutUsLesPrivate/AboutUsLesPrivate";
import Halamankabupaten from "./Components/HalamanKabupaten/Halamankabupaten";
import Halamankelurahan from "./Components/HalamanKabupaten/HalamanKelurahan/Halamankelurahan";
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

import MatrixFooter from "./Components/MatrixFooter/MatrixFooter";
import MediaMassaMarquee from "./Components/MediaMassaMarquee/MediaMassaMarquee";
import Navbar from "./Components/Navbar/Navbar";
import Tutor from "./Components/Tutor/Tutor";

// const TRACKING_ID = "G-NZRFMBB12N";
// ReactGA.initialize(TRACKING_ID);

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <BrowserRouter>
      <LoadingBar
        color="white"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Homepage setProgress={setProgress} />}></Route>
        {/* Go to City By ID */}
        <Route
          exact
          path="/les-privat-di-kota/:slug"
          element={<Halamankota setProgress={setProgress} />}></Route>
        {/* Go to Kabupaten By ID */}
        <Route
          exact
          path="/les-privat-di/:slug"
          element={<Halamankabupaten setProgress={setProgress} />}></Route>
        {/* Go to Kecamatan By ID */}
        <Route
          exact
          path="/les-privat-di/kecamatan/:slug"
          element={<Halamankecamatan setProgress={setProgress} />}></Route>
        {/* Go to Kelurahan By ID */}
        <Route
          exact
          path="/les-privat-di/kelurahan/:slug"
          element={<Halamankelurahan setProgress={setProgress} />}></Route>

        <Route exact path="*" element={<Homepage />}></Route>
        {/* Go to Search Kelas */}

        <Route
          exact
          path="/tentang-kami"
          element={<AboutUsLesPrivate setProgress={setProgress} />}></Route>

        {/* Lest Private */}
        <Route
          exact
          path="/les-privat-tk"
          element={<LesPrivateTK setProgress={setProgress} />}></Route>

        <Route
          exact
          path="/les-privat-sd"
          element={<LesPrivateSD setProgress={setProgress} />}></Route>
        <Route
          exact
          path="/les-privat-smp"
          element={<LesPrivateSMP setProgress={setProgress} />}></Route>
        <Route
          exact
          path="/les-privat-sma"
          element={<LesPrivateSMA setProgress={setProgress} />}></Route>
        <Route
          exact
          path="/les-privat-akm-asesmen-kompetensi-minimum"
          element={<LesPrivateKSM setProgress={setProgress} />}></Route>
        <Route
          exact
          path="/les-privat-mahasiswa"
          element={<LesPrivateMahasiswa setProgress={setProgress} />}></Route>
        <Route
          exact
          path="/les-privat-bahasa-asing"
          element={<LesPrivateBahasa setProgress={setProgress} />}></Route>
        <Route
          exact
          path="/les-privat-simak-ui"
          element={<LesPrivateSimakUI setProgress={setProgress} />}></Route>
        <Route
          exact
          path="/les-privat-sbmptn"
          element={<LesPrivateSBMPTN setProgress={setProgress} />}></Route>
        <Route
          exact
          path="/tutor"
          element={<Tutor setProgress={setProgress} />}></Route>
      </Routes>
      <MediaMassaMarquee />
      <MatrixFooter />
    </BrowserRouter>
  );
}

export default App;
