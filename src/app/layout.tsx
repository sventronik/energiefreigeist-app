import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Energiefreigeist — Das Energie-Universum',
  description: '23 Themen rund um Energetische, Finanzielle und Persönliche Freiheit von Sven Mund.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{__html: `
          *{box-sizing:border-box;margin:0;padding:0}
          body{background:#080b0f;color:#f1f5f9;font-family:system-ui,-apple-system,sans-serif;line-height:1.6}
          a{color:inherit;text-decoration:none}
          .brand{color:#22c55e}
          .card{background:#0f1117;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;transition:all 0.2s}
          .card:hover{border-color:rgba(34,197,94,0.3);transform:translateY(-2px)}
          .btn{display:inline-block;background:#22c55e;color:#fff;font-weight:600;padding:12px 24px;border-radius:10px;border:none;cursor:pointer;font-size:14px;transition:background 0.2s}
          .btn:hover{background:#16a34a}
          .btn-outline{background:transparent;border:1px solid rgba(255,255,255,0.2)}
          .btn-outline:hover{border-color:rgba(34,197,94,0.5);background:rgba(34,197,94,0.05)}
          .badge{display:inline-block;padding:2px 10px;border-radius:999px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.05em}
          .badge-free{background:rgba(34,197,94,0.12);color:#22c55e}
          .badge-l1{background:rgba(59,130,246,0.12);color:#60a5fa}
          .badge-l2{background:rgba(168,85,247,0.12);color:#c084fc}
          .badge-l3{background:rgba(245,158,11,0.12);color:#fbbf24}
          header{position:fixed;top:0;left:0;right:0;z-index:50;background:rgba(8,11,15,0.85);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,0.05)}
          .header-inner{max-width:1100px;margin:0 auto;padding:0 20px;height:60px;display:flex;align-items:center;justify-content:space-between}
          .logo{font-size:18px;font-weight:700;display:flex;align-items:center;gap:8px}
          nav{display:flex;gap:24px;font-size:14px;color:#94a3b8}
          nav a:hover{color:#fff}
          main{padding-top:60px}
          .hero{padding:80px 20px 60px;text-align:center;max-width:800px;margin:0 auto}
          .hero h1{font-size:clamp(2rem,5vw,3.5rem);font-weight:800;line-height:1.2;margin-bottom:20px}
          .hero p{font-size:1.1rem;color:#94a3b8;margin-bottom:32px;max-width:600px;margin-left:auto;margin-right:auto}
          .hero-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
          .pill{display:inline-flex;align-items:center;gap:6px;background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.2);border-radius:999px;padding:6px 16px;font-size:13px;color:#22c55e;margin-bottom:24px}
          .dot{width:8px;height:8px;border-radius:50%;background:#22c55e;animation:pulse 2s infinite}
          @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
          .stats{max-width:800px;margin:0 auto 60px;padding:0 20px;display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:16px}
          .stat{background:#0f1117;border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:20px;text-align:center}
          .stat-val{font-size:1.8rem;font-weight:800;color:#22c55e}
          .stat-lbl{font-size:13px;color:#64748b;margin-top:4px}
          .section{max-width:1100px;margin:0 auto;padding:0 20px 60px}
          .section h2{text-align:center;font-size:1.8rem;font-weight:700;margin-bottom:40px}
          .cat-title{font-size:1rem;font-weight:600;color:#22c55e;margin-bottom:16px;display:flex;align-items:center;gap:12px}
          .cat-title::before,.cat-title::after{content:'';flex:1;height:1px;background:rgba(255,255,255,0.06)}
          .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;margin-bottom:40px}
          .topic-card{text-decoration:none}
          .topic-card .icon{font-size:2rem;margin-bottom:12px}
          .topic-card h4{font-size:1rem;font-weight:600;margin-bottom:6px}
          .topic-card p{font-size:13px;color:#94a3b8;line-height:1.5}
          .topic-card .top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px}
          .cta-box{background:#0f1117;border:1px solid rgba(34,197,94,0.2);border-radius:16px;padding:40px;text-align:center;max-width:700px;margin:0 auto 80px}
          .cta-box h3{font-size:1.4rem;font-weight:700;margin-bottom:8px}
          .cta-box p{color:#94a3b8;margin-bottom:24px}
          /* Chat */
          #chat-fab{position:fixed;bottom:24px;right:24px;z-index:100;width:56px;height:56px;background:#22c55e;border:none;border-radius:50%;font-size:22px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(34,197,94,0.3);transition:transform 0.2s}
          #chat-fab:hover{transform:scale(1.1)}
          #chat-panel{display:none;position:fixed;bottom:92px;right:24px;z-index:100;width:340px;max-height:480px;background:#0f1117;border:1px solid rgba(255,255,255,0.1);border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,0.5);flex-direction:column;overflow:hidden}
          #chat-panel.open{display:flex}
          .chat-header{padding:16px;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;gap:10px}
          .chat-header .title{font-weight:600;font-size:14px}
          .chat-header .sub{font-size:11px;color:#64748b}
          #chat-msgs{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px}
          .msg{padding:10px 14px;border-radius:12px;font-size:13px;line-height:1.5;max-width:90%}
          .msg-ai{background:rgba(255,255,255,0.05);border-radius:12px 12px 12px 4px;align-self:flex-start}
          .msg-user{background:rgba(34,197,94,0.15);border-radius:12px 12px 4px 12px;align-self:flex-end;text-align:right}
          .chat-input-row{padding:12px;border-top:1px solid rgba(255,255,255,0.06);display:flex;gap:8px}
          .chat-input-row input{flex:1;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:8px 12px;font-size:13px;color:#fff;outline:none}
          .chat-input-row input:focus{border-color:rgba(34,197,94,0.4)}
          .chat-input-row button{background:#22c55e;border:none;border-radius:8px;padding:8px 12px;color:#fff;font-weight:600;cursor:pointer;font-size:14px}
          footer{text-align:center;padding:40px 20px;color:#334155;font-size:13px;border-top:1px solid rgba(255,255,255,0.04)}
        `}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
