import React from 'react';
import Image from 'next/image';
import '@/styling/Hero.css'; 

import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'; 
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-description">Discover my projects and skills in web development.</p>
        <a href="https://github.com/SakeenaMajeed" className="hero-button">View Projects</a>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/sakeena-majeed-86b58732a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/SakeenaMajeed" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/sukaina.majeed.98?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className="hero-image">
        <Image src="/g.png" alt="sakeena" width={300} height={300} />
      </div>
    </div>
  );
};

export default Hero;