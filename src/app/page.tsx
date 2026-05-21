'use client'
import { useState } from 'react'

const TOPICS = [
  { id:1, slug:'stroemungsoptimierung', title:'Strömungsoptimierung', cat:'Mobilität', teaser:'Weniger Verbrauch, mehr Leistung — durch Physik, nicht durch Chemie.', icon:'⚡', lv:0 },
  { id:2, slug:'svenflex-mobil', title:'Svenflex Mobil', cat:'Mobilität', teaser:'Das mobile System — flexibel einsetzbar, sofort spürbar.', icon:'🚗', lv:0 },
  { id:3, slug:'stropt-festeinbau', title:'STROPT Festeinbau', cat:'Mobilität', teaser:'Permanente Integration für maximale Effizienz.', icon:'🔧', lv:1 },
  { id:4, slug:'wasserstoff-auto', title:'Wasserstoff im Auto', cat:'Mobilität', teaser:'Wasserstoff als Kraftstoffergänzung — die nächste Stufe.', icon:'💧', lv:1 },
  { id:5, slug:'motorrad', title:'Motorrad-Systeme', cat:'Mobilität', teaser:'Effizienz und Fahrspaß — auch für zwei Räder.', icon:'🏍️', lv:0 },
  { id:6, slug:'lkw-flotten', title:'LKW & Flotten', cat:'Mobilität', teaser:'26% weniger Verbrauch auf 100 Betonmischern bewiesen.', icon:'🚛', lv:1 },
  { id:7, slug:'wasserstoff-heizung', title:'Wasserstoff-Heizung V3', cat:'Energie', teaser:'Heizen ohne Öl, Gas oder Strom — die Lösung für dein Zuhause.', icon:'🔥', lv:0 },
  { id:8, slug:'autarke-stromerzeugung', title:'Autarke Stromerzeugung', cat:'Energie', teaser:'Dein Strom, deine Regeln — unabhängig vom Netz.', icon:'🌞', lv:1 },
  { id:9, slug:'innovationszentrum', title:'Europ. Innovationszentrum', cat:'Energie', teaser:'Das Zentrum für neue Energietechnologien — live erleben.', icon:'🏛️', lv:0 },
  { id:10, slug:'energy-sovereignty', title:'Energy Sovereignty System™', cat:'Energie', teaser:'Energetische, finanzielle und persönliche Freiheit — das Gesamtsystem.', icon:'🌍', lv:0 },
  { id:11, slug:'selbstzahlprinzip', title:'Das Selbstzahl-Prinzip', cat:'Finanzen', teaser:'Dein System zahlt sich selbst — monatlich, automatisch.', icon:'💰', lv:0 },
  { id:12, slug:'dezentrale-finanzen', title:'Dezentrale Finanzen', cat:'Finanzen', teaser:'Kein Behördenzugriff, kein Mittelmann — dein Geld, deine Kontrolle.', icon:'🔐', lv:1 },
  { id:13, slug:'krypto-konto', title:'Dezentrales Krypto-Konto', cat:'Finanzen', teaser:'250$ Startguthaben, 10% monatliche Ausschüttung.', icon:'₿', lv:2 },
  { id:14, slug:'partnerprogramm', title:'Partnerprogramm', cat:'Finanzen', teaser:'200€ pro Empfehlung, 200€ pro Einbau — baue dein Netzwerk auf.', icon:'🤝', lv:1 },
  { id:15, slug:'svenfix-vip', title:'Svenfix VIP Service', cat:'Finanzen', teaser:'VIP-Einbau vor Ort inkl. Schulung und Partneraufnahme.', icon:'⭐', lv:0 },
  { id:16, slug:'inner-circle', title:'Inner Circle', cat:'Community', teaser:'Exklusiver Zugang, direkte Sprechstunde jeden Donnerstag 19:15 Uhr.', icon:'🎯', lv:3 },
  { id:17, slug:'probefahrt-netzwerk', title:'Probefahrt-Netzwerk', cat:'Community', teaser:'Überzeuge dich selbst — finde einen Partner in deiner Nähe.', icon:'🗺️', lv:1 },
  { id:18, slug:'webinare', title:'Webinare & Events', cat:'Community', teaser:'Live-Präsentationen, Q&A-Runden und exklusive Einblicke.', icon:'📡', lv:0 },
  { id:19, slug:'beweise-studien', title:'Beweise & Studien', cat:'Wissen', teaser:'7 unabhängige Praxis-Beweise — messbar, reproduzierbar, offiziell.', icon:'📊', lv:0 },
  { id:20, slug:'technologie', title:'Die Technologie dahinter', cat:'Wissen', teaser:'Wie Strömungsphysik Verbrauch und Leistung verändert.', icon:'🔬', lv:0 },
  { id:21, slug:'svens-story', title:'Svens Geschichte', cat:'Wissen', teaser:'Von der Entdeckung bis zu 500+ Systemen — die echte Story.', icon:'📖', lv:0 },
  { id:22, slug:'buecher', title:'Bücher & Guides', cat:'Wissen', teaser:'Tiefes Wissen zu jedem Thema — kostenlos im Portal.', icon:'📚', lv:1 },
  { id:23, slug:'faq', title:'FAQ & Häufige Fragen', cat:'Wissen', teaser:'Alles, was du wissen musst — übersichtlich und klar.', icon:'❓', lv:0 },
]

