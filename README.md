# QuietStack

AI-alapú DFY (Done For You) rendszerek landing oldala — magyar piac.

Élő cím: **https://quietstack.entropybreakers.com**

## Hosting

Statikus oldal GitHub Pages-en.

- `index.html` — a teljes landing oldal (önálló, külső függőség nélkül)
- `CNAME` — az egyedi domaint köti a GitHub Pages-hez (`quietstack.entropybreakers.com`)

## Élesítés

1. GitHub repó → **Settings → Pages**
2. *Source*: `Deploy from a branch`, ág: `main`, mappa: `/ (root)`
3. A `CNAME` fájl miatt a *Custom domain* automatikusan `quietstack.entropybreakers.com` lesz
4. A Squarespace DNS-ben egy `CNAME` rekord: `quietstack` → `entropybreakers-hash.github.io`
5. A DNS terjedése után a GitHub Pages-en kapcsold be az *Enforce HTTPS* opciót
