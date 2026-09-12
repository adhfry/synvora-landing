# SYNVORA Teknologi Indonesia — Company Website

Official marketing website for **SYNVORA Teknologi Indonesia**, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). This project is a component-based migration of the original static HTML mockups into a maintainable, themeable Astro site.

## ✨ Features

- **8 fully migrated pages** — Beranda, Tentang Kami, Layanan, Portfolio, Karier, Blog, Hubungi Kami, dan Konsultasi Gratis, pixel-faithful to the original designs.
- **Shared layout system** — a single `Layout.astro` plus reusable `Navbar` and `Footer` components, each with active-link highlighting per page.
- **Light/Dark mode** — a persistent theme toggle (`localStorage`-backed) using Tailwind's `dark:` variant. Defaults to light mode on first visit, never inferred from OS preference.
- **Custom Tailwind design tokens** — `synvora-blue`, `synvora-cyan`, `synvora-purple`, and `synvora-dark` extracted from the brand logo, with `primary` / `secondary` mapped for convenience.
- **Animated hero slider** — a dependency-free, vanilla-JS image crossfade on the landing page hero, layered under the original navy/radial-gradient overlay for readability.
- **Static output** — builds to plain HTML/CSS/JS via `astro build`, ready for any static host.

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| [Astro](https://astro.build) | Static site generator / component framework |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling (via `@tailwindcss/vite`) |
| TypeScript | Type-checked component props & scripts |
| Font Awesome 6 | Iconography |
| Plus Jakarta Sans | Primary typeface (Google Fonts) |

## 📂 Project Structure

```
├── public/
│   ├── images/           # Logo, hero photos, portfolio/about assets
│   ├── icons/             # Favicons & app icons
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   └── HeroSlider.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   └── nav.ts          # Shared navigation items
│   ├── pages/
│   │   ├── index.astro          # Beranda
│   │   ├── tentang-kami.astro
│   │   ├── layanan.astro
│   │   ├── portfolio.astro
│   │   ├── karier.astro
│   │   ├── blog.astro
│   │   ├── hubungi-kami.astro
│   │   └── konsultasi-gratis.astro
│   └── styles/
│       └── global.css      # Tailwind entrypoint + shared brand utilities
├── astro.config.mjs
├── tailwind.config.mjs
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

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

### Production Build

```bash
npm run build
```

Static output is generated in `dist/`.

### Preview the Production Build

```bash
npm run preview
```

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
