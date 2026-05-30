/* ============ shared data + i18n ============ */

const ASSET = "https://quietstack.entropybreakers.com/assets/";

// i18n: L(en, de) makes a bilingual pair; t() resolves it against window.LANG
window.LANG = window.LANG || "en";
function L(en, de) { return { en: en, de: de }; }
function t(o) {
  if (o == null) return "";
  if (typeof o === "object" && ("en" in o)) return o[window.LANG] != null ? o[window.LANG] : o.en;
  return o;
}

// minimal stroke icons
function Ic({ d, paths }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {paths ? paths.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
    </svg>
  );
}

const PROBLEMS = [
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
         "Nichts bewegt sich, außer Sie bewegen es. Wachstum bringt keine Freiheit, es stapelt nur mehr auf Ihren Teller.") },
];

const QUIZ = [
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
         "Sehen Sie Umsatz, Pipeline und Kennzahlen live, ohne ein Spreadsheet zu bauen?") },
];

const STATS = [
  { n: "72", suf: "%", d: L("of organisations now use AI in at least one business function.", "der Unternehmen nutzen KI in mindestens einer Geschäftsfunktion."), s: "McKinsey · State of AI, 2024" },
  { n: "75", suf: "%", d: L("of knowledge workers already use AI in their daily work.", "der Wissensarbeiter nutzen KI bereits in ihrer täglichen Arbeit."), s: "Microsoft × LinkedIn · Work Trend Index, 2024" },
  { n: "14", suf: "%", d: L("average productivity gain from AI, measured in real workflows.", "durchschnittlicher Produktivitätsgewinn durch KI, gemessen in realen Workflows."), s: "Brynjolfsson, Li & Raymond · NBER, 2023" },
];

const TOOLS = ["Google Calendar","Gmail","Notion","Slack","Stripe","HubSpot","Calendly","Zapier","Airtable","WhatsApp","Make","ClickUp"];

const BEFORE = [
  L("Drowning in DMs and email", "Ertrinken in Nachrichten und E-Mails"),
  L("Onboarding every client by hand", "Jeden Kunden von Hand onboarden"),
  L("Repeating the same answers on loop", "Dieselben Antworten in Dauerschleife"),
  L("Delivery that depends on you for everything", "Eine Umsetzung, die an allem von Ihnen abhängt"),
  L("Leads going cold in your inbox", "Leads, die in Ihrem Postfach erkalten"),
];
const AFTER = [
  L("Enquiries qualified and answered automatically", "Anfragen automatisch qualifiziert und beantwortet"),
  L("A smooth, automated onboarding flow", "Ein reibungsloses, automatisiertes Onboarding"),
  L("Your expertise answering on autopilot", "Ihr Know-how antwortet auf Autopilot"),
  L("A premium, consistent client experience", "Ein hochwertiges, konstantes Kundenerlebnis"),
  L("A business that runs without you in every step", "Ein Business, das nicht bei jedem Schritt Sie braucht"),
];

const FIT_GOOD = [
  L("You're a coach, consultant or expert advisor with real, paying demand.", "Sie sind Coach, Berater oder Experte mit echter, zahlender Nachfrage."),
  L("You're losing 10+ hours a week to manual operations.", "Sie verlieren 10+ Stunden pro Woche an manuelle Abläufe."),
  L("You want a done-for-you system, not another course to grind through.", "Sie wollen ein fertiges System, keinen weiteren Kurs zum Durcharbeiten."),
  L("You're ready to invest in operations that compound over time.", "Sie sind bereit, in Abläufe zu investieren, die sich mit der Zeit auszahlen."),
];
const FIT_BAD = [
  L("You're pre-revenue or still validating the idea.", "Sie sind noch vor dem ersten Umsatz oder validieren die Idee noch."),
  L("You want to build and maintain everything yourself.", "Sie wollen alles selbst bauen und pflegen."),
  L("You're hunting for the cheapest possible option.", "Sie suchen die billigstmögliche Option."),
  L("You need it \"done by tomorrow\" with no discovery.", "Sie brauchen es \u201ebis morgen\u201c, ohne Analyse."),
];

const SERVICES = [
  { t: L("AI Client Onboarding", "KI-Kunden-Onboarding"), d: L("Automate qualification, intake and onboarding so every new client starts smoothly, without your manual work.", "Qualifizierung, Aufnahme und Onboarding automatisiert, damit jeder neue Kunde reibungslos startet, ohne Ihre Handarbeit."), i: ["M4 7h16M4 12h16M4 17h10"] },
  { t: L("AI Knowledge Assistant", "KI-Wissensassistent"), d: L("Train an AI on your own frameworks and methodology so your expertise answers clients around the clock.", "Eine KI, trainiert auf Ihre Frameworks und Methodik, Ihr Know-how antwortet rund um die Uhr."), i: ["M12 3a4 4 0 014 4v1a4 4 0 01-8 0V7a4 4 0 014-4z","M5 21v-1a7 7 0 0114 0v1"] },
  { t: L("AI Content Engine", "KI-Content-Engine"), d: L("Turn your calls, notes and ideas into ready-to-post content automatically, so you stay visible without the grind.", "Aus Calls, Notizen und Ideen automatisch fertigen Content, sichtbar bleiben ohne Mühsal."), i: ["M4 4h16v12H4z","M8 20h8M12 16v4"] },
  { t: L("AI Client Success System", "KI-Kundenerfolg-System"), d: L("Track clients, follow-ups and next actions so nothing slips and delivery stays consistently premium.", "Kunden, Follow-ups und nächste Schritte im Blick, nichts fällt durch, die Umsetzung bleibt konstant hochwertig."), i: ["M4 12l5 5L20 6"] },
  { t: L("AI Sales Assistant", "KI-Vertriebsassistent"), d: L("Nurture and qualify leads 24/7 so your pipeline keeps moving while you focus on delivery.", "Leads rund um die Uhr pflegen und qualifizieren, Ihre Pipeline läuft, während Sie liefern."), i: ["M3 12l18-7-7 18-3-7-8-4z"] },
  { t: L("AI Delivery Workflows", "KI-Delivery-Workflows"), d: L("Turn your repeatable processes and SOPs into systems that run themselves behind the scenes.", "Ihre wiederkehrenden Prozesse und SOPs werden zu Systemen, die im Hintergrund von selbst laufen."), i: ["M12 3v4M12 17v4M3 12h4M17 12h4","M12 9a3 3 0 100 6 3 3 0 000-6z"] },
];

