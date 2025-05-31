import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Hero.css";
import img from '../Assets/equityservice.jpg'
import img2 from '../Assets/healthservice.jpg'
import img3 from '../Assets/lifeservice.jpg'
import img4 from '../Assets/loanservice.jpg'
import img5 from '../Assets/moneyservice.jpg'
import img6 from '../Assets/goldservice.jpg'

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const investments = [
    { title: "Equity / Stock Market", 
    image: img, 
    description: "Investing in the stock market can yield high returns but comes with risks. Learn  how to navigate the market effectively." },

    { title: "Health Policy",
     image: img2,
     description: "Health policies ensure you are covered during medical emergencies. Understand the benefits and choose the right policy for you." },

    { title: "Life Insurance", 
    image: img3, 
    description: "Life insurance provides financial security for your loved ones. Explore different plans and secure your family's future." },

    { title: "Loans", 
    image: img4, 
    description: "Loans can help you achieve your financial goals. Learn about different types of loans and how to manage them wisely." },

    { title: "Money Management", 
    image: img5, 
    description: "Effective money management is key to financial stability. Discover strategies to manage your finances better." },

    { title: "Digital Gold Investment", 
        image: img6, 
        description: "Investing in digital gold is a modern way to diversify your portfolio. Learn the benefits and how to get started." },
  ];

  return (
    <>
<h1 className="hero-heading">
  📈 Our Financial Services 💰
</h1>
<hr style={{color:'green',width:'80%',margin:'2px auto'}} />

<p className="hero-paragraph">
  We offer a range of financial services, including loans, investments, and trading solutions, tailored to meet your financial goals.
</p>

    <div className="investment-container">
      {investments.map((item, index) => (
        
        <div key={index} className="investment-card" data-aos="fade-up">
          <div className="box">
            <img src={item.image} alt={item.title} />
            <div className="content">
              <h3>{item.title}</h3>
              <p>
                {item.description}
              </p>
            </div>
            <div className="box-content">
              <h3 className="name">{item.title}</h3>
              <span className="post">Investment Option</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Hero;
