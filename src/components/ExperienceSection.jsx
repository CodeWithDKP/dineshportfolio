import { useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ import added

const experiences = [
  {
    id: 1,
    role: "Digital Marketing Intern",
    company: "Modern Minds",
    duration: "Jun 2025 - Aug 2025",
    description:
      "Reported to Sujith Madhav, Co-Founder. Assisted in creating and scheduling social media content, conducting market research, analyzing competitor strategies, supporting ad marketing campaigns, and monitoring digital marketing metrics. Contributed to enhancing brand presence, executing marketing strategies, and supporting website promotion initiatives."
  },
  {
    id: 2,
    role: "Freelance Web Developer",
    company: "Kresaa",
    duration: "Jun 2025 - Aug 2025",
    description:
      "Built responsive websites for clients using WordPress, integrating design and functionality without manually writing code. Collaborated with clients to meet requirements and ensure professional UX/UI."

  },
  {
    id: 3,
    role: "Update Soon",
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
