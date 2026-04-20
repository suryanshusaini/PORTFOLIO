import React from "react";

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-container pt-32 pb-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-accent font-mono mb-6 text-lg tracking-wide">
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight">
          Suryanshu Saini.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8 tracking-tight">
          I build robust software solutions.
        </h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          I'm a Computer Science Engineering student passionate about crafting digital experiences, solving complex problems, and exploring data structures and algorithms.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#projects" className="btn-primary w-full sm:w-auto">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary w-full sm:w-auto">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
