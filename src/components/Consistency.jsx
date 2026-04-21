import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Consistency() {
  const GITHUB_USERNAME = "suryanshusaini";
  const [isLeetCodeLoading, setIsLeetCodeLoading] = useState(true);
  const [isGithubLoading, setIsGithubLoading] = useState(true);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Keep a simulated loading state for leetcode since it's an image load
    const timer = setTimeout(() => {
      setIsLeetCodeLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=4`);
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        }
      } catch (error) {
        console.error("Error fetching github repos:", error);
      } finally {
        setIsGithubLoading(false);
      }
    };
    fetchRepos();
  }, [GITHUB_USERNAME]);

  return (
    <section id="consistency" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="section-title"
      >
        Consistency & Metrics
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* LeetCode Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="bg-neutral-900 rounded-lg p-8 lg:p-12 border border-neutral-800 hover:border-neutral-500 transition-all duration-300 flex flex-col justify-between h-full"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#FFA116]">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125 2.51v.006a5.278 5.278 0 0 0 1.259 2.457l3.197 3.208a5.269 5.269 0 0 0 2.213 1.34 5.356 5.356 0 0 0 2.607-.03 5.27 5.27 0 0 0 2.05-1.22l3.415-3.393a5.269 5.269 0 0 0 1.36-2.127 5.347 5.347 0 0 0 .1-2.483 5.267 5.267 0 0 0-1.1-2.091L13.483 0z"/>
              </svg>
              LeetCode
            </h3>
            <a href="https://leetcode.com/u/Suryanshu_Saini0808/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
          <div className="w-full flex-grow flex items-center justify-center">
            {isLeetCodeLoading ? (
              <div className="animate-pulse flex items-center gap-6 w-full max-w-sm">
                <div className="w-24 h-24 bg-neutral-800 rounded-full shrink-0"></div>
                <div className="flex-1 space-y-4">
                  <div className="h-3 bg-neutral-800 rounded-md w-full"></div>
                  <div className="h-3 bg-neutral-800 rounded-md w-5/6"></div>
                  <div className="h-3 bg-neutral-800 rounded-md w-4/6"></div>
                </div>
              </div>
            ) : (
              <img 
                src="https://leetcard.jacoblin.cool/Suryanshu_Saini0808?theme=dark&font=Inter&ext=activity" 
                alt="LeetCode Stats" 
                className="w-full h-auto object-cover rounded-xl" 
              />
            )}
          </div>
        </motion.div>

        {/* GitHub Card - Top Repositories Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="bg-neutral-900 rounded-lg p-8 lg:p-12 border border-neutral-800 hover:border-neutral-500 transition-all duration-300 flex flex-col h-full"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <i className="fab fa-github text-3xl"></i>
              Top Repositories
            </h3>
            <a href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
          
          <div className="w-full flex-grow">
            {isGithubLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="animate-pulse bg-neutral-800 rounded-lg h-28"></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {repos.map((repo) => (
                  <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex flex-col bg-neutral-950 border border-neutral-800 rounded-lg p-4 hover:border-neutral-500 transition-colors group">
                    <h4 className="text-white font-semibold mb-2 group-hover:text-blue-400 flex items-center gap-2 text-sm">
                      <i className="far fa-folder"></i> {repo.name}
                    </h4>
                    <p className="text-neutral-400 text-xs mb-4 line-clamp-2">
                      {repo.description || "No description provided."}
                    </p>
                    {repo.language && (
                      <div className="mt-auto flex items-center gap-2 text-xs text-neutral-500 font-mono">
                        <span className={`w-2 h-2 rounded-full ${repo.language === 'JavaScript' ? 'bg-yellow-400' : repo.language === 'Python' ? 'bg-blue-500' : repo.language === 'HTML' ? 'bg-orange-500' : 'bg-neutral-500'}`}></span> {repo.language}
                      </div>
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Consistency;
