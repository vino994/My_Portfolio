import React from "react";
import "../Styles/FloatingTextBackground.css";

const baseWords = [
  "React","JavaScript","MERN","Frontend","Backend","UI","UX","Developer",
  "HTML","CSS","Node","MongoDB","Express","API","REST","Web","Design",
  "Animation","Portfolio","Freelance","Startup","SaaS","Cloud","Firebase",
  "Vercel","Netlify","Git","GitHub","Agile","Figma","Tailwind","Bootstrap",
  "Redux","Hooks","NextJS","SEO","Performance","Accessibility","Testing",
  "Docker","DevOps","CI/CD","PWA","Responsive","Prototype","Secure",
  "Ecommerce","Dashboard","CMS","Analytics","ThreeJS","GSAP","Framer",
  "AI","Chatbot","Voice","TTS","ML","Maps","Automation"
];

// reduce density for performance + clarity
const words = Array(2).fill(baseWords).flat();

export default function FloatingTextBackground({ theme }) {
  return (
    <div className={`floating-text-container ${theme}`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="floating-text"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${40 + Math.random() * 20}s`,
            fontSize: `${8 + Math.random() * 6}px`,
            animationDelay: `${Math.random() * 10}s`
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
