/* ============ Marquee · Problems · Self-audit · Stats ============ */

const SA = {
  marquee: L("Builds into the stack you already run on", "Baut auf den Stack, den Sie bereits nutzen"),
  probKicker: L("Sound familiar?", "Kommt Ihnen das bekannt vor?"),
  probHead: L("Your business grows. Your operations turn to chaos.", "Ihr Business wächst. Ihr Betrieb versinkt im Chaos."),
  probPunch: L('You\u2019re not behind, and you\u2019re not doing it wrong. <strong>You\u2019re just running on willpower instead of systems</strong>, and willpower doesn\u2019t scale. I\u2019ve been exactly there.',
               'Sie sind nicht im R\u00fcckstand, und Sie machen nichts falsch. <strong>Sie laufen nur auf Willenskraft statt auf Systemen</strong>, und Willenskraft skaliert nicht. Ich war genau dort.'),
  auditKicker: L("60-second self-audit", "60-Sekunden-Selbstcheck"),
  auditHead: L("Where is your client flow leaking?", "Wo verliert Ihr Kundenfluss?"),
  auditLead: L("Four questions. One honest answer each. No email required.", "Vier Fragen. Je eine ehrliche Antwort. Keine E-Mail nötig."),
  yes: L("Yes", "Ja"), no: L("No", "Nein"),
  leak: L("Estimated leak", "Geschätzter Verlust"),
  hrs: L("hrs / week", "Std / Woche"),
  mNeed: L("Answer all four to see your estimate.", "Beantworten Sie alle vier für Ihre Schätzung."),
  mZero: L("Rare. Your operations are already tighter than most. Let's pressure-test the edges.", "Selten. Ihr Betrieb ist bereits straffer als die meisten. Prüfen wir die Ränder."),
  mAll: L("Every stage is leaking. This is exactly where a system pays for itself fastest.", "Jede Stufe verliert. Genau hier zahlt sich ein System am schnellsten aus."),
  mapBtn: L("Map this properly", "Das richtig kartieren"),
  statsKicker: L("By the numbers", "In Zahlen"),
  statsHead: L("The market has already moved.", "Der Markt hat sich längst bewegt."),
  statsLead: L("AI isn't the future you're preparing for. It's the operating advantage your competitors are already running on.", "KI ist nicht die Zukunft, auf die Sie sich vorbereiten. Es ist der operative Vorteil, auf dem Ihre Wettbewerber bereits laufen."),
  statsNoteA: L("The teams putting these numbers to work aren't bigger than you. They're just systematised. ", "Die Teams, die diese Zahlen nutzen, sind nicht größer als Sie. Sie sind nur systematisiert. "),
  statsNoteB: L("That's the only gap.", "Das ist der einzige Unterschied."),
  outLabel: L("What that looks like for you", "Was das für Sie bedeutet"),
  outNum: L("20–30", "20–30"),
  outUnit: L("hours / week", "Stunden / Woche"),
  outDesc: L("freed up once your systems run, the equivalent of a part-time hire's time back, every single week.", "frei, sobald Ihre Systeme laufen, das entspricht der Arbeitszeit einer Teilzeitkraft, jede Woche aufs Neue."),
  outFast: L("First systems live in days, not months.", "Erste Systeme laufen in Tagen, nicht Monaten."),
};

function partial(n) {
  return window.LANG === "de" ? (n + " von 4 Stufen laufen über Sie, nicht über ein System.")
                              : (n + " of 4 stages are running on you, not on a system.");
}

function Marquee() {
  const row = TOOLS.concat(TOOLS);
  return (
    <section className="marquee-sec">
      <div className="marquee-label">{t(SA.marquee)}</div>
      <div className="marquee">
        <div className="marquee-track">
          {row.map((x, i) => <span className="mq-item" key={i}><span className="nodecore"></span>{x}</span>)}
        </div>
        <div className="marquee-track" aria-hidden="true">
          {row.map((x, i) => <span className="mq-item" key={"b" + i}><span className="nodecore"></span>{x}</span>)}
        </div>
      </div>
    </section>
  );
}

