import React from "react";

function Projects() {
  const projects = [
    {
      title: "Portfolio Platform React",
      description: "A redesigned modern developer portfolio powered by React, Vite, and Tailwind CSS. Emphasizes clean architecture and seamless API integration.",
      techStack: ["React", "Tailwind CSS", "Vite", "REST API"],
      link: "#"
    },
    // More projects can be added here
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Notable Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-navy-800 rounded-lg p-8 border border-navy-700 hover:border-accent hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex justify-between items-center mb-6">
                <i className="fas fa-folder-open text-4xl text-accent"></i>
                <a href={project.link} className="text-slate-400 hover:text-accent transition-colors">
                  <i className="fas fa-external-link-alt text-xl"></i>
                </a>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-auto">
              {project.techStack.map((tech, i) => (
                <span key={i} className="text-xs font-mono text-accent bg-accent bg-opacity-10 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
