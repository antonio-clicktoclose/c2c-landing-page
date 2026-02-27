import re

file_path = "/Users/antoniomonteiro/Desktop/C2C Landing Page/Existing Page Code/C2C Landing Page.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

start_marker = "/* ═══════════════════════════════════════\n   7. FEATURES (bordered grid)\n   ═══════════════════════════════════════ */"
end_marker = "/* ═══════════════════════════════════════\n   10. FAQ"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker, start_idx)

if start_idx != -1 and end_idx != -1:
    new_bento_content = """/* ═══════════════════════════════════════
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
            <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, color: C.fg, letterSpacing: "-0.5px" }}>{ti}</h3>
            <p style={{ fontSize: 15, color: C.fgMuted, lineHeight: 1.6, fontWeight: 400, maxWidth: span === 2 ? "80%" : "100%" }}>{de}</p>
          </div>
        );
      })}
    </div>
    <style>{`@media(max-width:900px){.bento-grid{grid-template-columns:1fr!important;} .bento-grid > div{grid-column: span 1 !important; max-width: 100% !important}}`}</style>
  </W></section>
);

"""
    new_content = content[:start_idx] + new_bento_content + content[end_idx:]
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Success: Bento Grid added.")
else:
    print("Error: Markers not found.")
    
