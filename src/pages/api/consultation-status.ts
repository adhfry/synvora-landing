import type { APIRoute } from 'astro';
import { hasSubmittedConsultation } from '../../lib/consultationLimiter';
import { getClientIp } from '../../lib/clientIp';

export const prerender = false;

export const GET: APIRoute = async ({ request, clientAddress }) => {
  const ip = getClientIp(request, clientAddress);
  const limited = hasSubmittedConsultation(ip);
  return new Response(JSON.stringify({ limited }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
