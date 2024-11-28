// About.jsx
import React from "react";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <div className="about-container">
      {/* Who We Are Section */}
      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p>
          TechEmpower is a non-profit organization dedicated to transforming
          rural communities by providing digital skills training, internet
          access, and sustainable power solutions. Our mission is to empower the
          youth and bridge the digital divide, ensuring everyone has an equal
          opportunity to thrive in today's technology-driven world.
        </p>
      </section>

      {/* Mission Section */}
      <section className="who-we-are">
        <h2>Our Story</h2>
        <p>
          "Hello! My name is Dorine Okowo.The CEO of TechEmpower Rural. Growing
          up in a rural area, I always knew the challenges that came with
          lacking basic resources like electricity, internet access, and
          computers. But it wasn’t until I faced these obstacles firsthand that
          I truly understood the crippling effect they could have on one’s
          future, particularly in the rapidly evolving digital world. After
          completing the Glad Technology Bootcamp, I was excited to continue
          sharpening my digital skills and exploring the endless opportunities
          online. However, the moment we were required to transition to remote
          learning, my excitement turned to despair. Unlike many of my peers who
          had access to stable internet, power, and computers, I had none of
          these. Living in a remote area meant I couldn’t easily connect to the
          outside world, and the digital door that had briefly opened for me
          felt like it was closing again. While others progressed with their
          online learning, I found myself left behind, frustrated and
          embarrassed. I vividly remember the day when it seemed like my dream
          of building a career in the tech industry might slip away. The feeling
          of being excluded because of something as basic as access to the
          internet and power was overwhelming. But amidst the struggle, a fellow
          student extended a lifeline. They offered to host me at their home so
          I could continue learning. That simple act of kindness changed
          everything. I realized then that no one should ever have to face such
          challenges just to learn and grow in today’s digital age. This was the
          spark that ignited TechEmpower Rural. I founded TechEmpower Rural to
          ensure that young people in remote communities would never have to
          experience what I went through. Our mission is to provide rural youths
          with the essential tools and resources—digital skills training, access
          to power, and internet connectivity—that are crucial in today’s world.
          The challenges I faced shouldn’t hold back any bright and ambitious
          young person. With your support, we can bridge the digital divide,
          empowering thousands of underserved youths to access the opportunities
          they deserve. Together, we can create a future where every young
          person, regardless of where they live, can thrive in the digital
          economy. Join us on this journey to transform lives and communities."
        </p>
      </section>

      {/* Our Team Section */}
      <section className="who-we-are">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img
              src="https://img.freepik.com/premium-photo/generative-ai-black-middle-aged-businesswoman-posing-isolated-background_108985-3533.jpg"
              alt="John Doe"
            />
            <h4>Dorine Okowo</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img
              src="https://imgcdn.stablediffusionweb.com/2024/4/27/06395e13-82d9-4f9b-9c77-debb7120cfba.jpg"
              alt="Jane Smith"
            />
            <h4>Paul Peter</h4>
            <p>Program Director</p>
          </div>
          <div className="team-member">
            <img
              src="https://img.freepik.com/premium-photo/generative-ai-black-middle-aged-businesswoman-posing-isolated-background_108985-3533.jpg"
              alt="John Doe"
            />
            <h4>Dorine Okowo</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img
              src="https://imgcdn.stablediffusionweb.com/2024/4/27/06395e13-82d9-4f9b-9c77-debb7120cfba.jpg"
              alt="Jane Smith"
            />
            <h4>Paul Peter</h4>
            <p>Program Director</p>
          </div>
          <div className="team-member">
            <img
              src="https://img.freepik.com/premium-photo/generative-ai-black-middle-aged-businesswoman-posing-isolated-background_108985-3533.jpg"
              alt="John Doe"
            />
            <h4>Dorine Okowo</h4>
            <p>Founder & CEO</p>
          </div>
        </div>
      </section>

      {/* Partners & Sponsors Section */}
      <section className="who-we-are">
        <h2>Our Partners & Sponsors</h2>
        <div className="partners-grid">
          <div className="partner">
            <img
              src="https://images.squarespace-cdn.com/content/v1/623cf4c716b8e63b3a446ea9/6b00b7d1-9cc3-481d-9f82-1e78b698699b/GLAD+Technology-C1.jpg?format=1500w"
              alt="Partner 1"
            />
          </div>
          <div className="partner">
            <img src="https://www.shofco.org/wp-content/uploads/2016/01/shofco_logo-1.png" />
          </div>
          <div className="partner">
            <img
              src="https://images.squarespace-cdn.com/content/v1/623cf4c716b8e63b3a446ea9/6b00b7d1-9cc3-481d-9f82-1e78b698699b/GLAD+Technology-C1.jpg?format=1500w"
              alt="Partner 1"
            />
          </div>
          <div className="partner">
            <img src="https://www.shofco.org/wp-content/uploads/2016/01/shofco_logo-1.png" />
          </div>
          {/* Add more partners/sponsors as needed */}
        </div>
      </section>

      {/* History & Milestones Section */}
      <section className="who-we-are">
        <h2>History & Milestones</h2>
        <p>
          Since our founding in 2028, we have achieved significant milestones
          including:
        </p>
        <ul>
          <li>
            2029: Launched our first digital skills training program in rural
            areas.
          </li>
          <li>
            2030: Partnered with key sponsors to expand internet access in 10
            villages.
          </li>
          <li>
            2031: Reached over 2,000 youth through our digital literacy
            programs.
          </li>
          <li>2033: Installed solar power solutions in 30 remote villages.</li>
        </ul>
      </section>

      {/* FAQs Section */}
      <section className="who-we-are">
        <h2>FAQs</h2>
        <div className="faq-item">
          <h3>How can I volunteer?</h3>
          <p>
            To volunteer, fill out the form on our Volunteer page or contact us
            directly for more information.
          </p>
        </div>
        <div className="faq-item">
          <h3>How do you ensure accountability?</h3>
          <p>
            We maintain transparency by adhering to global standards, conducting
            regular audits, and publishing annual reports.
          </p>
        </div>
        <div className="faq-item">
          <h3>How can I volunteer?</h3>
          <p>
            To volunteer, fill out the form on our Volunteer page or contact us
            directly for more information.
          </p>
        </div>
        <div className="faq-item">
          <h3>How do you ensure accountability?</h3>
          <p>
            We maintain transparency by adhering to global standards, conducting
            regular audits, and publishing annual reports.
          </p>
        </div>
        {/* Add more FAQs as needed */}
      </section>

      {/* Transparency & Accountability Section */}
      <div className="about">
        <section className="who-we-are">
          <h2>Transparency & Accountability</h2>
          <p>
            We prioritize transparency in all our operations. Our financial
            records are audited annually, and we ensure that our donors and
            stakeholders have full access to our impact reports and financial
            statements.
          </p>
          <a href="/annual-report" className="report-link">
            View Our Annual Report
          </a>
        </section>

        {/* Annual Report Section */}
        <section className="who-we-are">
          <h2>Annual Report</h2>
          <p>
            Our annual report provides detailed information on the impact we
            have made, financial transparency, and the stories of communities we
            have helped.
          </p>
          <a href="/annual-report" className="report-link">
            Download the Full Report
          </a>
        </section>
      </div>
    </div>
  );
};

export default WhoWeAre;
