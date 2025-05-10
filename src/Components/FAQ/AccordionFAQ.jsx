// src/components/Accordion.js
import { useEffect, useRef, useState } from "react";

import { getAllFAQ } from "../../helper/request/getAllfaq";
import "./AccordionFAQ.css";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="accordion-container-faq">
      <button
        className={`accordion-button-faq ${isOpen ? "rotate" : ""}`}
        onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
      <div
        ref={contentRef}
        className="accordion-content"
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
        }}>
        <div className="accordion-content-inner">{content}</div>
      </div>
    </div>
  );
};

const AccordionFAQ = () => {
  const [dataFaq, setDataFaq] = useState([]);

  // Mengambil data FAQ dari API
  useEffect(() => {
    const fetchDataFaq = async () => {
      try {
        const faqData = await getAllFAQ(); // Panggil API
        setDataFaq(faqData.data); // Simpan data FAQ ke state
      } catch (err) {
        console.error("Error fetching FAQ:", err); // Log error jika terjadi
      }
    };

    fetchDataFaq();
  }, []);

  return (
    <>
      <div className="main-container-faq">
        <div className="main-wrapper-faq">
          <div className="accordion-title-faq">Frequently Asked Question</div>
          <div className="accordion-wrapper-faq">
            {dataFaq.map((item, index) => (
              <Accordion
                key={index}
                title={item.pertanyaan}
                content={item.jawaban}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionFAQ;
