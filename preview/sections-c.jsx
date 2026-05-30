/* ============ Services · Process · Sovereignty · Guarantee · FAQ ============ */

const SC = {
  svcKicker: L("What I build", "Was ich baue"),
  svcHead: L("Your expertise, running as a system.", "Ihr Know-how, als System."),
  svcLead: L("Concrete AI systems built around how you already work, so delivery scales without you in every step.", "Konkrete KI-Systeme, gebaut um Ihre Arbeitsweise, damit Umsetzung skaliert, ohne Sie bei jedem Schritt."),

  procKicker: L("How it works", "So funktioniert's"),
  procHead: L("Simple systems. Clear implementation.", "Einfache Systeme. Klare Umsetzung."),
  procLead: L("Three steps from operational bottlenecks to workflows that run themselves.", "Drei Schritte von operativen Engpässen zu Workflows, die von selbst laufen."),

  sovKicker: L("Safe by design", "Sicher by Design"),
  sovHead: L("Your accounts. Your data. Your IP.", "Ihre Accounts. Ihre Daten. Ihr geistiges Eigentum."),
  sovLead: L("Built for businesses that take data seriously. The system lives inside the tools you already run, and stays entirely under your control.", "Gebaut für Unternehmen, die Daten ernst nehmen. Das System lebt in den Tools, die Sie bereits nutzen, und bleibt vollständig unter Ihrer Kontrolle."),
  sov: [
    { k: L("Your accounts", "Ihre Accounts"), d: L("Systems are built directly into the tools you already own, calendar, email, CRM, payments. No new platform to migrate to, nothing to rip out.", "Systeme werden direkt in Ihre vorhandenen Tools gebaut, Kalender, E-Mail, CRM, Zahlungen. Keine neue Plattform, nichts zum Herausreißen.") },
    { k: L("Your data", "Ihre Daten"), d: L("Nothing leaves your stack. I don't pool, train on, or resell your data. EU-based and DSGVO-aligned by design, not as an afterthought.", "Nichts verlässt Ihren Stack. Ich bündle, trainiere oder verkaufe Ihre Daten nicht. EU-basiert und DSGVO-konform by Design, nicht nachträglich.") },
    { k: L("Your IP", "Ihr geistiges Eigentum"), d: L("Your frameworks, content and client relationships stay 100% yours. At handover the system runs in your name, in your accounts.", "Ihre Frameworks, Inhalte und Kundenbeziehungen bleiben zu 100% Ihre. Bei Übergabe läuft das System in Ihrem Namen, in Ihren Accounts.") },
  ],

  guarKicker: L("Why it's safe to start", "Warum der Start sicher ist"),
  guarHead: L("Clear scope, agreed up front, so it's safe for both of us.", "Klarer Umfang, vorab vereinbart, sicher für uns beide."),
  g1k: L("My promise to you", "Mein Versprechen an Sie"),
  g1h: L("You'll always know where things stand.", "Sie wissen immer, wo Sie stehen."),
  g1p1: L("Before we build, we shape together what a finished, working system looks like for you, the outcomes that matter and what \"done\" really means. So there's no guesswork, and no quiet drift, just a clear shared picture from the very first day.", "Bevor wir bauen, gestalten wir gemeinsam, wie ein fertiges, funktionierendes System für Sie aussieht, die Ergebnisse, die zählen, und was \"fertig\" wirklich bedeutet. Kein Raten, kein leises Ausufern, sondern ein klares gemeinsames Bild vom ersten Tag an."),
  g1p2: L("And after handover, there's a dedicated window to fine-tune everything until it feels right in your hands. Calm, considered and fair to us both, the way good work should feel.", "Und nach der Übergabe gibt es ein eigenes Zeitfenster, um alles zu verfeinern, bis es sich in Ihren Händen richtig anfühlt. Ruhig, durchdacht und fair für uns beide, so wie gute Arbeit sich anfühlen sollte."),
  g2k: L("Founding clients", "Gründungskunden"),
  g2h: L("Intentionally small. Limited spots.", "Bewusst klein. Begrenzte Plätze."),
  g2p1: L("QuietStack is new and stays small on purpose. I take on a limited number of founding clients at a time, at a reduced build fee.", "QuietStack ist neu und bleibt bewusst klein. Ich nehme jeweils eine begrenzte Zahl an Gründungskunden auf, zu reduziertem Aufbaupreis."),
  g2p2: L("In return, we document a detailed case study together, and founding clients keep their rate for good. When the spots are full, they're full.", "Im Gegenzug dokumentieren wir gemeinsam eine ausführliche Fallstudie, und Gründungskunden behalten ihren Preis dauerhaft. Wenn die Plätze voll sind, sind sie voll."),

  faqKicker: L("FAQ", "FAQ"),
  faqHead: L("The questions most people ask first.", "Die Fragen, die die meisten zuerst stellen."),
};

