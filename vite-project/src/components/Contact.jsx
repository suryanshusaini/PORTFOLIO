// src/components/Contact.jsx
import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>
              I'm always open to discussing new opportunities, collaborations,
              or just having a chat about technology. Feel free to reach out.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>Available on LinkedIn</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Roorkee, Uttarakhand</span>
              </div>
            </div>
          </div>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/suryanshu-saini-a4145b216/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <i className="fab fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://leetcode.com/u/Suryanshu_Saini0808/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link leetcode"
            >
              <i className="fas fa-code"></i>
              <span>LeetCode</span>
            </a>
            <a
              href="https://www.instagram.com/suryanshusaini_/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
