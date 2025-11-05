import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import profilePic from "../assets/profile.jpg"; // <- put your pic inside /src/assets/
import resumeFile from "../assets/DineshkumarPade.pdf"; // <- put your resume PDF inside /src/assets/

function HeroSection() {
  return (
    <section className="hero-section">
      <Container fluid className="h-100 d-flex align-items-center">
        <Row className="w-100 align-items-center">
          {/* Left Side - Profile Picture */}
          <Col md={5} className="text-center">
            <div className="profile-frame">
              <Image
                src={profilePic}
                roundedCircle
                fluid
                className="profile-pic"
              />
            </div>
          </Col>

          {/* Right Side - About */}
          <Col md={7} className="hero-content text-start">
            <h1 className="hero-title">Hi, I’m Dinesh Kumar</h1>
            <p className="hero-text">
              I’m a passionate <span className="highlight">Frontend Developer | React.js Enthusiast </span>building <span className="highlight">responsive, modern web apps</span> with clean UI and smooth interactions.
              Skilled in HTML, CSS, JavaScript, Bootstrap, and React, I leverage <span className="highlight">AI-assisted coding</span> to deliver real-world projects efficiently.
              Excited to grow into <span className="highlight">full-stack development</span> and create impactful digital experiences.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3">

              <a href="#projects" onClick={() => setIsOpen(false)}><Button variant="outline-light" className="hero-btn">See Projects</Button> </a>



              <a
                href={resumeFile}
                download="Dinesh_Resume.pdf"
                className="btn btn-outline-light hero-btn"
              >
                Download Resume
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
