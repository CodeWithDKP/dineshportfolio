
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
  <div className="footer-text">
    <p>© 2025 Dinesh Kumar</p>
  </div>
  <div className="footer-icons">
    <a href="mailto:youremail@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer"><FaLinkedin /></a>
    <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer"><FaGithub /></a>
    <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer"><FaInstagram /></a>
  </div>
</footer>

  );
}

export default Footer;
