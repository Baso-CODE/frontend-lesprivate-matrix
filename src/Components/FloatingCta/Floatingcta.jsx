import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Floatingcta.css";

const Floatingcta = () => {
  return (
    <div className="box-float-main">
      <div className="main-parent-wa">
        <label className="label-cta" htmlFor="">
          Chat With Us
        </label>
        <a
          className="parent-btn-wa"
          href="https://api.whatsapp.com/send?phone=6285747281466&text=Halo%20Kak%20Linda%20https://apps.bimbelmatrix.com/,%20Saya%20ingin%20tanya%20program%20belajar%20yang%20ada%20di%20Edumatrix.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket%20sesinya?">
          <button className="btn-float-wa">
            <span className="parent-icon-wa">
              <FontAwesomeIcon className="icon-wa" icon={faWhatsapp} />
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Floatingcta;
