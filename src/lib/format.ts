import { restaurant } from '../data/restaurant';

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

export const price = (v: number) => brl.format(v).replace(/ /g, ' ');

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${restaurant.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const orderMessage = (dish: string, value: number) =>
  `Olá! Gostaria de pedir: ${dish} (${price(value)}).`;

export const genericOrderMessage = () => `Olá! Gostaria de fazer um pedido no ${restaurant.fullName}.`;

export const DAYS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

/** "18:00" → "18h", "18:30" → "18h30" */
export function hourLabel(t: string) {
  const [h, m] = t.split(':');
  const hh = Number(h) % 24;
  return m === '00' ? `${hh}h` : `${hh}h${m}`;
}

export const instagramUrl = () => `https://instagram.com/${restaurant.contact.instagram}`;

export function fullAddress() {
  const a = restaurant.contact.address;
  return `${a.street} — ${a.district}, ${a.city} — ${a.state}`;
}

/** "18h às 23h" ou "18h à meia-noite" */
export function rangeLabel(h: { open: string; close: string }) {
  return h.close === '24:00' || h.close === '00:00'
    ? `${hourLabel(h.open)} à meia-noite`
    : `${hourLabel(h.open)} às ${hourLabel(h.close)}`;
}
