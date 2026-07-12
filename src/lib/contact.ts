export const WHATSAPP_NUMBER = "573132340197";
export const WHATSAPP_DISPLAY = "+57 313 2340197";
export const INSTAGRAM_URL = "https://instagram.com/amediotonomusic";
export const CONTACT_EMAIL = "amediotonomusic@gmail.com";

export function whatsappHref(message?: string) {
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${WHATSAPP_NUMBER}${encodedMessage}`;
}
