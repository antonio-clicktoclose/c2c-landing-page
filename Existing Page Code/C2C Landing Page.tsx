// @ts-nocheck
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { clientLogos } from "../clientLogos.js";
import { integrationLogos } from "../integrationLogos.js";

import db1 from "../Dashboard Screenshots/AI Sales Agent.png";
import db2 from "../Dashboard Screenshots/Analytics Overview.png";
import db3 from "../Dashboard Screenshots/Analytics Funnel.png";
import db4 from "../Dashboard Screenshots/Analytics Reps Performance.png";
import db5 from "../Dashboard Screenshots/Analytics Executive.png";
import db6 from "../Dashboard Screenshots/Call Logs.png";
import db7 from "../Dashboard Screenshots/Commission Management Dashboard.png";
import db8 from "../Dashboard Screenshots/Dashboard Login.png";

const dashboards = [db1, db2, db3, db4, db5, db6, db7, db8];
import nickDaniel from "../Testimonials/nick daniel vshred.jpeg";
import kevinPearn from "../Testimonials/kevin pearn v shred.jpeg";
import sabahKarimi from "../Testimonials/sabah karimi vshred.jpeg";
import rafaelFreitas from "../Testimonials/Rafael Freitas .jpeg";
import richardMugica from "../Testimonials/richard mugica 1callclosers.jpeg";
import mikeSadikian from "../Testimonials/mike sadikian 1callclosers.jpeg";
import trishChan from "../Testimonials/trish chan 1callclosers.jpeg";
import markMoss from "../Testimonials/Mark Moss profile image.jpeg";
import ianWeinberg from "../Testimonials/Ian Weinberg 1CallClosers.jpeg";


/* ═══════════════════════════════════════
   INLINE SVG ICONS (no external deps)
   ═══════════════════════════════════════ */
