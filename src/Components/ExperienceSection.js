import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/ExperienceSection.css";

const EXPERIENCE = [
  {
    year: "2021 – 2024",
    role: "Senior Software Developer",
    company: "Bee Logical Software Solutions",
    dates: "Chennai | 3 Years",
    bullets: [
      "Led frontend development using React and Redux.",
      "Collaborated with backend team, occasionally working with Node.js.",
      "Delivered 2 major projects, ensuring performance and scalability.",
    ],
  },
  {
    year: "2019 – 2021",
    role: "Junior Frontend Developer",
    company: "Altorcks Software, Coimbatore",
    dates: "Coimbatore | 2 Years",
    bullets: [
      "Built responsive applications using HTML, CSS, JavaScript, jQuery, and React.",
      "Worked on 3 client projects with cross-functional teams.",
      "Focused on reusable UI components and improved code maintainability.",
    ],
  },
  {
    year: "2018 – 2019",
    role: "Frontend Development Trainee",
    company: "Hogarth Worldwide, Chennai",
    dates: "Pune | 1 Year",
    bullets: [
      "Hands-on training in HTML, CSS, JavaScript, and jQuery.",
      "Gained exposure to production-level code and development standards.",
      "Contributed to 2 live projects under mentorship.",
    ],
  },
  {
    year: "2016 – 2018",
    role: "Content Moderator & Designer",
    company: "Teleperformance, Mohali",
    dates: "Mohali | 2 Years",
    bullets: [
      "Reviewed and moderated digital content for global clients.",
      "Worked with design tools like Photoshop, Figma, and Illustrator.",
      "Developed skills in social media marketing and digital brand support.",
    ],
  },
];

export default function ExperienceSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const items = root.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section-dark py-5" ref={containerRef}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5 reveal fade-down">
          <h2 className="section-title mb-10 underline-wipe">EXPERIENCE</h2>
          <div className="section-subtitle mb-7 mt-3">WORK HISTORY</div>
        </div>

        {/* Experience grid */}
        <div className="row g-5">
          {EXPERIENCE.map((item, idx) => (
            <div className="col-12 col-md-6" key={idx}>
              <div
                className="position-relative exp-block reveal fade-up"
                style={{ "--stagger": `${idx * 80}ms` }}
              >
                <div className="year-watermark reveal scale-in">{item.year}</div>
                <div className="card bg-card  shadow-lg exp-card">
                  <div className="card-body">
                    <div className="small">{item.dates}</div>
                    <h5 className="card-title mb-0">{item.role}</h5>
                    <div className="text-accent mb-3">{item.company}</div>
                    <ul className="mb-0 ps-3">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="lh-sm">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Profiles (optional, you can customize or remove) */}
        <div className="row mt-6 align-items-start">
        <div className="col-12 col-md-5 d-flex gap-3 justify-content-center mb-4 mb-md-0 profiles-icons reveal fade-right">
  <a href="https://www.linkedin.com/in/vinothkumar-sanjeevi/" className="profile-pill linkedin">LinkedIn</a>
  <a href="https://github.com/vino994" className="profile-pill github">GitHub</a>
  <a href="https://instagram.com/yourusername" className="profile-pill instagram">Instagram</a>
 
</div>

          <div className="col-12 col-md-7 reveal fade-left">
            <div className="text-start text-md-start ">
              <h3 className="profiles-title mb-2">PROFILES</h3>
              <div className="section-subtitle mb-2">WHO AM I</div>
              <p className="mb-0 experience">
            I’m a Frontend Developer with 5+ years of experience, passionate about building responsive,
              user-friendly, and modern web applications. My expertise includes React  JavaScript, HTML, CSS, and Bootstrap, with hands-on exposure to Node.js for backend development.
              Alongside coding, I have strong skills in UI/UX design and creative tools like Photoshop, Canva, and Wix,
              helping me deliver solutions that are both functional and visually engaging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
