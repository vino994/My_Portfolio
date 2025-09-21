import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "../Assets/person2.jpeg";
import "../Styles/About.css";

// ✅ Tech icons
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs } from "react-icons/fa";

function About() {
  const PHONE = "+919380334317";

  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Profile Image */}
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <img
              src={profilePic}
              alt="Vinoth Sanjeevi"
              className="img-fluid rounded shadow-lg about-img"
            />
          </div>

          {/* Content */}
          <div className="col-lg-7 text-start">
            <h2 className="about-title">
              ABOUT <span className="highlight">ME</span>
            </h2>
            <h6 className="about-sub">FRONTEND DEVELOPER</h6>

            <p className="about-text">
              I am a <strong>Frontend Developer</strong> specializing in{" "}
              <strong>React.js, JavaScript, and UI/UX design</strong>.  
              I build fast, responsive, and user-friendly web applications that deliver real business value.
            </p>

            {/* Highlights */}
            <ul className="highlights mb-4">
              <li><FaReact className="icon react" /> 5+ years of Frontend Development experience</li>
              <li><FaJs className="icon js" /> Proficient in React.js, JavaScript, HTML, CSS, Bootstrap</li>
              <li><FaNodeJs className="icon node" /> Hands-on Node.js for backend integration</li>
              <li><FaBootstrap className="icon bootstrap" /> Skilled in UI/UX tools: Figma, Photoshop, Canva</li>
              <li><FaHtml5 className="icon html" /> Delivered 10+ live projects (e-commerce, social apps, portfolios)</li>
              <li><FaCss3Alt className="icon css" /> Strong problem-solving, quick learner, and collaborative team player</li>
            </ul>

            {/* Top Projects */}
            <h6 className="about-sub mb-3">TOP PROJECTS</h6>
            <ul className="projects-list mb-4">
              <li>
                🛒 <a href="https://vino994.github.io/delivery-app/" target="_blank" rel="noreferrer">Delivery App</a> — React + Bootstrap + Cart Flow
              </li>
              <li>
                🌦 <a href="https://vino994.github.io/weather_app/" target="_blank" rel="noreferrer">Weather App</a> — React Hooks + OpenWeather API
              </li>
              <li>
                🏨 <a href="https://vino994.github.io/hotelbooking/" target="_blank" rel="noreferrer">Hotel Booking</a> — Responsive UI with React
              </li>
            </ul>

            {/* Call to Action */}
            <div className="d-flex flex-wrap gap-3">
              <a
                href="/Vinoth_Sanjeevi_Resume.pdf"
                download="Vinoth_Sanjeevi_Resume.pdf"
                className="btn btn-danger"
              >
                📄 Download Resume
              </a>
              <a href={`tel:${PHONE}`} className="btn btn-outline-light">
                📞 Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