const Icons = {
  brain: (p = {}) => (
    <svg width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke={p.color || "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...(p.style || {}) }}>
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" /><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" /><path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" /><path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  ),
  barChart: (p = {}) => (
    <svg width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke={p.color || "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...(p.style || {}) }}>
      <line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
  layout: (p = {}) => (
    <svg width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke={p.color || "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...(p.style || {}) }}>
      <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  dollar: (p = {}) => (
    <svg width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke={p.color || "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...(p.style || {}) }}>
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  zap: (p = {}) => (
    <svg width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke={p.color || "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...(p.style || {}) }}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  users: (p = {}) => (
    <svg width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke={p.color || "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...(p.style || {}) }}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  target: (p = {}) => (
    <svg width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke={p.color || "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...(p.style || {}) }}>
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
  chevDown: (p = {}) => (
    <svg width={p.size || 18} height={p.size || 18} viewBox="0 0 24 24" fill="none" stroke={p.color || "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...(p.style || {}) }}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  menu: (p = {}) => (
    <svg width={p.size || 22} height={p.size || 22} viewBox="0 0 24 24" fill="none" stroke={p.color || "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  x: (p = {}) => (
    <svg width={p.size || 22} height={p.size || 22} viewBox="0 0 24 24" fill="none" stroke={p.color || "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  star: (p = {}) => (
    <svg width={p.size || 14} height={p.size || 14} viewBox="0 0 24 24" fill="none" stroke={p.color || "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...(p.style || {}) }}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  arrowRight: (p = {}) => (
    <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 24 24" fill="none" stroke={p.color || "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...(p.style || {}) }}>
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  check: (p = {}) => (
    <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 24 24" fill="none" stroke={p.color || "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  play: (p = {}) => (
    <svg width={p.size || 14} height={p.size || 14} viewBox="0 0 24 24" fill="none" stroke={p.color || "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  shield: (p = {}) => (
    <svg width={p.size || 14} height={p.size || 14} viewBox="0 0 24 24" fill="none" stroke={p.color || "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...(p.style || {}) }}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  clock: (p = {}) => (
    <svg width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke={p.color || "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...(p.style || {}) }}>
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  trending: (p = {}) => (
    <svg width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke={p.color || "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...(p.style || {}) }}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  sparkles: (p = {}) => (
    <svg width={p.size || 14} height={p.size || 14} viewBox="0 0 24 24" fill="none" stroke={p.color || "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...(p.style || {}) }}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
    </svg>
  ),
};

/* ═══════════════════════════════════════
   BRAND TOKENS (ShadcnStore palette)
   ═══════════════════════════════════════ */
const C = {
  bg: "#0A0A0A", card: "#171717", muted: "#272727", border: "#262626",
  fg: "#FAFAFA", fgMuted: "#A1A1AA", fgDim: "#A1A1AA",
  primary: "#2780FF", purple: "#A745FF",
  accent: "#F97316", success: "#22C55E",
};

/* ShadcnStore gradients */
const G = {
  hero: "linear-gradient(to right, rgb(229,229,229) 0%, rgb(38,38,38) 100%)",
  textFade: "linear-gradient(to right, rgb(229,229,229) 0%, rgb(38,38,38) 100%)",
  textFade2: "linear-gradient(to right, rgb(229,229,229) 0%, rgb(36,36,36) 100%)",
  cardFade: "linear-gradient(to right bottom, rgb(226,226,226) 0%, rgb(10,10,10) 50%, rgb(39,39,39) 100%)",
  bgTop: "linear-gradient(rgb(0,0,0) 0%, rgb(10,10,10) 50%, rgb(10,10,10) 100%)",
  darkVignette: "radial-gradient(rgb(0,0,0) 0%, rgb(23,23,23) 100%)",
  dotPattern: "radial-gradient(rgb(55,65,81) 1px, rgb(0,0,0) 1px)",
  dotPatternLight: "radial-gradient(circle, rgb(250,250,250) 1px, rgb(0,0,0) 1px)",
  maskR: "linear-gradient(to right, rgb(10,10,10) 0%, rgb(11,11,11) 15%, rgb(0,0,0) 40%)",
  maskL: "linear-gradient(to left, rgb(10,10,10) 0%, rgb(11,11,11) 15%, rgb(0,0,0) 40%)",
};

/* ═══════════════════════════════════════
   GLOBAL STYLES — Inter font only
   ═══════════════════════════════════════ */

/* Brand logos (transparent bg) */
const LOGO_W = "data:image/png;base64,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";
const LOGO_W_LG = "data:image/png;base64,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";

const GlobalCSS = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    html{scroll-behavior:smooth}
    body{font-family:'Inter',sans-serif}
    @keyframes mu{0%{transform:translateY(0)}100%{transform:translateY(-50%)}}
    @keyframes md{0%{transform:translateY(-50%)}100%{transform:translateY(0)}}
    @keyframes sl{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    @keyframes sr{0%{transform:translateX(-50%)}100%{transform:translateX(0)}}
    .au{animation:mu 25s linear infinite}
    .ad{animation:md 25s linear infinite}
    .al{animation:sl 120s linear infinite}
    .ar{animation:sr 120s linear infinite}
    .al-fast{animation:sl 32s linear infinite}
    .ar-fast{animation:sr 32s linear infinite}
    .mc:hover .au,.mc:hover .ad,.mc:hover .al,.mc:hover .ar,.mc:hover .al-fast,.mc:hover .ar-fast{animation-play-state:paused}
    .my{mask-image:linear-gradient(to bottom,transparent 0%,black 10%,black 90%,transparent 100%);-webkit-mask-image:linear-gradient(to bottom,transparent 0%,black 10%,black 90%,transparent 100%)}
    .mx{mask-image:linear-gradient(to right,transparent 0%,black 8%,black 92%,transparent 100%);-webkit-mask-image:linear-gradient(to right,transparent 0%,black 8%,black 92%,transparent 100%)}
    @keyframes fu{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
    @keyframes blurSlide{from{opacity:0;filter:blur(12px);transform:translateY(12px)}to{opacity:1;filter:blur(0px);transform:translateY(0)}}
    .fu{animation:fu .7s ease forwards;opacity:0}
    .bs{animation:blurSlide 1.5s cubic-bezier(.16,1,.3,1) forwards;opacity:0}
    .d0{animation-delay:0s}.d1{animation-delay:.15s}.d2{animation-delay:.3s}.d3{animation-delay:.5s}.d4{animation-delay:.7s}.d5{animation-delay:.9s}
    @media(max-width:768px){
      .hm{display:none!important}
      .c1m{grid-template-columns:1fr!important; gap:32px!important}
      .c2m{grid-template-columns:repeat(2,1fr)!important}
      .smb{display:block!important}
      .mob-wt-text{padding:0 24px!important;top:8vh!important;align-items:flex-start!important}
      .mob-wt-slider{padding-left:10vw!important;padding-right:10vw!important;height:100%!important;align-items:center!important;padding-top:20vh!important;gap:12vw!important}
      .mob-wt-img{width:160vw!important;max-width:none!important;border-radius:12px!important}
    }
    @media(max-width:480px){.c1t{grid-template-columns:1fr!important}}
    @media(min-width:769px){.smb{display:none!important}}

    @property --gradient-angle{syntax:"<angle>";initial-value:0deg;inherits:false}
    @property --gradient-angle-offset{syntax:"<angle>";initial-value:0deg;inherits:false}
    @property --gradient-percent{syntax:"<percentage>";initial-value:5%;inherits:false}
    @property --gradient-shine{syntax:"<color>";initial-value:white;inherits:false}

    .shiny-cta{
      --shiny-cta-bg:#0A0A0A;
      --shiny-cta-bg-subtle:#1a1a1a;
      --shiny-cta-fg:#FAFAFA;
      --shiny-cta-highlight:rgba(255,255,255,0.5);
      --shiny-cta-highlight-subtle:rgba(255,255,255,0.35);
      --animation:gradient-angle linear infinite;
      --duration:3s;
      --shadow-size:2px;
      --transition:800ms cubic-bezier(0.25,1,0.5,1);
      isolation:isolate;position:relative;overflow:hidden;cursor:pointer;outline-offset:4px;
      padding:1.1rem 2.5rem;font-family:'Inter',sans-serif;font-size:1.05rem;line-height:1.2;font-weight:500;
      border:1px solid transparent;border-radius:360px;color:var(--shiny-cta-fg);text-decoration:none;display:inline-flex;align-items:center;gap:8px;
      background:linear-gradient(var(--shiny-cta-bg),var(--shiny-cta-bg)) padding-box,
        conic-gradient(from calc(var(--gradient-angle) - var(--gradient-angle-offset)),transparent,var(--shiny-cta-highlight) var(--gradient-percent),var(--gradient-shine) calc(var(--gradient-percent)*2),var(--shiny-cta-highlight) calc(var(--gradient-percent)*3),transparent calc(var(--gradient-percent)*4)) border-box;
      box-shadow:inset 0 0 0 1px var(--shiny-cta-bg-subtle);
      transition:var(--transition);transition-property:--gradient-angle-offset,--gradient-percent,--gradient-shine;
    }
    .shiny-cta::before,.shiny-cta::after,.shiny-cta span::before{content:"";pointer-events:none;position:absolute;inset-inline-start:50%;inset-block-start:50%;translate:-50% -50%;z-index:-1}
    .shiny-cta:active{translate:0 1px}
    .shiny-cta::before{--size:calc(100% - var(--shadow-size)*3);--position:2px;--space:calc(var(--position)*2);width:var(--size);height:var(--size);background:radial-gradient(circle at var(--position) var(--position),white calc(var(--position)/4),transparent 0) padding-box;background-size:var(--space) var(--space);background-repeat:space;mask-image:conic-gradient(from calc(var(--gradient-angle) + 45deg),black,transparent 10% 90%,black);border-radius:inherit;opacity:0.4;z-index:-1}
    .shiny-cta::after{--animation:shimmer linear infinite;width:100%;aspect-ratio:1;background:linear-gradient(-50deg,transparent,var(--shiny-cta-highlight),transparent);mask-image:radial-gradient(circle at bottom,transparent 40%,black);opacity:0.6}
    .shiny-cta span{z-index:1;display:inline-flex;align-items:center;gap:8px}
    .shiny-cta span::before{--size:calc(100% + 1rem);width:var(--size);height:var(--size);box-shadow:inset 0 -1ex 2rem 4px var(--shiny-cta-highlight);opacity:0;transition:opacity var(--transition);animation:calc(var(--duration)*1.5) breathe linear infinite}
    .shiny-cta,.shiny-cta::before,.shiny-cta::after{animation:var(--animation) var(--duration),var(--animation) calc(var(--duration)/0.4) reverse paused;animation-composition:add}
    .shiny-cta:is(:hover,:focus-visible){--gradient-percent:20%;--gradient-angle-offset:95deg;--gradient-shine:var(--shiny-cta-highlight-subtle)}
    .shiny-cta:is(:hover,:focus-visible),.shiny-cta:is(:hover,:focus-visible)::before,.shiny-cta:is(:hover,:focus-visible)::after{animation-play-state:running}
    .shiny-cta:is(:hover,:focus-visible) span::before{opacity:1}
    @keyframes gradient-angle{to{--gradient-angle:360deg}}
    @keyframes shimmer{to{rotate:360deg}}
    @keyframes breathe{from,to{scale:1}50%{scale:1.2}}
  `}</style>
);

/* ═══════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════ */
const W = ({ children, max = 1200, style = {} }) => <div style={{ maxWidth: max, margin: "0 auto", padding: "0 24px", ...style }}>{children}</div>;

const Badge = ({ children, icon }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 14px", fontSize: 12, fontWeight: 500, borderRadius: 100, border: "1px solid rgba(39,128,255,0.3)", color: C.primary, background: "rgba(39,128,255,0.08)", marginBottom: 16, letterSpacing: "0.02em" }}>
    {icon}{children}
  </div>
);

const H1 = ({ children, style = {} }) => <h1 style={{ fontSize: "clamp(36px,5.5vw,64px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-1.5px", color: C.fg, textWrap: "balance", ...style }}>{children}</h1>;
const H2 = ({ children, style = {} }) => <h2 style={{ fontSize: "clamp(30px,4.5vw,48px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-1.5px", color: C.fg, marginBottom: 16, ...style }}>{children}</h2>;
const H3 = ({ children, style = {} }) => <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: C.fg, letterSpacing: "-0.5px", ...style }}>{children}</h3>;

const Desc = ({ children, style = {} }) => <p style={{ fontSize: "clamp(15px,2vw,17px)", color: C.fgMuted, lineHeight: 1.65, maxWidth: 600, fontWeight: 400, ...style }}>{children}</p>;

const Btn = ({ children, v = "primary", lg, href = "#", style = {} }) => {
  const b = { display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, fontWeight: 500, fontSize: lg ? 15 : 14, borderRadius: lg ? 10 : 8, padding: lg ? "14px 28px" : "10px 20px", transition: "all .2s", cursor: "pointer", border: "none", textDecoration: "none", whiteSpace: "nowrap", fontFamily: "'Inter',sans-serif" };
  const vs = { primary: { background: C.primary, color: "#fff" }, accent: { background: C.accent, color: "#fff" }, outline: { background: "transparent", color: C.fg, border: `1px solid ${C.border}` } };
  return <a href={href} style={{ ...b, ...vs[v], ...style }}>{children}</a>;
};

/* ═══════════════════════════════════════
   1. NAVBAR — Tailark pill-on-scroll
   ═══════════════════════════════════════ */
const navL = [{ l: "Features", h: "#features" }, { l: "Solution", h: "#integrations" }, { l: "About", h: "#faq" }];

const Navbar = () => {
  const [s, setS] = useState(false); const [o, setO] = useState(false);
  useEffect(() => { const f = () => setS(window.scrollY > 50); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f) }, []);
  return (
    <header>
      <nav data-state={o ? "active" : undefined} className="nav-root" style={{ position: "fixed", zIndex: 100, width: "100%", padding: "0 8px", fontFamily: "'Inter',sans-serif" }}>
        <div className="nav-inner" style={{
          margin: "0 auto", marginTop: 8,
          maxWidth: s ? 768 : 1152,
          padding: s ? "0 20px" : "0 24px 0 48px",
          transition: "all .4s cubic-bezier(.16,1,.3,1)",
          borderRadius: s ? 16 : 0,
          border: `1px solid ${s ? C.border : "transparent"}`,
          background: s ? "rgba(10,10,10,0.5)" : "transparent",
          backdropFilter: s ? "blur(16px) saturate(180%)" : "none",
          WebkitBackdropFilter: s ? "blur(16px) saturate(180%)" : "none",
        }}>
          <div style={{ position: "relative", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 0, padding: s ? "10px 0" : "12px 0", transition: "padding .4s cubic-bezier(.16,1,.3,1)" }}>
            {/* Logo */}
            <div style={{ display: "flex", width: "auto", justifyContent: "space-between", alignItems: "center" }}>
              <a href="#" aria-label="home" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", zIndex: 10 }}>
                <img src={LOGO_W} alt="ClickToClose" style={{ height: 16 }} />
              </a>
            </div>

            {/* Center links (desktop) */}
            <div className="hm" style={{ position: "absolute", inset: 0, margin: "auto", width: "fit-content", height: "fit-content", display: "flex", gap: 32 }}>
              {navL.map(n => (
                <a key={n.l} href={n.h} style={{ color: C.fgMuted, textDecoration: "none", fontSize: 14, fontWeight: 400, transition: "color .15s" }} onMouseEnter={e => e.target.style.color = C.fg} onMouseLeave={e => e.target.style.color = C.fgMuted}>{n.l}</a>
              ))}
            </div>

            {/* Right buttons (desktop) */}
            <div className="hm" style={{ display: "flex", alignItems: "center", gap: 8, zIndex: 10 }}>
              {/* Login + Sign Up: visible when NOT scrolled */}
              <a href="https://tracker.clicktoclose.ai/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, fontWeight: 500, color: C.fg, textDecoration: "none", padding: "6px 14px", borderRadius: 8, border: `1px solid ${C.border}`, transition: "all .3s", opacity: s ? 0 : 1, maxWidth: s ? 0 : 120, overflow: "hidden", transform: s ? "scale(0.95)" : "scale(1)", pointerEvents: s ? "none" : "auto" }}
                onMouseEnter={e => e.target.style.background = "rgba(255,255,255,0.05)"} onMouseLeave={e => e.target.style.background = "transparent"}>Login</a>
              <a href="#cta" style={{ fontSize: 13, fontWeight: 500, color: C.bg, textDecoration: "none", padding: "6px 14px", borderRadius: 8, background: C.fg, transition: "all .3s", opacity: s ? 0 : 1, maxWidth: s ? 0 : 120, overflow: "hidden", transform: s ? "scale(0.95)" : "scale(1)", pointerEvents: s ? "none" : "auto" }}>Sign Up</a>
              {/* Get Started: visible when scrolled */}
              <a href="#cta" style={{ fontSize: 13, fontWeight: 500, color: C.bg, textDecoration: "none", padding: "6px 14px", borderRadius: 8, background: C.fg, transition: "all .3s", opacity: s ? 1 : 0, maxWidth: s ? 120 : 0, overflow: "hidden", transform: s ? "scale(1)" : "scale(0.95)", pointerEvents: s ? "auto" : "none" }}>Get Started</a>
            </div>

            {/* Mobile hamburger — animated rotate Menu ↔ X */}
            <button onClick={() => setO(!o)} aria-label={o ? "Close Menu" : "Open Menu"} className="smb" style={{ background: "none", border: "none", color: C.fg, cursor: "pointer", display: "none", zIndex: 20, position: "relative", width: 28, height: 28, padding: 0 }}>
              <span style={{ position: "absolute", inset: 0, margin: "auto", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .25s ease", transform: o ? "rotate(180deg) scale(0)" : "rotate(0) scale(1)", opacity: o ? 0 : 1 }}>{Icons.menu({ size: 24 })}</span>
              <span style={{ position: "absolute", inset: 0, margin: "auto", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .25s ease", transform: o ? "rotate(0) scale(1)" : "rotate(-180deg) scale(0)", opacity: o ? 1 : 0 }}>{Icons.x({ size: 24 })}</span>
            </button>
          </div>
        </div>

        {/* Mobile dropdown — slides in with shadow */}
        <div style={{
          position: "absolute", top: 62, left: 8, right: 8,
          background: C.bg, border: `1px solid ${C.border}`, borderRadius: 24,
          padding: 24, display: "flex", flexDirection: "column", gap: 16, zIndex: 99,
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
          transition: "all .3s cubic-bezier(.16,1,.3,1)",
          opacity: o ? 1 : 0, transform: o ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.98)",
          pointerEvents: o ? "auto" : "none",
        }}>
          {navL.map(n => <a key={n.l} href={n.h} onClick={() => setO(false)} style={{ color: C.fgMuted, textDecoration: "none", fontSize: 16, fontWeight: 400, transition: "color .15s" }} onMouseEnter={e => e.target.style.color = C.fg} onMouseLeave={e => e.target.style.color = C.fgMuted}>{n.l}</a>)}
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
            <a href="https://tracker.clicktoclose.ai/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, fontWeight: 500, color: C.fg, textDecoration: "none", padding: "10px 16px", borderRadius: 10, border: `1px solid ${C.border}`, textAlign: "center", transition: "background .2s" }} onMouseEnter={e => e.target.style.background = "rgba(255,255,255,0.05)"} onMouseLeave={e => e.target.style.background = "transparent"}>Login</a>
            <a href="#cta" style={{ fontSize: 14, fontWeight: 500, color: C.bg, textDecoration: "none", padding: "10px 16px", borderRadius: 10, background: C.fg, textAlign: "center" }}>Sign Up</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

/* ═══════════════════════════════════════
   2. HERO — Tailark pattern (blur-slide stagger + bg image)
   ═══════════════════════════════════════ */
const VidalyticsVideo = () => {
  useEffect(() => {
    if (document.getElementById('vidalytics-script-inject')) return;
    const script = document.createElement("script");
    script.id = 'vidalytics-script-inject';
    script.type = "text/javascript";
    script.innerHTML = `(function (v, i, d, a, l, y, t, c, s) {     y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';     if (!vsl){vsl=function(u,cb){         if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;         if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}         i.getElementsByTagName("head")[0].appendChild(s);     };}     vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});}); })(window, document, 'Vidalytics', 'vidalytics_embed_APCeAbDlChrNsYAR', 'https://fast.vidalytics.com/embeds/GHq7Oz_E/APCeAbDlChrNsYAR/');`;
    document.body.appendChild(script);
  }, []);

  return <div id="vidalytics_embed_APCeAbDlChrNsYAR" style={{ width: "100%", position: "relative", paddingTop: "56.25%" }}></div>;
};

const Hero = () => {
  const [bh, setBH] = useState(false);
  return (
    <section style={{ overflow: "hidden" }}>
      <div style={{ position: "relative", paddingTop: "clamp(100px,14vw,152px)" }}>

        {/* ── Dark background image (desktop only) — z:1 ── */}
        <div className="bs d0 hm" aria-hidden style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=75&auto=format" alt="" loading="lazy" style={{ position: "absolute", top: 0, left: 0, right: 0, width: "100%", height: "auto", objectFit: "cover", opacity: 0.12 }} />
        </div>

        {/* ── Grid pattern with fade-edges — z:5 (above vignette) ── */}
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: "70%", zIndex: 5, pointerEvents: "none", backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse 85% 70% at center top, rgba(255,255,255,0.8) 0%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse 85% 70% at center top, rgba(255,255,255,0.8) 0%, transparent 70%)" }} />

        {/* ── Tailark radial light overlays — z:3 ── */}
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.5, overflow: "hidden", zIndex: 3 }}>
          <div style={{ width: "35rem", height: "80rem", position: "absolute", left: 0, top: 0, transform: "rotate(-45deg) translateY(-350px)", borderRadius: "50%", background: "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0,0%,85%,0.08) 0%, hsla(0,0%,55%,0.02) 50%, hsla(0,0%,45%,0) 80%)" }} />
          <div style={{ height: "80rem", position: "absolute", left: 0, top: 0, width: "14rem", transform: "rotate(-45deg) translate(5%,-50%)", borderRadius: "50%", background: "radial-gradient(50% 50% at 50% 50%, hsla(0,0%,85%,0.06) 0%, hsla(0,0%,45%,0.02) 80%, transparent 100%)" }} />
          <div style={{ height: "80rem", position: "absolute", left: 0, top: 0, width: "14rem", transform: "rotate(-45deg) translateY(-350px)", background: "radial-gradient(50% 50% at 50% 50%, hsla(0,0%,85%,0.04) 0%, hsla(0,0%,45%,0.02) 80%, transparent 100%)" }} />
        </div>

        {/* ── Bottom radial vignette — z:4 ── */}
        <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 4, background: `radial-gradient(125% 125% at 50% 100%, transparent 0%, ${C.bg} 75%)`, pointerEvents: "none" }} />

        {/* ── Content — z:10 ── */}
        <div style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center" }}>

            {/* Badge pill — animated arrow on hover */}
            <div className="bs d0">
              <a href="#cta" onMouseEnter={() => setBH(true)} onMouseLeave={() => setBH(false)}
                style={{ display: "inline-flex", alignItems: "center", gap: 0, padding: "5px 5px 5px 16px", fontSize: 14, fontWeight: 400, borderRadius: 100, border: `1px solid ${C.border}`, color: C.fg, background: "rgba(255,255,255,0.03)", textDecoration: "none", transition: "border-color .3s, background .3s", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", cursor: "pointer" }}
                onMouseOver={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)" }}
                onMouseOut={e => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = C.border }}>
                <span>Introducing AI-Powered Sales Ops</span>
                <span style={{ display: "block", height: 16, width: 1, background: C.border, margin: "0 12px" }} />
                <span style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "flex-start", overflow: "hidden" }}>
                  <span style={{ display: "flex", width: 48, transform: bh ? "translateX(0)" : "translateX(-50%)", transition: "transform .5s cubic-bezier(.16,1,.3,1)" }}>
                    <span style={{ display: "flex", width: 24, height: 24, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{Icons.arrowRight({ size: 12, color: C.fg })}</span>
                    <span style={{ display: "flex", width: 24, height: 24, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{Icons.arrowRight({ size: 12, color: C.fg })}</span>
                  </span>
                </span>
              </a>
            </div>

            {/* Headline */}
            <H1 className="bs d1" style={{ marginTop: 32, maxWidth: 900, marginLeft: "auto", marginRight: "auto" }}>
              The AI-Powered Revenue Intelligence Platform: Increase Your Sales Team's Close Rate by 30% with Real-Time Insights.
            </H1>

            {/* Subtitle */}
            <p className="bs d2" style={{
              maxWidth: 540, margin: "32px auto 0",
              fontSize: "clamp(16px,2vw,18px)", color: C.fgMuted, lineHeight: 1.7, fontWeight: 400, textWrap: "balance",
            }}>
              Real-time AI insights for high-ticket sales teams. Optimize, forecast, and close more deals.
            </p>

            {/* CTAs */}
            <div className="bs d3" style={{ marginTop: 48, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
              <a href="#cta" className="shiny-cta">
                <span>Book a Call {Icons.arrowRight({ size: 16, color: C.fg })}</span>
              </a>
            </div>

            {/* Trusted pill */}
            <div className="bs d4" style={{ marginTop: 24, display: "flex", justifyContent: "center" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 16px 5px 5px", borderRadius: 100, border: `1px solid ${C.border}`, background: "rgba(255,255,255,0.04)" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="" loading="lazy" style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover", border: `2px solid ${C.bg}` }} />
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="" loading="lazy" style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover", border: `2px solid ${C.bg}`, marginLeft: -8 }} />
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop" alt="" loading="lazy" style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover", border: `2px solid ${C.bg}`, marginLeft: -8 }} />
                </div>
                <span style={{ fontSize: 13, fontWeight: 400, color: C.fgMuted, letterSpacing: "-0.01em" }}>Trusted by <span style={{ color: C.fg, fontWeight: 500 }}>10,000+</span> people</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── VSL Placeholder ── */}
        <div className="bs d4" style={{ position: "relative", zIndex: 10, marginTop: "clamp(32px,6vw,80px)", padding: "0 8px" }}>
          {/* Bottom fade to #0A0A0A */}
          <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 10, background: `linear-gradient(to bottom, transparent 0%, transparent 35%, ${C.bg} 100%)`, pointerEvents: "none", borderRadius: 16 }} />

          <div style={{ maxWidth: 1024, margin: "0 auto", borderRadius: 24, border: `1px solid ${C.border}`, background: C.card, padding: 8, boxShadow: "0 20px 50px -15px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(255,255,255,0.02)", position: "relative", zIndex: 20 }}>
            <div style={{ position: "relative", width: "100%", borderRadius: 16, overflow: "hidden", background: "#050505", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <VidalyticsVideo />
            </div>
          </div>

          {/* Trust Stats Bar */}
          <div style={{ maxWidth: 1024, margin: "64px auto 96px", position: "relative", zIndex: 20 }}>
            <div className="c1m" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48, borderTop: `1px solid ${C.border}`, paddingTop: 40 }}>
              <div style={{ textAlign: "center", padding: "0 16px" }}>
                <div style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: C.fg, letterSpacing: "-1px" }}>$300M+</div>
                <div style={{ fontSize: 14, color: C.fgMuted, marginTop: 4 }}>Revenue Managed & Optimized</div>
              </div>
              <div style={{ textAlign: "center", padding: "0 16px" }}>
                <div style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: C.fg, letterSpacing: "-1px" }}>Omni-Channel</div>
                <div style={{ fontSize: 14, color: C.fgMuted, marginTop: 4 }}>Ads, CRM & Transcripts in One AI Agent</div>
              </div>
              <div style={{ textAlign: "center", padding: "0 16px" }}>
                <div style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: C.fg, letterSpacing: "-1px" }}>Unlimited</div>
                <div style={{ fontSize: 14, color: C.fgMuted, marginTop: 4 }}>GHL Subaccount Connections for Agencies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════
   3. TESTIMONIALS (3-col vertical marquee)
   ═══════════════════════════════════════ */
const ts = [
  { t: "We were flying blind trying to manage commission payouts, ad optimization, and rep performance across disconnected systems. The 'Aha' moment for us was seeing the AI Revenue Ops Agent automatically analyze behavior and optimize our calendars. It patched every revenue leak, directly contributing to our massive 3-year growth.", n: "Nick Daniel", r: "Sales Manager", c: "VShred", in: "ND", img: nickDaniel },
  { t: "If you're struggling to scale your high-ticket offers, the bottleneck is usually managing rep bandwidth and training. Before ClickToClose, we had no AI SDR implementation and zero unified visibility. Their software paired with a full AI revenue ops agent—connecting marketing, sales, and transcripts in one place—helped us scale from $0 to $150M+ in cash collected in 3 years.", n: "Kevin Pearn", r: "Founder & CEO", c: "VShred", in: "KP", img: kevinPearn },
  { t: "Running a large sales team means you can't listen to every call to find out why deals are stalling. Without ClickToClose, we had no idea how to replicate our top performers. Integrating our CRM, ads, and call transcripts into their AI agent gave us instant goal-tracking, jumping our close rate to new heights almost overnight.", n: "Sabah Karimi", r: "Sales Director", c: "VShred", in: "SK", img: sabahKarimi },
  { t: "When you're trying to scale aggressively, operations tend to break and leads leak out of the funnel. Using ClickToClose's AI sales systems didn't just fix our tracking—it directly optimized our ad spend against actual sales performance. We skyrocketed to over $6 million in profit every month.", n: "Rafael Freitas", r: "CEO", c: "Market Disruptors", in: "RF", img: rafaelFreitas },
  { t: "If your reps are burning through high-ticket leads without closing, the problem is usually a lack of tailored feedback. ClickToClose gave us an AI agent that listens to transcripts and provides instant, actionable coaching on every call. Our team increased close rates by 27% effortlessly.", n: "Richard Mugica", r: "Sales Team Lead", c: "1 Call Closers", in: "RM", img: richardMugica },
  { t: "Scaling call volume used to mean a disproportionate drop in quality and a massive increase in QA headaches. ClickToClose's automated tracking kept our standards ridiculously high. We seamlessly scaled from 50 to 200+ sales calls daily without missing a single beat.", n: "Mike Sadikian", r: "Operations Manager", c: "1 Call Closers", in: "MS", img: mikeSadikian },
  { t: "Bringing a new sales rep up to speed used to be a grueling, week-long process of shadowing and manual coaching. The AI agent in ClickToClose essentially trains them for us based on winning transcripts. We've reduced our onboarding time from several weeks to just a few days.", n: "Trish Chan", r: "VP of Sales", c: "1 Call Closers", in: "TC", img: trishChan },
  { t: "If you want to 5x your performance, you can't rely on manual data wrangling. We generated $2.4M in cash after implementing ClickToClose. The Agentic RevOps Agent completely automated our sales systems and training, turning missing data into pure bottom-line revenue.", n: "Mark Moss", r: "CEO", c: "Market Disruptors", in: "MM", img: markMoss },
  { t: "I've built and managed countless sales teams, and the hardest part is getting B-players to perform like A-players. ClickToClose gives you the exact blueprint by uniting marketing and sales data. Using it, I improved my team's overall close rate from 32% to 48% in record time.", n: "Ian Weinberg", r: "CEO & Founder", c: "1 Call Closers", in: "IW", img: ianWeinberg },
];
const TC = ({ d }) => (
  <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
    <p style={{ fontSize: 14, color: C.fgMuted, lineHeight: 1.65, marginBottom: 20, fontWeight: 400 }}>"{d.t}"</p>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      {d.img ? (
        <img src={d.img} alt={d.n} style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", border: `2px solid ${C.border}` }} />
      ) : (
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: C.primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "white" }}>{d.in}</div>
      )}
      <div><div style={{ fontSize: 13, fontWeight: 600, color: C.fg }}>{d.n}</div><div style={{ fontSize: 12, color: C.fgDim }}>{d.r}</div></div>
    </div>
  </div>
);
const c1 = ts.slice(0, 3), c2 = ts.slice(3, 6), c3 = ts.slice(6, 9);

const Testimonials = () => (
  <section style={{ padding: "80px 0", overflow: "hidden" }}>
    <W><div style={{ textAlign: "center", marginBottom: 48 }}>
      <Badge icon={Icons.star({ size: 14, color: C.primary })}>Testimonials</Badge>
      <H2>What our users say</H2>
      <Desc style={{ margin: "0 auto" }}>See how sales teams are transforming their operations with ClickToClose.</Desc>
    </div>
      <div className="mc my tg" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, height: 800, overflow: "hidden" }}>
        <div style={{ overflow: "hidden" }}><div className="au">{[...c1, ...c1].map((d, i) => <TC key={"a" + i} d={d} />)}</div></div>
        <div style={{ overflow: "hidden" }}><div className="ad">{[...c2, ...c2].map((d, i) => <TC key={"b" + i} d={d} />)}</div></div>
        <div style={{ overflow: "hidden" }} className="hm"><div className="au" style={{ animationDuration: "22s" }}>{[...c3, ...c3].map((d, i) => <TC key={"c" + i} d={d} />)}</div></div>
      </div></W>
    <style>{`@media(max-width:768px){.tg{grid-template-columns:repeat(2,1fr)!important;height:600px!important}}@media(max-width:480px){.tg{grid-template-columns:1fr!important}}`}</style>
  </section>
);

/* ═══════════════════════════════════════
   4. LOGO CAROUSEL — Client Logos (grayscale)
   ═══════════════════════════════════════ */
const LogoCarousel = () => (
  <section style={{ padding: "60px 0", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
    <W><p style={{ textAlign: "center", fontSize: 13, color: C.fgDim, marginBottom: 32, textTransform: "uppercase", letterSpacing: "1.2px", fontWeight: 500 }}>Trusted by Industry Leaders</p>
      <div className="mx mc" style={{ overflow: "hidden" }}>
        <div className="al" style={{ display: "flex", alignItems: "center", gap: 96, width: "max-content", animationDuration: "180s" }}>
          {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((l, i) => (
            <div key={i} style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 24px", height: 80 }}>
              <img src={l.d} alt={l.n} loading="lazy" style={{ maxHeight: 60, maxWidth: 220, objectFit: "contain", filter: "grayscale(1) invert(1) brightness(1.2)", mixBlendMode: "screen", opacity: 0.85, transition: "opacity .3s, filter .3s" }} onMouseEnter={e => e.currentTarget.style.opacity = "1"} onMouseLeave={e => e.currentTarget.style.opacity = "0.85"} />
            </div>
          ))}
        </div>
      </div></W>
  </section>
);

/* ═══════════════════════════════════════
   6. ABOUT / PROBLEM
   ═══════════════════════════════════════ */
const probs = [{ ic: Icons.layout, tx: "You have zero visibility into deal momentum and pipeline health in real-time." }, { ic: Icons.clock, tx: "Your forecast accuracy suffers because you can't analyze deals across your entire system." }, { ic: Icons.dollar, tx: "Revenue intelligence lives in silos—no unified view of what's actually converting." }, { ic: Icons.trending, tx: "Your sales team doesn't know which revenue levers to pull to hit targets." }];
const About = () => (
  <section style={{ padding: "80px 0" }}><W max={800} style={{ textAlign: "center" }}>
    <Badge icon={Icons.shield({ size: 14, color: C.primary })}>The Problem</Badge>
    <H2>Without revenue intelligence, you're flying blind.</H2>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 24, marginTop: 40, textAlign: "left" }}>
      {probs.map(({ ic, tx }) => (
        <div key={tx} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: 20, borderRadius: 10, background: C.card, border: `1px solid ${C.border}` }}>
          {ic({ size: 20, color: C.accent, style: { flexShrink: 0, marginTop: 2 } })}<span style={{ fontSize: 14, color: C.fgMuted, lineHeight: 1.6, fontWeight: 400 }}>{tx}</span>
        </div>
      ))}
    </div>
    <p style={{ fontSize: 20, fontWeight: 600, marginTop: 40, letterSpacing: "-0.45px", background: G.hero, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>There's a better way.</p>
    <div style={{ marginTop: 40, display: "flex", justifyContent: "center" }}><a href="#cta" className="shiny-cta"><span>See the Platform {Icons.arrowRight({ size: 16, color: C.fg })}</span></a></div>
  </W></section>
);

/* ═══════════════════════════════════════
   7. FEATURES (Bento Grid)
   ═══════════════════════════════════════ */
const feats = [
  { ic: Icons.brain, ti: "AI Deal Intelligence", de: "Automatic analysis of deal quality, velocity, and conversion probability across your entire pipeline." },
  { ic: Icons.layout, ti: "Revenue Forecasting", de: "AI-powered predictions based on historical patterns and real-time deal data—accurate forecast for your board." },
  { ic: Icons.dollar, ti: "Pipeline Optimization", de: "Identify bottlenecks and revenue leaks before they cost you money. Get actionable insights instantly." },
  { ic: Icons.zap, ti: "Team Performance Analytics", de: "See which reps are crushing it, which need support, and what coaching drives results." },
  { ic: Icons.users, ti: "Automated Insights", de: "Daily intelligence reports delivered—what's working, what needs attention, where the revenue is." },
  { ic: Icons.target, ti: "Integration Hub", de: "Connect GoHighLevel, Stripe, payment processors, CRMs—unify your revenue data in one platform." },
];
const Features = () => (
  <section id="features" style={{ padding: "100px 0" }}><W>
    <div style={{ textAlign: "center", marginBottom: 56 }}>
      <Badge icon={Icons.sparkles({ size: 14, color: C.primary })}>Platform</Badge>
      <H2>Everything you need to scale your sales operation</H2>
      <Desc style={{ margin: "0 auto" }}>ClickToClose uses AI to turn your sales data into actionable revenue intelligence—real-time insights that drive growth.</Desc>
    </div>
    <div className="bento-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
      {feats.map(({ ic, ti, de }, i) => {
        const span = (i === 0 || i === 3 || i === 4) ? 2 : 1;
        return (
          <div key={ti} style={{ gridColumn: `span ${span}`, padding: 32, borderRadius: 24, background: C.card, border: `1px solid ${C.border}`, display: "flex", flexDirection: "column", justifyItems: "flex-start", position: "relative", overflow: "hidden", transition: "transform .2s, border-color .2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = C.border; }}>

            {/* Subtle glow effect for span 2 cards */}
            {span === 2 && <div aria-hidden style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "radial-gradient(ellipse at top right, rgba(39,128,255,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />}

            <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(39,128,255,0.1)", border: "1px solid rgba(39,128,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
              {ic({ size: 24, color: C.primary })}
            </div>
            <H3>{ti}</H3>
            <p style={{ fontSize: 15, color: C.fgMuted, lineHeight: 1.6, fontWeight: 400, maxWidth: span === 2 ? "80%" : "100%" }}>{de}</p>
          </div>
        );
      })}
    </div>
    <div style={{ marginTop: 56, display: "flex", justifyContent: "center" }}><a href="#cta" className="shiny-cta"><span>Start Optimizing Revenue {Icons.arrowRight({ size: 16, color: C.fg })}</span></a></div>
    <style>{`@media(max-width:900px){.bento-grid{grid-template-columns:1fr!important;} .bento-grid > div{grid-column: span 1 !important; max-width: 100% !important}}`}</style>
  </W></section>
);

/* ═══════════════════════════════════════
   10. FAQ
   ═══════════════════════════════════════ */
const faqs = [
  { q: "How does ClickToClose's AI actually improve forecast accuracy?", a: "Our AI analyzes historical deal patterns, velocity, and rep performance across your entire pipeline. It learns what typically converts and flags deals at risk before they stall, giving you realistic revenue projections—not wishful thinking." },
  { q: "Will this replace my sales team or CRM?", a: "No. ClickToClose enhances what you already have. It works alongside your CRM, Stripe, GoHighLevel, and other tools—giving you the intelligence layer that identifies what your team should focus on next." },
  { q: "How quickly can we see results?", a: "Most teams see actionable insights within the first week. You'll identify pipeline bottlenecks, spot high-velocity deals, and understand which reps drive real revenue immediately. Forecast accuracy improves as the AI learns your patterns." },
  { q: "What if we're already using spreadsheets and analytics?", a: "Spreadsheets break at scale and consume hours per week. ClickToClose unifies all your revenue data in one place, automates reporting, and surfaces insights you'd never catch manually. No more chasing data—it comes to you daily." },
  { q: "Can ClickToClose integrate with our existing tools?", a: "Yes. We natively connect with GoHighLevel, HubSpot, Salesforce, Stripe, payment processors, and any CRM with an API. Setup is one-click with no code required—data starts flowing immediately." },
  { q: "How does team performance analytics actually drive revenue?", a: "See exactly which reps close deals, which need coaching, and what activities correlate with closed revenue. Identify your top performers' behaviors and replicate them across the team. This turns data into coaching that works." },
  { q: "Is integrating revenue data really that complicated?", a: "Not with ClickToClose. Most teams are live in under an hour. Connect your tools, and the AI begins analyzing immediately. You get daily intelligence reports without manual exports or data wrangling." },
  { q: "How secure is our revenue data?", a: "Bank-level encryption, zero storage of payment credentials, SOC 2 compliance. Your data stays yours—we're the intelligence layer, not the vault. Audit trails on everything." },
];
const FI = ({ f }) => {
  const [o, setO] = useState(false); return (
    <div style={{ borderBottom: `1px solid ${C.border}`, padding: "20px 0" }}>
      <button onClick={() => setO(!o)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", background: "none", border: "none", color: C.fg, cursor: "pointer", padding: 0, textAlign: "left", fontFamily: "'Inter',sans-serif" }}>
        <span style={{ fontSize: 15, fontWeight: 500, paddingRight: 16 }}>{f.q}</span>
        {Icons.chevDown({ size: 18, color: C.fgDim, style: { flexShrink: 0, transform: o ? "rotate(180deg)" : "rotate(0)", transition: "transform .2s" } })}
      </button>
      <div style={{ maxHeight: o ? 200 : 0, overflow: "hidden", transition: "max-height .3s ease" }}>
        <p style={{ fontSize: 14, color: C.fgMuted, lineHeight: 1.65, paddingTop: 12, fontWeight: 400 }}>{f.a}</p>
      </div>
    </div>
  )
};
const FAQ = () => (
  <section id="faq" style={{ padding: "100px 0" }}><W max={700}>
    <div style={{ textAlign: "center", marginBottom: 48 }}><Badge>FAQ</Badge><H2>Frequently asked questions</H2></div>
    {faqs.map(f => <FI key={f.q} f={f} />)}
  </W></section>
);

/* ═══════════════════════════════════════
   10.5. ANIMATED DASHBOARDS
   ═══════════════════════════════════════ */
const AnimatedDashboards = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} style={{ position: "relative", height: "300vh", background: C.bg }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>

        <div className="mob-wt-text" style={{ width: "100%", display: "flex", justifyContent: "flex-start", paddingLeft: "10vw", flexShrink: 0, position: "absolute", zIndex: 10, left: 0, pointerEvents: "none" }}>
          <div style={{ maxWidth: 360, background: "rgba(10,10,12,0.65)", padding: 32, borderRadius: 16, backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: `1px solid ${C.border}` }}>
            <Badge icon={Icons.sparkles({ size: 14, color: C.primary })}>Platform Walkthrough</Badge>
            <H2 style={{ marginTop: 16, fontSize: "clamp(28px, 3vw, 36px)", lineHeight: 1.1 }}>See everything.<br />Miss nothing.</H2>
            <Desc style={{ marginBottom: 0 }}>A single source of truth for your entire revenue engine. From individual call coaching to executive forecasting.</Desc>
          </div>
        </div>

        <motion.div className="mob-wt-slider" style={{ x, display: "flex", gap: "6vw", paddingLeft: "45vw", paddingRight: "10vw", alignItems: "center", height: "100%" }}>
          {dashboards.map((src, i) => (
            <div key={i} className="mob-wt-img" style={{ width: "65vw", maxWidth: 1000, flexShrink: 0, borderRadius: 16, overflow: "hidden", border: `1px solid ${C.border}`, boxShadow: "0 24px 64px rgba(0,0,0,0.6)", transition: "transform 0.3s ease, box-shadow 0.3s ease", cursor: "pointer" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02) translateY(-10px)"; e.currentTarget.style.boxShadow = "0 32px 80px rgba(39,128,255,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1) translateY(0)"; e.currentTarget.style.boxShadow = "0 24px 64px rgba(0,0,0,0.6)"; }}>
              <img src={src} alt={`Dashboard ${i}`} loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════
   11. CTA & QUIZ EMBED
   ═══════════════════════════════════════ */
const QuizEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data && e.data.type === 'quiz-resize' && e.data.slug === 'market-disruptors-wealth-os') {
        if (iframeRef.current) {
          iframeRef.current.style.height = e.data.height + 'px';
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div id="quiz-embed-market-disruptors-wealth-os" style={{ position: "relative", zIndex: 50, width: "100%", maxWidth: 800, margin: "0 auto", marginTop: 40, background: "transparent", borderRadius: 16 }}>
      <iframe
        ref={iframeRef}
        src="https://connect-via-quiz.lovable.app/embed/market-disruptors-wealth-os"
        style={{ width: "100%", border: "none", overflow: "hidden", height: "800px", borderRadius: 16, background: "transparent", minHeight: "1200px" }}
        scrolling="auto"
        title="Quiz"
      />
    </div>
  );
};

const CTA = () => (
  <section id="cta" style={{ padding: "100px 0", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(255,255,255,0.03) 0%,transparent 60%)", pointerEvents: "none" }} />
    <W style={{ position: "relative", textAlign: "center" }}>
      <H2 style={{ background: G.hero, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Get AI revenue intelligence in your inbox tomorrow.</H2>
      <Desc style={{ margin: "0 auto 32px" }}>Find out if your company is a good fit. Take the quiz below.</Desc>
      <QuizEmbed />
    </W>
  </section>
);

/* ═══════════════════════════════════════
   12. FOOTER
   ═══════════════════════════════════════ */
const fl = { Product: ["Features", "Integrations", "Changelog"], Company: ["About", "Blog", "Careers", "Contact"], Legal: ["Privacy", "Terms", "Security"] };
const Footer = () => (
  <footer style={{ borderTop: `1px solid ${C.border}`, padding: "60px 0 40px" }}><W>
    <div className="c2m c1t" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
      <div>
        <div style={{ fontSize: 18, fontWeight: 700, color: C.fg, display: "flex", alignItems: "center", gap: 8, marginBottom: 12, letterSpacing: "-0.45px" }}>
          <img src={LOGO_W_LG} alt="ClickToClose" style={{ height: 18 }} />
        </div>
        <p style={{ fontSize: 13, color: C.fgDim, lineHeight: 1.6, maxWidth: 260, fontWeight: 400 }}>AI-powered revenue intelligence for high-ticket sales teams. Real-time insights that drive growth and accountability.</p>
      </div>
      {Object.entries(fl).map(([h, ls]) => (
        <div key={h}><H3 style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "1.2px", marginBottom: 16 }}>{h}</H3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>{ls.map(l => <a key={l} href="#" style={{ fontSize: 13, color: C.fgDim, textDecoration: "none", transition: "color .2s" }} onMouseEnter={e => e.target.style.color = C.fg} onMouseLeave={e => e.target.style.color = C.fgDim}>{l}</a>)}</div>
        </div>
      ))}
    </div>
    <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
      <span style={{ fontSize: 12, color: C.fgDim }}>© {new Date().getFullYear()} ClickToClose. All rights reserved.</span>
      <span style={{ fontSize: 12, color: C.fgDim }}>Built for high-ticket sales teams.</span>
    </div>
  </W></footer>
);

/* ═══════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════ */
export default function C2CTrackerLanding() {
  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.fg, fontFamily: "'Inter',sans-serif" }}>
      <GlobalCSS />
      <Navbar />
      <main>
        <Hero />
        <LogoCarousel />
        <Testimonials />
        <About />
        <Features />
        <AnimatedDashboards />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
