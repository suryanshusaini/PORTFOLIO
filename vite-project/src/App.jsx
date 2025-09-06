// src/App.jsx

import { useState, useEffect } from "react"; // 1. Import hooks
import "./App.css";
import Navbar from "./components/Navbar";
// ... import other components

function App() {
  // 2. Add state for theme, checking localStorage for a saved preference
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // 3. Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // 4. useEffect to update the body attribute and localStorage
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      {/* 5. Pass the theme and toggle function to the Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Consistency />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
