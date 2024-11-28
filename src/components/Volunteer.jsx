import React from "react";
import "./Volunteer.css"; // Make sure to import the CSS

const Volunteer = () => {
  const volunteers = [
    {
      name: "Selestine Adhiambo",
      role: "Community Organizer",
      description:
        "Selestine is dedicated to empowering rural youths through digital education.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5DpovlxBrqbIQt85oZLk-b2jUQCPTVTIZOw&s",
    },
    {
      name: "Wilfred Bahati",
      role: "Digital Skills Trainer",
      description:
        "Wilfred helps youth acquire essential digital skills for a better future.",
      image:
        "https://www.babson.edu/media/babson/assets/professional-individuals/L4-header-individuals-ee-programs--562748599-1.jpg",
    },
    {
      name: "Brenda Khajija",
      role: "Project Coordinator",
      description:
        "Brenda ensures the smooth operation of our programs in rural areas.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnz1iCu93Hb_kcFymw1NmUppmbk69k10btVA&s",
    },
    {
      name: "Selestine Adhiambo",
      role: "Community Organizer",
      description:
        "Selestine is dedicated to empowering rural youths through digital education.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5DpovlxBrqbIQt85oZLk-b2jUQCPTVTIZOw&s",
    },
  ];

  return (
    <div className="volunteer-page">
      <h1>Join Our Team of Volunteers</h1>
      <p>
        Be a part of our mission to empower rural communities through digital
        skills training.
      </p>

      <div className="volunteer-list">
        {volunteers.map((volunteer, index) => (
          <div key={index} className="volunteer-card">
            <img
              src={volunteer.image}
              alt={volunteer.name}
              className="volunteer-image"
            />
            <div className="volunteer-info">
              <h2>{volunteer.name}</h2>
              <h4>{volunteer.role}</h4>
              <p>{volunteer.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Why Volunteer with Us?</h2>
      <ul className="benefits-list">
        <li>Make a difference in the lives of rural youths</li>
        <li>Gain valuable experience and skills</li>
        <li>Connect with a community of like-minded individuals</li>
        <li>Flexible hours and remote opportunities</li>
      </ul>

      <div className="call-to-action">
        <h3>Ready to make an impact?</h3>
        <button className="apply-btn">Apply Now</button>
      </div>
    </div>
  );
};

export default Volunteer;
