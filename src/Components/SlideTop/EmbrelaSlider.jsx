/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getAllSliderHeader2 } from "../../helper/request/getAllSliderHeader2Request";
import { getAllSliderHeader } from "../../helper/request/getAllSliderHeaderRequest";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "lazysizes";
import "./Slidertop.css";
import "./EmbrelaSlider.css";

const EmbrelaSlider = () => {
  const [sliderHeader, setSliderHeader] = useState([]);
  const [sliderHeader2, setSliderHeader2] = useState([]);

  // Embla hook with Autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1800, stopOnInteraction: true }),
  ]);
  const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1800, stopOnInteraction: true }),
  ]);

  useEffect(() => {
    fetchSliderHeader();
    fetchSliderHeader_2();
  }, []);

  const fetchSliderHeader = async () => {
    try {
      const response = await getAllSliderHeader();
      setSliderHeader(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSliderHeader_2 = async () => {
    try {
      const response = await getAllSliderHeader2();
      setSliderHeader2(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const lazyLoadImage = (src) => (
    <img
      loading="lazy"
      data-src={src}
      alt="Program Bimbel - les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
      className="lazyload"
      width="1298"
      height="319"
    />
  );

  const phone = "6285747281466"; // Nomor telepon
  const baseUrl = `https://api.whatsapp.com/send?phone=${phone}&text=Halo%20Kak%20Linda%20https://apps.bimbelmatrix.com/,%20saya%20ingin%20tanya%20program%20belajar%20untuk%0A`;

  const message = `
Kelas: [Isi Kelas]
Mapel: [Isi Mapel]
Kurikulum: [Isi Kurikulum]
Wilayah: [Isi Wilayah]
`.trim(); // Placeholder untuk pesan yang diinginkan

  const finalUrl = `${baseUrl}${encodeURIComponent(message)}`;

  return (
    <React.Fragment>
      {/* Slider for desktop */}
      <div className="slider-top desktop-only">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {sliderHeader.map((item, index) => (
              <div className="embla__slide top-slider" key={index}>
                <div className="slider">
                  <a href={finalUrl} target="_blank" rel="noopener noreferrer">
                    {lazyLoadImage(item.url)}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider for mobile */}
      <div className="slider-top-2 mobile-only">
        <div className="embla" ref={emblaRef2}>
          <div className="embla__container">
            {sliderHeader2.map((item, index) => (
              <div className="embla__slide top-slider" key={index}>
                <div className="slider">
                  <a href={finalUrl} target="_blank" rel="noopener noreferrer">
                    {lazyLoadImage(item.url)}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EmbrelaSlider;
