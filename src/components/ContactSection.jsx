
import  { useEffect, useRef } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


function ContactSection() {
  const sectionRef = useRef(null);

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

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-left animate-item">
        <h2 className="contact-title">Contact Me</h2>
        <p>Let's build something amazing together!</p>
        <ul className="contact-info">
          <li>
            <FaEnvelope /> <a href="mailto:youremail@gmail.com">youremail@gmail.com</a>
          </li>
          <li>
            <FaLinkedin /> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">linkedin.com/in/yourprofile</a>
          </li>
          <li>
            <FaGithub /> <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">github.com/yourgithub</a>
          </li>
          <li>
            <FaInstagram /> <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer">instagram.com/yourprofile</a>
          </li>
        </ul>
      </div>

      <div className="contact-right animate-item">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
