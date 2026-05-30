/* ============ Final CTA · Other brands · Footer ============ */

const SD = {
  ctaKicker: L("Your move", "Ihr Zug"),
  ctaHead: L("AI isn't coming. It's already running your competitors' back office.", "KI kommt nicht erst. Sie betreibt bereits das Back-Office Ihrer Wettbewerber."),
  ctaLead: L("The few who systematise will pull away quietly, while everyone else stays busy. I'd love to help you be one of them. Let's have a relaxed chat and see if we're a fit, no pressure either way.", "Die wenigen, die systematisieren, ziehen leise davon, w\u00e4hrend alle anderen besch\u00e4ftigt bleiben. Ich helfe Ihnen gerne, eine davon zu werden. Lassen Sie uns entspannt sprechen und schauen, ob es passt, ganz ohne Druck."),
  brandsKicker: L("Also building", "Außerdem im Aufbau"),
  brandsHead: L("Two other brands I run on the same systems.", "Zwei weitere Marken, die ich auf denselben Systemen betreibe."),
  footTagline: L("Quiet systems. Scalable operations. AI-assisted operational infrastructure for coaches and high-ticket consultants.", "Leise Systeme. Skalierbarer Betrieb. KI-gestützte operative Infrastruktur für Coaches und High-Ticket-Berater."),
  colExplore: L("Explore", "Entdecken"),
  colGet: L("Get started", "Loslegen"),
  colContact: L("Contact", "Kontakt"),
  lSelfAudit: L("Self-audit", "Selbstcheck"),
  lBookAudit: L("Book an audit", "Audit buchen"),
  lEmail: L("Email", "E-Mail"),
  fService: L("A service by Entropy Breakers", "Ein Service von Entropy Breakers"),
  fOnline: L("Based in Austria · online, wherever you are", "Sitz in Österreich · online, wo immer Sie sind"),
  legal: L("Imprint · Privacy Policy · Terms & Conditions", "Impressum · Datenschutz · AGB"),
  lImprint: L("Imprint", "Impressum"),
  lPrivacy: L("Privacy Policy", "Datenschutz"),
  lTerms: L("Terms & Conditions", "AGB"),
};

function FinalCTA() {
  return (
    <section className="band final-cta divider" id="start">
      <div className="cta-blobs" aria-hidden="true">
        <span className="blob b1"></span>
        <span className="blob b2"></span>
        <span className="blob b3"></span>
      </div>
      <div className="cta-glow"></div>
      <div className="cta-rings"></div>
      <div className="wrap">
        <p className="kicker" style={{justifyContent:"center"}} data-reveal>{t(SD.ctaKicker)}</p>
        <h2 className="h2" data-reveal data-reveal-d="1">{t(SD.ctaHead)}</h2>
        <p className="lead" data-reveal data-reveal-d="2">{t(SD.ctaLead)}</p>
        <div data-reveal data-reveal-d="3">
          <a href="work-with-us.html" className="btn btn-primary btn-lg">{t(UI.bookAudit)} <span className="arr">→</span></a>
        </div>
      </div>
    </section>
  );
}

function OtherBrands() {
  return (
    <section className="band-tight divider" id="brands">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <p className="kicker">{t(SD.brandsKicker)}</p>
          <h2 className="h2" style={{fontSize:"clamp(1.7rem,3vw,2.6rem)"}}>{t(SD.brandsHead)}</h2>
        </div>
        <div className="brands-row">
          {BRANDS.map((b, i) => (
            <div className="brand-card" key={i} data-reveal data-reveal-x={i === 0 ? "left" : "right"}>
              <div className="bk">{b.k}</div>
              <p>{t(b.d)}</p>
              <a href={b.href} target="_blank" rel="noopener">{t(b.cta)} <span className="lk-arr">→</span></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="brand"><span className="mark"></span>QuietStack</div>
            <p>{t(SD.footTagline)}</p>
          </div>
          <div className="foot-cols">
            <div className="foot-col">
              <h4>{t(SD.colExplore)}</h4>
              <a href="#services">{t(UI.navServices)}</a>
              <a href="#process">{t(UI.navProcess)}</a>
              <a href="#why">{t(UI.navWhy)}</a>
              <a href="#faq">{t(UI.navFaq)}</a>
            </div>
            <div className="foot-col">
              <h4>{t(SD.colGet)}</h4>
              <a href="#audit">{t(SD.lSelfAudit)}</a>
              <a href="work-with-us.html">{t(SD.lBookAudit)}</a>
              <a href="mailto:baranyibettina@entropybreakers.com">{t(SD.lEmail)}</a>
            </div>
            <div className="foot-col">
              <h4>{t(SD.colContact)}</h4>
              <a className="foot-email" href="mailto:baranyibettina@entropybreakers.com">baranyibettina@entropybreakers.com</a>
              <span>{t(SD.fService)}</span>
              <span>{t(SD.fOnline)}</span>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Baranyi Bettina · QuietStack</span>
          <span className="foot-legal">
            <a href="imprint.html">{t(SD.lImprint)}</a>
            <a href="privacy-policy.html">{t(SD.lPrivacy)}</a>
            <a href="terms.html">{t(SD.lTerms)}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { FinalCTA, OtherBrands, Footer });
