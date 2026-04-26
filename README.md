<div align="center">

# Suryanshu Saini | Developer Portfolio

### A high-performance, dynamic portfolio and real-time metrics dashboard built by a Computer Science student.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

---

## Overview

This isn't a static portfolio. It's a **live data dashboard** built to demonstrate practical frontend architecture — specifically how to integrate third-party APIs, implement resilient caching, and keep a UI performant under real-world constraints.

It aggregates real-time coding metrics from GitHub and LeetCode, renders them through custom SVG charts and activity heatmaps, and handles API failures gracefully so the page never looks broken. Every architectural decision (caching strategy, polling interval, transition budget) was made intentionally.

Built as a 3rd-year Computer Science student to showcase the gap between "can write React" and "can architect a production-quality frontend."

---

## ✨ Key Technical Features

### 📡 Live Data Dashboard
Real-time API integration with the **GitHub REST API** and **LeetCode API** (`cp-stats-api` + `alfa-leetcode-api`). Surfaces coding consistency heatmaps, problem-solving breakdowns (Easy / Medium / Hard), acceptance rate, locale-formatted global ranking, and top repositories — all rendered dynamically on every visit.

### 🗄️ Production-Ready Caching (Stale-While-Revalidate)
A custom `localStorage` caching layer with three guarantees:
- **Instant UI hydration** — cached data is read synchronously on mount; returning visitors never see a blank/loading state.
- **Zero-downtime resilience** — on a `500` or `403` API response, the component silently falls back to the last-known-good cache instead of triggering an error state.
- **Write-through on success** — every successful fetch overwrites the cache and stamps a `lastFetched` timestamp for the polling guard.

### ⏱️ Smart 1-Minute Polling with Rate-Limit Protection
Both data layers run on a `setInterval` heartbeat at 60-second intervals. A timestamp guard prevents redundant fetches during local development hot-reloads:

```js
// Consistency.jsx — rate-limit guard
const lastFetched = Number(localStorage.getItem(LC_TS_KEY) || 0);
if (Date.now() - lastFetched < 60_000) return; // skip if < 60s since last fetch
```

Intervals are cleaned up on unmount via `clearInterval` in the `useEffect` return — no memory leaks.

### ⚡ Hardware-Accelerated UI
- Custom **SVG donut chart** animating `stroke-dashoffset` over 1.2s to visualise LeetCode solve totals.
- All card hover states use `transform: translateY(-4px)` — no `width`, `height`, or `margin` changes, so zero layout reflows.
- Transitions are explicitly scoped (`transition-[transform,box-shadow,border-color]`) with a strict `200ms ease-out` budget and `will-change: transform` on animated SVG nodes.

### 🔍 Full-Portfolio Command Palette
Press `⌘K` (Mac) or `Ctrl+K` (Windows) to open a live-search command palette with 9 indexed actions — smooth-scroll to any section, open GitHub / LeetCode profiles, copy email to clipboard, or launch the live Resume link. Fully keyboard-driven.

### 🛡️ Professional Error States
`500` and `403` API failures are handled with a branded **"Service Interruption"** UI — a muted warning icon, a clear status message, and a direct profile link — so the portfolio always looks intentional, never broken.

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
| APIs | GitHub REST API · cp-stats-api · alfa-leetcode-api |

---

## ⚙️ Environment Variables

After cloning, create a `.env` file in the project root. The app includes hardcoded fallback values so it won't crash without them, but providing your own is recommended.

```env
VITE_GITHUB_USERNAME=your_github_username
VITE_LEETCODE_USERNAME=your_leetcode_username
```

> **Note:** `.env` is in `.gitignore` and is never committed to the repository.

---

## 🚀 Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/suryanshusaini/PORTFOLIO.git
cd PORTFOLIO

# 2. Install dependencies
npm install

# 3. Create your environment file
echo "VITE_GITHUB_USERNAME=your_github_username" > .env
echo "VITE_LEETCODE_USERNAME=your_leetcode_username" >> .env

# 4. Start the development server
npm run dev
```

The dev server starts at `http://localhost:5173` (default Vite port).

```bash
# Build for production
npm run build
npm run preview   # preview the production bundle locally
```

---

## 📁 Project Structure

```
PORTFOLIO/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Floating glassmorphism nav + live Resume link
│   │   ├── CommandPalette.jsx  # ⌘K search — 9-item portfolio index
│   │   ├── About.jsx           # Hero / introduction section
│   │   ├── Skills.jsx          # Technical skills grid
│   │   ├── Projects.jsx        # Project showcase grid
│   │   ├── Consistency.jsx     # Real-time GitHub + LeetCode dashboard
│   │   ├── Contact.jsx         # Contact section
│   │   └── Preloader.jsx       # Animated entry preloader
│   ├── App.jsx
│   └── main.jsx
├── index.html                  # SS monogram favicon + "SS | Suryanshu Saini" title
├── tailwind.config.js
├── vite.config.js
└── .env                        # Local env vars (gitignored)
```

---

## 📬 Connect

I'm a 3rd-year Computer Science student actively looking for internship and project opportunities. Feel free to reach out.

<div align="center">

[![Email](https://img.shields.io/badge/Email-suryanshusaini2009%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:suryanshusaini2009@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-suryanshusaini-181717?style=for-the-badge&logo=github)](https://github.com/suryanshusaini)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Suryanshu_Saini-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/suryanshusaini)

</div>

---

<div align="center">
  <sub>Built by <strong>Suryanshu Saini</strong> · 2026</sub>
</div>
