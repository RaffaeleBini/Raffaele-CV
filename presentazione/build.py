#!/usr/bin/env python3
"""Genera slide 16:9 e lower-third in IT/EN/ES a partire dallo stesso template."""
import pathlib

OUT = pathlib.Path(__file__).parent
QR = (OUT / "assets/qr.svg").read_text()

T = {
    "it": dict(
        label="Ingegnere meccanico · AI, dati, sostenibilità",
        head="Mi impegno per un Mondo più equo e sostenibile.",
        role="Project Consultant · DIH DATAlife",
        tags=["AI e data science", "Lean thinking", "Sostenibilità", "Ingegneria"],
        stats=[("18+", "anni di operations nell'industria alimentare"),
               ("3", "anni di consulenza in tecnologie digitali")],
        scan="Scansiona e collegati",
        lt="AI · Lean · Sostenibilità",
    ),
    "en": dict(
        label="Mechanical engineer · AI, data, sustainability",
        head="I am committed to a fairer, more sustainable world.",
        role="Project Consultant · DIH DATAlife",
        tags=["AI and data science", "Lean thinking", "Sustainability", "Engineering"],
        stats=[("18+", "years of operations in the food industry"),
               ("3", "years consulting on digital technologies")],
        scan="Scan and connect",
        lt="AI · Lean · Sustainability",
    ),
    "es": dict(
        label="Ingeniero mecánico · IA, datos, sostenibilidad",
        head="Me comprometo con un mundo más justo y sostenible.",
        role="Project Consultant · DIH DATAlife",
        tags=["IA y data science", "Lean thinking", "Sostenibilidad", "Ingeniería"],
        stats=[("18+", "años de operaciones en la industria alimentaria"),
               ("3", "años de consultoría en tecnologías digitales")],
        scan="Escanea y conecta",
        lt="IA · Lean · Sostenibilidad",
    ),
}

CSS = """
@font-face{font-family:"Share Tech Mono";src:url("assets/ShareTechMono-Regular.ttf")}
@font-face{font-family:"Orbitron";font-weight:700;src:url("assets/Orbitron-700.ttf")}
@font-face{font-family:"Orbitron";font-weight:900;src:url("assets/Orbitron-900.ttf")}
:root{--black:#0a0a0a;--card:#1a1a1a;--hair:#2e2e2e;--line:#3a3a3a;--g400:#8a8a8a;--g300:#b4b4b4;
--white:#f5f5f5;--y:#fcd44a;--glow:0 0 24px rgba(252,212,74,.35);
--scan:repeating-linear-gradient(to bottom,rgba(255,255,255,.022) 0,rgba(255,255,255,.022) 1px,transparent 1px,transparent 3px)}
*{box-sizing:border-box;margin:0;padding:0}
html{width:100%;height:100%;background:var(--black);overflow:hidden}
body{position:absolute;left:0;top:0;width:1920px;height:1080px;transform-origin:0 0;color:var(--white);
font-family:"Share Tech Mono",monospace;font-size:24px;overflow:hidden}
@media print{@page{size:1920px 1080px;margin:0}html{overflow:visible}body{transform:none!important}}
"""

