import type { APIRoute } from 'astro';
import { blogPosts } from '../../data/blogPosts';
import { getComments, getRatingSummary, addComment, addReply, commentExists } from '../../lib/commentStore';
import { getClientIp } from '../../lib/clientIp';

export const prerender = false;

const MAX_NAME = 60;
const MAX_TEXT = 1000;
// Lightweight anti-spam: one submission per IP every 20 seconds. This is an
// in-memory map, so it resets on deploy/restart - fine for deterring bots,
// not meant as a hard security boundary (this endpoint has no real damage
// potential beyond spam text, same trust level as the comment box itself).
const RATE_LIMIT_MS = 20_000;
const lastSubmission = new Map<string, number>();

function isValidSlug(slug: unknown): slug is string {
  return typeof slug === 'string' && blogPosts.some((p) => p.slug === slug);
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const GET: APIRoute = async ({ url }) => {
  const slug = url.searchParams.get('slug');
  if (!isValidSlug(slug)) {
    return json({ error: 'slug tidak valid' }, 400);
  }
  return json({ comments: getComments(slug), summary: getRatingSummary(slug) });
};

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return json({ ok: false, error: 'Data tidak valid.' }, 400);
    }

    const { slug, name, text, rating, parentId, website } = body as Record<string, unknown>;

    // Honeypot - real visitors never see or fill this field.
    if (typeof website === 'string' && website.trim() !== '') {
      return json({ ok: true });
    }

    if (!isValidSlug(slug)) {
      return json({ ok: false, error: 'Artikel tidak ditemukan.' }, 400);
    }

    const cleanName = String(name ?? '').trim().slice(0, MAX_NAME);
    const cleanText = String(text ?? '').trim().slice(0, MAX_TEXT);
    if (!cleanName || !cleanText) {
      return json({ ok: false, error: 'Nama dan komentar wajib diisi.' }, 400);
    }

    const ip = getClientIp(request, clientAddress);
    const last = lastSubmission.get(ip) ?? 0;
    if (Date.now() - last < RATE_LIMIT_MS) {
      return json({ ok: false, error: 'Terlalu cepat, coba lagi sebentar lagi ya.' }, 429);
    }

    if (parentId != null) {
      const parentIdStr = String(parentId);
      if (!commentExists(slug, parentIdStr)) {
        return json({ ok: false, error: 'Komentar yang dibalas tidak ditemukan.' }, 404);
      }
      lastSubmission.set(ip, Date.now());
      const reply = addReply(slug, parentIdStr, { name: cleanName, text: cleanText });
      return json({ ok: true, reply, parentId: parentIdStr });
    }

    const ratingNum = typeof rating === 'number' && rating >= 1 && rating <= 5 ? Math.round(rating) : undefined;
    lastSubmission.set(ip, Date.now());
    const comment = addComment(slug, { name: cleanName, text: cleanText, rating: ratingNum });
    return json({ ok: true, comment });
  } catch (err) {
    console.error('comment submission error:', err);
    return json({ ok: false, error: 'Terjadi kesalahan. Silakan coba lagi nanti.' }, 500);
  }
};
