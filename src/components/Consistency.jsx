// src/components/Consistency.jsx
import React from "react";

function Consistency() {
  return (
    <section id="consistency" className="consistency">
      <div className="container">
        <h2 className="section-title">Consistency</h2>
        <div className="consistency-content">
          <div className="consistency-card">
            <div className="consistency-icon">
              <i className="fas fa-code"></i>
            </div>
            <div className="consistency-details">
              <h3>LeetCode Problem Solving</h3>
              <p>
                Consistently solving coding challenges to improve algorithmic
                thinking and problem-solving skills.
              </p>
              <div className="consistency-stats">
                <div className="stat-item">
                  <span className="stat-number">180+</span>
                  <span className="stat-label">Problems Solved</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">DSA</span>
                  <span className="stat-label">Focus Area</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">Java</span>
                  <span className="stat-label">Primary Language</span>
                </div>
              </div>
              <a
                href="https://leetcode.com/u/Suryanshu_Saini0808/"
                target="_blank"
                rel="noopener noreferrer"
                className="consistency-link"
              >
                View LeetCode Profile{" "}
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Consistency;
