import React from "react";
import "./MatrixFooter.css";

const MatrixFooter = () => {
  return (
    <div className="footer-container-matrix">
      <div className="footer-content-matrix">
        <div className="grid-container-footer-matrix">
          <div className="office-info-footer">
            <img
              src="/images/logo.png"
              alt=""
              className="footer-matrix-image"
            />
            <h2 className="section-title-footer-matrix">Office:</h2>
            <p className="address-footer-matrix">
              Pesona Khayangan Blok CP No. 4, Depok, Jawa Barat (Lingkungan
              Pendidikan UI)
            </p>
            <h3 className="section-subtitle-footer-matrix">Telepon Kantor:</h3>
            <ul className="phone-list-footer-matrix">
              <li>021-2761-2993</li>
            </ul>
            <ul className="office-hours-footer-matrix">
              <li>08.30 - 17.00 WIB Senin s.d Jumat</li>
              <li>08.30 - 13.00 WIB Sabtu</li>
            </ul>
            <h3>Layanan 24 Jam:</h3>
            <ul className="phone-list-footer-matrix">
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=6285817279118&text=Halo%20Kak%20Desi,%20Saya%20ingin%20tanya%20program%20belajar%20yang%20ada%20di%20Matrix%20Tutoring."
                  target="_blank"
                  rel="noopener noreferrer">
                  085817279118 (Ms. Desi)
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=6287783999349&text=Halo%20Kak%20Reva,%20Saya%20ingin%20tanya%20program%20belajar%20yang%20ada%20di%20Matrix%20Tutoring."
                  target="_blank"
                  rel="noopener noreferrer">
                  087783999349 (Ms. Reva)
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=6285747281466&text=Halo%20Kak%20Linda,%20Saya%20ingin%20tanya%20program%20belajar%20yang%20ada%20di%20Matrix%20Tutoring."
                  target="_blank"
                  rel="noopener noreferrer">
                  085747281466 (Ms. Linda)
                </a>
              </li>
            </ul>
            <ul className="office-hours-footer-matrix">
              <li>Privat Masuk PTN</li>
              <li>Privat Mahasiswa</li>
              <li>Privat Bahasa</li>
            </ul>
          </div>

          <div className="member-of-footer-matrix">
            <h2 className="section-title-footer-matrix">Member of:</h2>
            <img
              src="/images/learnhing-methode/hilpi.jpg"
              alt="Hilmi"
              className="member-logo-footer-matrix"
            />
            <h2 className="section-title-footer-matrix">
              Our Student`s School:
            </h2>
            <img
              src="/images/learnhing-methode/asal_sekolah_siswa.webp"
              alt="Hilmi"
              className="member-logo-footer-matrix"
            />
          </div>

          <div className="students-info-footer-matrix">
            <h2 className="section-title-footer-matrix">
              Our Students are From:
            </h2>
            <img
              src="/images/learnhing-methode/negara.png"
              alt="Country Flag"
              className="students-flag-footer-matrix"
            />
          </div>
        </div>

        <p className="footer-copyright-matrix">
          Copyright 2024 - MATRIX - ONLINE & OFFLINE - Les Privat Online
          Indonesia dan Les Privat Profesional Datang ke Rumah di Jabodetabek
        </p>
        <p className="footer-location-matrix">
          Pusat Les Privat Nasional & Internasional Jabodetabek (Jakarta, Bogor,
          Depok, Tangerang, Tangsel, Bekasi)
        </p>
      </div>
    </div>
  );
};

export default MatrixFooter;
