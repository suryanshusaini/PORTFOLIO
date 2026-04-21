import React from "react";
import { motion } from "framer-motion";

const mainSkills = [
  "MERN Stack", "Java", "Python", "SQL", "Data Structures & Algorithms"
];

const secondarySkills = [
  "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Node.js", "Express.js", 
  "MongoDB", "Git & GitHub", "Tailwind CSS", "REST APIs"
];

function Skills() {
  const marqueeMain = [...mainSkills, ...mainSkills];
  const marqueeSecondary = [...secondarySkills, ...secondarySkills];

  return (
    <section id="skills" className="section-container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-10 md:p-16 overflow-hidden"
      >
        <h2 className="section-title mb-16">Core Competencies</h2>
        
        {/* Primary Stack Marquee */}
        <div className="mb-16 relative flex overflow-x-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-900/80 to-transparent z-10 pointer-events-none"></div>
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {marqueeMain.map((skill, index) => (
              <div 
                key={index}
                className="mx-4 px-8 py-4 bg-slate-800/60 border border-slate-600/50 rounded-full text-slate-100 font-semibold md:text-lg inline-block"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Stack Marquee */}
        <div className="relative flex overflow-x-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-900/80 to-transparent z-10 pointer-events-none"></div>
          <div className="animate-marquee whitespace-nowrap flex items-center" style={{ animationDirection: 'reverse', animationDuration: '25s' }}>
            {marqueeSecondary.map((skill, index) => (
              <div 
                key={index}
                className="mx-3 px-6 py-3 bg-slate-800/40 border border-slate-700/50 rounded-full text-slate-300 text-sm md:text-base inline-block"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
