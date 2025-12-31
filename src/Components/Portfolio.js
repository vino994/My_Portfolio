import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Portfolio.css";

import p1 from "../Assets/project-1.PNG";
import p2 from "../Assets/project-2.PNG";
import p3 from "../Assets/recipe.PNG";
import p4 from "../Assets/movie.PNG";
import p5 from "../Assets/jewel.PNG";
import p6 from "../Assets/expense.png";
import p7 from "../Assets/static.PNG";
import p8 from "../Assets/project-7.PNG";
import p9 from "../Assets/hotel.PNG";

/* ================= PORTFOLIO DATA WITH CATEGORIES ================= */
const ITEMS = [
  // HTML, CSS & JavaScript Projects
  {
    id: "static",
    src: p7,
    title: "Static Website",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "html-css-js",
    liveUrl: "https://vino994.github.io/Html-Css-Landingpage/",
    codeUrl: "https://github.com/vino994/Html-Css-Landingpage"
  },
  
  // React & Tailwind Projects
  {
    id: "delivery",
    src: p1,
    title: "Delivery App",
    tags: ["React", "Bootstrap"],
    category: "react-tailwind",
    liveUrl: "https://vino994.github.io/delivery-app/",
    codeUrl: "https://github.com/vino994/delivery-app"
  },
  {
    id: "business",
    src: p2,
    title: "Business Landing",
    tags: ["React", "UI/UX"],
    category: "react-tailwind",
    liveUrl: "https://vino994.github.io/ashvidha/",
    codeUrl: "https://github.com/vino994/ashvidha"
  },
  {
    id: "recipe",
    src: p3,
    title: "Recipe App",
    tags: ["React", "API"],
    category: "react-tailwind",
    liveUrl: "https://j-recipe-app.vercel.app/",
    codeUrl: "https://github.com/vino994/j-recipe-app"
  },
  {
    id: "movie",
    src: p4,
    title: "Movie App",
    tags: ["React"],
    category: "react-tailwind",
    liveUrl: "https://j-movie-app.vercel.app",
    codeUrl: "https://github.com/vino994/J-Movie-App"
  },
  {
    id: "jewel",
    src: p5,
    title: "Jewellery Showcase",
    tags: ["Responsive", "UI/UX"],
    category: "react-tailwind",
    liveUrl: "https://vino994.github.io/Jewellery-/",
    codeUrl: "https://github.com/vino994/Jewellery-"
  },
  {
    id: "construction",
    src: p8,
    title: "Construction Website",
    tags: ["React"],
    category: "react-tailwind",
    liveUrl: "https://vino994.github.io/construction/",
    codeUrl: "https://github.com/vino994/construction"
  },
  {
    id: "hotel",
    src: p9,
    title: "Hotel Booking",
    tags: ["React", "UI/UX"],
    category: "react-tailwind",
    liveUrl: "https://vino994.github.io/hotelbooking/",
    codeUrl: "https://github.com/vino994/hotelbooking"
  },
  
  // MERN Stack Projects
  {
    id: "expenses",
    src: p6,
    title: "Personal Finance Manager",
    tags: ["MERN", "Full Stack", "Authentication"],
    category: "mern-stack",
    liveUrl: "https://personal-expenses-app-chi.vercel.app/",
    codeUrl: "https://github.com/vino994/personal-expenses-app"
  }
];

/* ================= CATEGORIES ================= */
const CATEGORIES = [
  { id: "all", name: "All Projects", count: ITEMS.length, color: "#666" },
  { id: "html-css-js", name: "HTML/CSS & JS", count: ITEMS.filter(item => item.category === "html-css-js").length, color: "#e74c3c" },
  { id: "react-tailwind", name: "React & Tailwind", count: ITEMS.filter(item => item.category === "react-tailwind").length, color: "#3498db" },
  { id: "mern-stack", name: "MERN Stack", count: ITEMS.filter(item => item.category === "mern-stack").length, color: "#2ecc71" }
];

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.3 } }
};

