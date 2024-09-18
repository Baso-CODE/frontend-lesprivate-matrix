import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MasterCarousel.css";

const images = [
  { id: 1, src: "/images/guru/1.png", alt: "Image 1" },
  { id: 2, src: "/images/guru/2.png", alt: "Image 2" },
  { id: 3, src: "/images/guru/3.png", alt: "Image 3" },
  { id: 4, src: "/images/guru/4.png", alt: "Image 4" },
  { id: 5, src: "/images/guru/5.png", alt: "Image 5" },
  { id: 6, src: "/images/guru/6.png", alt: "Image 6" },
  { id: 7, src: "/images/guru/7.png", alt: "Image 7" },
  { id: 8, src: "/images/guru/8.png", alt: "Image 8" },
  { id: 9, src: "/images/guru/9.png", alt: "Image 9" },
  { id: 10, src: "/images/guru/10.png", alt: "Image 10" },
  { id: 11, src: "/images/guru/11.png", alt: "Image 11" },
  { id: 12, src: "/images/guru/12.png", alt: "Image 12" },
  { id: 13, src: "/images/guru/13.png", alt: "Image 13" },
  { id: 14, src: "/images/guru/14.png", alt: "Image 14" },
  { id: 15, src: "/images/guru/15.png", alt: "Image 15" },
  { id: 16, src: "/images/guru/16.png", alt: "Image 16" },
  { id: 17, src: "/images/guru/17.png", alt: "Image 17" },
  { id: 18, src: "/images/guru/18.png", alt: "Image 18" },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MasterCarousel = () => {
  return (
    <div className="carousel-container-master">
      <h2 className="carousel-title">Master Teacher Matrix</h2>

      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        showDots={true}
        customDot={<CustomDot />}
        arrows={false}>
        {images.map((image) => (
          <div className="panel-master-teacher" key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              className="carousel-image-master-teacher"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

// Custom Dot component
const CustomDot = ({ onClick, active }) => (
  <div>
    {" "}
    {/* Add padding here */}
    <button
      onClick={onClick}
      style={{
        background: active ? "#00139b" : "#D1D5DB",
        borderRadius: "50%",
        width: "10px",
        height: "10px",
        border: "none",
        margin: "0 2px",
        cursor: "pointer",
      }}
    />
  </div>
);

export default MasterCarousel;
