import { useEffect } from 'react'

export default function LmMoziStep1() {
  useEffect(() => {
    // Load GHL form embed script
    const script = document.createElement('script')
    script.src = 'https://crm-api.clicktoclose.ai/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <style>{`
        .mozi-body {
          font-family: 'Inter', sans-serif;
          background-color: #161616;
          color: #ffffff;
          min-height: 100vh;
          margin: 0;
          padding: 0;
        }
        .mozi-header {
          background-color: #161616;
          border-bottom: 1px solid #1a1f3a;
          padding: 18px 40px;
          text-align: center;
        }
        .mozi-header span {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
        }
        .mozi-hero {
          background: #161616;
          padding: 70px 24px 40px;
          text-align: center;
        }
        .mozi-hero h1 {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 900;
          line-height: 1.1;
          white-space: nowrap;
          margin: 0 auto 20px;
          color: #ffffff;
        }
        .mozi-hero p {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: #a0aec0;
          max-width: 620px;
          margin: 0 auto 48px;
          line-height: 1.7;
        }
        .mozi-form-section {
          max-width: 560px;
          margin: 0 auto;
        }
        .mozi-footer {
          text-align: center;
          padding: 24px;
          font-size: 12px;
          color: #4a5568;
          border-top: 1px solid #1a1f3a;
        }
      `}</style>

      <div className="mozi-body">
        <header className="mozi-header">
          <span>Clicktoclose.ai</span>
        </header>

        <section className="mozi-hero">
          <h1>Hormozi Call Analyzer</h1>
          <p>AI workflow that evaluates your sales calls based on Alex Hormozi's frameworks.</p>

          <div style={{ maxWidth: '720px', margin: '0 auto 40px' }}>
            <img src="/lm-mozi-step1/workflow.png" alt="Workflow" style={{ width: '100%', borderRadius: '12px' }} />
          </div>

          <div className="mozi-form-section">
            <iframe
              src="https://crm-api.clicktoclose.ai/widget/form/97hredh97IM5ix5XmUMR"
              style={{ width: '100%', height: '630px', border: 'none', borderRadius: '3px' }}
              id="inline-97hredh97IM5ix5XmUMR"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Form - Comment MOZI"
              data-height="630"
              data-layout-iframe-id="inline-97hredh97IM5ix5XmUMR"
              data-form-id="97hredh97IM5ix5XmUMR"
              title="Form - Comment MOZI"
            />
          </div>
        </section>

        <footer className="mozi-footer">
          <p>© 2026 ClickToClose. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}
