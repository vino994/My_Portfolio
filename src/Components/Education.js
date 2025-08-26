import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Education.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const timelineData = [
    {
      year: "2016",
      title: "B.E. Computer Science — 72%",
      place: "Coimbatore Institute of Engineering and Technology, Coimbatore",
      desc: "Graduated in 2016. Foundation in algorithms, data structures, DBMS, operating systems, and web technologies; completed multiple project builds.",
      align: "right",
    },
    {
      year: "2012",
      title: "Higher Secondary (12th) — 78%",
      place: "Government Boys Higher Secondary School, Aranthangi",
      desc: "Completed HSC (2010–2012) with focus on Mathematics, Physics, Chemistry, and Computer Science.",
      align: "left",
    },
    {
      year: "2010",
      title: "Secondary School (10th) — 85%",
      place: "National High School, Perumarudhur",
      desc: "Completed SSLC in 2010 with strong overall performance.",
      align: "right",
    },
  ];

  return (
    <section className="education-section py-5 text-white">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">
          EDUCATION <span className="text-danger">HISTORY</span>
        </h2>

        <div className="timeline position-relative">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item d-flex justify-content-${
                item.align === "left" ? "start" : "end"
              }`}
              data-aos={item.align === "left" ? "fade-right" : "fade-left"}
            >
              <div className="timeline-content p-3">
                <h4 className="fw-bold mb-1">{item.title}</h4>
                <h6 className="text-danger mb-2">{item.place}</h6>
                <p className="text-white mb-0">{item.desc}</p>
              </div>
              <div className="timeline-year">{item.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
