import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/ExperienceSection.css";
import { FaLaptopCode, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const EXPERIENCE = [
  {
    year: "2023 – Present",
    title: "Career Break / MERN Stack Developer (Learning)",
    company: "Independent / Upskilling",
    place: "Coimbatore, Tamil Nadu",
    icon: <FaReact className="exp-icon" />,
    desc: [
      "Completed hands-on MERN Full-Stack Developer course covering React, Node.js, Express, and MongoDB.",
      "Built and deployed 3+ full-stack projects demonstrating CRUD operations and authentication.",
      "Focused on reusable UI design, API integration, and scalable frontend architecture.",
    ],
  },
  {
    year: "2023 (Jan – Jul)",
    title: "React Developer",
    company: "Vation Digital Pvt Ltd",
    place: "Coimbatore, Tamil Nadu",
    icon: <FaLaptopCode className="exp-icon" />,
    desc: [
      "Developed responsive and data-driven dashboards using ReactJS and Tailwind CSS.",
      "Enhanced UI performance and accessibility, reducing page load times by 20%.",
      "Collaborated with product teams to deliver optimized, user-friendly web interfaces.",
    ],
  },
  {
    year: "2022 (Mar – Dec)",
    title: "Frontend Developer",
    company: "Bee Logical Software Solutions / TrueTech Solutions Pvt Ltd",
    place: "Pune / Chennai, India",
    icon: <FaLaptopCode className="exp-icon" />,
    desc: [
      "Delivered multiple client-facing web apps using ReactJS, Redux, and TypeScript.",
      "Integrated RESTful APIs and implemented component-based architecture for maintainability.",
      "Optimized UI rendering and ensured cross-browser compatibility.",
    ],
  },
  {
    year: "2021 (Jul) – 2022 (Mar)",
    title: "UI Developer",
    company: "WPP Marketing Communications India Pvt Ltd (Hogarth Worldwide)",
    place: "Chennai, India",
    icon: <FaHtml5 className="exp-icon" />,
    desc: [
      "Developed enterprise analytics dashboards using ReactJS and Redux.",
      "Strengthened modular design patterns for UI consistency and scalability.",
      "Worked closely with backend teams to integrate APIs and ensure seamless data flow.",
    ],
  },
  {
    year: "2019 – 2021",
    title: "Frontend Developer",
    company: "Teleperformance Global Business Pvt Ltd",
    place: "Mohali, India",
    icon: <FaCss3Alt className="exp-icon" />,
    desc: [
      "Maintained and enhanced internal dashboards using HTML, CSS, JavaScript, and ReactJS.",
      "Improved UI workflows and application performance through efficient state management.",
      "Worked with QA and business teams to ensure reliable user experience.",
    ],
  },
  {
    year: "2019 (Feb – May)",
    title: "Web Developer (Contract)",
    company: "AG Resources (India) Pvt Ltd",
    place: "Coimbatore, Tamil Nadu",
    icon: <FaLaptopCode className="exp-icon" />,
    desc: [
      "Assisted in frontend development using HTML5, CSS3, and JavaScript.",
      "Implemented UI improvements based on client feedback for B2B web solutions.",
      "Gained strong understanding of responsive layouts and browser compatibility.",
    ],
  },
  {
    year: "2017 (May) – 2018 (Sep)",
    title: "Frontend Developer (Contract)",
    company: "Teleperformance Global Business Pvt Ltd (First Tenure)",
    place: "Jaipur, Rajasthan, India",
    icon: <FaCss3Alt className="exp-icon" />,
    desc: [
      "Developed internal dashboards using HTML, CSS, and JavaScript for enterprise workflows.",
      "Learned modern web fundamentals and UI component design.",
      "Recognized for fast learning and consistency in project delivery.",
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
