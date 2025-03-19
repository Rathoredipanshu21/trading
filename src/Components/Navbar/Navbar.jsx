import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo2.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // ✅ Define navigate inside the component

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light custom-navbar"
      style={{ backgroundColor: "#fff", color: "rgb(1, 48, 36)", padding: "0 20px" }}
    >
      <Link className="navbar-brand" to="/">
        <img src={logo} width="50" height="50" alt="Logo" style={{ margin: "0 10px" }} />
      </Link>
      <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
        <span className={`navbar-toggler-icon ${isOpen ? "close-icon" : ""}`}></span>
      </button>
      <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link active" to="/" style={{ color: "rgb(1, 48, 36)" }}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" style={{ color: "rgb(1, 48, 36)" }}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog" style={{ color: "rgb(1, 48, 36)" }}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services" style={{ color: "rgb(1, 48, 36)" }}>
              Services
            </Link>
          </li>
        </ul>
        <form className="form-inline ml-auto">
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="button"
            style={{ margin: "0 5px" }}
            onClick={() => navigate("/enquiry")} // ✅ Now this will work
          >
            Enquiry
          </button>

          <button
            className="btn btn-outline-primary my-2 my-sm-0 ml-2"
            type="button"
            style={{ margin: "0 5px" }}
            onClick={() => navigate("/trading")} // ✅ Now this will work

          >
            Trading
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
