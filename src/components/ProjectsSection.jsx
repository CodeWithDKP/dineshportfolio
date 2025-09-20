import { useState, useEffect } from "react";
import travelEase from '../assets/travelEase.png';
import buyStic from '../assets/buystic.png';

const projects = [
  {
    id: 1,
    title: "TravelEase 🌍✈️",
    shortDesc: "A modern travel website built with HTML, CSS, and Bootstrap.",
    image: travelEase,
    liveLink: "https://travel-ease-iota.vercel.app/index.html",
    demoVideo: "http://www.linkedin.com/in/dineshkumarpade",
    details: `
      TravelEase is a modern, responsive travel website built using HTML, CSS, and Bootstrap.
      It showcases top travel destinations, packages, testimonials, and more.

      🚀 Features:
      - Hero section with autoplay video
      - Bootstrap carousel
      - 3D interactive globe (Three.js)
      - Destination details with modals
      - Responsive design

      🛠 Tech Stack: HTML5, CSS3, Bootstrap 5.3
      📌 Author: Dinesh Kumar Pade (Kurnool, India)
    `,
  },
  {
    id: 2,
    title: "E-Commerce App 🛒",
    shortDesc: "React-based eCommerce web app with cart and orders.",
    image: buyStic,
    liveLink: "#",
    demoVideo: "#",
    details: "...",
  },
  {
    id: 3,
    title: "Climate App 🌦",
    shortDesc: "React weather app using APIs for real-time data.",
    image: "https://via.placeholder.com/400x250?text=Climate+App",
    liveLink: "#",
    demoVideo: "#",
    details: "...",
  },
];


function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // Run only once
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".projects-title, .project-card");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>

      <div className={`projects-grid-wrapper ${activeProject ? "hide-grid" : "show-grid"}`}>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${
                index % 3 === 0 ? "fade-left" : index % 3 === 1 ? "fade-up" : "fade-right"
              }`}
            >
              <img src={project.image} alt={project.title} className="project-img" />
              <h3 className="project-name">{project.title}</h3>
              <p className="project-short">{project.shortDesc}</p>
              <div className="project-buttons">
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn-project">
                  Live Demo
                </a>
                <button className="btn-project" onClick={() => setActiveProject(project)}>
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="project-detail-wrapper show-detail">
          <div className="project-popup-content">
            <button className="popup-close" onClick={() => setActiveProject(null)}>✖</button>
            <h2>{activeProject.title}</h2>
            <p className="project-detail">{activeProject.details}</p>
            <div className="popup-buttons">
              <a href={activeProject.liveLink} target="_blank" rel="noreferrer" className="btn-project">Live Demo</a>
              <a href={activeProject.demoVideo} target="_blank" rel="noreferrer" className="btn-project">Demo Video</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsSection;
