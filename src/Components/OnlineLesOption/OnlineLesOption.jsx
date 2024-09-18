import React from "react";
import "./OnlineLesOption.css";

const OnlineLesOptions = () => {
  return (
    <div className="online-les-options">
      <div className="title-description">
        <h2>Saat Ini, Matrix Juga Melayani Les Privat Online</h2>
        <p>
          Les Privat Online - Belajar dimana saja, kapan saja dengan kualitas
          dan layanan yang sama
        </p>
      </div>
      <div className="options">
        <div className="online-les-option">
          <img src="/images/learnhing-methode/zoom.png" alt="Zoom" />
        </div>
        <div className="online-les-option">
          <img
            src="/images/learnhing-methode/google-meet.png"
            alt="Google Meet"
          />
        </div>
        <div className="online-les-option">
          <img src="/images/learnhing-methode/whatsapp.png" alt="WhatsApp" />
        </div>
      </div>
    </div>
  );
};

export default OnlineLesOptions;
