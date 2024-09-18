import React, { useEffect, useState } from "react";
import modelTanyaProgram from "../../../assets/ask_program.png";
import hotProgram from "../../../assets/8 maret 2024.png";

const BestProgramToefl = () => {
  const [program, setProgram] = useState([]);

  useEffect(() => {
    fetchProgram();
  }, []);

  const fetchProgram = () => {
    fetch("https://api.edulink-indonesia.com/bestprogramsnbt")
      .then((res) => res.json())
      .then((data) => {
        setProgram(data);
        data;
      });
  };
  return (
    <React.Fragment>
      <div className="main-box">
        <div className="main-best-program">
          <h1 className="title-best-program">OUR PROGRAMS <br /> TOEFL-TOEIC-IELTS</h1>
          <h3 className="hot-program">
            <img
              className="icon-hot-program"
              src={hotProgram}
              alt="Bimbel UTBK SNBT Terbaik - Edumatrix Indonesia"
            />{" "}
            HOTS PROGRAM
          </h3>
          <div className="parent-best-program">
            <div className="box-best-program">
              {program.map((item, index) => (
                <div className="card-best-program" key={index}>
                  <a href="https://api.whatsapp.com/send?phone=6285600422188&text=Hello%20Miss%20Sari%20https://app.edumatrix-indonesia.com,%20I%20would%20like%20to%20ask%20about%20the%20TOEFL,%20TOEIC%20IELTS,%20English%20Conversation%20program%20at%20Edumatrix.%20What%20are%20the%20course%20types%20and%20session%20package%20options?">
                    <img
                      className="best-program-img"
                      src={
                        "https://api.edulink-indonesia.com/images/" + item.image
                      }
                      alt="Bimbel UTBK SNBT Terbaik - Edumatrix Indonesia"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <a
          className="parent-img-modeltanya-program"
          href="https://api.whatsapp.com/send?phone=6285600422188&text=Hello%20Miss%20Sari%20https://app.edumatrix-indonesia.com,%20I%20would%20like%20to%20ask%20about%20the%20TOEFL,%20TOEIC%20IELTS,%20English%20Conversation%20program%20at%20Edumatrix.%20What%20are%20the%20course%20types%20and%20session%20package%20options?"
        >
          <img
            className="model-tanya-program"
            src={modelTanyaProgram}
            alt="Bimbel Masuk PTN Terbaik"
          />
        </a>
      </div>
    </React.Fragment>
  );
};

export default BestProgramToefl;
