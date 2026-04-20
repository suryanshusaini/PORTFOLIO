import React, { useState, useEffect } from "react";

function Consistency() {
  const [lcStats, setLcStats] = useState(null);
  const [ghStats, setGhStats] = useState(null);
  const [loading, setLoading] = useState(true);

  // You can replace these usernames if they differ
  const LEETCODE_USERNAME = "Suryanshu_Saini0808";
  const GITHUB_USERNAME = "suryanshusaini";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [lcRes, ghRes] = await Promise.all([
          fetch(`https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        ]);

        const lcData = await lcRes.json();
        const ghData = await ghRes.json();

        setLcStats(lcData);
        setGhStats(ghData);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="consistency" className="section-container">
      <h2 className="section-title">Consistency & Metrics</h2>
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* LeetCode Card */}
        <div className="bg-navy-800 rounded-lg p-8 border border-navy-700 hover:border-accent transition-colors duration-300">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#FFA116]">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125 2.51v.006a5.278 5.278 0 0 0 1.259 2.457l3.197 3.208a5.269 5.269 0 0 0 2.213 1.34 5.356 5.356 0 0 0 2.607-.03 5.27 5.27 0 0 0 2.05-1.22l3.415-3.393a5.269 5.269 0 0 0 1.36-2.127 5.347 5.347 0 0 0 .1-2.483 5.267 5.267 0 0 0-1.1-2.091L13.483 0zm-1.84 2.808l4.474 4.808-8.29-8.291-1.396 1.4c-.066.066-.118.151-.15.244-.031.094-.037.195-.015.291l5.377 1.548zm-1.077 3.395l5.245 1.509-3.763 3.738-1.482-5.247zm3.896 2.766l1.321-1.312a3.818 3.818 0 0 1 .786 1.517 3.86 3.86 0 0 1-.065 1.79 3.812 3.812 0 0 1-.989 1.513l-3.219 3.196a3.805 3.805 0 0 1-1.48 .884 3.868 3.868 0 0 1-1.88-.027 3.814 3.814 0 0 1-1.597-.968l-3.003-3.01a3.81 3.81 0 0 1-.906-1.772 3.858 3.858 0 0 1 .099-1.815 3.808 3.808 0 0 1 .865-1.503l3.65-3.906 1.139 4.025c.046.166.148.31.294.414.145.105.321.155.498.14a.735.735 0 0 0 .497-.246l3.961-3.931c-.015-.008-.03-.017-.046-.025z"/>
              </svg>
              LeetCode API
            </h3>
            <a href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
          
          {loading ? (
            <p className="text-slate-400 font-mono text-sm">Fetching LeetCode stats...</p>
          ) : lcStats && lcStats.status !== "error" ? (
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-navy-700 pb-2">
                <span className="text-slate-400 font-mono text-sm">Global Ranking</span>
                <span className="text-xl font-semibold text-slate-200">{lcStats.ranking?.toLocaleString() || 'N/A'}</span>
              </div>
              <div className="flex justify-between items-end border-b border-navy-700 pb-2">
                <span className="text-slate-400 font-mono text-sm">Total Solved</span>
                <span className="text-3xl font-bold text-accent">{lcStats.totalSolved}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                <div className="bg-navy-900 rounded p-2">
                  <div className="text-xs text-[#00b8a3] mb-1">Easy</div>
                  <div className="font-semibold text-slate-300">{lcStats.easySolved}</div>
                </div>
                <div className="bg-navy-900 rounded p-2">
                  <div className="text-xs text-[#ffc01e] mb-1">Med</div>
                  <div className="font-semibold text-slate-300">{lcStats.mediumSolved}</div>
                </div>
                <div className="bg-navy-900 rounded p-2">
                  <div className="text-xs text-[#ff375f] mb-1">Hard</div>
                  <div className="font-semibold text-slate-300">{lcStats.hardSolved}</div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-red-400 font-mono text-sm">Unavailable at the moment</p>
          )}
        </div>

        {/* GitHub Card */}
        <div className="bg-navy-800 rounded-lg p-8 border border-navy-700 hover:border-accent transition-colors duration-300">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
              <i className="fab fa-github text-3xl"></i>
              GitHub Activity
            </h3>
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
          
          {loading ? (
            <p className="text-slate-400 font-mono text-sm">Fetching GitHub stats...</p>
          ) : ghStats && !ghStats.message ? (
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-navy-700 pb-2">
                <span className="text-slate-400 font-mono text-sm">Public Repositories</span>
                <span className="text-3xl font-bold text-accent">{ghStats.public_repos}</span>
              </div>
              <div className="flex justify-between items-end border-b border-navy-700 pb-2">
                <span className="text-slate-400 font-mono text-sm">Followers / Following</span>
                <span className="text-xl font-semibold text-slate-200">{ghStats.followers} / {ghStats.following}</span>
              </div>
              <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                Consistent contributions and personal projects pushed daily to track my coding journey and learn new technologies.
              </p>
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
