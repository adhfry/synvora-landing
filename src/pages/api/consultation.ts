import type { APIRoute } from 'astro';
import { sendMail, getNotifyEmail } from '../../lib/mailer';
import { adminConsultationEmail, userConsultationEmail } from '../../lib/emailTemplates';
import { verifyTurnstile } from '../../lib/turnstile';
import { hasSubmittedConsultation, recordConsultationSubmission } from '../../lib/consultationLimiter';
import { getClientIp } from '../../lib/clientIp';

export const prerender = false;

const QUOTA_MESSAGE =
  'Anda sudah pernah mengajukan konsultasi gratis sebelumnya. Untuk menjaga kualitas layanan, setiap pengguna hanya dapat mengajukan konsultasi gratis satu kali. Jika Anda serius ingin membangun kerja sama dengan kami, silakan hubungi kami langsung melalui halaman Hubungi Kami.';

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const ip = getClientIp(request, clientAddress);

    // One free consultation per IP - checked before touching anything else
    // so a repeat visitor gets a clean, specific message rather than
    // burning a Turnstile/SMTP round trip.
    if (hasSubmittedConsultation(ip)) {
      return json({ ok: false, limited: true, error: QUOTA_MESSAGE }, 429);
    }

    const data = await request.formData();

    // Honeypot - a real visitor never sees or fills this field.
    if (String(data.get('company_website') ?? '').trim() !== '') {
      return json({ ok: true });
    }

    const turnstileOk = await verifyTurnstile(data.get('cf-turnstile-response') as string | null, 'konsultasi-gratis', ip);
    if (!turnstileOk) {
      return json({ ok: false, error: 'Verifikasi keamanan gagal. Silakan coba lagi.' }, 400);
    }

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const whatsapp = String(data.get('whatsapp') ?? '').trim();
    const company = String(data.get('company') ?? '').trim();
    const needType = String(data.get('needType') ?? '').trim();
    const date = String(data.get('date') ?? '').trim();
    const time = String(data.get('time') ?? '').trim();
    const details = String(data.get('details') ?? '').trim();

    if (!name || !email || !whatsapp || !needType || !date || !time || !details) {
      return json({ ok: false, error: 'Mohon lengkapi semua kolom wajib.' }, 400);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ ok: false, error: 'Format email tidak valid.' }, 400);
    }

    const submittedAt = new Intl.DateTimeFormat('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Jakarta',
    }).format(new Date()) + ' WIB';

    const emailData = { name, email, whatsapp, company, needType, date, time, details, submittedAt };

    await sendMail({
      to: getNotifyEmail(),
      subject: `Janji konsultasi gratis baru dari ${name}`,
      replyTo: email,
      html: adminConsultationEmail(emailData),
    });

    await sendMail({
      to: email,
      subject: 'Konsultasi Gratis Anda telah kami terima - SYNVORA Teknologi Indonesia',
      html: userConsultationEmail(emailData),
    });

    recordConsultationSubmission(ip);

    return json({ ok: true });
  } catch (err) {
    console.error('consultation form error:', err);
    return json({ ok: false, error: 'Terjadi kesalahan. Silakan coba lagi nanti.' }, 500);
  }
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
