import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { ActivityCalendar } from "react-activity-calendar";

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────
const GITHUB_USERNAME = "suryanshusaini";
const LEETCODE_USER   = "Suryanshu_Saini0808";
const LC_PROFILE      = `https://leetcode.com/u/${LEETCODE_USER}/`;

const GH_THEME = {
  dark: ["#161b22", "#0d3320", "#145c32", "#1a8a48", "#22c55e"],
};

const LC_CAL_THEME = {
  dark: ["#171717", "#166534", "#22c55e", "#4ade80", "#86efac"],
};

// ─────────────────────────────────────────────────────────────────────────────
// GitHub fallback repos (silent 403 fallback)
// ─────────────────────────────────────────────────────────────────────────────
const FALLBACK_REPOS = [
  { id: 1, name: "yatri_mitra",           html_url: "https://github.com/suryanshusaini/yatri_mitra", description: "Collaborative travel and transit application",            language: "JavaScript" },
  { id: 2, name: "ai-interview-platform", html_url: "https://github.com/suryanshusaini",              description: "AI-driven interview preparation platform",               language: "React"      },
  { id: 3, name: "developer-portfolio",   html_url: "https://github.com/suryanshusaini",              description: "High-performance React portfolio with custom animations", language: "React"      },
  { id: 4, name: "dsa-java",              html_url: "https://github.com/suryanshusaini",              description: "Core repository of solved technical interview algorithms", language: "Java"       },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
const langDot = (lang) => ({
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-400",
  Python:     "bg-blue-500",
  HTML:       "bg-orange-500",
  Java:       "bg-red-500",
  React:      "bg-cyan-400",
}[lang] ?? "bg-neutral-500");

// Transform Unix-ts map → ActivityCalendar data shape
function parseCalendar(raw) {
  if (!raw || typeof raw !== "object") return [];
  const entries = Object.keys(raw).map(ts => {
    const count = raw[ts];
    let level = 1;
    if (count >= 2) level = 2;
    if (count >= 4) level = 3;
    if (count >= 6) level = 4;
    return { date: new Date(ts * 1000).toISOString().split("T")[0], count, level };
  });
  entries.sort((a, b) => a.date.localeCompare(b.date));
  const today = new Date().toISOString().split("T")[0];
  if (!entries.find(e => e.date === today)) entries.push({ date: today, count: 0, level: 0 });
  return entries;
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
function Consistency() {

  // ── LeetCode state ────────────────────────────────────────────
  const [lcStats,     setLCStats]     = useState(null);
  const [lcCal,       setLCCal]       = useState([]);
  const [lcLoading,   setLCLoading]   = useState(true);
  const [lcError,     setLCError]     = useState(false);

  // ── GitHub state ──────────────────────────────────────────────
  const [repos,       setRepos]       = useState([]);
  const [ghLoading,   setGHLoading]   = useState(true);

  // ── Effects ──────────────────────────────────────────────────

  // LeetCode — fetch stats + calendar in one block
  useEffect(() => {
    const run = async () => {
      setLCLoading(true);
      setLCError(false);
      try {
        // Stats (cp-stats-api — exact nested structure)
        const statsRes = await fetch(
          `https://cp-stats-api.onrender.com/api/leetcode/${LEETCODE_USER}`
        );
        if (!statsRes.ok) throw new Error("Stats API error");
        const statsData = await statsRes.json();
        console.log("LeetCode API Raw Data:", statsData);
        setLCStats(statsData);

        // Calendar (alfa-leetcode-api)
        const calRes = await fetch(
          `https://alfa-leetcode-api.onrender.com/${LEETCODE_USER}/calendar`
        );
        if (!calRes.ok) throw new Error("Calendar API error");
        const calData = await calRes.json();

        if (calData?.submissionCalendar) {
          const parsed = typeof calData.submissionCalendar === "string"
            ? JSON.parse(calData.submissionCalendar)
            : calData.submissionCalendar;
          setLCCal(parseCalendar(parsed));
        }
      } catch (err) {
        console.error("LeetCode Fetch Error:", err);
        setLCError(true);
      } finally {
        setLCLoading(false);
      }
    };
    run();
  }, []);

  // GitHub repos — silent fallback on 403
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=4`
        );
        if (!res.ok) { setRepos(FALLBACK_REPOS); return; }
        const data = await res.json();
        setRepos(data.length ? data : FALLBACK_REPOS);
      } catch {
        setRepos(FALLBACK_REPOS);
      } finally {
        setGHLoading(false);
      }
    })();
  }, []);

  // ── Derived LC maths (exact cp-stats-api nested paths) ───────
  const circ   = 2 * Math.PI * 42;
  const total  = lcStats?.data?.total?.solved           || 0;
  const easy   = lcStats?.data?.difficulty?.easy?.solved   || 0;
  const medium = lcStats?.data?.difficulty?.medium?.solved || 0;
  const hard   = lcStats?.data?.difficulty?.hard?.solved   || 0;
  const accept = lcStats?.data?.stats?.acceptanceRate      || "—";
  const rank   = lcStats?.data?.ranking                    || "—";
  const dotOffset = total
    ? circ * (1 - Math.min(total / Math.max(total * 1.4, 400), 1))
    : circ;

  // ─────────────────────────────────────────────────────────────
  // Card shell
  // ─────────────────────────────────────────────────────────────
  const Card = ({ children, delay = 0, glow = "rgba(255,255,255,0.05)", border = "hover:border-neutral-600", className = "" }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.012, boxShadow: `0 0 36px 0 ${glow}` }}
      className={`bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col ${border} transition-all duration-300 cursor-default ${className}`}
    >
      {children}
    </motion.div>
  );

  // ─────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────
  return (
    <section id="consistency" className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-title"
      >
        Consistency &amp; Metrics
      </motion.h2>

      <div className="flex flex-col gap-8 w-full">

        {/* ══════════════════════════════════════════════════════════
            ROW 1 — GitHub Activity Calendar (full width)
        ══════════════════════════════════════════════════════════ */}
        <Card
          delay={0.1}
          glow="rgba(34,197,94,0.12)"
          border="hover:border-[#22c55e]/30"
          className="w-full"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              <i className="fab fa-github text-2xl" />
              GitHub Activity
            </h3>
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors text-sm">
              <i className="fas fa-external-link-alt" />
            </a>
          </div>

          {/* Calendar */}
          <div className="w-full overflow-x-auto flex items-center justify-center py-2">
            <GitHubCalendar
              username={GITHUB_USERNAME}
              colorScheme="dark"
              theme={GH_THEME}
              blockSize={13}
              blockRadius={3}
              blockMargin={4}
              fontSize={11}
              style={{ color: "#6b7280" }}
            />
          </div>
        </Card>

        {/* ══ Row 2: LeetCode Activity Calendar (full width) ══ */}
        <Card
          delay={0.15}
          glow="rgba(255,161,22,0.10)"
          border="hover:border-[#FFA116]/20"
          className="w-full"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#FFA116]">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125 2.51v.006a5.278 5.278 0 0 0 1.259 2.457l3.197 3.208a5.269 5.269 0 0 0 2.213 1.34 5.356 5.356 0 0 0 2.607-.03 5.27 5.27 0 0 0 2.05-1.22l3.415-3.393a5.269 5.269 0 0 0 1.36-2.127 5.347 5.347 0 0 0 .1-2.483 5.267 5.267 0 0 0-1.1-2.091L13.483 0z" />
              </svg>
              LeetCode Activity
            </h3>
            <a href={LC_PROFILE} target="_blank" rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors text-sm">
              <i className="fas fa-external-link-alt" />
            </a>
          </div>
          {/* Calendar */}
          <div className="w-full overflow-x-auto flex items-center justify-center py-2">
            {lcLoading ? (
              <div className="w-full flex flex-col gap-2 animate-pulse">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-3 bg-neutral-800 rounded-full" style={{ width: `${70 + (i % 3) * 10}%` }} />
                ))}
              </div>
            ) : lcCal.length > 0 ? (
              <ActivityCalendar
                data={lcCal}
                colorScheme="dark"
                theme={LC_CAL_THEME}
                blockSize={15}
                blockRadius={3}
                blockMargin={4}
                fontSize={14}
                labels={{ totalCount: "{{count}} submissions in the past year" }}
                style={{ color: "#6b7280" }}
              />
            ) : (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <p className="text-neutral-500 text-sm font-mono">Calendar unavailable</p>
                <a href={LC_PROFILE} target="_blank" rel="noopener noreferrer"
                  className="px-4 py-1.5 text-xs font-mono text-neutral-400 border border-neutral-700 rounded-lg hover:border-neutral-500 hover:text-white transition-all">
                  View on LeetCode ↗
                </a>
              </div>
            )}
          </div>
        </Card>

        {/* ══ Row 3: Side-by-side split ══ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">

        {/* ══════════════════════════════════════════════════════════
            ROW 3 LEFT — LeetCode Stats Card
        ══════════════════════════════════════════════════════════ */}
        <Card
          delay={0.2}
          glow="rgba(255,161,22,0.12)"
          border="hover:border-[#FFA116]/30"
          className="min-h-[420px]"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#FFA116]">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125 2.51v.006a5.278 5.278 0 0 0 1.259 2.457l3.197 3.208a5.269 5.269 0 0 0 2.213 1.34 5.356 5.356 0 0 0 2.607-.03 5.27 5.27 0 0 0 2.05-1.22l3.415-3.393a5.269 5.269 0 0 0 1.36-2.127 5.347 5.347 0 0 0 .1-2.483 5.267 5.267 0 0 0-1.1-2.091L13.483 0z" />
              </svg>
              LeetCode
            </h3>
            <a href={LC_PROFILE} target="_blank" rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors text-sm">
              <i className="fas fa-external-link-alt" />
            </a>
          </div>

          {/* Body */}
          <div className="flex-grow flex items-center justify-center">
            {lcLoading ? (
              /* Skeleton */
              <div className="w-full flex flex-col items-center gap-5 animate-pulse">
                <div className="w-40 h-40 bg-neutral-800 rounded-full" />
                <p className="text-neutral-600 text-xs font-mono tracking-widest">Waking up API...</p>
                <div className="w-full grid grid-cols-3 gap-3">
                  {[1,2,3].map(i => <div key={i} className="h-20 bg-neutral-800 rounded-lg" />)}
                </div>
              </div>
            ) : lcError ? (
              /* Error */
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-neutral-700 text-neutral-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-neutral-300 text-sm font-mono font-semibold">LeetCode Stats unavailable</p>
                  <p className="text-neutral-600 text-xs mt-1">API may be sleeping. Try refreshing.</p>
                </div>
                <a href={LC_PROFILE} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 text-xs font-mono text-neutral-300 border border-neutral-700 rounded-lg hover:border-[#FFA116]/60 hover:text-white transition-all">
                  View on LeetCode ↗
                </a>
              </div>
            ) : (
              /* Live Stats */
              <div className="w-full flex flex-col items-center gap-6">

                {/* Donut + breakdown side by side */}
                <div className="w-full flex items-center gap-8">

                  {/* SVG Donut */}
                  <div className="group relative flex items-center justify-center shrink-0">
                    <svg width="148" height="148" className="-rotate-90 transition-transform duration-500 group-hover:scale-105">
                      <circle cx="74" cy="74" r="42" fill="none" stroke="#262626" strokeWidth="14" />
                      <circle cx="74" cy="74" r="42" fill="none"
                        stroke="#FFA116" strokeWidth="14" strokeLinecap="round"
                        strokeDasharray={circ} strokeDashoffset={dotOffset}
                        style={{ transition: "stroke-dashoffset 1.2s ease" }}
                      />
                    </svg>
                    {/* Default: total */}
                    <div className="absolute flex flex-col items-center transition-opacity duration-300 group-hover:opacity-0">
                      <span className="text-3xl font-bold text-white">{total}</span>
                      <span className="text-[10px] text-neutral-500 font-mono">solved</span>
                    </div>
                    {/* Hover: acceptance rate */}
                    <div className="absolute flex flex-col items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="text-xl font-bold text-[#FFA116]">{accept}%</span>
                      <span className="text-[10px] text-neutral-500 font-mono">acceptance</span>
                    </div>
                  </div>

                  {/* Stacked bars */}
                  <div className="flex-1 flex flex-col gap-3">
                    {[
                      { label: "Easy",   n: easy,   col: "text-emerald-400", bar: "bg-emerald-400" },
                      { label: "Medium", n: medium, col: "text-[#FFA116]",   bar: "bg-[#FFA116]"   },
                      { label: "Hard",   n: hard,   col: "text-red-400",     bar: "bg-red-400"     },
                    ].map(({ label, n, col, bar }) => (
                      <div key={label}>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-neutral-400">{label}</span>
                          <span className={col}>{n}</span>
                        </div>
                        <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                          <div className={`h-full ${bar} rounded-full`}
                            style={{ width: `${total ? (n / total) * 100 : 0}%`, transition: "width 1.2s ease" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ranking */}
                <div className="w-full flex justify-between text-xs font-mono text-neutral-500 border-t border-neutral-800 pt-4">
                  <span>Global Ranking</span>
                  <span className="text-white font-semibold">{rank}</span>
                </div>


              </div>
            )}
          </div>
        </Card>

        {/* ══════════════════════════════════════════════════════════
            ROW 3 RIGHT — Top Repositories
        ══════════════════════════════════════════════════════════ */}
        <Card
          delay={0.3}
          glow="rgba(34,197,94,0.10)"
          border="hover:border-[#22c55e]/20"
          className="min-h-[420px]"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              <i className="fab fa-github text-2xl" />
              Top Repositories
            </h3>
            <a href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`} target="_blank" rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors text-sm">
              <i className="fas fa-external-link-alt" />
            </a>
          </div>

          {/* Repo grid */}
          <div className="flex-grow flex items-center justify-center">
            {ghLoading ? (
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1,2,3,4].map(i => <div key={i} className="animate-pulse bg-neutral-800 rounded-lg h-28" />)}
              </div>
            ) : (
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                {repos.map(repo => (
                  <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer"
                    className="flex flex-col bg-neutral-950 border border-neutral-800 rounded-lg p-4 hover:border-neutral-500 transition-colors group">
                    <h4 className="text-white font-semibold mb-2 group-hover:text-blue-400 flex items-center gap-2 text-sm truncate">
                      <i className="far fa-folder shrink-0" /> {repo.name}
                    </h4>
                    <p className="text-neutral-400 text-xs mb-4 line-clamp-2">
                      {repo.description || "No description provided."}
                    </p>
                    {repo.language && (
                      <div className="mt-auto flex items-center gap-2 text-xs text-neutral-500 font-mono">
                        <span className={`w-2 h-2 rounded-full shrink-0 ${langDot(repo.language)}`} />
                        {repo.language}
                      </div>
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>
        </Card>

        </div> {/* end row-3 grid */}

      </div>
    </section>
  );
}

export default Consistency;
