# SYNVORA Teknologi Indonesia — Company Website

Official marketing website for **SYNVORA Teknologi Indonesia**, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). This project is a component-based migration of the original static HTML mockups into a maintainable, themeable Astro site.

## ✨ Features

- **8 fully migrated pages** — Beranda, Tentang Kami, Layanan, Portfolio, Karier, Blog, Hubungi Kami, dan Konsultasi Gratis, pixel-faithful to the original designs.
- **Shared layout system** — a single `Layout.astro` plus reusable `Navbar` and `Footer` components, each with active-link highlighting per page.
- **Light/Dark mode** — a persistent theme toggle (`localStorage`-backed) using Tailwind's `dark:` variant. Defaults to light mode on first visit, never inferred from OS preference.
- **Custom Tailwind design tokens** — `synvora-blue`, `synvora-cyan`, `synvora-purple`, and `synvora-dark` extracted from the brand logo, with `primary` / `secondary` mapped for convenience.
- **Animated hero slider** — a dependency-free, vanilla-JS image crossfade on the landing page hero, layered under the original navy/radial-gradient overlay for readability.
- **Hybrid rendering** — all 8 marketing pages still prerender to static HTML at build time (fast, SEO-friendly); only the `/api/*` email endpoints run server-side via the Node adapter.
- **Working contact & consultation forms** — "Hubungi Kami" and "Konsultasi Gratis" send real email via Gmail SMTP, with a notification copy to the internal inbox and a confirmation copy to the submitter, plus honeypot spam protection.
- **Full SEO meta tags** — unique per-page descriptions, canonical links, Open Graph, and Twitter Card tags on every route.

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| [Astro](https://astro.build) | Component framework, hybrid static/server rendering |
| [@astrojs/node](https://docs.astro.build/en/guides/integrations-guide/node/) | Standalone Node server adapter (for `/api/*` routes) |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling (via `@tailwindcss/vite`) |
| [Nodemailer](https://nodemailer.com) | SMTP email sending for the contact/consultation forms |
| TypeScript | Type-checked component props & API routes |
| Font Awesome 6 | Iconography |
| Plus Jakarta Sans | Primary typeface (Google Fonts) |

## 📂 Project Structure

```
├── public/
│   ├── images/            # Logo, hero photos, portfolio/about assets
│   ├── icons/              # Favicons & app icons
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   └── HeroSlider.astro
│   ├── layouts/
│   │   └── Layout.astro    # Head/meta tags, theme init, Navbar+Footer shell
│   ├── lib/
│   │   ├── nav.ts          # Shared navigation items
│   │   ├── site.ts         # Site-wide contact info, social links, SEO defaults
│   │   └── mailer.ts       # Nodemailer transporter + email template helper
│   ├── pages/
│   │   ├── index.astro          # Beranda
│   │   ├── tentang-kami.astro
│   │   ├── layanan.astro
│   │   ├── portfolio.astro
│   │   ├── karier.astro
│   │   ├── blog.astro
│   │   ├── hubungi-kami.astro
│   │   ├── konsultasi-gratis.astro
│   │   └── api/
│   │       ├── contact.ts       # "Hubungi Kami" form handler
│   │       └── consultation.ts  # "Konsultasi Gratis" form handler
│   ├── styles/
│   │   └── global.css      # Tailwind entrypoint + shared brand utilities
│   └── env.d.ts             # TypeScript types for server env vars
├── astro.config.mjs
├── tailwind.config.mjs
├── .env.example              # Copy to .env and fill in real values
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 22.12.0`
- npm

### Installation

```bash
npm install
```

### Environment variables

Copy `.env.example` to `.env` and fill in real values (never commit `.env` — it's gitignored):

```bash
cp .env.example .env
```

| Variable | Purpose |
|---|---|
| `SMTP_HOST` / `SMTP_PORT` | SMTP server, e.g. `smtp.gmail.com` / `465` |
| `SMTP_USER` | The Gmail address emails are sent from |
| `SMTP_PASS` | A Google Account [App Password](https://myaccount.google.com/apppasswords) (not the login password - requires 2-Step Verification enabled) |
| `NOTIFY_EMAIL` | Internal inbox that receives new contact/consultation submissions |

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

### Production Build

```bash
npm run build
```

Static pages are output to `dist/client/`; the Node server entry (for `/api/*`) is output to `dist/server/entry.mjs`.

### Preview the Production Build (local)

```bash
npm run preview
```

### Run in Production (VPS)

```bash
npm run build
npm start
```

`npm start` runs `node ./dist/server/entry.mjs`. Configure `HOST` and `PORT` env vars as needed (defaults to `0.0.0.0:4321`), and put a reverse proxy (nginx/Caddy) in front for TLS. Run it under a process manager (e.g. `pm2`) so it survives reboots/crashes.

**Known gap:** consultation bookings are emailed but not yet auto-added to Google Calendar — a Gmail App Password can send mail but can't create Calendar events. That needs a separate Google Cloud OAuth2/Service Account credential with Calendar API access.

## 🎨 Design System

Brand colors are defined in `tailwind.config.mjs` and sourced from the SYNVORA logo gradient:

| Token | Hex | Usage |
|---|---|---|
| `synvora-blue` / `primary` | `#0066FF` | Primary accent, CTAs, links |
| `synvora-cyan` | `#22D3EE` | Secondary accent |
| `synvora-purple` / `secondary` | `#7C3AED` | Secondary accent |
| `synvora-dark` | `#0A1128` | Dark surfaces (navbar/footer in dark mode, hero backgrounds) |

## 📄 License

This project is proprietary to SYNVORA Teknologi Indonesia. All rights reserved.
