// src/Components/ProjectViewer.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import p1 from "../Assets/project-1.PNG";
import p2 from "../Assets/project-2.PNG";
import p3 from "../Assets/project-3.PNG";
import p4 from "../Assets/project-4.PNG";
import p5 from "../Assets/jewel.PNG";
import p6 from "../Assets/project-5.PNG";
import p7 from "../Assets/project-6.PNG";
import p8 from "../Assets/project-7.PNG";
import p9 from "../Assets/hotel.PNG";

const ITEMS = [
  { id: 1, src: p1, repoUrl: "https://vino994.github.io/delivery-app/", desc: "Delivery App — React + Bootstrap, cart flow demo" },
  { id: 2, src: p2, repoUrl: "https://vino994.github.io/ashvidha/", desc: "Business Landing Page — modern React design" },
  { id: 3, src: p3, repoUrl: "https://vino994.github.io/dhiya-social-app/", desc: "Social App — authentication + posts feed" },
  { id: 4, src: p4, repoUrl: "https://vino994.github.io/zooapp/", desc: "Zoo Info — gallery of animals, responsive" },
  { id: 5, src: p5, repoUrl: "https://vino994.github.io/Jewellery-/", desc: "Jewellery Showcase — elegant product display" },
  { id: 6, src: p6, repoUrl: "https://vino994.github.io/weather_app/", desc: "Weather App — React Hooks + OpenWeather API" },
  { id: 7, src: p8, repoUrl: "https://vino994.github.io/construction/", desc: "Construction Website — responsive React site" },
  { id: 8, src: p7, repoUrl: "https://vino994.github.io/staticsite/", desc: "Static Site — HTML/CSS/React" },
  { id: 9, src: p3, repoUrl: "https://vino994.github.io/dhiya-social-app/", desc: "Social App (alt) — same demo with tweaks" },
  { id: 10, src: p9, repoUrl: "https://vino994.github.io/hotelbooking/", desc: "Hotel Booking — UI demo for booking system" }
];

export default function ProjectViewer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = ITEMS.find((it) => String(it.id) === id);

  if (!project) {
    return (
      <div className="container text-center py-5">
        <h3>⚠️ Project not found</h3>
        <button className="btn btn-danger mt-3" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className="project-viewer" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header bar */}
      <div style={{ padding: "10px", background: "#111", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button className="btn btn-danger" onClick={() => navigate(-1)}>← Back</button>
        <span style={{ fontWeight: 600 }}>Project {project.id}</span>
        <a href={project.repoUrl} className="btn btn-outline-light" target="_blank" rel="noreferrer">
          Open in new tab
        </a>
      </div>

      {/* Project Info */}
      <div className="container py-4 text-center">
        <img src={project.src} alt={`Project ${project.id}`} className="img-fluid rounded shadow mb-3" style={{ maxHeight: "300px", objectFit: "cover" }} />
        <p className="lead">{project.desc}</p>
      </div>

      {/* Iframe viewer */}
      <div style={{ flex: 1, borderTop: "1px solid #333" }}>
        <iframe
          src={project.repoUrl}
          title={`Project ${project.id}`}
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </div>
    </div>
  );
}
