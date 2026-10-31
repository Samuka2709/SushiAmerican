import { restaurant, type Shift } from '../data/restaurant';

const eur = (v: number) =>
  new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: Number.isInteger(v) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(v);

/** 27.9 → "27,90 €", com espaço que não quebra */
export const price = (v: number) => eur(v).replace(/ /g, ' ');

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${restaurant.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const genericOrderMessage = () => `Buongiorno! Vorrei fare un ordine da ${restaurant.fullName}.`;

export const DAYS = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];

/** "19:00" → "19:00", "24:00" → "24:00" (formato italiano, 24 horas) */
export const hourLabel = (t: string) => t;

export const instagramUrl = () => `https://instagram.com/${restaurant.contact.instagram}`;

export function fullAddress() {
  const a = restaurant.contact.address;
  return `${a.street}, ${a.zip} ${a.city} ${a.state}`;
}

/** "12:00–15:00 · 19:00–23:30" */
export function rangeLabel(shifts: Shift[]) {
  return shifts.map((s) => `${s.open}–${s.close}`).join(' · ');
}
