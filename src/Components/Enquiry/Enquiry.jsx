import React from 'react';
import './Enquiry.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Enquiry = () => {
  return (
    <div className="enquiry-container">
      <header className="enquiry-header">
        <h1>Contact Us</h1>
        <p>We are here to assist you with any finance, insurance, life, or health-related enquiries.</p>
      </header>
      <div className="enquiry-content">
        <div className="enquiry-info">
          <h2>Get in Touch</h2>
          <p>We are here to assist you with any questions or concerns you may have. Please fill out the form and we will get back to you as soon as possible.</p>
          <p>You can also reach us through our social media channels:</p>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <form className="enquiry-form">
          <h2>Contact Form</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="enquiry">Enquiry:</label>
            <textarea id="enquiry" name="enquiry" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
   
  );
}

export default Enquiry;