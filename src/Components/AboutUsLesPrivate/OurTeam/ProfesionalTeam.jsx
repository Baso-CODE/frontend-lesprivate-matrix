import React from "react";
import "./ProfesionalTeam.css";

const ProfesionalTeam = () => {
  return (
    <section className="profesional-team-section">
      <div className="profesional-team-container">
        <div className="profesional-team-content">
          <div className="profesional-team-inner">
            <h1 className="profesional-team-title">Our Professional Team</h1>
            <div className="profesional-team-image">
              <img
                src="/images/about-us/about-us.png"
                alt="Les Private Matrix Tutoring"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfesionalTeam;
