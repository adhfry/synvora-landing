/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SMTP_HOST: string;
  readonly SMTP_PORT: string;
  readonly SMTP_USER: string;
  readonly SMTP_PASS: string;
  readonly NOTIFY_EMAIL: string;
  // Cloudflare Turnstile CAPTCHA - optional. Forms work without it (no-op
  // verification); set both to turn CAPTCHA on. Site key is intentionally
  // PUBLIC_-prefixed so Vite exposes it to the browser widget - it's not
  // secret, only the secret key is.
  readonly PUBLIC_TURNSTILE_SITE_KEY: string;
  readonly TURNSTILE_SECRET_KEY: string;
  // Google Analytics 4 - optional. Leave unset and no analytics script
  // loads at all. Format: "G-XXXXXXXXXX".
  readonly PUBLIC_GA_MEASUREMENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
