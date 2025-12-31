import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "../Assets/person2.jpeg";
import "../Styles/About.css";
import { Link } from "react-router-dom";

// ✅ Icons
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function About() {
  const PHONE = "+919380334317";
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`about-section ${isVisible ? "animate" : ""}`} ref={sectionRef}>
      <div className="container">
        <div className="row align-items-stretch">
          {/* Left: Image + Projects */}
          <div className="col-lg-5 d-flex flex-column justify-content-between">
            <div className="about-img-wrapper">
              <img src={profilePic} alt="Vinoth Sanjeevi" className="about-img shadow-lg" />
            </div>

            {/* Projects */}
            <div className="projects-box mt-4 shadow-sm">
              <h6 className="about-sub">Top Projects</h6>
              <ul className="projects-list">
                <li>🛒 <Link to="/project/delivery">Delivery App</Link> – React + Bootstrap + Cart Flow</li>
                <li>🌦 <Link to="/project/construction">construction App</Link> – Construction API + React Hooks</li>
                <li>🏨 <Link to="/project/hotel">Hotel Booking</Link> – UI Demo with React</li>
              </ul>
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-lg-7 text-start d-flex flex-column justify-content-center">
            <h2 className="about-title mb-3">
              ABOUT <span className="highlight">ME</span>
            </h2>
            <h6 className="about-sub">FRONTEND DEVELOPER</h6>
            <p className="about-text">
              I am a <strong>Frontend Developer</strong> specializing in{" "}
              <strong>React.js, JavaScript, and modern UI/UX design</strong>. I enjoy building fast,
              responsive, and user-friendly web applications that create real impact.
            </p>

            {/* Highlights */}
            <ul className="highlights mb-4">
              <li><FaReact className="icon react" /> 5+ years of experience in Frontend Development</li>
              <li><FaJs className="icon js" /> Proficient in React.js, JavaScript, HTML, CSS, Bootstrap</li>
              <li><FaNodeJs className="icon node" /> Hands-on exposure to Node.js for backend integration</li>
              <li><FaBootstrap className="icon bootstrap" /> Skilled in UI/UX tools: Figma, Photoshop, Canva</li>
              <li><FaHtml5 className="icon html" /> Built 10+ live projects</li>
              <li><FaCss3Alt className="icon css" /> Strong problem-solving, quick learner, team player</li>
            </ul>

            {/* Actions */}
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
              <div className="d-flex gap-3">
                <a
                  href={`${process.env.PUBLIC_URL}/Vinothsanjeev_resume.pdf`}
                  download="Vinothsanjeev_resume.pdf.pdf"
                  className="btn btn-danger"
                >
                  📄 Download Resume
                </a>
                <a
                  href={`${process.env.PUBLIC_URL}/Vinothsanjeev_resume.pdf`}
                  target="_self"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                >
                  👀 View Resume
                </a>
                <a href={`tel:${PHONE}`} className="btn btn-success">📞 Hire Me</a>
              </div>

              <div className="social-links d-flex gap-2">
                <a href="https://www.linkedin.com/in/vinothkumar-sanjeevi/" target="_self" rel="noreferrer" className="social-btn linkedin">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href="https://github.com/vino994" target="_self" rel="noreferrer" className="social-btn github">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
