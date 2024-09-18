import React from "react";
import "./LogoDescription.css";

const LogoDescriptionComponent = () => {
  return (
    <div className="logo-description-container">
      <img
        src={"/images/logo.png"}
        alt="Matrix Tutoring Logo"
        className="logo-image"
      />
      <div className="description-text">
        <p>
          <strong>Matrix Tutoring</strong> adalah lembaga penyedia layanan jasa
          les privat untuk TK, SD, SMP, SMA, UN/AKM, OSN, Simak UI, SNBT, Akpol,
          Mahasiswa dan Karyawan.
        </p>
        <p>
          Menyediakan Program <strong>Les Privat Offline</strong> (guru les
          datang ke rumah) dan <strong>Les Privat Online</strong> dengan
          spesialisasi pengajaran berdasarkan keahlian tutor. Konsep
          pembelajaran sesuai dengan kurikulum yang diterapkan sekolah siswa.
        </p>
      </div>
    </div>
  );
};

export default LogoDescriptionComponent;
