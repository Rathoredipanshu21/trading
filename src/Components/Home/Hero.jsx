import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat, faCarCrash, faPlane, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.css';
import health from '../Assets/health.jpg';
import accident from '../Assets/accident.jpg';
import travel from '../Assets/travel.jpg';
import corporate from '../Assets/corporate.jpg';




export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [activeTab, setActiveTab] = useState("health");

  const plans = {
    health: {
      title: "Health Insurance Plans",
      description: "Comprehensive health coverage to secure you and your family.",
      image: health,
      points: [
        "Cashless hospitalization at top hospitals.",
        "Pre and post hospitalization expenses covered.",
        "No-claim bonus benefits."
      ]
    },
    accident: {
      title: "Accident Insurance Plans",
      description: "Financial protection against accidental injuries.",
      image: accident,
      points: [
        "Coverage for accidental hospitalization.",
        "Permanent disability compensation.",
        "Accidental death benefits."
      ]
    },
    travel: {
      title: "Travel Insurance Plans",
      description: "Stay covered during your journeys worldwide.",
      image: travel,
      points: [
        "Medical assistance while traveling.",
        "Trip cancellation coverage.",
        "Lost baggage protection."
      ]
    },
    corporate: {
      title: "Corporate Insurance Plans",
      description: "Group health insurance for employees and businesses.",
      image: corporate,
      points: [
        "Customizable group health policies.",
        "Employee wellness benefits.",
        "Tax saving advantages."
      ]
    }
  };

  return (
    <div className="hero-container" style={{ backgroundColor: "#f5f5f5", scrollBehavior: "smooth" }}>
     
      <div data-aos="fade-right">
        <div className="shadow-radius" style={{ padding: "10px", borderRadius: "10px", width: "100%", margin: "0 auto" }}>
        <div className="tab-buttons">
          <button onClick={() => setActiveTab("health")} className={activeTab === "health" ? "active" : ""}>
            <FontAwesomeIcon icon={faHeartbeat} /> Health
          </button>
          <button onClick={() => setActiveTab("accident")} className={activeTab === "accident" ? "active" : ""}>
            <FontAwesomeIcon icon={faCarCrash} /> Accident
          </button>
          <button onClick={() => setActiveTab("travel")} className={activeTab === "travel" ? "active" : ""}>
            <FontAwesomeIcon icon={faPlane} /> Travel
          </button>
          <button onClick={() => setActiveTab("corporate")} className={activeTab === "corporate" ? "active" : ""}>
            <FontAwesomeIcon icon={faBriefcase} /> Corporate
          </button>
        </div>
        </div>
      </div>

      {/* Content Display */}
      <div className="content-container" data-aos="fade-left">
        <img src={plans[activeTab].image} alt={plans[activeTab].title} className="content-image" />
        <div className="content-text">
          <h2>{plans[activeTab].title}</h2>
          <p>{plans[activeTab].description}</p>
          <ul>
            {plans[activeTab].points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}