function Problems() {
  // pinned scroll-scrubbed sequence (Morningside-style)
  const slides = PROBLEMS.length + 1; // statements + final punch
  return (
    <section className="band-tight divider fam-pin-sec" id="problems" data-fampin
             style={{ height: "calc(100vh + " + (slides * 70) + "vh)" }}>
      <div className="fam-pin">
        <div className="fam-glow"></div>
        <div className="wrap">
          <div className="section-head fam-head">
            <p className="kicker">{t(SA.probKicker)}</p>
            <h2 className="h2">{t(SA.probHead)}</h2>
          </div>
          <div className="fam-stage">
            {PROBLEMS.map((p, i) => (
              <div className="fam-slide" data-slide={i} key={i}>
                <h3 className="fam-stmt"><span className="idx">{String(i + 1).padStart(2, "0")}</span>{t(p.t)}.</h3>
                <p className="fam-sub">{t(p.d)}</p>
              </div>
            ))}
            <div className="fam-slide fam-final" data-slide={PROBLEMS.length}>
              <h3 dangerouslySetInnerHTML={{ __html: t(SA.probPunch) }}></h3>
            </div>
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

function SelfAudit() {
  const [ans, setAns] = React.useState({});
  const noCount = Object.values(ans).filter((v) => v === "no").length;
  const answered = Object.keys(ans).length;
  const hours = noCount * 5;
  const pct = Math.min(100, (noCount / QUIZ.length) * 100);
  const msg = answered < QUIZ.length ? t(SA.mNeed)
    : noCount === 0 ? t(SA.mZero)
    : noCount === QUIZ.length ? t(SA.mAll)
    : partial(noCount);

  return (
    <section className="band divider" id="audit">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <p className="kicker">{t(SA.auditKicker)}</p>
          <h2 className="h2">{t(SA.auditHead)}</h2>
          <p className="lead" style={{marginTop:"16px"}}>{t(SA.auditLead)}</p>
        </div>
        <div className="quiz-wrap">
          <div data-reveal>
            {QUIZ.map((q, i) => (
              <div className="quiz-q" key={i}>
                <div className="qtxt">
                  <div className="qcat">{t(q.cat)}</div>
                  <div className="qq">{t(q.q)}</div>
                </div>
                <div className="yn">
                  <button className={ans[i] === "yes" ? "on-yes" : ""} onClick={() => setAns({ ...ans, [i]: "yes" })}>{t(SA.yes)}</button>
                  <button className={ans[i] === "no" ? "on-no" : ""} onClick={() => setAns({ ...ans, [i]: "no" })}>{t(SA.no)}</button>
                </div>
              </div>
            ))}
          </div>
          <div className="quiz-panel" data-reveal data-reveal-x="right">
            <div className="plabel">{t(SA.leak)}</div>
            <div className="quiz-num">~{hours}<span>{t(SA.hrs)}</span></div>
            <div className="quiz-bar"><i style={{ width: pct + "%" }}></i></div>
            <div className="psub">{msg}</div>
            <a href="work-with-us.html" className="btn btn-primary" style={{width:"100%",justifyContent:"center",marginTop:"22px"}}>{t(SA.mapBtn)} <span className="arr">→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({ target, suf }) {
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(0);
  const done = React.useRef(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const run = () => {
      done.current = true;
      const end = parseInt(target, 10), dur = 1300, t0 = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / dur);
        setVal(Math.round(end * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const check = () => {
      if (done.current) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.85 && r.bottom > 0) { run(); cleanup(); }
    };
    const cleanup = () => window.removeEventListener("scroll", check);
    window.addEventListener("scroll", check, { passive: true });
    check();
    const safety = setTimeout(() => { if (!done.current) run(); }, 3000);
    return () => { cleanup(); clearTimeout(safety); };
  }, [target]);
  return <span ref={ref} className="num"><em>{val}{suf}</em></span>;
}

function Stats() {
  return (
    <section className="band divider" id="market">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <p className="kicker">{t(SA.statsKicker)}</p>
          <h2 className="h2">{t(SA.statsHead)}</h2>
          <p className="lead" style={{marginTop:"16px"}}>{t(SA.statsLead)}</p>
        </div>
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div className="stat" key={i} data-reveal data-reveal-d={i + 1}>
              <div className="num"><Counter target={s.n} suf={s.suf} /></div>
              <p className="desc">{t(s.d)}</p>
              <div className="src">{s.s}</div>
            </div>
          ))}
        </div>
        <p className="stats-note" data-reveal>{t(SA.statsNoteA)}<span className="accent-text">{t(SA.statsNoteB)}</span></p>
        <div className="stat-outcome" data-reveal>
          <div className="so-figure">
            <div className="so-num">{t(SA.outNum)}<span>{t(SA.outUnit)}</span></div>
          </div>
          <div className="so-body">
            <div className="so-label">{t(SA.outLabel)}</div>
            <p className="so-desc">{t(SA.outDesc)}</p>
            <div className="so-fast"><span className="so-spark"></span>{t(SA.outFast)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Marquee, Problems, SelfAudit, Stats });
