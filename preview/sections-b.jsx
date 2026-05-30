/* ============ Before/After · Philosophy · About · Fit ============ */

const SB = {
  baKicker: L("The shift", "Der Wandel"),
  baHead: L("Quiet systems build scalable businesses.", "Leise Systeme bauen skalierbare Unternehmen."),
  baLead: L("The same practice, before and after the systems are in place. Same expertise, wildly different leverage.", "Dieselbe Praxis, vor und nach den Systemen. Gleiches Know-how, völlig andere Hebelwirkung."),
  before: L("Before", "Vorher"), after: L("After", "Nachher"),

  phKicker: L("How I see it", "Wie ich es sehe"),
  phHead: L("Growth should create leverage, not operational chaos.", "Wachstum sollte Hebel schaffen, kein operatives Chaos."),
  phP1: L("I've watched too many good businesses scale revenue faster than they scale systems. The result is hidden friction, inconsistent delivery, and a founder who can't step away without everything stalling. It doesn't have to be that way.", "Ich habe zu viele gute Unternehmen gesehen, die Umsatz schneller skalieren als Systeme. Das Ergebnis: verborgene Reibung, schwankende Umsetzung und ein Gründer, der nicht loslassen kann, ohne dass alles stockt. Das muss nicht so sein."),
  phP2a: L("So I design operational infrastructure that scales ", "Deshalb entwerfe ich operative Infrastruktur, die "),
  phEm: L("calmly", "ruhig"),
  phP2b: L(", quiet in the background, structured by default, built to remove noise rather than pile on more tools.", " skaliert, leise im Hintergrund, standardmäßig strukturiert, gebaut, um Lärm zu entfernen statt weitere Tools aufzutürmen."),
  phCap: L("Founder, QuietStack", "Gründerin, QuietStack"),

  abKicker: L("About", "Über mich"),
  abHead: L("I quietly took myself out of my own business.", "Ich habe mich leise aus meinem eigenen Business herausgenommen."),
  abP1: L("For seven years I taught English to Hungarian professionals through Entropy Breakers. I was the curriculum, the scheduling, the support, the marketing, running on willpower, not systems.", "Sieben Jahre lang habe ich über Entropy Breakers ungarischen Fachkräften Englisch beigebracht. Ich war Lehrplan, Terminplanung, Support, Marketing, auf Willenskraft, nicht auf Systemen."),
  abP2: L("So I started building. Platforms, AI-assisted feedback loops, automated onboarding and follow-up. Quietly, the business stopped needing me everywhere. The work was never really about teaching language. It was about operations.", "Also begann ich zu bauen. Plattformen, KI-gestützte Feedback-Schleifen, automatisiertes Onboarding und Follow-up. Leise brauchte das Business mich nicht mehr überall. Es ging nie wirklich um Sprache. Es ging um Abläufe."),
  abP3a: L("That's the work I do now through QuietStack. ", "Genau diese Arbeit mache ich heute mit QuietStack. "),
  abP3em: L("If you're building something and you're already tired, you're in the right place.", "Wenn Sie etwas aufbauen und schon müde sind, sind Sie hier richtig."),
  proofBold: L("My own client base grew by two-thirds", "Mein eigener Kundenstamm wuchs um zwei Drittel"),
  proofMidA: L(" after I automated the operations of my business, while spending ", " nachdem ich die Abläufe meines Business automatisiert hatte, bei "),
  proofEm: L("less time on admin, not more", "weniger Admin, nicht mehr"),
  proofMidB: L(". More revenue, fewer manual hours. That's the whole point.", ". Mehr Umsatz, weniger Handarbeit. Genau darum geht es."),
  howHelp: L("How I help", "Wie ich helfe"),
  help1: L("Custom AI infrastructure for client operations, delivery, onboarding, follow-up.", "Maßgeschneiderte KI-Infrastruktur für Kundenabläufe, Umsetzung, Onboarding, Follow-up."),
  help2: L("Workflow automation that quietly removes friction.", "Workflow-Automatisierung, die leise Reibung entfernt."),
  help3: L("Systems audits for businesses ready to stop running on willpower.", "Systems-Audits für Unternehmen, die nicht mehr auf Willenskraft laufen wollen."),

  fitKicker: L("Honest fit", "Ehrliche Passung"),
  fitHead: L("Built for businesses ready to scale, not to start.", "Gebaut für Unternehmen, die skalieren wollen, nicht erst starten."),
  fitLead: L("Fit matters more than a signed invoice. If this isn't you yet, I'll tell you straight.", "Passung zählt mehr als eine unterschriebene Rechnung. Wenn Sie noch nicht so weit sind, sage ich es Ihnen direkt."),
  fitGood: L("Perfect fit", "Perfekte Passung"),
  fitBad: L("Probably not yet", "Wahrscheinlich noch nicht"),
};

