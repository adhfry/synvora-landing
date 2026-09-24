// Icons for HTML email.
//
// Font Awesome (loaded via <link rel="stylesheet">, as in the source
// templates) does not render in real email clients - Gmail strips <head>
// stylesheet/font links entirely, so the icon font never loads. Inline
// <svg> markup does not work either - Gmail's HTML sanitizer strips <svg>
// elements from the message body outright, which is why every icon badge
// rendered blank in testing. The only format that reliably survives real
// email clients is a plain raster <img>, so every icon here is a small
// pre-rendered PNG (public/icons/email/, generated at 3x pixel density for
// retina sharpness) served from the site's own domain - the same pattern
// already used for the Google Calendar icon.

function img(file: string, size: number, siteUrl: string): string {
  return `<img src="${siteUrl}/icons/email/${file}.png" width="${size}" height="${size}" alt="" style="display:block; width:${size}px; height:${size}px;">`;
}

export const icon = {
  calendar: (siteUrl: string, size: 16 | 18 | 20 = 18) => img(`calendar-${size}-blue`, size, siteUrl),
  calendarCheck: (siteUrl: string, size = 18) => img('calendarCheck-18-blue', size, siteUrl),
  clock: (siteUrl: string, size = 18) => img('clock-18-blue', size, siteUrl),
  user: (siteUrl: string, size = 20) => img('user-20-blue', size, siteUrl),
  envelope: (siteUrl: string, size = 14) => img('envelope-14-blue', size, siteUrl),
  phone: (siteUrl: string, size = 14) => img('phone-14-blue', size, siteUrl),
  tag: (siteUrl: string, size = 18) => img('tag-18-blue', size, siteUrl),
  commentDots: (siteUrl: string, size: 16 | 18 = 18) => img(`commentDots-${size}-blue`, size, siteUrl),
  video: (siteUrl: string, size = 18) => img('video-18-blue', size, siteUrl),
  users: (siteUrl: string, size = 18) => img('users-18-blue', size, siteUrl),
  check: (siteUrl: string, size = 20) => img('check-20-white', size, siteUrl),
  arrowRight: (siteUrl: string, size = 14) => img('arrowRight-14-gray', size, siteUrl),
  circleInfo: (siteUrl: string, size = 20) => img('circleInfo-20-blue', size, siteUrl),
  circleXmark: (siteUrl: string, size = 16) => img('circleXmark-16-red', size, siteUrl),
  headset: (siteUrl: string, size = 20) => img('headset-20-blue', size, siteUrl),
  quoteLeft: (siteUrl: string, size = 24) => img('quoteLeft-24-lightblue', size, siteUrl),
  globe: (siteUrl: string, size = 14) => img('globe-14-blue', size, siteUrl),
  linkedin: (siteUrl: string, size = 16) => img('linkedin-16-gray', size, siteUrl),
  instagram: (siteUrl: string, size = 16) => img('instagram-16-gray', size, siteUrl),
  github: (siteUrl: string, size = 16) => img('github-16-gray', size, siteUrl),
  // Real Google Calendar app icon asset (public/icons/Google_Calendar_icon.webp).
  googleCalendar: (siteUrl: string, size = 18) =>
    `<img src="${siteUrl}/icons/Google_Calendar_icon.webp" width="${size}" height="${size}" alt="" style="display:block; width:${size}px; height:${size}px;">`,
};
