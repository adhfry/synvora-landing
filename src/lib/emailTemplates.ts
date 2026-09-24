// Faithful email-safe reproductions of template-email-konfirmasi-admin.html
// and template-email-konfirmasi-user.html.
//
// The source files load Tailwind via the browser-only CDN <script> and
// icons via a Font Awesome <link> stylesheet. Real email clients (Gmail
// most importantly, since both the sending account and the internal
// notification target are Gmail addresses) strip <script> tags and
// external stylesheet/font <link> tags entirely, so none of the Tailwind
// utility classes or FA glyphs would render as sent. Font Awesome is
// swapped for real <img> icons (see emailIcons.ts) and the CDN photo hero
// is kept as a real background-image.
//
// Every layout here is built with <table> instead of CSS flexbox. The
// Gmail mobile app (Android/iOS - a different rendering engine from Gmail
// webmail) has unreliable support for display:flex: icon circles centered
// via flex rendered the icon floating outside the circle, and flex-wrap
// two-column sections didn't stretch evenly. Tables with valign/align
// attributes are the bulletproof cross-client technique that has worked
// in every email client for 20+ years, so every piece of structural
// layout below (icon centering, label/value rows, multi-column sections,
// button rows) uses one.

import { SITE } from './site';
import { icon } from './emailIcons';

const PRIMARY = '#0066FF';
const DARK = '#0A1128';
const TINT = '#F0F7FF';
const TINT_BORDER = '#E0EFFF';
const FONT = "'Plus Jakarta Sans', 'Segoe UI', Arial, sans-serif";

const logoUrl = `${SITE.url}/images/logo/synvora-logo-email.png`;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
function nl2br(value: string): string {
  return escapeHtml(value).replace(/\n/g, '<br>');
}

function row(innerHtml: string, style = ''): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="${style}"><tr><td>${innerHtml}</td></tr></table>`;
}

// A circle of `bg` with `content` (an <img> or plain text) centered inside
// it via table valign/align - the technique that survives the Gmail
// mobile app, where flex centering did not.
function circle(content: string, size = 40, bg = TINT): string {
  return `<table role="presentation" width="${size}" height="${size}" cellpadding="0" cellspacing="0" style="width:${size}px; height:${size}px;"><tr><td width="${size}" height="${size}" align="center" valign="middle" style="width:${size}px; height:${size}px; border-radius:50%; background-color:${bg}; text-align:center; vertical-align:middle; line-height:0;">${content}</td></tr></table>`;
}

// Icon circle (fixed column) + arbitrary content, side by side. `valign`
// is "top" for label/value rows and "middle" for single-line headers.
function iconRow(iconHtml: string, iconSize: number, iconBg: string, contentHtml: string, opts: { gap?: number; valign?: 'top' | 'middle'; fullWidth?: boolean } = {}): string {
  const { gap = 16, valign = 'top', fullWidth = true } = opts;
  return `<table role="presentation" ${fullWidth ? 'width="100%"' : ''} cellpadding="0" cellspacing="0"><tr>
    <td width="${iconSize}" valign="${valign}" style="width:${iconSize}px; padding-right:${gap}px;">${circle(iconHtml, iconSize, iconBg)}</td>
    <td valign="${valign}">${contentHtml}</td>
  </tr></table>`;
}

function detailItem(iconHtml: string, label: string, value: string, marginBottom = 24): string {
  const content = `<div style="font-family:${FONT};">
    <div style="font-weight:700; color:#111827; font-size:14px; margin-bottom:2px;">${escapeHtml(label)}</div>
    <div style="color:#6B7280; font-size:12px; line-height:1.5;">${nl2br(value)}</div>
  </div>`;
  return `<div style="margin-bottom:${marginBottom}px;">${iconRow(iconHtml, 40, TINT, content)}</div>`;
}

function headerSection(rightHtml: string): string {
  return row(
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-family:${FONT};"><tr>
      <td valign="middle" style="padding:24px 32px;"><img src="${logoUrl}" alt="SYNVORA Teknologi Indonesia" height="56" style="height:56px; width:auto; display:block;"></td>
      <td valign="middle" align="right" style="padding:24px 32px; text-align:right;">${rightHtml}</td>
    </tr></table>`,
    'background-color:#ffffff;'
  );
}

