import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "../Assets/profile2.png";
import "../Styles/About.css";

function About() {
  // set your real phone number here (country code + number, no spaces)
  const PHONE = "+919380334317"; 

  return (
    <section className="about-section py-5 text-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
       
          {/* Right Content */}
          <div className="col-md-7">
            <h2 className="fw-bold">
              ABOUT <span className="text-danger">ME</span>
            </h2>
            <h6 className="text-danger mb-5">WHO I AM</h6>

            <p className="text-white">
              I’m a Frontend Developer with 5+ years of experience, passionate about building responsive,
              user-friendly, and modern web applications. My expertise includes React,
              JavaScript, HTML, CSS, and Bootstrap, with hands-on exposure to Node.js for backend development.
              Alongside coding, I have strong skills in UI/UX design and creative tools like Photoshop, Canva, and Wix,
              helping me deliver solutions that are both functional and visually engaging.
              I thrive on turning ideas into intuitive digital experiences and am always eager to learn,
              adapt, and contribute to impactful projects.
            </p>

            {/* Buttons */}
            <div className="mt-4 d-flex flex-wrap gap-3">
              {/* Make sure the file is in /public and the name matches */}
           <a
  href="/Vinoth_Sanjeevi_CV.pdf"
  download="Vinoth_Sanjeevi_CV.pdf"
  className="btn btn-danger"
  aria-label="Download my resume as PDF"
>
  Download Resume
</a>

              {/* Click-to-call (works on mobile; on desktop it opens the default calling app) */}
              <a
                href={`tel:${PHONE}`}
                className="btn btn-outline-danger"
                aria-label="Call me now"
              >
                Hire Me (Call)
              </a>
            </div>

            {/* Optional: add WhatsApp or Email quick actions */}
            {/* 
            <div className="mt-3 d-flex flex-wrap gap-3">
              <a href={`https://wa.me/${PHONE.replace('+', '')}`} className="btn btn-outline-light">WhatsApp</a>
              <a href="mailto:youremail@example.com" className="btn btn-outline-light">Email</a>
            </div>
            */}
          </div>
             <div className="col-md-5 text-center">
            <img
              src={profilePic}
              alt="profile"
              className="img-fluid rounded shadow-lg about-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
