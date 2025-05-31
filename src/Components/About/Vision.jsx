import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaLightbulb, FaCogs, FaUserTie, FaGlobe, FaBalanceScale, FaAward } from "react-icons/fa";
import "./Vision.css";

const Vision = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const sections = [
    {
      title: "About Seven Financials",
      icon: <FaLightbulb />,
      content: `At Seven Financials, we're redefining the investment landscape with our innovative approach to scalable investing. Founded in [year], our company has quickly emerged as a leader in the industry, known for our commitment to democratizing investing and delivering superior results for our clients.`,
    },
    {
      title: "Our Vision",
      icon: <FaUserTie />,
      content: `Our vision at Seven Financials is simple yet ambitious: to make investing accessible to everyone, regardless of their wealth or background. We believe that everyone deserves the opportunity to achieve their financial goals and secure their future through smart, strategic investment decisions.`,
    },
    {
      title: "The Scalable Investing Model",
      icon: <FaCogs />,
      content: `At the heart of our success lies our scalable investing model, a revolutionary approach that combines cutting-edge technology with our expertise to manage portfolios of any size efficiently. By leveraging advanced algorithms, machine learning, and data analytics, we're able to automate key aspects of the investment process, reduce costs, and enhance the scalability of our operations.`,
    },
    {
      title: "Personalized Solutions",
      icon: <FaGlobe />,
      content: `Central to our scalable investing model is our commitment to providing personalized solutions for each of our clients. Whether you're an individual investor looking to grow your wealth or an institutional client seeking sophisticated investment strategies, we'll work closely with you to develop a customized investment plan tailored to your unique financial objectives, risk tolerance, and time horizon.`,
    },
    {
      title: "Adaptability and Flexibility",
      icon: <FaBalanceScale />,
      content: `One of the key advantages of our scalable investing model is its adaptability and flexibility. In today's fast-paced market environment, it's essential to be able to react quickly to changing conditions and seize opportunities for growth. Our model allows us to do just that, enabling us to adjust our investment strategies in real-time based on market trends, economic indicators, and client preferences.`,
    },
    {
      title: "Diversification and Risk Management",
      icon: <FaAward />,
      content: `We understand the importance of diversification and risk management in building a resilient investment portfolio. That's why our scalable investing model emphasizes diversification across asset classes, sectors, and geographies. By spreading risk and exposure, we're able to mitigate downside risk while maximizing potential returns for our clients.`,
    },
  ];

  return (
    <div className="vision-container">
      <div className="animated-line"></div>
      <h1 className="vision-heading">Our Vision</h1>
      {sections.map((section, index) => (
        <div key={index} className="vision-section">
          <div className="vision-header" onClick={() => toggleDropdown(index)}>
            <div className="vision-title">
              {section.icon}
              <h2>{section.title}</h2>
            </div>
            {activeDropdown === index ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {activeDropdown === index && <p className="vision-content">{section.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default Vision;