function heroBand(bgImageUrl: string, kicker: string, titleHtml: string, subtitle: string): string {
  return row(`<div style="padding:0 32px 16px;">
    <div style="background-color:${DARK}; background-image:linear-gradient(to right, rgba(10,17,40,0.95) 0%, rgba(10,17,40,0.85) 50%, rgba(10,17,40,0.4) 100%), url('${bgImageUrl}'); background-size:cover; background-position:center; border-radius:16px; overflow:hidden; padding:40px 32px; font-family:${FONT};">
      <div style="max-width:400px;">
        <div style="font-size:11px; font-weight:700; letter-spacing:0.2em; color:#9CA3AF; text-transform:uppercase; margin-bottom:16px;">${escapeHtml(kicker)}</div>
        <h1 style="font-size:30px; font-weight:800; color:#ffffff; line-height:1.25; margin:0 0 16px;">${titleHtml}</h1>
        <p style="font-size:13px; color:#D1D5DB; line-height:1.6; margin:0;">${escapeHtml(subtitle)}</p>
      </div>
    </div>
  </div>`);
}

function card(innerHtml: string, topPadding = 0): string {
  return row(
    `<div style="padding:${topPadding}px 32px 0;"><div style="border:1px solid #E5E7EB; border-radius:16px; padding:28px; font-family:${FONT};">${innerHtml}</div></div>`
  );
}

function cardHeader(iconHtml: string, title: string): string {
  const content = `<div style="font-size:19px; font-weight:800; color:#111827;">${escapeHtml(title)}</div>`;
  return `<div style="margin-bottom:24px;">${iconRow(iconHtml, 44, TINT, content, { gap: 14, valign: 'middle', fullWidth: false })}</div>`;
}

// Two blocks side by side with a fixed split, used for every "info card +
// side badge" and "column A / column B" section. Falls back to a plain
// two-cell table row (no responsive stacking - tables don't reflow - but
// that matches what these sections already render as on a phone, just
// without the flex misalignment bugs).
function twoCol(leftHtml: string, rightHtml: string, opts: { leftWidth?: string; rightWidth?: string; gap?: number; divider?: boolean } = {}): string {
  const { leftWidth = '58%', rightWidth = '42%', gap = 24, divider = false } = opts;
  const rightStyle = `padding-left:${gap}px; ${divider ? 'border-left:1px solid #E5E7EB;' : ''}`;
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
    <td width="${leftWidth}" valign="top">${leftHtml}</td>
    <td width="${rightWidth}" valign="top" style="${rightStyle}">${rightHtml}</td>
  </tr></table>`;
}

function actionButtons(buttons: { label: string; href: string; leftIcon?: string; variant?: 'primary' | 'outline' | 'danger' }[]): string {
  const cells = buttons
    .map((b) => {
      const variant =
        b.variant === 'danger'
          ? `background-color:#ffffff; border:1px solid #D1D5DB; color:#EF4444;`
          : b.variant === 'outline'
          ? `background-color:#ffffff; border:1px solid #D1D5DB; color:${PRIMARY};`
          : `background-color:${PRIMARY}; color:#ffffff;`;
      const inner = `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;"><tr>
          ${b.leftIcon ? `<td valign="middle" style="padding-right:8px;">${b.leftIcon}</td>` : ''}
          <td valign="middle"><span style="font-family:${FONT}; font-size:13px; font-weight:600;">${escapeHtml(b.label)}</span></td>
        </tr></table>`;
      return `<td width="${Math.floor(100 / buttons.length)}%" style="padding:4px;"><a href="${b.href}" style="display:block; text-align:center; padding:14px 8px; border-radius:12px; text-decoration:none; ${variant}">${inner}</a></td>`;
    })
    .join('');
  return row(`<div style="padding:0 28px 32px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>${cells}</tr></table></div>`);
}

