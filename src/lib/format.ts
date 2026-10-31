import { restaurant } from '../data/restaurant';

const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export const price = (v: number) => usd.format(v);

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${restaurant.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const genericOrderMessage = () => `Hi! I'd like to place an order at ${restaurant.fullName}.`;

export const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/** "18:00" → "6 PM", "18:30" → "6:30 PM", "12:00" → "Noon", "24:00" → "Midnight" */
export function hourLabel(t: string) {
  const [h, m] = t.split(':').map(Number);
  if (h % 24 === 0 && m === 0) return 'Midnight';
  if (h === 12 && m === 0) return 'Noon';
  const suffix = h % 24 >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  return m === 0 ? `${h12} ${suffix}` : `${h12}:${String(m).padStart(2, '0')} ${suffix}`;
}

export const instagramUrl = () => `https://instagram.com/${restaurant.contact.instagram}`;

export function fullAddress() {
  const a = restaurant.contact.address;
  return `${a.street}, ${a.city}, ${a.state} ${a.zip}`;
}

/** "5 PM – 10 PM" */
export function rangeLabel(h: { open: string; close: string }) {
  return `${hourLabel(h.open)} – ${hourLabel(h.close)}`;
}
