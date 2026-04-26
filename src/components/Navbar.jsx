import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar({ onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center px-6 py-3 bg-neutral-950 border rounded-full transition-all duration-300 ${
        scrolled
          ? "border-neutral-800 border-b border-b-neutral-700 shadow-lg shadow-black/40"
          : "border-neutral-800"
      }`}
    >
      <div className="flex items-center justify-center gap-4 md:gap-8 text-sm font-mono text-neutral-400">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#skills" className="hover:text-white transition-colors hidden sm:block">Skills</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#contact" className="hover:text-white transition-colors hidden sm:block">Contact</a>

        <button
          onClick={onOpenPalette}
          className="flex items-center gap-2 bg-neutral-950 border border-neutral-800 px-3 py-1.5 rounded hover:border-neutral-600 hover:text-white transition-all duration-300 ml-2"
        >
          <span className="text-neutral-400">Search...</span>
          <span className="text-[10px] bg-neutral-900 border border-neutral-800 px-1.5 py-0.5 rounded tracking-widest text-neutral-500">⌘K</span>
        </button>

        <a
          href="https://drive.google.com/file/d/1v6IkFw4dHvPhL_uH_IEpLXTZOSYampZy/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neutral-900 border border-neutral-800 px-5 py-2 rounded-full hover:border-neutral-400 hover:text-white transition-all duration-200 ease-out font-semibold tracking-wide ml-2 sm:ml-0"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
