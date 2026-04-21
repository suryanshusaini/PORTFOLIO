import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
      className="fixed top-6 left-1/2 z-50 flex items-center justify-center px-6 py-3 rounded-full backdrop-blur-md bg-slate-900/60 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] w-11/12 max-w-md md:max-w-xl"
    >
      <div className="flex items-center gap-4 md:gap-8 text-sm font-mono text-slate-300">
        <a href="#about" className="hover:text-accent transition-colors">About</a>
        <a href="#skills" className="hover:text-accent transition-colors hidden sm:block">Skills</a>
        <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
        <a href="#contact" className="hover:text-accent transition-colors hidden sm:block">Contact</a>
        
        <a href="/suryanshu-saini-resume.pdf" download className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full hover:bg-white/10 hover:text-accent transition-all duration-300">
          Resume
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
