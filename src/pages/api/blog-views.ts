import type { APIRoute } from 'astro';
import { getAllViewCounts } from '../../lib/blogViewCounter';

export const prerender = false;

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ counts: getAllViewCounts() }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
