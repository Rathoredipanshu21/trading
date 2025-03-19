import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <img src="https://plus.unsplash.com/premium_photo-1675242132049-d373cdf9273f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhZGluZyUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Trading" className="hero-image" />
      <div className="hero-content">
        <h1>Welcome to Our Trading Platform</h1>
        <p>Choose the best platform to trade and achieve your financial goals.</p>
      </div>
    </div>
  )
}

export default Hero