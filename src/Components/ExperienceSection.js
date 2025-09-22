import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/ExperienceSection.css";
import { FaLaptopCode, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const EXPERIENCE = [
  {
    year: "2021 – 2024",
    title: "Senior Software Developer",
    company: "Bee Logical Software Solutions",
    place: "Chennai",
    icon: <FaLaptopCode className="exp-icon" />,
    desc: [
      "Led frontend development using React and Redux.",
      "Collaborated with backend team on Node.js integrations.",
      "Delivered 2 major projects ensuring performance and scalability.",
    ],
  },
  {
    year: "2019 – 2021",
    title: "Junior Frontend Developer",
    company: "Altorcks Software",
    place: "Coimbatore",
    icon: <FaReact className="exp-icon" />,
    desc: [
      "Built responsive apps using HTML, CSS, JavaScript, and React.",
      "Worked on 3 client projects in cross-functional teams.",
      "Improved maintainability with reusable UI components.",
    ],
  },
  {
    year: "2018 – 2019",
    title: "Frontend Development Trainee",
    company: "Hogarth Worldwide",
    place: "Pune",
    icon: <FaHtml5 className="exp-icon" />,
    desc: [
      "Trained in HTML, CSS, JavaScript, and jQuery.",
      "Contributed to 2 live projects under mentorship.",
      "Learned production-level development standards.",
    ],
  },
  {
    year: "2016 – 2018",
    title: "Content Moderator & Designer",
    company: "Teleperformance",
    place: "Mohali",
    icon: <FaCss3Alt className="exp-icon" />,
    desc: [
      "Reviewed and moderated global digital content.",
      "Worked with Photoshop, Figma, and Illustrator.",
      "Supported digital brand presence and marketing.",
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
            EXPERIENCE <span className="highlight">HISTORY</span>
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
