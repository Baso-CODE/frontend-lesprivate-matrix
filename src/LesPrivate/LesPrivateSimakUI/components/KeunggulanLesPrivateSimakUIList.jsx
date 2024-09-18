// KeunggulanLesPrivateSimakUIList.js
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./KeunggulanLesPrivateSimakUIList.css";

const KeunggulanLesPrivateSimakUIList = () => {
  const subjects = [
    "Menggunakan SISTEM BELAJAR MATRIX Terpola dan terstruktur disesuaikan dengan kurikulum sekolah dan kebutuhan belajar siswa.",
    "Jadwal yang FLEKSIBEL disesuaikan dengan kebutuhan Anda. Rekomendasi prioritas mapel les privat dan rekomendasi pertemuan agar efektif dalam belajar.",
    "Pemahaman KONSEP, PENDALAMAN materi dan peningkatan KETERAMPILAN PENYELESAIAN SOAL",
    "Sistem EVALUASI secara BERKALA",
    "Tutor Mahasiswa dan Alumni UI dan PTN lain yang berpengalaman & ahli di bidangnya.",
    "Matrix selalu berorientasi pada TARGET dan PENINGKATAN PRESTASI SISWA",
    "Kemudahan Pembayaran via transfer",
  ];

  return (
    <div className="keunggulan-les-private-UI-list-container">
      <h2>Keunnggulan Les Privat Matrix</h2>
      <ul className="keunggulan-subject-list-les-private-UI">
        {subjects.map((subject, index) => (
          <li
            key={index}
            className="keunggulan-subject-list-les-private-UI-item">
            <FaCheckCircle className="keunggulan-subject-list-les-private-UI-icon" />
            <span className="subject-text">{subject}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeunggulanLesPrivateSimakUIList;
