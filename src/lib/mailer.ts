import nodemailer from 'nodemailer';
import { SITE } from './site';

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getTransporter() {
  if (transporter) return transporter;

  const host = import.meta.env.SMTP_HOST;
  const port = Number(import.meta.env.SMTP_PORT ?? 465);
  const user = import.meta.env.SMTP_USER;
  const pass = import.meta.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error('SMTP is not configured - set SMTP_HOST, SMTP_USER and SMTP_PASS in .env');
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
  return transporter;
}

export function getNotifyEmail(): string {
  const notify = import.meta.env.NOTIFY_EMAIL;
  if (!notify) throw new Error('NOTIFY_EMAIL is not configured in .env');
  return notify;
}

interface SendMailInput {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendMail({ to, subject, html, replyTo }: SendMailInput) {
  const t = getTransporter();
  await t.sendMail({
    from: `"${SITE.name}" <${import.meta.env.SMTP_USER}>`,
    to,
    subject,
    html,
    replyTo,
  });
}

// Shared wrapper so every outgoing email keeps the same header/footer look.
export function emailShell(bodyHtml: string): string {
  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1f2937;">
      <div style="background-color:#0A1128; padding: 24px 32px; border-radius: 12px 12px 0 0;">
        <span style="font-size: 20px; font-weight: 800; letter-spacing: 0.05em; color: #ffffff;">SYNVORA</span>
        <span style="font-size: 9px; letter-spacing: 0.2em; color: #9CA3AF; display:block; margin-top: -2px;">TEKNOLOGI INDONESIA</span>
      </div>
      <div style="background-color: #ffffff; padding: 32px; border: 1px solid #f3f4f6; border-top: none;">
        ${bodyHtml}
      </div>
      <div style="padding: 16px 32px; font-size: 11px; color: #9CA3AF; text-align: center;">
        ${SITE.name} &middot; ${SITE.address}<br />
        ${SITE.email} &middot; ${SITE.phoneDisplay}
      </div>
    </div>
  `;
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
