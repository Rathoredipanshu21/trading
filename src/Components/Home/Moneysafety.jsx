import React, { useState } from 'react';
import './moneysafety.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faShieldAlt, faClock, faLock, faFileAlt, faUserShield } from '@fortawesome/free-solid-svg-icons';
import vectorImage from '../Assets/safety2.png'; // Replace with your vector image path

const Moneysafety = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const dropdownItems = [
    { title: 'Secure Transactions', icon: faShieldAlt, content: 'We ensure all your transactions are encrypted and secure.' },
    { title: '24/7 Monitoring', icon: faClock, content: 'Our systems are monitored round the clock for your safety.' },
    { title: 'Fraud Protection', icon: faLock, content: 'We provide advanced fraud detection to protect your money.' },
    { title: 'Insurance Coverage', icon: faFileAlt, content: 'Your funds are insured for added peace of mind.' },
    { title: 'Data Privacy', icon: faUserShield, content: 'We prioritize your data privacy and confidentiality.' },
  ];

  return (
    <div className="moneysafety-container">
      <div className="moneysafety-left" data-aos="flip-left">
        <img src={vectorImage} alt="Money Safety" className="vector-image" />
      </div>
      <div className="moneysafety-right" data-aos="flip-right">
        <h1>Your money's safety is our top priority</h1>
        <p>Your money, our responsibility. We are committed to providing the highest level of security for your financial assets.</p>
        <div className="dropdown-list">
          {dropdownItems.map((item, index) => (
            <div key={index} className="dropdown-item">
              <div className="dropdown-header" onClick={() => toggleDropdown(index)}>
                <div className="dropdown-title">
                  <FontAwesomeIcon icon={item.icon} className="dropdown-icon" />
                  <span>{item.title}</span>
                </div>
                <FontAwesomeIcon icon={activeIndex === index ? faChevronUp : faChevronDown} />
              </div>
              {activeIndex === index && <div className="dropdown-content">{item.content}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Moneysafety;