function Services() {
  const slides = SERVICES.length;
  return (
    <section className="band-tight divider fam-pin-sec" id="services" data-fampin
             style={{ height: "calc(100vh + " + (slides * 68) + "vh)" }}>
      <div className="fam-pin">
        <div className="fam-glow"></div>
        <div className="wrap">
          <div className="section-head fam-head">
            <p className="kicker">{t(SC.svcKicker)}</p>
            <h2 className="h2">{t(SC.svcHead)}</h2>
          </div>
          <div className="fam-stage">
            {SERVICES.map((s, i) => (
              <div className="fam-slide svc-slide" data-slide={i} key={i}>
                <div className="svc-ic"><Ic paths={s.i} /></div>
                <h3 className="fam-stmt"><span className="idx">{String(i + 1).padStart(2, "0")}</span>{t(s.t)}</h3>
                <p className="fam-sub">{t(s.d)}</p>
              </div>
            ))}
          </div>
          <div className="fam-track">
            <div className="fam-count"><span className="fc-cur">01</span> / {String(slides).padStart(2, "0")}</div>
            <div className="fam-progress"><i></i></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="band divider" id="process">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <p className="kicker">{t(SC.procKicker)}</p>
          <h2 className="h2">{t(SC.procHead)}</h2>
        </div>
        <div className="proc-grid">
          {PROCESS.map((p, i) => (
            <div className="proc-step" key={i} data-reveal data-reveal-d={i + 1}>
              <div className="proc-num">{String(i + 1).padStart(2, "0")}</div>
              <h3>{t(p.t)}</h3>
              <p>{t(p.d)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sovereignty() {
  return (
    <section className="band divider" id="trust">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <p className="kicker">{t(SC.sovKicker)}</p>
          <h2 className="h2">{t(SC.sovHead)}</h2>
          <p className="lead" style={{marginTop:"16px"}}>{t(SC.sovLead)}</p>
        </div>
        <div className="trust-grid">
          {SC.sov.map((it, i) => (
            <div className="trust-item" key={i} data-reveal data-reveal-d={i + 1}>
              <div className="tk"><span className="dotsq"></span>{t(it.k)}</div>
              <p>{t(it.d)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="band divider" id="safe">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <p className="kicker">{t(SC.guarKicker)}</p>
          <h2 className="h2">{t(SC.guarHead)}</h2>
        </div>
        <div className="guar-grid">
          <div className="guar-card" data-reveal data-reveal-x="left">
            <div className="gk">{t(SC.g1k)}</div>
            <h3>{t(SC.g1h)}</h3>
            <p>{t(SC.g1p1)}</p>
            <p>{t(SC.g1p2)}</p>
          </div>
          <div className="guar-card" data-reveal data-reveal-x="right" style={{borderColor:"var(--accent-line)",background:"linear-gradient(180deg,var(--accent-soft),transparent),var(--panel)"}}>
            <div className="gk">{t(SC.g2k)}</div>
            <h3>{t(SC.g2h)}</h3>
            <p>{t(SC.g2p1)}</p>
            <p>{t(SC.g2p2)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="band divider" id="faq">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <p className="kicker">{t(SC.faqKicker)}</p>
          <h2 className="h2">{t(SC.faqHead)}</h2>
        </div>
        <div className="faq-wrap">
          {FAQS.map((f, i) => (
            <div className={"faq-item" + (open === i ? " open" : "")} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{t(f.q)}</span><span className="pm"></span>
              </button>
              <div className="faq-a" style={{ maxHeight: open === i ? "360px" : "0" }}>
                <p>{t(f.a)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Services, Process, Sovereignty, Guarantee, FAQ });
