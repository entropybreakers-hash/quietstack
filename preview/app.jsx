/* ============ App · Nav · reveal · i18n · Tweaks ============ */

const ACCENTS = {
  blue:   { accent: "#4d7cfe", bright: "#6b93ff", deep: "#2f57d8" },
  cyan:   { accent: "#22a7c9", bright: "#41c6e6", deep: "#127e9b" },
  indigo: { accent: "#7b6bff", bright: "#9a8dff", deep: "#5946e0" },
  steel:  { accent: "#5b86b3", bright: "#7ba4cd", deep: "#3f6690" },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "c",
  "accent": "blue",
  "grain": true
}/*EDITMODE-END*/;

function useReveal(dep) {
  React.useEffect(() => {
    document.documentElement.classList.add("reveal-on");
    let raf = 0;
    const clamp = (v) => v < 0 ? 0 : v > 1 ? 1 : v;
    const easeOut = (p) => 1 - Math.pow(1 - p, 2);

    const check = () => {
      raf = 0;
      const vh = window.innerHeight;
      // standard reveal (block + directional)
      document.querySelectorAll("[data-reveal]:not(.in), [data-wipe]:not(.in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.9 && r.bottom > 0) el.classList.add("in");
      });
      // cinematic scroll-scrub (legacy single-line, if any)
      document.querySelectorAll("[data-scrub]").forEach((el) => {
        const r = el.getBoundingClientRect();
        const start = vh * 0.92, end = vh * 0.42;
        const p = easeOut(clamp((start - r.top) / (start - end)));
        el.style.setProperty("--p", p.toFixed(3));
      });
      // pinned scroll-scrubbed sequence (Morningside-style, with dwell)
      document.querySelectorAll("[data-fampin]").forEach((sec) => {
        const r = sec.getBoundingClientRect();
        const dist = sec.offsetHeight - vh;
        const p = dist > 0 ? clamp(-r.top / dist) : 0;
        const slides = sec.querySelectorAll(".fam-slide");
        const n = slides.length;
        const pos = p * (n - 1);
        const base = Math.min(n - 1, Math.floor(pos));
        const frac = pos - base;
        const HOLD = 0.68;                          // dwell portion before crossfade
        let active = base;
        slides.forEach((sl, i) => {
          let op = 0, y = 24;
          if (i === base) {
            if (frac <= HOLD) { op = 1; y = -frac * 12; }
            else { const tns = (frac - HOLD) / (1 - HOLD); op = 1 - tns; y = -tns * 46; }
          } else if (i === base + 1) {
            if (frac <= HOLD) { op = 0; y = 30; }
            else { const tns = (frac - HOLD) / (1 - HOLD); op = tns; y = (1 - tns) * 30; active = tns > 0.5 ? i : base; }
          }
          const bl = (1 - op) * 7;
          sl.style.opacity = op.toFixed(3);
          sl.style.transform = "translateY(calc(-50% + " + y.toFixed(1) + "px))";
          sl.style.filter = op > 0.02 ? "blur(" + bl.toFixed(1) + "px)" : "blur(7px)";
          sl.style.pointerEvents = op > 0.5 ? "auto" : "none";
        });
        const bar = sec.querySelector(".fam-progress i");
        if (bar) bar.style.width = (p * 100).toFixed(1) + "%";
        const cur = sec.querySelector(".fam-count .fc-cur");
        if (cur) cur.textContent = String(Math.min(n, active + 1)).padStart(2, "0");
      });
      // parallax
      document.querySelectorAll("[data-para]").forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-para")) || 0.12;
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2 - vh / 2;
        el.style.transform = "translate3d(0," + (-center * speed).toFixed(1) + "px,0)";
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(check); };
    check();
    requestAnimationFrame(check);
    const t1 = setTimeout(check, 250);
    // fallback: only reveal what's already in/above the viewport — never pre-reveal
    // off-screen blocks (those must animate on scroll)
    const t2 = setTimeout(() => {
      const vh = window.innerHeight;
      document.querySelectorAll("[data-reveal]:not(.in), [data-wipe]:not(.in)").forEach((el) => {
        if (el.getBoundingClientRect().top < vh) el.classList.add("in");
      });
    }, 1200);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(t1); clearTimeout(t2); if (raf) cancelAnimationFrame(raf);
    };
  }, [dep]);
}

