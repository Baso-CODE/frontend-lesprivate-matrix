import React, { useEffect, useState } from "react";
import "./HeroHome.css";
import { getAllRandomSlogans } from "../../helper/request/getAllSloganSRequest";

const HeroHome = () => {
  const [slogan, setSlogan] = useState("Terbaik #1 di Indonesia");
  const phone = "6285747281466"; // Nomor telepon
  const baseUrl = `https://api.whatsapp.com/send?phone=${phone}&text=`;

  const message = `
  Hi Ms. Linda https://apps.bimbelmatrix.com/, Saya tertarik *Promo Seru, Diskon Rp100,000*, bisa dijelaskan informasi selengkapnya?
  `.trim();

  const finalUrl = `${baseUrl}${encodeURIComponent(message)}`;

  useEffect(() => {
    const fetchSlogan = async () => {
      try {
        const result = await getAllRandomSlogans();
        if (result.data && result.data.content) {
          setSlogan(result.data.content); // Set slogan baru dari API
        }
      } catch (error) {
        console.error("Error fetching slogan:", error);
      }
    };

    fetchSlogan();
  }, []);
  return (
    <div className="container-halaman-hero-home">
      <div className="content-hero-home">
        <div className="isi-content-hero-home">
          <h1 className="title-halaman-hero-home">
            <span className="highlight-yellow">{slogan}</span>
          </h1>
          <div>
            <p className="child-paragraf-hero-home">
              Bimbel Les Privat untuk TK, SD, SMP, SMA, UN/AKM, OSN, CPNS, LPDP,
              PPDS, SIMAK UI, UTBK SNBT, CBT UGM, TOEFL, UMPTN. Dapatkan layanan
              Les Privat kapan pun dan dimana pun dengan lebih dari 5.000 Master
              Teacher Matrix yang siap memberikan pelayanan terbaik.
            </p>
          </div>
          {/* Added a second button */}
          <button
            className="btn-daftar-sekarang"
            onClick={() => window.open(finalUrl, "_blank")}>
            Daftar Sekarang
          </button>
          {/* <button className="btn-learn-more">Pelajari Lebih Lanjut</button> */}
        </div>
        <img
          className="rumah-adat-hero-home"
          loading="eager"
          src={"/images/heroo.webp"}
          alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
          width="1880"
          height="1075"
        />
      </div>
    </div>
  );
};

export default HeroHome;
