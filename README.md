# Shiori Sushi — site

Site de página única (Astro + GSAP + Lenis). Todo o HTML sai estático, com o cardápio em texto real.

## Trocar de cliente

Edite apenas `src/data/restaurant.ts`. Os valores marcados com `// DEMO` são de demonstração:
nome, WhatsApp, endereço, horários, pratos, preços, textos e fotos.

- `google: null` esconde a seção de avaliações. Preencha só com dados reais.
- Fotos: hoje são IDs de fotos gratuitas do Unsplash. Para usar fotos próprias, troque `src/lib/img.ts`.

Depois de trocar nome, frase ou foto do hero, gere de novo a imagem de compartilhamento e o favicon:

```
npm run og
```

## Comandos

```
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve dist/
```
