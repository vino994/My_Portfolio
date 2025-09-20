import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Education.css";

const EDUCATION = [
{
  year: "2024 – Present",
  title: "Full Stack Development (MERN) — In Progress",
  place: "Guvi – IIT Madras, Online",
  desc: "Currently enrolled in a career upskilling program focused on Full Stack Development. Learning MERN stack (MongoDB, Express.js, React, Node.js), REST APIs, and deploying real-world projects. Certification from Guvi – IIT Madras is in progress.",
},
  {
    year: "2016",
    title: "B.E. Computer Science — 72%",
    place:
      "Coimbatore Institute of Engineering and Technology, Coimbatore",
    desc: "Graduated in 2016. Strong foundation in algorithms, data structures, DBMS, operating systems, and web technologies; completed multiple project builds.",
  },
  {
    year: "2012",
    title: "Higher Secondary (12th) — 78%",
    place: "Government Boys Higher Secondary School, Aranthangi",
    desc: "Completed HSC (2010–2012) with focus on Mathematics, Physics, Chemistry, and Computer Science.",
  },
  {
    year: "2010",
    title: "Secondary School (10th) — 85%",
    place: "National High School, Perumarudhur",
    desc: "Completed SSLC in 2010 with strong academic performance across all subjects.",
  },
];

export default function Education() {
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
          <h2 className="section-title mb-10 underline-wipe">
            EDUCATION
          </h2>
          <div className="section-subtitle mb-7 mt-3">
            ACADEMIC HISTORY
          </div>
        </div>

        {/* Education Grid */}
        <div className="row g-5">
          {EDUCATION.map((item, idx) => (
            <div className="col-12 col-md-6" key={idx}>
              <div
                className="position-relative exp-block reveal fade-up"
                style={{ "--stagger": `${idx * 80}ms` }}
              >
                <div className="year-watermark reveal scale-in">
                  {item.year}
                </div>
                <div className="card bg-card shadow-lg exp-card">
                  <div className="card-body">
                    <h5 className="card-title mb-1">{item.title}</h5>
                    <div className="text-accent mb-2">{item.place}</div>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
