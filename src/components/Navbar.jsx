import { useState } from "react";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Portfolio Name on Left */}
      <div className="logo">MyPortfolio</div>

      {/* Hamburger Toggle (only for mobile, CSS hides on desktop) */}
      <button 
        className="menu-btn" 
        onClick={() => setIsOpen(!isOpen)} 
        aria-label="Toggle Menu"
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
        
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        

      </ul>
    </nav>
  );
}

export default Navbar;
