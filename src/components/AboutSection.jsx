// src/components/AboutSection.jsx
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function AboutSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // run only once
          }
        });
      },
      { threshold: 0.2 } // trigger when 20% visible
    );

    const elements = document.querySelectorAll(".about-title, .about-content p");
    elements.forEach((el) => observer.observe(el));

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
                Hello! I’m <span className="highlight">Dinesh</span>, a passionate developer with a strong foundation 
                in <span className="highlight">frontend development</span>. I enjoy creating responsive and modern 
                websites using <span className="highlight">HTML, CSS, JavaScript, React, and Bootstrap</span>.
              </p>
              <p>
                💡 <strong>Passion:</strong> Love building real-world applications with a focus on clean UI/UX.
              </p>
              <p>
                🎯 <strong>Current Goal:</strong> Looking for opportunities as a{" "}
                <span className="highlight">Frontend / React Developer in 2025</span>.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
