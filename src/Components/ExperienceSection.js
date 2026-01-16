import React, { useEffect } from "react";
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
      "Developed frontend and MERN stack applications.",
      "JWT-based secure authentication systems.",
      "Full-stack CRUD applications.",
      "Deployed using Vercel, Netlify, Render.",
      "Clean, scalable UI solutions.",
    ],
  },
  {
    year: "Mar 2022 – Apr 2023",
    title: "Frontend Developer",
    company: "Bee Logical Software Solutions",
    place: "India",
    icon: <FaLaptopCode className="exp-icon" />,
    desc: [
      "Built interactive dashboards.",
      "Used Context API.",
      "API integration.",
      "Agile sprint collaboration.",
      "Bug fixes & performance optimization.",
    ],
  },
  {
    year: "Apr 2020 – Feb 2022",
    title: "Frontend Developer",
    company: "Hogarth Worldwide",
    place: "India",
    icon: <FaHtml5 className="exp-icon" />,
    desc: [
      "Responsive UI development.",
      "Reusable UI components.",
      "REST API integrations.",
      "Reduced QA rework.",
    ],
  },
];

export default function ExperienceSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="experience-section">
      <div className="glow-bg"></div>

      <div className="container">
        <h2 className="section-title">
          WORK <span className="highlight">EXPERIENCE</span>
        </h2>

        <div className="timeline">
          {EXPERIENCE.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="timeline-line"></div>
              <div className="timeline-dot"></div>
              <div className="timeline-year">{item.year}</div>

              <div className="wave-glow"></div>

              <div className="timeline-content glass-card">
                <div className="d-flex align-items-center mb-2">
                  {item.icon}
                  <h4>{item.title}</h4>
                </div>
                <h6 className="company">{item.company}</h6>
                <div className="place">{item.place}</div>
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
