import "./App.css";
import React from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Consistency from "./components/Consistency";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Preloader />
      
      {/* Ambient Double Combination Mesh Background */}
      <div className="fixed inset-0 z-[-1] bg-navy-900 pointer-events-none overflow-hidden">
        {/* Top-Left Teal/Cyan Glow */}
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-teal-500/10 blur-[120px]" />
        {/* Bottom-Right Indigo Glow */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-indigo-500/10 blur-[150px]" />
      </div>

      <div className="relative z-0">
        <Navbar />
        <main className="flex flex-col gap-8 px-4 md:px-0 pt-24 pb-16">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Consistency />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
