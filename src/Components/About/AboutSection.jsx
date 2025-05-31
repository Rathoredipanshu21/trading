import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <motion.div 
          className="about-carousel"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Carousel 
            showThumbs={false} 
            infiniteLoop 
            autoPlay 
            className="carousel-wrapper"
          >
             <div>
              <img src="https://plus.unsplash.com/premium_photo-1736765210162-8db26e3d02c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" alt="Investment" />
            </div>
            <div>
              <img src="https://plus.unsplash.com/premium_photo-1742404280719-ae54cdb86722?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D" alt="Success" />
            </div>
            <div>
              <img src="https://plus.unsplash.com/premium_photo-1741723515540-16a4e71b7d49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D" alt="Growth" />
            </div>
          </Carousel>
        </motion.div>
        
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="about-title">Join Us on the Journey</h2>
          <p className="about-description">
            Whether you're a seasoned investor or just starting out on your investment journey, Seven Services is here to help.
            With our scalable investing model, personalized solutions, and commitment to excellence, we're dedicated to helping you 
            achieve your financial goals and secure a better future for yourself and your loved ones.
          </p>
          <ul className="about-list">
            <li><FaCheckCircle className="icon" /> Scalable Investing Model</li>
            <li><FaCheckCircle className="icon" /> Personalized Solutions</li>
            <li><FaCheckCircle className="icon" /> Commitment to Excellence</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