const PROCESS = [
  { t: L("Audit", "Audit"), d: L("We start with a relaxed conversation. I get to know how you actually work, then map the bottlenecks and the exact gaps where your time and revenue quietly leak out.", "Wir starten mit einem entspannten Gespräch. Ich lerne kennen, wie Sie wirklich arbeiten, und kartiere dann die Engpässe und genau die Lücken, an denen Zeit und Umsatz leise verloren gehen.") },
  { t: L("System Design", "System-Design"), d: L("Then I design a practical automation structure around how your business really works, never a generic template. You see exactly what I'm building and why.", "Dann entwerfe ich eine praktische Automatisierungs-Struktur rund um Ihr echtes Geschäft, niemals eine Vorlage von der Stange. Sie sehen genau, was ich baue und warum.") },
  { t: L("Implementation", "Umsetzung"), d: L("I build the workflows into your own accounts, walk you through everything, and keep refining with you until they genuinely run on their own.", "Ich baue die Workflows in Ihre eigenen Accounts, führe Sie durch alles und verfeinere sie gemeinsam mit Ihnen, bis sie wirklich von selbst laufen.") },
];

const FAQS = [
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
         "Ich bringe es in Ordnung. Ich arbeite nicht nach dem Prinzip \u201eRechnung geschrieben, fertig\u201c. Ich verfeinere das System, bis es Ihrem Geschäft wirklich dient, genau deshalb starten wir mit einem unverbindlichen Gespräch.") },
  { q: L("How is this different from an AI course or agency?", "Wie unterscheidet sich das von einem KI-Kurs oder einer Agentur?"),
    a: L("A course teaches you to build it yourself. An agency rents you their stack. I build a system into your own accounts, hand it over so it stays yours, and keep operating it with you. You get the outcome without becoming a tech team.",
         "Ein Kurs bringt Ihnen bei, es selbst zu bauen. Eine Agentur vermietet Ihnen ihren Stack. Ich baue ein System in Ihre eigenen Accounts, übergebe es, sodass es Ihres bleibt, und betreibe es mit Ihnen weiter. Sie bekommen das Ergebnis, ohne ein Tech-Team zu werden.") },
];

const BRANDS = [
  { k: "Entropy Breakers",
    d: L("English tuition for Hungarian professionals, structured fluency from beginner through C1. Enquiries, qualification, onboarding and follow-up all run automatically; I only get a ping when a new student joins.",
         "Englischunterricht für ungarische Fachkräfte, strukturierte Fluency von Anfänger bis C1. Anfragen, Qualifizierung, Onboarding und Follow-up laufen automatisch; ich werde nur benachrichtigt, wenn ein neuer Schüler dazukommt."),
    href: "https://entropybreakers.com/", cta: L("Visit Entropy Breakers", "Entropy Breakers besuchen") },
  { k: "Get Client Ready",
    d: L("Business communication and identity shift for DACH entrepreneurs. Same setup: leads captured and qualified automatically, onboarding on autopilot, day-to-day running in the background.",
         "Business-Kommunikation und Identitäts-Shift für DACH-Unternehmer. Gleiches Setup: Leads automatisch erfasst und qualifiziert, Onboarding auf Autopilot, Tagesgeschäft im Hintergrund."),
    href: "https://getclientready.entropybreakers.com", cta: L("Visit Get Client Ready", "Get Client Ready besuchen") },
];

// UI strings
const UI = {
  navServices: L("Services", "Leistungen"),
  navProcess: L("How it works", "So funktioniert's"),
  navWhy: L("Why QuietStack", "Warum QuietStack"),
  navFaq: L("FAQ", "FAQ"),
  navCta: L("Book your audit", "Audit buchen"),
  bookAudit: L("Book your systems audit", "Systems-Audit buchen"),
  seeHow: L("See how it works", "So funktioniert's"),
  trust1: L("A personal reply from me within 24 hours", "Pers\u00f6nliche Antwort von mir in 24 Stunden"),
  trust2: L("EU-based · DSGVO-aligned", "EU-basiert · DSGVO-konform"),
  trust3: L("Built into your own accounts", "In Ihre eigenen Accounts gebaut"),
};

Object.assign(window, { ASSET, L, t, Ic, PROBLEMS, QUIZ, STATS, TOOLS, BEFORE, AFTER, FIT_GOOD, FIT_BAD, SERVICES, PROCESS, FAQS, BRANDS, UI });
