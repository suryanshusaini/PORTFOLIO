// src/components/Navbar.jsx

import React from "react";

// 1. Receive 'theme' and 'toggleTheme' as props
function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">SS</span>
        </div>

        <div className="nav-right">
          <div className="nav-menu" id="nav-menu">
            {/* ...your nav links... */}
          </div>
          <div className="nav-action">
            <a
              href="/suryanshu-saini-resume.pdf"
              download
              className="btn-resume"
            >
              Resume
            </a>
            {/* 2. Add the theme toggle button */}
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === "light" ? (
                <i className="fas fa-moon"></i>
              ) : (
                <i className="fas fa-sun"></i>
              )}
            </button>
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
