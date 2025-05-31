import React from "react";
import "./ChooseUs.css";
import trust from '../Assets/trust.jpg';
import coverage from '../Assets/coverage.png'
import support from '../Assets/support.png';
import process from '../Assets/process.png';
import network from '../Assets/network.png';    
import affordable from '../Assets/affordable.png';

const ChooseUs = () => {
  return (
    <>

{/* <div className="banner-container">
        <div className="overlay">
          <h1 className="banner-text">
            "The stock market is filled with individuals who know the price of everything, but the value of nothing." <br />
            - Philip Fisher
          </h1>
        </div>
      </div> */}

    <div className="contact-container">
      <div className="contact-content">
        <h1 className="center-text">WHY CHOOSE <span style={{color:'green'}}>SEVEN FINANCE</span> </h1>
        <hr style={{color:'orangered'}} />
        <p style={{textAlign:'center'}}>Seven services is one of the leading insurance providers in the country, offering a wide range of insurance products to cater to diverse needs.</p>
        
        <div className="features-grid">

        <div data-aos="zoom-in">
          <div className="feature-box">
            <img src={trust} alt="Trusted" />
            <h2>Trusted Since Years</h2>
            <p>Providing reliable insurance solutions for decades.</p>
          </div>
        </div>

        <div data-aos="zoom-in">
          <div className="feature-box">
            <img src={coverage} alt="Coverage" />
            <h2>Wide Coverage</h2>
            <p>Comprehensive policies covering all aspects of your needs.</p>
          </div>
        </div>

        <div data-aos="zoom-in">
          <div className="feature-box">
            <img src={support} alt="Support" />
            <h2>Customer Support</h2>
            <p>24/7 customer support to assist you anytime.</p>
          </div>
        </div>

         <div data-aos="zoom-in">    
          <div className="feature-box">
            <img src={process} alt="Easy Process" />
            <h2>Easy Claim Process</h2>
            <p>Hassle-free and quick claim settlement procedures.</p>
          </div>
        </div>

        <div data-aos="zoom-in">
          <div className="feature-box">
            <img src={network} alt="Network" />
            <h2>Vast Network</h2>
            <p>Extensive network of branches and agents nationwide.</p>
          </div>
        </div>

        <div data-aos="zoom-in">
          <div className="feature-box">
            <img src={affordable} alt="Affordable" />
            <h2>Affordable Plans</h2>
            <p>Insurance policies designed to be budget-friendly.</p>
          </div>
          </div>


         

        </div>
      </div>
    </div>

    </>
  );
};

export default ChooseUs;