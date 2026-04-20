import React from "react";

const mainSkills = [
  "MERN Stack",
  "Java",
  "Python",
  "SQL",
  "Data Structures & Algorithms"
];

const secondarySkills = [
  "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Node.js", "Express.js", "MongoDB", "Git & GitHub", "Tailwind CSS", "REST APIs"
];

function Skills() {
  return (
    <section id="skills" className="section-container bg-navy-800 rounded-lg my-12 shadow-2xl border border-navy-700">
      <h2 className="section-title">Core Competencies</h2>
      
      <div className="mb-12">
        <h3 className="text-xl font-mono text-accent mb-6">Primary Stack</h3>
        <div className="flex flex-wrap gap-4">
          {mainSkills.map((skill, index) => (
            <div 
              key={index}
              className="px-6 py-3 bg-navy-900 border border-accent rounded-full text-slate-100 font-semibold shadow-[0_0_10px_rgba(100,255,218,0.1)] hover:shadow-[0_0_15px_rgba(100,255,218,0.3)] hover:-translate-y-1 transition-all duration-300 md:text-lg"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-mono text-slate-400 mb-6">Additional Tools & Technologies</h3>
        <div className="flex flex-wrap gap-3">
          {secondarySkills.map((skill, index) => (
            <div 
              key={index}
              className="px-4 py-2 bg-navy-700 rounded-full text-slate-300 text-sm hover:text-accent hover:bg-navy-900 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
