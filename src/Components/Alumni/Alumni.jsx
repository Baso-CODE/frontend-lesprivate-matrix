import React from "react";
import "./Alumni.css";
import alumni1 from "../../assets/alumni_edumatrix/Group 554.png";
import alumni2 from "../../assets/alumni_edumatrix/Group 555.png";
import alumni3 from "../../assets/alumni_edumatrix/Group 556.png";
import alumni4 from "../../assets/alumni_edumatrix/Group 557.png";

const Alumni = () => {
  return (
    <div className="container-alumni">
      <h1 className="title-alumni">ALUMNI EDUMATRIX INDONESIA</h1>
      <div className="box-alumni" id="style-2">
        <div className="parent-alumni">
          <img className="img-alumni" src={alumni1} alt="" />
          <img className="img-alumni" src={alumni2} alt="" />
          <img className="img-alumni" src={alumni3} alt="" />
          <img className="img-alumni" src={alumni4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Alumni;
