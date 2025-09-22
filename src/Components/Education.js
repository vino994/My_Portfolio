import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Education.css";

const EDUCATION = [
  {
    year: "2024 – Present",
    title: "Full Stack Development (MERN) — In Progress",
    place: "Guvi – IIT Madras (Online)",
    desc: "Currently pursuing a career upskilling program focused on Full Stack Development. Learning MongoDB, Express.js, React, Node.js, REST APIs, and building real-world projects. Certification from Guvi – IIT Madras is ongoing.",
  },
  {
    year: "2016",
    title: "B.E. Computer Science — 72%",
    place: "Coimbatore Institute of Engineering and Technology, Coimbatore",
    desc: "Built strong foundation in algorithms, data structures, DBMS, operating systems, and web technologies. Completed multiple academic projects demonstrating problem-solving and practical skills.",
  },
  {
    year: "2012",
    title: "Higher Secondary (12th) — 78%",
    place: "Government Boys Higher Secondary School, Aranthangi",
    desc: "Completed Higher Secondary with a focus on Mathematics, Physics, Chemistry, and Computer Science.",
  },
  {
    year: "2010",
    title: "Secondary School (10th) — 85%",
    place: "National High School, Perumarudhur",
    desc: "Achieved strong academic performance across subjects, with consistent excellence in mathematics and science.",
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
    <section className="education-section py-5" ref={containerRef}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5 reveal fade-down">
          <h2 className="section-title underline-wipe">EDUCATION</h2>
          <div className="section-subtitle mt-2">Academic History</div>
        </div>

        {/* Education Grid */}
        <div className="row g-5">
          {EDUCATION.map((item, idx) => (
            <div className="col-12 col-md-6" key={idx}>
              <div
                className="exp-block reveal fade-up"
                style={{ "--stagger": `${idx * 120}ms` }}
              >
                <div className="year-watermark">{item.year}</div>
                <div className="card exp-card shadow-lg">
                  <div className="card-body">
                    <h5 className="card-title mb-2">{item.title}</h5>
                    <div className="card-place mb-2">{item.place}</div>
                    <p className="card-desc">{item.desc}</p>
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
  