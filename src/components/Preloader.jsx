import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Preloader() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
      onAnimationComplete={() => document.body.style.overflow = 'auto'}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a192f] pointer-events-none"
    >
      <div className="relative flex flex-col items-center">
        {/* Pulsing SS Logo */}
        <motion.div
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-5xl font-mono text-accent font-bold tracking-tighter"
        >
          SS.
        </motion.div>
        
        {/* Clean Progress Line */}
        <div className="mt-8 w-48 h-[2px] bg-navy-700 overflow-hidden rounded-full">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-full bg-accent"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Preloader;
