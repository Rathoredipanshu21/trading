import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat, faShieldAlt, faUserShield } from "@fortawesome/free-solid-svg-icons";
import Hero from "./Hero";
import ChooseUs from "./ChooseUs";
import Testimonial from "./Testomonial";
import Products from "./Products.jsx";

const Home = () => {
  return (
    <>
    <div
      className="container-fluid d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        height: "80vh",
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://img.freepik.com/free-photo/hands-holding-paper-family-close-up_23-2149191380.jpg?t=st=1742296189~exp=1742299789~hmac=be360ec899d52610ae6d66a4a201acd8f056c12e43d3214a76ad69466a6651a6&w=1380') no-repeat center center/cover`,
        color: "white",
      }}
    >
      <style>
        {`
          @media (max-width: 768px) {
            .container-fluid {
              height: 100vh;
            }
          }
        `}
      </style>
      <h1 style={{ fontSize: "3em", margin: "0.5em 0" }}>

      Better future to <span style={{color:'yellow' ,textTransform:'capitalize'}}> learn</span> and Earn 
         
      </h1>
      <p style={{ fontSize: "1.2em", margin: "0.5em 0" }}>
        We offer comprehensive life and health insurance plans to protect you and your loved ones.
      </p>
      <div style={{ marginTop: "1em" }}>
        <div className="icons">
          <FontAwesomeIcon icon={faHeartbeat} size="3x" style={{ margin: "0 1em" }} />
          <FontAwesomeIcon icon={faShieldAlt} size="3x" style={{ margin: "0 1em" }} />
          <FontAwesomeIcon icon={faUserShield} size="3x" style={{ margin: "0 1em" }} />
        </div>
      </div>
      <div style={{ marginTop: "1em" }}>
        <a
          href="/services"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Get Started
        </a>
      </div>
    </div>


<Products/>



    




    </>
  );
};

export default Home;
