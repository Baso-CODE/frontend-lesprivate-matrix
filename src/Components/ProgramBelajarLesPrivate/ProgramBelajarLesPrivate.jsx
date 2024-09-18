import React from "react";
import "./ProgramBelajarLesPrivate.css";

const programs = [
  { image: "/images/program-belajar/TK.png" },
  { image: "/images/program-belajar/SD.png" },
  { image: "/images/program-belajar/SMP.png" },
  { image: "/images/program-belajar/SMA.png" },
  { image: "/images/program-belajar/AK.png" },
  { image: "/images/program-belajar/SNBT.png" },
  { image: "/images/program-belajar/SIMAK-UI.png" },
  { image: "/images/program-belajar/MAHASISWA.png" },
  { image: "/images/program-belajar/BAHASA.png" },
  { image: "/images/program-belajar/MENGAJI.png" },
  { image: "/images/program-belajar/KOMPUTER.png" },
  { image: "/images/program-belajar/TOEFL.png" },
];

const ProgramBelajarLesPrivat = () => {
  return (
    <div class="programBelajar-section">
      <h2 class="programBelajar-title">
        Les Privat Online (Indonesia) & Les Privat Offline (Jabodetabek)
      </h2>
      <p class="programBelajar-description">
        Program Les Privat terdiri dari <strong>Les Privat Online</strong> dan{" "}
        <strong>Les Privat Offline</strong>. Untuk siswa dari berbagai kota di
        seluruh Indonesia yang memiliki akses jaringan internet yang baik, bisa
        memilih les privat online. Bagi siswa yang berdomisili di Jabodetabek
        dapat memilih les privat offline atau guru ke rumah. Berikut adalah
        Program Online dan Offline dari Matrix:
      </p>
      <div className="programBelajar-les-privat">
        {programs.map((program, index) => (
          <div className="programBelajar-card" key={index}>
            <img src={program.image} alt={`Les Privat`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramBelajarLesPrivat;
