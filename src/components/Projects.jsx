import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Portfolio Platform React",
      description: "A redesigned modern developer portfolio powered by React, Vite, and Tailwind CSS. Emphasizes clean architecture and seamless API integration.",
      techStack: ["React", "Tailwind CSS", "Vite", "REST API", "Framer Motion"],
      link: "#"
    },
    // More projects can be added here
  ];

  return (
    <section id="projects" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Notable Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            key={index} 
            className="bg-slate-800/40 backdrop-blur-md rounded-3xl p-10 md:p-12 border border-slate-700/50 transition-all duration-300 group flex flex-col justify-between min-h-[350px] hover:border-slate-600/50 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(100,255,218,0.1)]"
          >
            <div>
              <div className="flex justify-between items-center mb-10">
                <i className="fas fa-folder-open text-4xl text-accent"></i>
                <a href={project.link} className="text-slate-400 hover:text-accent transition-colors">
                  <i className="fas fa-external-link-alt text-xl"></i>
                </a>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-5 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-auto">
              {project.techStack.map((tech, i) => (
                <span key={i} className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