function footerSection(): string {
  const socialLinks = `<a href="${SITE.social.linkedin}" style="display:inline-block; margin-right:12px;">${icon.linkedin(SITE.url)}</a>
    <a href="${SITE.social.instagram}" style="display:inline-block; margin-right:12px;">${icon.instagram(SITE.url)}</a>
    <a href="${SITE.social.github}" style="display:inline-block;">${icon.github(SITE.url)}</a>`;

  const contactLine = (iconHtml: string, text: string) =>
    `<table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:8px;"><tr>
      <td valign="middle" style="padding-right:8px;">${iconHtml}</td>
      <td valign="middle" style="font-size:10px; color:#6B7280; font-family:${FONT};">${text}</td>
    </tr></table>`;

  return `${row(
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-family:${FONT};"><tr>
      <td width="45%" valign="top">
        <img src="${logoUrl}" alt="SYNVORA Teknologi Indonesia" height="46" style="height:46px; width:auto; display:block; margin-bottom:12px;">
        <p style="font-size:10px; color:#6B7280; line-height:1.6; margin:0;">Teknologi yang menyatukan, menginspirasi, dan menciptakan masa depan yang lebih baik.</p>
      </td>
      <td width="25%" valign="top">
        <div style="font-weight:700; color:#111827; font-size:11px; margin-bottom:14px;">Ikuti Kami</div>
        <div>${socialLinks}</div>
      </td>
      <td width="30%" valign="top">
        <div style="font-weight:700; color:#111827; font-size:11px; margin-bottom:14px;">Kontak</div>
        ${contactLine(icon.envelope(SITE.url), escapeHtml(SITE.email))}
        ${contactLine(icon.phone(SITE.url), escapeHtml(SITE.phoneDisplay))}
        ${contactLine(icon.globe(SITE.url), SITE.url.replace(/^https?:\/\//, ''))}
      </td>
    </tr></table>`,
    `padding:40px 32px; background-color:#F9FAFB; border-top:1px solid #E5E7EB;`
  )}
  ${row(
    `<div style="font-family:${FONT};"><div style="font-size:9px; color:#9CA3AF;">&copy; 2026 SYNVORA Teknologi Indonesia. All rights reserved.</div></div>`,
    `padding:20px 32px; background-color:#F9FAFB; border-top:1px solid #E5E7EB;`
  )}`;
}

function shell(innerHtml: string): string {
  return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body style="margin:0; padding:32px 16px; background-color:#F8FAFC; font-family:${FONT};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
    <table role="presentation" width="800" cellpadding="0" cellspacing="0" style="width:100%; max-width:800px; background-color:#ffffff; border-radius:16px; overflow:hidden; border:1px solid #F3F4F6; box-shadow:0 20px 40px rgba(10,17,40,0.08);">
      <tr><td>${innerHtml}</td></tr>
    </table>
  </td></tr></table>
</body>
</html>`;
}

export interface ConsultationEmailData {
  name: string;
  email: string;
  whatsapp: string;
  company: string;
  needType: string;
  date: string;
  time: string;
  details: string;
  submittedAt: string;
}

