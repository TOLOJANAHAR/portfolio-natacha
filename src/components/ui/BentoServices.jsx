import { useState } from "react";
import { TrendingUp, Users, Zap, Repeat2, MessageCircle } from "lucide-react";
import "./BentoServices.css";
import natacha from "../../assets/natacha.jpg"
import alex from "../../assets/marc.jpeg"
import eliah from "../../assets/eliah.jpg"

/* ══════════════════════════════════════
   TOOL ICONS — Figma, Notion, Slack, React, Tailwind, Vite
══════════════════════════════════════ */
const Icons = {
  Figma: () => (
    <svg viewBox="0 0 200 300" width="24" height="28" fill="none">
      <path d="M50 300C77.6 300 100 277.6 100 250V200H50C22.4 200 0 222.4 0 250S22.4 300 50 300Z" fill="#0ACF83"/>
      <path d="M0 150C0 122.4 22.4 100 50 100H100V200H50C22.4 200 0 177.6 0 150Z" fill="#F24E1E"/>
      <path d="M0 50C0 22.4 22.4 0 50 0H100V100H50C22.4 100 0 77.6 0 50Z" fill="#FF7262"/>
      <path d="M100 0H150C177.6 0 200 22.4 200 50S177.6 100 150 100H100V0Z" fill="#F24E1E"/>
      <path d="M200 150C200 177.6 177.6 200 150 200S100 177.6 100 150 122.4 100 150 100 200 122.4 200 150Z" fill="#1ABCFE"/>
    </svg>
  ),
Notion: () => (
  <svg viewBox="-20 -20 100 100" className="w-3 h-3" fill="none">
    <path
      fill="currentColor"
      d="M6 10.88c1.77 1.42 2.44 1.32 5.77 1.1l31.4-1.88c.66 0 .11-.67-.12-.78L37 5.78c-.77-.67-1.88-1.45-3.99-1.23L4.22 6.44c-1.1.12-1.33.67-.89 1.1l2.67 3.34zm2.44 5.44v42.12c0 2.24 1.1 3.08 3.66 2.9l40.02-2.33c2.56-.14 2.88-1.69 2.88-3.51V13.88c0-1.79-.66-2.68-2.23-2.57l-41.72 2.43c-1.67.11-2.6.9-2.6 2.58zm39.3 1.08c.33 1.46 0 2.9-.44 3.12l-1.12.22v22.64c-.99.55-1.9.88-2.67.88-1.22 0-1.55-.33-2.45-1.68L27.2 26.36v19.35l3.88.88s0 2.9-3.99 2.9L14.4 50.17c-.34-.66 0-2.23 1.11-2.57l2.89-.78V22.26l-4-.34c-.33-1.44.44-3.56 2.55-3.67l11.99-.77 14.66 22.86V21.47l-3.22-.44c-.33-1.67.88-2.9 2.34-3.01l11.1-.66z"
    />
  </svg>
),
  Slack: () => (
    <svg viewBox="0 0 54 54" width="22" height="22">
      <path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="#36C5F0"/>
      <path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="#2EB67D"/>
      <path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="#ECB22E"/>
      <path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.249m14.336 0v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.249a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" fill="#E01E5A"/>
    </svg>
  ),
  React: () => (
    <svg viewBox="-11.5 -10.23 23 20.46" width="26" height="26">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  Tailwind: () => (
    <svg viewBox="0 0 54 33" width="28" height="18">
      <defs>
        <linearGradient id="tg2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2298BD"/>
          <stop offset="100%" stopColor="#0ED7B5"/>
        </linearGradient>
      </defs>
      <path fillRule="evenodd" clipRule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8 16.2 7.2 19.35 5.85 22.95 6.75c2.024.506 3.472 1.974 5.068 3.59C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.024-.506-3.472-1.974-5.068-3.59C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.024.506 3.472 1.974 5.068 3.59C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.024-.506-3.472-1.974-5.068-3.59C23.256 19.31 20.192 16.2 13.5 16.2z" fill="url(#tg2)"/>
    </svg>
  ),
  Vite: () => (
    <svg viewBox="0 0 410 404" width="24" height="24">
      <defs>
        <linearGradient id="va2" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#41D1FF"/>
          <stop offset="100%" stopColor="#BD34FE"/>
        </linearGradient>
        <linearGradient id="vb2" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FF3CAC"/>
          <stop offset="100%" stopColor="#784BA0"/>
        </linearGradient>
      </defs>
      <path d="M399.6 59.7L215.8 388.1c-4 7-14 7.1-18.1.2L.5 59.8C-3.8 52.5 2.4 43.5 10.8 45L204 79.7c1.3.2 2.6.2 3.9 0L397.2 45c8.3-1.5 14.5 7.5 10.4 14.7z" fill="url(#va2)"/>
      <path d="M292.3 1.5L158 27.7c-2.9.5-5 3.1-4.9 6.1l7.7 131.7c.1 3.5 3.3 6.1 6.8 5.3l36-8.4c3.9-.9 7.4 2.6 6.3 6.4l-10.7 37.2c-1.1 3.9 2.5 7.4 6.4 6.3l22.2-6.8c4-.1 7.5 3.5 6.4 7.3l-17 59.6c-1.3 4.7 4.8 7.2 7.4 3.2l1.6-2.5L361 101.5c2.2-4-.7-8.8-5.1-8.3l-37.2 4.3c-4 .5-7.1-3.5-5.8-7.3L335.7 8c1.4-4.1-1.9-8.2-6.1-8l-37.3 1.5z" fill="url(#vb2)"/>
    </svg>
  ),
};

const INTEGRATED_TOOLS = [
  { name: "Figma",    Icon: Icons.Figma,    bg: "#1e1428", color: "#a259ff" },
  { name: "Notion",   Icon: Icons.Notion,   bg: "#1a1a1a", color: "#ffffff" },
  { name: "Slack",    Icon: Icons.Slack,    bg: "#1a0e24", color: "#e01e5a" },
  { name: "React",    Icon: Icons.React,    bg: "#0e1e28", color: "#61DAFB" },
  { name: "Tailwind", Icon: Icons.Tailwind, bg: "#041420", color: "#38bdf8" },
  { name: "Vite",     Icon: Icons.Vite,     bg: "#14041e", color: "#bd34fe" },
];

/* Chart — grouped pairs like the reference (short bar + tall bar side by side) */
const BARS = [
  [20, 35], [15, 28], [25, 45], [30, 50],
  [22, 40], [18, 35], [28, 60], [20, 38],
  [15, 30], [25, 48], [35, 75], [30, 65],
  [28, 55], [20, 42]
];

/* Avatars for invite — real gradient rings like the image */
const AVATARS = [
  {
    name: "Eliah",
    bg: "#111",
    ring: "#a78bfa",
    img: eliah
  },
  {
    name: "Natacha",
    bg: "#222",
    ring: "#38bdf8",
    img: natacha
  },
  {
    name: "Alex",
    bg: "#333",
    ring: "#a3e635",
    img: alex
  }
];
export default function BentoServices() {
  const [hoveredAvatar, setHoveredAvatar] = useState(null);

  return (
    <div className="bento-grid">

      {/* ══ 1. MAXIMUM CREATIVITY — tall left card ══ */}
      <div className="bento-card bento-accent">
        <div className="bento-accent-circle bento-accent-circle--1" />
        <div className="bento-accent-circle bento-accent-circle--2" />
        <div className="bento-accent-body">
          <p className="bento-badge-label">
            <span className="bento-badge-dot" />
            Explore what i offer
          </p>
          <h3 className="bento-accent-h3">Maximum<br/>creativity</h3>
          <p className="bento-accent-p">Engage audience with unique style.</p>
        </div>
      </div>

      {/* ══ 2. INVITE PEOPLE ══ */}
      <div className="bento-card bento-invite">
        <div className="bento-invite-top">
          <div className="bento-invite-avatars">
            {AVATARS.map((a, i) => (
              <div
                key={i}
                className="bento-avatar-wrap"
                style={{ zIndex: 10 - i, marginLeft: i === 0 ? 0 : -18 }}
                onMouseEnter={() => setHoveredAvatar(i)}
                onMouseLeave={() => setHoveredAvatar(null)}
              >
                <div
                  className="bento-avatar"
                  style={{
                    backgroundColor: a.bg,
                    backgroundImage: `url(${a.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow: `0 0 0 3px ${a.ring}, 0 0 14px ${a.ring}55`
                  }}
                />

                <span
                  className={
                    "bento-invite-eliah" +
                    (hoveredAvatar === i ? " bento-invite-eliah--visible" : "")
                  }
                  style={{ background: a.ring }}
                >
                  {a.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bento-foot">
          <div>
            <p className="bento-foot-title">Collaboration in real-time</p>
            {/* <p className="bento-foot-sub">Collaborate in real‑time</p> */}
          </div>
        </div>
      </div>

      {/* ══ 3. TRACK PROGRESS — chart ══ */}
      <div className="bento-card bento-chart">
        <p className="bento-growth-label">Growth</p>
        <div className="bento-chart-inner">
          {/* Vertical date separator lines */}
          <div className="bento-chart-lines">
            <div className="bento-vline" /><div className="bento-vline" /><div className="bento-vline" />
          </div>
          {/* Bars pushed to the right, left side fades out */}
          <div className="bento-chart-bars">
            {BARS.map(([short, tall], i) => (
              <div key={i} className="bento-bar-group">
                <div className="bento-bar bento-bar--short" style={{ height: short, animationDelay: `${i * 0.05}s` }}/>
                <div className="bento-bar bento-bar--tall"  style={{ height: tall,  animationDelay: `${i * 0.05 + 0.07}s` }}/>
              </div>
            ))}
          </div>
          {/* Left fade overlay */}
          <div className="bento-chart-fade" />
        </div>
        <div className="bento-chart-dates">
          <span>Nov. 10</span><span>Nov. 11</span><span>Today</span>
        </div>
        <div className="bento-foot">
          <div>
            <p className="bento-foot-title">You can track progress</p>
            <p className="bento-foot-sub">Blazing fast delivery timing, no fuzz.</p>
          </div>
        </div>
      </div>

      {/* ══ 4. DESIGN ITERATIONS — curve with grid ══ */}
      <div className="bento-card bento-curve">
        <div className="bento-curve-area">
          {/* Subtle background grid lines */}
          <svg className="bento-gridlines" viewBox="0 0 280 110" preserveAspectRatio="none">
            {[0, 56, 112, 168, 224, 280].map(x => (
              <line key={x} x1={x} y1="0" x2={x} y2="110" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4"/>
            ))}
          </svg>
          {/* Curve */}
<svg className="bento-curve-svg" viewBox="0 0 280 110" preserveAspectRatio="none">
  <defs>
    <linearGradient id="cg" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#cccccb" stopOpacity="0.05"/>
      <stop offset="50%" stopColor="#cccccb" stopOpacity="0.6"/>
      <stop offset="100%" stopColor="#cccccb" stopOpacity="1"/>
    </linearGradient>
  </defs>

  <path
    d="
      M0 105
      C25 95, 55 92, 80 94
      S90 50, 100 40
      S115 140, 120 90
      S155 70, 165 50
      S175 35, 190 28
      S210 50, 290 -5
    "
    stroke="url(#cg)"
    strokeWidth="3"
    fill="none"
    strokeLinecap="round"
  />

  <circle cx="185" cy="28" r="5" fill="#cccccb"/>
  <circle cx="185" cy="28" r="14" fill="#cccccb" opacity="0.2"/>
  <circle cx="185" cy="28" r="22" fill="#cccccb" opacity="0.08"/>
</svg>
        </div>
        <div className="bento-foot">
          {/* <div className="bento-foot-icon bento-foot-icon--green"><Repeat2 size={14} strokeWidth={2}/></div> */}
          <div>
            <p className="bento-foot-title">Design iterations</p>
            <p className="bento-foot-sub">Get as many design tweaks as you'd like.</p>
          </div>
        </div>
      </div>

      {/* ══ 5. FAST ITERATIONS — two stacked notifications ══ */}
      <div className="bento-card bento-fast">
        <div className="bento-fast-stack">
          {/* Top card — old/background, slightly scaled and offset */}
          <div className="bento-notif bento-notif--behind">
            <div className="bento-notif-icon-box bento-notif-icon-box--grey">
              <Repeat2 size={13} strokeWidth={2} color="rgba(255,255,255,0.4)"/>
            </div>
            <div className="bento-notif-lines">
              <div className="bento-nline bento-nline--w60"/>
              <div className="bento-nline bento-nline--w80"/>
            </div>
          </div>
          {/* Front card — new design notification */}
          <div className="bento-notif bento-notif--front">
            <div className="bento-notif-row">
              <div className="bento-notif-icon-box bento-notif-icon-box--yellow">
                <Zap size={13} fill="#a3e635" stroke="none"/>
              </div>
              <div>
                <div className="bento-notif-new-badge">
                  <span className="bento-notif-dot"/><span>NEW</span>
                </div>
                <p className="bento-notif-name">Latest design</p>
                <p className="bento-notif-time">Today, 11:50</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bento-foot">
          <div>
            <p className="bento-foot-title">Fast iterations</p>
          </div>
        </div>
      </div>

      {/* ══ 6. CUSTOM SUPPORT — chat bubble ══ */}
      <div className="bento-card bento-support">
        <div className="bento-support-row">
          <div className="bento-support-avatar-wrap">
            <div className="bento-support-avatar">
              <img src={natacha} alt="Support" />
            </div>
            <span className="bento-support-badge">1</span>
          </div>
          {/* Message bubble */}
          <div className="bento-support-bubble">
            <p className="bento-support-from">Tiona says:</p>
            <p className="bento-support-msg">Hey there!<br/>How can I help you?</p>
          </div>
        </div>
        <div className="bento-foot">
          <div>
            <p className="bento-foot-title">Custom support</p>
            {/* <p className="bento-foot-sub">Always here when you need it.</p> */}
          </div>
        </div>
      </div>

      {/* ══ 7. 100% INTEGRATED — 2×3 tool grid ══ */}
      <div className="bento-card bento-integrated">
        <div className="bento-tools-grid">
          {INTEGRATED_TOOLS.map(({ name, Icon, bg, color }) => (
            <div
              key={name}
              className="bento-tool-pill"
              title={name}
              style={{
                background: "rgba(20, 20, 20, 0.75)",
                // boxShadow: `0 0 18px ${color}45`,
                border: `1px solid ${"#232323"}`,
                borderRadius: "10000px"
              }}
            >
              <Icon/>
            </div>
          ))}
        </div>
        <div className="bento-foot">
          <div>
            <p className="bento-foot-title">100% Integrated</p>
            <p className="bento-foot-sub">Seamlessly connect all your existing apps.</p>
          </div>
        </div>
      </div>

    </div>
  );
}