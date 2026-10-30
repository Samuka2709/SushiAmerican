/**
 * Arquivo único de configuração do site.
 * Todo texto comercial, contato, horário, preço e foto vem daqui.
 * Para trocar de cliente, edite somente este arquivo.
 *
 * Valores marcados com // DEMO são dados de demonstração e devem ser
 * substituídos pelos dados reais do cliente antes de publicar.
 *
 * Fotos: IDs de fotos gratuitas do Unsplash (https://unsplash.com/photos/...).
 * Troque pelo ID de outra foto do Unsplash ou adapte `src/lib/img.ts`
 * para apontar para as fotos próprias do restaurante.
 */

export type Tag = 'Mais pedido' | 'Novo' | 'Picante' | 'Vegetariano';

export interface Photo {
  /** ID da foto no Unsplash (parte depois de "photo-") */
  id: string;
  /** Texto alternativo descritivo e único */
  alt: string;
}

export interface Dish {
  name: string;
  description: string;
  price: number;
  pieces?: string;
  tags?: Tag[];
  photo?: Photo;
}

export interface MenuCategory {
  id: string;
  label: string;
  /** Pratos com foto (cartões 4:5) */
  featured: Dish[];
  /** Demais itens da categoria, em lista de texto */
  more?: Dish[];
}

/** 0 = domingo ... 6 = sábado. null = fechado. Horários em "HH:MM" (fuso do restaurante). */
export type Hours = { open: string; close: string } | null;

