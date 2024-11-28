import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <div className="mission">
      <div className="mission-container">
        <section className="mission-section">
          <h1 className="mission-header">Our Mission</h1>
          <p className="mission-text">
            To empower rural youth with digital skills, internet access, and
            sustainable power solutions, enabling them to transform their
            communities and bridge the digital divide.
          </p>
        </section>

        <section className="mission-section">
          <h1 className="mission-header">Our Vision</h1>
          <p className="vision-text">
            A world where every rural youth has the opportunity to thrive in the
            digital economy, equipped with the skills, tools, and resources to
            succeed in an interconnected world.
          </p>
        </section>

        <section className="mission-section">
          <h1 className="mission-header">Our Core Values</h1>
          <ul className="values-list">
            <li>
              Empowerment: We believe in the power of education to uplift
              communities.
            </li>
            <li>
              Innovation: We embrace technology to create sustainable solutions.
            </li>
            <li>
              Inclusion: We ensure no one is left behind in the digital
              revolution.
            </li>
            <li>
              Integrity: We uphold the highest standards of transparency and
              accountability.
            </li>
            <li>
              Collaboration: We work together with partners to achieve our
              goals.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Mission;
