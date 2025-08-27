import React, { useMemo } from "react";
import { motion, useInView } from "framer-motion";
import "../Styles/Skills.css";
import profilePic from "../Assets/mine.png";
// Swap these with your logo images
import c1 from "../Assets/logo1.png";
import c2 from "../Assets/logo2.png";
import c3 from "../Assets/logo3.png";
import c4 from "../Assets/logo4.png";
import c5 from "../Assets/logo2.png";

const SKILLS = [
  { label: "Web development",  value: 90, color: "#15c2f1" },
  { label: "UI/UX design", value: 80, color: "#ff8b3d" },
  { label: "Photoshop",  value: 75, color: "#ff553d" },
  { label: "Digital marketing",   value: 70, color: "#15c2f1" },
];

function Ring({ value, color }) {
  const size = 120;
  const stroke = 10;
  const r = (size - stroke) / 2;
  const C = 2 * Math.PI * r;

  // animate from full gap to target offset
  const variants = useMemo(
    () => ({
      hidden: { strokeDashoffset: C },
      show: {
        strokeDashoffset: C * (1 - value / 100),
        transition: { duration: 1.1, ease: [0.2, 0.7, 0.2, 1] },
      },
    }),
    [C, value]
  );

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgba(255,255,255,.12)"
        strokeWidth={stroke}
      />
      {/* progress ring */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={C}
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        style={{ filter: "var(--ring-shadow)" }}
      />
      {/* percentage bubble */}
      <foreignObject
        x={size / 2 - 34}
        y={size / 2 - 24}
        width="68"
        height="48"
      >
        <div className="ring-percent">{value}%</div>
      </foreignObject>
    </svg>
  );
}

export default function SkillsClients() {

  const titleV = { hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const groupV = { hidden: {}, show: { transition: { staggerChildren: 0.1, when: "beforeChildren" } } };
  const itemV = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } };

  return (
    <section className="skills-dark py-5">
      <div className="container">
        {/* Heading */}
        <motion.div
          className="text-center mb-4"
          variants={titleV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="skills-title underline-wipe mb-4">MY SKILLS</h2>
          <div className="skills-sub">EXPERTISE</div>
        </motion.div>

        {/* Rings */}
        <motion.div
          className="row justify-content-center g-4 text-center"
          variants={groupV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {SKILLS.map((s, i) => (
            <motion.div className="col-6 col-md-3" variants={itemV} key={i}>
              <div className="skill-item">
                <Ring value={s.value} color={s.color} />
                <div className="skill-label">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Clients */}
        <motion.div
          className="text-center mt-5 mb-3"
          variants={titleV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="clients-title">CLIENTS</h3>
          <div className="skills-sub">WORKED WITH</div>
        </motion.div>

        <motion.div
          className="row justify-content-center align-items-center g-4 clients-row"
          variants={groupV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[c1, c2, c3, c4, c5].map((logo, i) => (
            <motion.div className="col-6 col-md-2 d-flex justify-content-center" variants={itemV} key={i}>
              <img src={logo} alt={`client-${i+1}`} className="client-logo" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
