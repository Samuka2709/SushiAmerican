/**
 * URLs de imagem do Unsplash (CDN imgix): recorte, AVIF/WebP automático e srcset.
 * Para usar fotos próprias, troque apenas esta função.
 */
export function photoUrl(id: string, w: number, ratio: number, q = 70) {
  const h = Math.round(w / ratio);
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&crop=entropy&w=${w}&h=${h}&q=${q}`;
}

export function photoSrcset(id: string, ratio: number, widths: number[]) {
  return widths.map((w) => `${photoUrl(id, w, ratio)} ${w}w`).join(', ');
}
