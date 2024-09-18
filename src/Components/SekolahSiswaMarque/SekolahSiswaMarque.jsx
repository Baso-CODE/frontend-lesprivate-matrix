import "./SekolahSiswaMarque.css";
import Marquee from "react-fast-marquee";

const images = [
  "/images/asal-sekolah/1.jpeg",
  "/images/asal-sekolah/2.jpeg",
  "/images/asal-sekolah/3.jpeg",
  "/images/asal-sekolah/4.jpeg",
  "/images/asal-sekolah/5.jpeg",
  "/images/asal-sekolah/6.jpeg",
  "/images/asal-sekolah/7.jpeg",
  "/images/asal-sekolah/8.jpeg",
  "/images/asal-sekolah/9.jpeg",
];

const AsalSekolahSiswaMarque = () => {
  return (
    <div className="container-asal-sekolah-siswa-marque">
      <div className="">
        <div className="">
          {/* Horizontal Marquee */}
          <Marquee
            direction="left"
            speed={85}
            gradient={false}
            className="marquee-grid">
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Logo ${index + 1}`} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default AsalSekolahSiswaMarque;
