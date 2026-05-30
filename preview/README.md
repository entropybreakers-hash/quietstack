# Handoff: QuietStack Landing Page (dark, blue-accent, bilingual)

## Overview
QuietStack is a one-person consultancy (founder **Bettina Baranyi**, Innsbruck, Austria) selling
"operational AI systems" to coaches & consultants. This package is the marketing site:
a dark, premium, **Morningside-inspired** landing page plus a dedicated "Work With Us"
contact page, three legal pages (Imprint / Privacy / Terms), and a logo-concepts page.
Tone is warm, first-person ("I / Bettina"), confident but not aggressive. EN/DE bilingual.

## About the Design Files
The files in this bundle are **design references created in HTML/CSS + in-browser React (Babel)**.
They are working prototypes that show the intended look, copy, animation and behaviour — **not
production code to ship directly**. The task is to **recreate these designs in the target
codebase** using its established framework and patterns. If there is no codebase yet, the
recommended stack is **Next.js (React) + plain CSS or CSS Modules**, with the JSX split exactly
as it is here. Replace the in-browser Babel transform with a real build step, and self-host the
font (see Typography).

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, copy (EN+DE) and interactions are
all intended as shown. Recreate pixel-closely. The only deliberate placeholders are noted under
"Open items" below.

## Tech as-built (and how to port it)
- **Markup/logic:** React 18 via UMD + Babel-standalone in the browser. Components are plain
  `.jsx` files attached to `window`. In production, convert to ES modules / a bundler.
- **Styling:** a single `styles.css` using CSS custom properties (design tokens). Portable as-is.
- **i18n:** a tiny `L(en,de)` helper + `t()` resolver reading `window.LANG`; language persists in
  `localStorage` under key `qs_lang` and is shared across all pages. The static pages
  (work-with-us, legal) use a parallel `data-i18n` / `data-lang-block` vanilla-JS version.
- **Tweaks panel** (`tweaks-panel.jsx`): an in-prototype control panel (hero variant, accent,
  grain). **Dev/preview only — drop it from production.**

## Pages / Views

### 1. Landing — `QuietStack Landing.html` (+ app.jsx, hero.jsx, sections-a..d.jsx, data.jsx)
Single scroll page. Section order (top→bottom):
1. **Nav** (fixed) — Q logo + wordmark, links (Services / How it works / Why QuietStack / FAQ),
   EN·DE language switch, primary CTA "Book your audit". Transparent over hero; on scroll gets
   `background: color-mix(bg 78%, transparent)` + `backdrop-filter: blur(14px)` + bottom hairline.
