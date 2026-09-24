// Resolves the real visitor IP even when the app sits behind a reverse
// proxy (nginx on the VPS) - clientAddress alone would report the proxy's
// own IP for every visitor once deployed, which would make any per-IP
// limiting apply to everyone at once instead of individually.
export function getClientIp(request: Request, fallback: string): string {
  const xff = request.headers.get('x-forwarded-for');
  if (xff) {
    const first = xff.split(',')[0]?.trim();
    if (first) return first;
  }
  return fallback;
}
