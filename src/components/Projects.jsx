// src/components/Projects.jsx

import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {/* We'll add more projects later */}
          <div className="project-card">
            <div className="project-image">
              <i className="fas fa-globe"></i>
            </div>
            <div className="project-content">
              <h3>Portfolio Website</h3>
              <p>
                Responsive portfolio website built with HTML, CSS, and
                JavaScript featuring smooth animations. Rebuilt with React.
              </p>
              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
              </div>
              <a
                href="#"
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

          {/* You can copy and paste the project-card div to add more projects */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
