import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css";
import Profile from "../Assets/profile2.png";

function Home() {
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.remove("dark-theme", "light-theme");
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  return (
    <div className="home-container d-flex position-relative">
      {/* Top-right actions (theme toggle + resume) */}
      <div className="top-actions">
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        {/* Resume Download */}
        <a
          href={`${process.env.PUBLIC_URL}/vinothsanjeev_resume`}
          download="vinothsanjeev_resume.pdf"
          className="resume-top-btn"
          aria-label="Download Resume"
        >
          <span className="resume-text">📄 Resume</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="resume-icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path d="M12 16a1 1 0 0 1-.7-.3l-5-5a1 1 0 0 1 1.4-1.4L11 12.6V3a1 1 0 0 1 2 0v9.6l3.3-3.3a1 1 0 0 1 1.4 1.4l-5 5a1 1 0 0 1-.7.3z"/>
            <path d="M5 20a2 2 0 0 1-2-2v-3a1 1 0 1 1 2 0v3h14v-3a1 1 0 1 1 2 0v3a2 2 0 0 1-2 2H5z"/>
          </svg>
          <span className="resume-tooltip">Download Resume</span>
        </a>
      </div>

      {/* Enhanced Menu Bar */}
      <div className={`enhanced-menu ${isMenuOpen ? 'open' : ''}`}>
        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className="menu-items">
          <ScrollLink 
            to="about" 
            smooth 
            duration={600} 
            spy 
            activeClass="active-menu"
            className="menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="menu-number">01.</span>
            <span className="menu-text">ABOUT</span>
          </ScrollLink>
          
          <ScrollLink 
            to="skills" 
            smooth 
            duration={600} 
            spy 
            activeClass="active-menu"
            className="menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="menu-number">02.</span>
            <span className="menu-text">SKILLS</span>
          </ScrollLink>
          
          <ScrollLink 
            to="portfolio" 
            smooth 
            duration={600} 
            spy 
            activeClass="active-menu"
            className="menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="menu-number">03.</span>
            <span className="menu-text">WORK</span>
          </ScrollLink>
          
          <ScrollLink 
            to="contact" 
            smooth 
            duration={600} 
            spy 
            activeClass="active-menu"
            className="menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="menu-number">04.</span>
            <span className="menu-text">CONTACT</span>
          </ScrollLink>
        </div>
      </div>

      {/* Left Section - Profile Image */}
      <div className="left-section d-flex flex-column justify-content-center align-items-center">
        <div className="profile-container">
          <img src={Profile} alt="profile" className="profile-img theme-profile" />
          <div className="profile-glow"></div>
        </div>
        
        {/* Social Links */}
        <div className="social-links mt-4">
          <a href="https://github.com/vino994" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://linkedin.com/in/vinothkumar-sanjeevi" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:vinodjayasudha@gmail.com" className="social-link">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </div>

      {/* Right Section - Content */}
      <div className="right-section d-flex flex-column justify-content-center">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">Frontend / React Developer</div>
          
          {/* Main Title - Fixed text visibility */}
          <h1 className="hero-title">
            I'm <span className="highlight">Vinoth</span> Sanjeevi
          </h1>
          
          {/* Description */}
          <div className="hero-description">
            <p className="lead mb-4">
              Frontend Developer with 3+ years of experience building scalable web applications. 
              Specialized in <span className="highlight-text">React.js</span>, 
              <span className="highlight-text"> JavaScript</span>, and 
              <span className="highlight-text"> MERN Stack</span>.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="hero-cta">
            <ScrollLink 
              to="portfolio" 
              smooth 
              duration={800} 
              className="btn btn-portfolio"
            >
              View My Work
              <span className="arrow">→</span>
            </ScrollLink>
            <ScrollLink 
              to="contact" 
              smooth 
              duration={800} 
              className="btn btn-outline-contact"
            >
              Contact Me
            </ScrollLink>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span className="scroll-text">SCROLL</span>
      </div>
    </div>
  );
}

export default Home;