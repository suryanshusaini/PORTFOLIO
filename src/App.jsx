import "./App.css";
import React, { useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Consistency from "./components/Consistency";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GridBackground from "./components/GridBackground";
import CommandPalette from "./components/CommandPalette";

function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <>
      <Preloader />
      <GridBackground />
      <CommandPalette isOpen={isCommandPaletteOpen} setIsOpen={setIsCommandPaletteOpen} />

      <div className="relative z-0">
        <Navbar onOpenPalette={() => setIsCommandPaletteOpen(true)} />
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
