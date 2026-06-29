/* ============================================================
   REEP — Rodic Engineering Excellence Program
   Deep navy · orange accent · amber warm · sky cool
   Space Grotesk (display) · Inter (body) · Space Mono (tech)
   Dark immersive wireframe aesthetic
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

:root {
  --navy:       #023047;
  --navy-deep:  #011627;
  --navy-light: #034067;
  --surface:    rgba(3, 48, 71, 0.6);
  --surface-2:  rgba(3, 48, 71, 0.35);
  --glass:      rgba(2, 48, 71, 0.75);
  --glass-border: rgba(255,255,255,0.08);

  --orange:     #FB8500;
  --orange-d:   #E07600;
  --amber:      #FFB703;
  --sky:        #219EBC;
  --sky-light:  #8ECAE6;
  --cream:      #F4F3EE;

  --text:       #F0F4F8;
  --text-2:     #8BA4BD;
  --text-muted: #7C97B0;
  --ink:        #0A1929;

  --display: 'Space Grotesk', system-ui, sans-serif;
  --body:    'Inter', system-ui, sans-serif;
  --mono:    'Space Mono', monospace;

  --s1: 8px; --s2: 16px; --s3: 24px; --s4: 32px;
  --s5: 48px; --s6: 64px; --s7: 96px; --s8: 128px;
  --maxw: 1280px;
  --fast: 200ms cubic-bezier(.22,.61,.36,1);
  --slow: 500ms cubic-bezier(.22,.61,.36,1);
  --radius: 8px;
  --radius-sm: 4px;
  --radius-pill: 999px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  margin: 0;
  background: var(--navy-deep);
  color: var(--text-2);
  font-family: var(--body);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

/* Subtle engineering grid */
body::before {
  content: '';
  position: fixed; inset: 0;
  background-image:
    linear-gradient(rgba(33,158,188,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(33,158,188,0.06) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  z-index: 0;
}

.reep-root { position: relative; z-index: 1; }

::selection { background: var(--orange); color: var(--navy-deep); }

h1,h2,h3,h4 { font-family: var(--display); font-weight: 700; margin: 0; color: var(--text); }
h1 { font-size: clamp(40px, 6vw, 80px); line-height: 1.05; letter-spacing: -0.03em; }
h2 { font-size: clamp(28px, 4vw, 48px); line-height: 1.1; letter-spacing: -0.02em; }
h3 { font-size: clamp(20px, 2.4vw, 28px); line-height: 1.15; letter-spacing: -0.015em; }
h4 { font-size: 18px; line-height: 1.25; letter-spacing: -0.01em; }
p  { margin: 0; color: var(--text-2); }
em, .it { font-style: italic; }

/* ============ GRADIENT TEXT ============ */
.gradient-text {
  background: linear-gradient(135deg, var(--orange), var(--amber));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ============ BANDS / LAYOUT ============ */
.band {
  position: relative; width: 100%;
  padding: var(--s8) 0;
  opacity: 0; transform: translateY(24px);
  transition: opacity var(--slow), transform var(--slow);
}
.band.reveal { opacity: 1; transform: none; }
.stagger-reveal {
  opacity: 0; transform: translateY(24px);
  transition: opacity var(--slow), transform var(--slow);
}
.stagger-reveal.reveal-active {
  opacity: 1; transform: none;
}
@media (prefers-reduced-motion: reduce){ 
  .band, .stagger-reveal { opacity:1; transform:none; transition:none; } 
}
.wrap { max-width: var(--maxw); margin: 0 auto; padding: 0 var(--s4); }

/* ============ SECTION HEAD ============ */
.sec-head { max-width: 820px; margin-bottom: var(--s6); }
.eyebrow {
  font-family: var(--mono); font-size: 12px; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--orange);
  display: inline-flex; align-items: center; gap: 10px; margin-bottom: var(--s3);
}
.eyebrow::before { content:''; width: 26px; height: 1px; background: var(--orange); display:inline-block; }
.sec-head h2 { margin-bottom: var(--s3); }
.sec-head .lede { font-size: 18px; line-height: 1.6; max-width: 680px; color: var(--text-2); }

/* ============ BUTTONS ============ */
.btn {
  font-family: var(--display); font-weight: 600; font-size: 14px;
  letter-spacing: 0.03em; cursor: pointer; border: none;
  padding: 14px 28px; border-radius: var(--radius-pill);
  transition: transform var(--fast), box-shadow var(--fast), background-color var(--fast), border-color var(--fast), color var(--fast);
  display: inline-flex; align-items: center; gap: 10px;
  text-decoration: none;
}
.btn-primary {
  background: linear-gradient(135deg, var(--orange), var(--orange-d));
  color: var(--navy-deep);
  box-shadow: 0 1px 3px rgba(0,0,0,0.24), 0 1px 2px rgba(0,0,0,0.16);
}
.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.25), 0 2px 4px rgba(0,0,0,0.15);
}
.btn-ghost {
  background: transparent; color: var(--text);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(8px);
}
.btn-ghost:hover {
  background: rgba(255,255,255,0.06);
  border-color: var(--orange);
  color: var(--orange);
}
.btn .ar { font-family: var(--mono); transition: transform var(--fast); }
.btn:hover .ar { transform: translateX(3px); }

/* ============ NAV ============ */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--s4); height: 72px;
  background: rgba(1, 22, 39, 0.8);
  backdrop-filter: blur(20px) saturate(1.3);
  -webkit-backdrop-filter: blur(20px) saturate(1.3);
  border-bottom: 1px solid var(--glass-border);
}
.nav-brand-lockup {
  display: flex;
  align-items: center;
}
.nav-rodic-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.nav-rodic-logo img {
  height: 56px;
  width: auto;
  display: block;
}
.nav-brand-separator {
  color: #4a7a9b;
  font-size: 20px;
  margin: 0 12px;
  font-weight: 400;
  line-height: 1;
}
.nav-logo {
  font-family: var(--display); font-weight: 700; font-size: 20px;
  color: var(--text); white-space: nowrap; cursor: pointer;
  letter-spacing: -0.02em;
  margin: 0;
}
.nav-logo .accent { color: var(--orange); }
.nav-links { display: flex; align-items: center; gap: var(--s4); }
.nav-link {
  font-family: var(--body); font-size: 14px; font-weight: 500;
  color: var(--text-2); cursor: pointer; position: relative; padding: 6px 0;
  transition: color var(--fast);
}
.nav-link::after {
  content:''; position:absolute; left:0; bottom:-2px; width:0; height:2px;
  background: var(--orange); transition: width var(--fast); border-radius: 2px;
}
.nav-link:hover { color: var(--text); }
.nav-link:hover::after { width: 100%; }
.nav-cta { padding: 10px 22px; font-size: 13px; }

.hamburger {
  display: none; background: none; border: 1px solid var(--glass-border);
  color: var(--text); width:44px;height:40px; cursor: pointer; line-height: 1;
  font-size: 18px; border-radius: var(--radius-sm);
}
.mobile-panel {
  display: none; flex-direction: column; position: fixed; top: 72px;
  left: 0; right: 0; z-index: 99; background: rgba(1, 22, 39, 0.95);
  backdrop-filter: blur(20px); border-bottom: 1px solid var(--glass-border);
  padding: var(--s3) var(--s4);
}
.mobile-panel.open { display: flex; }
.mobile-panel .nav-link {
  padding: 16px 0; border-bottom: 1px solid var(--glass-border);
  font-size: 16px; display: block;
}
.mobile-panel .btn { margin-top: var(--s3); justify-content: center; }
@media (max-width: 860px){
  .nav-links { display: none; }
  .hamburger { display: inline-flex; align-items:center; justify-content:center; }
}

/* ============ HERO ============ */
.hero {
  position: relative; padding: calc(72px + var(--s7)) 0 var(--s7);
  min-height: 100vh; display: flex; align-items: center;
  overflow: hidden;
}
.hero-bg {
  position: absolute; inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  animation: kenBurns 12s ease-in-out infinite alternate;
}
@keyframes kenBurns {
  0% { transform: scale(1); }
  100% { transform: scale(1.08); }
}
.hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(
    180deg,
    rgba(1, 22, 39, 0.88) 0%,
    rgba(1, 22, 39, 0.75) 40%,
    rgba(1, 22, 39, 0.92) 100%
  );
  z-index: 1;
}
.hero-inner {
  max-width: var(--maxw); margin: 0 auto; padding: 0 var(--s4);
  text-align: center; position: relative; z-index: 2;
}
.hero-tag {
  font-family: var(--mono); font-size: 14px; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--orange);
  display: inline-block; margin-bottom: var(--s4);
  padding-left: 16px; padding-right: 16px;
  border-left: 3px solid var(--orange); border-right: 3px solid var(--orange);
}
.hero h1 { margin-bottom: var(--s4); max-width: 20ch; margin-left: auto; margin-right: auto; }
.hero .sub {
  font-size: 18px; line-height: 1.6; max-width: 640px;
  margin: 0 auto var(--s5); color: var(--text-2);
}
.hero-cta {
  display: flex; gap: var(--s3); justify-content: center;
  flex-wrap: wrap; align-items: center; margin-bottom: var(--s7);
}
.hero-text-link {
  font-family: var(--body); font-size: 14px; font-weight: 500;
  color: var(--text-2); cursor: pointer;
  text-decoration: underline; text-underline-offset: 4px;
  transition: color var(--fast);
}
.hero-text-link:hover { color: var(--orange); }

/* Hero trust stats */
.hero-stats {
  display: flex; justify-content: center; align-items: center;
  gap: var(--s4); flex-wrap: wrap;
  padding: var(--s4) var(--s5);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius);
  background: rgba(1, 22, 39, 0.6);
  backdrop-filter: blur(12px);
  max-width: 720px; margin: 0 auto;
}
.hero-stat { text-align: center; }
.hero-stat-num {
  font-family: var(--display); font-weight: 700; font-size: 22px;
  color: var(--text); display: block; line-height: 1.2;
  letter-spacing: -0.02em;
}
.hero-stat-label {
  font-family: var(--mono); font-size: 10px; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--text-muted);
  display: block; margin-top: 4px;
}
.hero-stat-divider {
  width: 1px; height: 36px; background: var(--glass-border);
}

/* ============ ABOUT REEP ============ */
#about {
  background: var(--navy-deep);
  position: relative;
  border-bottom: 1px solid var(--glass-border);
}
.about-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--s6);
}
@media (min-width: 900px) {
  .about-layout {
    grid-template-columns: 1.2fr 1fr;
    align-items: center;
  }
}
.about-text-blocks p {
  color: var(--text-2);
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: var(--s3);
}
.about-text-blocks p.lede {
  color: var(--text);
  font-size: 1.25rem;
  font-weight: 400;
}
.about-visual {
  position: relative;
}
.mission-card {
  background: linear-gradient(135deg, rgba(3, 48, 71, 0.8), rgba(2, 48, 71, 0.4));
  border: 1px solid var(--glass-border);
  padding: var(--s6);
  border-radius: var(--radius);
  backdrop-filter: blur(12px);
}
.mission-icon {
  font-size: 32px;
  color: var(--amber);
  margin-bottom: var(--s3);
}
.mission-card h3 {
  font-size: 1.5rem;
  margin-bottom: var(--s2);
  color: var(--text);
}
.mission-card p {
  color: var(--text-2);
  line-height: 1.6;
  margin-bottom: var(--s4);
}
.mission-stats {
  display: flex;
  gap: var(--s5);
  padding-top: var(--s4);
  border-top: 1px solid rgba(255,255,255,0.1);
}
.m-stat h4 {
  font-size: 2.5rem;
  font-family: var(--display);
  color: var(--orange);
  line-height: 1;
  margin-bottom: 8px;
}
.m-stat span {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-muted);
}

