import React, { useState } from "react";
import "./CurriculumOptions.css";

const CurriculumOptions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const curriculumData = [
    {
      title: "Cambridge International Examinations",
      content: (
        <ul>
          <li>Primary</li>
          <li>Lower Secondary</li>
          <li>IGCSE</li>
          <li>AS Level</li>
          <li>A Level</li>
        </ul>
      ),
    },
    {
      title: "International Baccalaureate (IB)",
      content: (
        <ul>
          <li>Primary Years Programme (PYP)</li>
          <li>Middle Years Programme (MYP)</li>
          <li>Diploma Programme (DP)</li>
          <li>Standard Level (SL) or Higher Level (HL)</li>
        </ul>
      ),
    },
    {
      title: "Singapore Curriculum",
      content: (
        <ul>
          <li>Primary</li>
          <li>Lower Secondary</li>
          <li>IGCSE</li>
          <li>AS Level</li>
          <li>A Level</li>
        </ul>
      ),
    },
    {
      title: "Indonesia Curriculum",
      content: (
        <ul>
          <li>Kurikulum 2013</li>
          <li>KTSP</li>
          <li>Ujian Nasional (UN)</li>
          <li>Seleksi Bersama Masuk Perguruan Tinggi (SBMPTN)</li>
          <li>Simak UI (Regular, Paralel, KKI, Vokasi) S1 dan S2</li>
          <li>UTUL UGM, IUP UGM</li>
          <li>UM Undip</li>
        </ul>
      ),
    },
    {
      title: "Customized Syllabus",
      content: (
        <div>
          Berdasarkan permintaan atau kebutuhan dari siswa dan orang tua.
        </div>
      ),
    },
  ];

  return (
    <div className="curriculum-container">
      <div className="curriculum-options">
        <h2>Kurikulum Les Privat</h2>
        <div className="curriculum-list">
          {curriculumData.map((item, index) => (
            <div key={index} className="curriculum-item">
              <div
                className="curriculum-item-header"
                onClick={() => toggleItem(index)}>
                <h3>{item.title}</h3>
                <span
                  className={`toggle-icon ${
                    openIndex === index ? "open" : ""
                  }`}>
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="curriculum-item-content">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="subject-options">
        <h2>Semua Mata Pelajaran</h2>
        <ul>
          <li>Matematika</li>
          <li>Fisika</li>
          <li>Kimia</li>
          <li>Biologi</li>
          <li>Ekonomi</li>
          <li>Akuntansi</li>
          <li>Sejarah</li>
          <li>Geografi</li>
          <li>Sosiologi</li>
          <li>Bahasa Inggris</li>
          <li>Bahasa Indonesia</li>
          <li>dan berbagai mata pelajaran yang dibutuhkan oleh Anda.</li>
        </ul>
      </div>
    </div>
  );
};

export default CurriculumOptions;
