import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import WhoWeAre from "./components/WhoWeAre";
import Mission from "./components/Mission";
import Gallery from "./components/Gallery";
import Volunteer from "./components/Volunteer";
import Contact from "./components/Contact";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import Application from "./components/Application";
import Programs from "./components/Programs";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/who-we-are" element={<WhoWeAre />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/programs" element={<Programs />} />
          <Route path="/about/gallery" element={<Gallery />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/application" element={<Application />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
