/* QuietStack — static port (no React, no Babel) */
(function () {
  "use strict";

  /* ============ i18n: translations + helpers ============ */
  function L(en, de) { return { en: en, de: de }; }
  var T = {
    // nav
    navServices: L("Services", "Leistungen"),
    navProcess:  L("How it works", "So funktioniert's"),
    navWhy:      L("Why QuietStack", "Warum QuietStack"),
    navFaq:      L("FAQ", "FAQ"),
    navCta:      L("Free audit <span class=\"arr\">→</span>", "Gratis-Audit <span class=\"arr\">→</span>"),

    // hero
    heroKicker:   L("Replace yourself in your own business — with AI.", "Ersetzen Sie sich in Ihrem eigenen Business — mit KI."),
    heroHeadline: L("Your business shouldn't depend on you for every single step.", "Ihr Business sollte nicht bei jedem einzelnen Schritt von Ihnen abhängen."),
    heroL1:     L("You don't need", "Sie brauchen nicht"),
    heroL1b:    L("more leads first.", "zuerst mehr Leads."),
    heroL2:     L("You need a system that can", "Sie brauchen ein System, das"),
    heroL3:     L("carry your success.", "Ihren Erfolg trägt."),
    bookAudit:  L("Book your systems audit <span class=\"arr\">→</span>", "Systems-Audit buchen <span class=\"arr\">→</span>"),
    ctaBtn:     L("Book your free systems audit <span class=\"arr\">→</span>", "Kostenloses Audit buchen <span class=\"arr\">→</span>"),
    seeHow:     L("See how it works", "So funktioniert's"),
    trust1:     L("A personal reply from me within 24 hours", "Persönliche Antwort von mir in 24 Stunden"),
    trust2:     L("EU-based · DSGVO-aligned", "EU-basiert · DSGVO-konform"),
    trust3:     L("Built into your own accounts", "In Ihre eigenen Accounts gebaut"),

    // hero live panel
    heroSignRole: L("Founder, QuietStack", "Gründerin, QuietStack"),
    panelTitle: L("QuietStack · Automations", "QuietStack · Automatisierungen"),
    panelLive:  L("Live", "Live"),
    panelFoot:  L("0 manual steps · running while you focus", "0 manuelle Schritte · läuft, während Sie arbeiten"),

    // marquee
    marqueeLabel: L("Builds into the stack you already run on", "Baut auf den Stack, den Sie bereits nutzen"),

    // problems
    probKicker: L("Sound familiar?", "Kommt Ihnen das bekannt vor?"),
    probHead:   L("Your business grows. Your operations turn to chaos.", "Ihr Business wächst. Ihr Betrieb versinkt im Chaos."),
    probPunch:  L("You're not behind, and you're not doing it wrong. <strong>You're just running on willpower instead of systems</strong>, and willpower doesn't scale. I've been exactly there.",
                  "Sie sind nicht im Rückstand, und Sie machen nichts falsch. <strong>Sie laufen nur auf Willenskraft statt auf Systemen</strong>, und Willenskraft skaliert nicht. Ich war genau dort."),

    // self-audit
    auditKicker: L("60-second self-audit", "60-Sekunden-Selbstcheck"),
    auditHead:   L("Where is your client flow leaking?", "Wo verliert Ihr Kundenfluss?"),
    auditLead:   L("Four questions. One honest answer each. No email required.", "Vier Fragen. Je eine ehrliche Antwort. Keine E-Mail nötig."),
    yes:    L("Yes", "Ja"),
    no:     L("No", "Nein"),
    leak:   L("Estimated leak", "Geschätzter Verlust"),
    hrs:    L("hrs / week", "Std / Woche"),
    mNeed:  L("Answer all four to see your estimate.", "Beantworten Sie alle vier für Ihre Schätzung."),
    mZero:  L("Rare. Your operations are already tighter than most. Let's pressure-test the edges.", "Selten. Ihr Betrieb ist bereits straffer als die meisten. Prüfen wir die Ränder."),
    mAll:   L("Every stage is leaking. This is exactly where a system pays for itself fastest.", "Jede Stufe verliert. Genau hier zahlt sich ein System am schnellsten aus."),
    mapBtn: L("Map this properly <span class=\"arr\">→</span>", "Das richtig kartieren <span class=\"arr\">→</span>"),

    // stats
    statsKicker: L("By the numbers", "In Zahlen"),
    statsHead:   L("The market has already moved.", "Der Markt hat sich längst bewegt."),
    statsLead:   L("AI isn't the future you're preparing for. It's the operating advantage your competitors are already running on.",
                   "KI ist nicht die Zukunft, auf die Sie sich vorbereiten. Es ist der operative Vorteil, auf dem Ihre Wettbewerber bereits laufen."),
    statsNoteA:  L("The teams putting these numbers to work aren't bigger than you. They're just systematised. ",
                   "Die Teams, die diese Zahlen nutzen, sind nicht größer als Sie. Sie sind nur systematisiert. "),
    statsNoteB:  L("That's the only gap.", "Das ist der einzige Unterschied."),
    outLabel: L("What that looks like for you", "Was das für Sie bedeutet"),
    outNum:   L("20–30", "20–30"),
    outUnit:  L("hours / week", "Stunden / Woche"),
    outDesc:  L("freed up once your systems run, the equivalent of a part-time hire's time back, every single week.",
                "frei, sobald Ihre Systeme laufen, das entspricht der Arbeitszeit einer Teilzeitkraft, jede Woche aufs Neue."),
    outFast:  L("First systems live in days, not months.", "Erste Systeme laufen in Tagen, nicht Monaten."),

    // before/after
    baKicker: L("The shift", "Der Wandel"),
    baHead:   L("Quiet systems build scalable businesses.", "Leise Systeme bauen skalierbare Unternehmen."),
    baLead:   L("The same practice, before and after the systems are in place. Same expertise, wildly different leverage.",
                "Dieselbe Praxis, vor und nach den Systemen. Gleiches Know-how, völlig andere Hebelwirkung."),
    before:   L("Before", "Vorher"),
    after:    L("After", "Nachher"),

    // philosophy
    phKicker: L("How I see it", "Wie ich es sehe"),
    phHead:   L("Growth should create leverage, not operational chaos.", "Wachstum sollte Hebel schaffen, kein operatives Chaos."),
    phP1:     L("I've watched too many good businesses scale revenue faster than they scale systems. The result is hidden friction, inconsistent delivery, and a founder who can't step away without everything stalling. It doesn't have to be that way.",
                "Ich habe zu viele gute Unternehmen gesehen, die Umsatz schneller skalieren als Systeme. Das Ergebnis: verborgene Reibung, schwankende Umsetzung und ein Gründer, der nicht loslassen kann, ohne dass alles stockt. Das muss nicht so sein."),
    phP2a:    L("So I design operational infrastructure that scales ", "Deshalb entwerfe ich operative Infrastruktur, die "),
    phEm:     L("calmly", "ruhig"),
    phP2b:    L(", quiet in the background, structured by default, built to remove noise rather than pile on more tools.",
                " skaliert, leise im Hintergrund, standardmäßig strukturiert, gebaut, um Lärm zu entfernen statt weitere Tools aufzutürmen."),
    phCap:    L(" · Founder, QuietStack", " · Gründerin, QuietStack"),

    // about
    abKicker: L("About", "Über mich"),
    abHead:   L("I quietly took myself out of my own business.", "Ich habe mich leise aus meinem eigenen Business herausgenommen."),
    abP1:     L("For seven years I taught English to Hungarian professionals through Entropy Breakers. I was the curriculum, the scheduling, the support, the marketing, running on willpower, not systems.",
                "Sieben Jahre lang habe ich über Entropy Breakers ungarischen Fachkräften Englisch beigebracht. Ich war Lehrplan, Terminplanung, Support, Marketing, auf Willenskraft, nicht auf Systemen."),
    abP2:     L("So I started building. Platforms, AI-assisted feedback loops, automated onboarding and follow-up. Quietly, the business stopped needing me everywhere. The work was never really about teaching language. It was about operations.",
                "Also begann ich zu bauen. Plattformen, KI-gestützte Feedback-Schleifen, automatisiertes Onboarding und Follow-up. Leise brauchte das Business mich nicht mehr überall. Es ging nie wirklich um Sprache. Es ging um Abläufe."),
    abP3a:    L("That's the work I do now through QuietStack. ", "Genau diese Arbeit mache ich heute mit QuietStack. "),
    abP3em:   L("If you're building something and you're already tired, you're in the right place.", "Wenn Sie etwas aufbauen und schon müde sind, sind Sie hier richtig."),
    proofBold: L("My own client base grew by two-thirds", "Mein eigener Kundenstamm wuchs um zwei Drittel"),
    proofMidA: L(" after I automated the operations of my business, while spending ", " nachdem ich die Abläufe meines Business automatisiert hatte, bei "),
    proofEm:   L("less time on admin, not more", "weniger Admin, nicht mehr"),
    proofMidB: L(". More revenue, fewer manual hours. That's the whole point.", ". Mehr Umsatz, weniger Handarbeit. Genau darum geht es."),
    howHelp:   L("How I help", "Wie ich helfe"),
    help1:     L("Custom AI infrastructure for client operations, delivery, onboarding, follow-up.", "Maßgeschneiderte KI-Infrastruktur für Kundenabläufe, Umsetzung, Onboarding, Follow-up."),
    help2:     L("Workflow automation that quietly removes friction.", "Workflow-Automatisierung, die leise Reibung entfernt."),
    help3:     L("Systems audits for businesses ready to stop running on willpower.", "Systems-Audits für Unternehmen, die nicht mehr auf Willenskraft laufen wollen."),

    // fit
    fitKicker: L("Honest fit", "Ehrliche Passung"),
    fitHead:   L("Built for businesses ready to scale, not to start.", "Gebaut für Unternehmen, die skalieren wollen, nicht erst starten."),
    fitLead:   L("Fit matters more than a signed invoice. If this isn't you yet, I'll tell you straight.", "Passung zählt mehr als eine unterschriebene Rechnung. Wenn Sie noch nicht so weit sind, sage ich es Ihnen direkt."),
    fitGood:   L("Perfect fit", "Perfekte Passung"),
    fitBad:    L("Probably not yet", "Wahrscheinlich noch nicht"),

    // services
    svcKicker: L("What I build", "Was ich baue"),
    svcHead:   L("Your expertise, running as a system.", "Ihr Know-how, als System."),

    // process
    procKicker: L("How it works", "So funktioniert's"),
    procHead:   L("Simple systems. Clear implementation.", "Einfache Systeme. Klare Umsetzung."),

    // sovereignty
    sovKicker: L("Safe by design", "Sicher by Design"),
    sovHead:   L("Your accounts. Your data. Your IP.", "Ihre Accounts. Ihre Daten. Ihr geistiges Eigentum."),
    sovLead:   L("Built for businesses that take data seriously. The system lives inside the tools you already run, and stays entirely under your control.",
                 "Gebaut für Unternehmen, die Daten ernst nehmen. Das System lebt in den Tools, die Sie bereits nutzen, und bleibt vollständig unter Ihrer Kontrolle."),

    // guarantee
    guarKicker: L("Why it's safe to start", "Warum der Start sicher ist"),
    guarHead:   L("Clear scope, agreed up front, so it's safe for both of us.", "Klarer Umfang, vorab vereinbart, sicher für uns beide."),
    g1k: L("My promise to you", "Mein Versprechen an Sie"),
    g1h: L("You'll always know where things stand.", "Sie wissen immer, wo Sie stehen."),
    g1p1: L("Before we build, we shape together what a finished, working system looks like for you, the outcomes that matter and what \"done\" really means. So there's no guesswork, and no quiet drift, just a clear shared picture from the very first day.",
            "Bevor wir bauen, gestalten wir gemeinsam, wie ein fertiges, funktionierendes System für Sie aussieht, die Ergebnisse, die zählen, und was „fertig“ wirklich bedeutet. Kein Raten, kein leises Ausufern, sondern ein klares gemeinsames Bild vom ersten Tag an."),
    g1p2: L("And after handover, there's a dedicated window to fine-tune everything until it feels right in your hands. Calm, considered and fair to us both, the way good work should feel.",
            "Und nach der Übergabe gibt es ein eigenes Zeitfenster, um alles zu verfeinern, bis es sich in Ihren Händen richtig anfühlt. Ruhig, durchdacht und fair für uns beide, so wie gute Arbeit sich anfühlen sollte."),
    g2k: L("Founding clients", "Gründungskunden"),
    g2h: L("Intentionally small. Limited spots.", "Bewusst klein. Begrenzte Plätze."),
    g2p1: L("QuietStack is new and stays small on purpose. I take on a limited number of founding clients at a time, at a reduced build fee.",
            "QuietStack ist neu und bleibt bewusst klein. Ich nehme jeweils eine begrenzte Zahl an Gründungskunden auf, zu reduziertem Aufbaupreis."),
    g2p2: L("In return, we document a detailed case study together, and founding clients keep their rate for good. When the spots are full, they're full.",
            "Im Gegenzug dokumentieren wir gemeinsam eine ausführliche Fallstudie, und Gründungskunden behalten ihren Preis dauerhaft. Wenn die Plätze voll sind, sind sie voll."),

    // faq
    faqKicker: L("FAQ", "FAQ"),
    faqHead:   L("The questions most people ask first.", "Die Fragen, die die meisten zuerst stellen."),

    // brands
    brandsKicker: L("Also building", "Außerdem im Aufbau"),
    brandsHead:   L("Two other brands I run on the same systems.", "Zwei weitere Marken, die ich auf denselben Systemen betreibe."),

    // final cta
    ctaKicker: L("Your move", "Ihr Zug"),
    ctaHead:   L("AI isn't coming. It's already running your competitors' back office.", "KI kommt nicht erst. Sie betreibt bereits das Back-Office Ihrer Wettbewerber."),
    ctaLead:   L("The few who systematise will pull away quietly, while everyone else stays busy. I'd love to help you be one of them. Let's have a relaxed chat and see if we're a fit, no pressure either way.",
                 "Die wenigen, die systematisieren, ziehen leise davon, während alle anderen beschäftigt bleiben. Ich helfe Ihnen gerne, eine davon zu werden. Lassen Sie uns entspannt sprechen und schauen, ob es passt, ganz ohne Druck."),
    ctaFree:   L("Free and no obligation. You leave with a clear roadmap, yours to keep, whether we work together or not.",
                 "Kostenlos und unverbindlich. Sie gehen mit einer klaren Roadmap, Ihrer, ob wir zusammenarbeiten oder nicht."),

    // footer
    footTagline: L("Quiet systems. Scalable operations. AI-assisted operational infrastructure for coaches and high-ticket consultants.",
                   "Leise Systeme. Skalierbarer Betrieb. KI-gestützte operative Infrastruktur für Coaches und High-Ticket-Berater."),
    colExplore: L("Explore", "Entdecken"),
    colGet:     L("Get started", "Loslegen"),
    colContact: L("Contact", "Kontakt"),
    lSelfAudit: L("Self-audit", "Selbstcheck"),
    lBookAudit: L("Book an audit", "Audit buchen"),
    lEmail:     L("Email", "E-Mail"),
    fService:   L("A service by Entropy Breakers", "Ein Service von Entropy Breakers"),
    fOnline:    L("Based in Austria · online, wherever you are", "Sitz in Österreich · online, wo immer Sie sind"),
    lImprint:   L("Imprint", "Impressum"),
    lPrivacy:   L("Privacy Policy", "Datenschutz"),
    lTerms:     L("Terms & Conditions", "AGB")
  };

  /* ============ lists (rendered) ============ */
  var PROBLEMS = [
    { t: L("You answer the same questions every day", "Sie beantworten jeden Tag dieselben Fragen"),
      d: L("The same advice, the same intro, the same objections, typed out by hand, again. Your expertise is stuck on repeat.",
           "Derselbe Rat, dasselbe Intro, dieselben Einwände, jeden Tag von Hand getippt. Ihr Know-how läuft in der Endlosschleife.") },
    { t: L("Admin eats the hours clients pay for", "Admin frisst die Stunden, für die Kunden zahlen"),
      d: L("DMs, email, scheduling, notes. The work that grows the business loses every time to the work that just keeps it alive.",
           "Nachrichten, E-Mails, Termine, Notizen. Die Arbeit, die wächst, verliert jedes Mal gegen die Arbeit, die nur am Laufen hält.") },
    { t: L("Warm leads go cold while you're busy", "Warme Leads werden kalt, während Sie beschäftigt sind"),
      d: L("Nobody followed up at the right moment, so a buyer who was ready quietly went somewhere that answered faster.",
           "Niemand hat im richtigen Moment nachgefasst, und ein kaufbereiter Interessent ging leise dorthin, wo man schneller antwortete.") },
    { t: L("Every new client is a manual scramble", "Jeder neue Kunde ist manuelles Chaos"),
      d: L("Forms, contracts, intro calls, assembled from scratch each time. Onboarding depends entirely on you remembering the steps.",
           "Formulare, Verträge, Kennenlern-Calls, jedes Mal neu zusammengesucht. Das Onboarding hängt allein an Ihrem Gedächtnis.") },
    { t: L("Delivery quality swings with your energy", "Die Qualität schwankt mit Ihrer Energie"),
      d: L("Clients get the rested version of you or the exhausted one. Consistency shouldn't be a coin flip.",
           "Kunden bekommen mal die ausgeruhte, mal die erschöpfte Version von Ihnen. Konstanz darf kein Glücksspiel sein.") },
    { t: L("You are the single point of failure", "Sie sind der einzige Single Point of Failure"),
      d: L("Nothing moves unless you move it. Growth doesn't buy you freedom, it just stacks more onto your plate.",
           "Nichts bewegt sich, außer Sie bewegen es. Wachstum bringt keine Freiheit, es stapelt nur mehr auf Ihren Teller.") }
  ];

  var QUIZ = [
    { cat: L("Lead capture", "Lead-Erfassung"),
      q: L("When a new enquiry comes in, does it get a personal reply within 5 minutes, automatically?",
           "Erhält eine neue Anfrage automatisch innerhalb von 5 Minuten eine persönliche Antwort?") },
    { cat: L("Follow-up", "Nachfassen"),
      q: L("Do quiet leads get a sequenced follow-up without you having to remember to send it?",
           "Bekommen stille Leads eine automatische Follow-up-Sequenz, ohne dass Sie daran denken müssen?") },
    { cat: L("Onboarding", "Onboarding"),
      q: L("Do new clients get a personal onboarding flow without you assembling materials each time?",
           "Durchlaufen neue Kunden ein persönliches Onboarding, ohne dass Sie jedes Mal Material zusammenstellen?") },
    { cat: L("Reporting", "Reporting"),
      q: L("Can you see revenue, pipeline and key numbers live, without building a spreadsheet?",
           "Sehen Sie Umsatz, Pipeline und Kennzahlen live, ohne ein Spreadsheet zu bauen?") }
  ];

  var STATS = [
    { n: "72", suf: "%", d: L("of organisations now use AI in at least one business function.", "der Unternehmen nutzen KI in mindestens einer Geschäftsfunktion."), s: "McKinsey · State of AI, 2024" },
    { n: "75", suf: "%", d: L("of knowledge workers already use AI in their daily work.", "der Wissensarbeiter nutzen KI bereits in ihrer täglichen Arbeit."), s: "Microsoft × LinkedIn · Work Trend Index, 2024" },
    { n: "14", suf: "%", d: L("average productivity gain from AI, measured in real workflows.", "durchschnittlicher Produktivitätsgewinn durch KI, gemessen in realen Workflows."), s: "Brynjolfsson, Li & Raymond · NBER, 2023" }
  ];

  var TOOLS = ["Google Calendar","Gmail","Notion","Slack","Stripe","HubSpot","Calendly","Zapier","Airtable","WhatsApp","Make","ClickUp"];

  var BEFORE = [
    L("Drowning in DMs and email", "Ertrinken in Nachrichten und E-Mails"),
    L("Onboarding every client by hand", "Jeden Kunden von Hand onboarden"),
    L("Repeating the same answers on loop", "Dieselben Antworten in Dauerschleife"),
    L("Delivery that depends on you for everything", "Eine Umsetzung, die an allem von Ihnen abhängt"),
    L("Leads going cold in your inbox", "Leads, die in Ihrem Postfach erkalten")
  ];
  var AFTER = [
    L("Enquiries qualified and answered automatically", "Anfragen automatisch qualifiziert und beantwortet"),
    L("A smooth, automated onboarding flow", "Ein reibungsloses, automatisiertes Onboarding"),
    L("Your expertise answering on autopilot", "Ihr Know-how antwortet auf Autopilot"),
    L("A premium, consistent client experience", "Ein hochwertiges, konstantes Kundenerlebnis"),
    L("A business that runs without you in every step", "Ein Business, das nicht bei jedem Schritt Sie braucht")
  ];

  var FIT_GOOD = [
    L("You're a coach, consultant or expert advisor with real, paying demand.", "Sie sind Coach, Berater oder Experte mit echter, zahlender Nachfrage."),
    L("You're losing 10+ hours a week to manual operations.", "Sie verlieren 10+ Stunden pro Woche an manuelle Abläufe."),
    L("You want a done-for-you system, not another course to grind through.", "Sie wollen ein fertiges System, keinen weiteren Kurs zum Durcharbeiten."),
    L("You're ready to invest in operations that compound over time.", "Sie sind bereit, in Abläufe zu investieren, die sich mit der Zeit auszahlen.")
  ];
  var FIT_BAD = [
    L("You're pre-revenue or still validating the idea.", "Sie sind noch vor dem ersten Umsatz oder validieren die Idee noch."),
    L("You want to build and maintain everything yourself.", "Sie wollen alles selbst bauen und pflegen."),
    L("You're hunting for the cheapest possible option.", "Sie suchen die billigstmögliche Option."),
    L("You need it \"done by tomorrow\" with no discovery.", "Sie brauchen es „bis morgen“, ohne Analyse.")
  ];

  var SERVICES = [
    { t: L("AI Client Onboarding", "KI-Kunden-Onboarding"), d: L("Automate qualification, intake and onboarding so every new client starts smoothly, without your manual work.", "Qualifizierung, Aufnahme und Onboarding automatisiert, damit jeder neue Kunde reibungslos startet, ohne Ihre Handarbeit."), i: ["M4 7h16M4 12h16M4 17h10"] },
    { t: L("AI Knowledge Assistant", "KI-Wissensassistent"), d: L("Train an AI on your own frameworks and methodology so your expertise answers clients around the clock.", "Eine KI, trainiert auf Ihre Frameworks und Methodik, Ihr Know-how antwortet rund um die Uhr."), i: ["M12 3a4 4 0 014 4v1a4 4 0 01-8 0V7a4 4 0 014-4z","M5 21v-1a7 7 0 0114 0v1"] },
    { t: L("AI Content Engine", "KI-Content-Engine"), d: L("Turn your calls, notes and ideas into ready-to-post content automatically, so you stay visible without the grind.", "Aus Calls, Notizen und Ideen automatisch fertigen Content, sichtbar bleiben ohne Mühsal."), i: ["M4 4h16v12H4z","M8 20h8M12 16v4"] },
    { t: L("AI Client Success System", "KI-Kundenerfolg-System"), d: L("Track clients, follow-ups and next actions so nothing slips and delivery stays consistently premium.", "Kunden, Follow-ups und nächste Schritte im Blick, nichts fällt durch, die Umsetzung bleibt konstant hochwertig."), i: ["M4 12l5 5L20 6"] },
    { t: L("AI Sales Assistant", "KI-Vertriebsassistent"), d: L("Nurture and qualify leads 24/7 so your pipeline keeps moving while you focus on delivery.", "Leads rund um die Uhr pflegen und qualifizieren, Ihre Pipeline läuft, während Sie liefern."), i: ["M3 12l18-7-7 18-3-7-8-4z"] },
    { t: L("AI Delivery Workflows", "KI-Delivery-Workflows"), d: L("Turn your repeatable processes and SOPs into systems that run themselves behind the scenes.", "Ihre wiederkehrenden Prozesse und SOPs werden zu Systemen, die im Hintergrund von selbst laufen."), i: ["M12 3v4M12 17v4M3 12h4M17 12h4","M12 9a3 3 0 100 6 3 3 0 000-6z"] }
  ];

  var PROCESS = [
    { t: L("Audit", "Audit"), d: L("We start with a relaxed conversation. I get to know how you actually work, then map the bottlenecks and the exact gaps where your time and revenue quietly leak out.", "Wir starten mit einem entspannten Gespräch. Ich lerne kennen, wie Sie wirklich arbeiten, und kartiere dann die Engpässe und genau die Lücken, an denen Zeit und Umsatz leise verloren gehen.") },
    { t: L("System Design", "System-Design"), d: L("Then I design a practical automation structure around how your business really works, never a generic template. You see exactly what I'm building and why.", "Dann entwerfe ich eine praktische Automatisierungs-Struktur rund um Ihr echtes Geschäft, niemals eine Vorlage von der Stange. Sie sehen genau, was ich baue und warum.") },
    { t: L("Implementation", "Umsetzung"), d: L("I build the workflows into your own accounts, walk you through everything, and keep refining with you until they genuinely run on their own.", "Ich baue die Workflows in Ihre eigenen Accounts, führe Sie durch alles und verfeinere sie gemeinsam mit Ihnen, bis sie wirklich von selbst laufen.") }
  ];

  var SOV = [
    { k: L("Your accounts", "Ihre Accounts"), d: L("Systems are built directly into the tools you already own, calendar, email, CRM, payments. No new platform to migrate to, nothing to rip out.", "Systeme werden direkt in Ihre vorhandenen Tools gebaut, Kalender, E-Mail, CRM, Zahlungen. Keine neue Plattform, nichts zum Herausreißen.") },
    { k: L("Your data", "Ihre Daten"), d: L("Nothing leaves your stack. I don't pool, train on, or resell your data. EU-based and DSGVO-aligned by design, not as an afterthought.", "Nichts verlässt Ihren Stack. Ich bündle, trainiere oder verkaufe Ihre Daten nicht. EU-basiert und DSGVO-konform by Design, nicht nachträglich.") },
    { k: L("Your IP", "Ihr geistiges Eigentum"), d: L("Your frameworks, content and client relationships stay 100% yours. At handover the system runs in your name, in your accounts.", "Ihre Frameworks, Inhalte und Kundenbeziehungen bleiben zu 100% Ihre. Bei Übergabe läuft das System in Ihrem Namen, in Ihren Accounts.") }
  ];

  var FAQS = [
    { q: L("Will this replace my personal brand?", "Ersetzt das meine persönliche Marke?"),
      a: L("No, it amplifies it. The systems run the repetitive operations in the background so you show up more, not less. Your voice, your frameworks and your client relationships stay entirely yours.",
           "Nein, es verstärkt sie. Die Systeme übernehmen die wiederkehrenden Abläufe im Hintergrund, damit Sie präsenter sind, nicht weniger. Ihre Stimme, Ihre Frameworks und Ihre Kundenbeziehungen bleiben vollständig Ihre.") },
    { q: L("Will it sound robotic or impersonal?", "Klingt das roboterhaft oder unpersönlich?"),
      a: L("No. Everything is trained around your tone, your methodology and your workflows, so clients get a faster, more consistent version of you, not a generic bot.",
           "Nein. Alles wird auf Ihren Ton, Ihre Methodik und Ihre Workflows trainiert, Kunden bekommen eine schnellere, konstantere Version von Ihnen, keinen generischen Bot.") },
    { q: L("Will it work with my current tools?", "Funktioniert das mit meinen aktuellen Tools?"),
      a: L("Yes. I build around the stack you already use, calendar, email, CRM, payments, instead of asking you to switch everything. Your setup stays familiar.",
           "Ja. Ich baue um den Stack, den Sie bereits nutzen, Kalender, E-Mail, CRM, Zahlungen, statt Sie zum Wechseln zu drängen. Ihr Setup bleibt vertraut.") },
    { q: L("What does it cost?", "Was kostet das?"),
      a: L("There's no fixed price list. Every system is scoped to your operation, its complexity and your goals. Most engagements combine a one-time build with optional ongoing operation. We agree the exact scope and investment together on the audit call, no obligation.",
           "Es gibt keine feste Preisliste. Jedes System wird auf Ihren Betrieb, dessen Komplexität und Ihre Ziele zugeschnitten. Meist kombiniert sich ein einmaliger Aufbau mit optionalem laufenden Betrieb. Umfang und Investition legen wir gemeinsam im Audit-Call fest, unverbindlich.") },
    { q: L("What if I'm not technical?", "Was, wenn ich nicht technisch bin?"),
      a: L("That's the point. You don't need to be. I build and run the system; you just use it. I walk you through everything at handover, and the monthly partnership means you never maintain it yourself.",
           "Genau das ist der Punkt. Sie müssen es nicht sein. Ich baue und betreibe das System; Sie nutzen es einfach. Bei der Übergabe zeige ich Ihnen alles, und durch die monatliche Partnerschaft warten Sie nie selbst.") },
    { q: L("How much of my time does it take?", "Wie viel Zeit kostet mich das?"),
      a: L("Very little. We need 1-2 conversations to scope it (about 2 hours total) and a short handover session. I handle the build, and after handover the system runs in the background.",
           "Sehr wenig. Wir brauchen 1-2 Gespräche zur Abstimmung (zusammen etwa 2 Stunden) und eine kurze Übergabe. Den Aufbau übernehme ich, danach läuft das System im Hintergrund.") },
    { q: L("What if it doesn't work the way we planned?", "Was, wenn es nicht wie geplant funktioniert?"),
      a: L("I fix it. I don't work on a \"closed invoice\" basis. I keep refining the system until it genuinely serves your business, which is exactly why we start with a no-pressure call to make sure we're a fit.",
           "Ich bringe es in Ordnung. Ich arbeite nicht nach dem Prinzip „Rechnung geschrieben, fertig“. Ich verfeinere das System, bis es Ihrem Geschäft wirklich dient, genau deshalb starten wir mit einem unverbindlichen Gespräch.") },
    { q: L("How is this different from an AI course or agency?", "Wie unterscheidet sich das von einem KI-Kurs oder einer Agentur?"),
      a: L("A course teaches you to build it yourself. An agency rents you their stack. I build a system into your own accounts, hand it over so it stays yours, and keep operating it with you. You get the outcome without becoming a tech team.",
           "Ein Kurs bringt Ihnen bei, es selbst zu bauen. Eine Agentur vermietet Ihnen ihren Stack. Ich baue ein System in Ihre eigenen Accounts, übergebe es, sodass es Ihres bleibt, und betreibe es mit Ihnen weiter. Sie bekommen das Ergebnis, ohne ein Tech-Team zu werden.") }
  ];

  var HERO_STEPS = [
    { a: L("New enquiry captured", "Neue Anfrage erfasst"), b: L("Sarah K. · just now", "Sarah K. · gerade eben") },
    { a: L("Qualified · warm lead", "Qualifiziert · warmer Lead"), b: L("auto-tagged", "automatisch markiert") },
    { a: L("Welcome sequence sent", "Willkommens-Sequenz gesendet"), b: L("personalised", "personalisiert") },
    { a: L("Discovery call booked", "Kennenlern-Call gebucht"), b: L("Thu · 14:00", "Do · 14:00") }
  ];

  var BRANDS = [
    { k: "Entropy Breakers",
      d: L("English tuition for Hungarian professionals, structured fluency from beginner through C1. Enquiries, qualification, onboarding and follow-up all run automatically; I only get a ping when a new student joins.",
           "Englischunterricht für ungarische Fachkräfte, strukturierte Fluency von Anfänger bis C1. Anfragen, Qualifizierung, Onboarding und Follow-up laufen automatisch; ich werde nur benachrichtigt, wenn ein neuer Schüler dazukommt."),
      href: "https://entropybreakers.com/", cta: L("Visit Entropy Breakers", "Entropy Breakers besuchen") },
    { k: "Get Client Ready",
      d: L("Business communication and identity shift for DACH entrepreneurs. Same setup: leads captured and qualified automatically, onboarding on autopilot, day-to-day running in the background.",
           "Business-Kommunikation und Identitäts-Shift für DACH-Unternehmer. Gleiches Setup: Leads automatisch erfasst und qualifiziert, Onboarding auf Autopilot, Tagesgeschäft im Hintergrund."),
      href: "https://getclientready.entropybreakers.com", cta: L("Visit Get Client Ready", "Get Client Ready besuchen") }
  ];

  /* ============ language handling ============ */
  var LANG = "en";
  try { LANG = localStorage.getItem("qs_lang") || "en"; } catch (e) {}

  function tx(o) {
    if (o == null) return "";
    if (typeof o === "object" && "en" in o) {
      if (LANG === "hu") return (window.HU && window.HU[o.en] != null) ? window.HU[o.en] : o.en;
      return o[LANG] != null ? o[LANG] : o.en;
    }
    if (LANG === "hu" && window.HU && window.HU[o] != null) return window.HU[o];
    return o;
  }
  function pad2(n) { return n < 10 ? "0" + n : "" + n; }

  function applyI18n() {
    document.documentElement.setAttribute("lang", LANG);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (T[key]) el.textContent = tx(T[key]);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (T[key]) el.innerHTML = tx(T[key]);
    });
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-lang") === LANG);
    });
    renderLists();
  }

  function setLang(l) {
    LANG = l;
    try { localStorage.setItem("qs_lang", l); } catch (e) {}
    applyI18n();
  }

  /* ============ list renderers ============ */
  function renderLists() {
    // hero panel
    var hpb = document.getElementById("heroPanelBody");
    if (hpb) {
      hpb.innerHTML = HERO_STEPS.map(function (s, i) {
        return '<div class="hp-row" style="--i:' + i + '">' +
          '<span class="hp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg></span>' +
          '<div class="hp-txt"><b>' + tx(s.a) + '</b><span>' + tx(s.b) + '</span></div>' +
          '<span class="hp-amt">✓</span>' +
        '</div>';
      }).join("");
    }

    // marquee — duplicate tools list (2 tracks for seamless loop)
    var mqHtml = TOOLS.concat(TOOLS).map(function (x) {
      return '<span class="mq-item"><span class="nodecore"></span>' + x + '</span>';
    }).join("");
    var mqA = document.getElementById("mqA"); if (mqA) mqA.innerHTML = mqHtml;
    var mqB = document.getElementById("mqB"); if (mqB) mqB.innerHTML = mqHtml;

    // problems (pinned)
    var stage = document.getElementById("problemStage");
    if (stage) {
      var html = "";
      PROBLEMS.forEach(function (p, i) {
        html += '<div class="fam-slide" data-slide="' + i + '">';
        html += '<h3 class="fam-stmt"><span class="idx">' + pad2(i + 1) + '</span>' + tx(p.t) + '.</h3>';
        html += '<p class="fam-sub">' + tx(p.d) + '</p>';
        html += "</div>";
      });
      html += '<div class="fam-slide fam-final" data-slide="' + PROBLEMS.length + '">';
      html += '<h3>' + tx(T.probPunch) + '</h3>';
      html += "</div>";
      stage.innerHTML = html;
      var totalEl = stage.closest(".fam-pin-sec").querySelector(".fc-total");
      if (totalEl) totalEl.textContent = pad2(PROBLEMS.length + 1);
      var sec = stage.closest(".fam-pin-sec");
      if (sec) sec.style.height = "calc(100vh + " + ((PROBLEMS.length + 1) * 80) + "vh)";
    }

    // quiz
    var ql = document.getElementById("quizList");
    if (ql) {
      var qhtml = "";
      QUIZ.forEach(function (q, i) {
        qhtml += '<div class="quiz-q">';
        qhtml += '<div class="qtxt"><div class="qcat">' + tx(q.cat) + '</div><div class="qq">' + tx(q.q) + '</div></div>';
        qhtml += '<div class="yn">';
        qhtml += '<button data-quiz="' + i + '" data-val="yes">' + tx(T.yes) + '</button>';
        qhtml += '<button data-quiz="' + i + '" data-val="no">' + tx(T.no) + '</button>';
        qhtml += '</div></div>';
      });
      ql.innerHTML = qhtml;
      restoreQuiz();
    }

    // stats grid
    var sg = document.getElementById("statsGrid");
    if (sg) {
      sg.innerHTML = STATS.map(function (s, i) {
        return '<div class="stat" data-reveal data-reveal-d="' + (i + 1) + '">' +
          '<div class="num"><span class="num-counter" data-target="' + s.n + '" data-suf="' + s.suf + '"><em>0' + s.suf + '</em></span></div>' +
          '<p class="desc">' + tx(s.d) + '</p>' +
          '<div class="src">' + s.s + '</div>' +
        '</div>';
      }).join("");
      mountCounters();
    }

    // before / after lists
    var bl = document.getElementById("beforeList");
    if (bl) bl.innerHTML = BEFORE.map(function (b) {
      return '<li><span class="ic">–</span><span>' + tx(b) + '</span></li>';
    }).join("");
    var al = document.getElementById("afterList");
    if (al) al.innerHTML = AFTER.map(function (a) {
      return '<li><span class="ic">✓</span><span>' + tx(a) + '</span></li>';
    }).join("");

    // fit lists
    var fg = document.getElementById("fitGoodList");
    if (fg) fg.innerHTML = FIT_GOOD.map(function (f) {
      return '<li><span class="mk">✓</span><span>' + tx(f) + '</span></li>';
    }).join("");
    var fb = document.getElementById("fitBadList");
    if (fb) fb.innerHTML = FIT_BAD.map(function (f) {
      return '<li><span class="mk">✕</span><span>' + tx(f) + '</span></li>';
    }).join("");

    // services (pinned)
    var ss = document.getElementById("servicesStage");
    if (ss) {
      var shtml = "";
      SERVICES.forEach(function (s, i) {
        var paths = s.i.map(function (d) { return '<path d="' + d + '" />'; }).join("");
        shtml += '<div class="fam-slide svc-slide" data-slide="' + i + '">';
        shtml += '<div class="svc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + paths + '</svg></div>';
        shtml += '<h3 class="fam-stmt"><span class="idx">' + pad2(i + 1) + '</span>' + tx(s.t) + '</h3>';
        shtml += '<p class="fam-sub">' + tx(s.d) + '</p>';
        shtml += '</div>';
      });
      ss.innerHTML = shtml;
      var stotal = ss.closest(".fam-pin-sec").querySelector(".fc-total");
      if (stotal) stotal.textContent = pad2(SERVICES.length);
      var ssec = ss.closest(".fam-pin-sec");
      if (ssec) ssec.style.height = "calc(100vh + " + (SERVICES.length * 80) + "vh)";
    }

    // process
    var pg = document.getElementById("processGrid");
    if (pg) pg.innerHTML = PROCESS.map(function (p, i) {
      return '<div class="proc-step" data-reveal data-reveal-d="' + (i + 1) + '">' +
        '<div class="proc-num">' + pad2(i + 1) + '</div>' +
        '<h3>' + tx(p.t) + '</h3>' +
        '<p>' + tx(p.d) + '</p>' +
      '</div>';
    }).join("");

    // sovereignty
    var sov = document.getElementById("sovGrid");
    if (sov) sov.innerHTML = SOV.map(function (it, i) {
      return '<div class="trust-item" data-reveal data-reveal-d="' + (i + 1) + '">' +
        '<div class="tk"><span class="dotsq"></span>' + tx(it.k) + '</div>' +
        '<p>' + tx(it.d) + '</p>' +
      '</div>';
    }).join("");

    // faq
    var fw = document.getElementById("faqWrap");
    if (fw) fw.innerHTML = FAQS.map(function (f, i) {
      return '<div class="faq-item' + (i === 0 ? " open" : "") + '" data-faq="' + i + '">' +
        '<button class="faq-q"><span>' + tx(f.q) + '</span><span class="pm"></span></button>' +
        '<div class="faq-a" style="max-height:' + (i === 0 ? "360px" : "0") + '"><p>' + tx(f.a) + '</p></div>' +
      '</div>';
    }).join("");

    // brands
    var br = document.getElementById("brandsRow");
    if (br) br.innerHTML = BRANDS.map(function (b, i) {
      return '<div class="brand-card" data-reveal data-reveal-x="' + (i === 0 ? "left" : "right") + '">' +
        '<div class="bk">' + b.k + '</div>' +
        '<p>' + tx(b.d) + '</p>' +
        '<a href="' + b.href + '" target="_blank" rel="noopener">' + tx(b.cta) + ' <span class="lk-arr">→</span></a>' +
      '</div>';
    }).join("");
  }

  /* ============ quiz state ============ */
  var quizAns = {};
  function partial(n) {
    if (LANG === "hu") return n + " a 4 szakaszból rajtad fut, nem rendszeren.";
    if (LANG === "de") return n + " von 4 Stufen laufen über Sie, nicht über ein System.";
    return n + " of 4 stages are running on you, not on a system.";
  }
  function updateQuiz() {
    var noCount = 0, answered = 0;
    Object.keys(quizAns).forEach(function (k) { answered++; if (quizAns[k] === "no") noCount++; });
    var hours = noCount * 5;
    var pct = Math.min(100, (noCount / QUIZ.length) * 100);
    document.getElementById("quizHours").textContent = hours;
    document.getElementById("quizBar").style.width = pct + "%";
    var msg = answered < QUIZ.length ? tx(T.mNeed)
            : noCount === 0 ? tx(T.mZero)
            : noCount === QUIZ.length ? tx(T.mAll)
            : partial(noCount);
    document.getElementById("quizMsg").textContent = msg;
  }
  function restoreQuiz() {
    document.querySelectorAll("[data-quiz]").forEach(function (b) {
      var i = b.getAttribute("data-quiz"), v = b.getAttribute("data-val");
      b.classList.remove("on-yes", "on-no");
      if (quizAns[i] === v) b.classList.add(v === "yes" ? "on-yes" : "on-no");
    });
    updateQuiz();
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-quiz]");
    if (!b) return;
    var i = b.getAttribute("data-quiz"), v = b.getAttribute("data-val");
    quizAns[i] = v;
    restoreQuiz();
  });

  /* ============ FAQ toggle ============ */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest(".faq-q");
    if (!btn) return;
    var item = btn.parentElement;
    var ans = item.querySelector(".faq-a");
    var isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item.open").forEach(function (it) {
      if (it !== item) { it.classList.remove("open"); it.querySelector(".faq-a").style.maxHeight = "0"; }
    });
    item.classList.toggle("open", !isOpen);
    ans.style.maxHeight = isOpen ? "0" : "360px";
  });

  /* ============ language switch ============ */
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".lang-switch button");
    if (!b) return;
    setLang(b.getAttribute("data-lang"));
  });

  /* ============ animated counter ============ */
  function mountCounters() {
    document.querySelectorAll(".num-counter").forEach(function (el) {
      if (el.dataset.mounted) return;
      el.dataset.mounted = "1";
      var target = parseInt(el.getAttribute("data-target"), 10);
      var suf = el.getAttribute("data-suf") || "";
      var started = false;
      function run() {
        if (started) return;
        started = true;
        var dur = 1300, t0 = performance.now();
        function tick(now) {
          var p = Math.min(1, (now - t0) / dur);
          var v = Math.round(target * (1 - Math.pow(1 - p, 3)));
          el.innerHTML = "<em>" + v + suf + "</em>";
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }
      function check() {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.85 && r.bottom > 0) { run(); window.removeEventListener("scroll", check); }
      }
      window.addEventListener("scroll", check, { passive: true });
      check();
      setTimeout(function () { if (!started) run(); }, 3000);
    });
  }

  /* ============ scroll: reveal + fam-pin + nav + parallax ============ */
  var raf = 0;
  function clamp(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function easeOut(p) { return 1 - Math.pow(1 - p, 2); }

  function check() {
    raf = 0;
    var vh = window.innerHeight;

    // nav scrolled state
    var nav = document.getElementById("nav");
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 24);

    // reveal
    document.querySelectorAll("[data-reveal]:not(.in)").forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < vh * 0.9 && r.bottom > 0) el.classList.add("in");
    });

    // pinned scroll-scrubbed sequence
    document.querySelectorAll("[data-fampin]").forEach(function (sec) {
      var r = sec.getBoundingClientRect();
      var dist = sec.offsetHeight - vh;
      var p = dist > 0 ? clamp(-r.top / dist) : 0;
      var slides = sec.querySelectorAll(".fam-slide");
      var n = slides.length;
      if (n === 0) return;
      var pos = p * (n - 1);
      var base = Math.min(n - 1, Math.floor(pos));
      var frac = pos - base;
      var HOLD = 0.68;
      var active = base;
      slides.forEach(function (sl, i) {
        var op = 0, y = 36;
        if (i === base) {
          if (frac <= HOLD) { op = 1; y = -frac * 14; }
          else { var tns = (frac - HOLD) / (1 - HOLD); op = 1 - tns; y = -tns * 60; }
        } else if (i === base + 1) {
          if (frac <= HOLD) { op = 0; y = 44; }
          else { var tns2 = (frac - HOLD) / (1 - HOLD); op = tns2; y = (1 - tns2) * 44; active = tns2 > 0.5 ? i : base; }
        }
        var bl = (1 - op) * 12;
        sl.style.opacity = op.toFixed(3);
        sl.style.transform = "translateY(calc(-50% + " + y.toFixed(1) + "px))";
        sl.style.filter = op > 0.02 ? "blur(" + bl.toFixed(1) + "px)" : "blur(7px)";
        sl.style.pointerEvents = op > 0.5 ? "auto" : "none";
      });
      var bar = sec.querySelector(".fam-progress i");
      if (bar) bar.style.width = (p * 100).toFixed(1) + "%";
      var cur = sec.querySelector(".fam-count .fc-cur");
      if (cur) cur.textContent = pad2(Math.min(n, active + 1));
    });

    // parallax
    document.querySelectorAll("[data-para]").forEach(function (el) {
      var speed = parseFloat(el.getAttribute("data-para")) || 0.12;
      var r = el.getBoundingClientRect();
      var center = r.top + r.height / 2 - vh / 2;
      el.style.transform = "translate3d(0," + (-center * speed).toFixed(1) + "px,0)";
    });
  }
  function onScroll() { if (!raf) raf = requestAnimationFrame(check); }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  /* ============ init ============ */
  document.addEventListener("DOMContentLoaded", function () {
    document.documentElement.classList.add("reveal-on");
    var yr = document.getElementById("year"); if (yr) yr.textContent = new Date().getFullYear();
    applyI18n();
    requestAnimationFrame(check);
    setTimeout(check, 250);
    setTimeout(function () {
      var vh = window.innerHeight;
      document.querySelectorAll("[data-reveal]:not(.in)").forEach(function (el) {
        if (el.getBoundingClientRect().top < vh) el.classList.add("in");
      });
    }, 1200);
  });
})();
