import React from "react";
import { FaFacebookSquare, FaInstagram, FaTiktok } from "react-icons/fa";
import "./HeroLesPrivate.css";

const HeroLesPrivate = ({ heading, desc, nameCountry, images }) => {
  const phone = "6285747281466";
  const baseUrl = `https://api.whatsapp.com/send?phone=${phone}&text=Halo%20Kak%20Linda%20https://apps.bimbelmatrix.com/,%20saya%20ingin%20tanya%20program%20belajar%20untuk:%0A`;
  const message = `
Kelas : 
Mapel : 
Kurikulum : 
Wilayah : 
`.trim();

  const finalUrl = `${baseUrl}${encodeURIComponent(message)}`;
  return (
    <div className=" container-halaman-hero-lesprivate">
      <div className="content-hero-lesprivate">
        <div className=" isi-content-hero-lesprivate">
          <h1 className="title-halaman-hero-lesprivate">
            {heading} <span className="">#1 di {nameCountry}</span>
          </h1>
          <div className="">
            <p className="child-paragraf-hero-lesprivate">{desc}</p>
            <p className="child-paragraf-hero-lesprivate-2">
              Dapatkan layanan Les Privat kapan pun dan dimana pun dengan lebih
              dari 5.000 Master Teacher Matrix yang siap memberikan pelayanan
              terbaik.
            </p>
          </div>
          <div className="btn-and-icons">
            <button
              className="btn-daftar-sekarang-lesprivate"
              onClick={() => window.open(finalUrl, "_blank")}>
              Daftar Sekarang
            </button>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/matrixtutoring.id"
                target="_blank"
                rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
              <a
                href="https://www.tiktok.com/@edumatrixindonesia"
                target="_blank"
                rel="noopener noreferrer">
                <FaTiktok className="social-icon" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100088009847192"
                target="_blank"
                rel="noopener noreferrer">
                <FaFacebookSquare className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          className="rumah-adat-hero-lesprivate"
          src={images}
          alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
          width="1880"
          height="1075"
        />
      </div>
    </div>
  );
};

export default HeroLesPrivate;
