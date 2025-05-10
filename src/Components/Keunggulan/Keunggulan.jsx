import React, { useEffect, useState } from "react";
import "./Keunggulan.css";
import keunggulanIcon from "../../assets/keunggulan.webp";

const Keunggulan = () => {
  const [keunggulan, setKeunggulan] = useState([]);

  useEffect(() => {
    fetchKeunggulan();
  }, []);

  const fetchKeunggulan = () => {
    fetch("https://api.edulink-indonesia.com/keunggulan")
      .then((res) => res.json())
      .then((data) => {
        setKeunggulan(data);
      });
  };

  return (
    <React.Fragment>
      <div className="parent-box-keunggulan">
        <h2 className="title-keunggulan">
          <img
            loading="lazy"
            className="icon-keunggulan"
            src={keunggulanIcon}
            alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
          />
          Keunggulan
        </h2>
        <div className="parent-card-keunggulan">
          {keunggulan.map((item, index) => (
            <img
              loading="lazy"
              key={index}
              className="keunggulan-img"
              src={"https://api.edulink-indonesia.com/images/" + item.image}
              alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Keunggulan;
