import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Consistency() {
  const GITHUB_USERNAME = "suryanshusaini";

  return (
    <section id="consistency" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="section-title"
      >
        Consistency & Metrics
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* LeetCode Card via Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="bg-neutral-900 rounded-lg p-8 lg:p-12 border border-neutral-800 hover:border-neutral-500 transition-all duration-300 flex flex-col justify-between h-full"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#FFA116]">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125 2.51v.006a5.278 5.278 0 0 0 1.259 2.457l3.197 3.208a5.269 5.269 0 0 0 2.213 1.34 5.356 5.356 0 0 0 2.607-.03 5.27 5.27 0 0 0 2.05-1.22l3.415-3.393a5.269 5.269 0 0 0 1.36-2.127 5.347 5.347 0 0 0 .1-2.483 5.267 5.267 0 0 0-1.1-2.091L13.483 0z"/>
              </svg>
              LeetCode
            </h3>
            <a href="https://leetcode.com/u/Suryanshu_Saini0808/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
          <div className="w-full flex-grow flex items-center justify-center">
            <img 
              src="https://leetcard.jacoblin.cool/Suryanshu_Saini0808?theme=dark&font=Inter&ext=activity" 
              alt="LeetCode Stats" 
              className="w-full h-auto object-cover rounded-xl" 
            />
          </div>
        </motion.div>

        {/* GitHub Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="bg-neutral-900 rounded-lg p-8 lg:p-12 border border-neutral-800 hover:border-neutral-500 transition-all duration-300 flex flex-col justify-between h-full"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <i className="fab fa-github text-3xl"></i>
              GitHub Activity
            </h3>
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
          
          <div className="w-full flex-grow flex items-center justify-center">
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=ffffff&text_color=a3a3a3&icon_color=ffffff&bg_color=transparent`} 
              alt="GitHub Stats" 
              className="w-full h-auto object-cover" 
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Consistency;
