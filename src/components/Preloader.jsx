import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Preloader() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
      onAnimationComplete={() => document.body.style.overflow = 'auto'}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950 pointer-events-none"
    >
      <div className="relative flex flex-col items-center">
        {/* Developer Tag Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-mono text-white font-medium tracking-tight mb-6"
        >
          &lt;Suryanshu Saini /&gt;
        </motion.div>
        
        {/* Stark Progress Line */}
        <div className="w-64 sm:w-80 h-[1px] overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-full bg-white"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Preloader;
