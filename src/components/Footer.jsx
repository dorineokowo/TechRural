// src/components/Footer.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Subscription successful!");
      } else {
        setMessage(data.message || "Subscription failed. Try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* About Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We empower rural youths by providing them with digital skills and
            access to technology, helping them unlock their full potential.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about/programs">Programs</Link>
            </li>
            <li>
              <Link to="/volunteer">Volunteer</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i>234 Yala-Busia Road, Yala
            Siaya, Kenya
          </p>
          <p>
            <i className="fas fa-phone-alt"></i> +254768629028
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@techempowerrural.org
          </p>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-section">
          <h3>Subscribe to our Newsletter</h3>
          <form className="footer-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>
          {message && <p>{message}</p>}

          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} TechEmpower Rural. All Rights
          Reserved.
        </p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
