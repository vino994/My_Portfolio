import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Education.css";

const EDUCATION = [
  {
    year: "2023",
    title: "Full Stack Development Certification — GUVI (IIT-M Incubated)",
    place: "GUVI — IIT Madras",
    desc: "Completed intensive 6-month certification program covering React.js, Node.js, Express.js, MongoDB with hands-on projects.",
    type: "certification"
  },
  {
    year: "2016",
    title: "Bachelor of Engineering — Computer Science (GPA: 7.5)",
    place: "Coimbatore Institute of Engineering and Technology, Coimbatore",
    desc: "Strong foundation in algorithms, data structures, DBMS, operating systems, and web technologies.",
    type: "degree"
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
      {/* Smoke Effects */}
      <div className="smoke-container">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className={`smoke smoke-${i % 5 + 1}`}
            style={{
              left: `${(i * 7) % 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${15 + (i % 10)}s`
            }}
          />
        ))}
      </div>
      
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5 reveal fade-down">
          <h2 className="section-title underline-wipe">EDUCATION & CERTIFICATIONS</h2>
          <div className="section-subtitle">Academic & Professional Qualifications</div>
        </div>

        {/* 🎯 Highlight Cards (only top 2) */}
        <div className="row g-4 mb-5">
          {EDUCATION.map((item, idx) => (
            <div className="col-12 col-md-6" key={idx}>
              <div className={`highlight-card shadow-lg reveal fade-up ${item.type}`}>
                <div className="highlight-year">{item.year}</div>
                <h5 className="highlight-title">{item.title}</h5>
                <div className="highlight-place">{item.place}</div>
                <p className="highlight-desc">{item.desc}</p>
                {item.type === "certification" && (
                  <div className="cert-badge">Professional Certification</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline (all items) */}
        <div className="timeline">
          {EDUCATION.map((item, idx) => (
            <div
              key={idx}
              className={`timeline-item ${idx % 2 === 0 ? "left" : "right"} reveal fade-up`}
              style={{ "--stagger": `${idx * 100}ms` }}
            >
              <div className={`timeline-dot ${item.type === "certification" ? "cert-dot" : ""}`}></div>
              <div className="timeline-content shadow-sm">
                <div className="timeline-year">{item.year}</div>
                <h5>{item.title}</h5>
                <div className="text-accent">{item.place}</div>
                <p>{item.desc}</p>
                {item.type === "certification" && (
                  <div className="mt-2">
                    <span className="badge bg-success">6-Month Intensive Program</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}