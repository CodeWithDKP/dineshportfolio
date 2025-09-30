import { useState, useEffect } from "react";
import travelEase from '../assets/travelEase.png';
import buyStic from '../assets/buystic.png';
import FlipkartClone from '../assets/FlipkartClone.png';

const projects = [
  {
    id: 1,
    title: "TravelEase ",
    shortDesc: "A modern travel website built with HTML, CSS, and Bootstrap.",
    image: travelEase,
    liveLink: "https://travel-ease-iota.vercel.app/index.html",
    github: "https://github.com/CodeWithDKP/travelEase.git",
    details: `
      TravelEase is a modern, responsive travel website built using HTML, CSS, and Bootstrap.
      It showcases top travel destinations, packages, and more.

      Features:
      - Hero section with autoplay video
      - Bootstrap carousel
      - Booking Forms
      - Destination details with modals
      - Responsive design

      🛠 Tech Stack: HTML5, CSS3, Bootstrap 5.3
      📌 Author: Dinesh Kumar Pade (Kurnool, India)
    `,
  },
  {
    id: 2,
    title: "Buystic",
    shortDesc: "React-based eCommerce web app with cart and orders.",
    image: buyStic,
    liveLink: "https://buystic.vercel.app/",
    github: "https://github.com/CodeWithDKP/Buystic.git",
    details: `BuyStic is a responsive e-commerce web application designed to provide a smooth online shopping experience with essential real-world features.

Features:
- Product listing with images and details
- Add-to-cart functionality with real-time updates
- Search and filter functionality
- Cart page displaying selected items and total
- Admin dashboard to manage products
- Users can place orders and login (without backend, using local state)
- Products fetched dynamically from APIs
- State sharing handled using prop drilling
- Fully responsive layout across devices

🛠 Tech Stack: React.js, CSS, Bootstrap, APIs
📌 Author: Dinesh Kumar Pade (Kurnool, India)`,
  },
  {
    id: 3,
    title: "FlipkartClone",
    shortDesc: "A Flipkart-inspired e-commerce clone built with React and Context API.",
    image: FlipkartClone,
    liveLink: "https://flipkart-clone-zrc9.vercel.app/",
    github: "https://github.com/CodeWithDKP/FlipkartClone.git",
    details: `FlipkartClone is a responsive e-commerce application replicating core shopping features of Flipkart.

Features:
- Product listing with categories
- Add-to-cart and remove-from-cart options
- Dynamic product details page
- Real-time cart updates
- Responsive layout for desktop and mobile
- Context API used for global state management (avoiding prop drilling)

🛠 Tech Stack: React.js, CSS3, JavaScript
📌 Author: Dinesh Kumar Pade (Kurnool, India)`,
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
              className={`project-card ${index % 3 === 0 ? "fade-left" : index % 3 === 1 ? "fade-up" : "fade-right"
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
              <a href={activeProject.github} target="_blank" rel="noreferrer" className="btn-project">Github</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsSection;
