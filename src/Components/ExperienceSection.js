import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/ExperienceSection.css";
import AOS from "aos";
import "aos/dist/aos.css";

const EXPERIENCE = [
  {
    year: "2021 – 2024",
    title: "Senior Software Developer",
    company: "Bee Logical Software Solutions",
    place: "Chennai",
    desc: [
      "Led frontend development using React and Redux.",
      "Collaborated with backend team, occasionally working with Node.js.",
      "Delivered 2 major projects, ensuring performance and scalability.",
    ],
  },
  {
    year: "2019 – 2021",
    title: "Junior Frontend Developer",
    company: "Altorcks Software",
    place: "Coimbatore",
    desc: [
      "Built responsive applications using HTML, CSS, JavaScript, jQuery, and React.",
      "Worked on 3 client projects with cross-functional teams.",
      "Focused on reusable UI components and improved code maintainability.",
    ],
  },
  {
    year: "2018 – 2019",
    title: "Frontend Development Trainee",
    company: "Hogarth Worldwide",
    place: "Pune",
    desc: [
      "Hands-on training in HTML, CSS, JavaScript, and jQuery.",
      "Gained exposure to production-level code and development standards.",
      "Contributed to 2 live projects under mentorship.",
    ],
  },
  {
    year: "2016 – 2018",
    title: "Content Moderator & Designer",
    company: "Teleperformance",
    place: "Mohali",
    desc: [
      "Reviewed and moderated digital content for global clients.",
      "Worked with design tools like Photoshop, Figma, and Illustrator.",
      "Developed skills in social media marketing and digital brand support.",
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
        <h2 className="fw-bold text-center mb-5">
          EXPERIENCE <span className="text-danger">HISTORY</span>
        </h2>

        <div className="timeline position-relative">
          {EXPERIENCE.map((item, index) => (
            <div
              key={index}
              className={`timeline-item d-flex justify-content-${
                index % 2 === 0 ? "start" : "end"
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content p-3 shadow-lg">
                <div className="timeline-year">{item.year}</div>
                <h4 className="fw-bold mb-1">{item.title}</h4>
                <h6 className="text-danger mb-1">{item.company}</h6>
                <div className="small mb-2">{item.place}</div>
                <ul className="mb-0 ps-3">
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
