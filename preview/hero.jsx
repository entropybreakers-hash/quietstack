/* ============ Hero, 3 concepts (bilingual) ============ */

const HERO = {
  kicker: L("Operational AI systems for coaches & consultants", "Operative KI-Systeme für Coaches & Berater"),
  kickerShort: L("Operational AI systems", "Operative KI-Systeme"),
  aTitle: L("Let your business run itself.", "Lassen Sie Ihr Business sich selbst führen."),
  aLead: L("I build AI infrastructure that quietly runs your delivery and operations, so growth feels calmer, not heavier. You stay the expert. The busywork disappears.",
           "Ich baue KI-Infrastruktur, die Umsetzung und Betrieb leise übernimmt, damit Wachstum ruhiger wird, nicht schwerer. Sie bleiben der Experte. Die Fleißarbeit verschwindet."),
  bLead: L("Most consultants don't need more leads. They need systems that survive scale. QuietStack builds the AI infrastructure that runs delivery, onboarding and follow-up in the background.",
           "Die meisten Berater brauchen keine weiteren Leads. Sie brauchen Systeme, die Skalierung überstehen. QuietStack baut die KI-Infrastruktur, die Umsetzung, Onboarding und Follow-up im Hintergrund betreibt."),
  cLead: L("I'm Bettina, and I build AI infrastructure that runs delivery and operations quietly in the background, so your business stops depending on you for every single move.",
           "Ich bin Bettina und baue KI-Infrastruktur, die Umsetzung und Betrieb leise im Hintergrund übernimmt, damit Ihr Business nicht bei jedem einzelnen Schritt von Ihnen abhängt."),
  founder: L("Founder", "Gründerin"),
  ribbonA: L("Systems that survive scale", "Systeme, die Skalierung überstehen"),
  cL1: L("You don't need", "Sie brauchen nicht"),
  cL2: L("more leads.", "mehr Leads."),
  cL3: L("You need systems.", "Sie brauchen Systeme."),
  highlightPre: L("Most clients free up", "Die meisten Kund:innen gewinnen"),
  highlightNum: L("20–30 hours a week", "20–30 Stunden pro Woche"),
  highlightPost: L(", with the first systems working in days, not months.", ", die ersten Systeme laufen in Tagen, nicht Monaten."),
};

function HeroHighlight() {
  return (
    <div className="hero-highlight" data-reveal data-reveal-d="2">
      <span className="hh-spark"></span>
      <span>{t(HERO.highlightPre)} <strong>{t(HERO.highlightNum)}</strong>{t(HERO.highlightPost)}</span>
    </div>
  );
}

function HeroActions() {
  return (
    <div className="hero-actions">
      <a href="work-with-us.html" className="btn btn-primary btn-lg">{t(UI.bookAudit)} <span className="arr">→</span></a>
      <a href="#process" className="btn btn-ghost btn-lg">{t(UI.seeHow)}</a>
    </div>
  );
}

function TrustLine() {
  return (
    <div className="trust-line">
      <span>{t(UI.trust1)}</span><span className="dot"></span>
      <span>{t(UI.trust2)}</span><span className="dot"></span>
      <span>{t(UI.trust3)}</span>
    </div>
  );
}

function HeroA() {
  return (
    <div className="hero-a">
      <p className="kicker" data-reveal>{t(HERO.kicker)}</p>
      <h1 className="display" data-reveal data-reveal-d="1">{t(HERO.aTitle)}</h1>
      <p className="lead" data-reveal data-reveal-d="2">{t(HERO.aLead)}</p>
      <HeroHighlight />
      <div data-reveal data-reveal-d="3"><HeroActions /></div>
      <div data-reveal data-reveal-d="3"><TrustLine /></div>
      <div className="hero-portrait" data-reveal data-reveal-d="4">
        <img src={ASSET + "bettina-hero-tight.webp"} alt="Bettina Baranyi" />
        <div className="ribbon">
          <span><b style={{fontFamily:"var(--font-display)",fontWeight:700,color:"var(--fg)"}}>Bettina Baranyi</b> · {t(HERO.founder)}</span>
          <span>{t(HERO.ribbonA)}</span>
        </div>
      </div>
    </div>
  );
}

function HeroB() {
  return (
    <div className="hero-b">
      <div className="hero-cols">
        <div>
          <p className="kicker" data-reveal>{t(HERO.kickerShort)}</p>
          <h1 className="display" data-reveal data-reveal-d="1">{t(HERO.aTitle)}</h1>
          <p className="lead" data-reveal data-reveal-d="2">{t(HERO.bLead)}</p>
          <HeroHighlight />
          <div data-reveal data-reveal-d="3"><HeroActions /></div>
          <div data-reveal data-reveal-d="3"><TrustLine /></div>
        </div>
        <div className="hero-portrait" data-reveal data-reveal-d="2">
          <img src={ASSET + "new-hero.webp"} alt="Bettina Baranyi" />
          <div className="ribbon">
            <span><b style={{fontFamily:"var(--font-display)",fontWeight:700,color:"var(--fg)"}}>Bettina Baranyi</b></span>
            <span>{t(HERO.founder)}, QuietStack</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroC() {
  return (
    <div className="hero-c">
      <p className="kicker" data-reveal>{t(HERO.kicker)}</p>
      <h1 className="display" data-reveal data-reveal-d="1">
        {t(HERO.cL1)}<br/><span className="strike">{t(HERO.cL2)}</span><br/>{t(HERO.cL3)}
      </h1>
      <HeroHighlight />
      <div className="hero-foot">
        <p className="lead" data-reveal data-reveal-d="2">{t(HERO.cLead)}</p>
        <div data-reveal data-reveal-d="3">
          <HeroActions />
          <TrustLine />
        </div>
      </div>
    </div>
  );
}

function Hero({ variant }) {
  return (
    <header className="hero" id="top">
      <div className="hero-glow" data-para="0.15"></div>
      <div className="hero-grid"></div>
      <div className="wrap">
        {variant === "b" ? <HeroB /> : variant === "a" ? <HeroA /> : <HeroC />}
      </div>
    </header>
  );
}

Object.assign(window, { Hero, HERO });
