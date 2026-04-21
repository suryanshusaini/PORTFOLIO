import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="section-container text-center max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-12 md:p-20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
      >
        <h2 className="text-accent font-mono mb-6 text-base md:text-lg">What's Next?</h2>
        <h3 className="text-5xl md:text-6xl font-bold text-slate-100 mb-8 tracking-tight">Get In Touch</h3>
        <p className="text-slate-400 text-lg md:text-xl mb-14 max-w-2xl mx-auto leading-relaxed">
          I'm actively looking for new opportunities and engaging projects. Whether you have an open role, a project idea, or just want to say hi, my inbox is always open.
        </p>
        
        <a href="mailto:suryanshu.saini@example.com" className="btn-primary inline-block mb-16 text-base md:text-lg px-10 py-5 hover:-translate-y-1 transform transition-transform">
          Say Hello
        </a>

        <div className="flex justify-center gap-12 border-t border-slate-700/50 pt-16">
          <a href="https://www.linkedin.com/in/suryanshu-saini-a4145b216/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent hover:-translate-y-1 transition-all">
            <i className="fab fa-linkedin-in text-3xl"></i>
          </a>
          <a href="https://github.com/suryanshusaini" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent hover:-translate-y-1 transition-all">
            <i className="fab fa-github text-3xl"></i>
          </a>
          <a href="https://leetcode.com/u/Suryanshu_Saini0808/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent hover:-translate-y-1 transition-all">
            <i className="fas fa-code text-3xl"></i>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
