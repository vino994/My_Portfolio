import React, { useEffect,useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "../Assets/person2.jpeg";
import "../Styles/About.css";

function About() {
  const PHONE = "+919380334317";
    const [theme, setTheme] = useState("dark");
 useEffect(()=>{
    document.body.classList.remove("dark-theme", "light-theme");
  document.body.classList.add(`${theme}-theme`);
 },[theme])
  return (
    <section className="about-section text-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
       

          {/* Right Content */}
          <div className="col-lg-7">
            <h2 className="fw-bold mb-3">
              ABOUT <span className="text-danger">ME</span>
            </h2>
            <h6 className="text-danger mb-4">WHO I AM</h6>

            <p className=" mb-4">
              I’m a Frontend Developer with 5+ years of experience, passionate about building responsive,
              user-friendly, and modern web applications. My expertise includes React, JavaScript, HTML, CSS, and Bootstrap,
              with hands-on exposure to Node.js for backend development.
              <br /><br />
              Alongside coding, I have strong skills in UI/UX design and creative tools like Photoshop, Canva, and Wix.
              I thrive on turning ideas into intuitive digital experiences and am always eager to learn,
              adapt, and contribute to impactful projects.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3">
              <a
                href="/Vinoth_Resume.pdf"
                download="Vinoth_Resume.pdf"
                className="btn btn-danger"
                aria-label="Download my resume as PDF"
              >
                Download Resume
              </a>

              <a
                href={`tel:${PHONE}`}
                className="btn btn-outline-danger"
                aria-label="Call me now"
              >
                Hire Me (Call)
              </a>
            </div>
          </div>
             <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <img
              src={profilePic}
              alt="Vinoth Sanjeevi"
              className="img-fluid rounded shadow-lg about-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