export function adminConsultationEmail(d: ConsultationEmailData): string {
  const infoRows = [
    ['Nama Lengkap', d.name],
    ['Email', d.email],
    ['WhatsApp', d.whatsapp],
    ['Perusahaan / Instansi', d.company || '-'],
  ]
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding-bottom:16px; width:40%; vertical-align:top; font-size:13px; color:#6B7280; font-family:${FONT};">${escapeHtml(label)}</td>
          <td style="padding-bottom:16px; vertical-align:top; font-size:13px; font-weight:600; color:#111827; font-family:${FONT};">${escapeHtml(value)}</td>
        </tr>`
    )
    .join('');

  const submittedBadge = `<div style="background-color:${TINT}; border:1px solid ${TINT_BORDER}; border-radius:12px; padding:16px;">${iconRow(
    icon.calendar(SITE.url, 18),
    40,
    '#ffffff',
    `<div style="font-family:${FONT}; font-weight:700; font-size:13px; color:#111827;">${escapeHtml(d.submittedAt)}</div>`,
    { valign: 'top' }
  )}</div>`;

  const body = `
    ${headerSection(
      `<div style="font-size:13px; font-weight:600; color:#1F2937; line-height:1.4;">Solusi Teknologi untuk<br>Masa Depan yang Lebih Baik.</div>`
    )}
    ${heroBand(
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
      'Notifikasi Baru',
      `Ada Jadwal<br><span style="color:${PRIMARY};">Konsultasi Baru!</span>`,
      'Seseorang telah menjadwalkan sesi konsultasi gratis dengan SYNVORA.'
    )}

    ${row(
      `<div style="font-family:${FONT};">${twoCol(
        `<h2 style="font-size:22px; font-weight:800; color:#111827; margin:0 0 8px;">Halo Tim SYNVORA,</h2>
        <p style="font-size:13px; color:#4B5563; line-height:1.6; margin:0;">Anda mendapatkan jadwal konsultasi gratis baru. Berikut detail lengkapnya:</p>`,
        submittedBadge,
        { leftWidth: '60%', rightWidth: '40%' }
      )}</div>`,
      'padding:32px 32px 0;'
    )}

    ${card(`${cardHeader(icon.user(SITE.url, 20), 'Informasi Pemohon')}<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${infoRows}</table>`, 32)}

    ${card(
      `${cardHeader(icon.calendar(SITE.url, 20), 'Detail Konsultasi')}
      ${detailItem(icon.calendar(SITE.url, 18), 'Tanggal & Waktu', `${d.date}, ${d.time}`)}
      ${detailItem(icon.tag(SITE.url, 18), 'Jenis Kebutuhan', d.needType)}
      ${detailItem(icon.commentDots(SITE.url, 18), 'Kebutuhan yang Dijelaskan', d.details, 0)}`,
      20
    )}

    ${row(
      `<div style="background-color:${TINT}; border-radius:16px; padding:20px 24px;">${iconRow(
        icon.circleInfo(SITE.url, 20),
        40,
        '#ffffff',
        `<div style="font-family:${FONT};"><div style="font-weight:700; font-size:13px; color:#111827; margin-bottom:2px;">Tindak Lanjut</div><div style="font-size:11px; color:#6B7280; line-height:1.5;">Segera konfirmasi ketersediaan tim dan persiapkan materi yang relevan untuk sesi konsultasi. Jadwal ini belum otomatis masuk ke Google Calendar - tambahkan secara manual.</div></div>`
      )}</div>`,
      'padding:24px 32px 0;'
    )}

    ${actionButtons([
      { label: 'Tambahkan ke Google Calendar', href: '#', leftIcon: icon.googleCalendar(SITE.url, 18) },
      { label: 'Balas Email Pemohon', href: `mailto:${d.email}`, variant: 'outline', leftIcon: icon.commentDots(SITE.url, 16) },
    ])
      .replace('padding:0 28px 32px;', 'padding:24px 28px 32px;')}

    ${footerSection()}
  `;

  return shell(body);
}

export function userConsultationEmail(d: ConsultationEmailData): string {
  const steps: [string, string][] = [
    ['Tim kami meninjau informasi Anda', 'Maksimal 1x24 jam'],
    ['Kami mengirimkan detail akses meeting', 'Melalui email dan WhatsApp'],
    ['Sesi konsultasi dilaksanakan', 'Sesuai jadwal yang dipilih'],
    ['Bersama, kita temukan solusi terbaik', 'Untuk kebutuhan Anda'],
  ];

  const stepCells = steps
    .map(([title, note], i) => {
      const isLast = i === steps.length - 1;
      const badge = isLast
        ? circle(icon.check(SITE.url, 20), 48, PRIMARY)
        : circle(`<span style="font-size:18px; font-weight:800; color:${PRIMARY}; font-family:${FONT};">${i + 1}</span>`, 48, '#E0EFFF');
      return `<td width="22%" align="center" valign="top" style="font-family:${FONT};">
          <div style="margin:0 auto 16px;">${badge}</div>
          <div style="font-weight:700; font-size:11px; color:#111827; margin-bottom:4px; padding:0 6px;">${escapeHtml(title)}</div>
          <div style="font-size:10px; color:#6B7280;">${escapeHtml(note)}</div>
        </td>${!isLast ? `<td width="4%" align="center" valign="top" style="padding-top:16px;">${icon.arrowRight(SITE.url, 14)}</td>` : ''}`;
    })
    .join('');

  const confirmBadge = `<div style="background-color:${TINT}; border:1px solid ${TINT_BORDER}; border-radius:12px; padding:16px;">${iconRow(
    icon.calendarCheck(SITE.url, 18),
    40,
    '#ffffff',
    `<div style="font-family:${FONT};"><div style="font-weight:700; font-size:13px; color:#111827; margin-bottom:2px;">Permintaan Anda Telah Dikonfirmasi</div><div style="font-size:11px; color:#6B7280; line-height:1.4;">Kami akan segera menghubungi Anda jika ada penyesuaian jadwal.</div></div>`,
    { valign: 'top' }
  )}</div>`;

  const body = `
    ${headerSection(
      `<div style="font-size:13px; font-weight:600; color:#1F2937; margin-bottom:6px;">Built for a Better Tomorrow</div>
       <div style="width:56px; height:2px; background-color:${PRIMARY}; margin-left:auto;"></div>`
    )}
    ${heroBand(
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
      'Konsultasi Gratis',
      `Terima Kasih<br><span style="color:${PRIMARY};">Telah Menghubungi Kami!</span>`,
      'Permintaan konsultasi gratis Anda telah berhasil kami terima. Tim kami akan mempersiapkan diri untuk memberikan solusi terbaik sesuai kebutuhan Anda.'
    )}

    ${row(
      `<div style="font-family:${FONT};">${twoCol(
        `<h2 style="font-size:22px; font-weight:800; color:#111827; margin:0 0 8px;">Halo ${escapeHtml(d.name)},</h2>
        <p style="font-size:13px; color:#4B5563; line-height:1.6; margin:0;">Terima kasih telah menjadwalkan sesi konsultasi gratis bersama SYNVORA. Kami sangat antusias untuk berdiskusi dengan Anda dan membantu menemukan solusi teknologi yang tepat untuk kebutuhan Anda.</p>`,
        confirmBadge,
        { leftWidth: '58%', rightWidth: '42%' }
      )}</div>`,
      'padding:32px 32px 0;'
    )}

    ${card(
      `${cardHeader(icon.calendar(SITE.url, 20), 'Detail Konsultasi')}
      ${twoCol(
        `${detailItem(icon.calendar(SITE.url, 18), 'Tanggal', d.date)}
        ${detailItem(icon.clock(SITE.url, 18), 'Waktu', d.time)}
        ${detailItem(icon.tag(SITE.url, 18), 'Jenis Konsultasi', d.needType)}
        ${detailItem(icon.commentDots(SITE.url, 18), 'Catatan Anda', d.details, 0)}`,
        `${detailItem(icon.video(SITE.url, 18), 'Metode', 'Google Meet (tautan akan dikirim H-1)')}
        ${detailItem(icon.users(SITE.url, 18), 'Bersama', 'Tim Konsultan SYNVORA', 0)}`,
        { leftWidth: '55%', rightWidth: '45%', divider: true }
      )}`,
      32
    )}

    ${actionButtons([
      { label: 'Tambahkan ke Google Calendar', href: '#', leftIcon: icon.googleCalendar(SITE.url, 18) },
      { label: 'Ubah Jadwal', href: `mailto:${SITE.email}`, variant: 'outline', leftIcon: icon.calendar(SITE.url, 16) },
      { label: 'Batalkan Konsultasi', href: `mailto:${SITE.email}`, variant: 'danger', leftIcon: icon.circleXmark(SITE.url, 16) },
    ])
      .replace('padding:0 28px 32px;', 'padding:24px 28px 32px;')}

    ${row(
      `<div style="background-color:#F8FAFC; border:1px solid #F3F4F6; border-radius:16px; padding:32px;">
        <div style="font-family:${FONT}; font-size:16px; font-weight:800; color:#111827; margin-bottom:28px;">Apa yang Terjadi Selanjutnya?</div>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>${stepCells}</tr></table>
      </div>`,
      'padding:0 32px 32px;'
    )}

    ${row(
      `<div style="background-color:${TINT}; border-radius:16px; padding:24px;">${twoCol(
        `<table role="presentation" cellpadding="0" cellspacing="0"><tr>
          <td valign="middle" style="padding-right:14px;">${circle(icon.headset(SITE.url, 20), 44, '#ffffff')}</td>
          <td valign="middle" style="font-family:${FONT};">
            <div style="font-weight:700; font-size:13px; color:#111827; margin-bottom:2px;">Butuh bantuan?</div>
            <div style="font-size:11px; color:#6B7280;">Jika ada pertanyaan atau ingin mengubah jadwal, jangan ragu untuk menghubungi kami.</div>
          </td>
        </tr></table>`,
        `<div style="text-align:right;"><a href="${SITE.url}/hubungi-kami" style="display:inline-block; padding:10px 20px; border-radius:999px; background-color:#ffffff; border:1px solid ${PRIMARY}; color:${PRIMARY}; font-family:${FONT}; font-size:12px; font-weight:600; text-decoration:none;">Hubungi Kami</a></div>`,
        { leftWidth: '65%', rightWidth: '35%' }
      )}</div>`,
      'padding:0 32px 32px;'
    )}

    ${row(`<div style="font-family:${FONT};">${twoCol(
      `<div style="font-size:17px; font-weight:800; color:#111827; margin-bottom:12px;">Sampai jumpa di sesi konsultasi!</div>
      <div style="font-size:13px; color:#4B5563; margin-bottom:2px;">Salam hangat,</div>
      <div style="font-size:13px; font-weight:700; color:#111827;">Tim SYNVORA Teknologi Indonesia</div>`,
      `${icon.quoteLeft(SITE.url, 24)}
      <p style="font-size:12px; color:#6B7280; font-style:italic; margin:8px 0 0;">Setiap percakapan adalah langkah awal menuju solusi yang lebih baik.</p>`,
      { leftWidth: '55%', rightWidth: '45%', divider: true }
    )}</div>`, 'padding:0 32px 40px;')}

    ${footerSection()}
  `;

  return shell(body);
}
