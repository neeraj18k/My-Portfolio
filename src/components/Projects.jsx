import { useState } from "react";
import "./Projects.css";

import portfolioImg from "../assets/projects/portfolio.png";
import deepfakeImg from "../assets/projects/deepfake.png";
import drsImg from "../assets/projects/drs.png";
import netflixImg from "../assets/projects/netflix.png";
import dentalImg from "../assets/projects/dental.png";

const projectsData = [
  {
    title: "Modern Portfolio Website",
    image: portfolioImg,
    description:
      "Built with React, Vite, and animated particles. Fully responsive and customizable.",
    github: "https://github.com/neeraj18k/My-Portfolio.git",
  },
  {
    title: "Deepfake Detection System",
    image: deepfakeImg,
    description:
      "An AI-powered tool that detects manipulated videos using ML classification models.",
    github: "https://github.com/yourusername/deepfake-detector",
  },
  {
    title: "Ultra DRS System",
    image: drsImg,
    description:
      "AI/ML-based decision review system for sports. Inspired by real-world frame analysis tech.",
    github: "https://github.com/neeraj18k/CRICKET-DRS-SYSTEM.git",
  },
  {
    title: "Netflix Clone (Frontend)",
    image: netflixImg,
    description:
      "Responsive frontend Netflix UI built with HTML, CSS, and JS. Trailer previews included.",
    github: "https://github.com/neeraj18k/netflix-clone.git",
  },
  {
    title: "Dental Clinic Management System",
    image: dentalImg,
    description:
      "Appointment and record management using HTML/CSS/JS frontend and PHP + phpMyAdmin backend.",
    github: "https://github.com/neeraj18k/DentalManagementSystem.git",
  },
];

function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="projects-section" data-aos="zoom-in">
      <h2>Projects</h2>
      <div className="project-cards">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => setSelected(project)}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal popup */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
            <div className="modal-buttons">
              <a href={selected.github} target="_blank" rel="noreferrer">
                🔗 GitHub
              </a>
            </div>
            <button className="close-btn" onClick={() => setSelected(null)}>
              ✖ Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
