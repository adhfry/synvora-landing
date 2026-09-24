import type { APIRoute } from 'astro';
import { sendMail, getNotifyEmail, emailShell, escapeHtml } from '../../lib/mailer';
import { verifyTurnstile } from '../../lib/turnstile';
import { getClientIp } from '../../lib/clientIp';

export const prerender = false;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const data = await request.formData();

    // Honeypot - a real visitor never sees or fills this field.
    if (String(data.get('company_website') ?? '').trim() !== '') {
      return json({ ok: true });
    }

    const ip = getClientIp(request, clientAddress);
    const turnstileOk = await verifyTurnstile(data.get('cf-turnstile-response') as string | null, 'hubungi-kami', ip);
    if (!turnstileOk) {
      return json({ ok: false, error: 'Verifikasi keamanan gagal. Silakan coba lagi.' }, 400);
    }

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const whatsapp = String(data.get('whatsapp') ?? '').trim();
    const company = String(data.get('company') ?? '').trim();
    const topic = String(data.get('topic') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!name || !email || !whatsapp || !topic || !message) {
      return json({ ok: false, error: 'Mohon lengkapi semua kolom wajib.' }, 400);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ ok: false, error: 'Format email tidak valid.' }, 400);
    }

    const rows = [
      ['Nama', name],
      ['Email', email],
      ['WhatsApp', whatsapp],
      ['Perusahaan / Instansi', company || '-'],
      ['Topik', topic],
    ];

    const rowsHtml = rows
      .map(
        ([label, value]) =>
          `<tr><td style="padding:6px 12px 6px 0; color:#6b7280; font-size:13px; white-space:nowrap; vertical-align:top;">${escapeHtml(label)}</td><td style="padding:6px 0; font-size:13px; color:#111827;">${escapeHtml(value)}</td></tr>`
      )
      .join('');

    await sendMail({
      to: getNotifyEmail(),
      subject: `Pesan baru dari ${name} - Formulir Hubungi Kami`,
      replyTo: email,
      html: emailShell(`
        <h2 style="margin:0 0 16px; font-size:18px; color:#0A1128;">Pesan Baru dari Formulir Hubungi Kami</h2>
        <table style="width:100%; border-collapse:collapse; margin-bottom:20px;">${rowsHtml}</table>
        <div style="font-size:13px; color:#6b7280; margin-bottom:4px;">Pesan:</div>
        <div style="font-size:14px; color:#111827; white-space:pre-wrap; background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:12px;">${escapeHtml(message)}</div>
      `),
    });

    await sendMail({
      to: email,
      subject: 'Terima kasih telah menghubungi SYNVORA Teknologi Indonesia',
      html: emailShell(`
        <h2 style="margin:0 0 16px; font-size:18px; color:#0A1128;">Halo ${escapeHtml(name)},</h2>
        <p style="font-size:14px; line-height:1.6; color:#374151;">
          Terima kasih telah menghubungi SYNVORA Teknologi Indonesia. Pesan Anda mengenai
          <strong>${escapeHtml(topic)}</strong> telah kami terima, dan tim kami akan segera
          menghubungi Anda kembali melalui email atau WhatsApp.
        </p>
        <p style="font-size:14px; line-height:1.6; color:#374151;">Salam hangat,<br />Tim SYNVORA Teknologi Indonesia</p>
      `),
    });

    return json({ ok: true });
  } catch (err) {
    console.error('contact form error:', err);
    return json({ ok: false, error: 'Terjadi kesalahan. Silakan coba lagi nanti.' }, 500);
  }
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