/* ================= COMPONENT ================= */
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Filter projects based on active category
  const filteredProjects = activeCategory === "all" 
    ? ITEMS 
    : ITEMS.filter(item => item.category === activeCategory);

  // Show only 6 items initially, or all if showAll is true
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section className="portfolio-dark py-5" id="portfolio">
      <div className="container">
        {/* Title */}
        <motion.div
          className="text-center mb-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="portfolio-title">PORTFOLIO</h2>
          <div className="portfolio-sub">MY RECENT WORK</div>
          <p className="text-muted mt-3" style={{ maxWidth: "600px", margin: "0 auto" }}>
            A collection of projects showcasing my skills across different technologies
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="row justify-content-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="col-12">
            <div className="category-tabs d-flex flex-wrap justify-content-center gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  className={`category-tab ${activeCategory === cat.id ? "active" : ""}`}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setShowAll(false);
                  }}
                  style={{
                    borderColor: cat.color
                  }}
                >
                  <span className="tab-name">{cat.name}</span>
                  <span className="tab-count" style={{ background: cat.color }}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Count */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="text-light mb-0">
                Showing <span className="fw-bold">{visibleProjects.length}</span> of{" "}
                <span className="fw-bold">{filteredProjects.length}</span> projects
              </h6>
              <div className="d-flex align-items-center gap-2">
                <div className="d-flex gap-1">
                  <span className="category-dot" style={{ background: "#e74c3c" }}></span>
                  <small className="text-muted">HTML/CSS</small>
                </div>
                <div className="d-flex gap-1">
                  <span className="category-dot" style={{ background: "#3498db" }}></span>
                  <small className="text-muted">React</small>
                </div>
                <div className="d-flex gap-1">
                  <span className="category-dot" style={{ background: "#2ecc71" }}></span>
                  <small className="text-muted">MERN</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          <AnimatePresence mode="wait">
            {visibleProjects.length > 0 ? (
              visibleProjects.map(item => (
                <motion.div
                  key={item.id}
                  className="col-12 col-sm-6 col-lg-4"
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  layout
                >
                  <article className="portfolio-card h-100">
                    {/* Category Indicator */}
                    <div 
                      className="category-indicator"
                      style={{ 
                        background: CATEGORIES.find(cat => cat.id === item.category)?.color 
                      }}
                    ></div>
                    
                    <div className="portfolio-img-container">
                      <img src={item.src} alt={item.title} className="portfolio-img" />
                      <div className="portfolio-overlay">
                        <span 
                          className="category-badge"
                          style={{ 
                            background: CATEGORIES.find(cat => cat.id === item.category)?.color 
                          }}
                        >
                          {item.category === "html-css-js" ? "HTML/CSS" : 
                           item.category === "react-tailwind" ? "React" : "MERN"}
                        </span>
                      </div>
                    </div>

                    <div className="portfolio-body">
                      <h5 className="portfolio-name">{item.title}</h5>

                      <div className="portfolio-tags mb-3">
                        {item.tags.map((tag, i) => (
                          <span key={i} className="tag-badge">{tag}</span>
                        ))}
                      </div>

                      <div className="d-flex gap-2">
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-sm btn-danger flex-grow-1"
                        >
                          <i className="bi bi-play-circle me-1"></i> Live
                        </a>

                        <a
                          href={item.codeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-sm btn-outline-light"
                        >
                          <i className="bi bi-code me-1"></i> Code
                        </a>
                      </div>
                    </div>
                  </article>
                </motion.div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <div className="empty-state">
                  <i className="bi bi-folder-x" style={{ fontSize: '3rem', color: '#666' }}></i>
                  <h5 className="mt-3 text-light">No projects found</h5>
                  <p className="text-muted">Try selecting a different category</p>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Load More / Show Less Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            className="text-center mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {!showAll ? (
              <button
                className="btn btn-outline-light px-4 py-2"
                onClick={() => setShowAll(true)}
              >
                <i className="bi bi-arrow-down-circle me-2"></i>
                Load More ({filteredProjects.length - 6} more)
              </button>
            ) : (
              <button
                className="btn btn-outline-light px-4 py-2"
                onClick={() => {
                  setShowAll(false);
                  window.scrollTo({
                    top: document.getElementById("portfolio").offsetTop - 100,
                    behavior: "smooth"
                  });
                }}
              >
                <i className="bi bi-arrow-up-circle me-2"></i>
                Show Less
              </button>
            )}
          </motion.div>
        )}

        {/* Categories Summary */}
        <motion.div 
          className="mt-5 pt-4 border-top border-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h6 className="text-center mb-4 text-light">PROJECTS BY TECHNOLOGY</h6>
          <div className="row">
            {CATEGORIES.filter(cat => cat.id !== 'all').map(category => (
              <div key={category.id} className="col-md-4 mb-3">
                <div className="tech-card">
                  <div className="tech-icon" style={{ background: category.color }}>
                    {category.id === "html-css-js" ? (
                      <i className="bi bi-filetype-html"></i>
                    ) : category.id === "react-tailwind" ? (
                      <i className="bi bi-react"></i>
                    ) : (
                      <i className="bi bi-stack"></i>
                    )}
                  </div>
                  <div>
                    <h6 className="mb-1 text-light">{category.name}</h6>
                    <p className="text-muted small mb-0">
                      {category.count} project{category.count !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}