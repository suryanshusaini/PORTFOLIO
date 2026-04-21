import React from "react";

function Footer() {
  return (
    <footer className="py-6 text-center border-t border-neutral-800 mt-12 bg-neutral-950">
      <p className="text-neutral-500 font-mono text-sm hover:text-white transition-colors">
        &copy; {new Date().getFullYear()} Designed & Built by Suryanshu Saini.
      </p>
    </footer>
  );
}

export default Footer;
