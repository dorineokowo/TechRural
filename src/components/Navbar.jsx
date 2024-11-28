import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openAboutMenu = () => {
    setAboutMenuOpen(true);
  };

  const closeAboutMenu = () => {
    setAboutMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">TechEmpower Rural</Link>
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>

        {/* Dropdown with mouse leave to close */}
        <div
          className="dropdown"
          onClick={openAboutMenu}
          onMouseLeave={closeAboutMenu}
        >
          <span>About</span>
          <div className={`dropdown-menu ${aboutMenuOpen ? "show" : ""}`}>
            <Link to="/about/who-we-are" onClick={toggleMenu}>
              Who We Are
            </Link>
            <Link to="/about/mission" onClick={toggleMenu}>
              Mission, Vision, Core Values
            </Link>
            <Link to="/about/programs" onClick={toggleMenu}>
              Our Programs
            </Link>
            <Link to="/about/gallery" onClick={toggleMenu}>
              Gallery
            </Link>
          </div>
        </div>

        <Link to="/volunteer" onClick={toggleMenu}>
          Volunteer
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          Contact
        </Link>
        <Link to="/application" onClick={toggleMenu}>
          Apply Now
        </Link>
        <Link to="/donate" className="nav-button" onClick={toggleMenu}>
          Donate
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
