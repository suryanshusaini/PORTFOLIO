import React from "react";

function Footer() {
  return (
    <footer className="py-6 text-center border-t border-navy-700 mt-12">
      <p className="text-slate-500 font-mono text-sm hover:text-accent transition-colors">
        &copy; {new Date().getFullYear()} Designed & Built by Suryanshu Saini.
      </p>
    </footer>
  );
}

export default Footer;
