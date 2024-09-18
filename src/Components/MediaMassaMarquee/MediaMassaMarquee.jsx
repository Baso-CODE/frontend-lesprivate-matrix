import React from "react";
import Marquee from "react-fast-marquee";
import "./MediaMassaMarquee.css";

const images = [
  "/images/media/kompas.png",
  "/images/media/krjogja.png",
  "/images/media/idn.png",
  "/images/media/kumparan.png",
  "/images/media/liputan.png",
  "/images/media/jogja-aja.png",
  "/images/media/tribunjogja.png",
];

const MediaMassaMarquee = () => {
  return (
    <div className="container-media-marquee">
      <div className="title-container-media-marquee">
        <h2 className="title-container-media-marquee-h2">
          Telah Diliput oleh:
        </h2>
      </div>
      <div className="gradient-overlay" />
      {/* Title */}
      <div className="marquee-container-media-marquee">
        {/* Horizontal Marquee */}
        <Marquee
          direction="left"
          speed={50}
          gradient={false} // No gradient effect
          className="marquee-media">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Logo ${index + 1}`} />
          ))}
        </Marquee>
      </div>

      <div className="marquee-container-media-marquee">
        {/* Reverse Horizontal Marquee */}
        <Marquee
          direction="right"
          speed={50}
          gradient={false} // No gradient effect
          className="marquee-media">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Logo ${index + 1}`} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MediaMassaMarquee;