2. **Hero** (variant "c" = default, "statement"): eyebrow → giant headline
   "You don't need / more leads. (struck-through, muted, blue underline) / You need systems." →
   **outcome highlight pill** ("Most clients free up **20–30 hours a week**, with the first systems
   working in days, not months.") → lead (first-person "I'm Bettina, …") → CTA row + trust line
   ("A personal reply from me within 24 hours · EU-based · DSGVO-aligned · Built into your own accounts").
   Two other hero variants exist (a = centered w/ portrait, b = split). Variant chosen in TWEAK_DEFAULTS.
3. **Marquee** — infinite-scroll row of tool names (Google Calendar, Gmail, Notion, …).
4. **"Sound familiar?" (#problems)** — **pinned/sticky scroll-scrubbed sequence**: section is tall
   (`100vh + N*70vh`); inner `.fam-pin` is `position:sticky;top:0;height:100vh`. As you scroll, 6
   problem statements cross-fade in place (dwell then crossfade) with a progress bar + "01 / 07"
   counter. Last "slide" is the punch line.
5. **Self-audit (#audit)** — 4 yes/no questions; a sticky side panel shows an estimated weekly
   "leak": `hours = noCount * 5` (so all-4-No = ~20 hrs/week, consistent with the hero claim), a
   progress bar, and a contextual message. No email required.
6. **By the numbers (#market)** — eyebrow + H2 "The market has already moved." + lead, then **3
   market-stat cards** (72% / 75% / 14%, each a count-up on scroll, with source line), then a
   bridge note, then the **outcome banner** as the climax: big gradient "20–30 hours / week" + body.
   (Order matters: proof first, personal outcome last.)
7. **Before / After (#shift)** — two columns, directional slide-in (left/right).
8. **Philosophy (#why)** — split: portrait (left, slides in) + text (right). First-person.
9. **About (#about)** — split: text + **+67% proof stat** card ("My own client base grew by
   two-thirds… less time on admin, not more") + portrait.
10. **Honest fit (#fit)** — two columns "Perfect fit" / "Probably not yet".
11. **Services (#services)** — 6 cards (icon, title, desc). No sub-lead under H2 (intentional whitespace).
12. **How it works (#process)** — **3 warm cards** (Audit / System Design / Implementation) with
    **animated blue→white gradient titles** (`procShimmer`, staggered delay), glowing numbered
    badges (01/02/03), a connecting dashed "journey" line behind them, hover glow + lift. **No
    sub-lead** under the H2 (intentional).
13. **Safe by design (#trust)** — 3 columns: Your accounts / Your data / Your IP (DSGVO).
14. **Why it's safe to start (#safe)** — 2 cards: (1) refined "My promise to you" (defined scope +
    a dedicated fine-tuning window; warm, non-defensive — NOT money-back, NOT endless free fixes),
    (2) "Founding clients" (scarcity).
15. **FAQ (#faq)** — accordion (first open by default). NOTE: items must NOT carry the scroll-reveal
    blur — answers must be visible immediately on click.
16. **Other brands (#brands)** — Entropy Breakers + Get Client Ready cards.
17. **Final CTA (#start)** — full-bleed statement "AI isn't coming. It's already running your
    competitors' back office." with spinning dashed rings + pulsing glow; CTA → work-with-us.html.
18. **Footer** — Q logo + tagline, link columns, legal links (Imprint / Privacy / Terms).

### 2. Work With Us — `work-with-us.html` (static, vanilla JS)
Dedicated audit/contact page (Morningside "/work-with-us" pattern): big headline + contact-info
list (Based in **Austria**, email, working with DACH & EU, response in 24h) on the left; a contact
**form** on the right. Form fields (mirrors Morningside's quote form, EUR-localised): First name,
Last name, Work email, Company, Company website, Your role, Company size, **Budget Range**
(Under €2,000 / €2,000–€5,000 / €5,000–€10,000 / €10,000+ / Still deciding), Tell us about your
project, consent checkbox → "Submit inquiry". On submit it shows a thank-you panel (no backend
wired — connect to email/CRM in production).

### 3. Legal — `imprint.html`, `privacy-policy.html`, `terms.html` (static, vanilla JS, EN/DE)
Match the landing theme (gradient H2s, dark cards, mono meta). Real Austrian data baked in:
Baranyi Bettina, Einzelunternehmerin · Kärntnerstraße 50, 6020 Innsbruck · Kleinunternehmer
(USt-befreit §6 Abs 1 Z 27 UStG) · Steuernummer 81 522/2377 · GISA 38640155 · §5 ECG/§25 MedienG;
Privacy is DSGVO-structured (controller, contact-form data, log files, no cookies/tracking, rights,
Austrian DSB); Terms is an Austrian service AGB. `<meta name="robots" content="noindex">` on all three.

### 4. Logo concepts — `logo-concepts.html`
Brand exploration: 6 SVG logo directions. **Chosen: concept 02 "Q-Node"** — a blue ring "Q" with a
small node tail. This is now the live mark everywhere (see Assets).

## Interactions & Behaviour
- **Scroll reveal:** elements with `[data-reveal]` start `opacity:0; translateY(46px) scale(.978);
  blur(12px)` and animate to neutral over `1s var(--ease)` when their top passes 90% viewport.
  Directional variants `[data-reveal-x="left|right"]` (±54px X). Stagger via `[data-reveal-d="1..5"]`
  (delay 0.09s steps). Driven by a rAF scroll handler (IntersectionObserver was unreliable in the
  prototype host — a scroll/raf loop is used instead; keep whichever your stack prefers).
- **Heading shimmer:** `.h2`, `.display`, pinned statements, process titles, outcome number use an
  animated blue→white gradient text fill (`background-clip:text` + moving `background-position`,
  keyframe `procShimmer`). NOTE: add `padding-right:~.16em` on clipped gradient text to avoid the
  last glyph being cut.
- **Pinned "Sound familiar?":** scroll progress `p = -rect.top / (sectionHeight - vh)`; slide index
  `= p*(n-1)`; each statement holds (HOLD=0.68 of its segment) then crossfades to the next; progress
  bar width = `p*100%`. Falls back to a stacked static list under `prefers-reduced-motion`.
- **Count-up stats:** animate 0→target over 1300ms (easeOutCubic) when scrolled into view.
- **Marquee:** CSS `@keyframes scrollx` translateX(-100%), paused on hover.
- **Ease:** `cubic-bezier(.2,.7,.2,1)` (token `--ease`).
- Respect `prefers-reduced-motion` (all reveals/shimmer/marquee disabled).

## State
- `lang` ('en'|'de') — persisted in `localStorage.qs_lang`, sets `window.LANG` + `<html lang>`,
  re-renders all `t()` strings. Shared across every page.
- Tweaks (`heroVariant`,`accent`,`grain`) — dev-only.
- Self-audit answers (`{index:'yes'|'no'}`), FAQ open index — local component state.
- Forms — local "sent" boolean only; **no backend** (wire up in production).

## Design Tokens (from styles.css `:root`)
Backgrounds: `--bg:#0a0b0e` (note: legal/OG canvas use the slightly cooler `#0a0c14`),
`--bg-2:#101218`, `--panel:#14161d`, `--panel-2:#181b23`.
Text: `--fg:#eef0f4`, `--fg-soft:#c4c8d2`, `--muted:#848a98`, `--muted-2:#5c616e`.
Lines: `--line:rgba(255,255,255,.08)`, `--line-2:rgba(255,255,255,.14)`.
Accent (single): `--accent:#4d7cfe`, `--accent-bright:#6b93ff`, `--accent-deep:#2f57d8`;
derived: `--accent-soft` (≈14% accent), `--accent-line` (≈38%), `--accent-glow` (≈45%).
Accent glow shadow: `0 0 50px rgba(77,124,254,.18)` (used on hover cards / highlights).
Radii: `--radius:18px`, `--radius-sm:12px`, cards ~16px. Max width `--maxw:1240px`,
gutter `clamp(20px,5vw,64px)`. Ease `--ease:cubic-bezier(.2,.7,.2,1)`.
Type scale: display `clamp(3rem,9vw,7.5rem)` (hero c), H2 `clamp(2.1rem,4.4vw,3.6rem)`,
H3 `clamp(1.3rem,2vw,1.7rem)`, body 17px/1.6, mono-meta ~12.5px uppercase tracked.

## Typography
- **Display + body:** `Schibsted Grotesk` (Google Fonts), weights used 400/500/600/700. Headings
  are deliberately **light** (display 500, H2 600) for the "expensive, airy" feel. (We trialled
  PP Neue Montreal — the true Morningside face — but it's commercial; Schibsted Grotesk is the free
  stand-in. If a licence exists, self-host PP Neue Montreal and swap the `--font-display/body` vars.)
- **Meta / eyebrows / tags / form-ish labels:** `IBM Plex Mono` 400/500 (`--font-mono`).
- Eyebrows: uppercase, `letter-spacing:.14–.16em`, muted, often prefixed with a small blue dot.

## Assets
- **Logo (Q-Node):** inline SVG, drawn as a CSS `background` data-URI on `.brand .mark` (ring
  `stroke #6b93ff`, node `fill #2f57d8`). Same shape used as the **favicon** (data-URI `<link
  rel="icon">` on every page) and redrawn on the share images. Recreate as a proper SVG component.
- **og-image.png** (1200×630 @2x) — social share image (hero headline, blue→white gradient, Q mark).
  Referenced via OG/Twitter meta in the landing + work-with-us `<head>`. Host at site root.
- **linkedin-banner.png** (1584×396 @2x) — LinkedIn profile banner (logo top-left, "AI isn't
  coming…", URL under the CTA, profile-photo-safe bottom-left). Marketing asset, not used on-site.
- **Photos:** Bettina's portraits are loaded from `https://quietstack.entropybreakers.com/assets/`
  (`bettina-hero-tight.webp`, `new-hero.webp`, `kivagyok.webp`). Keep those URLs or move into your asset pipeline.

## Open items (must address before launch)
1. **Privacy policy** has one placeholder: the **hosting provider** name + location — insert the real one.
2. **Imprint** assumes the trade wording "free trade — automatic data processing / IT" and authority
   "Stadtmagistrat Innsbruck" — confirm against the GISA extract.
3. **Legal review:** these pages are solid templates but were not lawyer-reviewed (Austrian/IT-Recht).
4. **Forms** have no backend — connect to email/CRM + spam protection.
5. Remove the **Tweaks panel** and the in-browser Babel transform; add a real build + self-hosted fonts.

## Files in this bundle
- `QuietStack Landing.html` + `app.jsx`, `hero.jsx`, `sections-a.jsx`, `sections-b.jsx`,
  `sections-c.jsx`, `sections-d.jsx`, `data.jsx` (all React/JSX), `tweaks-panel.jsx` (dev-only)
- `work-with-us.html`, `imprint.html`, `privacy-policy.html`, `terms.html`, `logo-concepts.html`
- `styles.css` (all shared styling + tokens)
- `og-image.png`, `linkedin-banner.png`
