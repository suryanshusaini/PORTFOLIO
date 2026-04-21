import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="section-title"
      >
        About Me
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-3 text-neutral-400 space-y-6 text-base md:text-lg leading-relaxed"
        >
          <p>
            <span className="text-white font-semibold">Hello!</span> I'm a dedicated Computer Science Engineering student from Roorkee, currently in my 3rd year at Vellore Institute of Technology, AP. With a strong academic record, I bridge the gap between complex algorithms and practical software solutions.
          </p>
          <p>
            My problem-solving journey includes deep dives into Data Structures and Algorithms, complemented by full-stack web development. I thrive in building systems that are not just functional, but performant and scalable.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="lg:col-span-2 space-y-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
        >
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-lg transition-all duration-300 hover:border-neutral-500">
            <h4 className="text-4xl font-bold text-white mb-2">9.04</h4>
            <p className="text-neutral-400 font-mono text-xs md:text-sm uppercase tracking-wider">Current CGPA <br/><span className="text-[10px] text-neutral-500">(Up to 5th Semester)</span></p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-lg transition-all duration-300 hover:border-neutral-500">
            <h4 className="text-3xl font-bold text-white mb-2">B.Tech CSE</h4>
            <p className="text-neutral-400 font-mono text-xs md:text-sm uppercase tracking-wider">3rd Year Student</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-lg transition-all duration-300 hover:border-neutral-500 sm:col-span-2 lg:col-span-1">
            <h4 className="text-3xl font-bold text-white mb-2">Full Stack</h4>
            <p className="text-neutral-400 font-mono text-xs md:text-sm uppercase tracking-wider">Primary Focus</p>
          </div>
        </motion.div>
      </div>

      {/* Interactive Journey Timeline */}
      <div className="mt-24 md:mt-32 max-w-3xl relative">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-white mb-16 flex items-center tracking-tight"
        >
          Journey & Milestones
        </motion.h3>
        
        <div className="relative pl-8 md:pl-12 border-l border-neutral-800 space-y-16 pb-8">
          {/* Illuminating Track Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-[-1px] w-[2px] bg-neutral-200 origin-top z-10"
          />

          {[
            { date: "Sept 2023", desc: "Joined VIT AP for B.Tech in Computer Science & Engineering." },
            { date: "Aug 2025", desc: "Cleared Round 1 of the Adobe India Hackathon." },
            { date: "Aug 2025", desc: "Participated in the Amazon Hackathon, competing to build robust software solutions under a strict time limit." },
            { date: "Current", desc: "Actively seeking Software Engineering internship opportunities while consistently grinding Data Structures & Algorithms (323+ LeetCode solved) and mastering Full-Stack web development." }
          ].map((milestone, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 bg-neutral-950 border-2 border-neutral-800 rounded-full z-20 transition-colors duration-500 hover:border-white"></div>
              <h4 className="text-white font-mono text-sm md:text-base mb-2">{milestone.date}</h4>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-xl">
                {milestone.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
