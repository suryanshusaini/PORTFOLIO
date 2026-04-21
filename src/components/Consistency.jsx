import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Consistency() {
  const [ghStats, setGhStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const GITHUB_USERNAME = "suryanshusaini";

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!res.ok) throw new Error("GitHub fetch error");
        const data = await res.json();
        setGhStats(data);
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGitHub();
  }, []);

  const Skeleton = ({ className }) => (
    <div className={`animate-pulse bg-slate-700/50 rounded ${className}`}></div>
  );

  return (
    <section id="consistency" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Consistency & Metrics
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* LeetCode Card via Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-800/40 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-slate-700/50 hover:border-slate-600/50 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(100,255,218,0.1)] transition-all duration-300 flex flex-col justify-between h-full"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#FFA116]">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125 2.51v.006a5.278 5.278 0 0 0 1.259 2.457l3.197 3.208a5.269 5.269 0 0 0 2.213 1.34 5.356 5.356 0 0 0 2.607-.03 5.27 5.27 0 0 0 2.05-1.22l3.415-3.393a5.269 5.269 0 0 0 1.36-2.127 5.347 5.347 0 0 0 .1-2.483 5.267 5.267 0 0 0-1.1-2.091L13.483 0z"/>
              </svg>
              LeetCode
            </h3>
            <a href="https://leetcode.com/u/Suryanshu_Saini0808/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
          <div className="w-full flex-grow flex items-center justify-center">
            <img 
              src="https://leetcard.jacoblin.cool/Suryanshu_Saini0808?theme=dark&font=Inter&ext=activity" 
              alt="LeetCode Stats" 
              className="w-full h-auto object-cover rounded-xl" 
            />
          </div>
        </motion.div>

        {/* GitHub Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-slate-800/40 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-slate-700/50 hover:border-slate-600/50 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(100,255,218,0.1)] transition-all duration-300 flex flex-col justify-between h-full"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
              <i className="fab fa-github text-3xl"></i>
              GitHub Activity
            </h3>
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
          
          {loading ? (
            <div className="space-y-8 flex-grow">
              <div className="flex items-center gap-6">
                <Skeleton className="w-20 h-20 rounded-full" />
                <div className="space-y-3 flex-1">
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
              </div>
            </div>
          ) : ghStats && !ghStats.message ? (
            <div className="space-y-8 flex-grow flex flex-col justify-center">
              {/* Profile Bar */}
              <div className="flex items-center gap-6 border-b border-slate-700/50 pb-8">
                <img 
                  src={ghStats.avatar_url} 
                  alt="GitHub Avatar" 
                  className="w-20 h-20 rounded-full border border-slate-600 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                />
                <div>
                  <h4 className="text-xl font-bold text-slate-100">{ghStats.name || ghStats.login}</h4>
                  <p className="text-base font-mono text-accent">@{ghStats.login}</p>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-6 rounded-2xl flex flex-col justify-center items-center text-center border border-slate-700/50">
                  <span className="text-4xl font-bold text-slate-100 mb-2">{ghStats.public_repos}</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Public Repos</span>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-2xl flex flex-col justify-center items-center text-center border border-slate-700/50">
                  <span className="text-4xl font-bold text-slate-100 mb-2">{ghStats.followers}</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Followers</span>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-red-400 font-mono text-sm">Unavailable at the moment</p>
          )}
        </motion.div>

      </div>
    </section>
  );
}

export default Consistency;
