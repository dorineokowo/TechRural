import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-container">
      {/* Image Slider */}
      <Slider {...settings}>
        <div>
          <img
            src="https://media.istockphoto.com/id/1499733227/photo/group-of-african-children-using-laptop-kenya-east-africa.jpg?s=612x612&w=0&k=20&c=DajNr7U8AiAU8rJED_orKsiWyzvq4yJam6N9r4Z3aBs="
            alt="Digital Skills Training"
          />
          <div className="caption">
            <h2>Empowering Rural Youths</h2>
            <p>Learn digital skills and web development.</p>
          </div>
        </div>
        <div>
          <img
            src="https://miro.medium.com/v2/resize:fit:1358/1*zJQiCQZk7cRtkhI_ytWvrQ.png"
            alt="Community Support"
          />
          <div className="caption">
            <h2>Connecting Communities</h2>
            <p>Helping youths get internet and power for learning.</p>
          </div>
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/1452114094/photo/young-african-girls-using-laptop-east-africa.jpg?s=612x612&w=0&k=20&c=Y54TGLcCTFGpEm6UM-JNCTJ-SMqgLZ7C7wSaWQCqpDE="
            alt="Volunteer"
          />
          <div className="caption">
            <h2>Join Our Mission</h2>
            <p>Volunteer and help transform lives in rural areas.</p>
          </div>
        </div>
      </Slider>

      {/* Step 2: Mission Statement */}

      <section className="hero-container">
        <div className="hero-content">
          <h1>Empowering Rural Youths with Digital Skills</h1>
          <p>
            "We provide digital skills training, internet access, and power
            solutions to transform rural communities. By equipping young people
            with the tools they need to succeed in the digital age, we empower
            them to create new opportunities, build sustainable futures, and
            uplift their communities through technology. Join us in bridging the
            digital divide and fostering innovation for a brighter tomorrow."
          </p>
          <div className="cta-buttons">
            <Link to="/application">
              <button className="btn-pri">Apply Now</button>
            </Link>
            <Link to="/donate">
              <button className="btn-secondary">Donate</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Step 3: Programs */}
      <section className="programs">
        <h2>Our Programs</h2>
        <div className="program-grid">
          <div className="program-item">
            <img
              src="https://www.monitor.co.ke/wp-content/uploads/2020/09/digital-skills2.jpg"
              alt="Digital Skills"
            />
            <h3>Digital Skills Training</h3>
            <p>Learn web development, programming, and more.</p>
          </div>
          <div className="program-item">
            <img
              src="https://www.eschoolnews.com/files/2019/02/internet-access-for-rural-students.jpg"
              alt="Internet Access"
            />
            <h3>Internet Access</h3>
            <p>Get connected and access the global knowledge base.</p>
          </div>
          <div className="program-item">
            <img
              src="https://arka360.com/ros/content/images/2023/05/pasted-image-0--11---1--compressed.jpg"
              alt="Solar Power"
            />
            <h3>Solar Power Solutions</h3>
            <p>Providing solar solutions to power education.</p>
          </div>
        </div>
      </section>

      {/* Step 4: Impact Metrics */}
      <section className="impact-metrics">
        <h2>Our Impact</h2>
        <div className="metrics-grid">
          <div className="metric-item">
            <h3>1000+</h3>
            <p>Youths Trained</p>
          </div>
          <div className="metric-item">
            <h3>500+</h3>
            <p>Communities Connected</p>
          </div>
          <div className="metric-item">
            <h3>300+</h3>
            <p>Volunteers Engaged</p>
          </div>
        </div>
      </section>

      {/* Step 5: Call to Action */}
      <section className="cta">
        <h2>Get Involved</h2>
        <p>
          Whether you want to learn, volunteer, or donate, there are many ways
          to join our mission and make a difference.
        </p>
        <div className="cta-buttons">
          <Link to="/donate">
            <button className="btn-primary">Donate</button>
          </Link>
          <Link to="/volunteer">
            <button className="btn-secondary">Volunteer</button>
          </Link>
        </div>
      </section>

      {/* Step 6: Testimonials */}
      <section className="testimonials">
        <h2>What People Say</h2>
        <div className="testimonial-item">
          <p>
            "Thanks to this initiative, I learned web development and got my
            first remote job. It has changed my life!"
          </p>
          <h4>- Jane, Youth Participant</h4>
        </div>
        <div className="testimonial-item">
          <p>
            "Providing internet and power to rural communities is such a
            game-changer. Education is now accessible to many."
          </p>
          <h4>- David, Volunteer</h4>
        </div>
      </section>

      {/* Step 7: Partners */}
      <section className="partners">
        <h2>Our Partners</h2>
        <div className="partner-logos">
          <img src="/images/partner1.png" alt="Partner 1" />
          <img src="/images/partner2.png" alt="Partner 2" />
          <img src="/images/partner3.png" alt="Partner 3" />
        </div>
      </section>

      {/* Step 8: Newsletter */}
      <section className="newsletter">
        <h2>Stay Updated</h2>
        <p>
          Subscribe to our newsletter to receive the latest news and updates.
        </p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>

      {/* Step 9: Events */}
      <section className="events">
        <h2>Upcoming Events</h2>
        <div className="event-item">
          <h3>Web Development Bootcamp</h3>
          <p>Date: October 10, 2024</p>
          <p>Location: Nairobi, Kenya</p>
          <a href="#">Learn More</a>
        </div>
        <div className="event-item">
          <h3>Digital Youth Summit</h3>
          <p>Date: November 20, 2024</p>
          <p>Location: Kisumu, Kenya</p>
          <a href="#">Register Now</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
