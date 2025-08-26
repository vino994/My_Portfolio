import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css";
import textBg from "../Assets/vino.jpg";
import Profile from "../Assets/profile2.png";

function Home() {
  return (
    <div className="home-container d-flex vh-100 position-relative">
      {/* Left */}
      <div className="left-section d-flex justify-content-center align-items-center">
        <img src={Profile} alt="profile" className="profile-img" />
      </div>

      {/* Right */}
      <div className="right-section d-flex justify-content-center align-items-center position-relative">
        <div className="position-relative">
          <h1
            className="fw-bold display-2 text-clip text-start"
            style={{ backgroundImage: `url(${textBg})` }}
          >
            I'm <br />Vinoth <br />Sanjeevi
          </h1>
        </div>
      </div>

      {/* Corner Links (smooth scroll) */}
      <ScrollLink to="about" smooth duration={600} spy activeClass="active-corner"
        className="corner-text top-center">ABOUT</ScrollLink>

      <ScrollLink to="skills" smooth duration={600} spy activeClass="active-corner"
        className="corner-text bottom-center">STRENGTH</ScrollLink>

      <ScrollLink to="portfolio" smooth duration={600} spy activeClass="active-corner"
        className="corner-text left-center">PORTFOLIO</ScrollLink>

      <ScrollLink to="contact" smooth duration={600} spy activeClass="active-corner"
        className="corner-text right-center">CONTACT</ScrollLink>
    </div>
  );
}

export default Home;
