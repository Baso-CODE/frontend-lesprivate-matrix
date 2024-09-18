/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  faAnglesRight,
  faChevronDown,
  faSchool,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/tentang-kami");
  };
  const goToTutor = () => {
    navigate("/tutor");
  };

  const goToHome = () => {
    navigate("/");
  };

  const goToLesPrivateTk = () => {
    navigate("/les-privat-tk");
  };

  const goToLesPrivateSD = () => {
    navigate("/les-privat-sd");
  };

  const goToLesPrivateSMP = () => {
    navigate("/les-privat-smp");
  };

  const goToBimbelPrivateSMA = () => {
    navigate("/les-privat-sma");
  };
  const goToBimbelPrivateKSM = () => {
    navigate("/les-privat-akm-asesmen-kompetensi-minimum");
  };
  const goToBimbelPrivateMahasiswa = () => {
    navigate("/les-privat-mahasiswa");
  };
  const goToBimbelPrivateBahasaAsing = () => {
    navigate("/les-privat-bahasa-asing");
  };
  const goToBimbelPrivateSimakUI = () => {
    navigate("/les-privat-simak-ui");
  };
  const goToBimbelPrivateSBMPTN = () => {
    navigate("/les-privat-sbmptn");
  };

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>

          <img
            onClick={() => goToHome()}
            alt="Logo Edumatrix Indonesia"
            className="logo-edumatrix"
            src="/images/logo.png"
          />

          <ul className="menu-items">
            <li>
              <a onClick={() => goToHome()} className="menu-nav">
                <FontAwesomeIcon className="icon-navbar" icon={faSignIn} /> Home
              </a>
            </li>
            <li class="services">
              <a className="menu-nav">
                Program
                <FontAwesomeIcon
                  className="icon-navbar-1"
                  icon={faChevronDown}
                />
              </a>
              <ul className="dropdown">
                <div className="fill-dropdown">
                  <li onClick={() => goToLesPrivateTk()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Les Privat Tk
                    </a>
                  </li>
                  <li onClick={() => goToLesPrivateSD()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Les Privat SD
                    </a>
                  </li>

                  <li onClick={() => goToLesPrivateSMP()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Les Privat SMP
                    </a>
                  </li>
                  <li onClick={() => goToBimbelPrivateSMA()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Les Privat SMA
                    </a>
                  </li>
                  <li onClick={() => goToBimbelPrivateKSM()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Les Privat AKM
                    </a>
                  </li>
                  <li onClick={() => goToBimbelPrivateMahasiswa()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Les Privat Mahasiswa
                    </a>
                  </li>
                  <li onClick={() => goToBimbelPrivateBahasaAsing()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Les Privat Bahasa Asing
                    </a>
                  </li>
                  <li onClick={() => goToBimbelPrivateSimakUI()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Les Privat Simak UI
                    </a>
                  </li>
                  <li onClick={() => goToBimbelPrivateSBMPTN()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Les Privat SBMPTN
                    </a>
                  </li>
                </div>
              </ul>
            </li>

            <li>
              <a onClick={() => goToAbout()} className="menu-nav">
                <FontAwesomeIcon className="icon-navbar" icon={faSchool} />{" "}
                About Us
              </a>
            </li>

            <li>
              <a onClick={() => goToTutor()} className="menu-nav">
                <FontAwesomeIcon className="icon-navbar" icon={faSchool} />{" "}
                Tutor
              </a>
            </li>
            <li>
              <a
                className="menu-nav-daftar"
                href="https://api.whatsapp.com/send?phone=6285747281466&text=Halo%20Kak%20Linda%20https://apps.bimbelmatrix.com,%20Saya%20ingin%20tanya%20program%20belajar%20yang%20ada%20di%20Matrix.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket%20sesinya?">
                <FontAwesomeIcon className="icon-navbar" icon={faSignIn} />{" "}
                DAFTAR
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