/* ============ FOCUS AREAS ============ */
#focus { background: var(--navy); }

.focus-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--s4);
  margin-top: var(--s5);
}
.focus-card {
  background: var(--surface);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius);
  padding: var(--s5);
  transition: transform var(--fast), border-color var(--fast), background-color var(--fast);
  display: flex;
  flex-direction: column;
}
.focus-card:hover {
  border-color: var(--orange);
  background: rgba(3, 48, 71, 0.8);
  transform: translateY(-4px);
}
.focus-icon {
  font-size: 24px;
  color: var(--orange);
  margin-bottom: var(--s3);
}
.focus-card h4 {
  font-size: 20px;
  margin-bottom: var(--s2);
}
.focus-card p {
  color: var(--text-2);
  line-height: 1.6;
}

/* ============ AUDIENCE ROUTING ============ */
#routing { background: var(--navy-deep); position: relative; z-index: 5; }

/* Legacy grid (kept for safety) */
.routing-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--s4);
}

/* New split: card on left, gallery on right */
.routing-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--s6);
  align-items: start;
}
@media (min-width: 720px) {
  .routing-split {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1024px) {
  .routing-split {
    grid-template-columns: 5fr 7fr;
    gap: var(--s8);
    align-items: center;
  }
}

/* Photo grid inside gallery panel */
.routing-gallery-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.gallery-img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: calc(var(--radius) - 4px);
  display: block;
  transition: transform var(--fast), opacity var(--fast);
}
.gallery-img:hover {
  transform: scale(1.03);
  opacity: 0.9;
}

.routing-card {
  background: linear-gradient(135deg, rgba(1, 22, 39, 0.9), rgba(2, 48, 71, 0.8));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius);
  padding: var(--s6);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform var(--fast), border-color var(--fast), background-color var(--fast);
}
.routing-card:hover {
  border-color: var(--sky);
  transform: translateY(-4px);
}
.routing-icon {
  font-size: 32px;
  color: var(--sky-light);
  margin-bottom: var(--s3);
}
.routing-card h3 {
  font-size: 24px;
  margin-bottom: var(--s2);
}
.routing-card p {
  color: var(--text-2);
  line-height: 1.6;
  flex: 1;
}
.routing-card .btn {
  margin-top: var(--s4);
  white-space: nowrap;
}
.routing-note {
  font-family: var(--mono); font-size: 11px; letter-spacing: 0.06em;
  color: var(--text-muted); margin-top: var(--s2);
}

/* ============ ABOUT CREDS ============ */
.about-creds {
  display: flex; flex-wrap: wrap; gap: var(--s2) var(--s4);
  margin-top: var(--s4); padding-top: var(--s4);
  border-top: 1px solid var(--glass-border);
}
.about-creds span {
  font-family: var(--mono); font-size: 11px; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--text-2);
  display: inline-flex; align-items: center; gap: 8px;
}
.about-creds span::before {
  content: ''; width: 6px; height: 6px; border-radius: 50%;
  background: var(--orange); display: inline-block;
}

/* ============ OUR LEADERS ============ */
#leaders {
  background: linear-gradient(180deg, var(--navy-deep), var(--navy));
}
.leaders-layout {
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: var(--s6);
  align-items: center;
}
.leaders-intro h2 {
  color: var(--orange);
  font-family: var(--display);
  font-style: italic;
  margin-bottom: var(--s3);
}
.leaders-intro p {
  font-size: 17px; line-height: 1.65; color: var(--text-2);
  margin-bottom: var(--s4);
}
.explore-btn {
  display: inline-flex; align-items: center; gap: 12px;
  font-family: var(--display); font-weight: 600; font-size: 14px;
  color: var(--text); cursor: pointer; text-decoration: none;
  transition: color var(--fast);
}
.explore-btn:hover { color: var(--orange); }
.explore-circle {
  width: 48px; height: 48px; border-radius: 50%;
  background: var(--orange); display: flex; align-items: center;
  justify-content: center; font-family: var(--mono); font-size: 16px;
  color: var(--navy-deep); transition: transform var(--fast);
}
.explore-btn:hover .explore-circle { transform: scale(1.1); }

