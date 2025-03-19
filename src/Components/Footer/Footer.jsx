import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    // <footer className="bg-dark text-white pt-4">
    <footer className="text-white pt-4" style={{ backgroundColor: "rgb(179, 207, 171) !important" }}>

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Seven Services</h5>
            <ul className="list-unstyled">
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
              <li>Service 4</li>
              <li>Service 5</li>
              <li>Service 6</li>
              <li>Service 7</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Social Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Other Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">About Us</a></li>
              <li><a href="#" className="text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-white">Terms of Service</a></li>
              <li><a href="#" className="text-white">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Information</h5>
            <ul className="list-unstyled">
              <li>Email: info@example.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Main St, Anytown, USA</li>
            </ul>
          </div>
        </div>
        <div className="text-center py-3">
          <p>&copy; 2025. Designed and developed by <a href="www.systaio.com">Systaio Technology</a> </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
