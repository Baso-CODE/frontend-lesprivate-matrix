import React, { useEffect, useState } from "react";
import NavDescktop from "../NavDescktop/NavDescktop";
import NavMobile from "../NavMobile/NavMobile";
import { Menus } from "../../utils";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const phone = "6285747281466"; // Nomor telepon
  const baseUrl = `https://api.whatsapp.com/send?phone=${phone}&text=`;

  const message = `
  Hi Ms. Linda https://apps.bimbelmatrix.com/, Saya tertarik *Promo Seru, Diskon Rp100,000*, bisa dijelaskan informasi selengkapnya?
  `.trim();

  const finalUrl = `${baseUrl}${encodeURIComponent(message)}`;

  //

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className={`header-container ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="logo-container">
            <Link to={"/"}>
              <img
                loading="eager"
                src={"/images/logo.webp"}
                alt="Logo"
                className="logo-nav"
              />
            </Link>
          </div>

          <ul className="desktop-menu">
            {Menus.map((menu) => (
              <NavDescktop menu={menu} key={menu.name} />
            ))}
          </ul>

          <div className="auth-menu">
            <div className="button-container">
              <Link
                to={finalUrl}
                aria-label="sign-in"
                className="sign-in-button"
                target="_blank"
                rel="noopener noreferrer">
                Daftar Sekarang
              </Link>
              <p className="registration-info">*Gratis Biaya Pendaftaran*</p>
            </div>
            <div className="mobile-menu">
              <NavMobile Menus={Menus} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