function LangSwitch({ lang, setLang }) {
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
      <button className={lang === "de" ? "on" : ""} onClick={() => setLang("de")}>DE</button>
    </div>
  );
}

function Nav({ lang, setLang }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="wrap nav-in">
        <a href="#top" className="brand"><span className="mark"></span><span className="wordmark">QuietStack</span></a>
        <div className="nav-links">
          <a href="#services">{t(UI.navServices)}</a>
          <a href="#process">{t(UI.navProcess)}</a>
          <a href="#why">{t(UI.navWhy)}</a>
          <a href="#faq">{t(UI.navFaq)}</a>
        </div>
        <div className="nav-cta">
          <LangSwitch lang={lang} setLang={setLang} />
          <a href="work-with-us.html" className="btn btn-primary">{t(UI.navCta)} <span className="arr">→</span></a>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLangState] = React.useState(() => {
    try { return localStorage.getItem("qs_lang") || "en"; } catch (e) { return "en"; }
  });
  const setLang = (l) => {
    try { localStorage.setItem("qs_lang", l); } catch (e) {}
    document.documentElement.setAttribute("lang", l);
    setLangState(l);
  };
  // make current language available to all t() calls during this render
  window.LANG = lang;

  React.useEffect(() => {
    const a = ACCENTS[tw.accent] || ACCENTS.blue;
    const r = document.documentElement.style;
    r.setProperty("--accent", a.accent);
    r.setProperty("--accent-bright", a.bright);
    r.setProperty("--accent-deep", a.deep);
  }, [tw.accent]);

  React.useEffect(() => {
    document.body.classList.toggle("nograin", !tw.grain);
  }, [tw.grain]);

  React.useEffect(() => { document.documentElement.setAttribute("lang", lang); }, [lang]);

  useReveal(tw.heroVariant + "|" + lang);

  return (
    <React.Fragment>
      <Nav lang={lang} setLang={setLang} />
      <main>
        <Hero variant={tw.heroVariant} />
        <Marquee />
        <Problems />
        <SelfAudit />
        <Stats />
        <BeforeAfter />
        <Philosophy />
        <About />
        <Fit />
        <Services />
        <Process />
        <Sovereignty />
        <Guarantee />
        <FAQ />
        <OtherBrands />
        <FinalCTA />
      </main>
      <Footer />

      <TweaksPanel>
        <TweakSection label="Language" />
        <TweakRadio label="Site language" value={lang}
          options={[{label:"English",value:"en"},{label:"Deutsch",value:"de"}]}
          onChange={(v) => setLang(v)} />
        <TweakSection label="Hero concept" />
        <TweakRadio label="Layout" value={tw.heroVariant}
          options={[{label:"Centered",value:"a"},{label:"Split",value:"b"},{label:"Statement",value:"c"}]}
          onChange={(v) => setTweak("heroVariant", v)} />
        <TweakSection label="Accent" />
        <TweakColor label="Accent colour" value={(ACCENTS[tw.accent]||ACCENTS.blue).accent}
          options={[ACCENTS.blue.accent, ACCENTS.cyan.accent, ACCENTS.indigo.accent, ACCENTS.steel.accent]}
          onChange={(hex) => {
            const key = Object.keys(ACCENTS).find((k) => ACCENTS[k].accent === hex) || "blue";
            setTweak("accent", key);
          }} />
        <TweakSection label="Texture" />
        <TweakToggle label="Film grain" value={tw.grain} onChange={(v) => setTweak("grain", v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
