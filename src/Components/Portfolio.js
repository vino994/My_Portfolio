import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Portfolio.css";

import p1 from "../Assets/project-1.PNG";
import p2 from "../Assets/project-2.PNG";
import p3 from "../Assets/project-3.PNG";
import p4 from "../Assets/project-4.PNG";
import p5 from "../Assets/youtube.PNG";
import p6 from "../Assets/project-5.PNG";
import p7 from "../Assets/project-6.PNG";
import p8 from "../Assets/notepad.PNG";
import p9 from "../Assets/3.PNG";

const ITEMS = [
  { src: p1, span: "normal", repoUrl: "https://vino994.github.io/delivery-app/" },
  { src: p2, span: "normal", repoUrl: "https://vino994.github.io/ashvidha/" },
  { src: p3, span: "normal", repoUrl: "https://vino994.github.io/dhiya-social-app/" },
  { src: p4, span: "normal", repoUrl: "https://vino994.github.io/zooapp/"},
  { src: p5, span: "tall",   repoUrl: "https://github.com/vino994/Youtube-clone" },
  { src: p6, span: "normal", repoUrl: "https://vino994.github.io/weather_app/" },
  { src: p7, span: "wide",   repoUrl: "https://vino994.github.io/staticsite/" },
  { src: p8, span: "normal", repoUrl: "https://github.com/vino994/Notepad" },
  { src: p9, span: "normal", repoUrl: "https://github.com/vino994/repo9" },
  { src: p9, span: "normal", repoUrl: "https://github.com/vino994/repo10" }
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55 } }
};

export default function Portfolio() {
  // ✅ Hooks must go inside the component
  const [repos, setRepos] = useState([]);
  const [showAll, setShowAll] = useState(false);

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
    <section className="portfolio-dark py-5">
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
            {ITEMS.map((it, i) => (
              <motion.div
                key={i}
                className={`tile ${it.span}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                onClick={() => window.open(it.repoUrl, "_blank")}
              >
                <img src={it.src} alt={`work-${i}`} loading="lazy" />
                <div className="overlay"><span>View</span></div>
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

      {/* Extra GitHub Repos */}
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
