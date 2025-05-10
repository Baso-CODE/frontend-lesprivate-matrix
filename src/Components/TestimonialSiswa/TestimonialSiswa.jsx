import React from "react";
import "./TestimonialSiswa.css";
const TestimonialSiswa = () => {
  const testimonialImages = [
    "/images/testimoni-siswa/1.jpeg",
    "/images/testimoni-siswa/2.jpeg",
    "/images/testimoni-siswa/3.jpeg",
    "/images/testimoni-siswa/4.jpeg",
    "/images/testimoni-siswa/5.jpeg",
    "/images/testimoni-siswa/6.jpeg",
  ];

  return (
    <div className="testimonials-siswa-container">
      <h2>Testimoni Siswa</h2>
      <div className="testimonials-siswa-grid">
        {testimonialImages.map((image, index) => (
          <div className="testimonial-siswa-item" key={index}>
            <img
              loading="lazy"
              src={image}
              alt={`Testimonial ${index + 1}`}
              className="testimonial-siswa-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TestimonialSiswa;
