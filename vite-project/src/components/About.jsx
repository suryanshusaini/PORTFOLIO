// src/components/About.jsx

import React from "react";
// 1. Import the hooks we need
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

function About() {
  // 2. Set up the observer hook
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    // 3. Attach the ref to the section
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Hello! I'm Suryanshu Saini</h3>
            <p>
              I'm a dedicated Computer Science Engineering student from Roorkee,
              currently in my 2nd year at Vellore Institute of Technology,
              Andhra Pradesh. With a strong academic record (CGPA: 9.14), I'm
              passionate about technology and constantly learning new skills.
            </p>
            <p>
              I enjoy solving complex problems and have solved 180+ questions on
              LeetCode. My interests span across web development, artificial
              intelligence, and data structures & algorithms.
            </p>
            <div className="about-stats">
              <div className="stat">
                {/* 4. Replace static numbers with the CountUp component */}
                <h4>
                  {inView && <CountUp end={9.15} decimals={2} duration={2} />}
                </h4>
                <p>CGPA</p>
              </div>
              <div className="stat">
                <h4>{inView && <CountUp end={180} duration={2} />}+</h4>
                <p>
                  <a
                    href="https://leetcode.com/u/Suryanshu_Saini0808/"
                    target="_blank"
                  >
                    LeetCode
                  </a>{" "}
                  Problems
                </p>
              </div>
              <div className="stat">
                <h4>3rd Year</h4>
                <p>BTech CSE</p>
              </div>
            </div>
          </div>
          <div className="about-info">
            {/* ... (rest of the component is the same) ... */}
            <div className="info-item">
              <i className="fas fa-graduation-cap"></i>
              <div>
                <h4>Education</h4>
                <p>BTech in Computer Science & Engineering</p>
                <p>Vellore Institute of Technology, AP</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Location</h4>
                <p>Roorkee, Uttarakhand</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-code"></i>
              <div>
                <h4>Focus</h4>
                <p>Full Stack Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