const CATS = ['Mobilität','Energie','Finanzen','Community','Wissen']
const LV_LABELS: Record<number,{l:string,c:string}> = {
  0:{l:'Kostenlos',c:'badge-free'},
  1:{l:'Level 1',c:'badge-l1'},
  2:{l:'Level 2',c:'badge-l2'},
  3:{l:'Inner Circle',c:'badge-l3'},
}

const FALLBACK_REPLIES: Record<string,string> = {
  preis:'Das Fix System: einmalig 2.197€ oder 5x447€ Raten. Gesamtwert: 5.486€ → /einstieg',
  kosten:'Das Fix System: einmalig 2.197€ oder 5x447€ Raten. Gesamtwert: 5.486€ → /einstieg',
  kauf:'Das Fix System: einmalig 2.197€ oder 5x447€ Raten. Gesamtwert: 5.486€ → /einstieg',
  stroemung:'Die Strömungsoptimierung reduziert Kraftstoffverbrauch um bis zu 26% — an 100 Betonmischern bewiesen. 🚗',
  svenflex:'Das mobile System — sofort einbaubar, sofort spürbar. 250€ Provision bei Weiterempfehlung. 🚗',
  verbrauch:'Die Strömungsoptimierung reduziert Kraftstoffverbrauch um bis zu 26% — an 100 Betonmischern bewiesen. 🚗',
  wasserstoff:'Wasserstoff-Heizung V3 kommt — präsentiert im Innovationszentrum. Inner-Circle-Details exklusiv. 🔥',
  heizung:'Wasserstoff-Heizung V3 kommt — präsentiert im Innovationszentrum. Inner-Circle-Details exklusiv. 🔥',
  partner:'Als Partner: 200€ pro Empfehlung + 200€ pro Einbau. Ein Dutzend Einbauten = mittlerer 4-stelliger Zusatzverdienst. 🤝',
  provision:'Als Partner: 200€ pro Empfehlung + 200€ pro Einbau. Ein Dutzend Einbauten = mittlerer 4-stelliger Zusatzverdienst. 🤝',
  verdien:'Als Partner: 200€ pro Empfehlung + 200€ pro Einbau. Ein Dutzend Einbauten = mittlerer 4-stelliger Zusatzverdienst. 🤝',
  inner:'Inner Circle: jeden Donnerstag 19:15 Uhr Live-Sprechstunde mit Sven. Exklusiv für Mitglieder. 🎯',
  donnerstag:'Inner Circle: jeden Donnerstag 19:15 Uhr Live-Sprechstunde mit Sven. Exklusiv für Mitglieder. 🎯',
  probefahrt:'564 Probefahrt-Partner in DE, CH und AT. Überzeuge dich selbst, bevor du entscheidest. 🗺️',
  krypto:'Dezentrales Krypto-Konto: 250$ Start + 10% monatlich. Das System zahlt sich selbst. 💰',
  refinanzier:'Das Selbstzahl-Prinzip: dein System zahlt sich monatlich selbst — durch 10% Ausschüttung. 💰',
  konto:'Dezentrales Krypto-Konto: 250$ Start + 10% monatlich. Das System zahlt sich selbst. 💰',
}

