<div align="center">

# Suryanshu Saini — Software Engineer Portfolio

### A high-performance, dynamic developer portfolio featuring a real-time metrics dashboard.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

</div>

---

## Overview

This isn't a static portfolio — it's a **live data dashboard** that aggregates real-time software engineering metrics from GitHub and LeetCode. Built for a premium recruiter experience, every section pulls from live APIs, falls back gracefully on failures, and loads instantly from a local cache. The UI is optimized at the CSS level with hardware-accelerated transitions, custom SVG data visualizations, and a strict 200ms interaction budget.

---

## ✨ Key Features

### 📡 Live Data Dashboard
Real-time integration with the **GitHub API** and **LeetCode API** to surface coding consistency heatmaps, problem-solving metrics (Easy / Medium / Hard breakdown), acceptance rate, global ranking, and top repositories — all rendered dynamically on every visit.

### 🗄️ Production-Ready Caching (Stale-While-Revalidate)
A custom localStorage caching layer ensures:
- **Instant UI hydration** — cached data is loaded synchronously on mount, so there is never a blank state for returning visitors.
- **Zero-downtime resilience** — if a third-party API returns a `500` or `403`, the component silently serves the last-known-good data instead of crashing the UI.
- **Write-through updates** — every successful fetch overwrites the cache with fresh data and stamps a `lastFetched` timestamp.

### ⏱️ Smart 1-Minute Polling with Rate-Limit Protection
Both the LeetCode and GitHub data layers run on a **60-second `setInterval` heartbeat**. A timestamp guard (`Date.now() - lastFetched < 60_000`) prevents redundant fetches during local development hot-reloads, protecting against GitHub's 60 req/hr unauthenticated rate limit.

```js
// Pattern used in Consistency.jsx
const lastFetched = Number(localStorage.getItem(LC_TS_KEY) || 0);
if (Date.now() - lastFetched < POLL_MS) return; // skip if < 60s
```

### ⚡ Hardware-Accelerated UI
- Custom **SVG donut chart** for LeetCode solve totals, animated with `stroke-dashoffset` over 1.2s.
- All interactive cards use `transform: translateY(-4px)` on hover — **no width/height/margin changes** means zero layout reflows.
- Every transition is explicitly typed (`transition-[transform,box-shadow,border-color]`) with a `200ms ease-out` budget and `will-change: transform` on animated SVG nodes.

### 🔍 Full-Portfolio Command Palette
Press `⌘K` (Mac) or `Ctrl+K` (Windows) to open a live-search command palette that indexes every section of the portfolio. Actions include smooth-scrolling to any section, opening GitHub / LeetCode profiles in a new tab, copying the email address to clipboard, and opening the live Resume — all keyboard-driven.

### 🛡️ Professional Error States
Every API failure is handled with a branded **"Service Interruption"** UI — a muted orange warning icon, clear messaging, and a prominent "View Profile" button — so the portfolio always looks intentional, never broken.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) + [Vite 7](https://vitejs.dev/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Animation | [Framer Motion 12](https://www.framer.com/motion/) + [GSAP 3](https://gsap.com/) |
| GitHub Heatmap | [react-github-calendar](https://github.com/grubersjoe/react-github-calendar) |
| LeetCode Heatmap | [react-activity-calendar](https://github.com/grubersjoe/react-activity-calendar) |
| Scroll Reveal | [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) |
| Count Animations | [react-countup](https://github.com/glennreyes/react-countup) |
| APIs | GitHub REST API · LeetCode (cp-stats-api · alfa-leetcode-api) |

---

## ⚙️ Environment Variables

After cloning, create a `.env` file in the project root. The app will fall back to hardcoded defaults if these are missing, but setting them correctly is recommended.

```env
VITE_GITHUB_USERNAME=your_github_username
VITE_LEETCODE_USERNAME=your_leetcode_username
```

> **Note:** `.env` is listed in `.gitignore` and will never be committed to the repository.

---

## 🚀 Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/suryanshusaini/PORTFOLIO.git
cd PORTFOLIO

# 2. Install dependencies
npm install

# 3. Create your environment file manually
echo "VITE_GITHUB_USERNAME=your_github_username" > .env
echo "VITE_LEETCODE_USERNAME=your_leetcode_username" >> .env

# 4. Start the development server
npm run dev
```

The dev server will start at `http://localhost:5173` (default Vite port).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 📁 Project Structure

```
PORTFOLIO/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Floating glassmorphism nav + live Resume link
│   │   ├── CommandPalette.jsx  # ⌘K search — full 9-item portfolio index
│   │   ├── About.jsx           # Hero / introduction section
│   │   ├── Skills.jsx          # Technical skills grid
│   │   ├── Projects.jsx        # Project showcase grid
│   │   ├── Consistency.jsx     # Real-time GitHub + LeetCode dashboard
│   │   ├── Contact.jsx         # Contact section with real Gmail mailto
│   │   └── Preloader.jsx       # Animated entry preloader
│   ├── App.jsx
│   └── main.jsx
├── index.html              # SS monogram favicon + title
├── tailwind.config.js
├── vite.config.js
└── .env                    # Local env vars (not committed)
```

---

## 📬 Connect

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-suryanshusaini-181717?style=for-the-badge&logo=github)](https://github.com/suryanshusaini)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Suryanshu_Saini-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/suryanshusaini)

</div>

---

<div align="center">
  <sub>Built with precision by <strong>Suryanshu Saini</strong> · 2026</sub>
</div>
