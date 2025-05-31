import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faFileAlt, faCheckCircle, faTrophy, faAnglesRight, faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import 'aos/dist/aos.css';
import AOS from 'aos';
import rightco from '../Assets/rightcorn.png'



AOS.init();

const Partner = () => {
  return (
    <>
      <div className="partner-page" style={{ 
        backgroundColor: '#e8f5e9', 
        padding: '20px', 
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowX: 'hidden',
        backgroundColor: '#E8F5E9',
      }}>
        <h1 style={{
          textAlign: 'center',
          textTransform: 'uppercase',
          color: '#2e7d32',
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
          padding: '10px',
        }}>
          Opportunities don’t happen. You <span style={{ color: '#66bb6a' }}>create</span> them
        </h1>

        <p style={{ textAlign: 'center', color: '#388e3c', fontSize: '18px', marginBottom: '30px' }}>
          Quick Steps to Partnership
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          margin: '20px 0',
        }}>
          <div
            data-aos="fade-right"
            style={{
              flex: '1 1 calc(25% - 20px)',
              maxWidth: '300px',
              minWidth: '200px',
              textAlign: 'center',
              padding: '20px',
              borderRadius: '15px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
              backgroundColor: '#a5d6a7',
              color: '#1b5e20',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
            }}
          >
            <FontAwesomeIcon icon={faUserPlus} size="3x" style={{ color: '#2e7d32', marginBottom: '10px' }} />
            <h3>Sign Up</h3>
            <p>Be a part of our family</p>
          </div>
          <FontAwesomeIcon
            icon={faAnglesRight}
            size="2x"
            style={{ color: '#66bb6a' }}
            className="arrow-icon"
          />
          <div
            data-aos="fade-left"
            style={{
              flex: '1 1 calc(25% - 20px)',
              maxWidth: '300px',
              minWidth: '200px',
              textAlign: 'center',
              padding: '20px',
              borderRadius: '15px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
              backgroundColor: '#a5d6a7',
              color: '#1b5e20',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
            }}
          >
            <FontAwesomeIcon icon={faFileAlt} size="3x" style={{ color: '#388e3c', marginBottom: '10px' }} />
            <h3>Documentation</h3>
            <p>Let's make it official</p>
          </div>
          <FontAwesomeIcon
            icon={faAnglesRight}
            size="2x"
            style={{ color: '#66bb6a' }}
            className="arrow-icon"
          />
          <div
            data-aos="fade-right"
            style={{
              flex: '1 1 calc(25% - 20px)',
              maxWidth: '300px',
              minWidth: '200px',
              textAlign: 'center',
              padding: '20px',
              borderRadius: '15px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
              backgroundColor: '#a5d6a7',
              color: '#1b5e20',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
            }}
          >
            <FontAwesomeIcon icon={faCheckCircle} size="3x" style={{ color: '#f9a825', marginBottom: '10px' }} />
            <h3>Confirmation</h3>
            <p>Almost there</p>
          </div>
          <FontAwesomeIcon
            icon={faAnglesRight}
            size="2x"
            style={{ color: '#66bb6a' }}
            className="arrow-icon"
          />
          <div
            data-aos="fade-left"
            style={{
              flex: '1 1 calc(25% - 20px)',
              maxWidth: '300px',
              minWidth: '200px',
              textAlign: 'center',
              padding: '20px',
              borderRadius: '15px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
              backgroundColor: '#a5d6a7',
              color: '#1b5e20',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
            }}
          >
            <FontAwesomeIcon icon={faTrophy} size="3x" style={{ color: '#ffeb3b', marginBottom: '10px' }} />
            <h3>Game On</h3>
            <p>Became proud partner, let's bang!!</p>
          </div>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .arrow-icon {
              transform: rotate(90deg);
              margin: 10px 0;
            }
            .partner-page > div {
              flex-direction: column;
              align-items: center; // Center content
            }
            .partner-page > div > div {
              width: 90%;
            }
          }
          html {
            scroll-behavior: smooth;
          }
          body {
            overflow-x: hidden; // Hide horizontal overflow
          }
        `}
      </style>


      
      <hr style={{width:'90%',margin:'2px auto',color:'green'}}/>

      <div className="first-step-partner" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: '300px',
        backgroundColor: '#e8f5e9',
        overflow: 'hidden', // Ensure no overflow
        textAlign: 'center',
        width: '100%', // Adjust width for responsiveness
        margin: '0 auto', // Center the section
      }}>
        <img 
          src={rightco} 
          alt="" 
          style={{
            position: 'absolute',
            top: '10%',
            right: '0',
            transform: 'rotate(0deg)',
            width: '150px',
            opacity: '0.8',
          }} 
        />
        <img 
          src={rightco} 
          alt="" 
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '0',
            transform: 'rotate(180deg)',
            width: '150px',
            opacity: '0.8',
          }} 
        />
        <h1 style={{
          zIndex: '1',
          fontSize: '24px',
          color: '#2e7d32',
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
          padding: '10px',
        }}>
          Start Your Path to Success Now!
        </h1>
        <button style={{
          marginTop: '20px',
          backgroundColor: '#2e7d32',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        >
          <a href="/trading" style={{
            textDecoration: 'none',
            color: 'white',
          }}>
            Become Partner
          </a>
        </button>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .first-step-partner {
              height: 200px;
              overflow-x: hidden; 
              align-items: center; // Center content
            }
            .first-step-partner img {
              width: 100px;
            }
            .first-step-partner button {
              font-size: 14px;
              padding: 8px 16px;
            }
            .first-step-partner h1 {
              font-size: 18px;
            }
          }
        `}
      </style>

      {/* <hr style={{width:'90%',margin:'2px auto',color:'green'}}/> */}
        
    </>
  );
};

export default Partner;