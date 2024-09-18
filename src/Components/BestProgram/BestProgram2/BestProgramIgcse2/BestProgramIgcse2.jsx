import React, { useEffect, useState } from "react";
import hotProgram from "../../../../assets/8 maret 2024.png";

const BestProgramIgcse2 = () => {
  const [program_2, setProgram_2] = useState([]);

  useEffect(() => {
    fetchProgram_2();
  }, []);

  const fetchProgram_2 = () => {
    fetch("https://api.edulink-indonesia.com/bestprogramprivat2")
      .then((res) => res.json())
      .then((data) => {
        setProgram_2(data);
        data;
      });
  };
  return (
    <React.Fragment>
      {/* <div className="main-box-2"> */}
      <div className="main-best-program-2">
        <h1 className="title-best-program-2">
          INTERNATIONAL <br /> PROGRAMS WE OFFER
        </h1>
        <h3 className="hot-program-2">
          <img
            className="icon-hot-program-2"
            src={hotProgram}
            alt="Bimbel Les Privat Terbaik - Edumatrix Indonesia"
          />{" "}
          HOTS PROGRAM
        </h3>
        {/* <div className="parent-best-program-2"> */}
        {/* <div className="box-best-program-2"> */}
        <div className="box-flex-best-program">
          <a
            className="box-flex-best-program"
            href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20tanya%20program%20belajar%20yang%20ada%20di%20Edumatrix.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket%20sesinya?"
          >
            {program_2.map((item, index) => (
              <img
                key={index}
                className="best-program-img-2"
                src={"https://api.edulink-indonesia.com/images/" + item.image}
                alt="Bimbel Les Privat Terbaik - Edumatrix Indonesia"
              />
            ))}
          </a>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default BestProgramIgcse2;