export const restaurant = {
  name: 'Shiori', // DEMO
  fullName: 'Shiori Sushi', // DEMO
  tagline: 'Peixe do dia, arroz da casa, mão firme.', // DEMO
  city: 'Ilhéus', // DEMO
  neighborhood: 'Pontal', // DEMO
  /** Domínio próprio do cliente. Vazio = usa o endereço de produção da Vercel. */
  siteUrl: '', // DEMO (ex.: 'https://shiorisushi.com.br')
  timezone: 'America/Bahia', // DEMO
  foundedYear: 2014, // DEMO
  priceRange: '$$$',

  seo: {
    title: 'Shiori Sushi — Sushi em Ilhéus', // DEMO
    description:
      'Sushi de balcão no Pontal, em Ilhéus. Peixe fresco todos os dias, arroz temperado na casa e pedidos pelo WhatsApp. Reserve sua mesa.', // DEMO
  },

  contact: {
    whatsapp: '5573998258544', // DEMO (somente números, com DDI e DDD)
    phone: '+55 73 3231-0000', // DEMO
    phoneHref: '+557332310000', // DEMO
    instagram: 'shiorisushi', // DEMO (sem @)
    address: {
      street: 'Av. Lomanto Júnior, 1200', // DEMO
      district: 'Pontal', // DEMO
      city: 'Ilhéus', // DEMO
      state: 'BA', // DEMO
      zip: '45654-000', // DEMO
      country: 'BR',
    },
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Av.+Lomanto+J%C3%BAnior%2C+1200+-+Pontal%2C+Ilh%C3%A9us+-+BA', // DEMO
    mapsEmbed:
      'https://www.google.com/maps?q=Av.+Lomanto+J%C3%BAnior,+1200+-+Pontal,+Ilh%C3%A9us+-+BA&output=embed', // DEMO
  },

  /** Índice 0 = domingo */
  hours: [
    { open: '12:00', close: '22:00' }, // DEMO domingo
    null, // DEMO segunda (fechado)
    { open: '18:00', close: '23:00' }, // DEMO terça
    { open: '18:00', close: '23:00' }, // DEMO quarta
    { open: '18:00', close: '23:00' }, // DEMO quinta
    { open: '18:00', close: '24:00' }, // DEMO sexta
    { open: '18:00', close: '24:00' }, // DEMO sábado
  ] as Hours[],

  /** Avaliações reais do Google. Deixe null para esconder a seção de prova social. */
  google: null as null | {
    rating: number;
    count: number;
    url: string;
    reviews: { author: string; text: string }[];
  },

  nav: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Combos', href: '#combos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Reservas', href: '#reservas' },
    { label: 'Contato', href: '#contato' },
  ],

  hero: {
    photo: {
      id: '1710945301326-d60727e4833a',
      alt: 'Niguiri de salmão erguido por hashis contra fundo preto, com luz lateral sobre o peixe',
    },
  },

  marquee: ['Peixe fresco todos os dias', 'Arroz temperado na casa', 'Feito à mão', 'Balcão de oito lugares'], // DEMO

  about: {
    label: 'Nossa história',
    title: 'Um balcão pequeno, um peixe por vez.', // DEMO
    paragraphs: [
      'O Shiori começou em 2014 como um balcão de oito lugares no Pontal. A ideia continua a mesma: comprar pouco, comprar cedo e servir o peixe no mesmo dia em que ele chega.', // DEMO
      'Cada peça é montada na hora, na frente de quem vai comer. O arroz é temperado com vinagre que preparamos aqui, em pequenas levas, e servido morno, como deve ser.', // DEMO
    ],
    photos: [
      {
        id: '1711991022613-63df8929f311',
        alt: 'Mãos do itamae fatiando um lombo de salmão com faca yanagiba sobre tábua de madeira',
      },
      {
        id: '1681270496598-13c5365730c8',
        alt: 'Chef finalizando um prato com hashis longos, em close sobre o balcão de madeira',
      },
    ] as Photo[],
    pillars: [
      { title: 'Origem do peixe', text: 'Salmão, atum e peixe branco recebidos toda manhã, de fornecedores que visitamos.' }, // DEMO
      { title: 'Arroz', text: 'Grão japonês, vinagre da casa e temperatura de mão. É metade de cada peça.' }, // DEMO
      { title: 'Técnica', text: 'Cortes feitos na hora, sem pressa e sem atalhos, por quem treinou anos para isso.' }, // DEMO
    ],
    stats: [
      { value: 12, suffix: '', label: 'anos de balcão' }, // DEMO
      { value: 900, suffix: '', label: 'peças montadas por noite' }, // DEMO
      { value: 8, suffix: '', label: 'lugares no balcão' }, // DEMO
    ],
  },

  /** Pedido montado na sacola do site e enviado como mensagem de WhatsApp */
  order: {
    payment: ['Pix', 'Cartão na entrega', 'Dinheiro'], // DEMO
    deliveryNote: 'A taxa de entrega depende do bairro e é confirmada no WhatsApp.', // DEMO
  },

  /** Títulos e textos curtos de cada seção */
  sections: {
    heroEyebrow: 'Sushi de balcão', // DEMO
    menu: {
      title: 'O que sai do balcão hoje.', // DEMO
      lead: 'Preços por porção. Monte seu pedido aqui e envie tudo de uma vez pelo WhatsApp.',
    },
    combos: {
      title: 'Para dividir à mesa.', // DEMO
      lead: 'Combinados fechados, montados na hora para retirada ou entrega.', // DEMO
    },
    gallery: { title: 'De perto, sem pressa.' }, // DEMO
    visit: { title: 'No Pontal, perto do mar.' }, // DEMO
  },

  signature: {
    label: 'Assinatura do chef',
    priceNote: 'por pessoa', // DEMO
    cta: 'Reservar o omakase',
    kanji: '鮨',
    name: 'Omakase do balcão', // DEMO
    description:
      'Dezesseis tempos escolhidos pelo itamae conforme o peixe do dia: niguiris, sashimis e uma sobremesa. Servido no balcão, peça por peça.', // DEMO
    details: ['16 tempos', 'Somente no balcão', 'Reserva antecipada'], // DEMO
    price: 289, // DEMO
    photo: {
      id: '1635451778386-e5778e66f61e',
      alt: 'Niguiri único sobre prato redondo de pedra escura, iluminado de lado em um balcão de madeira',
    },
    detail: {
      id: '1763943431214-275e64002f90',
      alt: 'Detalhe de niguiris de atum com gengibre e wasabi sobre prancha de madeira clara',
    },
  },

  menu: [
    {
      id: 'combinados',
      label: 'Combinados',
      featured: [
        {
          name: 'Combinado Kuro',
          description: 'Niguiris, uramakis e hossomakis do dia, montados pelo chef.',
          pieces: '16 peças',
          price: 89, // DEMO
          photo: { id: '1617196034796-73dfa7b1fd56', alt: 'Fileira de niguiris variados sobre placa quadrada de ardósia preta' },
        },
        {
          name: 'Combinado Salmão Selado',
          description: 'Niguiris de salmão maçaricado e uramakis com gergelim.',
          pieces: '18 peças',
          price: 98, // DEMO
          tags: ['Mais pedido'],
          photo: { id: '1583623025817-d180a2221d0a', alt: 'Niguiris de salmão selado com gergelim ao lado de uramakis e molho shoyu sobre pedra escura' },
        },
        {
          name: 'Combinado Gunkan',
          description: 'Gunkans de ovas, tamago e niguiris de peixe branco.',
          pieces: '14 peças',
          price: 92, // DEMO
          tags: ['Novo'],
          photo: { id: '1514190051997-0f6f39ca5cde', alt: 'Gunkans de ovas de peixe e niguiris de tamago enfileirados sobre folha verde' },
        },
      ],
      more: [
        { name: 'Combinado Vegetariano', description: 'Pepino, abacate, shiitake e tamago.', pieces: '16 peças', price: 69, tags: ['Vegetariano'] }, // DEMO
        { name: 'Combinado Kids', description: 'Hossomakis e uramakis sem cru.', pieces: '12 peças', price: 54 }, // DEMO
      ],
    },
    {
      id: 'sashimis',
      label: 'Sashimis',
      featured: [
        {
          name: 'Sashimi de salmão',
          description: 'Corte grosso, servido com wasabi ralado na hora.',
          pieces: '10 fatias',
          price: 62, // DEMO
          tags: ['Mais pedido'],
          photo: { id: '1675870791718-a12568cfef43', alt: 'Fatia espessa de sashimi de salmão erguida por hashis contra fundo escuro' },
        },
        {
          name: 'Moriawase',
          description: 'Salmão, atum, peixe branco e camarão do dia.',
          pieces: '15 fatias',
          price: 96, // DEMO
          photo: { id: '1772285283419-b34f42b4a4df', alt: 'Seleção de sashimis de salmão, atum e peixe branco arrumada em prato escuro' },
        },
        {
          name: 'Trio da casa',
          description: 'Salmão, atum e camarão, com niguiri de cortesia.',
          pieces: '12 fatias',
          price: 78, // DEMO
          photo: { id: '1791386809533-5c2e79e34665', alt: 'Sashimis e niguiris de salmão, atum e camarão sobre prato preto' },
        },
      ],
      more: [
        { name: 'Sashimi de peixe branco', description: 'Com ponzu cítrico e cebolinha.', pieces: '10 fatias', price: 58 }, // DEMO
        { name: 'Sashimi de atum', description: 'Atum vermelho em corte retangular.', pieces: '8 fatias', price: 72 }, // DEMO
      ],
    },
    {
      id: 'niguiris',
      label: 'Niguiris',
      featured: [
        {
          name: 'Niguiri de salmão',
          description: 'Arroz morno e salmão em corte diagonal.',
          pieces: '2 peças',
          price: 22, // DEMO
          photo: { id: '1637074930269-089fde202b57', alt: 'Dois niguiris de salmão sobre prato preto, com hashis apoiados ao lado' },
        },
        {
          name: 'Salmão maçaricado',
          description: 'Selado no maçarico e pincelado com tarê da casa.',
          pieces: '2 peças',
          price: 26, // DEMO
          tags: ['Novo'],
          photo: { id: '1711480023277-9f27496f10e6', alt: 'Itamae pincelando molho tarê sobre niguiri recém-maçaricado' },
        },
        {
          name: 'Niguiri de atum',
          description: 'Akami fresco com um toque de wasabi.',
          pieces: '2 peças',
          price: 28, // DEMO
          photo: { id: '1562707786-7d2b807961c4', alt: 'Niguiris de atum vermelho com guarnição de cebolinha, em close' },
        },
      ],
      more: [
        { name: 'Peixe branco com yuzu', description: 'Raspas cítricas e sal grosso.', pieces: '2 peças', price: 24 }, // DEMO
        { name: 'Ebi', description: 'Camarão cozido e aberto em borboleta.', pieces: '2 peças', price: 24 }, // DEMO
        { name: 'Tamago', description: 'Omelete doce japonês, feito na casa.', pieces: '2 peças', price: 16, tags: ['Vegetariano'] }, // DEMO
      ],
    },
    {
      id: 'temakis',
      label: 'Temakis',
      featured: [
        {
          name: 'Temaki de salmão',
          description: 'Alga crocante, arroz morno e salmão em cubos.',
          pieces: '1 unidade',
          price: 34, // DEMO
          tags: ['Mais pedido'],
          photo: { id: '1791386809517-60f40f5372dd', alt: 'Dois rolos de alga recheados com arroz e salmão sobre prato branco' },
        },
      ],
      more: [
        { name: 'Temaki de atum picante', description: 'Atum, pimenta togarashi e cebolinha.', pieces: '1 unidade', price: 38, tags: ['Picante'] }, // DEMO
        { name: 'Temaki skin', description: 'Pele de salmão crocante e molho tarê.', pieces: '1 unidade', price: 29 }, // DEMO
        { name: 'Temaki vegetariano', description: 'Pepino, manga, abacate e gergelim.', pieces: '1 unidade', price: 26, tags: ['Vegetariano'] }, // DEMO
      ],
    },
    {
      id: 'hossomakis',
      label: 'Hossomakis',
      featured: [
        {
          name: 'Hossomaki de salmão',
          description: 'O clássico fino, com salmão e alga nori.',
          pieces: '8 peças',
          price: 32, // DEMO
          photo: { id: '1617196034738-26c5f7c977ce', alt: 'Hossomakis de salmão enfileirados ao lado de garrafa de shoyu, em fundo escuro' },
        },
        {
          name: 'Hossomaki de atum',
          description: 'Atum vermelho com um fio de wasabi.',
          pieces: '8 peças',
          price: 36, // DEMO
          photo: { id: '1780291117619-c58ee7aa740e', alt: 'Prato de hossomakis com gengibre em conserva e hashis, sob luz baixa' },
        },
        {
          name: 'Kappa maki',
          description: 'Pepino japonês e gergelim tostado.',
          pieces: '8 peças',
          price: 22, // DEMO
          tags: ['Vegetariano'],
          photo: { id: '1548907368-35e5ea8cbc8a', alt: 'Hossomakis de pepino envoltos em alga, arrumados em prato claro' },
        },
      ],
      more: [
        { name: 'Hossomaki de kani', description: 'Kani e maionese japonesa.', pieces: '8 peças', price: 24 }, // DEMO
      ],
    },
    {
      id: 'uramakis',
      label: 'Uramakis',
      featured: [
        {
          name: 'Ebi tempurá roll',
          description: 'Camarão empanado, abacate e cobertura de salmão.',
          pieces: '8 peças',
          price: 52, // DEMO
          tags: ['Mais pedido'],
          photo: { id: '1582450871972-ab5ca641643d', alt: 'Uramaki coberto de abacate com camarão empanado saindo das pontas' },
        },
        {
          name: 'Filadélfia',
          description: 'Salmão, cream cheese e cebolinha.',
          pieces: '8 peças',
          price: 42, // DEMO
          photo: { id: '1558985212-92c2ff0b56e7', alt: 'Uramakis de salmão e cream cheese em prato escuro com hashis de madeira' },
        },
        {
          name: 'Salmão flambado',
          description: 'Uramaki selado na chama, com molho da casa.',
          pieces: '8 peças',
          price: 48, // DEMO
          tags: ['Novo'],
          photo: { id: '1761314025679-1bc4e2f6f7fe', alt: 'Uramakis sendo selados por uma chama alaranjada em fundo escuro' },
        },
      ],
      more: [
        { name: 'Skin roll', description: 'Pele de salmão crocante e tarê.', pieces: '8 peças', price: 38 }, // DEMO
        { name: 'Califórnia', description: 'Kani, manga e pepino.', pieces: '8 peças', price: 36 }, // DEMO
      ],
    },
    {
      id: 'entradas',
      label: 'Entradas',
      featured: [
        {
          name: 'Guioza',
          description: 'Pastel japonês de porco, selado na chapa.',
          pieces: '6 unidades',
          price: 34, // DEMO
          photo: { id: '1738681336104-608b4e7dc3b0', alt: 'Guiozas dourados na chapa servidos em prato preto sobre mesa de madeira' },
        },
        {
          name: 'Joe de salmão picante',
          description: 'Salmão com pimenta da casa sobre arroz.',
          pieces: '4 peças',
          price: 38, // DEMO
          tags: ['Picante'],
          photo: { id: '1712725214706-e564b8dd1bbe', alt: 'Duas peças de joe com salmão picado e molho vermelho apimentado' },
        },
        {
          name: 'Tataki de atum',
          description: 'Atum selado, ponzu e brotos frescos.',
          price: 46, // DEMO
          photo: { id: '1681270507609-e2a5f21969b0', alt: 'Tataki de atum com brotos sendo servido em prato branco de cerâmica' },
        },
      ],
      more: [
        { name: 'Missoshiru', description: 'Caldo de missô, tofu e cebolinha.', price: 14, tags: ['Vegetariano'] }, // DEMO
        { name: 'Edamame', description: 'Vagens cozidas com sal grosso.', price: 22, tags: ['Vegetariano'] }, // DEMO
        { name: 'Sunomono', description: 'Pepino agridoce com gergelim.', price: 18, tags: ['Vegetariano'] }, // DEMO
      ],
    },
    {
      id: 'bebidas',
      label: 'Bebidas',
      featured: [],
      more: [
        { name: 'Saquê da casa', description: 'Junmai, servido gelado.', pieces: '180 ml', price: 39 }, // DEMO
        { name: 'Saquê premium', description: 'Junmai daiginjo, garrafa.', pieces: '300 ml', price: 149 }, // DEMO
        { name: 'Chá verde gelado', description: 'Sencha preparado na casa.', pieces: '400 ml', price: 14 }, // DEMO
        { name: 'Cerveja japonesa', description: 'Lager importada.', pieces: '355 ml', price: 24 }, // DEMO
        { name: 'Água com gás', description: 'Garrafa.', pieces: '500 ml', price: 8 }, // DEMO
        { name: 'Refrigerante', description: 'Lata.', pieces: '350 ml', price: 9 }, // DEMO
      ],
    },
  ] as MenuCategory[],

  combos: [
    {
      name: 'Dupla',
      pieces: 30,
      price: 139, // DEMO
      includes: ['10 niguiris', '10 uramakis', '10 hossomakis', 'Shoyu, gengibre e wasabi'], // DEMO
      photo: { id: '1607301406259-dfb186e15de8', alt: 'Combinado de sushis em prato preto com pote de shoyu ao lado, vista de cima' },
    },
    {
      name: 'Kuro',
      pieces: 45,
      price: 199, // DEMO
      featured: true,
      includes: ['15 niguiris', '10 sashimis', '20 uramakis', '2 missoshirus'], // DEMO
      photo: { id: '1611143669185-af224c5e3252', alt: 'Mesa escura vista de cima com uramakis, niguiris e molhos arrumados para dividir' },
    },
    {
      name: 'Banquete',
      pieces: 70,
      price: 289, // DEMO
      includes: ['20 niguiris', '15 sashimis', '35 rolls variados', '4 guiozas'], // DEMO
      photo: { id: '1780236935125-0e730e303beb', alt: 'Barca de madeira com sushis, sashimis e makis variados' },
    },
  ],

  gallery: [
    { id: '1730900737644-e146f78db8e7', alt: 'Uramaki recheado de legumes preso entre hashis, isolado em fundo preto', span: 'tall' },
    { id: '1747471507235-5b5120a411cb', alt: 'Niguiri de camarão em macro sobre superfície de pedra, com luz quente', span: 'wide' },
    { id: '1675870791262-99ab4c09e2fd', alt: 'Pinça erguendo uma lâmina fina de salmão no escuro', span: '' },
    { id: '1635452065566-9c89471bb86c', alt: 'Caixa de madeira com cortes de atum e salmão prontos para o balcão', span: '' },
    { id: '1787504916858-ed4ee6f02348', alt: 'Itamae de uniforme escuro atrás do balcão, com sushis prontos à frente', span: 'tall' },
    { id: '1633478062482-790e3b5dd810', alt: 'Hashis levantando uma peça de sushi em prato preto', span: '' },
    { id: '1787589481636-a69533c81edb', alt: 'Uramakis cobertos de ovas laranja e fio de molho em prato claro', span: 'wide' },
    { id: '1761315413078-1fd73894fe0e', alt: 'Rolo de abacate empanado erguido por hashis sobre fundo verde-escuro', span: '' },
    { id: '1681270543584-8e541a1bb056', alt: 'Chef de uniforme montando pratos sobre a bancada de preparo', span: 'wide' },
    { id: '1563245370-cd55e7c95ff4', alt: 'Uramakis variados vistos de cima em tábua escura', span: 'wide' },
  ] as (Photo & { span: '' | 'tall' | 'wide' })[],

  reservation: {
    title: 'Reserve seu lugar no balcão.', // DEMO
    text: 'São oito lugares no balcão e algumas mesas no salão. Para grupos acima de 12 pessoas, fale com a gente pelo WhatsApp.', // DEMO
    note: 'Sua reserva será confirmada pela nossa equipe pelo WhatsApp.',
    slotMinutes: 30,
    /** Última reserva aceita X minutos antes do fechamento */
    lastSlotBeforeClose: 60,
    photo: {
      id: '1783192485640-7f3b9cec167e',
      alt: 'Balcão de madeira do salão com o chef preparando pequenas porções em tigelas',
    },
  },

  footer: {
    copyright: 'Shiori Sushi', // DEMO
  },
};

export type Restaurant = typeof restaurant;
