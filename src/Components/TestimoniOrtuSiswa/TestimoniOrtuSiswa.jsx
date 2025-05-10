import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./TestimoniOrtuSiswa.css";

const TestimoniOrtuSiswa = () => {
  const testimonialImages = [
    "/images/testimoni-ortu/1.webp",
    "/images/testimoni-ortu/2.webp",
    "/images/testimoni-ortu/3.webp",
    "/images/testimoni-ortu/4.webp",
    "/images/testimoni-ortu/5.webp",
    "/images/testimoni-ortu/6.webp",
    "/images/testimoni-ortu/7.webp",
    "/images/testimoni-ortu/8.webp",
    "/images/testimoni-ortu/9.webp",
    "/images/testimoni-ortu/10.webp",
    "/images/testimoni-ortu/11.webp",
    "/images/testimoni-ortu/12.webp",
  ];

  // Embla carousel instance
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true, // Infinite looping
      align: "start", // Align slides to start
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 2, slidesToShow: 2 }, // Tablet
        "(min-width: 1024px)": { slidesToScroll: 3, slidesToShow: 3 }, // Desktop
      },
      slidesToScroll: 1, // Default: Mobile view
      slidesToShow: 1, // Default: Mobile view
    },
    [Autoplay({ delay: 2800, stopOnInteraction: false })] // Autoplay plugin
  );

  return (
    <div className="testimonial-slider-container">
      <h2>Testimoni Orang Tua</h2>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {testimonialImages.map((image, index) => (
            <div className="embla__slide-tesimoni-ortu" key={index}>
              <img
                loading="lazy"
                src={image}
                alt={`Testimoni ${index + 1}`}
                className="testimonial-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimoniOrtuSiswa;
