// src/components/Navbar.jsx

import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">SS</span>
        </div>

        {/* --- We've wrapped the menu and button in a new div --- */}
        <div className="nav-right">
          <div className="nav-menu" id="nav-menu">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
          <div className="nav-action">
            <a
              href="/suryanshu-saini-resume.pdf"
              download
              className="btn-resume"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="hamburger" id="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
