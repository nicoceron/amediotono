export const WHATSAPP_NUMBER = "573228725396";
export const WHATSAPP_DISPLAY = "+57 322 8725396";
export const INSTAGRAM_URL = "https://instagram.com/amediotonomusic";
export const TIKTOK_URL = "https://www.tiktok.com/@amediotonomusic";
export const CONTACT_EMAIL = "amediotonomusic@gmail.com";

/**
 * Other official profiles of the school (Google Business Profile, Facebook,
 * TikTok, YouTube, LinkedIn…). They go into the Organization `sameAs`, which
 * helps search and AI engines connect them to the website.
 */
export const OTHER_PROFILE_URLS: string[] = [TIKTOK_URL];

export function whatsappHref(message?: string) {
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${WHATSAPP_NUMBER}${encodedMessage}`;
}
