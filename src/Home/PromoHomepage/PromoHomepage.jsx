import React, { useEffect, useState } from "react";
import "./PromoHomepage.css";

import { getAllPromo } from "../../helper/request/getAllPromo";

const PromoHomepage = () => {
  const [dataPromo, setDataPromo] = useState([]);

  // Mengambil data FAQ dari API
  useEffect(() => {
    const fetchDataFaq = async () => {
      try {
        const promoData = await getAllPromo();
        setDataPromo(promoData.data);
      } catch (err) {
        console.error("Error fetching FAQ:", err);
      }
    };

    fetchDataFaq();
  }, []);

  return (
    <React.Fragment>
      {/* DESKTOP */}
      <div className="parent-promo-home">
        {dataPromo.length > 0 &&
          dataPromo.map((promo, index) => (
            <img
              loading="lazy"
              key={index}
              className="child-promo-home"
              src={promo.url}
              alt={`Promo les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) ${
                index + 1
              } - Matrix Tutoring`}
            />
          ))}
      </div>

      {/* MOBILE */}
      <div className="parent-promo-home-mobile">
        {dataPromo.length > 0 &&
          dataPromo.map((promo, index) => (
            <img
              loading="lazy"
              key={index}
              className="child-promo-home"
              src={promo.url}
              alt={`Promo les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) ${
                index + 1
              } - Matrix Tutoring`}
            />
          ))}
      </div>
    </React.Fragment>
  );
};

export default PromoHomepage;
