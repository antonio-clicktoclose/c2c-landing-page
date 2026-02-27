import re

file_path = "/Users/antoniomonteiro/Desktop/C2C Landing Page/Existing Page Code/C2C Landing Page.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

start_marker = "        {/* ── Dashboard Preview ── */}"
end_marker = "      </div>\n    </section>"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker, start_idx)

if start_idx != -1 and end_idx != -1:
    new_vsl_content = """        {/* ── VSL Placeholder ── */}
        <div className="bs d4" style={{ position: "relative", zIndex: 10, marginTop: "clamp(32px,6vw,80px)", padding: "0 8px" }}>
          {/* Bottom fade to #0A0A0A */}
          <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 10, background: "linear-gradient(to bottom, transparent 0%, transparent 35%, #0A0A0A 100%)", pointerEvents: "none", borderRadius: 16 }} />
          
          <div style={{ maxWidth: 1024, margin: "0 auto", borderRadius: 24, border: `1px solid ${C.border}`, background: C.card, padding: 8, boxShadow: "0 20px 50px -15px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(255,255,255,0.02)", position: "relative" }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 16, overflow: "hidden", background: "#050505", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              {/* Play Button Overlay */}
              <div style={{ position: "absolute", zIndex: 20, width: 80, height: 80, borderRadius: "50%", background: "rgba(39, 128, 255, 0.2)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(39, 128, 255, 0.5)", transition: "transform 0.2s" }}
                   onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                   onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: C.primary, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 32px rgba(39, 128, 255, 0.4)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 4 }}>
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1280&q=80&auto=format" alt="VSL Thumbnail Cover" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }} />
            </div>
          </div>
          
          {/* Trust Stats Bar */}
          <div style={{ maxWidth: 1024, margin: "48px auto 0", position: "relative", zIndex: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24, borderTop: `1px solid ${C.border}`, paddingTop: 32 }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: C.fg, letterSpacing: "-1px" }}>$6M+</div>
                <div style={{ fontSize: 14, color: C.fgMuted, marginTop: 4 }}>Monthly Profit Generated</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: C.fg, letterSpacing: "-1px" }}>32%</div>
                <div style={{ fontSize: 14, color: C.fgMuted, marginTop: 4 }}>Avg. Close Rate Increase</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: C.fg, letterSpacing: "-1px" }}>15hrs</div>
                <div style={{ fontSize: 14, color: C.fgMuted, marginTop: 4 }}>Saved Weekly on QA</div>
              </div>
            </div>
          </div>
        </div>
"""
    new_content = content[:start_idx] + new_vsl_content + content[end_idx:]
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Success: VSL Placeholder and Stats Bar added.")
else:
    print("Error: Markers not found.")
    
