import React from "react";
import "./Floatingcta.css";

const Floatingcta = () => {
  const phone = "6285747281466"; // Nomor telepon
  const baseUrl = `https://api.whatsapp.com/send?phone=${phone}&text=`;

  const message = `
  Hi Ms. Linda https://apps.bimbelmatrix.com/, Saya tertarik *Promo Seru, Diskon Rp100,000*, bisa dijelaskan informasi selengkapnya?
  `.trim();

  const finalUrl = `${baseUrl}${encodeURIComponent(message)}`;
  return (
    <div className="box-float-main">
      <div className="main-parent-wa">
        <label className="label-cta" htmlFor="">
          Chat With Us
        </label>
        <a
          className="parent-btn-wa"
          href={finalUrl}
          target="_blank"
          rel="noopener noreferrer">
          <button className="btn-float-wa">
            <span className="parent-icon-wa">
              <img
                src="/images/icon-wa.svg"
                alt=""
                className="icon-wa"
                loading="lazy"
              />
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Floatingcta;
