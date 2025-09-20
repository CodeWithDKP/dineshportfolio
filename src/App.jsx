import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

// Wrapper to use useLocation
function AppWrapper() {
  const location = useLocation();
  const hideNavbarPaths = ["/achievements"]; // paths where navbar is hidden
  const showNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />} {/* Navbar shows only if not in hide paths */}
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="hero"><HeroSection /></section>
              <section id="about"><AboutSection /></section>
              <section id="skills"><SkillsSection /></section>
              <section id="projects"><ProjectsSection /></section>
              <section id="experience"><ExperienceSection /></section>
              <section id="contact"><ContactSection /></section>
            </>
          }
        />

        <Route path="/achievements" element={<Achievements />} />
      </Routes>

      <Footer /> {/* Footer always visible */}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <AppWrapper />
      </div>
    </Router>
  );
}

export default App;
