import { useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ import added

const experiences = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "Modern Minds",
    duration: "Jan 2025 – Present",
    description:
      "Worked on real-world client projects, building responsive websites with React, Bootstrap, and APIs. Contributed to UI/UX improvements and performance optimization.",
  },
  {
    id: 2,
    role: "Web Developer Trainee",
    company: "Software Training Institute",
    duration: "Jul 2024 – Dec 2024",
    description:
      "Trained in HTML, CSS, JavaScript, and React. Built multiple frontend projects including portfolio, travel site, and e-commerce app.",
  },
  {
    id: 3,
    role: "Digital Marketing Intern",
    company: "Kresaa Digital Services",
    duration: "2023",
    description:
      "Handled SEO, social media campaigns, and content planning. Gained experience in marketing analytics and Canva design.",
  },
];

function ExperienceSection() {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item, .experience-title");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience-section">
      <h2 className="experience-title fade-in">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"} fade-in`}
          >
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span className="duration">{exp.duration}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button to navigate Achievements page */}
      <div className="see-more-btn" style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link to="/achievements">
          <button className="btn-achievements">🎖 See Achievements & Certificates</button>
        </Link>
      </div>
    </section>
  );
}

export default ExperienceSection;
