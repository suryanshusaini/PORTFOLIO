import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-navy-900 bg-opacity-90 backdrop-blur-md border-b border-navy-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-accent font-mono tracking-tighter">
          SS.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6 font-mono text-sm">
            <a href="#about" className="text-slate-300 hover:text-accent"><span className="text-accent">01.</span> About</a>
            <a href="#skills" className="text-slate-300 hover:text-accent"><span className="text-accent">02.</span> Skills</a>
            <a href="#projects" className="text-slate-300 hover:text-accent"><span className="text-accent">03.</span> Projects</a>
            <a href="#contact" className="text-slate-300 hover:text-accent"><span className="text-accent">04.</span> Contact</a>
          </div>
          <a href="/suryanshu-saini-resume.pdf" download className="btn-primary py-2 px-4 text-xs font-mono">
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-accent text-2xl" onClick={() => setIsOpen(!isOpen)}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-navy-800 border-b border-navy-700 py-4 px-6 flex flex-col gap-4 font-mono text-center">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-accent block">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-accent block">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-accent block">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-accent block">Contact</a>
          <a href="/resume.pdf" onClick={() => setIsOpen(false)} className="text-accent underline block mt-2">Resume</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
