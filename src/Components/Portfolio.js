import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Portfolio.css";

import p1 from "../Assets/project-1.PNG";
import p2 from "../Assets/project-2.PNG";
import p3 from "../Assets/project-3.PNG";
import p4 from "../Assets/project-4.PNG";
import p5 from "../Assets/jewel.PNG";
import p6 from "../Assets/project-5.PNG";
import p7 from "../Assets/project-6.PNG";
import p8 from "../Assets/project-7.PNG";
import p9 from "../Assets/hotel.PNG";

/*
  ITEMS now includes id and desc.
  desc is shown inside the overlay (so styles remain unchanged).
*/
const ITEMS = [
  { id: 1, src: p1, span: "normal", repoUrl: "https://vino994.github.io/delivery-app/", desc: "Delivery App — React, Bootstrap, cart flow" },
  { id: 2, src: p2, span: "normal", repoUrl: "https://vino994.github.io/ashvidha/", desc: "Business Landing — React site" },
  { id: 3, src: p3, span: "normal", repoUrl: "https://vino994.github.io/dhiya-social-app/", desc: "Social App — auth + posts demo" },
  { id: 4, src: p4, span: "normal", repoUrl: "https://vino994.github.io/zooapp/", desc: "Zoo Info — gallery & pages" },
  { id: 5, src: p5, span: "tall",   repoUrl: "https://vino994.github.io/Jewellery-/", desc: "Jewellery Showcase — responsive" },
  { id: 6, src: p6, span: "normal", repoUrl: "https://vino994.github.io/weather_app/", desc: "Weather App — OpenWeather API" },
  { id: 7, src: p8, span: "wide",   repoUrl: "https://vino994.github.io/construction/", desc: "Construction — business site" },
  { id: 8, src: p7, span: "normal", repoUrl: "https://vino994.github.io/staticsite/", desc: "Static Site — HTML/CSS/React" },
  { id: 9, src: p3, span: "normal", repoUrl: "https://vino994.github.io/dhiya-social-app/", desc: "Social App (alt)" },
  { id: 10, src: p9, span: "normal", repoUrl: "https://vino994.github.io/hotelbooking/", desc: "Hotel Booking — UI demo" }
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55 } }
};

export default function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const fetchRepos = async () => {
    try {
      const res = await fetch("https://api.github.com/users/vino994/repos");
      const data = await res.json();
      setRepos(data);
    } catch (err) {
      console.error("Failed to fetch repos:", err);
    }
  };

  return (
    <section className="portfolio-dark py-5" id="portfolio">
      <div className="container text-center">
        <motion.div
          className="mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="portfolio-title">PORTFOLIO</h2>
          <div className="portfolio-sub">MY WORK</div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="portfolio-frame">
          <div className="mosaic">
            {ITEMS.map((it) => (
              <motion.div
                key={it.id}
                className={`tile ${it.span}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                onClick={() => navigate(`/project/${it.id}`)}
              >
                <img src={it.src} alt={`work-${it.id}`} loading="lazy" />
                {/* overlay now shows the short description */}
                <div className="overlay"><span>{it.desc}</span></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <motion.div
          className="mt-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <button
            className="btn btn-danger px-4"
            onClick={() => {
              fetchRepos();
              setShowAll(true);
            }}
          >
            Load More
          </button>
        </motion.div>
      </div>

      {/* Extra GitHub Repos as buttons */}
      {showAll && (
        <div className="repo-list mt-5 text-center">
          <h4 className="mb-3">All GitHub Repositories</h4>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {repos.map((repo) => (
              <button
                key={repo.id}
                className="btn btn-outline-primary"
                onClick={() => window.open(repo.html_url, "_blank")}
              >
                {repo.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
