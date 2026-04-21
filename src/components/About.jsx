import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        About Me
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-3 text-slate-400 space-y-6 text-base md:text-lg leading-relaxed"
        >
          <p>
            <span className="text-accent">Hello!</span> I'm a dedicated Computer Science Engineering student from Roorkee, currently in my 3rd year at Vellore Institute of Technology, AP. With a strong academic record, I bridge the gap between complex algorithms and practical software solutions.
          </p>
          <p>
            My problem-solving journey includes deep dives into Data Structures and Algorithms, complemented by full-stack web development. I thrive in building systems that are not just functional, but performant and scalable.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-2 space-y-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
        >
          <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(100,255,218,0.1)] hover:border-slate-600/50">
            <h4 className="text-4xl font-bold text-accent mb-2">9.04</h4>
            <p className="text-slate-400 font-mono text-xs md:text-sm uppercase tracking-wider">Current CGPA <br/><span className="text-[10px] text-slate-500">(Up to 5th Semester)</span></p>
          </div>
          <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(100,255,218,0.1)] hover:border-slate-600/50">
            <h4 className="text-3xl font-bold text-accent mb-2">B.Tech CSE</h4>
            <p className="text-slate-400 font-mono text-xs md:text-sm uppercase tracking-wider">3rd Year Student</p>
          </div>
          <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(100,255,218,0.1)] hover:border-slate-600/50 sm:col-span-2 lg:col-span-1">
            <h4 className="text-3xl font-bold text-accent mb-2">Full Stack</h4>
            <p className="text-slate-400 font-mono text-xs md:text-sm uppercase tracking-wider">Primary Focus</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
