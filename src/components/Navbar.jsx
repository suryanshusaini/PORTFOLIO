import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-center px-6 py-4 bg-neutral-950 border-b border-neutral-800"
    >
      <div className="flex items-center gap-6 md:gap-10 text-sm font-mono text-neutral-400 max-w-6xl w-full justify-center lg:justify-end">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#skills" className="hover:text-white transition-colors hidden sm:block">Skills</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#contact" className="hover:text-white transition-colors hidden sm:block">Contact</a>
        
        <a href="/suryanshu-saini-resume.pdf" download className="ml-2 sm:ml-4 bg-neutral-900 border border-neutral-800 px-5 py-2 rounded-md hover:border-neutral-400 hover:text-white transition-all duration-300 font-semibold tracking-wide">
          Resume
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
