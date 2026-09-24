import type { APIRoute } from 'astro';
import { blogPosts } from '../../data/blogPosts';
import { getViewCount, recordView } from '../../lib/blogViewCounter';
import { getClientIp } from '../../lib/clientIp';

export const prerender = false;

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function isValidSlug(slug: unknown): slug is string {
  return typeof slug === 'string' && blogPosts.some((p) => p.slug === slug);
}

export const GET: APIRoute = async ({ url }) => {
  const slug = url.searchParams.get('slug');
  if (!isValidSlug(slug)) {
    return json({ error: 'slug tidak valid' }, 400);
  }
  return json({ count: getViewCount(slug) });
};

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let slug: unknown;
  try {
    const body = await request.json();
    slug = body?.slug;
  } catch {
    return json({ error: 'body tidak valid' }, 400);
  }
  if (!isValidSlug(slug)) {
    return json({ error: 'slug tidak valid' }, 400);
  }
  const ip = getClientIp(request, clientAddress);
  return json({ count: recordView(slug, ip) });
};
