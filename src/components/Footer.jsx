
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
  <div className="footer-text">
    <p>© 2025 Dinesh Kumar</p>
  </div>
  <div className="footer-icons">
    <a href="mailto:dineshkumarptech@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
    <a href="http://www.linkedin.com/in/dineshkumarpade" target="_blank" rel="noreferrer"><FaLinkedin /></a>
    <a href="https://github.com/CodeWithDKP" target="_blank" rel="noreferrer"><FaGithub /></a>
    <a href="https://www.instagram.com/itsdineshverse?igsh=b2kwczVqNW9rYm54" target="_blank" rel="noreferrer"><FaInstagram /></a>
  </div>
</footer>

  );
}

export default Footer;
