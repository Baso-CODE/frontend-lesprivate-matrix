import React from "react";
import "./AsalSekolahSiswa.css";
import { schools } from "./dataAsalSekolah";

const AsalSekolahSiswaEdumatrix = () => {
  return (
    <div className="container-asal-sekolah-siswa-edumatrix">
      <div className="content-wrapper">
        <div className="title-section">
          <h2 className="title-asal-sekolah">Asal Sekolah Siswa Edumatrix</h2>
          <div className="scrollable-content">
            <ul className="grid-container-asal-sekolah-siswa-edumatrix">
              {schools.map((school, index) => (
                <li key={index} className="grid-item">
                  {school}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsalSekolahSiswaEdumatrix;
