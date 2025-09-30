import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function ContactSection() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // success / error message

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = sectionRef.current.querySelectorAll(".animate-item");
    elements.forEach((el) => observer.observe(el));
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyf-YHOj68k328nXWEWyUUzcgu5Bv40KbS3ZYS8FducvZxgYg5mmxde3SXvzA0KEhY7/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // reset form
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("⚠️ Something went wrong. Try again later.");
    }
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-left animate-item">
        <h2 className="contact-title">Contact Me</h2>
        <p>Let's build something amazing together!</p>
        <ul className="contact-info">
          <li>
            <FaEnvelope />{" "}
            <a href="mailto:dineshkumarptech@gmail.com">
              dineshkumarptech@gmail.com
            </a>
          </li>
          <li>
            <FaLinkedin />{" "}
            <a
              href="http://www.linkedin.com/in/dineshkumarpade"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/dineshkumarpade
            </a>
          </li>
          <li>
            <FaGithub />{" "}
            <a
              href="https://github.com/CodeWithDKP"
              target="_blank"
              rel="noreferrer"
            >
              github.com/CodeWithDKP
            </a>
          </li>
          <li>
            <FaInstagram />{" "}
            <a
              href="https://www.instagram.com/itsdineshverse?igsh=b2kwczVqNW9rYm54"
              target="_blank"
              rel="noreferrer"
            >
              instagram.com/itsdineshverse
            </a>
          </li>
        </ul>
      </div>

      <div className="contact-right animate-item">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Status Message */}
        {status && <p className="form-status">{status}</p>}
      </div>
    </section>
  );
}

export default ContactSection;
