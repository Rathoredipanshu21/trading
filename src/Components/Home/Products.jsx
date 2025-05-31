import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHome, faBriefcase, faCar, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "./Products.css";

const products = [
  {
    id: 1,
    title: "Loan for Home",
    description: "Get a hassle-free home loan at low interest rates.",
    icon: faHome,
    link: "/home-loan",
    bgColor: "#a8e6cf",
  },
  {
    id: 2,
    title: "Business Growth",
    description: "Expand your business with our flexible loan options.",
    icon: faBriefcase,
    link: "/business-loan",
    bgColor: "#dcedc1",
  },
  {
    id: 3,
    title: "Car Loan",
    description: "Drive your dream car with easy EMI options.",
    icon: faCar,
    link: "/car-loan",
    bgColor: "#ffd3b6",
  },
  {
    id: 4,
    title: "Education Loan",
    description: "Fund your higher education with our affordable loans.",
    icon: faGraduationCap,
    link: "/education-loan",
    bgColor: "#ffaaa5",
  },
];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Auto slider (changes every 2 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>    
    <section className="products-goals" style={{backgroundColor:'#E8F5E9'}}>
      <h2>Our Products For Your Goals</h2>
      <hr  style={{color:'green',width:'50%',margin:'2px auto' ,padding:'10px'}}/>
      <div data-aos="fade-down-right">
      <div className="products-slider">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`product-card ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundColor: product.bgColor }}
            onClick={() => handleProductClick(product.id)}
          >
            <div className="product-icon">
              <FontAwesomeIcon icon={product.icon} size="3x" />
              <h3>{product.title}</h3>
            </div>
            <div className="product-content">
              <p>{product.description}</p>
              <a href={product.link} className="know-more">
                Know More <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>

    </section>
    {/* <hr  style={{color:'green'}}/> */}

    </>

  );
};

export default Products;
