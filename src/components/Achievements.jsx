import { FaCertificate, FaBriefcase, FaProjectDiagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Achievements() {
  const navigate = useNavigate();

  const achievements = [
    {
      id: 1,
      icon: <FaCertificate color="gold" />,
      title: "Frontend Development Course",
      subtitle: "Shraddha Edu (2025)",
    },
    {
      id: 2,
      icon: <FaBriefcase color="blue" />,
      title: "Digital Marketing Internship",
      subtitle: "Modern Minds",
    },
    {
      id: 3,
      icon: <FaProjectDiagram color="purple" />,
      title: "Freelance Digital Marketing",
      subtitle: "Social media & websites for clients",
    },
    {
      id: 4,
      icon: <FaProjectDiagram color="purple" />,
      title: "Built & Deployed 6+ Projects",
      subtitle: "TravelEase, SpiceVilla, Exam Simulator, Grocery Billing, etc.",
    },
  ];

  return (
    <div className="achievements-page">
      <h2>Achievements & Certificates</h2>
      <div className="achievements-timeline">
        {achievements.map((item) => (
          <div className="achievements-item" key={item.id}>
            <div className="achievements-icon">{item.icon}</div>
            <div className="achievements-content">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="back-btn-wrapper">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
      </div>
    </div>
  );
}

export default Achievements;
