import React, { useState } from 'react';
import './Trading.css';

import groww from '../Assets/groww.png'
import mutual from '../Assets/mutual.png'
// import zerodha from '../Assets/zerodha.png'
import upstock from '../Assets/upstock.png'
import Hero from './Hero';

const Trading = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: mutual, title: 'Finance Company 2' },
    { src: upstock, title: 'Finance Company 4' },
    { src: groww, title: 'Groww' },
    { src: mutual, title: 'Finance Company 2' },
    { src: upstock, title: 'Finance Company 4' },
    { src: groww, title: 'Groww' },
    { src: mutual, title: 'Finance Company 2' },
    { src: upstock, title: 'Finance Company 4' },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Hero/>
      <h1 style={{ textTransform: 'uppercase', textAlign: 'center', padding: '10px', paddingTop: '30px' }}>
        We are part of multiple finance companies
      </h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item" onClick={() => openModal(image)}>
            <hr />
            <img src={image.src} alt={image.title} />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedImage.title}</h2>
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <label>
                Email:
                <input type="email" name="email" />
              </label>
              <label>
                Phone:
                <input type="tel" name="phone" />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Trading;