.leaders-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--s3);
}
.leader-card {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--glass-border);
  transition: transform var(--fast), box-shadow var(--fast);
}
.leader-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3);
}
.leader-photo {
  width: 100%; aspect-ratio: 3/4;
  background: linear-gradient(135deg, var(--navy-light), var(--navy-deep));
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
}
.leader-photo .avatar-placeholder {
  width: 80px; height: 80px; border-radius: 50%;
  background: linear-gradient(135deg, var(--sky), var(--sky-light));
  display: flex; align-items: center; justify-content: center;
  font-family: var(--display); font-weight: 700; font-size: 28px;
  color: var(--navy-deep);
}
.leader-info {
  padding: var(--s3);
  background: rgba(1,22,39,0.9);
  backdrop-filter: blur(8px);
}
.leader-info .name {
  font-family: var(--display); font-weight: 700; font-size: 16px;
  color: var(--text); display: block; margin-bottom: 4px;
}
.leader-info .designation {
  font-family: var(--body); font-size: 13px; font-weight: 500;
  color: var(--orange);
}

/* ============ CONTACT ============ */
#contact {
  background: var(--navy);
  border-top: 1px solid var(--glass-border);
}
.contact-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: var(--s6);
  align-items: start;
}
.contact-info h2 { margin-bottom: var(--s3); }
.contact-info .lede { font-size: 17px; line-height: 1.65; margin-bottom: var(--s5); }
.contact-detail {
  display: flex; flex-direction: column; gap: var(--s3);
}
.contact-item {
  display: flex; align-items: flex-start; gap: var(--s2);
}
.contact-icon {
  width: 40px; height: 40px; flex-shrink: 0;
  border: 1px solid var(--glass-border); border-radius: var(--radius-sm);
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; color: var(--orange);
}
.contact-item .label {
  font-family: var(--mono); font-size: 10px; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--text-muted); display: block;
  margin-bottom: 4px;
}
.contact-item .value {
  font-size: 15px; color: var(--text);
}

