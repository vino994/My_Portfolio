import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/ExperienceSection.css";
import { FaLaptopCode, FaReact, FaHtml5 } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const EXPERIENCE = [
  {
    year: "2023 – Present",
    title: "Independent Projects & Professional Practice",
    company: "Self-Employed / Upskilling",
    place: "Coimbatore, Tamil Nadu",
    icon: <FaReact className="exp-icon" />,
    desc: [
      "Developed frontend and MERN stack applications using React, Node.js, Express, and MongoDB.",
      "Implemented secure JWT-based authentication systems safeguarding sensitive user data.",
      "Built full-stack applications with authentication and CRUD operations across multiple project modules.",
      "Deployed applications using Vercel, Netlify, and Render hosting platforms.",
      "Focused on clean architecture, scalability, and maintainable UI solutions.",
    ],
  },
  {
    year: "Mar 2022 – Apr 2023",
    title: "Frontend Developer",
    company: "Bee Logical Software Solutions",
    place: "India",
    icon: <FaLaptopCode className="exp-icon" />,
    desc: [
      "Built interactive dashboards using React, HTML5, CSS3, and JavaScript supporting 5+ business modules.",
      "Implemented Context API for state management, reducing prop drilling and improving maintainability.",
      "Integrated backend APIs and enhanced application responsiveness, improving page load speed by ~20%.",
      "Collaborated with backend and QA teams during Agile sprints, contributing to 100% on-time sprint deliveries.",
      "Resolved UI bugs and performance issues, leading to a ~25% reduction in defects.",
    ],
  },
  {
    year: "Apr 2020 – Feb 2022",
    title: "Frontend Developer",
    company: "Hogarth Worldwide",
    place: "India",
    icon: <FaHtml5 className="exp-icon" />,
    desc: [
      "Developed responsive web interfaces using React.js with cross-browser compatibility.",
      "Built 10+ reusable UI components following enterprise brand standards.",
      "Integrated REST APIs and handled dynamic data rendering across 10+ pages and UI views.",
      "Improved UI consistency and maintainability, reducing QA rework by ~15-20%.",
    ],
  },
];

export default function ExperienceSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="experience-section py-5">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="section-title underline-wipe">
            WORK <span className="highlight">EXPERIENCE</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="timeline position-relative">
          {EXPERIENCE.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content shadow-lg">
                <div className="d-flex align-items-center mb-2">
                  {item.icon}
                  <h4 className="fw-bold ms-2 mb-0">{item.title}</h4>
                </div>
                <h6 className="company">{item.company}</h6>
                <div className="small place mb-2">{item.place}</div>
                <ul>
                  {item.desc.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}