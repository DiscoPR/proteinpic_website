# Protein Pic

Marketing site for [Protein Pic](https://apps.apple.com/us/app/protein-pic/id6756505011), the iOS protein tracker. Snap a meal photo, get a protein estimate, hit one daily target.

This repo is the public site for [proteinpic.app](https://proteinpic.app). It is not the iOS app.

## Pages

- `/` landing page (App Store download, how it works, features)
- `/privacy` privacy policy linked from the App Store
- `/terms` terms of use linked from the App Store

## Run locally

Needs Node 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

No API keys, env files, or third-party accounts are required.

## Deploy to Vercel

Import this GitHub repo in Vercel. Framework: Next.js. Root: `.`. Build: `next build`. Env vars: none.

1. Open [vercel.com/new](https://vercel.com/new) and import `DiscoPR/proteinpic_website`.
2. Deploy. Confirm `/`, `/privacy`, and `/terms` on the `*.vercel.app` URL.
3. Then add `proteinpic.app` in Settings → Domains and update GoDaddy DNS.

## Point proteinpic.app at Vercel

Registrar: GoDaddy (`ns65.domaincontrol.com`, `ns66.domaincontrol.com`). Apex currently points at Replit/GCP (`34.111.179.208`) and returns 404.

1. Vercel Settings → Domains: add `proteinpic.app` and `www.proteinpic.app`.
2. GoDaddy DNS:
   - A `@` → `76.76.21.21` or the IP on the Vercel domain card. Delete `34.111.179.208`.
   - CNAME `www` → the CNAME Vercel shows.
3. If Vercel asks for a TXT (`_vercel`), add it.
4. Confirm https://proteinpic.app/privacy and https://proteinpic.app/terms.

## Product links

- App Store: https://apps.apple.com/us/app/protein-pic/id6756505011
- Seller: Kevin Andreosky
- Bundle ID (historical): `com.vibecode.proteinpic`
