import React, { useEffect } from "react";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChartLine, FaUsers, FaLightbulb } from "react-icons/fa";
import "./AboutHero.css";
import vectorImage from "../Assets/aboutbanner.png";

const AboutHero = () => {
    useEffect(() => {
        gsap.from("#animated-text", { opacity: 0, y: 50, duration: 1.5, ease: "power3.out" });
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="container">
            <div className="text-box" data-aos="fade-right">
                <h1 style={{ color: 'green' }}>
                    <FaChartLine style={{ marginRight: "10px" }} />
                    Revolutionizing <span style={{ color: 'orange' }}>Investing</span> with Scalability
                </h1>
                <p>
                    <FaUsers style={{ marginRight: "10px" }} />
                    At Seven Financials, we're redefining the investment landscape with our innovative approach to scalable investing. Founded in [year], our company has quickly emerged as a leader in the industry, known for our commitment to democratizing investing and delivering superior results for our clients.
                </p>
                <p style={{marginTop: "10px" }}>
                    <FaLightbulb style={{ marginRight: "5px", color: "orange" }} />
                    Innovation at its core
                </p>
            </div>
            <div className="image-box" data-aos="fade-left">
                <img src={vectorImage} alt="Vector Art" />
              
            </div>
        </section>
    );
};

export default AboutHero;

