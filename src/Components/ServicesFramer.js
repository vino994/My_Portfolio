import React, { useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import "../Styles/ServicesFramer.css";
import hero from "../Assets/profile1.jpeg"; // replace with your image

/** Inline brand icons (exact logos) **/
function ToolIcon({ name, size = 18 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", style: { verticalAlign: "-3px" } };

  switch (name) {
    case "React":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="12" cy="12" r="1.8" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(-60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        </svg>
      );
    case "Redux":
      return (
        <svg {...common} fill="currentColor">
          <path d="M16.6 10.7c.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1Zm-9.2 4.8c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1Zm9.2 1.1c-1.6 0-3.1-.9-3.8-2.2a9 9 0 0 1-3 .6c-.5 0-.9 0-1.4-.1 0 .2 0 .4 0 .6 0 3.3 2.7 5.9 6 5.9 2.2 0 4.2-1.2 5.2-3.1a1.2 1.2 0 1 0-2.1-1.2 3.6 3.6 0 0 1-3.1 1.5Zm-6.1-7c1.6 0 3.1.8 3.9 2.2.9-.1 1.9-.3 2.8-.7 0-.2 0-.4 0-.6 0-3.3-2.7-5.9-6-5.9-2.3 0-4.3 1.2-5.3 3.1a1.2 1.2 0 0 0 2.1 1.2 3.6 3.6 0 0 1 3.1-1.5Zm10 3.3c0-2.2-1.2-4.2-3.2-5.2a1.2 1.2 0 1 0-1.1 2.1 3.6 3.6 0 0 1 1.9 3.1c0 1.6-.8 3.1-2.2 3.9.1.5.2 1 .2 1.4 3.3 0 5.9-2.7 5.9-6.1ZM8.7 8.7c-.1-.5-.2-1-.4-1.4-3.2 0-5.9 2.7-5.9 6 0 2.2 1.2 4.2 3.1 5.2a1.2 1.2 0 1 0 1.2-2.1 3.6 3.6 0 0 1-1.5-3.1c0-1.6.9-3.1 2.2-3.8 0-.3.1-.5.3-.8Z"/>
        </svg>
      );
    case "Node.js":
      return (
        <svg {...common} fill="currentColor">
          <path d="M11.4 1.1a1.5 1.5 0 0 1 1.2 0l7.7 3.9c.5.2.7.7.7 1.2v7.7c0 .5-.3 1-.7 1.2l-7.7 3.9c-.4.2-.8.2-1.2 0L3.7 15c-.5-.3-.7-.7-.7-1.2V6.2c0-.5.3-1 .7-1.2l7.7-3.9Zm.6 4.4c-.2 0-.4.2-.4.4v8.2c0 .2.2.4.4.4 2.9 0 4.9-.2 5.8-1.3.6-.6.9-1.5.9-2.9 0-1.3-.3-2.2-.9-2.8-1-1.1-3-1.3-5.8-1.3Z"/>
        </svg>
      );
    case "Figma":
      return (
        <svg {...common} fill="currentColor">
          <path d="M10 2.5H8a2.5 2.5 0 1 0 0 5h2v-5Zm0 6H8a2.5 2.5 0 1 0 0 5h2v-5Zm0 6H9.5A2.5 2.5 0 1 0 12 17.5V15h-2Zm1.5-6A2.5 2.5 0 1 0 11.5 5H13v3.5h-1.5Zm0 1H13V15h-1.5a2.5 2.5 0 1 1 0-5ZM13 2.5h1.5a2.5 2.5 0 0 1 0 5H13v-5Z"/>
        </svg>
      );
    case "Photoshop":
      return (
        <svg {...common} fill="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="3" />
          <text x="6.5" y="15.5" fontSize="9" fontFamily="Arial" fill="#0cf">Ps</text>
        </svg>
      );
    default:
      return null;
  }
}

/** Your services, exactly as you described, with crisp HR/client-facing copy **/
const SERVICES = [
  {
    title: "UI/UX Design",
    text:
      "Designing user-friendly, modern interfaces using Figma and Photoshop, aligned with best-practice web design principles.",
    icon: "bi-vector-pen",
    tools: ["Figma", "Photoshop", "Wireframes"],
  },
  {
    title: "Creative Media & Editing",
    text:
      "Photography, AI-assisted edits, and video editing to produce high-quality visuals for web and social platforms.",
    icon: "bi-camera",
    tools: ["Photoshop", "AI", "Video"],
  },
  {
    title: "Web Development",
    text:
      "Building responsive apps and websites using React, Redux, and Node.js — from components to full-stack flows.",
    icon: "bi-code-slash",
    tools: ["React", "Redux", "Node.js"],
  },
  {
    title: "Digital Marketing & Branding",
    text:
      "Business development support with logo, poster, and banner design, plus practical marketing strategy ideas.",
    icon: "bi-megaphone",
    tools: ["Branding", "Logo", "Campaigns"],
  },
];

const fadeUp   = { hidden: { opacity: 0, y: 24 },  show: { opacity: 1, y: 0, transition: { duration: .7, ease: [.2, .7, .2, 1] } } };
const fadeDown = { hidden: { opacity: 0, y: -16 }, show: { opacity: 1, y: 0, transition: { duration: .7 } } };
const liftIn   = { hidden: { opacity: 0, y: 20, scale: .97 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: .8, ease: [.16, .84, .44, 1] } } };
const container = (delay = 0) => ({ hidden: {}, show: { transition: { delay, staggerChildren: .1, when: "beforeChildren" } } });

function StatCount({ to }) {
  const numRef = useRef(null);
  const wrapRef = useRef(null);
  const inView = useInView(wrapRef, { once: true, margin: "-20% 0px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => { if (numRef.current) numRef.current.textContent = Math.floor(v).toString(); },
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={wrapRef}>
      <span ref={numRef}>0</span>
    </span>
  );
}

export default function ServicesFramer() {
  return (
    <section className="services-dark py-5">
      <div className="container">
        {/* Heading */}
        <motion.div
          className="text-center mb-5"
          variants={fadeDown}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: .4 }}
        >
          <h2 className="services-title underline-wipe mb-4">SERVICES</h2>
          <div className="services-sub">WHAT I DO</div>
        </motion.div>

        <div className="row align-items-center g-4">
          {/* Left image stack */}
          <div className="col-12 col-lg-5 d-flex justify-content-center">
            <motion.div
              className="img-stack"
              variants={liftIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: .35 }}
            >
              <img src={hero} alt="services" className="img-fluid rounded-3 aboutImg" />
            </motion.div>
          </div>

          {/* Right 2x2 service grid */}
          <motion.div
            className="col-12 col-lg-7"
            variants={container(.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: .25 }}
          >
            <div className="row g-4">
              {SERVICES.map((s, i) => (
                <div className="col-12 col-md-6" key={i}>
                  <motion.div className="service-card" variants={fadeUp} whileHover={{ y: -4 }}>
                    <div className="service-icon"><i className={`bi ${s.icon}`} /></div>
                    <h6 className="mb-1">{s.title}</h6>
                    <p className="mb-2 small  service-info">{s.text}</p>

                    {/* Tool/logo badges */}
                    <div className="d-flex flex-wrap gap-2">
                      {s.tools.map((t, idx) => (
                        <span key={idx} className="tool-pill">
                          <ToolIcon name={t} />{t !== "React" && t !== "Redux" && t !== "Node.js" && t !== "Figma" && t !== "Photoshop" ? null : <span style={{ marginLeft: 6 }} />}
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats strip (facts based on your background) */}
      <div className="stats-strip mt-5">
        <div className="container">
          <motion.div
            className="row text-center g-4"
            variants={container(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: .4 }}
          >
            <div className="col-4 col-md-4">
              <motion.div className="stat" variants={fadeUp}>
                <span className="icon bi-briefcase" />
                <span className="num"><StatCount to={5} /></span>
                <small>Years Experience</small>
              </motion.div>
            </div>
            <div className="col-4 col-md-4">
              <motion.div className="stat" variants={fadeUp}>
                <span className="icon bi-check2-circle" />
                <span className="num"><StatCount to={7} /></span>
                <small>Projects Delivered</small>
              </motion.div>
            </div>
            <div className="col-4 col-md-4">
              <motion.div className="stat" variants={fadeUp}>
                <span className="icon bi-building" />
                <span className="num"><StatCount to={4} /></span>
                <small>Companies Worked</small>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
