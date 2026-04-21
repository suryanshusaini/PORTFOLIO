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
        transition={{ duration: 0.6, ease: 'easeOut' }}
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
            transition={{ duration: 0.6, delay: 0.2 * index, ease: 'easeOut' }}
            key={index} 
            className="bg-neutral-900 border border-neutral-800 rounded-lg p-10 md:p-12 transition-all duration-300 group flex flex-col justify-between min-h-[350px] hover:border-neutral-500"
          >
            <div>
              <div className="flex justify-between items-center mb-10">
                <i className="fas fa-folder-open text-4xl text-white"></i>
                <a href={project.link} className="text-neutral-500 hover:text-white transition-colors">
                  <i className="fas fa-external-link-alt text-xl"></i>
                </a>
              </div>
              <h3 className="text-2xl font-bold text-white mb-5 group-hover:text-neutral-300 transition-colors">{project.title}</h3>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-auto">
              {project.techStack.map((tech, i) => (
                <span key={i} className="text-xs font-mono text-neutral-300 bg-neutral-950 border border-neutral-800 px-3 py-1.5 rounded-md">
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