function getReply(q: string): string {
  const lower = q.toLowerCase().replace(/[äöüß]/g, c => ({'ä':'ae','ö':'oe','ü':'ue','ß':'ss'}[c] ?? c))
  for (const [key, val] of Object.entries(FALLBACK_REPLIES)) {
    if (lower.includes(key)) return val
  }
  return 'Entdecke alle 23 Themen — oder starte direkt unter /einstieg. Was möchtest du genauer wissen? ⚡'
}

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false)
  const [msgs, setMsgs] = useState([{r:'ai', t:'Hallo! Ich bin dein Energiefreigeist-Assistent. Was möchtest du wissen? 🌿'}])
  const [inp, setInp] = useState('')
  const [loading, setLoading] = useState(false)

  const send = async () => {
    if (!inp.trim() || loading) return
    const userMsg = inp.trim()
    setMsgs(m => [...m, {r:'user', t:userMsg}])
    setInp('')
    setLoading(true)
    await new Promise(r => setTimeout(r, 600))
    setMsgs(m => [...m, {r:'ai', t: getReply(userMsg)}])
    setLoading(false)
  }

  return (
    <>
      <header>
        <div className="header-inner">
          <div className="logo">⚡ Energie<span className="brand">freigeist</span></div>
          <nav>
            <a href="#themen">Themen</a>
            <a href="#einstieg">Einsteigen</a>
            <a href="#inner-circle">Inner Circle</a>
          </nav>
          <a href="#einstieg" className="btn" style={{fontSize:'13px',padding:'8px 16px'}}>Jetzt einsteigen</a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <div className="hero">
          <div className="pill"><span className="dot" />Energy Sovereignty System™</div>
          <h1>Willkommen im<br /><span className="brand">Energie-Universum</span></h1>
          <p>23 Themen rund um Energetische, Finanzielle und Persönliche Freiheit.
          Entdecke neue Technologien — und wie sie sich selbst bezahlen.</p>
          <div className="hero-btns">
            <a href="#themen" className="btn">Alle Themen entdecken</a>
            <a href="#einstieg" className="btn btn-outline">Jetzt einsteigen</a>
          </div>
        </div>

        {/* Stats */}
        <div className="stats">
          {[['23','Themen'],['500+','Systeme verkauft'],['26%','Verbrauchsersparnis'],['564','Netzwerk-Partner']].map(([v,l]) => (
            <div key={l} className="stat"><div className="stat-val">{v}</div><div className="stat-lbl">{l}</div></div>
          ))}
        </div>

        {/* Topics */}
        <div className="section" id="themen">
          <h2>Das Energie-Universum</h2>
          {CATS.map(cat => {
            const catTopics = TOPICS.filter(t => t.cat === cat)
            return (
              <div key={cat}>
                <div className="cat-title">{cat}</div>
                <div className="grid">
                  {catTopics.map(t => {
                    const lv = LV_LABELS[t.lv]
                    return (
                      <div key={t.id} className="card topic-card">
                        <div className="top">
                          <span style={{fontSize:'2rem'}}>{t.icon}</span>
                          <span className={`badge ${lv.c}`}>{lv.l}</span>
                        </div>
                        <h4>{t.title}</h4>
                        <p>{t.teaser}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Einstieg */}
        <div className="section" id="einstieg">
          <h2>Jetzt einsteigen</h2>
          <div className="grid">
            {[
              {icon:'🚗',title:'Svenflex Mobil',sub:'Einstieg Mobilität',price:'Ab sofort',desc:'Das mobile System — flexibel, sofort spürbar, nachweislich wirksam.',perks:['Sofort einbaubar','250€ Provision','Probefahrt-Status']},
              {icon:'🔧',title:'Sventronik Fix System',sub:'Komplett-Paket',price:'5x447€ oder 2.197€',desc:'Das Gesamt-Paket: Wert 5.486€. VIP Einbau + Schulung + Krypto + Inner Circle.',perks:['VIP Einbau vor Ort','Krypto-Konto','Inner Circle','200€/Empfehlung']},
              {icon:'💧',title:'Wasserstoff-Paket',sub:'Zukunft Energie',price:'Anfragen',desc:'Wasserstoff-Heizung V3 + Wasserstoff im Auto — komplette Energie-Souveränität.',perks:['Heizung V3','Wasserstoff im Auto','Innovationszentrum']},
            ].map(p => (
              <div key={p.title} className="card" style={{display:'flex',flexDirection:'column'}}>
                <div style={{fontSize:'2.5rem',marginBottom:'12px'}}>{p.icon}</div>
                <div style={{fontSize:'11px',color:'#22c55e',fontWeight:600,textTransform:'uppercase',letterSpacing:'.05em',marginBottom:'4px'}}>{p.sub}</div>
                <h3 style={{fontSize:'1.1rem',fontWeight:700,marginBottom:'8px'}}>{p.title}</h3>
                <p style={{fontSize:'13px',color:'#94a3b8',marginBottom:'16px',flex:1}}>{p.desc}</p>
                <ul style={{marginBottom:'16px',listStyle:'none',display:'flex',flexDirection:'column',gap:'6px'}}>
                  {p.perks.map(pk => <li key={pk} style={{fontSize:'13px',color:'#cbd5e1',display:'flex',alignItems:'center',gap:'6px'}}><span style={{color:'#22c55e',fontSize:'11px'}}>✓</span>{pk}</li>)}
                </ul>
                <div style={{fontWeight:700,color:'#22c55e',marginBottom:'12px'}}>{p.price}</div>
                <a href="https://sventronik.com" className="btn" style={{textAlign:'center'}}>Mehr erfahren</a>
              </div>
            ))}
          </div>
        </div>

        {/* Inner Circle */}
        <div className="section">
          <div className="cta-box" id="inner-circle">
            <div style={{fontSize:'3rem',marginBottom:'12px'}}>🎯</div>
            <h3>Inner Circle — Jeden Donnerstag, 19:15 Uhr</h3>
            <p>Direkte Sprechstunde mit Sven. Live Q&A, exklusive Updates, neue Technologien als Erster.</p>
            <a href="#einstieg" className="btn">Inner Circle freischalten</a>
          </div>
        </div>
      </main>

      <footer>© 2026 Sven Mund — Energiefreigeist. Alle Rechte vorbehalten.</footer>

      {/* Chat FAB */}
      <button id="chat-fab" onClick={() => setChatOpen(o => !o)} aria-label="Assistent">
        {chatOpen ? '✕' : '💬'}
      </button>

      {/* Chat Panel */}
      <div id="chat-panel" className={chatOpen ? 'open' : ''}>
        <div className="chat-header">
          <span style={{fontSize:'1.2rem'}}>⚡</span>
          <div><div className="title">Energiefreigeist Assistent</div><div className="sub">Frag mich alles über Svens Systeme</div></div>
        </div>
        <div id="chat-msgs">
          {msgs.map((m,i) => <div key={i} className={`msg ${m.r==='ai'?'msg-ai':'msg-user'}`}>{m.t}</div>)}
          {loading && <div className="msg msg-ai" style={{color:'#64748b',fontStyle:'italic'}}>Denkt nach…</div>}
        </div>
        <div className="chat-input-row">
          <input
            value={inp}
            onChange={e => setInp(e.target.value)}
            onKeyDown={e => e.key==='Enter' && send()}
            placeholder="Deine Frage…"
          />
          <button onClick={send} disabled={loading || !inp.trim()}>→</button>
        </div>
      </div>
    </>
  )
}
