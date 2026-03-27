import { useEffect } from 'react'

export default function LmMoziStep2() {
  useEffect(() => {
    // Load GHL form embed script
    const script = document.createElement('script')
    script.src = 'https://crm-api.clicktoclose.ai/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)

    // Load Vidalytics
    const vidalyticsScript = document.createElement('script')
    vidalyticsScript.type = 'text/javascript'
    vidalyticsScript.innerHTML = `
      (function (v, i, d, a, l, y, t, c, s) {
        y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}
        var vl='Loader',vli=v[y][vl],vsl=v[c][vl+'Script'],vlf=v[c][vl+'Loaded'],ve='Embed';
        if(!vsl){vsl=function(u,cb){
          if(v[vlf]){cb();}else{var tag=i.createElement('script');tag.src=u;tag.onload=function(){v[vlf]=true;cb();};i.head.appendChild(tag);}
        };}
        vsl(l+'loader.min.js',function(){
          if(!vli){var vlc=v[c][vl];vli=new vlc();}
          vli.loadScript(l+'player.min.js',function(){
            var vec=v[d][ve];t=new vec();t.run(a);
          });
        });
      })(window,document,'Vidalytics','vidalytics_embed_APCeAbDlChrNsYAR','https://fast.vidalytics.com/embeds/GHq7Oz_E/APCeAbDlChrNsYAR/');
    `
    document.body.appendChild(vidalyticsScript)

    return () => {
      document.body.removeChild(script)
      document.body.removeChild(vidalyticsScript)
    }
  }, [])

  return (
    <>
      <style>{`
        .mozi2-body {
          font-family: 'Inter', sans-serif;
          background-color: #161616;
          color: #ffffff;
          min-height: 100vh;
          margin: 0;
          padding: 0;
        }
        .mozi2-header {
          background-color: #161616;
          border-bottom: 1px solid #1a1f3a;
          padding: 18px 40px;
          text-align: center;
        }
        .mozi2-header span {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
        }
        .mozi2-hero {
          background: #161616;
          padding: 60px 24px 20px;
          text-align: center;
        }
        .mozi2-hero h1 {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 900;
          line-height: 1.15;
          max-width: 820px;
          margin: 0 auto 20px;
          color: #ffffff;
        }
        .mozi2-subheadline {
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          font-weight: 600;
          color: #a0aec0;
          max-width: 700px;
          margin: 0 auto 16px;
          line-height: 1.4;
        }
        .mozi2-small-note {
          font-size: 0.8rem;
          color: #718096;
          max-width: 600px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }
        .mozi2-cta-btn {
          display: inline-block;
          background: #3b5bdb;
          color: #ffffff;
          font-size: 1rem;
          font-weight: 800;
          padding: 18px 48px;
          border-radius: 12px;
          text-decoration: none;
          letter-spacing: 1px;
          margin-bottom: 60px;
          transition: background 0.2s;
          cursor: pointer;
          border: none;
        }
        .mozi2-cta-btn:hover { background: #2f4bbf; }
        .mozi2-booking {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 24px 60px;
        }
        .mozi2-booking .section-pre {
          text-align: center;
          font-size: 1rem;
          color: #a0aec0;
          margin-bottom: 8px;
        }
        .mozi2-booking h2 {
          text-align: center;
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 40px;
        }
        .mozi2-footer {
          text-align: center;
          padding: 24px;
          font-size: 12px;
          color: #4a5568;
          border-top: 1px solid #1a1f3a;
        }
      `}</style>

      <div className="mozi2-body">
        <header className="mozi2-header">
          <span>Clicktoclose.ai</span>
        </header>

        <section className="mozi2-hero">
          <h1>IMPORTANT — Before You Check Your Email, Watch This Video</h1>
          <p className="mozi2-subheadline">100K+ Business Owners Looking to Scale their Sales Operations to 7-figure with AI.</p>
          <p className="mozi2-small-note">(check spam/promotions email tab if you do not see it)</p>

          <div style={{ maxWidth: '760px', margin: '0 auto 40px' }}>
            <div id="vidalytics_embed_APCeAbDlChrNsYAR" style={{ width: '100%', position: 'relative', paddingTop: '56.25%' }}></div>
          </div>

          <a href="#book" className="mozi2-cta-btn">SEE IF I'M A FIT</a>
        </section>

        <section className="mozi2-booking" id="book">
          <p className="section-pre">While you're waiting for your Hormozi Call Analyzer...</p>
          <h2>Want to Scale Your Sales Operations to 7-Figures With AI?</h2>

          <iframe
            src="https://crm-api.clicktoclose.ai/widget/survey/XBYG8uwEJU8qvYzbnwX8"
            style={{ border: 'none', width: '100%', display: 'block' }}
            scrolling="no"
            id="XBYG8uwEJU8qvYzbnwX8"
            title="survey"
          />
        </section>

        <footer className="mozi2-footer">
          <p>© 2026 ClickToClose. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}