/* Contact Form */
.contact-form-box {
  background: var(--surface);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius);
  padding: var(--s5);
  backdrop-filter: blur(12px);
}
.form-group { margin-bottom: var(--s3); }
.form-label {
  font-family: var(--mono); font-size: 11px; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--text-muted);
  display: block; margin-bottom: var(--s1);
}
.form-input, .form-textarea {
  width: 100%;
  background: rgba(1,22,39,0.6);
  border: 1px solid var(--glass-border);
  color: var(--text);
  font-family: var(--body); font-size: 15px;
  padding: 14px 16px; outline: none;
  border-radius: var(--radius-sm);
  transition: border-color var(--fast);
}
.form-input::placeholder, .form-textarea::placeholder { color: var(--text-muted); }
.form-input:focus, .form-textarea:focus { border-color: var(--orange); }
.form-input.err { border-color: #FF6B6B; }
.form-textarea { min-height: 120px; resize: vertical; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--s2); }
.form-submit {
  width: 100%; padding: 16px;
  background: linear-gradient(135deg, var(--orange), var(--amber));
  color: var(--navy-deep); font-family: var(--display); font-weight: 700;
  font-size: 15px; border: none; border-radius: var(--radius-sm);
  cursor: pointer; transition: all var(--fast);
  display: flex; align-items: center; justify-content: center; gap: 10px;
}
.form-submit:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.25), 0 2px 4px rgba(0,0,0,0.15);
}
.form-error { font-family: var(--mono); font-size: 12px; color: #FF6B6B; margin-top: var(--s1); }
.form-success {
  text-align: center; padding: var(--s5) 0;
}
.form-success .check-circle {
  width: 64px; height: 64px; border-radius: 50%;
  background: linear-gradient(135deg, var(--orange), var(--amber));
  display: flex; align-items: center; justify-content: center;
  font-size: 28px; color: var(--navy-deep);
  margin: 0 auto var(--s3);
}
.form-success h3 { margin-bottom: var(--s2); }
.form-success p { font-size: 15px; }

/* ============ FOOTER ============ */
.footer {
  background: var(--navy-deep);
  border-top: 1px solid var(--glass-border);
}
.footer-inner {
  max-width: var(--maxw); margin: 0 auto;
  padding: var(--s6) var(--s4) var(--s4);
  display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: var(--s5);
}
.footer .fbrand {
  font-family: var(--display); font-weight: 700; font-size: 24px;
  color: var(--text); margin-bottom: var(--s2); letter-spacing: -0.02em;
}
.footer .fbrand .accent { color: var(--orange); }
.footer .ftag {
  font-size: 14px; color: var(--text-muted); max-width: 320px; line-height: 1.6;
}
.footer h5 {
  font-family: var(--mono); font-weight: 400; font-size: 11px;
  letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-muted);
  margin: 0 0 var(--s3);
}
.footer-link {
  display: block; font-size: 14px; color: var(--text-2);
  padding: 6px 0; cursor: pointer; transition: color var(--fast);
  text-decoration: none;
}
.footer-link:hover { color: var(--orange); }
.social {
  font-family: var(--mono); font-size: 12px; color: var(--text-2);
  border: 1px solid var(--glass-border); display: inline-block;
  padding: 8px 14px; margin-right: 8px; cursor: pointer;
  transition: all var(--fast); border-radius: var(--radius-sm);
}
.social:hover { border-color: var(--orange); color: var(--orange); }
.footer-bottom {
  border-top: 1px solid var(--glass-border);
  max-width: var(--maxw); margin: 0 auto; padding: var(--s3) var(--s4);
  font-family: var(--mono); font-size: 11px; color: var(--text-muted);
  letter-spacing: 0.06em;
  display: flex; justify-content: space-between; flex-wrap: wrap; gap: var(--s2);
}

/* ============ SCROLL TO TOP ============ */
.scroll-top {
  position: fixed; bottom: var(--s4); right: var(--s4); z-index: 90;
  width: 48px; height: 48px; border-radius: 50%;
  background: var(--orange); color: var(--navy-deep);
  border: none; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--mono); font-size: 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  transition: all var(--fast);
  opacity: 0; pointer-events: none; transform: translateY(12px);
}
.scroll-top.visible {
  opacity: 1; pointer-events: auto; transform: none;
}
.scroll-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.35);
}

/* ============ SCROLL PROGRESS BAR ============ */
.scroll-progress {
  position: fixed; top: 72px; left: 0; z-index: 99;
  height: 3px; background: linear-gradient(90deg, var(--orange), var(--amber), var(--sky));
  transition: width 50ms linear;
}

/* ============ RESPONSIVE ============ */
@media (max-width: 1024px) {
  .leaders-layout { grid-template-columns: 1fr; gap: var(--s4); }
  .leaders-cards { grid-template-columns: repeat(3, 1fr); }
  .contact-grid { grid-template-columns: 1fr; gap: var(--s5); }
}
@media (max-width: 860px) {
  .leaders-cards { grid-template-columns: repeat(2, 1fr); }
  .flashcard-grid { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
  .footer-inner { grid-template-columns: 1fr; gap: var(--s4); }
}
@media (max-width: 600px) {
  .band { padding: var(--s7) 0; }
  .leaders-cards { grid-template-columns: 1fr; }
  .flashcard-grid { grid-template-columns: 1fr; }
  .flashcard { height: 200px; }
  .form-row { grid-template-columns: 1fr; }
  .hero h1 { font-size: clamp(32px, 8vw, 48px); }
  .hero .sub { font-size: 16px; }
  .hero-stats { gap: var(--s3); padding: var(--s3) var(--s4); }
  .hero-stat-num { font-size: 18px; }
  .hero-stat-divider { height: 28px; }
}
