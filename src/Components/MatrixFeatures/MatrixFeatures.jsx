import React from "react";
import {
  FaBook,
  FaChalkboardTeacher,
  FaChartLine,
  FaCheckCircle,
  FaGift,
  FaGraduationCap,
  FaHeadset,
  FaMapMarkerAlt,
  FaMoneyBillAlt,
  FaStar,
  FaUserGraduate,
} from "react-icons/fa";
import "./MatrixFeature.css";

const testimonials = [
  {
    text: "Pengajarnya sabar dan telaten. Manajemen Matrix friendly, biarpun tidak bertemu rasanya sangat attentif.",
    author: "Ibu Dewi P, Jakarta Pusat",
  },
  {
    text: "Kualitas pengajaran sangat baik dan sesuai dengan kebutuhan anak. Proses pendaftaran sangat mudah dan cepat.",
    author: "Bapak Arief S, Tangerang",
  },
  {
    text: "Guru-gurunya profesional dan sangat membantu anak dalam proses belajarnya. Sangat puas dengan layanan Matrix.",
    author: "Ibu Rina M, Depok",
  },
  {
    text: "Matrix Education membantu anak saya dalam meningkatkan prestasi akademiknya. Sangat direkomendasikan!",
    author: "Bapak Yudi A, Bekasi",
  },
];

const MatrixFeatures = () => {
  return (
    <div className="matrix-container">
      <div className="matrix-features">
        <h2>Mengapa Harus Matrix?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <div className="feature-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>
              Lokasi Matrix di Pesona Khayangan dekat dengan Universitas
              Indonesia
            </h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <FaGraduationCap />
            </div>
            <h3>
              Pengajar dari UI, UGM, ITB, IPB, STAN, STIS, UNJ, SSE, UIN dan PT
              Terbaik lainnya
            </h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <FaChalkboardTeacher />
            </div>
            <h3>Tutor adalah pengajar dengan IP tinggi dan berpengalaman</h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <FaUserGraduate />
            </div>
            <h3>Tutor Matrix bisa menjadi Positive Role Model bagi siswa</h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <FaChartLine />
            </div>
            <h3>
              Presensi Matrix untuk monitoring perkembangan prestasi siswa
            </h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <FaBook />
            </div>
            <h3>Kurikulum Personal, sesuai dengan kebutuhan siswa</h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <FaCheckCircle />
            </div>
            <h3>Evaluasi Progress Belajar secara Berkala</h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <FaMoneyBillAlt />
            </div>
            <h3>Kemudahan dalam pembayaran (via transfer)</h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <FaHeadset />
            </div>
            <h3>CS dan Tim Support yang responsif dan solutif</h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <FaStar />
            </div>
            <h3>Matrix berorientasi pada Pelayanan Terbaik</h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <FaGift />
            </div>
            <h3>GRATIS Biaya Pendaftaran + Ada PROMO setiap hari</h3>
          </div>
        </div>
      </div>
      <div className="testimonial-container">
        <h2>Testimonials</h2>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <p>{testimonial.text}</p>
            <div className="testimonial-author">
              <h4>{testimonial.author}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatrixFeatures;
