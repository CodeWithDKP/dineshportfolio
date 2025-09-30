import { useEffect, useRef, useState } from "react";

const skillsData = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
  backend: ["Java", "APIs"],
  tools: ["GitHub", "Canva", "VS Code", "Postman"],
};

function SkillsSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="skills-section" ref={sectionRef}>
      <h2 className={`skills-title ${visible ? "fade-in" : ""}`}>My Skills</h2>

      {Object.entries(skillsData).map(([category, skills], idx) => (
        <div key={idx}>
          <h3 className={`skills-category ${visible ? "fade-in" : ""}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h3>

          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div
                key={i}
                className={`skill-card ${visible ? "fade-up" : ""}`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default SkillsSection;
