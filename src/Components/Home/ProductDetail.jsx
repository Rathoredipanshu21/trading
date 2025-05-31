import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import products from "./products";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <a href="/" className="back-link">
        <FontAwesomeIcon icon={faArrowLeft} /> Back to Products
      </a>
      <div className="product-detail-card" style={{ backgroundColor: product.bgColor }}>
        <div className="product-detail-icon">
          <FontAwesomeIcon icon={product.icon} size="3x" />
          <h2>{product.title}</h2>
        </div>
        <div className="product-detail-content">
          <p>{product.description}</p>
          {/* Add more images and explanation here */}
          <img src="/path/to/image.jpg" alt={product.title} />
          <p>More detailed explanation about the product...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec magna fermentum, a cursus nulla facilisis. Integer nec odio nec urna facilisis tincidunt. Donec vel libero at lectus rutrum vestibulum vitae ut turpis. Curabitur sit amet magna nec arcu varius tincidunt. Sed sit amet sapien ut libero venenatis faucibus. Suspendisse potenti.</p>
          <p>Phasellus euismod, justo at ultricies tincidunt, nunc libero vehicula purus, a tincidunt libero ligula non nisi. Sed sit amet sapien ut libero venenatis faucibus. Suspendisse potenti. Phasellus euismod, justo at ultricies tincidunt, nunc libero vehicula purus, a tincidunt libero ligula non nisi.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
