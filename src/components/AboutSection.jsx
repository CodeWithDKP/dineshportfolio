import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function AboutSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.2 }
    );

    // Include paragraphs, education title, and each list item
    const elements = document.querySelectorAll(
      ".about-title, .about-content p, .education-title, .education ul li"
    );

    // Add custom property --i for staggered li
    elements.forEach((el, index) => {
      if (el.tagName === "LI") {
        el.style.setProperty("--i", index);
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="about-title">About Me</h2>
            <div className="about-content">
              <p>
                I’m <span className="highlight">Dinesh Kumar</span> from Kurnool, Andhra Pradesh, a passionate
                <span className="highlight"> Frontend Developer</span>.
                I aim to deliver high-quality and efficient solutions, leveraging the latest technologies and
                <span className="highlight"> AI tools</span> to create interactive, user-friendly digital experiences.
              </p>
              <p>
                I have worked on various projects during my learning journey that challenged me to think critically,
                solve problems effectively, and apply my knowledge practically.
                I’m enthusiastic about continuing to grow as a developer, expanding into backend technologies,
                and creating impactful full-stack applications in the future.
              </p>

              <div className="education">
                <h3 className="education-title">Education</h3>
                <ul>
                  <li>
                    B.Tech in Computer Science & Engineering | Dr. KV Subba Reddy Institute of Technology
                    <span className="edu-sub">| 2022 - 2025 | 73%</span>
                  </li>
                  <li>
                    Diploma in Electrical & Electronics Engineering | Dr. KV Subba Reddy Institute of Technology
                    <span className="edu-sub">| 2019 - 2022 | 76%</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
