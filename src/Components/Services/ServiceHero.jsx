import React, { useState, useEffect } from "react";
import "./ServiceHero.css";
import { gsap } from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import serviceimg from '../Assets/serviceimg2.png';

const quotes = [
    "Stock Market is the key to wealth!",
    "Invest in equity for long-term growth.",
    "Health policies secure your future.",
    "Life insurance is a promise kept.",
    "Loans can be your stepping stone.",
    "Manage your money wisely!",
    "Digital Gold Investment is the future!"
];

const ServiceHero = () => {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            gsap.to("#animated-text", { opacity: 0, duration: 0.5, onComplete: () => {
                setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
                gsap.to("#animated-text", { opacity: 1, duration: 0.3 });
            }});
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container" >
            <div className="left">
                <h1>Our Services</h1>
                <h3>We provide a variety of financial services to help you achieve your goals.</h3>
                <h1 id="animated-text" >
                    <FontAwesomeIcon icon={faHandPointRight}  style={{color:'red'}}/> {quotes[index]}
                </h1>
            </div>
            <div className="right">
                <img src={serviceimg} alt="Investment Vector" />
            </div>
        </div>
    );
};

export default ServiceHero;
