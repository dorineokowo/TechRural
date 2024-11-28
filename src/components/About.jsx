import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>Empowering Rural Youths with Digital Skills</h1>
        <p>We believe in the power of technology to transform lives.</p>
        <button>Join Our Mission</button>
      </div>

      {/* Mission Section */}
      
      {/* Vision Section */}
      <div className="vision-section">
        <h2>Our Vision</h2>
        <p>
          We envision a world where every young person in rural areas has the
          skills and resources to thrive in the digital age.
        </p>
      </div>

      {/* Core Values Section */}
      <div className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Integrity:</strong> We build trust through transparency and
            accountability.
          </li>
          <li>
            <strong>Innovation:</strong> We leverage technology to create
            sustainable impact.
          </li>
          <li>
            <strong>Inclusivity:</strong> We ensure equal access to
            opportunities for all.
          </li>
          <li>
            <strong>Empowerment:</strong> We equip youths with the tools they
            need to succeed.
          </li>
        </ul>
      </div>

      {/* Our Story Section */}
      <div className="story-section">
        <h2>Our Story</h2>
        <p>
          Founded in 2015, NGO Digital Youth started with a vision to bring
          digital literacy to underserved communities. From a single village in
          rural Africa, we’ve grown into an organization that serves over 10,000
          youths in multiple regions, offering courses in digital skills,
          programming, and more.
        </p>
      </div>

      {/* Meet the Team Section */}
      <div className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/images/founder.jpg" alt="Founder" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="/images/program-manager.jpg" alt="Program Manager" />
            <h3>Jane Smith</h3>
            <p>Program Manager</p>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="impact-section">
        <h2>Our Impact</h2>
        <p>Since our inception, we have:</p>
        <ul>
          <li>Trained over 5,000 youths in digital skills.</li>
          <li>Provided internet access to 30 rural schools.</li>
          <li>Facilitated 100+ scholarships for online education.</li>
        </ul>
      </div>

      {/* Partnerships Section */}
      <div className="partners-section">
        <h2>Our Partners</h2>
        <div className="partner-logos">
          <img src="/images/partner1.png" alt="Partner 1" />
          <img src="/images/partner2.png" alt="Partner 2" />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2>Join Us in Empowering Youths</h2>
        <div className="cta-buttons">
          <button>Donate Now</button>
          <button>Become a Volunteer</button>
        </div>
      </div>

      {/* Testimonials Section (Optional) */}
      <div className="testimonials-section">
        <h2>What People Are Saying</h2>
        <div className="testimonials">
          <blockquote>
            <p>
              "This program has changed my life. I now have the skills to pursue
              a career in web development." – Sarah, Program Graduate
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;
