// Cloudflare Turnstile server-side verification.
//
// If PUBLIC_TURNSTILE_SITE_KEY / TURNSTILE_SECRET_KEY aren't set yet, this
// is a no-op that lets submissions through - so the forms keep working
// today, and CAPTCHA turns on automatically the moment both env vars are
// filled in (no other code changes needed). See README "CAPTCHA setup".
//
// Also validates the `action` and `hostname` Cloudflare echoes back in the
// siteverify response (per Cloudflare's recommended pattern) - this stops
// a token solved on a different action, or a different site entirely from
// being replayed against these forms.

import { SITE } from './site';

function allowedHostnames(): string[] {
  const hosts = [new URL(SITE.url).hostname];
  // Dev-only: Cloudflare explicitly warns never to allow these in production.
  if (import.meta.env.DEV) hosts.push('localhost', '127.0.0.1');
  return hosts;
}

export function isTurnstileConfigured(): boolean {
  return Boolean(import.meta.env.TURNSTILE_SECRET_KEY);
}

export async function verifyTurnstile(token: string | null, expectedAction: string, remoteIp?: string): Promise<boolean> {
  const secret = import.meta.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // not configured yet - don't block real users

  if (!token || token.length === 0 || token.length > 2048) return false;

  const body = new URLSearchParams();
  body.set('secret', secret);
  body.set('response', token);
  if (remoteIp) body.set('remoteip', remoteIp);

  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      signal: AbortSignal.timeout(10_000),
      body,
    });
    if (!res.ok) return false;
    const data = await res.json();

    if (!data.success) return false;
    if (data.action !== expectedAction) return false;
    if (!allowedHostnames().includes(data.hostname)) return false;

    return true;
  } catch (err) {
    console.error('Turnstile verification request failed:', err);
    return false;
  }
}
