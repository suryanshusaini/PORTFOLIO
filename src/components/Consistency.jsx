import React, { useState, useEffect } from "react";

function Consistency() {
  const [lcStats, setLcStats] = useState(null);
  const [ghStats, setGhStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const LEETCODE_USERNAME = "Suryanshu_Saini0808";
  const GITHUB_USERNAME = "suryanshusaini";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchLeetCode = async () => {
          try {
            const res = await fetch(`https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}`);
            if (!res.ok) throw new Error("LeetCode fetch error");
            const data = await res.json();
            if (data.errors) throw new Error("API returned errors");
            setLcStats(data);
          } catch (error) {
            setLcStats({ totalSolved: 323, easySolved: 183, mediumSolved: 130, hardSolved: 10 });
          }
        };

        const fetchGitHub = async () => {
          try {
            const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
            if (!res.ok) throw new Error("GitHub fetch error");
            const data = await res.json();
            setGhStats(data);
          } catch (error) {
            console.error("Error fetching GitHub stats:", error);
          }
        };

        await Promise.all([fetchLeetCode(), fetchGitHub()]);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Helpers for the SVG donut chart
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  
  const getStrokeDashOffset = (value, total) => {
    if (!total) return circumference;
    const percentage = value / total;
    return circumference - percentage * circumference;
  };

  const getStrokeDashArray = (value, total) => {
    if (!total) return `0 ${circumference}`;
    const percentage = value / total;
    return `${percentage * circumference} ${circumference}`;
  };

  // Pulse skeleton component inside
  const Skeleton = ({ className }) => (
    <div className={`animate-pulse bg-navy-700 rounded ${className}`}></div>
  );

  return (
    <section id="consistency" className="section-container">
      <h2 className="section-title">Consistency & Metrics</h2>
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* LeetCode Card */}
        <div className="bg-navy-800 rounded-lg p-8 border border-navy-700 hover:border-accent hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#FFA116]">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125 2.51v.006a5.278 5.278 0 0 0 1.259 2.457l3.197 3.208a5.269 5.269 0 0 0 2.213 1.34 5.356 5.356 0 0 0 2.607-.03 5.27 5.27 0 0 0 2.05-1.22l3.415-3.393a5.269 5.269 0 0 0 1.36-2.127 5.347 5.347 0 0 0 .1-2.483 5.267 5.267 0 0 0-1.1-2.091L13.483 0zm-1.84 2.808l4.474 4.808-8.29-8.291-1.396 1.4c-.066.066-.118.151-.15.244-.031.094-.037.195-.015.291l5.377 1.548zm-1.077 3.395l5.245 1.509-3.763 3.738-1.482-5.247zm3.896 2.766l1.321-1.312a3.818 3.818 0 0 1 .786 1.517 3.86 3.86 0 0 1-.065 1.79 3.812 3.812 0 0 1-.989 1.513l-3.219 3.196a3.805 3.805 0 0 1-1.48 .884 3.868 3.868 0 0 1-1.88-.027 3.814 3.814 0 0 1-1.597-.968l-3.003-3.01a3.81 3.81 0 0 1-.906-1.772 3.858 3.858 0 0 1 .099-1.815 3.808 3.808 0 0 1 .865-1.503l3.65-3.906 1.139 4.025c.046.166.148.31.294.414.145.105.321.155.498.14a.735.735 0 0 0 .497-.246l3.961-3.931c-.015-.008-.03-.017-.046-.025z"/>
              </svg>
              LeetCode
            </h3>
            <a href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
          
          {loading ? (
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Skeleton className="w-32 h-32 rounded-full" />
              <div className="flex-1 space-y-4 w-full">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          ) : lcStats ? (
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Donut Chart */}
              <div className="relative w-32 h-32 flex-shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {/* Background Circle */}
                  <circle cx="50" cy="50" r={radius} fill="none" stroke="#1e293b" strokeWidth="8" />
                  
                  {/* Hard Circle (Bottom Layer) */}
                  <circle 
                    cx="50" cy="50" r={radius} fill="none" 
                    stroke="#ff375f" strokeWidth="8" 
                    strokeDasharray={getStrokeDashArray(lcStats.totalSolved, lcStats.totalSolved)}
                    className="transition-all duration-1000 ease-out"
                  />
                  {/* Medium Circle (Middle Layer) */}
                  <circle 
                    cx="50" cy="50" r={radius} fill="none" 
                    stroke="#ffc01e" strokeWidth="8" 
                    strokeDasharray={getStrokeDashArray(lcStats.easySolved + lcStats.mediumSolved, lcStats.totalSolved)}
                    className="transition-all duration-1000 ease-out"
                  />
                  {/* Easy Circle (Top Layer) */}
                  <circle 
                    cx="50" cy="50" r={radius} fill="none" 
                    stroke="#00b8a3" strokeWidth="8" 
                    strokeDasharray={getStrokeDashArray(lcStats.easySolved, lcStats.totalSolved)}
                    className="transition-all duration-1000 ease-out"
                    strokeLinecap="round"
                  />
                </svg>
                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-slate-100">{lcStats.totalSolved}</span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400">Solved</span>
                </div>
              </div>

              {/* Stats Legends */}
              <div className="flex-1 w-full space-y-3">
                <div className="flex justify-between items-center bg-navy-900 px-3 py-2 rounded">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#00b8a3]"></div>
                    <span className="text-sm font-medium text-slate-300">Easy</span>
                  </div>
                  <span className="font-mono text-slate-100">{lcStats.easySolved}</span>
                </div>
                <div className="flex justify-between items-center bg-navy-900 px-3 py-2 rounded">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ffc01e]"></div>
                    <span className="text-sm font-medium text-slate-300">Medium</span>
                  </div>
                  <span className="font-mono text-slate-100">{lcStats.mediumSolved}</span>
                </div>
                <div className="flex justify-between items-center bg-navy-900 px-3 py-2 rounded">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff375f]"></div>
                    <span className="text-sm font-medium text-slate-300">Hard</span>
                  </div>
                  <span className="font-mono text-slate-100">{lcStats.hardSolved}</span>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* GitHub Card */}
        <div className="bg-navy-800 rounded-lg p-8 border border-navy-700 hover:border-accent hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all duration-300 transform hover:-translate-y-1">
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
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Skeleton className="w-16 h-16 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-5 w-1/3" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
              </div>
            </div>
          ) : ghStats && !ghStats.message ? (
            <div className="space-y-6">
              {/* Profile Bar */}
              <div className="flex items-center gap-4 border-b border-navy-700 pb-6">
                <img 
                  src={ghStats.avatar_url} 
                  alt="GitHub Avatar" 
                  className="w-16 h-16 rounded-full border-2 border-accent shadow-[0_0_10px_rgba(45,212,191,0.2)]"
                />
                <div>
                  <h4 className="text-lg font-bold text-slate-100">{ghStats.name || ghStats.login}</h4>
                  <p className="text-sm font-mono text-accent">@{ghStats.login}</p>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy-900 p-4 rounded-lg flex flex-col justify-center items-center text-center border border-navy-700 hover:border-slate-500 transition-colors">
                  <span className="text-3xl font-bold text-slate-100 mb-1">{ghStats.public_repos}</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Public Repos</span>
                </div>
                <div className="bg-navy-900 p-4 rounded-lg flex flex-col justify-center items-center text-center border border-navy-700 hover:border-slate-500 transition-colors">
                  <span className="text-3xl font-bold text-slate-100 mb-1">{ghStats.followers}</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Followers</span>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-red-400 font-mono text-sm">Unavailable at the moment</p>
          )}
        </div>

      </div>
    </section>
  );
}

export default Consistency;
