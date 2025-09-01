// src/components/Hero.jsx

import React from "react";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Suryanshu Saini</span>
          </h1>
          <p className="hero-subtitle">Computer Science Engineering Student</p>
          <p className="hero-description">
            Passionate about coding, problem-solving, and building innovative
            solutions. Currently pursuing BTech at VIT-AP with a CGPA of 9.15.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-card">
            <div className="profile-img">
              <i className="fas fa-user-graduate"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

export default Hero;
