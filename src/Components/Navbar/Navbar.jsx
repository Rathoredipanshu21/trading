import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./seven.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light custom-navbar ${isSticky ? "sticky" : ""}`}
      style={{ backgroundColor: "#fff", color: "rgb(1, 48, 36)", padding: "0 20px" }}
    >
      <Link className="navbar-brand" to="/">
        <img src={logo} width="80%" height="50" alt="Logo" style={{ margin: "0 10px" }} />
      </Link>
      <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
        <span className={`navbar-toggler-icon ${isOpen ? "close-icon" : ""}`}></span>
      </button>
      <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link active" to="/" style={{ color: "rgb(1, 48, 36)" }} onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" style={{ color: "rgb(1, 48, 36)" }} onClick={handleLinkClick}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services" style={{ color: "rgb(1, 48, 36)" }} onClick={handleLinkClick}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blogs" style={{ color: "rgb(1, 48, 36)" }} onClick={handleLinkClick}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/learn-page" style={{ color: "rgb(1, 48, 36)" }} onClick={handleLinkClick}>
              Learn
            </Link>
          </li>
        </ul>
        <form className="form-inline ml-auto">
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="button"
            style={{ margin: "0 5px" }}
            onClick={() => {
              navigate("/enquiry");
              setIsOpen(false); // Close the menu
            }}
          >
            Enquiry
          </button>
          <button
            className="btn btn-outline-primary my-2 my-sm-0 ml-2"
            type="button"
            style={{ margin: "0 5px" }}
            onClick={() => {
              navigate("/trades");
              setIsOpen(false); // Close the menu
            }}
          >
            Trading
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
