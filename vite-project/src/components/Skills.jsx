// src/components/Skills.jsx

import React from "react";
import { useInView } from "react-intersection-observer";
// 1. Import the CountUp component
import CountUp from "react-countup";

const skillsData = {
  languages: [
    { name: "Java", percentage: 80 },
    { name: "Python", percentage: 75 },
    { name: "JavaScript", percentage: 70 },
  ],
  webTech: [
    { name: "HTML", percentage: 85 },
    { name: "CSS", percentage: 80 },
    { name: "SQL", percentage: 70 },
  ],
  other: [
    { name: "Data Structures & Algorithms", percentage: 75 },
    { name: "Artificial Intelligence", percentage: 70 },
  ],
};

// We will update the SkillItem helper component
const SkillItem = ({ name, percentage, inView }) => (
  <div className="skill-item">
    <div className="skill-info">
      <span>{name}</span>
      {/* 2. Replace the static percentage with the animated one */}
      <span>{inView ? <CountUp end={percentage} duration={2} /> : 0}%</span>
    </div>
    <div className="skill-bar">
      <div
        className="skill-progress"
        style={{ width: inView ? `${percentage}%` : "0%" }}
      ></div>
    </div>
  </div>
);

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            {skillsData.languages.map((skill) => (
              <SkillItem
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                inView={inView}
              />
            ))}
          </div>

          <div className="skill-category">
            <h3>Web Technologies</h3>
            {skillsData.webTech.map((skill) => (
              <SkillItem
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                inView={inView}
              />
            ))}
          </div>

          <div className="skill-category">
            <h3>Other Skills</h3>
            {skillsData.other.map((skill) => (
              <SkillItem
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
