import sys

with open("Existing Page Code/C2C Landing Page.tsx", "r") as f:
    lines = f.readlines()

new_content = """    {faqs.map(f => <FI key={f.q} f={f} />)}
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
        
        <div style={{ width: "100%", display: "flex", justifyContent: "flex-start", paddingLeft: "10vw", flexShrink: 0, position: "absolute", zIndex: 10, left: 0, pointerEvents: "none" }}>
           <div style={{ maxWidth: 360, background: "rgba(10,10,12,0.65)", padding: 32, borderRadius: 16, backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: `1px solid ${C.border}` }}>
             <Badge icon={Icons.sparkles({ size: 14, color: C.primary })}>Platform Walkthrough</Badge>
             <H2 style={{ marginTop: 16, fontSize: "clamp(28px, 3vw, 36px)", lineHeight: 1.1 }}>See everything.<br/>Miss nothing.</H2>
             <Desc style={{ marginBottom: 0 }}>A single source of truth for your entire revenue engine. From individual call coaching to executive forecasting.</Desc>
           </div>
        </div>

        <motion.div style={{ x, display: "flex", gap: "6vw", paddingLeft: "45vw", paddingRight: "10vw", alignItems: "center" }}>
          {dashboards.map((src, i) => (
            <div key={i} style={{ width: "65vw", maxWidth: 1000, flexShrink: 0, borderRadius: 16, overflow: "hidden", border: `1px solid ${C.border}`, boxShadow: "0 24px 64px rgba(0,0,0,0.6)" }}>
              <img src={src} alt={`Dashboard ${i}`} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════
   11. CTA — uses gradient-linear-5
   ═══════════════════════════════════════ */
const CTA = () => (
  <section id="cta" style={{ padding: "100px 0", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(255,255,255,0.03) 0%,transparent 60%)", pointerEvents: "none" }} />
    <W style={{ position: "relative", textAlign: "center" }}>
      <H2 style={{ background: G.hero, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Get AI revenue intelligence in your inbox tomorrow.</H2>
      <Desc style={{ margin: "0 auto 32px" }}>See which deals will close, where revenue leaks exist, and what your team should do next—delivered daily.</Desc>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <a href="#cta" className="shiny-cta">
          <span>Book a Call {Icons.arrowRight({ size: 16, color: "#FAFAFA" })}</span>
        </a>
      </div>
    </W>
  </section>
);
"""

# Replace lines 577 to 715 (indices 576 to 715)
# Note: verify the line index carefully. The file has lines 1-based, index 0 is line 1.
# Line 577 is index 576. Line 715 is index 714.
del lines[576:715]
lines.insert(576, new_content)

with open("Existing Page Code/C2C Landing Page.tsx", "w") as f:
    f.writelines(lines)