SLIDE = """<!doctype html><html lang="{lang}"><head><meta charset="utf-8">
<title>Raffaele Bini · presentazione ({lang})</title><style>{css}
body{{background:var(--black) var(--scan)}}
.hdr{{position:absolute;left:96px;right:96px;top:56px;height:64px;display:flex;align-items:center;
justify-content:space-between;border-bottom:1px solid var(--hair);padding-bottom:24px;height:80px}}
.hdr img{{height:44px}}
.cnt{{font-size:18px;letter-spacing:.16em;text-transform:uppercase;color:var(--g400)}}
.left{{position:absolute;left:96px;top:172px;width:1000px;display:flex;flex-direction:column;gap:32px}}
.lab{{font-size:18px;letter-spacing:.16em;text-transform:uppercase;color:var(--g400)}}
h1{{font-family:Orbitron;font-weight:900;font-size:104px;line-height:1.02;letter-spacing:.02em}}
.head{{font-size:34px;line-height:1.35;color:var(--g300);max-width:900px}}
.head b{{color:var(--y);font-weight:400}}
.role{{font-size:22px;letter-spacing:.08em;color:var(--white);display:flex;align-items:center;gap:14px}}
.role i{{width:12px;height:12px;border:2px solid var(--y);transform:rotate(45deg);display:block}}
.tags{{display:flex;gap:12px;flex-wrap:wrap}}
.tag{{border:1px solid var(--line);border-radius:999px;padding:8px 20px;font-size:20px;color:var(--g300)}}
.stats{{position:absolute;left:96px;bottom:140px;width:1000px;display:grid;grid-template-columns:repeat(2,1fr);gap:16px}}
.card{{background:var(--card);border:1px solid var(--hair);border-radius:8px;padding:20px;display:flex;flex-direction:column;gap:10px}}
.card strong{{font-family:Orbitron;font-weight:900;font-size:64px;line-height:1;color:var(--y)}}
.card span{{font-size:18px;line-height:1.3;color:var(--g300)}}
.pic{{position:absolute;right:96px;top:172px;width:600px;height:600px;border:1px solid var(--line);
clip-path:polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)}}
.pic img{{width:100%;height:100%;display:block}}
.contact{{position:absolute;left:96px;right:96px;bottom:48px;height:64px;border-top:1px solid var(--hair);
padding-top:20px;display:flex;justify-content:space-between;align-items:center;font-size:22px;color:var(--g300)}}
.contact em{{font-style:normal;color:var(--white)}}
.qr{{position:absolute;right:96px;top:792px;display:flex;align-items:center;gap:20px;
border:1px solid var(--y);box-shadow:var(--glow);border-radius:8px;padding:16px 24px 16px 16px;background:var(--card)}}
.qr .code{{width:116px;height:116px;background:var(--y);padding:8px;border-radius:2px}}
.qr .code svg{{width:100%;height:100%;display:block}}
.qr span{{font-size:18px;letter-spacing:.16em;text-transform:uppercase;color:var(--y);max-width:200px;line-height:1.4}}
</style></head><body>
<div class="hdr"><img src="assets/rb-lockup-horizontal-yellow.png" alt="RB"><div class="cnt">2026 · {lang_up}</div></div>
<div class="left">
 <div class="lab">{label}</div>
 <h1>Raffaele<br>Bini</h1>
 <p class="head">{head}</p>
 <div class="role"><i></i>{role}</div>
 <div class="tags">{tags}</div>
</div>
<div class="stats">{stats}</div>
<div class="pic"><img src="assets/raffaele-hud-illustration.png" alt=""></div>
<div class="qr"><div class="code">{qr}</div><span>{scan}</span></div>
<div class="contact"><span><em>raffaele.bini@gmail.com</em></span><span>linkedin.com/in/raffaelebini</span></div>
<script>(function(){{function f(){{var s=Math.min(innerWidth/1920,innerHeight/1080);
document.body.style.transform='translate('+(innerWidth-1920*s)/2+'px,'+(innerHeight-1080*s)/2+'px) scale('+s+')'}}
addEventListener('resize',f);f()}})()</script></body></html>"""

LOWER = """<!doctype html><html lang="{lang}"><head><meta charset="utf-8"><title>Lower-third ({lang})</title><style>{css}
html{{background:transparent}}
.bar{{position:absolute;left:96px;bottom:96px;display:flex;align-items:stretch;background:var(--black);
border:1px solid var(--line);border-left:3px solid var(--y);padding:20px 36px 20px 28px;gap:24px;align-items:center}}
.bar img{{height:56px}}
.t{{display:flex;flex-direction:column;gap:6px}}
.n{{font-family:Orbitron;font-weight:700;font-size:40px;letter-spacing:.02em;line-height:1.1}}
.r{{font-size:22px;letter-spacing:.06em;color:var(--g300)}}
.r b{{color:var(--y);font-weight:400}}
</style></head><body>
<div class="bar"><img src="assets/rb-mark-yellow-on-black.png" alt="RB">
<div class="t"><div class="n">Raffaele Bini</div><div class="r">{role} <b>·</b> {lt}</div></div></div>
<script>(function(){{function f(){{var s=Math.min(innerWidth/1920,innerHeight/1080);
document.body.style.transform='translate('+(innerWidth-1920*s)/2+'px,'+(innerHeight-1080*s)/2+'px) scale('+s+')'}}
addEventListener('resize',f);f()}})()</script></body></html>"""

for lang, t in T.items():
    stats = "".join(f'<div class="card"><strong>{n}</strong><span>{d}</span></div>' for n, d in t["stats"])
    tags = "".join(f'<span class="tag">{x}</span>' for x in t["tags"])
    (OUT / f"slide-{lang}.html").write_text(SLIDE.format(
        lang=lang, lang_up=lang.upper(), css=CSS, label=t["label"], head=t["head"], role=t["role"],
        tags=tags, stats=stats, qr=QR, scan=t["scan"]))
    (OUT / f"lower-third-{lang}.html").write_text(LOWER.format(
        lang=lang, css=CSS, role=t["role"], lt=t["lt"]))