function BeforeAfter() {
  return (
    <section className="band divider" id="shift">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <p className="kicker">{t(SB.baKicker)}</p>
          <h2 className="h2">{t(SB.baHead)}</h2>
          <p className="lead" style={{marginTop:"16px"}}>{t(SB.baLead)}</p>
        </div>
        <div className="ba-grid">
          <div className="ba-col ba-before" data-reveal data-reveal-x="left">
            <div className="ba-tag">{t(SB.before)}</div>
            <ul className="ba-list">
              {BEFORE.map((b, i) => <li key={i}><span className="ic">–</span><span>{t(b)}</span></li>)}
            </ul>
          </div>
          <div className="ba-col ba-after" data-reveal data-reveal-x="right">
            <div className="ba-tag">{t(SB.after)}</div>
            <ul className="ba-list">
              {AFTER.map((a, i) => <li key={i}><span className="ic">✓</span><span>{t(a)}</span></li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="band divider" id="why">
      <div className="wrap">
        <div className="split rev">
          <div className="split-media" data-reveal data-reveal-x="left">
            <img src={ASSET + "new-hero.webp"} alt="Bettina Baranyi" />
            <div className="cap"><b>Bettina Baranyi</b>{t(SB.phCap)}</div>
          </div>
          <div data-reveal data-reveal-x="right">
            <p className="kicker">{t(SB.phKicker)}</p>
            <h2 className="h2">{t(SB.phHead)}</h2>
            <p className="lead" style={{margin:"22px 0"}}>{t(SB.phP1)}</p>
            <p className="lead">{t(SB.phP2a)}<span className="philo-em">{t(SB.phEm)}</span>{t(SB.phP2b)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="band divider" id="about">
      <div className="wrap">
        <div className="split">
          <div data-reveal data-reveal-x="left">
            <p className="kicker">{t(SB.abKicker)}</p>
            <h2 className="h2">{t(SB.abHead)}</h2>
            <p className="lead" style={{margin:"22px 0"}}>{t(SB.abP1)}</p>
            <p className="lead" style={{marginBottom:"22px"}}>{t(SB.abP2)}</p>
            <p className="lead" style={{marginBottom:"26px"}}>{t(SB.abP3a)}<span className="philo-em">{t(SB.abP3em)}</span></p>
            <div className="proof-stat" data-reveal>
              <div className="proof-num">+67<span>%</span></div>
              <div className="proof-txt">
                <b>{t(SB.proofBold)}</b>{t(SB.proofMidA)}<span className="philo-em">{t(SB.proofEm)}</span>{t(SB.proofMidB)}
              </div>
            </div>
            <div className="ba-tag" style={{color:"var(--muted)",marginBottom:"14px"}}>{t(SB.howHelp)}</div>
            <ul className="fit-list">
              <li><span className="mk" style={{color:"var(--accent-bright)"}}>→</span><span>{t(SB.help1)}</span></li>
              <li><span className="mk" style={{color:"var(--accent-bright)"}}>→</span><span>{t(SB.help2)}</span></li>
              <li><span className="mk" style={{color:"var(--accent-bright)"}}>→</span><span>{t(SB.help3)}</span></li>
            </ul>
          </div>
          <div className="split-media" data-reveal data-reveal-x="right">
            <img src={ASSET + "kivagyok.webp"} alt="Bettina Baranyi" />
            <div className="cap"><b>Bettina Baranyi</b>{t(SB.phCap)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fit() {
  return (
    <section className="band divider" id="fit">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <p className="kicker">{t(SB.fitKicker)}</p>
          <h2 className="h2">{t(SB.fitHead)}</h2>
          <p className="lead" style={{marginTop:"16px"}}>{t(SB.fitLead)}</p>
        </div>
        <div className="fit-grid">
          <div className="fit-col good" data-reveal data-reveal-x="left">
            <h3><span className="badge">{t(SB.fitGood)}</span></h3>
            <ul className="fit-list">
              {FIT_GOOD.map((f, i) => <li key={i}><span className="mk">✓</span><span>{t(f)}</span></li>)}
            </ul>
          </div>
          <div className="fit-col bad" data-reveal data-reveal-x="right">
            <h3><span className="badge">{t(SB.fitBad)}</span></h3>
            <ul className="fit-list">
              {FIT_BAD.map((f, i) => <li key={i}><span className="mk">✕</span><span>{t(f)}</span></li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { BeforeAfter, Philosophy, About, Fit });
